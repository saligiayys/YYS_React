//引入react核心库。脚手架都帮你安装好了
import React from 'react'
//引入ReactDOM。脚手架都帮你安装好了
import ReactDOM from 'react-dom'
//引入App组件。后缀.js以及jsx是可以省略的。但.css不能省略
import App from './App'

//渲染App到页面
ReactDOM.render(<App/>,document.getElementById('root'))
