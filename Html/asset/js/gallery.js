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
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggle-btn");
    const beforeImg = document.querySelector(".before");
    const afterImg = document.querySelector(".after");

    toggleBtn.addEventListener("click", () => {
        if (beforeImg.classList.contains("active")) {
            // Before → After
            afterImg.style.zIndex = "2"; // After를 앞으로 가져옴
            afterImg.classList.add("fade-in"); // After에 fade-in 효과 추가
            beforeImg.classList.add("fade-out"); // Before에 fade-out 효과 추가

            setTimeout(() => {
                beforeImg.classList.remove("active", "fade-out"); // Before 비활성화
                afterImg.classList.add("active");
                beforeImg.style.zIndex = "1"; // Before 뒤로 보냄
                afterImg.classList.remove("fade-in"); // 애니메이션 클래스 제거
            }, 1000); // CSS transition 시간
        } else {
            // After → Before
            beforeImg.style.zIndex = "2"; // Before를 앞으로 가져옴
            beforeImg.classList.add("fade-in"); // Before에 fade-in 효과 추가
            afterImg.classList.add("fade-out"); // After에 fade-out 효과 추가

            setTimeout(() => {
                afterImg.classList.remove("active", "fade-out"); // After 비활성화
                beforeImg.classList.add("active");
                afterImg.style.zIndex = "1"; // After 뒤로 보냄
                beforeImg.classList.remove("fade-in"); // 애니메이션 클래스 제거
            }, 1000); // CSS transition 시간
        }
    });
});

document.querySelectorAll('.image-carousel').forEach(carousel => {
    const images = carousel.querySelector('.carousel-images');
    const prevButton = carousel.querySelector('.carousel-prev');
    const nextButton = carousel.querySelector('.carousel-next');
    const imageCount = images.children.length; // 슬라이더에 포함된 이미지 개수
    const imagesPerView = 4; // 한 번에 보여줄 이미지 수
    const imageWidth = 300; // 이미지 하나의 너비 (px)
    const gap = 10; // 이미지 간의 여백 (px)
    const maxIndex = Math.ceil(imageCount - imagesPerView); // 최대 이동 가능한 인덱스
    let currentIndex = 0;

    // 슬라이더의 총 너비를 설정
    images.style.width = `${imageCount * (imageWidth + gap)}px`;

    // 이전 버튼 이벤트
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex -= 1; // 인덱스 감소
            images.style.transform = `translateX(-${currentIndex * (imageWidth + gap)}px)`; // 슬라이드 이동
        }
    });

    // 다음 버튼 이벤트
    nextButton.addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex += 1; // 인덱스 증가
            images.style.transform = `translateX(-${currentIndex * (imageWidth + gap)}px)`; // 슬라이드 이동
        }
    });
});
