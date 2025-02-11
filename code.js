// Kane Kriz
// UWYO COSC 3020
// 10 Feb 2025
//
//

//work in progress
function flip(array, n)
{
var arrLen = array.length;
//var tmpArr = []; //probably not needed
var flippedArr = [];
//var tmpNum; //probably not needed

if(n<=1)
{
    return array;
}
else if(n>=arrLen)
{
    /*
    for(var i=0, i<(arrLen - 1), i++)
        {
            tmpArr.push(array[i]);
        }
        */
    for(var j=(arrLen-1); j>=0; j--)
        {
            flippedArr.push(array[j]); //flip everything
        }
}
else
{
       for(var k=(n-1); k>=0; k--)
        {
            flippedArr.push(array[k]); //push in the flipped elements first
        }
        for(var l=n; l<arrLen; l++)
        {
            flippedArr.push(array[l]); //push in the in-order elements after the flipped ones are pushed in
        }
}

return flippedArr;
}


// Use only flip() here to manipulate the array - Note to Self, dont change this comment as it was here in the original file template
// also a good idea to keep it so I don't just forget it after not looking at this file for a while
function pancakeSort(array)
{
    var arrLen0 = array.length;
    
    for(var x = arrLen0-1; x>=1; x--)//loop iterates with number of indices in the array as the counter, x
    {
        
        var endElement = array[0]; //will this break if the array is empty []? Probably
        var endPos = 0;
        //needs both of the above vars or could be done with just one or the other? Something to think about
        for(var i=0; i<=x; i++)
        {
            if (array[i] > endElement)
            {
                endElement = array[i];
                endPos = i;
            }
        }

        //maximum element to the end of the current array, properly following pancakeSort as intended
        if(endPos != 0)
        {
            array = flip(array, endPos + 1);
        }
        array = flip(array, x);
    }

    return array;
}



/*
//tests
console.log(pancakeSort([100, 50, 25, 75, 10])); 
console.log(pancakeSort([8, 3, 6, 2, 9])); 
console.log(pancakeSort([1])); 
console.log(pancakeSort([2, 1]));
console.log(pancakeSort([]));
*/
