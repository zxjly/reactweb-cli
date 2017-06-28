/**
 * Created by JamesZhang on 2017/6/17.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router} from 'react-router-dom'

import Hello from './components/hello'

import './assets/styles/hello.less'

ReactDOM.render(
  <Router>
    <Hello/>
  </Router>,
  document.getElementById('app')
)

