# JavaScript 구조 — SONGIN INDUSTRY

> 리포트 작성일: 2026-03-03

---

## JS 파일 구성

| 파일 | 로드 방식 | 역할 |
|------|----------|------|
| `js/language.js` | 전체 12페이지, `<script defer>` | 언어 전환 |
| `js/ie.js` | **현재 어떤 페이지에서도 로드 안 함** | IE 감지 경고 (미사용) |
| 인라인 `<script>` | 각 HTML 최하단 | 페이지별 인터랙션 |

---

## `js/language.js` — 언어 전환기

### 동작 원리

1. `document.addEventListener('DOMContentLoaded', initLanguageSwitcher)` 로 초기화
2. 현재 URL 경로에서 파일명 추출: `window.location.pathname.split('/').pop()`
3. `-kor.html` 포함 여부로 현재 언어 판별
4. `languageMap` 에서 대응 페이지 URL 조회
5. 해당 언어 버튼에 `.active` 클래스 설정
6. 버튼 클릭 시 `localStorage.setItem('preferredLanguage', lang)` 저장 후 리다이렉트

### 페이지 매핑 테이블

```js
const languageMap = {
    'index.html':              { kor: 'index-kor.html',              eng: 'index.html' },
    'index-kor.html':          { kor: 'index-kor.html',              eng: 'index.html' },
    'about us.html':           { kor: 'about-us-kor.html',           eng: 'about us.html' },
    'about-us-kor.html':       { kor: 'about-us-kor.html',           eng: 'about us.html' },
    'Products.html':           { kor: 'Products-kor.html',           eng: 'Products.html' },
    'Products-kor.html':       { kor: 'Products-kor.html',           eng: 'Products.html' },
    'Gallery.html':            { kor: 'Gallery-kor.html',            eng: 'Gallery.html' },
    'Gallery-kor.html':        { kor: 'Gallery-kor.html',            eng: 'Gallery.html' },
    'Community.html':          { kor: 'Community-kor.html',          eng: 'Community.html' },
    'Community-kor.html':      { kor: 'Community-kor.html',          eng: 'Community.html' },
    'Customer Support.html':   { kor: 'Customer-Support-kor.html',   eng: 'Customer Support.html' },
    'Customer-Support-kor.html': { kor: 'Customer-Support-kor.html', eng: 'Customer Support.html' }
};
```

> `localStorage`에 `'preferredLanguage'` 저장하지만 페이지 로드 시 자동 적용하는 코드는 없음 — 저장값이 현재 활용되지 않는 상태.

---

## `js/ie.js` — IE 감지 (미사용)

```js
const ver = navigator.userAgent;
const isIE = /trident/i.test(ver);
if (isIE) {
    alert("익스플로러 브라우저로 접속하셨네요...");
}
```
- `console.log` 2개 포함 (디버깅 잔재)
- 현재 어떤 페이지에서도 `<script src="js/ie.js">` 로드 없음 → **사실상 사용 불가 상태**

---

## 페이지별 인라인 스크립트

### 공통 패턴 (12개 페이지 전체)

```js
// 1. 모바일 메뉴 토글
const menuToggle = document.getElementById('menuToggle');
const gnb = document.getElementById('gnb');
menuToggle.addEventListener('click', () => {
    gnb.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// 2. 메뉴 링크 클릭 시 모바일 메뉴 닫기
document.querySelectorAll('#gnb a').forEach(link => {
    link.addEventListener('click', () => {
        gnb.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// 3. 스크롤 100px 이상 시 헤더 shadow 강화
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
```

---

### `index.html` / `index-kor.html` 추가 기능

```js
// 4. 앵커 스무스 스크롤 (a[href^="#"])
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// 5. 제품 탭 전환 (.tab-btn → data-tab → #tab-*)
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanels.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
    });
});

// 6. IntersectionObserver — .news-card, .why-card 페이드인
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('fade-in');
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.news-card, .why-card').forEach(el => observer.observe(el));
```

---

### `Products.html` / `Products-kor.html` 추가 기능

```js
// Swiper 초기화 + 카테고리 필터
let swiper;
const originalSlides = Array.from(document.querySelectorAll('.swiper-slide')).map(s => s.cloneNode(true));

function initSwiper(category = 'all') {
    swiperWrapper.innerHTML = '';

    if (category === 'cabinet') {
        // "Coming Soon" 슬라이드 동적 생성
    } else {
        // category 일치 슬라이드만 추가
        originalSlides.forEach(slide => {
            if (category === 'all' || slide.getAttribute('data-category') === category) {
                swiperWrapper.appendChild(slide.cloneNode(true));
            }
        });
    }

    if (swiper) swiper.destroy(true, true);
    swiper = new Swiper('.swiper-container', {
        loop: false,
        autoplay: { delay: 3000, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        breakpoints: { 640: {slidesPerView:1}, 768: {slidesPerView:2}, 1024: {slidesPerView:2} }
    });
}
```

---

### `Gallery.html` / `Gallery-kor.html` 추가 기능

```js
// 라이트박스
galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        lightboxImage.src = img.src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});
// 닫기: X 버튼, 배경 클릭, ESC 키
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox();
});

// 이미지 필터 (show/hide + opacity 트랜지션)
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        galleryImages.forEach(img => {
            if (filter === 'all' || img.getAttribute('data-category') === filter) {
                img.style.display = 'block';
                setTimeout(() => { img.style.opacity='1'; img.style.transform='scale(1)'; }, 10);
            } else {
                img.style.opacity = '0'; img.style.transform = 'scale(0.8)';
                setTimeout(() => { img.style.display = 'none'; }, 300);
            }
        });
    });
});
```

---

### `Community.html` / `Community-kor.html` 추가 기능

```js
// IntersectionObserver — .news-card 스크롤 reveal (index와 다른 방식)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);  // 순차 딜레이
        }
    });
}, observerOptions);

// 초기 상태: JS로 직접 opacity/transform 설정
document.querySelectorAll('.news-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});
```

> ⚠️ `index.html`은 CSS 클래스로 reveal을 처리하고, `Community.html`은 JS 인라인 스타일로 처리 — **구현 방식 불일치**

---

## 기술적 메모

| 항목 | 현황 |
|------|------|
| `localStorage` 저장 | 언어 설정 저장은 있으나 자동 적용 코드 없음 |
| IE 지원 | `ie.js` 파일 있으나 어떤 페이지에서도 로드 안 함 |
| 폼 제출 | 고객지원 폼 — 백엔드 미연결, 정적 UI만 존재 |
| 공통 스크립트 모듈화 | 없음 — 동일 코드 12개 파일에 수동 복제 |
| ES 모듈 | 미사용 |
| async/defer | `language.js`만 `defer` 사용, 나머지 inline |
