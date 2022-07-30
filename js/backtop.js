$(function(){
		// 首先我们需要获取到窗口的高度
		var h1 = $(window).height();

		$(window).scroll(function(){
			// 当我们滚动屏幕的时候我们需要获取到当前页面的滚动距离
			var h2 = $(document).scrollTop();

			if( h2 > h1 || h2 == h1 ){
				//alert( 1 );
				$('.fhuitop').fadeIn( 200 );
			}else{
				$('.fhuitop').fadeOut( 200 );
			}
		});

		// 当我们点击p元素的时候我们需要将页面的返回顶部，也就是让 scrollTop 的值变为0
		$('.fhuitop').click(function(){
			$('body,html').animate({"scrollTop":0},500);
		});

});