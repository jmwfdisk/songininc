# 디자인 시스템 — SONGIN INDUSTRY

> 리포트 작성일: 2026-03-03
> 소스 파일: `css/style.css` (1,541줄)

---

## CSS 커스텀 프로퍼티 (`:root` 변수)

```css
:root {
    /* 색상 */
    --primary-color:    #2563eb;   /* Blue-600 */
    --secondary-color:  #7c3aed;   /* Violet-600 */
    --accent-color:     #f59e0b;   /* Amber-400 */
    --text-dark:        #1f2937;   /* Gray-800 */
    --text-light:       #6b7280;   /* Gray-500 */
    --bg-light:         #f9fafb;   /* Gray-50 */
    --bg-white:         #ffffff;
    --border-color:     #e5e7eb;   /* Gray-200 */

    /* 그림자 */
    --shadow-sm:  0 1px 2px 0 rgba(0,0,0,0.05);
    --shadow-md:  0 4px 6px -1px rgba(0,0,0,0.1);
    --shadow-lg:  0 10px 15px -3px rgba(0,0,0,0.1);
    --shadow-xl:  0 20px 25px -5px rgba(0,0,0,0.1);
}
```

> ⚠️ DESIGN.md 일부 변수명이 다름 (`--primary-blue` 등). 실제 코드 기준으로 위가 정확.

---

## 타이포그래피

### 폰트 패밀리

```css
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
                 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
                 'Droid Sans', 'Helvetica Neue', sans-serif;
}
```
시스템 폰트 스택 사용 — 외부 웹폰트 로드 없음.

### 주요 폰트 크기

| 요소 | 크기 | 비고 |
|------|------|------|
| `body` | 기본 (브라우저 16px) | `line-height: 1.6` |
| Hero title | `clamp(42px, 5.5vw, 72px)` | `font-weight: 800` |
| Section heading | `clamp(28px, 4vw, 42px)` | `.section-heading` |
| 서브페이지 hero h1 | `clamp(36px, 6vw, 56px)` | 인라인 스타일 |
| 탭 버튼 | `18px` | `.tab-btn` |
| 네비 메뉴 | `18px` (데스크탑) / `17px` (1024px 이하) | `#gnb li a` |
| 본문 | `14px` — `18px` | 섹션별 상이 |
| 언어 버튼 | `13px` | `.lang-btn` |
| 푸터 본문 | `13px` — `14px` | |
| Eyebrow | `13px`, 자간 `0.12em`, 대문자 | `.eyebrow` |

---

## 컬러 시스템

### 주요 그라디언트

```css
/* 브랜드 그라디언트 (버튼, 히어로 배경, 피처 스트립) */
linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)

/* 히어로 오버레이 */
linear-gradient(135deg, rgba(30,58,138,0.88) 0%, rgba(109,40,217,0.82) 100%)

/* 히어로 제목 강조 (em) */
linear-gradient(135deg, #fbbf24 0%, #f97316 100%)

/* 태그라인 강조 */
linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)

/* 푸터 배경 */
#0f172a  (Slate-900)

/* 푸터 로고 텍스트 */
linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)
```

---

## 레이아웃 시스템

### 컨테이너

```css
.inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
```

### 반응형 브레이크포인트

| 브레이크포인트 | 주요 변경 사항 |
|--------------|-------------|
| `≤ 1024px` | 헤더 padding 30px, 네비 간격 6px, 뉴스 그리드 2컬럼, Why 그리드 2컬럼, 푸터 3컬럼 |
| `≤ 768px` | 햄버거 메뉴 활성, 로고 텍스트 "SONGIN"으로 단축, 히어로 1컬럼, 히어로 콜라주 숨김, 푸터 2컬럼 |
| `≤ 480px` | 로고 18px, section h1 28px, 탭 세로 스택, 푸터 1컬럼 |

---

## 컴포넌트 인벤토리

### 버튼

| 클래스 | 설명 | 색상 |
|--------|------|------|
| `.btn-primary` | 흰 배경 + 파란 텍스트, radius 50px | 흰색/파랑 |
| `.btn-outline-white` | 투명 배경 + 흰 테두리 | 흰색 테두리 |
| `.btn-outline-dark` | 투명 배경 + 회색 테두리 | 회색 테두리 |
| `.submenu-btn` | 제품 카테고리 필터 버튼 | 활성: 그라디언트 |
| `.filter-btn` | 갤러리 필터 버튼 | 활성: 그라디언트 |
| `.tab-btn` | 홈 제품 탭 버튼 | 활성: border-bottom |
| `.lang-btn` | 언어 전환 버튼 | 활성: 그라디언트 pill |
| `.cta-button` | 서브페이지 CTA (인라인 스타일) | 흰 배경 |

### 카드

| 클래스 | 사용처 | 특징 |
|--------|--------|------|
| `.news-card` (`.wrap article`) | 홈, 커뮤니티 | 이미지 + 텍스트, hover lift, IntersectionObserver fade-in |
| `.why-card` | 홈 Why 섹션 | 아이콘 + 제목 + 설명, hover lift, fade-in |
| `.value-card` | 회사소개 | 아이콘 + 제목 + 설명 |
| `.feature-card` | 제품소개 | 아이콘 + 제목 + 설명 |
| `.hc-stat` | 히어로 콜라주 | 스탯 숫자 카드 |
| `.hc-robotic` | 히어로 콜라주 | 텍스트 정보 카드 |

### 헤더/네비

```
header (fixed, z-index:1000, blur backdrop)
  └─ .inner (height:80px, flex, gap:20px)
       ├─ h1 (로고 img + SONGIN INDUSTRY span)
       ├─ nav > #gnb (flex, gap:8px)
       │    └─ li > a (18px, hover: bg + underline bar)
       ├─ .language-switcher (flex, bg-light pill)
       │    └─ .lang-btn × 2
       ├─ .util (display:none — 항상 숨김)
       └─ .menu-toggle (display:none → flex ≤768px)
```

### 히어로 콜라주 (홈 전용)

```css
.hero-collage {
    display: grid;
    grid-template-columns: 1.3fr 1fr 1fr;
    grid-template-rows: repeat(3, 144px);  /* 각 행 144px */
    gap: 12px;
    max-width: 600px;
}
/* 모바일 (768px 이하): 히어로 콜라주 자체가 display:none */
```

### 푸터

```css
footer { background: #0f172a; padding: 72px 0 32px; }

.footer-grid {
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;  /* 데스크탑 */
    /* 1024px: 1fr 1fr 1fr (brand = 3컬럼 전체) */
    /* 768px:  1fr 1fr     (brand = 2컬럼 전체) */
    /* 480px:  1fr         (단일) */
}
```

### 스크롤 Reveal

```css
/* CSS: 초기 숨김 상태 */
.news-card, .why-card {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}
/* JS IntersectionObserver가 .fade-in 클래스 추가 시 표시 */
.news-card.fade-in, .why-card.fade-in {
    opacity: 1;
    transform: translateY(0);
}
```

### 마르키 (Marquee)

```css
.marquee-content {
    animation: marquee-scroll 28s linear infinite;
}
@keyframes marquee-scroll {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}
```
콘텐츠를 정확히 2배 복제하여 무한 루프.

---

## CSS 명시도(Specificity) 주의 사항

전역 규칙:
```css
section .inner h1::after {
    /* 명시도: 0,1,2 — 파란 그라디언트 언더라인 */
    content: '';
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
}
```

이 규칙이 서브페이지 히어로 h1에도 적용됨. 각 서브페이지 인라인 스타일에서:
```css
.{page}-hero h1 {
    padding-bottom: 0;  /* ::after 공간 제거 */
}
.{page}-hero h1::after {
    display: none;  /* 언더라인 숨김 */
}
```
으로 무력화.

---

## 외부 CDN 의존성

| 라이브러리 | 버전 | URL | 사용 페이지 |
|-----------|------|-----|------------|
| Font Awesome | 6.4.0 | cdnjs.cloudflare.com | 전체 12개 |
| Swiper | 8.0 | unpkg.com/swiper@8 | Products.html, Products-kor.html |
