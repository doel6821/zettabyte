/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
 const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

 function result(numbers) {
    // Your Code Here
    numbers.sort()
    
    let mis = []
    for(var i = 1; i < numbers.length; i++) 
    {     
        if(numbers[i] - numbers[i-1] != 1) 
        {         
            var x = numbers[i] - numbers[i-1];
            var j = 1;
            while (j<x)
            {
                mis.push(numbers[i-1]+j);
                j++;
            }
        }
    }
    return mis
 }
 
 console.log(result(numbers));