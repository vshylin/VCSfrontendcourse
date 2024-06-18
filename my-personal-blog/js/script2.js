function loadContent(page) {

var filePath = "pages/${page}.html";

var ajax = new XMLHttpRequest();
ajax.open("GET", filePath, true)
ajax.onload = function (){
     //callback function
    if (ajax.status == 200) {
        const container = document.getElementById("main-content")
        if (container) {
            container.innerHTML = ajax.responseText;
        }
    }
};
ajax.onerror = function () {
    console.log("Error: " + ajax.statusText);
};
ajax.send;
}



