'use strict';

function collectSameElements(collectionA, objectB) {
  var collectionC = new Array();
  var B = objectB.value;
  console.log(objectB.value);

  for(var i=0; i<collectionA.length; i++) {
    for(var j=0; j<B.length; j++) {
      if(collectionA[i] == B[j])
        collectionC.push(collectionA[i])
    }
  }
  return collectionC;
}
