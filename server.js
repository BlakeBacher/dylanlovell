const express = require('express')

const app = express();
app.use(express.static(`dylan.html`))

app.listen(3050)