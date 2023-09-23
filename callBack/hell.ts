function carservice(){  
    console.log(`your car is being serviced`);
    setTimeout(() => {
        console.log(`Your car is ready to pick up`);
    }, 2000);
    groceres()

}
function groceres(){
    console.log(`Buying groceries`);
    getDress()
}
function getDress(){
    console.log(`going to pick dress up`);
    setTimeout(() => {
        console.log(`pick dressup`);
        event();
    }, 2000);
    
}





function event(){
console.log(`come back after picking dress up`);
setTimeout(() => {
    console.log(`attend event`);
    
}, 2000);
}
carservice();
export{};