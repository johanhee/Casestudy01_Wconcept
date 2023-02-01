$(function(){
	var n=0;
	var index=0;
	var total=4;
	$(".keyvisual li").eq(n).addClass("current");
	$(".pagination li").eq(n).addClass("current");

	function intervalMoving(){
		if(n < (total-1)){ // 0, 1, 2, 3
			n=n+1;
		}else{
			n=0;
		}
		$(".keyvisual li").removeClass("current");
		$(".keyvisual li").eq(n).addClass("current");
		$(".pagination li").removeClass("current");
		$(".pagination li").eq(n).addClass("current");
	}

	var id=setInterval(intervalMoving, 5000);

	$(".left").click(function(e){
		e.preventDefault();

		if(n > 0){ // 0, 1, 2, 3
			n=n-1;
			$(".keyvisual li.current").removeClass("current");
			$(".keyvisual li").eq(n).addClass("current");
			$(".pagination li.current").removeClass("current");
			$(".pagination li").eq(n).addClass("current");
		}
	});
	$(".right").click(function(e){
		e.preventDefault();

		if(n < (total-1)){ // 0, 1, 2, 3
			n=n+1;
			$(".keyvisual li.current").removeClass("current");
			$(".keyvisual li").eq(n).addClass("current");
			$(".pagination li.current").removeClass("current");
			$(".pagination li").eq(n).addClass("current");
		}
	});
	$(".pagination li").click(function(e){
		e.preventDefault();
		index=$(this).index();

		if(n != index){
			n=index;
			$(".keyvisual li").removeClass("current");
			$(".keyvisual li").eq(n).addClass("current");
			$(".pagination li").removeClass("current");
			$(".pagination li").eq(n).addClass("current");
		}
	});
	$(".left, .right, .pagination a").hover(
		function(){
			clearInterval(id);
		},
		function(){
			id=setInterval(intervalMoving, 5000);
		}
	);
});

// $(function(){
//    var sliderN=0;
//    var sliderTotal=4;

//    $(".keyvisual li").eq(sliderN).addClass("current");
//    $(".pagination li").eq(sliderN).addClass("current");

//    $(".direction .left").click(function(e){
//       e.preventDefault();
//       prevMoving();
//    });
//    $(".direction .right").click(function(e){
//       e.preventDefault();
//       nextMoving();
//    });

//    $(".pagination li").click(function(e){
// 	  e.preventDefault();
// 	  sliderN=$(this).index();

//      galleryInterface();
//    });

//    setInterval(function(){
//       nextMoving();
//    }, 3000);

//    function galleryInterface(){
//       $(".keyvisual li").removeClass("current");
//       $(".keyvisual li").eq(sliderN).addClass("current");
//       $(".pagination li").removeClass("current");
//       $(".pagination li").eq(sliderN).addClass("current");
//    }

//    function prevMoving(){
//       if(sliderN > 0){
//             sliderN = sliderN-1;
//       }
//       else{
//          sliderN=(sliderTotal-1);
//       }
// 	  galleryInterface();
//    }
//    function nextMoving(){
//       if(sliderN < sliderTotal-1){
//          sliderN = sliderN+1;
//       }
//       else{
//          sliderN=0;
//       }
//       galleryInterface();
//    }
// });