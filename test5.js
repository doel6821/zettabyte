/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
 const words = ['flower', 'flow', 'flight'];

 function result(words) {
   // Your Code Here
   prefix = ''
   for ( let i = 0 ; i < words[0].length ; i++ ) {
     let temp = ''
     let count = 0
     for ( let j = 1 ; j < words.length ; j++) {
       if ( words[0][i] == words[j][i] ) {
        temp = words[0][i]
        count += 1
        continue
       } 
     }
     if ( count == words.length -1 ) {
       prefix += temp
     }

   }
   return prefix
 }
 
 console.log(result(words));