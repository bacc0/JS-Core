function lastMonth([day, mount, year]) {

    let date = new Date(year, mount - 1, 0);

    let days = date.getDate();

    console.log(days);
}

lastMonth([17, 3, 2002]);
