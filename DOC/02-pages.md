# 페이지 인벤토리 — SONGIN INDUSTRY

> 리포트 작성일: 2026-03-03
> 총 12개 HTML 파일 (영문 6 + 한국어 6)

---

## 페이지 대응 목록

| 영문 파일 | 한국어 파일 | 페이지 | 상태 |
|-----------|------------|--------|------|
| `index.html` | `index-kor.html` | 홈 | ✅ 완료 |
| `about us.html` | `about-us-kor.html` | 회사소개 | ✅ 완료 |
| `Products.html` | `Products-kor.html` | 제품소개 | ✅ 완료 |
| `Gallery.html` | `Gallery-kor.html` | 갤러리 | ✅ 완료 |
| `Community.html` | `Community-kor.html` | 커뮤니티 | ✅ 완료 |
| `Customer Support.html` | `Customer-Support-kor.html` | 고객지원 | ✅ 완료 |

---

## 페이지별 상세 분석

---

### 1. 홈 (`index.html` / `index-kor.html`)

**섹션 구성:**

| 섹션 | 클래스 | 내용 |
|------|--------|------|
| 히어로 | `.hero-section` | 배경 영상(`visual.mp4`) + 그라디언트 오버레이, 좌측 CTA 텍스트, 우측 콜라주 그리드 (3×3) |
| 태그라인 | `.tagline-section` | "Don't just fill a room, **define it**" + 설명 문구 |
| 제품 탭 | `.product-tabs-section` | School / Office / Custom 3개 탭, 탭별 이미지+텍스트 |
| 피처 스트립 | `.feature-strip` | 마르키 스크롤 배너 (태그 필 10개 × 2 반복) |
| Why Songin | `.why-section` | 6개 카드 그리드 (아이콘+제목+설명) |
| 뉴스 | `.news-section` | 4개 뉴스 카드 |
| CTA | `.cta-section` | 견적 요청 / 제품 보기 버튼 |
| 푸터 | `footer` | 5컬럼 그리드 |

**히어로 콜라주 구성 (3열 × 3행, `max-width: 600px`):**

```
[hc-main (1열,1-2행)]  [hc-stat (2-3열,1행)        ]
[                   ]  [hc-install(2열,2)] [hc-colors(3열,2)]
[hc-robotic(1열,3)] [hc-product(2열,3)] [hc-factory(3열,3)]
```

**JS 인터랙션 (인라인):**
- 모바일 메뉴 토글
- 스크롤 헤더 `scrolled` 클래스
- 앵커 스무스 스크롤
- 제품 탭 전환 (`data-tab` → `#tab-*`)
- IntersectionObserver → `.news-card`, `.why-card` `.fade-in` 추가

**스탯 카드 현재 문구:**
- 영문: `Korea's First` / `Robotic Welding` + `20+ Years` / `of Expertise`
- 한국어: `업계 최초` / `로봇 용접 기술` + `20년+` / `제조 노하우`

---

### 2. 회사소개 (`about us.html` / `about-us-kor.html`)

**섹션 구성:**

| 섹션 | 내용 |
|------|------|
| 히어로 (200px 그라디언트) | "About SONGIN INDUSTRY" / "Leading the Future of Office & School Furniture" |
| Our Story | 2단락 회사 소개 텍스트 |
| Our Values | 4개 카드: Quality / Innovation / Customer Focus / Sustainability |
| 푸터 | 표준 5컬럼 |

**한국어 페이지 추가 섹션:**
- `stats-section` (CSS 정의 있음): 가구 설치 건수, 만족 고객, 제품 종류, 경험 연도 스탯 표시

**주의 사항:**
- 영문 메타 설명: "over 30 years of expertise" → **`20+`로 수정 필요** (사이트 내 다른 문구와 불일치)
- `stats-section` CSS가 `about us.html`에 정의되어 있으나 해당 HTML 내 실제 `stats-section` 콘텐츠 없음

---

### 3. 제품소개 (`Products.html` / `Products-kor.html`)

**섹션 구성:**

| 섹션 | 내용 |
|------|------|
| 히어로 (200px) | "Explore Our Product Range" |
| 제품 서브메뉴 | All / Portable Stool Table (Premium) / Portable Stool Table (Standard) / Cabinet / Color Chart |
| Swiper 슬라이더 | 7개 슬라이드 (ENG-P1~P6.png + Cus.png), 카테고리 필터링 |
| Features Grid | 4개 카드: Comfortable Seating / Durable Tables / Customizable Colors / Easy Installation |
| 푸터 | 표준 5컬럼 |

**제품 카테고리 매핑:**

| 카테고리 | 이미지 | 비고 |
|---------|--------|------|
| `premium` | ENG-P1.png, ENG-P2.png | 프리미엄 이동식 스툴 테이블 |
| `standard` | ENG-P3.png, ENG-P4.png | 스탠다드 이동식 스툴 테이블 |
| `cabinet` | ENG-P5.png, ENG-P6.png | **"Coming Soon" 표시** (JS로 처리) |
| `custom` | Cus.png | 색상 차트 |

**JS 인터랙션 (인라인):**
- Swiper 8.0 초기화 (`slidesPerView`: 1/2/2 반응형)
- 카테고리 필터 → Swiper 재초기화
- `cabinet` 선택 시 "Coming Soon" 슬라이드 동적 생성

**알려진 버그:**
- `swiper-pagination` CSS에 `top: 973px` 하드코딩 → 레이아웃 변경 시 위치 오류 가능성

---

### 4. 갤러리 (`Gallery.html` / `Gallery-kor.html`)

**섹션 구성:**

| 섹션 | 내용 |
|------|------|
| 히어로 (200px) | "Gallery" / "Our Installation Projects & Showcase" |
| 프로젝트 소개 | `.gallery-intro` 텍스트 블록 |
| 필터 버튼 | All Projects / S1 Backrest |
| 이미지 그리드 | `auto-fit minmax(300px, 1fr)`, 6장 이미지 |
| 라이트박스 | 클릭 시 전체 화면 팝업 (ESC 닫기 지원) |
| 푸터 | 표준 5컬럼 |

**갤러리 이미지 목록:**

| 파일 | 출처 | 카테고리 |
|------|------|---------|
| `img/SI/chung buk/1.JPG` | 충북 설치 현장 | chungbuk |
| `img/SI/chung buk/2.JPG` | 충북 설치 현장 | chungbuk |
| `img/SI/chung buk/3.JPG` | 충북 설치 현장 | chungbuk |
| `img/SI/JANG/1.jpg` | 장곡초등학교 | chungbuk |
| `img/SI/JANG/2.jpg` | 장곡초등학교 | chungbuk |
| `img/SI/JANG/3.jpg` | 장곡초등학교 | chungbuk |

**알려진 문제:**
- 영문 페이지 메타 설명이 한국어: `"송인산업의 제품 설치 사례와 갤러리를 확인하세요."` → **영문으로 교체 필요**
- 필터가 `chungbuk` 단일 카테고리만 있어 "All Projects"와 실질적으로 동일
- `img/S1.png` 파일 있으나 갤러리에 미사용

---

### 5. 커뮤니티 (`Community.html` / `Community-kor.html`)

**섹션 구성:**

| 섹션 | 내용 |
|------|------|
| 히어로 (200px) | "Community" / "Latest News & Updates" |
| 소개 텍스트 | `.community-intro` |
| 뉴스 그리드 | 4개 뉴스 카드 (4컬럼 → 2컬럼 → 1컬럼 반응형) |
| CTA 섹션 | 그라디언트 배경, 연락처 버튼 |
| 푸터 | 표준 5컬럼 |

**뉴스 카드 목록:**

| 날짜 | 제목 (영문) | 이미지 |
|------|------------|--------|
| 2025-01-15 | Installation at Janggok Elementary School | news.jpg |
| 2024-12-20 | Industry's First Robotic Welding Technology | news2.png |
| 2024-11-10 | Discover Our Newest Products | news3.png |
| 2024-10-05 | Versatile Accessory Color Options | news4.png |

**JS 인터랙션:**
- IntersectionObserver → `.news-card` 스크롤 reveal (opacity + translateY)

---

### 6. 고객지원 (`Customer Support.html` / `Customer-Support-kor.html`)

**섹션 구성:**

| 섹션 | 내용 |
|------|------|
| 히어로 (200px) | "Customer Support" |
| 연락처 정보 | 주소, 전화, 지도 또는 연락처 폼 |
| 문의 폼 | 이름, 이메일, 메시지, 제출 버튼 |
| 푸터 | 표준 5컬럼 |

**주의 사항:**
- 폼 제출(`action`) 미구현 — 정적 사이트이므로 실제 전송 불가
- 폼 백엔드 연동(이메일 서비스, Formspree 등) 미설정

---

## 공통 헤더 구조

모든 12개 페이지에 동일하게 복제된 구조:

```html
<header id="header">
  <div class="inner">
    <h1>로고 + SONGIN INDUSTRY</h1>
    <nav><ul id="gnb">5개 메뉴</ul></nav>
    <div class="language-switcher">ENG / KOR 버튼</div>
    <ul class="util"><!-- CSS: display:none --></ul>
    <div class="menu-toggle" id="menuToggle">햄버거</div>
  </div>
</header>
```

## 공통 푸터 구조

```html
<footer>
  <div class="inner">
    <div class="footer-grid">  <!-- 5컬럼 그리드 -->
      <div class="footer-brand">브랜드 + 주소</div>
      <div class="footer-col">Company 링크</div>
      <div class="footer-col">Products 링크</div>
      <div class="footer-col">Support 링크</div>
      <div class="footer-col">Legal 링크</div>
    </div>
    <div class="footer-bottom">저작권 + 언어 전환</div>
  </div>
</footer>
```
