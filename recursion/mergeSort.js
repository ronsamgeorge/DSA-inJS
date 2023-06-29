const mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);

  let first = mergeSort(arr.slice(0, mid));
  let second = mergeSort(arr.slice(mid, arr.length));

  return merge(first, second);
};

const merge = (first, second) => {
  let sorted = [];

  let i = 0;
  let j = 0;

  while (i < first.length && j < second.length) {
    if (first[i] < second[j]) {
      sorted.push(first[i]);
      i += 1;
    } else {
      sorted.push(second[j]);
      j += 1;
    }
  }

  // one of the array might not be finished
  while (i < first.length) {
    sorted.push(first[i]);
    i += 1;
  }
  while (j < second.length) {
    sorted.push(second[j]);
    j += 1;
  }

  return sorted;
};

const array = [53, 44, 0, -12, 1];
console.log(mergeSort(array));
