'use strict';

function countSameElements(collection) {
  const result = {};
  const keys = [];
  const pushItem = (key, value) => {
    !keys.includes(key) && keys.push(key);
    result[key] = result[key] ? result[key] + parseInt(value) : parseInt(value);
  };
  collection.forEach(item => {
      pushItem(item, 1);
  });
  console.log(keys.map(item => ({ key: item, count: result[item] })))
  return keys.map(item => ({ key: item, count: result[item] }));
}
