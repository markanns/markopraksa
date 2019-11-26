let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {

    mainNav.classList.toggle('active');
});


$('#submit').click(function (e) {
    e.preventDefault();
    var first_name = $('#name').val();
    var last_name = $('#lastName').val();
    var phone = $('#phone').val();
    var email = $('#email').val();
    var subject = $('#sub').val();
    var msg = $('#message').val();

    $(".error").remove();

    if (first_name.length < 1 ) {
        $('#name').after('<span class="error" >Ovo polje je obavezno</span>');
       
        return false;
    }else if( last_name.length < 1){
        $('#lastName').after('<span class="error" >Ovo polje je obavezno</span>');
        return false;
    }
    else {
        var reg = /^[a-zA-ZČčĆćĐđŠšŽžАаБбВвГгДдЂђЕеЖжЗзИиЈјКкЛлЉљНнмМЊњОоПпРрСсТтЋћУуФфХхЦцчЧЏџШш\s]+$/;
        var validName = reg.test(first_name);
        if (!validName) {
            $('#name').after('<span class="error">Unesite ime u odgovarajucem formatu</span>');
            return false;
        }
    }
    if (phone.length < 1) {
        $('#phone').after('<span class="error">Ovo polje je obavezno</span>');
        return false;
    }
    if (email.length < 1) {
        $('#email').after('<span class="error">Ovo polje je obavezno</span>');
        return false;
    } else {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var validEmail = re.test(email);
        if (!validEmail) {
            $('#email').after('<span class="error">Unesite odgovarajucu email adresu</span>');
            return false;
        }

    }
    if (subject.length < 1) {
        $('#sub').after('<span class="error">Ovo polje je obavezno</span>');
        return false;
    }
    
    if (msg.length < 1) {
        $('#message').after('<span class="error">Ovo polje je obavezno</span>');
        return false;
    }
});  