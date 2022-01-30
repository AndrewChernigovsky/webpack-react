import * as $ from 'jquery'
import Post from '@models/post'
import json from './jsonFile.json'
import './css/style.css'
import webpackLogo from './img/webpack2.png'
import xml from './data.xml'

const post = new Post ('Webpack post title', webpackLogo)

$('pre').html(post.toString())

console.log('Post to String:', post.toString())

console.log('JSON:', json)
console.log('XML:', xml)