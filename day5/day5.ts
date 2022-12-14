export module day_5 {
    console.log("Executing codes for day 5...")

    const fs = require('fs')
    const inputFile:string = fs.readFileSync('./day5/input.txt', 'utf-8')
    const inputFileLines = inputFile.split('\n')

    let stackInputLines = 0
    for (let i=0; i<inputFileLines.length; i++) {
        if (inputFileLines[i] == '') break;
        stackInputLines++
    }
    //console.log(stackInputLines)

    const numberInputLine = inputFileLines[stackInputLines-1].split('')
    const maxStackNumber = parseInt(numberInputLine[numberInputLine.length-2])
    //console.log(maxStackNumber)

    let originalCargoCrane:string[][] = Array(maxStackNumber).fill(Array()).map(array=>Array())
    for (let i=stackInputLines-2; i>=0; i--) {
        for (let j:number=0; j<maxStackNumber; j++) {
            //console.log(inputFileLines[i][1+4*j])
            const crate = inputFileLines[i][1+4*j]
            if (crate != ' ') originalCargoCrane[j].push(crate)
        }
    }
    //console.log(originalCargoCrane)

    let cargoCrane1 = originalCargoCrane.map(stack=>[...stack])
    let cargoCrane2 = originalCargoCrane.map(stack=>[...stack])

    for (let moveStringIndex=stackInputLines+1; moveStringIndex<inputFileLines.length; moveStringIndex++) {
        const moveStringArray = inputFileLines[moveStringIndex].split(' ')
        const movedCratesAmount = parseInt(moveStringArray[1])
        const movedFromStack = parseInt(moveStringArray[3])-1
        const movedToStack = parseInt(moveStringArray[5])-1

        let movedCrates:string[] = Array()
        for (let j=0; j<movedCratesAmount; j++) {
            const movedCrate1 = cargoCrane1[movedFromStack].pop() as string
            cargoCrane1[movedToStack].push(movedCrate1)

            const movedCrate2 = cargoCrane2[movedFromStack].pop() as string
            movedCrates.push(movedCrate2)
        }
        for (let j=0; j<movedCratesAmount; j++) {
            const movedCrate = movedCrates.pop() as string
            cargoCrane2[movedToStack].push(movedCrate)
        }
    }

    let topCrates1 = ""
    for (let stackIndex=0; stackIndex<maxStackNumber; stackIndex++) {
        const stack = cargoCrane1[stackIndex]
        topCrates1 += stack[stack.length-1]
    }
    console.log("Part 1: ", topCrates1)

    let topCrates2 = ""
    for (let stackIndex=0; stackIndex<maxStackNumber; stackIndex++) {
        const stack = cargoCrane2[stackIndex]
        topCrates2 += stack[stack.length-1]
    }
    console.log("Part 2: ", topCrates2)
}