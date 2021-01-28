const express = require('express')
const path = require('path')
const app = express()

let blog = [
  { 
    id: 1,
    name: "How to lose weight",
    text: "Run more ofter. Eat healthy, less stress",
    img: "https://images-prod.healthline.com/hlcmsresource/images/AN_images/woman-measuring-stomach-1296x728.jpg"
  },
  {
    id: 2,
    name: "How to Learn to Code",
    text: "Practise more than just watch! Avoid tutorial Hell.",
    img: "https://blog.hubspot.com/hubfs/00-Blog_Thinkstock_Images/learning-to-code.jpg"
  },
  {
    id: 3,
    name: "Vietnamese Tomato and Crab Noodle Soup",
    text: "What is life without amazing noodle soups? And if you’re talking about amazing, bun rieu is up there with the greats.In terms of Vietnamese noodle soups, Bun rieu is not as well known as pho or bun bo hue, but it’s a hidden gem maybe only you’ll know about among your friends: a time tested combination of al dente rice noodles, flavorful seafood and tomato soup, and intensely delicious and really pretty toppings. Think of it like a Vietnamese bouillabaisse.",
    img: "https://iamafoodblog.b-cdn.net/wp-content/uploads/2021/01/bun-rieu-recipe-0817.jpg"
  },
  {
    id: 213435,
    name: "Just How Does a NASCAR Pit Crew Work?",
    text: "What is life without amazing noodle soups? And if you’re talking about amazing, bun rieu is up there with the greats.In terms of Vietnamese noodle soups, Bun rieu is not as well known as pho or bun bo hue, but it’s a hidden gem maybe only you’ll know about among On race day, a routine stop begins when the team of six leaps over a short concrete wall into pit lane. They’ve then got 11.5 seconds to swap four tires out and refuel the car’s 12-gallon tank, assuming no additional repairs are needed.The team uses special tools that enable them to work quickly. Impact guns driven using compressed nitrogen help remove the five lugs on each wheel, and a special hydraulic jack lifts the car even as tire men are removing the old rubber. Need to patch up some bodywork or a vacuum hose under the hood? Duct tape earns its nickname of “200-mph tape” in this very sport.your friends: a time tested combination of al dente rice noodles, flavorful seafood and tomato soup, and intensely delicious and really pretty toppings. Think of it like a Vietnamese bouillabaisse.",
    img: "https://blogstorage.s3.amazonaws.com/uploads/pinax-images/None/5e0efb85-a467-4de3-a173-1f622b3f9bfe.jpg"
  },
  {
    id: 34,
    name: "McGregor - Poirier 2: How to bet on UFC 257",
    text: "What is life without amazing noodle soups? And if you’re talking about amazing, bun rieu is up there with the greats.In terms of Vietnamese noodle soups, Bun rieu is not as well known as pho or bun bo hue, but it’s a hidden gem maybe only you’ll know about among On race day, a routine stop begins when the team of six leaps over a short concrete wall into pit lane. They’ve then got 11.5 seconds to swap four tires out and refuel the car’s 12-gallonConor McGregor will fight in the Octagon on Saturday night for the first time in over a year. Can 'The Notorious' handle Dustin Poirier like he did in the first meeting or will the American underdog pull the upset?Just over 6 years after their first encounter, Poirier and McGregor are drawing a lot of hype for UFC 257.The two have 10 combined losses in 58 total fights, so, to say we are going to see a battle would be a drastic understatement. But, let's get to the main reason you are here: to bet and win some cash! tank, assuming no additional repairs are needed.The team uses special tools that enable them to work quickly. Impact guns driven using compressed nitrogen help remove the five lugs on each wheel, and a special hydraulic jack lifts the car even as tire men are removing the old rubber. Need to patch up some bodywork or a vacuum hose under the hood? Duct tape earns its nickname of “200-mph tape” in this very sport.your friends: a time tested combination of al dente rice noodles, flavorful seafood and tomato soup, and intensely delicious and really pretty toppings. Think of it like a Vietnamese bouillabaisse.",
    img: "https://blogstorage.s3.amazonaws.com/uploads/pinax-images/image-set-100626/39caa96e-c48f-424b-af5a-f772de0ce9ca.blob"
  },
]

blog.reverse();

// USE (uses * in each request)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))


// SET
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

// ROUTES
app.get('/', (req, res) => {
  res.render('home', { blog })
})

app.get('/blog', (req, res) => {
  res.render('blog/index', { blog })
})

app.get('/blog/create', (req, res) => {
  res.render('blog/create')
})

app.post('/blog', (req, res) => {
  const { name, text, img } = req.body;
  blog.unshift({ name, text, img })
  res.redirect('/blog')
})

app.get('/blog/:id', (req, res) => {
  const { id } = req.params
  const post = blog.find(p => p.id === parseInt(id))
  res.render('blog/post', { post })
})


// LISTEN PORT
app.listen(3000, () => {
  console.log('Listening on PORT: 3000')
})