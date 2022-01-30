import Post from './js/post'
import json from './jsonFile.json'
import './css/style.css'
import webpackLogo from './img/webpack2.png'

const post = new Post ('Webpack post title', webpackLogo)

console.log('Post to String:', post.toString())

console.log('JSON:', json)