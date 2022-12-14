export module day_4 {
    console.log("Executing codes for day 4...")

    const fs = require('fs')
    const inputFile:string = fs.readFileSync('./day4/input.txt', 'utf-8')
    const inputLines = inputFile.split('\n')

    let countedPairs1 = 0 // count how many assignments pairs fully contain another
    inputLines.forEach((pairString:string) => {
        const [firstAssigned, secondAssigned] = pairString.split(',').map(e=>(e.split('-')).map(i=>parseInt(i)))
        //console.log("Debug: ", firstAssigned, secondAssigned)
        if (firstAssigned[0] <= secondAssigned[0] && firstAssigned[1] >= secondAssigned[1]) {
            countedPairs1++
        } else if (firstAssigned[0] >= secondAssigned[0] && firstAssigned[1] <= secondAssigned[1]) {
            countedPairs1++
        }
    })

    console.log("Part 1: ", countedPairs1)

    let countedPairs2 = 0 // count how many pairs overlap
    inputLines.forEach((pairString:string) => {
        const [firstAssigned, secondAssigned] = pairString.split(',').map(e=>(e.split('-')).map(i=>parseInt(i)))
        //console.log("Debug: ", firstAssigned, secondAssigned)
        if (firstAssigned[1] >= secondAssigned[0] && firstAssigned[0] <= secondAssigned[1]) {
            countedPairs2++
        } else if (secondAssigned[1] >= firstAssigned[0] && secondAssigned[0] <= firstAssigned[1]) {
            countedPairs2++
        }
    })

    console.log("Part 2: ", countedPairs2)
}