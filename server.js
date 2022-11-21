const express = require('express')
const app = express()

app.use(express.static(`${__dirname}/index.html`))


app.listen(4000,
   () => console.log(`server running on 4000`)
)