// JavaScript Document

$(function(){
	//图片响应式
	$('.maximg img').css({"max-width":"100%"});
	//pc头部导航锁定
	/*function hrefA(){
		var href = location.href;
        $("header .menu ul li > a").each(function(index, el) {
            var $this = $(this);
            if ( href.indexOf( $this.attr("href").split(".")[0] ) >= 0 ){
                $this.parent().addClass('active');
            }
        })
        $(".menu-box ul li a").each(function(index, el) {
            var $this = $(this);

            if ( href.indexOf( $this.attr("href").split(".")[0] ) >= 0 ){
                $this.parents('li').addClass('active');
            }
        })
        if( href.indexOf("index") < 1  &&  href.indexOf("asp") < 1 &&  href.indexOf("php") < 1 &&  href.indexOf("html") < 1 ){
        	$("header .menu ul li:nth-child(1)").addClass('active');
        	$(".menu-box ul li:nth-child(1)").addClass('active');
        }
	}
	hrefA();
	$('#tabBar .clickbtn').click(function(){
		if( $('#tabBar .navigation').hasClass('active') ){
			$('#tabBar').removeClass('active');
			$('#tabBar .clickbtn').removeClass('active').addClass('on');
			$('#tabBar .navigation').removeClass('active');
		}else{
			$('#tabBar').addClass('active');
			$('#tabBar .clickbtn').addClass('active').removeClass('on');
			$('#tabBar .navigation').addClass('active');
		}
	})*/
	//pc头部导航下拉
	$('header .menu ul li').hover(function(){
		$(this).find('.ul').slideDown()
	},function(){
		$(this).find('.ul').stop().slideUp()
	})
	//移动端头部导航
	$('.menu-btn').click(function(event){
		if( $('.menu-box').is(':hidden') ){
			$('.menu-btn').addClass('active');
			$('.menu-box').slideDown();
		}else{
			$('.menu-btn').removeClass('active');
			$('.menu-box').stop().slideUp();
		}
	})
	//友情链接
	var text6swiper = new Swiper('.text-6 .swiper-container', {
		slidesPerView : 'auto',
		autoplay:{
			delay:5000
			},
		loop:true,
	    spaceBetween : 15,
	    disableOnInteraction: false
	})
	//搜索
	$('header .search .searchBtn').click(function(event){
		if( $('header .search p').is(':hidden') ){
			$('header .search p').fadeIn();
		}else{
			$('header .search p').hide();
		}
		event.stopPropagation();
	})
	$('header .search p').click(function(event){
		$(this).show();
		event.stopPropagation();
	})
	//点击空白区
	$(window).click(function(){
		$('header .search p').hide();
	})
})
						