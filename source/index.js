import * as $ from 'jquery'
import Post from '@models/post'
import './sass/style.scss'
import webpackLogo from './img/webpack2.png'
// import xml from './data.xml'
// import csv from './trees.csv'
// import json from './jsonFile.json'

const post = new Post ('Webpack post title', webpackLogo)

$('pre').addClass('code').html(post.toString())

console.log('Post to String:', post.toString())

// console.log('JSON:', json)
// console.log('XML:', xml)
// console.log('CSV:', csv)