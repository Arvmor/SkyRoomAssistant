const buttons = document.querySelectorAll('a');
buttons.forEach(btn => {
    btn.addEventListener('mouseover', function(e){
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);
        setTimeout(() => {
            ripples.remove()
        },1000);
    })
})
document.querySelector("#clock").addEventListener("keyup", event => {
    if(event.key !== "Enter") return; // Use `.key` instead.
    document.querySelector("#btnAutoLogin").click(); // Things you want to do.
    event.preventDefault(); // No need to `return false;`.
});