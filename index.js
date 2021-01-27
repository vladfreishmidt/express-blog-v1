const express = require('express')
const path = require('path')
const app = express()

let blog = [
  {
    name: "How to lose weight",
    text: "Run more ofter. Eat healthy, less stress",
    img: "https://images-prod.healthline.com/hlcmsresource/images/AN_images/woman-measuring-stomach-1296x728.jpg"
  },
  {
    name: "How to Learn to Code",
    text: "Practise more than just watch! Avoid tutorial Hell.",
    img: "https://blog.hubspot.com/hubfs/00-Blog_Thinkstock_Images/learning-to-code.jpg"
  },
  {
    name: "Vietnamese Tomato and Crab Noodle Soup",
    text: "What is life without amazing noodle soups? And if you’re talking about amazing, bun rieu is up there with the greats.In terms of Vietnamese noodle soups, Bun rieu is not as well known as pho or bun bo hue, but it’s a hidden gem maybe only you’ll know about among your friends: a time tested combination of al dente rice noodles, flavorful seafood and tomato soup, and intensely delicious and really pretty toppings. Think of it like a Vietnamese bouillabaisse.",
    img: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2021/01/bun-rieu-recipe-0817.jpg"
  },
]

// USE (uses * in each request)
app.use(express.static(path.join(__dirname, 'public')))


// SET
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

// REQUESTS
app.get('/', (req, res) => {
  res.render('home')
})

app.get('/blog', (req, res) => {
  res.render('blog', { blog })
})


// LISTEN PORT
app.listen(3000, () => {
  console.log('Listening on PORT: 3000')
})