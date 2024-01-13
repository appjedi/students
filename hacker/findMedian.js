function findMedian(arr) {
    // Write your code here
    const len = arr.length;
    if (len % 2 === 0)
    {
        return;    
    }
    if (len < 1 || len > 1000001)
        return;

    arr.sort();
    if (arr[0] < -10000)
        return;
    if (arr[len - 1] > 10000)
        return;
    const mid = parseInt(arr.length / 2);
   
    return arr[mid];
}
//const arr = [5, 3, 1, 2, 4];
const arr=[0,1,2,4,6,5,3];
const midVal = findMedian(arr);
console.log(midVal);