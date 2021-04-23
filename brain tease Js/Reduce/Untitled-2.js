


function Book(title, author, subject, year){
        this.title = title;
        this.author= author;
        this.subject = subject
        this.year = year
}

const ourBook = new Book('ajebola', 'Dr Faseun', 'Yoruba', 2011)

let  newBook = new Book('programming', 'Adenegan', 'computer science', 1901)

Book.prototype.getAge = function(){
    const year = new Date().getFullYear()-this.year
    return `this book titled  ${this.title} is ${year} years  old`
}

let summary = newBook.getAge()

console.log(summary)

// console.log(ourBook)

Book.prototype.getFull = function (){
    return `this book titled ${this.title} was written by ${this.author} and the subject is ${this.subject}`
}

// console.log(ourBook.getFull())


// console.log(newBook.getFull())

// const dString = 'tope'
// console.log(dString.toUpperCase())

