const isAproved = 0;

if(isAproved === 0){
    console.log('You are approved!');
} else{
    console.log('You are not approved!');
}

if('0' == 0){
    console.log('OK! The string "0" is equal to the number 0 when using ==');    
} else{
    console.log('Failed!');
}

if('0' === 0){
    console.log('Failed!');    
} else{
    console.log('OK! The string "0" is not equal to the number 0 when using ===');
}
// Always use === to avoid unexpected type coercion


// ternary operator
const aVlue = 50;
const text = aVlue < 50 ? 'insuficient value' : 'suficiente value';
console.log(text); // suficient value

// nullish coalescing operator
const value = null;
const defaultValue = 'default value';
const result = value ?? defaultValue; // If value is null or undefined, use defaultValue
console.log(result); // default value

// Optional chaining operator
const obj = { a: { b: { c: 42 } } };
const valueC = obj?.a?.b?.c; // Safely access nested properties
console.log(valueC); // 42

// If any part of the chain is undefined or null, valueC will be undefined instead of throwing an error
const valueD = obj?.a?.b?.d; // Accessing a non-existent property
console.log(valueD); // undefined

// If obj is null or undefined, valueE will also be undefined
const valueE = obj?.x?.y?.z; // Accessing a non-existent property
console.log(valueE); // undefined

// If obj is null, valueF will also be undefined
const valueF = null?.a?.b?.c; // Accessing a property on null
console.log(valueF); // undefined

// If obj is undefined, valueG will also be undefined
const valueG = undefined?.a?.b?.c; // Accessing a property on undefined
console.log(valueG); // undefined


