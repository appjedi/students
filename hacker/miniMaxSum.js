

function miniMaxSum(arr)
{
    arr = arr.sort();
    const len = arr.length;
    let min = 0;
    let max = 0;
    for (let i = 0; i < len - 1; i++)
    {
        min += arr[i];    
    }
    for (let i = 1; i < len; i++)
    {
        max += arr[i];    
    }
    console.log(min, max);
}
const arr = [3, 1,5, 7, 9];
miniMaxSum(arr);