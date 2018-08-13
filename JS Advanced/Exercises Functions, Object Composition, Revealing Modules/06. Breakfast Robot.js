let solution = (function () {
    let products = robot = {

        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    let products = {
        Apple: {
            carbohydrate: 1,
            flavour: 2
        },
        Coke: {
            carbohydrate: 10,
            flavour: 20
        },
        Burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        Omlet: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        Cheverme: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
    },
}

    return function (inputString) {
        let inputData = inputString.split(' ')
        let command = inputData[0]

        if (command === 'restock') {
            let microElement = inputData[1]
            let quantity = Number(inputData[2])

            robot[microElement] += quantity
        } else if (command === 'report') {
                console.log(`protein=${robot.protein} carbohydrates=${robot.carbohydrate} fat=${robot.fat} flavour=${robot.flavour}`)
        } else if (command === 'prepare') {
            let selectedProduct = inputData[1]  
            let selectedProductQuantity = Number(inputData[2])  
            let currentProductStats = products[selectedProduct]

            let canProductBeCooked = true

            for (let microElement in currentProductStats) {
                if (currentProductStats.hasOwnProperty(microElement)) {
                    let microElementQuantity = currentProductStats[microElement];
                    if (robot[microElement] < microElementQuantity * selectedProductQuantity){
                        anProductBeCooked = false
                        console.log(`Error: not enoght ${microElement} in stock`)
                        break
                    }
                }
            }
            if (anProductBeCooked){

                for (let microElement in currentProductStats) {
                    if (currentProductStats.hasOwnProperty(microElement)) {
                        let microElementQuantity = currentProductStats[microElement];
                        robot[microElement] -= microElementQuantity * selectedProductQuantity
                    }
                }
                console.log('Success');
            }
        }
    }
})();

solution('restock carbohydrate 10');
solution('restock flavour 10');
solution('prepare apple 1');
solution('restock fat 10');
solution('prepare burger 1');
solution('report');