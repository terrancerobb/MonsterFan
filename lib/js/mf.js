$(function() {
  var thisNav = $("nav.menu");
  var navLogo = $("nav.menu .logo");
  thisNav.waypoint({
    handler: function(event, direction) {
        thisNav.toggleClass('sticky', direction=='down');
        navLogo.toggleClass('stuckTitle', direction=='down');
        offset: 50;
    }
  });
});

$(document).ready(function() {
        var gety=function(a,y){y=0;do{y+=a.offsetTop}while(a=a.offsetParent);return y};
        $("a[href*=#]").each(function(h){
            if(h=this.hash)
                this.onclick=function(){
                $(document.body).animate({scrollTop:gety(document.getElementById(h.substring(1)))},400,function(){location.hash=h});
                return!1;
                };
        });
});