//1
let car = {
    name: "Жегулька",
    age: 15,
    isMarid: false,
    owner: ["Amir" , "Shahram"],
    passport: {
        color: "blue",
        number: "Z777ZZ",
        year: 1999,
    }
}
let newcar = {
    name: "Кобалт",
    age: 14,
    isMarid: false,
    owner: ["Akbar" , "Zarruh"],
    passport: {
        color: "blue",
        number: "AA444A",
        year: 2010,
    }
}
//2
let newObject = Object.assign({}, car, newcar )
console.log(newObject);
//3
let key = Object.keys(newObject)
console.log(key);
//4
let values = Object.values(newObject)
console.log(values);
//5
let entries = Object.entries(newObject)
console.log(entries);
//6
let types = {
    string: [],
   number: [],
    object: [],
   boolean: []
}

entries.filter(element => {
    if (typeof element === "string") {
        types.string.push(element)
    } else if (typeof element === "number") {
        types.number.push(element)
    } else if  (typeof element === "object") {
        types.object.push(element) 
    }else if  (typeof element === "boolean") {
        types.boolean.push(element) 
    }
})
console.log(types);




