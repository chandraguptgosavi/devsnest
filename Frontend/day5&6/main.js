// Write a JavaScript function to check whether an `input` is an array or not
const nums = [1, 'a', 'a', 'a', 66, 87];
const is_array = (array) => {
      return Array.isArray(array);
}
console.log(is_array(nums)); 
console.log(is_array("nums"));


// Write a JavaScript function to clone an array
const array_Clone = (array) => {
      return array.map((x) => x);
}
console.log(array_Clone(nums));


// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
const first = (array, n = 1) => {
      return array.slice(0, n);
}
console.log(first(nums, 4));


// Write a simple JavaScript program to join all elements of the following array into a string.
const join = (array, sep = '') => array.join(sep);
console.log(join(nums, ','));


// Write a JavaScript program to find the most frequent item of an array
const countFreq = (array) => {
      let map = new Map(), max = 0, ans;
      for (let i of array) {
            if (map.has(i)) {
                  map.set(i, map.get(i) + 1);
            }else map.set(i, 1);;
      }
      map.forEach((val, key) => {
            if (val > max) {
                  max = val;
                  ans = key;
            }
      });
      return ans;
}
console.log(countFreq(nums));