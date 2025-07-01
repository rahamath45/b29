 //console.log("function")
  function calculator ( Operation,num1,num2)
    { if ( Operation =="+"){
         console.log("add=>", num1+num2)}
     else if( Operation =="-"){
        console.log( "sub=>" ,num1-num2 )}
        else if( Operation =="*"){
            console.log( "mul=>",num1*num2)
        }else{
            console.log( " not given operator")}}
        

calculator( "+",10,10);
calculator( "-",10,10);
calculator( "*",10,10);