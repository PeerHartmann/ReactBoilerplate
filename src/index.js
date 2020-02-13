import { message } from "./messages"
import image from "./img/octocat.png"
console.log(message);   
const img = document.createElement('img');
img.src = image;
img.width = 500
window.document.getElementsByTagName('body')[0].appendChild(img);