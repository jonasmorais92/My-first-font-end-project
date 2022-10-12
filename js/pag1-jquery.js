$(function() {
    var selectAllHotel = $('#select-all');
    var selectHotel = $('.js-select-hotel');

    selectHotel.on('click',function() {
        var totalSelectedHotels = selectHotel.filter(':checked').length;
        var checked = selectHotel.length === totalSelectedHotels;

        selectAllHotel.prop('checked',checked);
    });

    selectAllHotel.on('click',function() {
        selectHotel.prop('checked', selectAllHotel.prop('checked'));
    })


});