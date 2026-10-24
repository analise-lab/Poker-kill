import {best,cmp} from './evaluator.js';
export function distribute(players,board,dealer){
 const wins=players.map(()=>0),caps=[...new Set(players.map(p=>p.total).filter(n=>n>0))].sort((a,b)=>a-b);
 let previous=0;
 for(const cap of caps){
  const contributors=players.map((p,i)=>({p,i})).filter(({p})=>p.total>=cap);
  const amount=(cap-previous)*contributors.length;previous=cap;
  if(contributors.length===1){wins[contributors[0].i]+=amount;continue;}
  const eligible=contributors.filter(({p})=>!p.fold);
  if(!eligible.length)throw Error('Pote sem jogador elegível');
  let key=null,winners=[];
  for(const {p,i} of eligible){const k=eligible.length===1?[0]:best([...p.cards,...board]);if(!key||cmp(k,key)>0){key=k;winners=[i]}else if(cmp(k,key)===0)winners.push(i)}
  winners.sort((a,b)=>((a-dealer-1+players.length)%players.length)-((b-dealer-1+players.length)%players.length));
  winners.forEach((i,n)=>wins[i]+=Math.floor(amount/winners.length)+(n<amount%winners.length?1:0));
 }
 return wins;
}
