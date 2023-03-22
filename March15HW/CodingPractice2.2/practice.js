const duplicate = [3, 1, 4, 1, 5, 9, 2, 6 ,5,3,5,9];
const noDuplicates = [... new Set(duplicate)]
for (const num of duplicate) {
    console.log(num + " in the duplicate section.");
}
for (const num of noDuplicates) {
    console.log(num + " in the no duplicate section.");
}
for(let i=1 ; i<13 ; i++){
    for(let j=1 ; j<13 ; j++){
        console.log(`${j} multiplied by ${i} is ${i*j}`);
        }
    }