//Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
//For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

function findNumbers(arr, sum) {
    seenArr = [];
    arr.forEach(num => {
        if(seenArr.includes(sum-num)) return true;
        seenArr.push(num);
         return false;
        })
}