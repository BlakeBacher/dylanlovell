const express = require('express')

const app = express();
app.use(express.static(`${__dirname}/dylan.html`))

app.listen(3050)