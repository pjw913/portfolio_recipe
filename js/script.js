$(function(){
    /* const leftBtn = document.querySelector('.prev');
    const rightBtn = document.querySelector('.next');
    const div1 = document.querySelector('.recommend'); */

    $('.prev').on('click',function(){
        let divW = $('.recommend').children('div').width();
        let gap = $(window).width()*0.06;
        $('.recommend').children('div').eq(11).prependTo( $('.recommend') );
        $('.recommend').css('left',-(divW+gap)+'px');
        $('.recommend').stop().animate({ 'left':'0px'}, 300 );
    })
    $('.next').on('click',function(){
        let divW = $('.recommend').children('div').width();
        let gap = $(window).width()*0.06;
        $('.recommend').stop().animate({ 'left':-(divW+gap)+'px'}, 300, function(){
            $('.recommend').children('div').eq(0).appendTo( $('.recommend') );
            $('.recommend').css('left','0px');
        })
    })
    
    const food1 = [];
    
    let menuStep1 = "";
    let menuStep2 = "";
    let menuStep3 = "";
    let menuStep4 = "";

    $('.menu1').find('a').on('click',function(event){
        event.preventDefault();
        if( menuStep1 !== $(this).parent().attr('class') ){
            food1.push($(this).text());
            $('<div/>').text($(this).text()).appendTo($('#second_container>form')).on('click', function(){ $(this).remove(); menuStep1=""; });
            menuStep1 = $(this).parent().attr('class');
        }        
    });
    $('.menu2').find('a').on('click',function(event){
        event.preventDefault();
        if( menuStep2 !== $(this).parent().attr('class') ){
            food1.push($(this).text());
            $('<div/>').text($(this).text()).appendTo($('#second_container>form')).on('click', function(){ $(this).remove(); menuStep2=""; });
            menuStep2 = $(this).parent().attr('class');
        }        
    });
    $('.menu3').find('a').on('click',function(event){
        event.preventDefault();
        if( menuStep3 !== $(this).parent().attr('class') ){
            food1.push($(this).text());
            $('<div/>').text($(this).text()).appendTo($('#second_container>form')).on('click', function(){ $(this).remove(); menuStep3=""; });
            menuStep3 = $(this).parent().attr('class');
        }        
    });
    $('.menu4').find('a').on('click',function(event){
        event.preventDefault();
        if( menuStep4 !== $(this).parent().attr('class') ){
            food1.push($(this).text());
            $('<div/>').text($(this).text()).appendTo($('#second_container>form')).on('click', function(){ $(this).remove(); menuStep4=""; });
            menuStep4 = $(this).parent().attr('class');
        }        
    });



    $('#main_header>#toggle').on('click', function(){
        if($('.menunav').css('display') === 'none'){
            $('.menunav').show();
        }else{
            $('.menunav').hide();
        }
    });

    const menus = [
        {
            img: "./images/tteokbokki.jpg",
            name: "떡볶이"
        },
        {
            img: "./images/spaghetti.jfif",
            name: "스파게티"
        },
        {
            img: "./images/ramen.jpg",
            name: "라멘"
        },
        {
            img: "./images/chicken.jpg",
            name: "치킨"
        },
        {
            img: "./images/pizza.jpg",
            name: "피자"
        }
    ];

    let intervalId;

    
    function showRandomMenu() {
        const randomIndex = Math.floor(Math.random() * menus.length);
        const menu = menus[randomIndex];

        
        $(".roullete .pic").css("background", `url(${menu.img})`);
        $(".pic").css({
            "background": `url(${menu.img}) no-repeat center center`,
            "background-size": "cover"
        });
        
        $(".roullete h4").text(menu.name);
    }

    
    intervalId = setInterval(showRandomMenu, 100); 

    
    $(".roullete a").on("click", function(e) {
        e.preventDefault();
        clearInterval(intervalId);
    });

    




    

    // $('.menu1,.menu2,.menu3,.menu4').find('a').on('click',function(event){
    //     event.preventDefault();
    //     food1.push($(this).text());
    //     $('<div/>').text($(this).text()).appendTo($('#second_container>form')).on('click', function(){ $(this).remove(); });        
    // });

    
    
/*     food1.forEach((food)=>{
        $('<div/>').text(food).appendTo($('#second_container>form'))
    }) */
   
});