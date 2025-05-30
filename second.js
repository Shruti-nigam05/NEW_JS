// let coding = ["name", "vidhi", "friendName", "shruti"] 

// console.log(coding);

// const value = coding.forEach((item) => {
//       //item = item.toUpperCase();
//     console.log(item);
//     return item;
// });

// console.log(value); 

const books = [
    { edition: 2001, name: "Book 1", genre: "Fiction", publish: 2010 },
    { edition: 2014, name: "Book 2", genre: "Science", publish: 2012 },
    { edition: 2005, name: "Book 3", genre: "Fiction", publish: 2015 },
    { edition: 2010, name: "Book 4", genre: "History", publish: 2011 },
    { edition: 2018, name: "Book 5", genre: "Science", publish: 2013 },
    { edition: 2007, name: "Book 6", genre: "Mystery", publish: 2014 },
    { edition: 2014, name: "Book 7", genre: "Romance", publish: 2016 },
    { edition: 2001, name: "Book 8", genre: "Adventure", publish: 2017 },
    { edition: 2010, name: "Book 9", genre: "Fiction", publish: 2018 },
    { edition: 2018, name: "Book 10", genre: "Self-Help", publish: 2019 }
];
//console.log(books);

// let userBooks = books.filter((bk) => );
// console.log(userBooks);

userBooks = books.filter((bk) => bk.genre === "Fiction" && bk.edition <= 2014)

console.log(userBooks)


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newNums = myNums.filter((num) => num < 10);
let mapNum = myNums.map((num) => num + 10);

console.log(newNums);
console.log(mapNum);

