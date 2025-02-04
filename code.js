//
//
//
//
//

function flip(array, n)
{
    var arrLen = array.length;
    var tmpArr = []; //probably not needed
    var flippedArr = [];
    var tmpNum; //probably not needed
    
    if(n<1)
    {
        return array;
    }
    else if(n >= (arrLen - 1))
    {
        /*
        for(var i=0, i<(arrLen - 1), i++)
            {
                tmpArr.push(array[i]);
            }
            */
        for(var j=(arrLen-1), j>=0, j--)
            {
                flippedArr.push(array[j]); //flip everything
            }
    }
    else
    {
           for(var k=(n-1), k>=0, k--)
            {
                flippedArr.push(array[k]); //push in the flipped elements first
            }
            for(var l=n, l<arrLen-1, l++)
            {
                flippedArr.push(array[k]); //push in the in-order elements after the flipped ones are pushed in
            }
    }
return flippedArr;
}



// Use only flip() here to manipulate the array
function pancakeSort(array)
{
    return array;
}
