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
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// Magazine constructor
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);

    this.month = month;
}

// inherit prototype
Magazine.prototype = Object.create(Book.prototype);

const mag1 = new Magazine("Mag One", "John Doe", "2018", "Jan");

console.log(mag1.getSummary())
