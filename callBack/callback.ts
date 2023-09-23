function one(){
    console.log("step 1")
   two();
}

function two (){
    console.log("step 2");
}
one();