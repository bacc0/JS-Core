function areaPerimeter(x, y) {
    let perimeter = x * y;
    let area = (x + y) * 2;
    
    console.log(Number(perimeter.toFixed(2)));
    console.log(Number(area.toFixed(2)));
}

areaPerimeter(2, 2);
areaPerimeter(1, 3);
areaPerimeter(2.5, 3.14);