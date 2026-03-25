# 송인산업 홈페이지 디자인 문서

> SONGIN INDUSTRY 공식 홈페이지의 전체 레이아웃, 디자인 시스템, 컴포넌트 구조를 기록한 문서입니다.

---

## 목차

1. [디자인 개요](#1-디자인-개요)
2. [컬러 시스템](#2-컬러-시스템)
3. [타이포그래피](#3-타이포그래피)
4. [레이아웃 & 그리드](#4-레이아웃--그리드)
5. [섹션별 구조](#5-섹션별-구조)
6. [공통 컴포넌트](#6-공통-컴포넌트)
7. [반응형 브레이크포인트](#7-반응형-브레이크포인트)
8. [애니메이션 & 인터랙션](#8-애니메이션--인터랙션)
9. [파일 구조](#9-파일-구조)
10. [언어 전환 시스템](#10-언어-전환-시스템)

---

## 1. 디자인 개요

| 항목 | 내용 |
|------|------|
| 브랜드 | 송인산업 (SONGIN INDUSTRY) |
| 업종 | 학교·사무용 가구 제조 |
| 디자인 레퍼런스 | Maze.co (모던 SaaS 스타일) |
| 언어 | 한국어 / 영어 (이중 언어) |
| 기술 스택 | HTML5, CSS3, Vanilla JS (빌드 도구 없음) |
| 외부 라이브러리 | Font Awesome 6.4.0, Swiper 8.0 |

### 디자인 원칙
- **클린 & 모던**: 넓은 여백, 명확한 계층 구조
- **카드 기반 UI**: 모든 콘텐츠를 rounded 카드로 그룹화
- **다크 히어로 / 라이트 콘텐츠**: 히어로는 진한 그라디언트, 이후 섹션은 흰색·연회색 교차
- **일관된 이중 언어**: 모든 페이지가 영문·한국어 페어로 존재

---

## 2. 컬러 시스템

### CSS 커스텀 프로퍼티 (`:root`)

```css
--primary-color:   #2563eb   /* 파란색 — 주요 액션, 링크, 아이콘 */
--secondary-color: #7c3aed   /* 보라색 — 그라디언트 끝, 강조 숫자 */
--accent-color:    #f59e0b   /* 앰버  — 히어로 타이틀 em 태그 강조 */
--text-dark:       #1f2937   /* 진회색 — 본문 제목, CTA 배경 */
--text-light:      #6b7280   /* 중회색 — 부제목, 설명 텍스트 */
--bg-light:        #f9fafb   /* 연회색 — Why 섹션 배경 */
--bg-white:        #ffffff   /* 흰색  — 카드, 탭 패널 배경 */
--border-color:    #e5e7eb   /* 테두리 색 */
```

### 그림자 시스템

```css
--shadow-sm:  0 1px 2px 0 rgba(0,0,0,0.05)
--shadow-md:  0 4px 6px -1px rgba(0,0,0,0.1)
--shadow-lg:  0 10px 15px -3px rgba(0,0,0,0.1)
--shadow-xl:  0 20px 25px -5px rgba(0,0,0,0.1)
```

### 주요 그라디언트

| 용도 | 값 |
|------|----|
| 히어로 오버레이 | `linear-gradient(135deg, rgba(30,58,138,0.88), rgba(109,40,217,0.82))` |
| 피처 스트립 배경 | `linear-gradient(135deg, #2563eb, #7c3aed)` |
| 브랜드 그라디언트 (텍스트) | `linear-gradient(135deg, #2563eb, #7c3aed)` |
| 히어로 em 강조 | `linear-gradient(135deg, #fbbf24, #f97316)` |
| 푸터 배경 | `#0f172a` (고정) |
| CTA 배경 | `#1f2937` (고정) |
| 태그라인 배경 | `#f8faff` (고정) |

---

## 3. 타이포그래피

### 폰트 패밀리

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
             'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
             'Helvetica Neue', sans-serif;
```
→ 시스템 폰트 스택 사용. 별도 웹폰트 로드 없음.

### 텍스트 크기 계층

| 요소 | 크기 | 굵기 | 비고 |
|------|------|------|------|
| 히어로 타이틀 H1 | `clamp(42px, 5.5vw, 72px)` | 800 | `em` 태그는 그라디언트 색상 |
| 태그라인 H2 | `clamp(36px, 5vw, 60px)` | 700 | |
| CTA H2 | `clamp(36px, 5vw, 60px)` | 700 | |
| 섹션 제목 `.section-heading` | `clamp(28px, 4vw, 42px)` | 700 | |
| 탭 패널 H3 | `clamp(28px, 3.5vw, 44px)` | 700 | |
| 페이지 H1 (서브페이지) | `40px` | 700 | 하단 그라디언트 밑줄 포함 |
| 카드 H4 (Why 섹션) | `18px` | 700 | |
| 뉴스 카드 H3 | `16px` | 600 | |
| 네비게이션 링크 | `15px` | 500 | |
| 본문 설명 `.hero-desc` | `18px` | 400 | line-height 1.7 |
| 카드 설명 | `14px` | 400 | line-height 1.7 |
| Eyebrow 레이블 | `13px` | 600 | 대문자, letter-spacing 0.12em |
| 푸터 컬럼 제목 | `13px` | 700 | 대문자, letter-spacing 0.08em |

---

## 4. 레이아웃 & 그리드

### 기본 컨테이너

```css
.inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
```

### 섹션 기본 패딩

```css
section { padding: 100px 0; }  /* 기본값 */
```

| 섹션 | 패딩 |
|------|------|
| 히어로 | `0` (내부 `.hero-inner`에서 `80px 20px`) |
| 태그라인 | `120px 0` |
| 제품 탭 | `100px 0` |
| 피처 스트립 | `80px 0 0` (하단은 마르키 트랙) |
| Why Songin | `100px 0` |
| 뉴스 | `80px 0` |
| CTA | `120px 0` |
| 푸터 | `72px 0 32px` |

---

## 5. 섹션별 구조

### 5-1. 헤더 (Header)

```
┌─────────────────────────────────────────────────────┐
│ [로고 + 회사명]  [Nav 5개]  [ENG|KOR]  [햄버거]      │ 80px
└─────────────────────────────────────────────────────┘
```

- `position: fixed` / `z-index: 1000`
- 배경: `rgba(255,255,255,0.95)` + `backdrop-filter: blur(10px)`
- 스크롤 시 `.scrolled` 클래스 추가 → `shadow-md` 적용
- 로고 이미지 높이: `29px`
- 네비게이션 호버: 하단 3px 그라디언트 언더라인 slide-in 애니메이션
- 언어 전환: `background: #f9fafb` 필 / 활성 버튼은 그라디언트 배경

---

### 5-2. 히어로 섹션 (Hero Section)

```
┌───────────────────────────────────────────────────────┐
│  [video 배경 opacity:0.35]                            │
│  [오버레이 그라디언트 z-index:1]                       │
│                                                       │
│  ┌──────────────────┐  ┌──────────────────────────┐  │
│  │ eyebrow 텍스트   │  │   [3×3 카드 콜라주]       │  │
│  │                 │  │                           │  │
│  │ 히어로 타이틀    │  │  main│ stat card (흰)    │  │
│  │ H1 (3줄)        │  │  img ├────────┬────────  │  │
│  │                 │  │  (2행)│install │ colors │  │  │
│  │ 설명 텍스트      │  │  ────┼────────┼────────  │  │
│  │                 │  │  robot│product │factory │  │  │
│  │ [버튼] [버튼]    │  │                           │  │
│  └──────────────────┘  └──────────────────────────┘  │
└───────────────────────────────────────────────────────┘
  min-height: 100vh   |   grid: 1fr 1fr / gap: 60px
```

#### 히어로 콜라주 그리드 상세

```
grid-template-columns: 1.3fr 1fr 1fr
grid-template-rows: repeat(3, 120px)
gap: 10px
```

| 카드 클래스 | 위치 | 내용 | 배경 |
|------------|------|------|------|
| `.hc-main` | col1 / row1-2 | main.png (contain) | `rgba(255,255,255,0.18)` |
| `.hc-stat` | col2-3 / row1 | 10,000+ / 30+ 스탯 | 흰색 |
| `.hc-install` | col2 / row2 | news.jpg 사진 | 이미지 |
| `.hc-colors` | col3 / row2 | news4.png 사진 | 이미지 |
| `.hc-robotic` | col1 / row3 | 로봇 용접 텍스트 | 흰색 |
| `.hc-product` | col2 / row3 | news3.png 사진 | 이미지 |
| `.hc-factory` | col3 / row3 | news2.png 사진 | 이미지 |

---

### 5-3. 태그라인 섹션 (Tagline Section)

```
┌───────────────────────────────────────┐
│         [radial-gradient 원형 장식]    │
│                                       │
│    Don't just fill a room,            │
│         define it                     │
│                                       │
│    [설명 텍스트 max-width: 600px]      │
└───────────────────────────────────────┘
  background: #f8faff   padding: 120px 0
```

- 장식 원형 blob: 480×480px, `rgba(37,99,235,0.1)` 중앙 배치
- H2 **strong** 태그: primary → secondary 그라디언트 텍스트

---

### 5-4. 제품 탭 섹션 (Product Tabs)

```
┌───────────────────────────────────────────────┐
│  [학교 가구] [사무용 가구] [맞춤 제작]           │ ← tabs-nav
│  ─────────────────────────────────────────── │ ← border-bottom
│                                               │
│  ┌────────────────────┐  ┌─────────────────┐  │
│  │ H3 제목            │  │                 │  │
│  │ 설명 텍스트         │  │  이미지 380px   │  │
│  │ [자세히 보기 →]     │  │                 │  │
│  └────────────────────┘  └─────────────────┘  │
└───────────────────────────────────────────────┘
  grid: 1fr 1fr / gap: 80px
```

| 탭 | 이미지 | 내용 |
|----|--------|------|
| 학교 가구 | news.jpg | 학생용 내구성·안전성 강조 |
| 사무용 가구 | ENG-P1.png | 인체공학·생산성 강조 |
| 맞춤 제작 | news3.png | 고객 맞춤 설계 강조 |

- 탭 전환: JS로 `.active` 클래스 토글
- 비활성 탭 패널: `display: none` → 활성: `display: grid`

---

### 5-5. 피처 스트립 (Feature Strip)

```
┌───────────────────────────────────────────────────────┐
│          [설명 텍스트 중앙 정렬]                         │
│                                                       │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │ ← 마르키 트랙
│  [로봇용접] [인체공학] [색상맞춤] [국내생산] [안전인증]  → │
└───────────────────────────────────────────────────────┘
  background: linear-gradient(primary → secondary)
```

- 마르키 애니메이션: `translateX(0 → -50%)` / `28s linear infinite`
- 태그 필: 10개 × 2세트 (원활한 루프를 위해 복제)
- 태그 스타일: `padding 10px 24px`, `border-radius 50px`, `background rgba(255,255,255,0.2)`

---

### 5-6. Why Songin 섹션

```
┌──────────────────────────────────────────────────────┐
│  [eyebrow]  Why choose Songin                        │
│  [section-heading]  Quality and innovation...        │
│                                                      │
│  ┌────────┐  ┌────────┐  ┌────────┐                 │
│  │ 🛡 안전 │  │ 🤖 로봇 │  │ 🎨 맞춤 │                 │
│  └────────┘  └────────┘  └────────┘                 │
│  ┌────────┐  ┌────────┐  ┌────────┐                 │
│  │ 🚚 배송 │  │ 🏆 경험 │  │ 🎧 지원 │                 │
│  └────────┘  └────────┘  └────────┘                 │
└──────────────────────────────────────────────────────┘
  background: #f9fafb   grid: repeat(3, 1fr) / gap: 28px
```

**카드 구조:**
- 아이콘 박스: 48×48px, `border-radius 12px`, 그라디언트 배경, 아이콘 20px
- 제목 H4: 18px / 700
- 설명: 14px / line-height 1.7
- 호버: `translateY(-4px)` + `shadow-lg`

---

### 5-7. 뉴스 섹션 (Recent News)

```
┌──────────────────────────────────────────────────────┐
│  [eyebrow]  [section-heading]                        │
│                                                      │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐            │
│  │ 사진  │  │ 사진  │  │ 사진  │  │ 사진  │            │
│  │ 180px│  │ 180px│  │ 180px│  │ 180px│            │
│  │      │  │      │  │      │  │      │            │
│  │ H3   │  │ H3   │  │ H3   │  │ H3   │            │
│  │ 본문  │  │ 본문  │  │ 본문  │  │ 본문  │            │
│  └──────┘  └──────┘  └──────┘  └──────┘            │
└──────────────────────────────────────────────────────┘
  grid: repeat(4, 1fr) / gap: 20px
```

| # | 제목 | 이미지 |
|---|------|--------|
| 1 | 장곡초등학교 설치 완료 | news.jpg |
| 2 | 업계 최초 로봇 용접 기술 | news2.png |
| 3 | 새로운 제품 출시 | news3.png |
| 4 | 색상 옵션 맞춤 설정 | news4.png |

---

### 5-8. CTA 섹션

```
┌───────────────────────────────────────────────┐
│                                               │
│      Complete your space together             │
│                                               │
│         [견적 문의]   [제품 보기]               │
│                                               │
└───────────────────────────────────────────────┘
  background: #1f2937   padding: 120px 0
  text-align: center
```

---

### 5-9. 푸터 (Footer)

```
┌────────────────────────────────────────────────────────────┐
│ SONGIN INDUSTRY │ Company  │ Products │ Support │ Legal    │
│ 설명 텍스트      │ About Us │ 학교가구  │ Contact │ Policy   │
│ 주소·전화번호    │ Community│ 사무가구  │ Quote   │ Terms    │
│                 │ Gallery  │ 맞춤제작  │ FAQ     │ Sitemap  │
│ ─────────────────────────────────────────────────────────  │
│ © 2026 SONGIN INDUSTRY. All rights reserved.    ENG | KOR  │
└────────────────────────────────────────────────────────────┘
  background: #0f172a
  grid: 2fr 1fr 1fr 1fr 1fr / gap: 48px
```

---

## 6. 공통 컴포넌트

### 버튼

| 클래스 | 배경 | 텍스트 색 | 테두리 | 용도 |
|--------|------|----------|--------|------|
| `.btn-primary` | 흰색 | primary-color | 흰색 2px | 히어로 주요 액션 |
| `.btn-outline-white` | 투명 | 흰색 | 흰색 반투명 2px | 히어로 보조 액션 |
| `.btn-outline-dark` | 투명 | text-dark | border-color 2px | 일반 보조 액션 |

- 공통: `padding 14px 32px`, `border-radius 50px`, `font-weight 600`
- 호버: `translateY(-2px)` + shadow 강화

### Eyebrow 레이블

```css
.eyebrow {
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--primary-color);
    margin-bottom: 14px;
}
```

### 섹션 제목 `.section-heading`

```css
.section-heading {
    font-size: clamp(28px, 4vw, 42px);
    font-weight: 700;
    line-height: 1.2;
    color: var(--text-dark);
    margin-bottom: 50px;
}
```

### 서브페이지 H1 제목 (밑줄 포함)

```css
section .inner h1 {
    width: fit-content;       /* 텍스트 너비에 맞게 수축 */
    margin: 0 auto;           /* 중앙 정렬 */
    padding-bottom: 14px;     /* 밑줄 여백 */
}
section .inner h1::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0;
    width: 100%;              /* 텍스트 너비와 동일 */
    height: 4px;
    background: linear-gradient(90deg, primary, secondary);
}
```

---

## 7. 반응형 브레이크포인트

### 1024px (태블릿)

| 변경 요소 | 데스크탑 | 태블릿 |
|----------|---------|--------|
| 히어로 그리드 | `1fr 1fr` + gap 60px | `1fr 1fr` + gap 40px |
| Why 그리드 | `repeat(3, 1fr)` | `repeat(2, 1fr)` |
| 뉴스 그리드 | `repeat(4, 1fr)` | `repeat(2, 1fr)` |
| 푸터 그리드 | `2fr 1fr 1fr 1fr 1fr` | `1fr 1fr 1fr` (brand full-width) |

### 768px (모바일)

| 변경 요소 | 변화 |
|----------|------|
| 히어로 | 텍스트만 표시 (`.hero-right` 숨김) |
| 히어로 그리드 | `1fr` 단일 컬럼 / 텍스트 중앙 정렬 |
| 햄버거 메뉴 | 표시 (`display: flex`) |
| 전체 메뉴 | Fullscreen slide-in (좌측 -100% → 0) |
| Why 그리드 | `1fr` 단일 컬럼 |
| 탭 패널 | `1fr` 단일 컬럼 / 이미지 높이 260px |
| 탭 네비 | 가로 스크롤 가능 |
| 푸터 그리드 | `1fr 1fr` + brand 전체 폭 |
| 푸터 하단 | 세로 정렬 (중앙) |

### 480px (소형 모바일)

| 변경 요소 | 변화 |
|----------|------|
| 뉴스 그리드 | `1fr` |
| 푸터 그리드 | `1fr` |
| 탭 버튼 | 세로 배치 + 테두리 박스 스타일 |
| 전체 그리드 | `1fr` |

---

## 8. 애니메이션 & 인터랙션

### CSS 애니메이션

| 이름 | 동작 | 속도 | 적용 대상 |
|------|------|------|----------|
| `fadeInUp` | `opacity 0→1` + `translateY 30px→0` | 1s ease | 구 히어로 텍스트 |
| `fadeIn` | `opacity 0→1` | 1s ease | `.fade-in` 유틸리티 |
| `slideUp` | `opacity 0→1` + `translateY 30px→0` | 0.6s ease | `.slide-up` 유틸리티 |
| `marquee-scroll` | `translateX(0 → -50%)` | 28s linear infinite | 피처 스트립 태그 |

### JS 인터랙션

| 기능 | 트리거 | 동작 |
|------|--------|------|
| 햄버거 메뉴 | 클릭 | `#gnb` `.active` 토글 + 햄버거 X 변환 |
| 헤더 스크롤 | `scroll` | 100px 이상 시 `.scrolled` (shadow 강화) |
| 앵커 스크롤 | `a[href^="#"]` 클릭 | `scrollIntoView({ behavior: 'smooth' })` |
| 제품 탭 전환 | 탭 버튼 클릭 | `.active` 클래스 토글 → 패널 `display grid/none` |
| Fade-in 카드 | 뷰포트 진입 | `IntersectionObserver` → `.fade-in` 추가 |

### 호버 효과

| 대상 | 효과 |
|------|------|
| 네비 링크 | 배경 반투명 + 하단 그라디언트 언더라인 slide-in |
| 뉴스 카드 | `translateY(-8px)` + `shadow-xl` |
| 뉴스 카드 이미지 | `scale(1.1)` |
| Why 카드 | `translateY(-4px)` + `shadow-lg` |
| 탭 링크 화살표 | `gap 8px → 14px` (화살표 우측 이동 효과) |
| 버튼 | `translateY(-2px)` + shadow 강화 |

---

## 9. 파일 구조

```
송인산업/
├── index.html                    # 메인 (영문)
├── index-kor.html               # 메인 (한국어)
├── about us.html                # 회사소개 (영문)
├── about-us-kor.html            # 회사소개 (한국어)
├── Products.html                # 제품소개 (영문)
├── Products-kor.html            # 제품소개 (한국어)
├── Gallery.html                 # 갤러리 (영문)
├── Gallery-kor.html             # 갤러리 (한국어)
├── Community.html               # 커뮤니티 (영문)
├── Community-kor.html           # 커뮤니티 (한국어)
├── Customer Support.html        # 고객지원 (영문)
├── Customer-Support-kor.html    # 고객지원 (한국어)
│
├── css/
│   └── style.css               # 전체 공유 스타일시트
│
├── js/
│   ├── language.js             # 언어 전환 로직
│   └── ie.js                   # IE 미지원 안내
│
├── img/
│   ├── logo.png                # 로고
│   ├── main.png                # 히어로 메인 제품 이미지
│   ├── visual.mp4              # 히어로 배경 영상
│   ├── news.jpg                # 장곡초등학교 설치
│   ├── news2.png               # 로봇 용접
│   ├── news3.png               # 신제품 접이식 테이블
│   ├── news4.png               # 색상 옵션
│   ├── ENG-P1.png ~ ENG-P6.png # 제품 이미지
│   └── SI/                     # 지역별 사진
│
├── CLAUDE.md                   # Claude Code 가이드
├── DESIGN.md                   # 📄 현재 문서
└── backup/                     # 파일 백업본
```

---

## 10. 언어 전환 시스템

### 페이지 매핑 (`js/language.js`)

| 영문 파일 | 한국어 파일 |
|----------|------------|
| `index.html` | `index-kor.html` |
| `about%20us.html` | `about-us-kor.html` |
| `Products.html` | `Products-kor.html` |
| `Gallery.html` | `Gallery-kor.html` |
| `Community.html` | `Community-kor.html` |
| `Customer%20Support.html` | `Customer-Support-kor.html` |

### 동작 방식

1. `DOMContentLoaded` → `initLanguageSwitcher()` 실행
2. 현재 URL의 파일명이 `-kor.html` 포함 여부로 언어 감지
3. 해당 언어 버튼에 `.active` 클래스 적용
4. 언어 버튼 클릭 → `localStorage.preferredLanguage` 저장 → 대응 페이지로 이동

### 주의사항

- 영문 페이지 파일명에 공백이 있어 URL에서 반드시 `%20`으로 인코딩
  - ✅ `./about%20us.html`
  - ❌ `./about us.html`
- 한국어 페이지는 모두 하이픈(`-`) 사용으로 공백 없음

---

*최종 업데이트: 2026년 3월*
