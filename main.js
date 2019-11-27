let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {

    mainNav.classList.toggle('active');
});


// $('#submit').click(function (e) {
//     e.preventDefault();
//     var first_name = $('#name').val();
//     var last_name = $('#lastName').val();
//     var phone = $('#phone').val();
//     var email = $('#email').val();
//     var subject = $('#sub').val();
//     var msg = $('#message').val();

//     $(".error").remove();

    

//     if (first_name.length < 1 ) {
//         $('#name').after('<span class="error" >Please fill out this field</span>');
       
//         return false;
//     }
//     else {
//         var reg = /^[a-zA-ZČčĆćĐđŠšŽžАаБбВвГгДдЂђЕеЖжЗзИиЈјКкЛлЉљНнмМЊњОоПпРрСсТтЋћУуФфХхЦцчЧЏџШш\s]+$/;
//         var validName = reg.test(first_name);
//         if (!validName) {
//             $('#name').after('<span class="error">Please insert right format</span>');
//             return false;
//         }
//     } if( last_name.length < 1){
//         $('#lastName').after('<span class="error" >Please fill out this field</span>');
//         return false;
//     }
//     else {
//         var reg = /^[a-zA-ZČčĆćĐđŠšŽžАаБбВвГгДдЂђЕеЖжЗзИиЈјКкЛлЉљНнмМЊњОоПпРрСсТтЋћУуФфХхЦцчЧЏџШш\s]+$/;
//         var validLastName = reg.test(last_name);
//         if (!validLastName) {
//             $('#lastName').after('<span class="error">Please insert right format</span>');
//             return false;
//         }
//     }
    
//     if (phone.length < 1) {
//         $('#phone').after('<span class="error">Please fill out this field</span>');
//         return false;
//     }
//     if (email.length < 1) {
//         $('#email').after('<span class="error">Please fill out this field</span>');
//         return false;
//     } else {
//         var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         var validEmail = re.test(email);
//         if (!validEmail) {
//             $('#email').after('<span class="error">Enter valid format</span>');
//             return false;
//         }

//     }
//     if (subject.length < 1) {
//         $('#sub').after('<span class="error">Please fill out this field</span>');
//         return false;
//     }
    
//     if (msg.length < 1) {
//         $('#message').after('<span class="error">Please fill out this field</span>');
//         return false;
//     }
// });  

$(document).ready(function(){
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("#proba").validate({
      // Specify validation rules
      
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        name: "required",
        lastName: "required",
        email: {
          required: true,
          // Specify that email should be validated
          // by the built-in "email" rule
          email: true
        }
        
      },
      // Specify validation error messages
      messages: {
        name: "Please enter your firstname",
        lastName: "Please enter your lastname",
        email: "Please enter a valid email address"
      },
      
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
      }
    });
  });