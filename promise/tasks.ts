let thingsToDO = true;
let task = (time:any, work:any)=> {

    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(work())    
        }, time);
        if(thingsToDO){
        
    }

    else {
        reject(console.log(`Cannot do the tasks due to x, y, z............`))
        
    }
    })
}

task(2000,()=>console.log(`Mechanic has started working on your car`))

.then(()=>{
    return task(0o0, ()=> console.log(`Doing groceries`))
})
.then(()=> {
    return task(2000, ()=> console.log(`car is ready for Pickup`))
})
.then(()=>{
    return task(1000, ()=> console.log(`Go and get the dress`))
})
.then(()=>{
    return task(1000,()=>{
    console.log(`Prepare for the event`);
    
        
    })
})

.then(()=> {
    return task(2000, ()=>{
        console.log(`Attend the event`);
        
    })
})
.catch(()=> {
    console.log(`Cannot go to the event`);
})
.finally(()=>{
    console.log(`End of the day😊`);
    
})
