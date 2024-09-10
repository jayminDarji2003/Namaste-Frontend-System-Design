const express = require('express')
const app = express()
const port = 3000

app.use((req,res,next)=>{
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self'" +   // it set that only load content from our site only
        "script-src 'self' 'nonce-randomKey' 'unsafe-inline'  https://cdnjs.cloudflare.com"   // it set that load all script from our site only and the given cdn link
    )
    next();
});

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})