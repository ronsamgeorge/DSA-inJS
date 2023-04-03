// Brute force : iterate each element of removable -> remove that element from S -> run comparison between s and p until that iteration isn't a subsequence
// O(S*R)

// An optimized approach : Binary search on the removable array, remove elements in range removable[start, mid] from s, compare s and p, if its true then increase range, else reduce range
// O(S*Log(R))

var maximumRemovals = function (s, p, removable) {
  let start = 0;
  let end = removable.length - 1;
  let res = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    let compare = compareSeq(s, p, removable, mid);
    if (compare) {
      res = mid + 1;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return res;
};

const compareSeq = (s, p, removable, mid) => {
  const sArr = s.split("");

  // replacing the values
  for (let i = 0; i <= mid; i++) {
    sArr[removable[i]] = "?";
  }

  let sPointer = 0;
  let pPointer = 0;

  while (sPointer <= sArr.length) {
    if (p[pPointer] === sArr[sPointer]) {
      pPointer += 1;
    }

    if (pPointer >= p.length) {
      return true;
    }

    sPointer += 1;
  }

  return false;
};
