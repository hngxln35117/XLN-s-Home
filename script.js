$(document).ready(function(){
    $('.burgermenu').on('click',
        function(){
            $('.mob-nav').slideToggle();
        })

       
})


$(document).ready(function(){
    $('.web-button').on('click',
        function(){
            $('.toggle-content').slideToggle();
        })

       
})


$(document).ready(function() {
    $('.dtl-button').on('click', function() {
        const target = $(this).data('target'); // 獲取對應內容
        $(target).slideToggle(); // 平滑顯示內容
    });
});

