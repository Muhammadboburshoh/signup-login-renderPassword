const path = require("path")
const fs = require("fs")
const util = require("util");

const { render } = require("./renderPassword")

const pathName = path.resolve("data.json")
const write = util.promisify(fs.writeFile)

const readFile = util.promisify(fs.readFile)


;(async function (path) {

  const array = JSON.parse(await readFile(path, "utf8"))

  async function main (path) {

    const [,,userName, userPassword] = process.argv
  
    if(userName && userPassword) {

      const data = {
        userName: userName,
        userPassword: render(userPassword),
      }
    
      array.push(data)
    
      write(path, JSON.stringify(array))
    }
  }
  
  main(pathName)


  console.table(array)
})(pathName)

