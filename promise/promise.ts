let stock = {
    fruits : [`🍏🍎`,`🍌`,`🍍`,`🍊`],
    liquids : [`milk`,`water`, `base`],
    holder : [`cone`,`cup`,`stick`],
    toppings: [`🍒`,`🍫`,`🥜`,`🍯🍈`]
}
var fruitChoice = 0;
var holderChoice = 0;
let isShopOpen = true;
let order = (time:any, work:any)=> {

    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(work())    
        }, time);
        if(isShopOpen){
        
    }

    else {
        reject(console.log(`Shop is closed`))
        
    }
    })
}

order(2000,()=>console.log(`${stock.fruits[fruitChoice]} was selected`))

.then(()=>{
    return order(0o0, ()=> console.log(`Production started..`))
})
.then(()=> {
    return order(2000, ()=> console.log(`${stock.fruits[fruitChoice]} was chopped`))
})
.then(()=>{
    return order(1000, ()=> console.log(`Adding ${stock.liquids[0]} and ${stock.liquids[1]}`))
})
.then(()=>{
    return order(1000,()=>{
    console.log(`starting the machine`);
    
        
    })
})

.then(()=> {
    return order(2000, ()=>{
        console.log(`You choose ${stock.holder[holderChoice]} `);
        
    })
})
.then(()=> {
    return order(3000, ()=>{
        console.log(` ${stock.toppings[0]} as your topping chosen`);
        
    })
})
.catch(()=> {
    console.log(`Customer's Gone`);
})
.finally(()=>{
    console.log(`Shop Closing Time`);
    
})
