const chalk = require("chalk");
const Table = require("cli-table");
const formatData = require("../utils/formatData");
const getData = require("../utils/getData");

const reducer = (previousValue,currentItem)=>{
    if (currentItem.action === 'add') {
        return previousValue + Number(currentItem.amount);
    }else if(currentItem.action === 'rm' | currentItem.action === 'remove'){
        return previousValue - Number(currentItem.amount);
    }

    return previousValue;
}

function history() {
    const data = getData();
    const total = data.reduce(reducer,0)
    const table = new Table({
        head: [
            chalk.white('Action'),
            chalk.white('Products'),
            chalk.white('Date'),
            chalk.white("Amount"),
        ]
    });

    data.forEach(item => table.push(formatData(item)));

    table.push(['Total', '','', chalk.bold.whiteBright(total)])

    console.log(table.toString());
}

module.exports = history;