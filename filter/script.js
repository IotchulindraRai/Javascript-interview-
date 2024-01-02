let arr=[1,2,3, 5,6,7,8];
const isEven =(x)=>{
    //return x%2; //odd
   // return x%2 === 0; ///even
    return x>3;

}
const even = arr.filter(isEven);
console.log(even);