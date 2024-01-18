$('.card').on('click', function() {
    $('.detail').addClass("active");
})

$(".close-detail").on('click', () => {
    $(".detail").removeClass("active");
})

$(".menu-bar").on("click", () => {
    $('.sidebar').addClass('active');
})
$('.logo').on('click', () => {
    $('.sidebar').removeClass('active');
})