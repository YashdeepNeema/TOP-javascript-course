// this is constructor function::

function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

const book1 = new Book('kuch', 'koi', 'kabhi');
const book2 = new Book('DeepWork', 'Cal Newport', '2018');

const book3 = Object.create(Book);
book3.author = 'Chris Baily';
book3.title = 'HyperFocus'


console.log(book3);

console.log(book3 instanceof Book)