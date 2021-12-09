const foods = ["pancakes", "fish", "pickles", "pan fried dumplings"]

foodLike = foods.map((food) => {
    if (food === "pickles"){
    return `I don't like to eat ${food}`
    }
        return `I like to eat ${food}`
})

console.log(foodLike)