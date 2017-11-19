$(function(){
    var val = 0;
    var ie_visit = sessionStorage.setItem("count", 0);
    
    if(is.ie()){
        window.location.href = "internet-explorer-sucks.html";
        alert("IE count registered");
       };
    
    if(is.chrome('<=45')){
        window.location.href = "obsolete-browser.html";
    };
    
    if(is.firefox('<=49')){
        window.location.href = "obsolete-browser.html";
    };
    
    if(is.ie('<=10')){
        window.location.href = "obsolete-browser.html";
    };
    
    if(is.safari('<=5')){
        window.location.href = "obsolete-browser.html";
    };
})