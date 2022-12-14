export module day_1 {
    console.log("Executing codes for day 1...")

    const fs = require('fs')
    const inputFile:string = fs.readFileSync('./day1/input.txt', 'utf8')
    const inputArray = inputFile.split("\n");
    
    // part 1
    var maxCaloriesPerElf:number = 0
    var thisElf:number = 0

    inputArray.forEach((calories) => {
        if (calories === "") {
            maxCaloriesPerElf = Math.max(maxCaloriesPerElf, thisElf);
            thisElf = 0
        } else {
            thisElf += parseInt(calories)
        }
    })

    console.log("Part 1: ", maxCaloriesPerElf)

    // part 2
    var top3CaloriesPerElf:number[] = [0, 0, 0]
    var lesserCaloriesIndex:number
    thisElf = 0

    inputArray.forEach((calories) => {
        if (calories === "") {
            top3CaloriesPerElf.push(thisElf)

            lesserCaloriesIndex = top3CaloriesPerElf.indexOf(Math.min.apply(null, top3CaloriesPerElf))
            top3CaloriesPerElf.splice(lesserCaloriesIndex, 1)
            
            thisElf = 0
        } else {
            thisElf += parseInt(calories)
        }
    })

    //console.log(top3CaloriesPerElf)
    const totalCaloriesOfTop3 = top3CaloriesPerElf.reduce((sum, calories) => {return sum+calories}, 0)
    console.log("Part 2: ", totalCaloriesOfTop3)
}