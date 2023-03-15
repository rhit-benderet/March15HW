var count = 0;
function increment() {
    count++;
    document.getElementById('label').innerHTML
                = 'Count: '+this.count;
}
function decrement() {
    count--;
    document.getElementById('label').innerHTML
                = 'Count: '+count;
}
function reset() {
    count = 0;
    document.getElementById('label').innerHTML
                = 'Count: '+count;
}