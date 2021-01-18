const path = require("path")
const fs = require("fs")
const util = require("util")

const { render } = require("./renderPassword")


const pathName = path.resolve("data.json")
const write = util.promisify(fs.writeFile)

const readFile = util.promisify(fs.readFile)

;(async function (path) {

  const array = JSON.parse(await readFile(path, "utf8"))

  const [,,userName, userPassword] = process.argv

  let login;

  if(array.length > 0) {
    array.forEach((user, i) => {
    
      if (user.userName === userName && user.userPassword === render(userPassword)) {
        login = "Welcome"
      }
      else {
        login = "SignUp qiling"
      }
    })
  }
  else {
    console.log("SignUp qiling");
  }

  console.log(login);

})(pathName)

