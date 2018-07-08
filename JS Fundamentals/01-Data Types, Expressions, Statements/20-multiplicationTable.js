function square(params) {

  if (params === 2) {
     console.log('+++');
     
  } else {
    let num = params - 2;

  let number = (params - 3) / 2;

  if (number / 2 === 0) {
    number -= 1;
  }
  console.log(`+${'-'.repeat(num)}+${'-'.repeat(num)}+`);

  for (let i = 0; i < Math.floor(number); i++) {
    console.log(`|${' '.repeat(num)}|${' '.repeat(num)}|`);
  }

  console.log(`+${'-'.repeat(num)}+${'-'.repeat(num)}+`);

  for (let i = 0; i < Math.floor(number); i++) {
    console.log(`|${' '.repeat(num)}|${' '.repeat(num)}|`);
  }

  console.log(`+${'-'.repeat(num)}+${'-'.repeat(num)}+`);

  console.log("");
  }

  
}



square(4);
square(5);
square(6);
square(7);