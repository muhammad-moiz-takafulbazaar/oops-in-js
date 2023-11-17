// s1 is a primitive not an objet
const s1 = 'Hello'
// but when we use function is will wrap it in an object (eg: s2)
console.log(s1.toLowerCase()); // HELLO
console.log(typeof s1); // string
// s2 is an objet
const s2 = new String('Hello')
console.log(typeof s2); // object

// console.log(window); // window object ( it's an DOM object and only work with browser, not in node )

// object literals
const book1 = {
  title: 'Book One',
  author: 'John Doe',
  year: '2013',
  getSummary: function() {
    // console.log('🚀 ~ file: basic_literals.js:20 ~ this:', this);
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  // getSummary: () => {
  //     console.log("🚀 ~ file: basic_literals.js:20 ~ this:", this)
  //     return `${this.title} was written by ${this.author} in ${this.year}`
  // }
};

console.log(book1.getSummary());
