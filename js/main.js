
$(function(){
	mainFunc();
});


function mainFunc(){
	var main_flow = null;
	var main_banner = null;
	var main_banner_slide_length = 0;
	var mc_imgthum_container = $(".mc_imgthum_container");
	var btn_custom_auto = $(".btn_custom_auto");
	var btn_custom_auto_toggle_text = btn_custom_auto.text();
	if($(".mc_quick_container .swiper-slide").length>1){
		main_flow = new Swiper(".mc_quick_container", {
			speed : 800,
            navigation: {
                nextEl: '.btn_mc_quick_control.next_control',
                prevEl: '.btn_mc_quick_control.prev_control',
            }
		});
	}
	if(mc_imgthum_container.length){
		main_banner_slide_length = $(".mc_imgthum_container .swiper-slide").length;
		$(".custom_control_layer .current_length").text(main_banner_slide_length);
		if($(".mc_imgthum_container .swiper-slide").length>1){
			main_banner = new Swiper(".mc_imgthum_container", {
				speed : 800,
				navigation: {
					nextEl: '.btn_custom_control.next_move',
					prevEl: '.btn_custom_control.prev_move',
				},
				 autoplay: {
					delay: 5000,
					disableOnInteraction : false
				},
				on : {
					slideChange : function(){
						// realIndex
						console.log(1)
						$(".custom_control_layer .current_index").text(main_banner.realIndex+1);
					}
				}
			});
		}else{
			$(".mc_imgthum_banner_zone").addClass("type2");
		}
		$(".btn_custom_auto").on("click",function(e){
			e.preventDefault();
			var $t = $(this);
			var $t_hidden = $t.children(".hdtext");
			var $t_toggle_text = $t.attr("data-play");
			$t.toggleClass("type2");
			if($t.hasClass("type2")){
				$t_hidden.text($t_toggle_text);
				main_banner.autoplay.stop();
			}else{
				$t_hidden.text(btn_custom_auto_toggle_text);
				main_banner.autoplay.start();
			}
		});
	}
}
