const chalk = require('chalk');
const fs = require('fs');

const DBURL = './database.json';

function writeData(data) {
    const jsondata = JSON.stringify(data);

    fs.writeFile(DBURL, jsondata, (err)=>{
        if (err) {
            console.log(chalk.bold.red('Failed To Write Data.'))
        }else{
            console.log(chalk.bold.green('Successfully Written!'))
        }
    })
}

module.exports = writeData;