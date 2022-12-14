$(document).ready(function () {
  window.onresize = function () {
    // document.location.reload();
  };
  setTimeout(() => 
    $('.loader').fadeOut()
  , 1000);
  // navigation - 네비
  var nav = $(".navigation > li > a");
  $(nav).click(function () {
    var that = this;
    console.log(that);
    // $(this).addClass('on');
    $(nav).removeClass("on");
    $(that).addClass("on");
  });

  //네비 스크롤 이벤트
  $(window).scroll(function () {
    //스크롤 높이 측정
    var top = $(window).scrollTop();

    if (top <= 800) {
      $(nav).removeClass("on");
      $(nav).eq(0).addClass("on");
    } else if (top >= 800 && top <= 1500) {
      $(nav).removeClass("on");
      $(nav).eq(1).addClass("on");
    } else if (top >= 1700) {
      $(nav).removeClass("on");
      $(nav).eq(2).addClass("on");
    }
  });

  // modal - 모달창
  var gallery = $(".gallery > .gi_modal");
  $(".modal").hide();
  for (let i = 0; i < gallery.length; i++) {
    $(gallery)
    .eq(i)
    .on("click", function () {
      $(".modal").hide();
      $(".sec2_modal").show();
      $(`.modal:eq(${i})`).stop().fadeIn(300);
      });
    }
    $(".modal_close").click(function () {
    $(".sec2_modal").hide();
    $(".modal").fadeOut(300);
  });

  // 이 안으로 작성
});

//헤더 호버
$(window).scroll(function () {
  //스크롤 높이 측정
  var header = $(window).scrollTop();

  if (header >= 113 && header <= 1780) {
    $("header").hover(
      function () {
        $(this).css("background-color", "rgba(255,255,255,.6)");
      },
      function () {
        $(this).css("background-color", "rgba(255,255,255,.0)");
      }
    );
  } else {
    $("header").hover(function () {
      $(this).css("background-color", "rgba(255,255,255,.0)");
    });
  }
});
//너비 구하기

$(".modal_bg:before").css("background-color","red");
//윈도우 크기 변할 때마다 새로고침

