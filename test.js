/**
 * Created by cr on 7/21/17.
 */
function getArrValue(arr,arrInput){
    let a=arrInput.join(',');
    arrInput=a.split('[');
    console.log(arr);
    console.log(a);
    console.log(arrInput);
    arr=arrInput;
    return arr;
}
function diffrence(arr1,arr2) {
    let arr1_1=[];
    let arr2_1=[];
    getArrValue(arr1_1,arr1);
    getArrValue(arr2_1,arr2);
    let arr=[];
    for(let i=0;i<arr1_1.length;i++){
        if(arr2_1.indexOf(arr1_1[i])===-1){
            arr.push(arr1_1[i].toString());
        }
    }
    for(let j=0;j<arr2_1.length;j++){
        if(arr1_1.indexOf(arr2_1[j])===-1){
            arr.push(arr2_1[j].toString());
        }
    }
    return arr;
}
let arr1=[1,2,3];
let arr2=[100,2,1,10];
console.log(diffrence(arr1,arr2));
let arr3=[1,2,3,4,5];
let arr4=[1,[2],[3,[[4]]],[5,6]];
console.log(diffrence(arr3,arr4));
let arr5=[1,2,3];
let arr6=[100,2,1,10];
console.log(diffrence(arr5,arr6));