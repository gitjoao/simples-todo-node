const app = require('express')()
const bodyParser = require('body-parser')
const { v4: uuidv4 } = require('uuid');
const fs = require('fs')
const filePath = './lista.json'
const port = process.env.PORT || 8080
const todos = []
app.use([bodyParser.json(), bodyParser.urlencoded({extended: false})])

app.get('/', async (req, res) => {
    try {
        const fileBuffer = fs.readFileSync(filePath, 'utf-8')
        const todoJson = JSON.parse(fileBuffer)
        res.send(todoJson)
    } catch (error) {
        res.send('Ops! Crie seu primeiro TODO.')
    }
  
})

app.post('/', async (req, res) => {
    req.body['_id'] = uuidv4()

    todos.push(req.body)
    fs.writeFileSync(filePath, `${JSON.stringify(todos)}`)
    res.send(req.body)
})

app.listen(port, () => console.log('running...'))