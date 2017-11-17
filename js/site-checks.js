$(document).ready(function(){
var val = 0;
var ie_visit = Window.sessionStorage.setItem("count", 0);

if(is.ie() && ie_visit.count == 0){
    window.location.href = "internet-explorer-sucks.html";
   };

if(is.chrome('<=45')){
    window.location.href = "obsolete-browser.html";
}

if(is.firefox('<=49')){
    window.location.href = "obsolete-browser.html";
}

if(is.ie('<=10')){
    window.location.href = "obsolete-browser.html";
}

if(is.safari('<=5')){
    window.location.href = "obsolete-browser.html";
}

});