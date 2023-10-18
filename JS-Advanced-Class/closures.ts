const newArray = [1, 2, 3, 4];

// BE CAREFUL WITH USING LET AND VAR HERE!! IF YOU USE VAR IT BECOMES A GLOBAL VARIABLE THAT YOU CAN ACCESS OUTSIDE OF THE FOR LOOP
// LET MAKES IT BLOCK SCOPED SO YOU CAN ONLY ACCESS IT FROM WITHIN THE FOR LOOP
for (var i = 0; i < newArray.length; ++i) {
    setTimeout(function() {
        console.log('I am at index' + i);
    }, 3000)
}

console.log("I is still here " + i);