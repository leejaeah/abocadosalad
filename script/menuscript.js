$(function () {
  // 탭 메뉴
  const tabBtn = $("#contents .menu_btn > a"); //탭 버튼 설정
  const tabCont = $(".cont > div"); //탭 콘텐츠 설정
  tabCont.hide().eq(0).show(); //탭 콘텐츠를 숨기고 첫 번째 콘텐츠만 보여줌
  tabBtn.on("click", function () {
    //버튼을 클릭하면
    const index = $(this).index(); //클릭한 버튼의 번호를 저장
    $(this).addClass("active").siblings().removeClass("active"); //클릭한 버튼에 클래스를 추가하고 나머지는 제거함
    tabCont.eq(index).show().siblings().hide(); //클릭한 버튼 순서에 맞는 콘텐츠에 클래스를 추가하고 나머지는 숨김
    return false;
  });
  // hover_wrap
  $(".cont > .all > .box > div").mouseover(function () {
    $(this).find(".hover_wrap").stop().slideDown(200);
  });
  $(".cont > .all > .box").mouseout(function () {
    $(this).find(".hover_wrap").stop().slideUp(150);
  });
});
