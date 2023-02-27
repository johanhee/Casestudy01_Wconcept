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
