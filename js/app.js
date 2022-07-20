$(document).ready(function () {

    // Start Dark Mod Btns

    $("#darkbtns").click("click",function() {

        if($(this).is(":checked")) {

            $("body").css({
                backgroundColor: "black",
            });

            $(".bgColors").css({
                backgroundColor: "#302c2c",
            });

            // $(".nav-link,.navbar-brand span,.textgreys,.textdarks").css({
            //     color: "#fff"
            // });

            $(".bgDarks").css({
                backgroundColor: "#ffff"
            });

            $(".textdarks").css({
                color: "#ffff"
            });
            
            $(".textgreys").css({
                color: "#fff"
            });

            $(".modTypes").text("Light").css({
                color: "#fff",
                fontWeight: "bold"
            });

            $(".borderColors").css({
                borderColor: "#fff"
            })

        } else {

            $("body").css({
                backgroundColor: "#fff",
                color: "#00000"
            });

            $(".bgColors").css({
                backgroundColor: "#f4f4f4",
            });

            $(".bgDarks").css({
                backgroundColor: "#000"
            })

            $(".textdarks").css({
                color: "black"
            });
            
            $(".textgreys").css({
                color: "grey"
            });

            $(".modTypes").text("Dark").css({
                color: "#000",
                fontWeight: "bold"
            });

            $(".borderColors").css({
                borderColor: "#000"
            })
        }
    });

    $(".darkModBtns").hide();

    // $(window).scroll(function() {
    //     let postitionTop = $(this).scrollTop();

    //     console.log(postitionTop);

    //     if(postitionTop >= 600) {
    //         $(".darkModBtns").show("clip");
    //     } else {
    //         $(".darkModBtns").hide("clip");
    //     }

    // });


    // End Dark Mod Btns
    
    // Start Header Section 

    // Start navbar 

    $(".navbarbuttons").click("click", function() {

        $(".navbarbuttons").toggleClass("crossxs");
    })
    // End navbar 

    // End Header Section
    
    // Start Footer Section 

    let today = new Date();
    
    let thisYear = today.getFullYear();

    $("#year").text(`${thisYear}`);

    // End Footer Section
});