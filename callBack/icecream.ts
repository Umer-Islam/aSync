let stock = {
    fruits : [`🍏🍎`,`🍌`,`🍍`,`🍊`],
    liquids : [`milk`,`water`, `base`],
    holder : [`cone`,`cup`,`stick`],
    toppings: [`🍒`,`🍫`,`🥜`,`🍯🍈`]
}



let order = (fruitName:any,call_production:any)=> {

    setTimeout(() => {
        console.log(`Please prepare ${stock.fruits[fruitName]} ice cream`);
        call_production();
    }, 2000);
    
}

let production =()=> {

    setTimeout(() => {
        console.log(`order received starting production🏭`);
        setTimeout(() => {
            console.log(`the fruit has been chopped`)
            setTimeout(() => {
                console.log(`the ${stock.liquids[0]} and ${stock.liquids[2]} has been added.`);
                setTimeout(() => {
                    console.log(`The machine has been started.`);
                    setTimeout(() => {
                        console.log(`Please select your container`);
                        console.log(`${stock.holder[0]} 🍧 was randomly chosen for you.....😒, hope you like it else you are screwed..`);
                        setTimeout(() => {
                            console.log(`Random topping of ${stock.toppings[2] } was chosen for you, hopefully you like it ...`);
                            setTimeout(()=>{
                                console.log(`Please enjoy your icecream`);
                                
                            },5000)
                        }, 3000);
                        
                        
                        
                    },2000);
                    
                },1000);
            }, 1000);
            
        }, 2000);
    }, 0o0);

}



}
order(3,production);