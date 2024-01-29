const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>Welcome Page</title>
            </head>
            <body>
                <h1>Hello Northcoders!</h1>
                <p>Welcome to our website.</p>
            </body>
        </html>
    \`);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})