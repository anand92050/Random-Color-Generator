const randomCall = () =>{
    const randomNumber = Math.random();
    const randomColor=randomNumber*16777215;
    let clr='#'+Math.floor(randomColor).toString(16);
    document.body.style.backgroundColor = clr;
    document.getElementById('txt').innerText=clr;
}
document.getElementById('btn').addEventListener('click',randomCall);