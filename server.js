const express = require('express')
const app = express()
const articleRouter = require('./routes/article')


//passing HTML tags
app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

//getting route and sending rquest
app.get('/', (req, res)=>{
  const articles = [{
    title
  }]
  res.render('index',{articles : articles})
})

app.listen(5000)