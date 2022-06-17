const hero = document.querySelector(".hero");
const y = document.getElementsByTagName(img);
const seo = document.getElementsByClassName('.seo')


// function catClick(){
    // alert("Search Engine Optimization is awesome!")
// }

    var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;
    
    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
    
    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;
        
    function catClick() {
        window.open("http://www.w3schools.com", "", "width=200,height=100, top=' + top + ', left=' + left");
        }
    