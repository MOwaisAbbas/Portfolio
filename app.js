let hambCheck = document.querySelectorAll("#hamb-check")[0];

const navNone = () => {
    hambCheck.checked = false;
}

//========================================================================
//============================SCROLL TO TOP ==============================
//========================================================================



let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if(pos > 60){
        scrollProgress.style.display = "grid"
    }else{
        scrollProgress.style.display = "none"
    }
    scrollProgress.addEventListener("click" , ()=>{
        document.documentElement.scrollTop = 0;
    })
    scrollProgress.style.background = `conic-gradient(#00a4c0 ${scrollValue}% , #fdfdfd ${scrollValue}%)`;

}
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

//============================================================================



