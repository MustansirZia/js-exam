/* 
For this test to pass, the input object should be returned and 
should have a property "key" added to it whose value should be equal to "lock". 
This key-value pair of key: "lock" should not show up 
in Object.keys, Object.entries, Object.getOwnPropertyDescriptor or the for ... in loop.
*/
function addProperties(input) {

}


/* 
For this test to pass, the input object should be returned and
should have a property "key" added to it who should have a constant value of "lock". 
That is, we shouldn't be able to change the value of "lock" 
by doing input.key = "something else". 
Please note you can't use Object.freeze().
*/
function addConstantProperty(input) {

}


/* 
For this test to pass, the returned object should be 
a shallow clone of the input.
*/
function shallowClone(input) {

}


/* 
For this test to pass, the returned object should be 
a deep clone of the input.
*/
function deepClone(input) {

}


/* Exports */
module.exports.addProperties = addProperties;
module.exports.addConstantProperty = addConstantProperty;
module.exports.shallowClone = shallowClone;
module.exports.deepClone = deepClone;