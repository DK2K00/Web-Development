const text = ['rofl', 'lol', 'omg'];
const upper = text.map((t) => (t.toUpperCase()));


arr = [1,2,3,4,5,6,7,8,9,10];
const even = arr.filter(num => num % 2 === 0); 

const id = setInterval(() => (console.log("Interval: " + Math.floor(Math.random() * 6) + 1)), 1000);
setTimeout(() => (clearInterval(id)), 10000);

const sum = arr.reduce((acc, num) => (acc + num));

const movie = 
{
    name: "Avengers",
    year: 2019,
    rating: 10,

    sentenceStr() {
        console.log(`${this.name} is a movie released in ${this.year} which scored a rating of ${this.rating}`);
    }
};

let words = ["dog", "log", "sit"];
console.log(words.every((word) => (word.length === 3))); 

words.push("chair", "table");
console.log(words.some((word) => (word.length > 4)));

const narr = [5,10,12,34,53,66,87];
console.log(Math.max(...narr));

const[n1, n2, ...rest] = narr;
console.log(n1, n2, rest);
