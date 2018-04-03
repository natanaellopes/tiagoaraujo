$("#contact-form").on( "submit", function( event ) {
  event.preventDefault();

  $.post('send.php', $(this).serialize(), () => {
    swal(
      'Contato feito com sucesso',
      'Seu contato foi enviado e em breve receberá a resposta no email informado!',
      'success'
    )
    $(this).trigger("reset");
  });
});

// Menu
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
  document.getElementById("main").style.marginRight = "300px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
  document.body.style.backgroundColor = "white";
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// Go Top
function topFunction() {
  $('html, body').animate({
    scrollTop: 0
  }, 500);
}

$(function(){
  $('.ideal-desc').hide();
  $('.ideals-item').removeClass('active');

  $('.ideals-item').hover(
    function() {
      $('.ideals-item').removeClass('active');
      $('.ideal-desc').hide();
      $('#ideals-desc').show();
      $(this).addClass('active');
      $('#' + this.getAttribute('data-target')).show();
    },
    function() {
      $('.ideals-item').removeClass('active');
      $('#ideals-desc').hide();
    }
    );

  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 60
    }, 500);
    closeNav();
  });

});
