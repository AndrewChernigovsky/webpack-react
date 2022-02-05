import * as $ from 'jquery';
import Post from '@models/post';
import './sass/style.scss';
import webpackLogo from './img/webpack2.png';
import './babel';
import React from 'react';
import { render } from 'react-dom';
// import xml from './data.xml'
// import csv from './trees.csv'
// import json from './jsonFile.json'

var post = new Post('Webpack post title', webpackLogo);

$('pre').addClass('code').html(post.toString());

console.log('Post to String:', post.toString());

// console.log('JSON:', json)
// console.log('XML:', xml)
// console.log('CSV:', csv)

var App = function App() {
    return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
            'h1',
            null,
            '23424234'
        ),
        React.createElement('hr', null),
        React.createElement('div', { className: 'logo' }),
        React.createElement('hr', null),
        React.createElement('pre', null)
    );
};

render(React.createElement(App, null), document.getElementById('app'));