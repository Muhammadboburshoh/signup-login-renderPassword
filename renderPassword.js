function render (password) {
  const passwordArray = password.split("")
  let newRender;
  let newPassword = ""
  passwordArray.forEach((password, i) => {
    newRender = password.toString().charCodeAt(0) ^ i.toString().charCodeAt(0)

    newPassword = newPassword + newRender.toString()
  })

  return newPassword
}

module.exports.render = render