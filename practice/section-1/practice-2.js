'use strict';

function collectSameElements(collectionA, collectionB) {
  var collectionC = new Array();
  var B = collectionB.flat();
  console.log(B)
  for(var i=0; i<collectionA.length; i++) {
    for(var j=0; j<B.length; j++) {
      if(collectionA[i] == B[j])
        collectionC.push(collectionA[i])
    }
  }
  return collectionC;
}
