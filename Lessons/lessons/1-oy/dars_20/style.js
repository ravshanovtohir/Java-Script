let i = 0
createId = () => ++i
createTime = () => Date.now()
createPasword = () => Math.floor(Math.random() * 10000000)
module.exports = { createId, createTime, createPasword }