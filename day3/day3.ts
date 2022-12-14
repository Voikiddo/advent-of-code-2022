export module day_3 {
    console.log("Executing codes for day 3...")

    const fs = require("fs")
    const inputFile:string = fs.readFileSync("./day3/input.txt", "utf-8")
    const inputLines = inputFile.split("\n")
    const allLetters = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    // Part 1
    const findDuplicatedItem = (items:string) => {
        const firstRucksack = items.substring(0, items.length/2)
        const secondRucksack = items.substring(items.length/2, items.length)

        const uniqueItemsInFirst = [...new Set(firstRucksack.split(""))]
        for (let itemId in uniqueItemsInFirst) {
            if (secondRucksack.indexOf(uniqueItemsInFirst[itemId]) !== -1) return uniqueItemsInFirst[itemId]
        }

        return ""
    }

    let sumItemPriorities = 0
    inputLines.forEach((items) => {
        const duplicatedItem = findDuplicatedItem(items)
        sumItemPriorities += allLetters.indexOf(duplicatedItem)
        //console.log("Log: ", items, " ", sumPriorities)
    })

    console.log("Part 1: ", sumItemPriorities)

    // Part 2
    const findBadge = (firstRucksack:string, secondRucksack:string, thirdRucksack:string) => {
        const uniqueItemsInFirst = [...new Set(firstRucksack.split(""))]
        for (let itemId in uniqueItemsInFirst) {
            const item = uniqueItemsInFirst[itemId]
            if (secondRucksack.indexOf(item) !== -1 && thirdRucksack.indexOf(item) !== -1)
                return item
        }
        return ""
    }

    let sumBadgePriorities = 0
    for (let group=0; group<inputLines.length/3; group++) {
        const firstRucksackId = group * 3;
        const badge = findBadge(inputLines[firstRucksackId], inputLines[firstRucksackId+1], inputLines[firstRucksackId+2])
        sumBadgePriorities += allLetters.indexOf(badge)
    }

    console.log("Part 2: ", sumBadgePriorities)
}