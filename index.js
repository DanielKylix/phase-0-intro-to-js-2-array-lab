// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

const destructivelyAppendCat = (name) => {
    cats.push(name)
    console.log(cats)

}
destructivelyAppendCat('Ralph')
cats = ["Milo", "Otis", "Garfield"]

const destructivelyPrependCat = (name) => {
    cats.unshift(name)
    console.log(cats)
}
destructivelyPrependCat ('Bob')
cats = ["Milo", "Otis", "Garfield"]

const destructivelyRemoveLastCat = () => {
cats.pop()
console.log(cats)

}
destructivelyRemoveLastCat ()
cats = ["Milo", "Otis", "Garfield"]

const destructivelyRemoveFirstCat = () => {
cats.shift()
console.log(cats)

}
destructivelyRemoveFirstCat ()
cats = ["Milo", "Otis", "Garfield"]

const appendCat = (name) => {
   return [...cats,name]

}
appendCat('Broom')
cats = ["Milo", "Otis", "Garfield"]

const prependCat = (name) => {
   return [name,...cats]

}
prependCat('Arnold')
cats = ["Milo", "Otis", "Garfield"]

const removeLastCat = () => {
return cats.slice(0,2)
}
removeLastCat ()
const removeFirstCat = () => {
    return cats.slice(1)
    }
removeFirstCat ()