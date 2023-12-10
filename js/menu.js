function showMenu() {
    var x = document.getElementById("navigation");
    var header = document.getElementById("header");
    if (x.style.display == "" || x.style.display == "none") {
        x.style.display = "block";
        header.style.marginBottom = "0px"; 
    } else {
        header.style.marginBottom = "10px";
        x.style.display = "none";
    }
}