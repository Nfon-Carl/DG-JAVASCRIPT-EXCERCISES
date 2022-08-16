// 1) Function to check if Input is an Array

function is_Array(input){
    if(Array.isArray(input))
        return true;

    else
        return false;
}

console.log(is_Array([1,2,3,4]))
console.log(is_Array("hello Carl"))


// 2)  function to clone an array

function arrayClone(input){

    return input.slice();

}
console.log(arrayClone([1,2,3,4]))


// 3)  function to get the first n element of an array'

function firstN(input , n){

    if(n==null){
        return input[0]
    }

    if(n<0){
        input = [];
        return input;
    }

    return input.slice(0,(n))
}

 // 4) function to get the last n elements of an array.

 function LastN(input , n){

    if(n==null){
        return input.slice(-1)
    }

    if(n<0){
        input = [];
        return input;
    }

    return input.slice((n+1))
}

// 5 program to join all elements of an array into a string. 

function join(input,seperator){
        if (seperator === null)
        {
            input.join(',')
            return input
        }
    
        else{
            return input.join(seperator)
        }
        

}


//6 program which accept a number as input and insert dashes (-) between each two even numbers.