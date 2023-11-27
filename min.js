let btnscroll = document.getElementById('to-top');
window.onscroll = function () {

    if (scrollY >= 600) {
        btnscroll.style = "display:block"

    } else {
        btnscroll.style = "display:none"
    }
    btnscroll.onclick = function () {
        scroll({
            left: 0,
            top: 0,
            behavior: "smooth"
        })
    }
}