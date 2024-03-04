//gsap
// gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 })

// const animation = gsap.to(".photo:not(:first-child)", {
//     opacity: 1, scale: 1, duration: 1, stagger: 1
// })

// ScrollTrigger.create({
//     trigger: ".gallery",
//     start: "top top",
//     end: "bottom bottom",
//     pin: ".petax .right",
//     animation: animation,
//     scrub: true,
//     markers: false,
// })



$(".category-airline").click(function () {
    var id = $(this).attr("id");
    var toShow = "#show-" + id;
    console.log(toShow);
    $(".airline-content").not(toShow).hide();
    $(toShow).fadeIn("slow");
    $(".twox").show();

    if ($(".detail-refund").children().hasClass("open")) {
        $(toShow).removeClass("open").addClass("close-info").slideDown(function () {
            $('html, body').animate({
                scrollTop: $(".refund").offset().top + 20
            });
        });
        console.log("harus fade")
    }

    if ($(".detail-refund").children().hasClass("close-info")) {
        $(toShow)
            .removeClass("close-info")
            .addClass("open")
            .slideDown(function () {
                $("html, body").animate({
                    scrollTop: $(".refund").offset().top + 20,
                });
            });
        console.log("harus slide");
    }

    $('.detail-refund ul li.category-detail').removeClass("activeMenu");
    $('.detail-refund ul li.category-detail:first-child').addClass("activeMenu");
    // $('.wrapper-box').css("display","block");
    $('.wrapper-box').css("display", "none");
    $(toShow).children('.wrapper-box').first().css("display", "block")
});

$('.detail-refund ul li.category-detail').click(function () {
    var id = $(this).attr('id');
    var toShow = '#show-' + id;
    $('.wrapper-box').not(toShow).hide();
    $(toShow).fadeIn().removeAttr('hidden');
});

$('.detail-refund ul li.category-detail').click(function () {
    $('.detail-refund ul li.category-detail').removeClass("activeMenu");
    $(this).addClass("activeMenu");
});

$(".closer").click(() => {
    $(".airline-content").removeClass("open").addClass("close-info");
    // $(".twox").fadeOut();
    $(".airline-name").removeClass("bg-category");
    $(".airline-content") /*.fadeOut()*/
        .slideUp();
    $("html, body").animate({
        scrollTop: $(".contentx").offset().top + 20,
    })
});

$(".category-click .airline-name").click(function () {
    $(".category-click .airline-name").removeClass("bg-category");
    $(this).addClass("bg-category");
});



const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [
            'Paslon 1',
            'Paslon 2',
            'Paslon 3'
        ],
        datasets: [{
            label: 'Real Count',
            data: [58, 26, 16],
            backgroundColor: [
                'rgba(255, 99, 132,.4)',
                'rgba(54, 162, 235,.4)',
                'rgba(255, 205, 86,.4)'
            ],
            hoverOffset: 4
        }]
    },
    options: {
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// $('#pilpres-daerah').on('click', function (event) {
//     event.preventDefault()
//     // alert(1)
//     // // $(this).tab('show')
// })
setTimeout(() => {
    // $(".pilpres_daerah").not('.slick-initialized').slick()

}, 1000);
$(document).ready(function () {
    // ('.pilpres-daerah').slick('setPosition');
    // $('.pilpres_daerah').resize();
    // $('.pilpres_daerah').slick('unslick');

    $('.pilpres_daerah').slick();
});


$('#pills-tab .nav-item button').on('click', function (e) {
    // console.log(event);
    // // ('.pilpres-daerah').slick('setPosition', 0);
    // event.preventDefault()
    // $(this).tab('show')
    e.preventDefault();
    $('.nav-link').removeClass('active');
    $(this).tab('show');
})