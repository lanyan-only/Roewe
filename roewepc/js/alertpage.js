/**
 * wenbing.xu
 * @version v1.00
 * Modify-Date:2017-1-5 11:12:29
 */
var alert_page={inint:function(){this.closeShade()},closeShade:function(){$(".alert_page_text .alert_page_close,.alert_page_text .alert_page_close_btn").click(function(){$(".alert_page_shade,.alert_page_text").hide()})}};$(function(){alert_page.inint()});
function toMsg(str) {
	$("#toMsgshow").show();
	$("#msgPage").show();
	$(".alert_page_shade").show();
	$("#msgInfo").html(str);
}