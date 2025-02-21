const express = require('express')
const app = express()
const port = 5000 || process.env.PORT
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Foddy Server is running...')
})

app.listen(port, () => {
  console.log(`Foddy app listening on port ${port}`)
})