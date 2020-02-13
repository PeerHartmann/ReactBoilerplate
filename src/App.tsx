import React from 'react';
import { message } from "./messages"
import image from "./img/octocat.png"
const style = {
    width: "200px"
}
export function App() {
    return <div><img style={style} src={image}></img></div>
}