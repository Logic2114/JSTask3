 function checkDivisibilty(y){
       var myArray = [];
   
       for (var z = 1; z <= y; z++){
        
           if ((z % 2 === 0) && (z % 3 === 0) && (z % 5===0)){
               myArray.push("yu-gi-oh");
           }
            
           else if ((z % 2 === 0) && (z % 3 === 0)){
               myArray.push("yu-gi");
           }
            
           else if ((z % 2 === 0) && (z % 5 === 0)){
               myArray.push("yu-oh");
           }
            
           else if ((z % 3 === 0) && (z % 5 === 0)){
               myArray.push("gi-oh");
           }
            
           else if (z % 5 === 0){
               myArray.push("oh");
           }
            
           else if (z % 3 === 0){
               myArray.push("gi");
           }
            
           else if (z % 2 === 0){
               myArray.push("yu");
           }
           else {
               myArray.push(z);
           }
       }
       console.log(myArray);
       return(myArray);
   }
    checkDivisibilty(100);
    checkDivisibilty(48);