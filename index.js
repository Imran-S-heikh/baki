#!/usr/bin/env node

const fs = require('fs');
const Table = require('cli-table');
const chalk = require('chalk');
const formatData = require('./utils/formatData');
const colorMap = require('./utils/colorMap');
const addNew = require('./functions/addNew');
const history = require('./functions/history');

const args = process.argv.slice(2);


if (args[0] === 'add' | args[0] === 'rm' | args[0] === 'remove' && !isNaN(args[1])) {
   addNew(args[1],args[0],args[2]);
}else if(args[0] === 'history'){
    history();
}


