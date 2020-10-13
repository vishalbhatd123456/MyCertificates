window.onload = function (){
    $(".loader_container").css("display","none");
    
    var mySwiper = new Swiper('.swiper-container', { 
    
        direction: 'horizontal', 
        spaceBetween: 10,
        loop: true,
        effect:"flip",
        slidesPerView:2,
        centeredSlides:true,
    
        pagination: { 
            el: '.swiper-pagination'
        },
    
        autoplay: { 
            delay: 5000, 
        },
        grabCursor:false
    });
    
    /*var ar = [
        "https://raw.githubusercontent.com/ayushkumarsingh2422005/AboutMe/main/CPlusPlus_certificate.jpg",
        "https://raw.githubusercontent.com/ayushkumarsingh2422005/AboutMe/main/CSS_certificate.jpg",
        "https://raw.githubusercontent.com/ayushkumarsingh2422005/AboutMe/main/PHP_certificate.jpg",
        "https://raw.githubusercontent.com/ayushkumarsingh2422005/AboutMe/main/Java_certificate.jpg",
        "https://raw.githubusercontent.com/ayushkumarsingh2422005/AboutMe/main/JavaScript_certificate.jpg",
        "https://raw.githubusercontent.com/ayushkumarsingh2422005/AboutMe/main/HTML_certificate.jpg",
        "https://raw.githubusercontent.com/ayushkumarsingh2422005/AboutMe/main/C_certificate.jpg",
        "https://raw.githubusercontent.com/ayushkumarsingh2422005/AboutMe/main/CSharp_certificate.jpg",
        "https://raw.githubusercontent.com/ayushkumarsingh2422005/AboutMe/main/react_certificate.jpg",
        "https://raw.githubusercontent.com/ayushkumarsingh2422005/AboutMe/main/machine-learning_certificate.jpg",
        "https://raw.githubusercontent.com/ayushkumarsingh2422005/AboutMe/main/jQuery_certificate.jpg",
        "https://raw.githubusercontent.com/ayushkumarsingh2422005/AboutMe/main/fullstack_certificate.jpg",
        "https://raw.githubusercontent.com/ayushkumarsingh2422005/AboutMe/main/data-science_certificate.jpg",
        "https://raw.githubusercontent.com/ayushkumarsingh2422005/AboutMe/main/Swift_certificate.jpg",
        "https://raw.githubusercontent.com/ayushkumarsingh2422005/AboutMe/main/SQL_certificate.jpg",
        "https://raw.githubusercontent.com/ayushkumarsingh2422005/AboutMe/main/Ruby_certificate.jpg",
        "https://raw.githubusercontent.com/ayushkumarsingh2422005/AboutMe/main/Python_certificate.jpg",
    ];
    
    for (var i = 0; i<17 ;i++){
        document.getElementsByClassName("swiper-slide")[i].style.backgroundImage = ar[i];
    }*/
}
