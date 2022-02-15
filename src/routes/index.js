const express = require('express')
const router = express.Router();


// routes
router.get('/', (req,res) =>{
    // res.sendFile(path.join(__dirname, 'views/index.html'))
    // si es un archivo ejs
    res.render('index.html', {title : "First Website"});
})
router.get('/contact', (req,res) =>{
    res.render('contact.html', {title : "Contact Page"});
})

module.exports = router;
