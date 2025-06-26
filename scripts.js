console.log("working")
let age=21
if(age<18){
    console.log( "minor")
}else if(age<25){
    console.log( "adluting")
}else{
    console.log("major")
}

for( let i=1;i<11;i=i+1)
    if( i%2==0){
        console.log( "number",i,"even")
    }else{
        console.log ( "number",i,"odd")
        
    }

    function greet( name,company){
        console.log(  " hi" +  name + " welcome to "+company);
    }

    greet(" nisha","guvi")
    greet( " ansari","gobal")