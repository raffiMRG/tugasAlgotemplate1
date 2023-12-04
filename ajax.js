function kalkulator() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("content").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "ajax/kalkulator/kalkulator.html", true);
    xhttp.send();
    toggleSidebar();
    console.log("kalkulaator ok");
}