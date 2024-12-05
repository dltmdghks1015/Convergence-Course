$(document).ready(function () {
    // 일반 메뉴
    $('.menu').hover(
       function () {
           const submenu = $(this).find('.submenu');
           if ($(this).hasClass('language-menu')) {
               // 언어 메뉴는 수직 정렬로 표시
               submenu.css({
                   display: 'flex', // 동적으로 flex 적용
                   flexDirection: 'column', // 수직 정렬 유지
               }).stop(true, true).slideDown(200);
           } else {
               submenu.stop(true, true).slideDown(200); // 일반 메뉴 동작
           }
       },
       function () {
           $(this).find('.submenu').stop(true, true).slideUp(200); // 마우스를 떼면 숨김
       }
   );

   // 페이지 로드 시 서브 메뉴 숨기기
   $('.submenu').hide();
});
