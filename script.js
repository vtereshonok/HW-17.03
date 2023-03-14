function min(firstNum, secondNum) { 
if (firstNum < secondNum) { 
return firstNum 
} 
else if (secondNum < firstNum) {   
    return secondNum 
}
else { 
    return firstNum 
} 
} 
console.log(min(10, 5)) 
console.log(min(5, 10)) 
console.log(min(10, 10))   



function printEvenNumbers(firstNum, secondNum) { 
let maxNumber = 0; 
let minNumber = 0; 
if (firstNum > secondNum) { 
    maxNumber = firstNum 
    minNumber = secondNum 
} else if (firstNum > secondNum) { 
maxNumber = secondNum 
minNumber = firstNum 
} else { 
    console.log (числа равны) 
    return  
} 

for (let index = maxNumber; index >= minNumber; index--) { 
    if (index /2 == 0) { 
        console.log(index) 
    }
}
} 

printEvenNumbers(10, 20) 
printEvenNumbers(20, 10)
printEvenNumbers(10, 10) 



function power(firstNum, secondNum = 2) { 
    return firstNum**secondNum 
    } 
    
console.log(power(4)) 
console.log(power(2,3)) 
console.log(power(2,2)) 



function sum(n) { 
let sumofNumbers = 0; 

for (let index = 1; index <= n; index++) {
    sumofNumbers += index 
}  

return sumofNumbers 
}  
console.log(sum(3)) 
console.log(sum(30))  



function sumofoddAndEvenNums (n, m) { 
    let sumofodds = 0; 
    let sumofEvens = 0; 

for (let index = n; index <= m; index++) { 
    if (index /2 === 0) { 
        sumofEvens += index 
    } else {   
    sumofodds += index 
}
} 

console.log(sumofEvens) 
console.log(sumofodds)  
} 

sumofoddAndEvenNums(1,19) 



function getString(arr) {  
if (arr.length === 0) { 
    return null 
}  

let maxStr = arr[0]; 
for (let index = 0; index < arr.length; index++) { 
    if (maxStr.length < arr[index].length) {
        maxStr = arr[index] 
    } 
} 

console.log(maxStr) 
}   