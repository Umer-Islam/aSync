/*
1. get car oil changed
2. get groceries(can be done while car is being serviced)
3. get dress(cannot be done without car)
4. attend event(cannot be done without dress)
*/

function carService(repaired:any){
    console.log(`Mechanic has started working on your car`);
    
    setTimeout(() => {
        console.log("your car is ready to go.");
        getDress();
    }, 2000);
    getGroceries();
}

function getGroceries(){
    console.log(`Buying groceries`);
    attendEvent();
    
}

function getDress(){
    console.log(`Go for the dress`)

}

function attendEvent(){
    setTimeout(() => {
        console.log(`🌃 Attend the Event.🌆`);
        
    }, 2000);
}
carService(getGroceries);
export {};