"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  // algo
  let reves= num.split('').reverse().join('') ;
  var suma=0;
  for(let i=0; i<reves.length; i++){
  	suma=suma + reves[i] * 2**i;
  }
  return suma;
}

function DecimalABinario(num) {
  // tu codigo aca
  let binario=[]
  while (num !=0){
  	let bin=num%2;
  	num= Math.trunc(num/2);
  	binario.push(bin)
  }
  return binario.reverse().join('')
}

// No se pueden usar: 
// parseInt
// toString



module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
