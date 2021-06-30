
function solution(K, M, A) {
    var newAs = [],leaders = [];
    for(var x = A.length; x--;) {
        let segment = (A.slice(x, K + x)).map((val)=>++val)
        if (segment.length != K || A[x] > M) {
            continue
        }
        let c = 0, newA = A.slice(0)
        for(var i = x; i < (K + x); i ++) {
            newA[i] = segment[c++]
        } 
        newAs.push(newA)
    }
    for(var x = newAs.length; x--;) {
        let mostFrequeent = mostCommon( newAs[x].slice(0))
        let ocurrences =  newAs[x].filter((v) => (v === mostFrequeent)).length
        if (ocurrences > (A.length/2 )  && !leaders.includes(mostFrequeent)) {
            leaders.push(mostFrequeent)
        } 
    }
   return leaders.sort(function(a, b){return a-b});
}

function mostCommon(list) {
  var topCount = 0;
  var topKey = {}, keys={}
  list.forEach(function(item, val) {
    keys[item] = keys[item] + 1 || 1;
    if (keys[item] > topCount) {
      topKey = item;
      topCount = keys[item];
    }
  });
  return topKey;
}