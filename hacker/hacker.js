/*
https://www.youtube.com/watch?v=pVkHLciuank&list=PLSIpQf0NbcCltzNFrOJkQ4J4AAjW3TSmA&index=6
*/

const freeCodeCampBlog = new Map([
  ['name', 'freeCodeCamp'],
  ['type', 'blog'],
  ['writer', 'Tapas Adhikary'],
]);

//console.log(freeCodeCampBlog.get('type'));
freeCodeCampBlog.set('test', 'Someone else!');

//console.log(freeCodeCampBlog);

function countingSort(arr)
{
    const values = Array(100).fill(0);
    for (let num of arr)
    {
        values[num]++;    
    }
    return values;
}

function flipMatrix1()
{
    const matrix = [[112, 42, 83, 119], [56, 125, 56, 49], [15, 78, 101, 43], [62, 98, 114, 108]];
    console.log(matrix.length);
    let rowMax = 0;
    let colMax = 0;
    let rowMaxIndex = -1;
    let colMaxIndex = -1;
    for (let i = 0; i < matrix.length; i++)
    {
        if (matrix[0][i] > colMax)
        {
            colMax = matrix[0][i];
            colMaxIndex = i;
        }    
    }
    for (let i = 0; i < matrix.length; i++)
    {
        if (matrix[0][i] > colMax)
        {
            colMax = matrix[0][i];
            colMaxIndex = i;
        }    
    }
}
function flipMatrix() {
    const matrix = [[112, 42, 83, 119], [56, 125, 56, 49], [15, 78, 101, 43], [62, 98, 114, 108]];
    
    const arr = Array(matrix.length);
    const colIndex = parseInt(matrix.length/2);
    let idx = 0;
    for (let i = matrix.length-1; i >=0; i--)
    {
        arr[idx++] = matrix[i][colIndex];    
    }
    for (let i = 0;i< matrix.length; i++)
    {
        matrix[i][colIndex]=arr[i];    
    }
    idx = 0;
    for (let i = matrix.length-1; i >=0; i--)
    {
        arr[idx++] = matrix[0][i];    
    }
    for (let i = 0;i< matrix.length; i++)
    {
        matrix[0][i]=arr[i];    
    }
    return matrix[0][0]+matrix[0][1]+matrix[1][0]+matrix[1][1];
}


function palindromeIndex(s) {
    // Write your code here
    if (s == s.split('').reverse().join(''))
    {
        return -1;    
    }
    const letters = s.split("");
    const len = letters.length;
    for (let i = 0; i < len/2; i++)
    {
        const endIndex = len - 1 - i;
        if (letters[i] != letters[endIndex])
        {
            if (letters[i+1] != letters[endIndex])
            {
                return endIndex;
            } else {
                return i;
            }
       }    
    }
    return -1;
} 

console.log ( palindromeIndex("csbc"))
//console.log(flipMatrix());