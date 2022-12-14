export module day_2 {
    console.log("Executing codes for day 2...")

    const fs = require("fs")
    const inputFile:string = fs.readFileSync('./day2/input.txt', 'utf-8')
    const inputArray = inputFile.split("\n")

    // part 1
    const getScore1 = (enemyMove:string, myMove:string) => {  
        if (enemyMove === '') return 0

        const allEnemyMoves = ['A', 'B', 'C']
        const allMyMoves = ['X', 'Y', 'Z']

        var roughScore = allMyMoves.indexOf(myMove) - allEnemyMoves.indexOf(enemyMove)
        if (roughScore < 0) roughScore += 3

        switch (roughScore) {
            case 0:
                return 3 + allMyMoves.indexOf(myMove) + 1
            case 1:
                return 6 + allMyMoves.indexOf(myMove) + 1
            case 2:
                return allMyMoves.indexOf(myMove) + 1
        }

        return -1
    }

    var scoreCount1 = 0
    inputArray.forEach((e)=>{
        var moves = e.split(" ")
        scoreCount1 += getScore1(moves[0], moves[1])
    })

    console.log("Part 1: ", scoreCount1)

    // part 2
    const getScore2 = (enemyMove:string, myMove:string) => {  
        if (enemyMove === '') return 0

        const allEnemyMoves = ['A', 'B', 'C']
        const moveScore = allEnemyMoves.indexOf(enemyMove) + 1

        switch (myMove) {
            case 'Y':
                return 3 + moveScore
            case 'X':
                return (moveScore === 1 ? 3 : moveScore-1)
            case 'Z':
                return 6 + (moveScore === 3 ? 1 : moveScore+1)
        }

        console.log("Error in getScore2")
        return -1
    }

    var scoreCount2 = 0
    inputArray.forEach((e)=>{
        var moves = e.split(" ")
        scoreCount2 += getScore2(moves[0], moves[1])
    })

    console.log("Part 2: ", scoreCount2)
}