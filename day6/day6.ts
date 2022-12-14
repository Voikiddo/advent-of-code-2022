export module day_6 {
    const fs = require('fs')
    const inputFile:string = fs.readFileSync('./day6/input.txt', 'utf-8')

    const hasRepeated = (pack:string[]) => {
        for (let i=0; i<pack.length-1; i++) {
            for (let j=i+1; j<pack.length; j++) {
                if (pack[i]==pack[j]) return true
            }
        }

        return false
    }

    const findMarkerEnd = (message:string, markerLength:number) => {
        let pack = ['0']
        for (let i=0; i<markerLength-1; i++) pack.push(message[i])
        let letterId:number
        for (letterId=markerLength-1; letterId<message.length; letterId++) {
            pack = pack.filter((e, idx)=>idx!==0)
            pack.push(message[letterId])

            if (!hasRepeated(pack)) return letterId+1
        }
        return -1
    }

    console.log("Part 1: ", findMarkerEnd(inputFile, 4))
    console.log("Part 2: ", findMarkerEnd(inputFile, 14))
}