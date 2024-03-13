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
    // console.log(toShow);
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
    $(".buttonx").removeClass('selected')
    $(".airline-content") /*.fadeOut()*/
        .slideUp();
    // $("html, body").animate({
    //     scrollTop: $(".contentx").offset().top + 20,
    // })
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
            label: 'Total Suara',
            data: [50.55, 50.55, 50.55],
            backgroundColor: [
                'rgba(255, 205, 86,.6)',
                'rgba(54, 162, 235,.6)',
                'rgba(255, 99, 132,.6)'
            ],
            borderColor: [
                'rgba(255, 205, 86,1)',
                'rgba(54, 162, 235,1)',
                'rgba(255, 99, 132,1)'
            ],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
        // indexAxis: 'y',
        // plugins: {
        //     title: {
        //         display: true,
        //         text: "Real Count KPU",
        //         color: "black",
        //         font: {
        //             family: "'Montserrat'", // Your font family
        //             size: 20,
        //             weight: "bold",
        //         },

        //         padding: {
        //             top: 10,
        //             bottom: 30,
        //         },
        //     },
        //     legend: {
        //         position: "bottom",
        //         labels: {
        //             font: {
        //                 family: "'Montserrat'",
        //             },
        //         },
        //     },
        // },

        animations: {
            x: {
                duration: 5000,
                from: 0
            },
            y: {
                duration: 3000,
                from: 500
            }
        },
        scales: {

            y: {
                beginAtZero: true,
                // title: {
                //     display: true,
                //     color: "black",
                //     text: "Pasangan Calon",
                //     font: {
                //         family: "'Montserrat'", // Your font family
                //         size: 14,
                //         weight: "bold",
                //     },
                //     padding: 20,
                // },
                // ticks: {
                //     color: "black",
                //     font: {
                //         family: "'Montserrat'", // Your font family
                //         size: 14,
                //     },
                // },
            },
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
    $('.pileg_daerah').slick();




});


$('#pills-tab .nav-item button').on('shown.bs.tab', function (e) {
    e.target
    e.relatedTarget
    setTimeout(() => {
        $('.pilpres_daerah').slick('setPosition');
    }, 10);
    
    
});

$('#pills-tab-2 .nav-item button').on('shown.bs.tab', function (e) {
    e.target
    e.relatedTarget
    setTimeout(() => {
        $('.pileg_daerah').slick('setPosition');
    }, 10);
    
});

// $('#pills-tab .nav-item button').on('click', function (e) {
//     // console.log(event);
//     // // ('.pilpres-daerah').slick('setPosition', 0);
//     // event.preventDefault()
//     // $(this).tab('show')
//     e.preventDefault();
//     $('.nav-link').removeClass('active');
//     $(this).tab('show');
// })

$('.category-click .category-airline .buttonx').on('click', function () {
    $('.buttonx').removeClass('selected');
    $(this).addClass('selected');
});


$('.kategori-item').click(function (event) {
    var id = $(this).attr('id');
    var toShow = '#show-' + id;

    $('.dashboard-content').not(toShow).hide();
    $(toShow).fadeIn();
    $(".info-klik").hide()
});

$(".closes").click(function () {
    $(".dashboard-content").hide()
})

// $(".to-peta").click(function () {
//     $('html,body').animate({
//         scrollTop: $(".mapsx").offset().top
//     },
//         600);
// })

$('.kategori-item').onclick = function () {
    $(this).focus();
};