let arr=[ 1,2,3,4,5,6,7,8,9];
function findSum(x){
    let  sum=0;
    for(let i=0;i<arr.length;i++)
    {
        sum= sum + arr[i];
    }
    return sum;
}
console.log(findSum(arr));
 //solving normal wayto find sum of array



const Sum= arr.reduce((acc,curr) =>{
    acc = acc + curr;
},0);
console.log(Sum);
//outut is 45