console.log('test1', 1 && 0);
console.log('test2', 1 && "");
console.log('test3', 1 && null);
console.log('test3', 1 && undefined);
console.log('test4', 1 && -10);

console.log('test5', 0 && 1);

console.log('test6', -1 && 1);// 1 因为 Boolean() 0 与非零
console.log('test7', null && 1);

console.log('test9', 1 && 1);
console.log('test10', 1 && 12);
console.log('test11', 3 && true);
console.log('test12', 4 && {});

console.log('test11-2', 1 || 0);
console.log('test21-2', 1 || "");
console.log('test31-2', 1 || null);
console.log('test31-2', 1 || undefined);
console.log('test41-2', 1 || -10);

console.log('test51-2', 0 || 1);

console.log('test61-2', -1 || 1);
console.log('test71-2', null || 1);

console.log('test91-2', 1 || 1);
console.log('test10-2', 1 || 12);
console.log('test11-2', 3 || true);
console.log('test12-2', 4 || {});

console.log('test13-2', 0 && null && 0);
console.log('test13-2', 1 && 0 && null);

console.log('test13-2', 1 && true && {});
console.log('test13-2', 0 && true && []);

// && 都为真时ans= true,返回最后一个值通路，   有一个为假返回假值短路
// || 都为假时ans= false，返回值为最后一个假值通路效果， 有一个为真返回真值并短路。