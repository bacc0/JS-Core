function result() {

    let argumentsTypes = {}

    for (let i = 0; i < arguments.length; i++) {
         let argumentValue = arguments[i];
         console.log(`${typeof argumentValue}: ${argumentValue}`);

         if (! argumentsTypes.hasOwnProperty(typeof argumentValue)) {
            argumentsTypes[typeof argumentValue] = 0;
         }
         argumentsTypes[typeof argumentValue]++;
    }
        
        let sortedArr = [];

    for (const arType in argumentsTypes) {
        if (argumentsTypes.hasOwnProperty(arType)) {
            const element = argumentsTypes[arType];

            sortedArr.push([arType, element]);
        }
    }
       sortedArr = sortedArr.sort((a, b) => {
        return b[1] - a[1];
    });

    for (let i = 0; i < sortedArr.length; i++) {

         let element  = sortedArr[i];
         let argType  = element[0];
         let argCount = element[1];

         console.log(`${argType} = ${argCount}`);
    }
}
result('cat', 42, function () { console.log('Hello world!'); });