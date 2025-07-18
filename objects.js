const person = {
    name: 'Eduardo',
    age: 39,
    cpf: '12345678912',
    class: 'JavaScript'
}

console.log(person);

console.log(`Peron -> name: ${person.name}, age: ${person.age}, cpf: ${person.cpf}, class: ${person.class}`);

console.log(`First three digits of cpf: ${person.cpf.substring(0,3)}`);

function showInfoPerson(person, info){
    console.log(person[info]);
}

showInfoPerson(person, 'name');
showInfoPerson(person, 'phoneNumber');

person.phoneNumber = "+5567999999999";
showInfoPerson(person, 'phoneNumber');

const isDeleted = delete person.phoneNumber;
showInfoPerson(person, 'phoneNumber');
console.log(`type of isDeleted: ${typeof isDeleted}, value: ${isDeleted}`);


const isDeleted2 = delete person.phoneNumber;
showInfoPerson(person, 'phoneNumber');
console.log(`type of isDeleted2: ${typeof isDeleted2}, value: ${isDeleted2}`);

Object.defineProperty(person, "phoneNumber", {
  value: "123-4567",
  configurable: false
});

console.log(delete person.phoneNumber); // ❌ false
console.log(person.phoneNumber);        // ✅ "123-4567"