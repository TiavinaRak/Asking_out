// get html element by its id
function id(id) {
    return document.getElementById(id)
}

//waiting for the page to load
window.onload = () => {
const btn = id("move");
const img = id("img");
const msg = id("msg");
const yes = id("accept");
var i = 0;

    // moving the No button if the mouse is over
    btn.addEventListener("mouseover",
    () => {

        // set the No button position to absolute
        btn.style.position = "absolute";
        let top = Math.random(0,0.5)*(window.innerHeight/2);
        let right = Math.random(0,0.5)*(window.innerWidth/2);
        
        // update the button with the new position
        btn.style.top = top + "px"
        btn.style.right = right + "px";
        // change the text and image when i == 30
        if (i == 30) {
                msg.innerHTML = "Say Yesssss!!!"
                img.setAttribute("src", "images/jpg/really.jfif");
                btn.style.position = "static";
        }
        i++; // update the counter
        //setTimeout(()=>{btn.style.position = "static"}, 1000)
        //btn.style.left = Math.random()*800 + "px";
    });
    // when the button Yes is clicked
    //      hide both yes and no button
    //      change the text and image
    yes.addEventListener("click", ()=>{
        btn.style.display = "none";
        yes.style.display = "none";
        msg.innerHTML = `I'll text you for the time!`
        img.setAttribute("src", "images/gif/date.gif");
    })
}