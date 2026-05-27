//bigint
// let max=Number.MAX_SAFE_INTEGER
// console.log(max);
// const another =BigInt(11)
// console.log(another);

//nulloish op
let fav =0
//user=fav||10
user=fav??10
console.log(user);

//optional chaning
const person={
    name:"jatin",
    add:{
   city:0
    }
  ,

    age:465
}
// const city=person.add-p?person.city:"no"
const city=person.add?.city ??"no"
console.log(city);
