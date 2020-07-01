// To import Modules

const fs = require('fs');

// To read a file synchronously ( Blocking way )

const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');

console.log(textIn);

// To write a file synchronously ( Blocking way )

const textOut = `This is a new file. Data in it as follows: ${textIn}`;

fs.writeFileSync('./txt/new-file.txt', textOut);

// To read a file in asynchronous way ( Non Blocking way )


fs.readFile('./txt/input.txt', 'utf-8', (err, data) => {
    
    console.log("Asynchronous data " + data);
    fs.writeFile('./txt/output-async.txt', data, err => {
        console.log("File was created successfully");
    })

});

//console.log("Asynchronous Call ", textInAsync);