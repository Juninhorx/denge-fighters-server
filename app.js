import express from 'express'
import createUser from './routes/createUser.js'
import authLogin from './routes/login.js'
import createEvent from './routes/createEvent.js'
import subscribeevent  from './routes/subscribeEvent.js'
import getEvent from './routes/getEvent.js'
import cors from 'cors'

import getEventSubscribers from './controllers/getEventSubscribers.js';

const app = express()
const port = 3333

app.use(express.json())
app.use(cors({ origin: '*' }));
app.use('/createuser', createUser)
app.use('/login', authLogin)
app.use('/createevent', createEvent)
app.use('/getevent', getEvent)
app.use('/subscribeevent', subscribeevent)

app.get('/event/:eventId/subscribers', getEventSubscribers);

app.listen(port, console.log(`server on http://localhost:${port}`))