const chalk = require("chalk");

function getHelp() {
    const helpText = `
        baki {${chalk.cyanBright('action')}:add|rm} {amount:number} {products:string|number}
        baki history
        baki help
    `

    console.log(helpText)
}

module.exports = getHelp;