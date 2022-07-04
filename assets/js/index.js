const close_window_city = () => {
    $(".first-run").toggleClass("hidden");
};

const next_slider = () => {
    let current;
    for (let i = 0; i < $(".banner .slider").length; i++) {
        if ($(".banner .slider")[i].classList.contains("selected")) {
            current = i;
            break;
        }
    }

    console.log(current);

    let next_slide = current+1;
    if (next_slide == $(".banner .slider").length) {
        next_slide = 0;
    }

    $($(".banner .slider")[current]).toggleClass("slide-out");
    $($(".banner .slider")[next_slide]).toggleClass("slide-in");
    $($(".banner .slider")[next_slide]).toggleClass("selected");

    $($(".circles div")[current]).toggleClass("selected");
    $($(".circles div")[next_slide]).toggleClass("selected");
}

$(".banner .slider").on("animationend", (e) => {
    //console.log(e);
    if (e.originalEvent.animationName == "slide-out") {
        $(e.target).removeClass("slide-out");
        $(e.target).removeClass("selected");
    }

    if (e.originalEvent.animationName == "slide-in") {
        $(e.target).removeClass("slide-in");
    }
});

$(document).click((event) => {
    if ((!$(event.target).closest('.domofon-position-block').length) && ($('.first-run.hidden').length == 0) || ($(event.target).closest('.domofon-position-block .close-btn').length) || ($(event.target).closest('.domofon-position-block .choise .yes-button').length)) {
      close_window_city();
    }        
});

$(".categories .abonents, .categories .client, .categories .company").click((event) => {
    $(".categories .abonents, .categories .client, .categories .company").removeClass("selected");
    $(".sub-abonents, .sub-client, .sub-company").removeClass("selected");
    $(".sub-" + event.target.className).toggleClass("selected");
    $(event.target).toggleClass("selected");
});



setInterval(next_slider, 5000);

