function loadContent(page) {
    if (page == "about") {
        document.getElementById("main-content").innerHTML = 
        "<object type='text/html' data='about.html'></object>";
    } else if (page == "contact") {
        document.getElementById("main-content").innerHTML = 
        "<object type='text/html' data='contact.html'></object>";
    } else {
        document.getElementById("main-content").innerHTML = 
        "<object type='text/html' data='projects.html'></object>";
    }
}