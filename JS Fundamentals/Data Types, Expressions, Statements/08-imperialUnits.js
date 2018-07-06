function impeialUnits(input) {

    let foot = Math.floor(input / 12);
    let inches = input % 12;
    
    console.log(`${foot}'-${inches}"`);
}
impeialUnits(36)
impeialUnits(55)
impeialUnits(11)