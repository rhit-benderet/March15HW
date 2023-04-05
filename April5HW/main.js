const dice = {
    sides: 16,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}
    
console.log('Before rolling');

const roll = new Promise( (resolve,reject) => {
const n = dice.roll();
if(n > 3){
    setTimeout(()=>{resolve(n)},n*200);
} else {
    setTimeout(()=>reject(n),n*200);
}
});

roll.then(result => console.log(`I rolled a ${result}`) )
.catch(result => console.log(`Drat! ... I rolled a ${result}`) );

console.log('After the roll');