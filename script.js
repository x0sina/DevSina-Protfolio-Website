//Change Theme Func
const html = document.documentElement.classList;
function theme(){
    if (html.contains("dark")){
        html.remove("dark");
    }
    else{
        html.add("dark");
    }
}
function clicked(){
    if (document.getElementById("nav-mobile").classList.contains("hidden")){
        document.getElementById("nav-mobile").classList.add("block");
        document.getElementById("nav-mobile").classList.remove("hidden");
    }
    else{
        document.getElementById("nav-mobile").classList.add("hidden");
        document.getElementById("nav-mobile").classList.remove("block");
    }
}