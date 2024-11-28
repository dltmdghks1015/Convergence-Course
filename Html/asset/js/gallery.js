$(document).ready(function () {
    $('.menu').hover(
        function () {
            $(this).find('.submenu')
                .stop(true, true)
                .css('opacity', 0)
                .slideDown(300)
                .animate({ opacity: 1 }, { queue: false, duration: 300 });
        },
        function () {
            $(this).find('.submenu')
                .stop(true, true)
                .animate({ opacity: 0 }, { queue: false, duration: 300 })
                .slideUp(300);
        }
    );
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

document.addEventListener("DOMContentLoaded", () => {
    const dropdownButtons = document.querySelectorAll(".dropdown-btn");

    dropdownButtons.forEach(button => {
        button.addEventListener("click", () => {
            const dropdownContent = button.nextElementSibling;
            const isOpen = dropdownContent.classList.contains("open");

            // 닫기: 다른 드롭다운 닫기
            document.querySelectorAll(".dropdown-content.open").forEach(content => {
                if (content !== dropdownContent) {
                    content.classList.remove("open");
                    content.style.maxHeight = null; // 높이를 초기화
                }
            });

            // 현재 드롭다운 토글
            if (isOpen) {
                dropdownContent.classList.remove("open");
                dropdownContent.style.maxHeight = null; // 높이를 초기화하여 접기
            } else {
                dropdownContent.classList.add("open");
                dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px"; // 컨텐츠 높이에 맞게 펼치기
            }
        });
    });
});
