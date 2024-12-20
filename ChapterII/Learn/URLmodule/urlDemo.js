import url, { URLSearchParams } from 'url';
const urlString ='https://www.bing.com/search?q=Duck';
const urlobj=new URL(urlString);
console.log(urlobj);
const param=new URLSearchParams(urlobj);
console.log(param);