
const fs = require('fs')
const colors = require('colors')

const multiplicationTables = async (base = 1, list, limit) => {


  try {
    let result = '';

    for (let index = 1; index <= limit; index++) {
      result += `${base} * ${index} = ${index * base}\n`
    }

    fs.writeFileSync(`./output/table-${base}.txt`, result)

    if (list) {
      console.log(result)
    }

    return `table-${base}-txt created`
  }

  catch (err) {
    throw err
  }
}

module.exports = { multiplicationTables }