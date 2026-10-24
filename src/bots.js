export function risk(player,opponent={actions:0,folds:0}){
 const danger=(3-player.lives)/2;
 const tendency=opponent.actions?opponent.folds/opponent.actions:0;
 return Math.max(.01,(.16+player.trait.ag*.23)*(1-danger*.8)+tendency*.04*(1-danger));
}
export function remember(players,index,type){const memory=players[index].memory;memory.actions++;if(type==='raise')memory.raises++;if(type==='fold')memory.folds++;}
