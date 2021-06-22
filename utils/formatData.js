const colorMap = require("./colorMap");


function formatData(item) {
    const dataArray = [];
    delete item.id;
    Object.keys(item).forEach(key => {

        const color = colorMap[key];

        dataArray.push(color ? color(item[key]) : item[key])

    });

    return dataArray;
}


module.exports = formatData;