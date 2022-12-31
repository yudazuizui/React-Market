const express = require('express')
const app = express()
const router = require('./router')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use('/api', router)

app.listen(5566, () => {
  console.log('服务器运行在5566端口')
})
