const { v4: uuidv4 } = require('uuid');
const getData = require('../utils/getData');
const writeData = require('../utils/writeData');

function addNew(amount,action,title='NONE') {

    const data = getData();
    const id = uuidv4();
    const date = new Date();

    
    if (amount && action === 'add' | action === 'rm' | action === 'remove') {
        data.push({
            id: id,
            action: action,
            title: title,
            date: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`,
            amount: amount
        });
        
        writeData(data);
    }else{
        console.log('Invalid Arguments!');
    }
}

module.exports = addNew;