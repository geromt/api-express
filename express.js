const express = require('express')

const app = express()
app.disable('x-powered-by')

// Middleware que hace lo mismo que el de la línea 10
app.use(express.json())

// Middelware se ejecuta entre la petición y la respuesta
/* app.use((req, res, next) => {
  if (req.method !== 'POST') return next()
  if (req.headers['content-type'] !== 'application/json') return next()

  let body = ''

  req.on('data', (chunk) => {
    body += chunk
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    req.body = data // Mutamos la request
    next()
  })
}) */

const PORT = process.env.PORT ?? 3001

app.get('/', (req, res) => {
  res.status(200).send('<h1>Bienvenido a mi página web</h1>') // Automatically sets the Content-Type header to text/html
})

app.get('/image.png', (req, res) => {
  res.sendFile('image.png', { root: __dirname })
})

app.get('/about', (req, res) => {
  res.json({ message: 'Acerca de mí' })
})

app.post('/holi', (req, res) => {
  res.status(201).json(req.body)
})

// Debe de estar al final de todas las rutas
app.use((req, res) => {
  res.status(404).send('<h1>Error 404: Página no encontrada</h1>')
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
