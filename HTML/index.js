 const arr=[ 1,2,3,4];
 console.log(" org arr",arr);
 arr.push(6,7);
 console.log(" after push",arr);
 arr.pop();
 console.log(" after pop",arr);
 arr.unshift(5,6); 
 console.log("after unshift",arr);
 arr.shift();
 console.log(" after shift",arr);
 const alphaArr=["s","r","t","e"];
 const alphaArrstr = alphaArr.join("");
 console.log(" join-string",alphaArrstr);
 const splitArr = alphaArrstr.split("");
 console.log(" split-arr",splitArr);
 const input = "praven";
 const inputarr = input.split("");
 for( let i=0;i<inputarr.length;i++ ){
   // console.log(inputarr[i]);
}

 //slice( stratindex,endindex)
 console.log( alphaArr.slice(1,2));
 //splice( stratvalue,deletevalue,add)
 console.log( alphaArr.splice(3,1,"o"));

 //mrf ( map,filter,reduce)
 const mrfarr =[ 2,3,4,5,6]
 mrfarr.map((value,index,accarr)=>{
      console.log("value",value)
      console.log("index",index)
      console.log("accarr",accarr)
 });

const filterarr = mrfarr.filter(( value,index,accarr)=>{
    return value !=5;
});
console.log(filterarr);


 const result = "guvigeek"
  const a = result.split("");
  for( let i=0;i<a.length;i++){
      console.log(a[i]);
  }
  
let i= "nisha";
let s= i.repeat(5,0);
console.log(s)

