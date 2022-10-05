// window.onbeforeunload = function () { $('.loader').show(); }  
// 현재 페이지에서 다른 페이지로 넘어갈 때 표시해주는 기능
// $(window).load(function () {          
//페이지가 로드 되면 로딩 화면을 없애주는 것
//     $(".loader").hide();
// });

// var _showPage = function() {

//   var loader = $(".loader");

//   var container = $(".header, .section");

//   loader.css("display","none");
//   container.css("display","block");
// };
$(window).load(function(){
  $('.loader').fadeOut();
})