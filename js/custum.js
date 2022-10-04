$(document).ready(function () {
// modal - 모달창
var gallery = $(".gallery > .gi_modal");
$(".modal").hide();

for (let i = 0; i < gallery.length; i++){
  $(gallery).eq(i).on('click', function(){
    $(".modal").hide();
    $(`.modal:eq(${i})`).stop().fadeIn(300);
  })
}
$(".modal_close").click(function(){
  $('.modal').fadeOut(300);
})
// sec3 - placrholder->label


// 이 안으로 작성
});