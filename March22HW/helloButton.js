var count = 0;
function increment(val) {
    count+=val;
    document.getElementById('counter').innerHTML
                = 'Count: '+this.count;
}
function invert() {
    count=-count;
    document.getElementById('counter').innerHTML
                = 'Count: '+count;
}
function reset() {
    count = 0;
    document.getElementById('counter').innerHTML
                = 'Count: '+count;
}