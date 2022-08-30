// event pada saat link di klik
$('.page-scroll').on('click', function (e) {
    // ambil isi href
    let tujuan = $(this).attr('href');
    // tangkap elemen yang bersangkutan
    let elemenTujuan = $(tujuan);
    
    console.log(elemenTujuan);
    
    // pindahkan scroll

    // document.body.scrollTop = elemenTujuan.offset().top;
    // document.documentElement.scrollTop = elemenTujuan.offset().top;
    window.scrollTo({top: elemenTujuan.offset().top - 50, behavior: 'smooth'});
    e.preventDefault();
});


// parallax
$(window).on('load',function () {
    $('.pKiri').addClass('pMuncul')
    $('.pKanan').addClass('pMuncul')
});

$(window).scroll(function () {
   let wScroll = $(this).scrollTop();

   // jumbotron

   $('.jumbotron img').css({
    'transform': 'translate(0px, '+ wScroll / 6+'%' 
   });
   
   $('.jumbotron h1').css({
    'transform': 'translate(0px, '+ wScroll / 4+'%' 
   });
   
   $('.jumbotron p').css({
    'transform': 'translate(0px, '+ wScroll / 2.5+'%' 
   });


   // portfolio
   if ( wScroll > $('.portfolio').offset().top - 250 ) {
    $('.portfolio .thumbnail').each(function (i) {
        setTimeout(() => {
            $('.portfolio .thumbnail').eq(i).addClass('muncul')
        }, 300 * (i + 1));
    })
    
    // $('.portfolio .thumbnail').addClass('muncul')
   }

});

