

console.log((`---------------Practicing types of arrays (how to manipulate them)---------------`));
let fruit_emoji:any = [`🍎`,`🍌`,`🍒`,`🍍`,`🍊`,`🥭`,`🍓`,`🥝`,`🍌`];
let food_emoji = [`🍕`,`🍔`,`🥓`,`🧀`,`🍿`,`🌭`,`🍟`,]
let numbers = [0,1,2,3,4,5,6,7,8,9]

console.log(`1. indexof()`);
console.log(`index of 🥝 is ${fruit_emoji.indexOf(`🥝`)}`);
console.log(`-----------------------------------------------`);
console.log(`2. lastIndexof(), used when we want to see if something is repeated, if so then where`);
console.log(`Last index of 🍌 is ${fruit_emoji.lastIndexOf('🍌')}`);
console.log(`-----------------------------------------------`);
console.log(`3. concat(), used when we want to combine two arrays`);
console.log(fruit_emoji.concat(food_emoji));
console.log(`-----------------------------------------------`);
console.log(`4. join(), joins all the elements of array with what we want to such as  " !! " `);
console.log(fruit_emoji.join(`!!`));
console.log(`-----------------------------------------------`);
console.log(`5. push(), used to add one or more elements to the end of an array`);
console.log(food_emoji.push(`🏁`,`🏴`));
console.log(food_emoji,"\nfood emojis after adding `🏁`,`🏴` ");
console.log(`-----------------------------------------------`);
console.log(`6. pop(), used to remove one or more elements from the end of an array`);
console.log(food_emoji.pop());
console.log(food_emoji,"\nfood emojis after removing last element ");
console.log(`-----------------------------------------------`);
console.log(`7. Reverse\n`);

console.log(`original array ${fruit_emoji}`);

console.log(`all the elements from first to last to last to first \n\t\t${fruit_emoji.reverse()}`);
console.log(`-----------------------------------------------`);
console.log(`8.includes(), does fruit emoji array inculde 🐉`);
console.log(fruit_emoji.includes('🐉'));

console.log(`-----------------------------------------------`);
console.log(`9.find, we can use this to find something in array or apply conditions,`);
console.log(numbers.find((n)=> n  !==0));

console.log(`-----------------------------------------------`);
console.log(`10.findIndex`);
//console.log(fruit_emoji.findIndex((`🍓`));

console.log(`-----------------------------------------------`);
console.log(`11.map`);
console.log(`${food_emoji.map((n)=> n+`🌝`)}`);

console.log(`-----------------------------------------------`);
console.log(`12.filter, following condition applied n%2 ===1`);
console.log(`${numbers.filter((n)=>n%2 ===1)}`);

console.log(`-----------------------------------------------`);
console.log(`13.reduce, acc+cur`);
console.log(`${numbers.reduce((acc:any,cur:any)=> acc+cur)}`);

console.log(`-----------------------------------------------`);
console.log(`14.every,n>6)`);
console.log(`${numbers.every((n)=> n>6)}`);

console.log(`-----------------------------------------------`);
console.log(`15.some,n>6)`);
console.log(`${numbers.some((n)=> n>6)}`);

console.log(`-----------------------------------------------`);
console.log(`16.at,takes  index value and returns element at that index)`);
console.log(`${fruit_emoji.at(-3)}`);










