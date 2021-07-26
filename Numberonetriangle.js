document.getElementById("button").addEventListener("click", numberonetriangle)
function numberonetriangle() {
    var i;
    var j;
    for (i = 0; i <= 5; i++) {
        document.write("</br>")
        for (j = 6-i; j <= 5; j++) {
            document.write("+")
        }
    }
}