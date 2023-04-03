// https://leetcode.com/problems/koko-eating-bananas/description/

// The brute force method is to start measuring the speed from 1/hr to maxInArray/hr

// when the first element that fits criteria , return element. O(range*ArrayLength)

// Better approach, use binary search to minimize search range : O(log(range)*ArrayLength)

// Useful tip learned  : Use ceiling to find hours to eat a particular pile
var minEatingSpeed = function (piles, h) {
  let time = 0;
  let s = 1;
  let e = Math.max(...piles);
  let res = -1;

  while (s <= e) {
    let mid = Math.floor((s + e) / 2);

    time = timeToFinishPile(piles, mid);

    if (time <= h) {
      res = mid;
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }

  return res;
};

const timeToFinishPile = (piles, mid) => {
  let t = 0;

  for (let i = 0; i < piles.length; i++) {
    // take the ceiling of the division to get how many tries it takes to finish banana pile at that index.
    t += Math.ceil(piles[i] / mid);
  }

  return t;
};
