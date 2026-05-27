// const arr=[1,2,3,4]
// console.log(arr.at(-2));

//object hasowm
let book={
    name:"jatin",
    class:1
}
console.log(book.hasOwnProperty("name"));
console.log(Object.hasOwn(book,"name"));

const stu=Object.create(null)
stu.name="jatin"
console.log(Object.hasOwn(stu,"name"));

