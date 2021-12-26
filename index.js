const data = require("./data");

//For the given JSON iterate over all for loops (for, for in, for of, forEach)

for (let i = 0; i < data.length - 1; i++) {
    console.log("Normal for loop", data[i]);
}

// For in will provide the Index
for (let el in data) {
    console.log("For IN  loop", el);
}

// For in will provide the each element in the loop
for (let el of data) {
    console.log("For of", el);
}

// forEach will loop all the elements

data.forEach((el) => console.log("ForEach loop", el));

// My Resume data

const myResume = [{
    name: "Muthukumaran",
    exp: "11 years",
    technology: {
        language: "JavaScript",
        framework: "React",
        backend: "NodeJs",
    },
    company: "BNP Paribas",
    database: ["Oracle", "MongoDb"],
}, ];