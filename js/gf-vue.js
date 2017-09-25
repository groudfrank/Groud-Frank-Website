$(function(){
    
    var app2 = new Vue({
        el: '.last-updated',
        data: {
          message: 'You loaded this page on ' + new Date().toLocaleString()
        }
      });
});