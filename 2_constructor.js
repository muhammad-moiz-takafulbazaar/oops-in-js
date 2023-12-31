// constructor (es5)
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    // console.log('Book initiated');

    this.getSummary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

// instantiate an object 
const book1 = new Book("Book One", "John Doe", "2013");
const book2 = new Book("Book Two", "Jane Doe", "2016");

console.log(book1.getSummary());
