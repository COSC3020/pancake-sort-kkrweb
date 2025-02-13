# Pancake Sort

There is an abstract data type (ADT) called a *pancake array*, which provides
the function `flip(array, n)`, which takes the top (first) $n$ items in the
array and "flips them over", i.e. reverses their order.

For example, if you called `flip([1, 2, 3, 4], 2)`, the result would
be the array  `[2, 1, 3, 4]`, because the order of the (first) top 2
elements in the array has been reversed.

If $n$ is larger than the number of items in the array, the entire array gets
reversed. The intuition for the name "pancake array" is that with a stack of
pancakes, you can insert a spatula at any point in the stack and use it to flip
over all pancakes above that point.

Implement a sorting function that will sort an array of pancakes such that the
smallest pancake is at the top. You may use only the `flip()` function to
manipulate the array. You may break ties arbitrarily. Test your new function;
I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`, but it only tests
`pancakeSort()`, not `flip()`.

Hint: Start by thinking about the calls to `flip()` required to move a *single*
element into its correct position.

## Runtime Analysis

What is the asymptotic runtime ($\Theta$) of your algorithm in terms of the
number of comparisons of pancakes? What is it in terms of the number of flips?
Add your answer to this markdown file.

//

Start Date: 4 Feb 2025
Response Added: 13 Feb 2025

Name: Kane Kriz

//

RESPONSE:
The asymptotic runtime of my pancake sorting algorithm is as follows:

In terms of the number of comparisons of pancakes, the asymptotic runtime of the algorithm can be seen via considering the for loop in pancakeSort where it iterates through x = arrLen0-1 to x >= 1. 
Each iteration of the loop makes approximately n comparisons to find the maximum element in the relevant, currently considered subarray.
Since there are n iterations of this above process, the total number of comparisons has an asymptotic runtime of Θ(n^2).
This quadratic runtime occurs due to the algorithm considering all elements to identify the maximum within each of the iterations.

In terms of the number of flips, the asymptotic runtime of the algorithm can be seen as of linear complexity, Θ(n).
The asymptotic runtime of the algorithm in this case is linear as in each iteration, the algorithm performs a maximum of two possible flips.
Following the correct implementation of pancakeSort, one of these flips is used to move the maximum element to the front of the array(flip(array, endPos + 1)).
The other flip has the purpose of moving an element to the correct position. (flip(array, x + 1). 
Due to this, the total number of flips in the worst case has an asymptotic complexity of Θ(n), as there are at most two flips per iteration.

//

Plagiarism Acknowledgement: I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

Resources Used, Citations:
Reviewed applicable in class notes and slides.

Was having trouble visualising pancake sort, along with its potential worst case handling. Used these sources to help remedy that:

“Sort Visualizer.” Sortvisualizer.com, 2025, www.sortvisualizer.com/pancakesort/. Accessed 13 Feb. 2025.

“Pancake Sorting.” Wolfram.com, Wolfram Research, Inc., 2025, mathworld.wolfram.com/PancakeSorting.html. Accessed 13 Feb. 2025.

This Cal Berkeley lecture was helpful at a couple spots:
Sandeep, Sai, and Venkatesan Guruswami. More Great Ideas in Theoretical Computer Science. https://people.eecs.berkeley.edu/~venkatg/teaching/15252-sp20/notes/sorting-pancakes.pdf. 2020. Accessed 13 Feb 2025


