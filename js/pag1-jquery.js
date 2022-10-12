$(function() {
    var selectAllHotels = $('#select-all');
    var selectHotels = $('.js-select-hotel');

    function styleLineSelectHotel() {
        selectHotels.filter(':checked').parents('tr').addClass('js-style-line-select-hotel');
        selectHotels.filter(':not(:checked)').parents('tr').removeClass('js-style-line-select-hotel');
    }

    selectHotels.on('click',function() {
        var totalSelectedHotels = selectHotels.filter(':checked').length;
        var checked = selectHotels.length === totalSelectedHotels;

        selectAllHotels.prop('checked',checked);
    });

    selectAllHotels.on('click',function() {
        selectHotels.prop('checked',selectAllHotels.prop('checked'));

        styleLineSelectHotel()
    });

    selectHotels.on('change',function(evento) {
        styleLineSelectHotel()
    });


});