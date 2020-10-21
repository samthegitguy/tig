function hello(var1, var2, callback) {
    callback(var1, var2 + 8);
}
hello(1, 3, function(add, add2) {
    let total = add + add2;
    console.log(total);
})