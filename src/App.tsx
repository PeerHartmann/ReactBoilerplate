import React from 'react';
import { message } from "./messages"
import image from "./img/octocat.png"
//import style from './App.module.css'

const style = require('./App.module.css')

export function App() {
    console.log(style);
    return <div>
        
        <div className={style.message}>{message}</div>
        <img className={style.image} src={image}></img>
        </div>
}