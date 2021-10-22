const fs = require('fs');
const path = require('path');
const IsJsonString = require('./isJsonString');

const DBURL = path.resolve(__dirname,'../database.json');

function getData() {
    const string = fs.readFileSync(DBURL,'utf-8');

   if (IsJsonString(string)) {
       return JSON.parse(string)
   }

   return []
}

module.exports = getData;