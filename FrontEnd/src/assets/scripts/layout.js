var months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
var layout = (function () {
    var switchNav = function () {
        if ($('body').hasClass('nav-show')) {
            $('body').removeClass('nav-show');
        } else { $('body').addClass('nav-show'); }
    }

    var enableOrDisableButton = function (elemObj, target) {
        if (elemObj !== "") {
            $(target).attr('disabled',false);
        }
        else { 
            $(target).attr('disabled',true); 
        }
    }
    return {
        switchNav: switchNav,
        enableOrDisableButton: enableOrDisableButton,
    }
})();

var KYCUtility = (function () {
    var applySignatureForTerm = function () {
        var sign = '<img src="../../assets/contents/images/signature.png" />';
        var getDate = new Date();
        $('#sign-img').html(sign);
        $('#sign-date .datesign').text(
            getDate.getDate() + '-' + months[getDate.getMonth()] + '-' + getDate.getFullYear()
        );
        $('#sign-date .timesign').text(
            (getDate.getHours() < 10 ? '0'+getDate.getHours() : getDate.getHours()) + ':' + 
            (getDate.getMinutes() < 10 ? '0'+getDate.getMinutes() : getDate.getMinutes()) + ':' + 
            (getDate.getSeconds() < 10 ? '0'+getDate.getSeconds() : getDate.getSeconds())
        );

        //Enable btn proceed
        if ($('#sign-img').html().length) {
            $('#sign-img').removeClass('not-sign');
            $('#btn-proceedterm,#btn-create,#btn-cancelcreate,#btn-confirminfo').prop('disabled', false);
        }
    }
    return {
        applySignatureForTerm: applySignatureForTerm
    }
})();

$(window).resize(function () {
    if ($(this).width() < 1092) { //992
        $('body').removeClass('nav-show');
    }
    else { $('body').addClass('nav-show'); }
})

$(document).ready(function(){
    $('.nav.flex-column li').on('click',function(){
        $(this).addClass('active');
    });
});