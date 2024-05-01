function onceASecond(){
let d = new Date();
let time = d.toLocaleTimeString();
console.log(time);
}
setInterval(onceASecond(),1000);

