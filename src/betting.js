export function canRaise(p,current,minRaise){return p.facedBet==null||current-p.facedBet>=minRaise}
export function raiseTarget(p,current,minRaise,target){
 const max=p.contribution+p.stack;
 if(!Number.isFinite(target)||!Number.isInteger(target))throw Error('Aposta inválida');
 if(target===max&&max<=current)return max;
 if(target>max||target<=current)throw Error('Aumento inválido');
 if(target<current+minRaise&&target!==max)throw Error('Aumento abaixo do mínimo');
 return target;
}
