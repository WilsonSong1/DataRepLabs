//Array of ages
const ages = [25, 31, 42, 77];

//Multiplying each number that is less than 70 by 2 using .map function
let d = ages.map((item)=>{
    if(item < 70 ){
        return item*2;
    }
    //If greater than 70 return the number as is
    else{
        return item;
    }
})

//Displaying output
console.log(d)