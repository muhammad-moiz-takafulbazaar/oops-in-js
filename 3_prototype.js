// constructor (es5)
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    // console.log('Book initiated');

    // this.getSummary = function () {
    //     return `${this.title} was written by ${this.author} in ${this.year}`;
    // };
}

// getSummary | prototype
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

// totalNumberOfYearTillPublish | prototype
Book.prototype.totalNumberOfYearTillPublish = function () {
    const totalYear = new Date().getFullYear() - this.year;
    return `${totalYear} years`;
};

// revise / change year | prototype
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revise = true;
}

// instantiate an object | prototype
const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2016');

console.log(book1);
book1.revise(2022);
console.log(book1);