const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.static(`${__dirname}/public`))
app.use(express.json())
app.use(cors())

const Rollbar = require('rollbar')

const rollbar = new Rollbar({
   accessToken: 'ed4ff7e596204629ac0441be23807482',
   captureUncaught: true,
   captureUnhandledRejections: true
})

rollbar.log('Hello world!')

let myObj = {
   string: 'It worked'
}

app.get('/api/cat', (req, res) => {
   rollbar.log('button hit')
   res.status(200).send(myObj)
})


app.listen(4000,
   () => console.log(`server running on 4000`)
)