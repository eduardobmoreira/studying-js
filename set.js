
const names = ['Eduardo', 'Eduardo', 'Ana', 'Scarlett', 'Scarlett'];

console.log('Original name list: ', names);

// const namesSet = new Set(names);
// const updatedNameList = [...namesSet];

const updatedNameList = [... new Set(names)];

console.log('The name list with no repetitions: ', updatedNameList);