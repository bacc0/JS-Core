function distanceOverTime(input) {
    let v1 = input[0] * 1000;
    let v2 = input[1] * 1000;
    let time = input[2] / 3600;

    let distance = Math.abs(v1 * time - v2 * time);
    console.log(distance);
}



distanceOverTime(['0', '60', '3600']);
distanceOverTime([11, 10, 120]);
distanceOverTime([5, -5, 40]);