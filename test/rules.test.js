import {test} from 'node:test';
import assert from 'node:assert/strict';
import {best,cmp} from '../src/evaluator.js';
import {distribute} from '../src/pots.js';
import {canRaise,raiseTarget} from '../src/betting.js';
import {risk,remember} from '../src/bots.js';
const cards=s=>s.split(' ').map(c=>({v:'23456789TJQKA'.indexOf(c[0])+2,s:c[1]}));
const player=(total,hand,fold=false)=>({total,cards:cards(hand),fold});
test('wheel, straight flush, full house from two trips, kickers',()=>{
 assert.deepEqual(best(cards('A♠ 2♥ 3♦ 4♣ 5♠ K♥ Q♦')),[4,5]);
 assert.deepEqual(best(cards('A♠ K♠ Q♠ J♠ T♠ 2♥ 2♦')),[8,14]);
 assert.deepEqual(best(cards('A♠ A♥ A♦ K♣ K♠ K♥ 2♦')),[6,14,13]);
 assert.ok(cmp(best(cards('A♠ A♥ K♦ Q♣ 9♠')),best(cards('A♦ A♣ K♥ J♠ 9♥')))>0);
});
test('three all-ins award independent main and side pots',()=>{
 const p=[player(100,'A♠ A♥'),player(200,'K♠ K♥'),player(300,'Q♠ Q♥')];
 assert.deepEqual(distribute(p,cards('2♣ 4♦ 7♥ 9♣ J♦'),0),[300,200,100]);
});
test('folded money remains in pot, excess bet returned',()=>{
 const p=[player(100,'A♠ A♥'),player(300,'K♠ K♥'),player(200,'Q♠ Q♥',true)];
 assert.deepEqual(distribute(p,cards('2♣ 4♦ 7♥ 9♣ J♦'),0),[300,300,0]);
});
test('odd chip goes to first winner clockwise from button',()=>{
 const p=[player(1,'2♠ 3♥'),player(1,'4♠ 5♥',true),player(1,'6♠ 7♥')];
 assert.deepEqual(distribute(p,cards('A♣ K♣ Q♣ J♣ T♣'),0),[1,0,2]);
});
test('uncalled excess is refunded after folds',()=>{
 const p=[player(300,'A♠ A♥'),player(100,'K♠ K♥',true)];
 assert.deepEqual(distribute(p,[],0),[400,0]);
});
test('minimum raise and short all-in validation',()=>{
 const p={stack:450,contribution:50};
 assert.equal(raiseTarget(p,100,100,200),200);
 assert.throws(()=>raiseTarget(p,100,100,150));
 assert.throws(()=>raiseTarget(p,100,100,501));
 assert.throws(()=>raiseTarget(p,100,100,NaN));
 assert.equal(raiseTarget({stack:100,contribution:50},100,100,150),150);
 assert.equal(raiseTarget({stack:20,contribution:50},100,100,70),70);
});
test('short raises do not reopen action, cumulative full raise does',()=>{
 assert.equal(canRaise({facedBet:100},150,100),false);
 assert.equal(canRaise({facedBet:100},200,100),true);
 assert.equal(canRaise({facedBet:null},150,100),true);
});
test('all five personalities reduce bluff risk with fewer lives',()=>{
 for(const ag of [.32,.58,.79,.44,.71]){
  const p={trait:{ag},lives:3};const a=risk(p);p.lives=2;const b=risk(p);p.lives=1;assert.ok(a>b&&b>risk(p));
 }
});
test('memory records observable actions only',()=>{
 const p=[{memory:{actions:0,raises:0,folds:0}}];remember(p,0,'raise');remember(p,0,'fold');
 assert.deepEqual(p[0].memory,{actions:2,raises:1,folds:1});
});
test('pots conserve chips for varied contribution caps',()=>{
 for(let i=1;i<80;i++){
 const p=[player(i,'A♠ A♥'),player(i*3,'K♠ K♥'),player(i*2,'Q♠ Q♥')];
 assert.equal(distribute(p,cards('2♣ 4♦ 7♥ 9♣ J♦'),i%3).reduce((a,b)=>a+b,0),i*6);
 }
});
