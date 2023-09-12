const mywork = new Worker("thread.js");

mywork.onMessage = event =>{
console.log("mywork");
}
