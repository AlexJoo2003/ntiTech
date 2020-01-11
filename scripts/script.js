var arrowVisible = false;
var arrow = $(".arrow");
scrollPos = 0;


$(document).ready(function(){

    $("#logo").fadeIn(2500);
    setTimeout(function(){
        var layer1 = $(".layer1");
        var layer2 = $(".layer2");
        var layer3 = $(".layer3");
        var scrollPos = $(document).scrollTop();
        $(document).mousemove(function( event ){
            var mouseX = event.pageX;
            var mouseY = event.pageY;
            layer3.css({top: (mouseY-$(window).height())/16, left: (mouseX-$(window).width())/9});
            layer2.css({top: (mouseY-$(window).height())/32, left: (mouseX-$(window).width())/18});
            layer1.css({top: (mouseY-$(window).height())/64, left: (mouseX-$(window).width())/36});
        });
        if ($(document).scrollTop() == 0 && arrowVisible == false){
            arrowAppear($(".arrow"));
        }
    }, 3000);

    $(document).on("scroll", function(){
        var scrollNew = $(document).scrollTop();
        if (scrollNew > 0 && scrollPos == 0){
           scrollTo("#air");
        }
        scrollPos = scrollNew;

        if (scrollNew == 0 && arrowVisible == false){
            arrowAppear($(".arrow"));
        }
        else if (scrollNew != 0 && arrowVisible == true){
            arrowDisappear($(".arrow"))
        }
    });

    arrow.hover(
        function(){
            if ($(document).scrollTop() == 0){
                arrow.animate({
                    width: "56px",
                    height: "56px",
                    left: "-=3px",
                    top: "87vh",
                    opacity: "1",
                }, 300);
            }
        },
        function(){
            if ($(document).scrollTop() == 0){
                arrow.animate({
                    width: "50px",
                    height: "50px",
                    top: "90vh",
                    opacity: "0.1",
                    left: "+=3px"
                }, 300);
            }
            else{
                arrowDisappear(arrow);
            }
        }
    );

    arrow.click(function(){
        scrollTo("#air");
        setTimeout(arrowDisappear(arrow), 1000);
    });
});

function scrollTo(elemID){
    $([document.documentElement, document.body]).animate({
        scrollTop: $(elemID).offset().top
    }, 1000);
}

function arrowAppear(arrow){
    arrowVisible = true;
    arrow.css({display: "block"});
    arrow.animate({
        opacity: "0.5",
        top: "87vh"
    }, 300);
    arrow.animate({
        opacity: "0.1",
        top: "90vh"
    }, 200);
}

function arrowDisappear(arrow){
    arrowVisible = false;
    arrow.animate({
        opacity: "0",
        top: "100vh",
        display: "none"
    }, 1000);
}
