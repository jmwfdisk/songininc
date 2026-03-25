# 개발 현황 리포트 — SONGIN INDUSTRY

> 기준일: 2026-03-03
> 작성: Claude Code 세션 기록 기반

---

## 전체 완료율

| 영역 | 상태 | 완성도 |
|------|------|--------|
| 페이지 구조 (12개) | ✅ 완료 | 100% |
| 디자인 시스템 | ✅ 완료 | 100% |
| 반응형 레이아웃 | ✅ 완료 | 100% |
| 언어 전환 (ENG/KOR) | ✅ 완료 | 100% |
| 제품 슬라이더 (Swiper) | ✅ 완료 | 100% |
| 갤러리 라이트박스 | ✅ 완료 | 100% |
| 커뮤니티 뉴스 | ✅ 완료 | 100% |
| 고객지원 폼 UI | ✅ UI 완료 | 50% (백엔드 미연결) |
| 이미지 최적화 | ❌ 미완 | 0% |
| 폼 백엔드 연동 | ❌ 미완 | 0% |
| SEO 메타 태그 일관성 | 🟡 부분 완료 | 70% |
| 콘텐츠 일관성 | 🟡 부분 완료 | 85% |

---

## 완료된 작업 이력 (이번 개발 세션)

### 2026-03-03 — 전체 사이트 버그 수정

| # | 수정 내용 | 영향 범위 |
|---|----------|---------|
| 1 | 서브페이지 10개 푸터 전면 재건 | 10개 HTML |
| 2 | 영문 서브페이지 5개 네비 URL 인코딩 수정 (`%20`) | 5개 HTML |
| 3 | 저작권 연도 2025 → 2026 | 10개 HTML |
| 4 | 서브페이지 히어로 h1 `::after` 그라디언트 언더라인 제거 | 10개 HTML |
| 5 | 영문 페이지 한국어 메타 설명 → 영문으로 교체 | `about us.html`, `Products.html` |
| 6 | `about-us-kor.html` "needs를" → "필요를" 혼용 언어 수정 | 1개 HTML |
| 7 | `Products-kor.html` 중복 `::after` CSS 규칙 제거 | 1개 HTML |

### 2026-03-03 — UI 개선

| # | 수정 내용 | 파일 |
|---|----------|------|
| 8 | 히어로 콜라주 20% 확대 (rows 120→144px, max-width 500→600px) | `css/style.css` |
| 9 | 스탯 카드 문구 변경 (숫자→브랜드 문구: 업계 최초/로봇 용접 기술, 20년+/제조 노하우) | `index.html`, `index-kor.html` |
| 10 | 스탯 카드 strong font-size 26px → 18px | `css/style.css` |
| 11 | `.hc-robotic p` font-size 11px → 14px | `css/style.css` |
| 12 | 전체 사이트 "30년/30+" → "20년/20+" 일괄 변경 (마르키×2, Why 카드 등) | `index.html`, `index-kor.html` |
| 13 | 네비 메뉴 폰트 15px → 18px (20% 증가) | `css/style.css` |
| 14 | 언어 버튼 폰트 11px → 13px (20% 증가) | `css/style.css` |

---

## 알려진 이슈 (미해결)

### 🔴 높은 우선순위

| # | 이슈 | 파일 | 내용 |
|---|------|------|------|
| I-1 | 고객지원 폼 미작동 | `Customer Support.html`, `Customer-Support-kor.html` | 폼 `action` 미설정, 실제 이메일 전송 불가. Formspree 또는 서버 연동 필요 |
| I-2 | `news2.png` 6.5MB 초대용량 | `img/news2.png` | 모바일 로딩 심각한 저하 — WebP 변환 필수 |

### 🟡 중간 우선순위

| # | 이슈 | 파일 | 내용 |
|---|------|------|------|
| I-3 | `about us.html` 메타 설명 "over 30 years" | `about us.html` | 사이트 내 "20+ Years" 표기와 불일치 |
| I-4 | `Gallery.html` 메타 설명 한국어 | `Gallery.html` | `"송인산업의 제품 설치 사례와 갤러리를 확인하세요."` — 영문 페이지에 한국어 |
| I-5 | Swiper pagination `top: 973px` 하드코딩 | `Products.html`, `Products-kor.html` | 레이아웃/뷰포트 크기 변경 시 위치 오류 |
| I-6 | `S1.png` 미사용 | `img/S1.png` | 2.2MB 파일이 갤러리에 표시 안 됨 |
| I-7 | `localStorage` 언어 저장 미활용 | `js/language.js` | 저장은 하지만 다음 방문 시 자동 적용 없음 |
| I-8 | 커뮤니티 reveal 구현 방식 불일치 | `Community.html` vs `index.html` | 홈: CSS 클래스 방식 / 커뮤니티: JS 인라인 스타일 방식 |
| I-9 | 제품 이미지 alt 텍스트 부실 | `Products.html`, `Products-kor.html` | "Product 1~6" → 제품 실명으로 교체 필요 |
| I-10 | `about us.html` stats-section CSS 있으나 HTML 콘텐츠 없음 | `about us.html` | 영문 페이지에 `.stats-section` 스타일 정의만 있고 실제 마크업 없음 |

### 🟢 낮은 우선순위 / 기술 부채

| # | 이슈 | 내용 |
|---|------|------|
| I-11 | `js/ie.js` 미로드 | 어떤 페이지에서도 로드 안 함. 삭제 또는 로드 추가 필요 |
| I-12 | 미사용 이미지 파일 | `brand4.jpg`, `무제 폴더/news1~3.jpg`, `news4.jpg` — 삭제로 용량 절감 (~800KB) |
| I-13 | 공통 JS 코드 중복 | 동일한 모바일 메뉴/스크롤 코드가 12개 파일에 복제 |
| I-14 | 갤러리 필터 단일 카테고리 | "All Projects"와 "S1 Backrest" 필터가 동일한 결과 출력 |
| I-15 | `ie.js`의 `console.log` 2개 | 프로덕션 코드에 디버그 로그 잔재 |
| I-16 | FAQ, Privacy Policy, Terms of Use | 모든 링크가 `href="#"` — 실제 페이지 없음 |

---

## 콘텐츠 현황

### 문구 일관성 체크

| 문구 | 현황 |
|------|------|
| 경험 연도 | ✅ 홈(영/한), 마르키, Why 카드 → 전체 "20+/20년+" 통일 완료 |
| 회사 설명 | ⚠️ `about us.html` 메타 설명에 "30 years" 잔존 |
| 주소 | ✅ 모든 페이지 동일 (충청북도 옥천군 옥천동이로 389-11) |
| 전화번호 | ✅ 043-733-9505 통일 |
| 저작권 연도 | ✅ 전체 2026 통일 |

### 뉴스 카드 날짜 (최신→구)

| 날짜 | 제목 |
|------|------|
| 2025-01-15 | 장곡초등학교 설치 완료 |
| 2024-12-20 | 업계 최초 로봇 용접 기술 도입 |
| 2024-11-10 | 새로운 제품 소개 (올인원 접이식) |
| 2024-10-05 | 다양한 액세서리 색상 옵션 |

---

## 권장 다음 작업 (To-Do)

### 즉시 (빠른 수정)

```
[ ] Gallery.html 메타 설명 영문으로 교체
[ ] about us.html 메타 설명 "30 years" → "20+" 수정
[ ] Swiper pagination top: 973px 제거 (position:relative 방식으로 변경)
```

### 단기 (1~2주)

```
[ ] news2.png WebP 변환 (6.5MB → 목표 100~200KB)
[ ] 제품 이미지 6장 WebP 변환 및 압축
[ ] 미사용 이미지 정리 (brand4.jpg, 무제 폴더/, news4.jpg)
[ ] 제품 슬라이드 alt 텍스트 실제 제품명으로 개선
[ ] 갤러리 S1.png 이미지 활용 또는 제거
```

### 중기 (1개월 이내)

```
[ ] 고객지원 폼 백엔드 연동 (Formspree, Netlify Forms 등)
[ ] localStorage 언어 설정 자동 적용 구현
[ ] FAQ 페이지 콘텐츠 작성 및 연결
[ ] Privacy Policy, Terms of Use 페이지 작성
[ ] og:image, og:title 등 Open Graph 메타 태그 추가 (SNS 공유 최적화)
[ ] 갤러리 이미지 추가 (현재 6장 → 확장)
```

### 장기 / 선택사항

```
[ ] 공통 JS(헤더 메뉴/스크롤) 외부 파일로 분리
[ ] 이미지 lazy loading 추가 (loading="lazy")
[ ] 로봇 텍스트(robots.txt) 및 sitemap.xml 작성
[ ] 웹 접근성 개선 (ARIA 레이블, 포커스 관리)
```

---

## SEO 현황

| 항목 | 상태 | 메모 |
|------|------|------|
| `<title>` | ✅ 전체 작성됨 | |
| `<meta description>` | 🟡 대부분 작성 | Gallery.html 한국어 / about us.html 불일치 |
| `lang` attribute | ✅ 영문 `lang="en"`, 한국어 `lang="ko"` | |
| `favicon.ico` | ✅ 있음 | |
| Open Graph tags | ❌ 없음 | SNS 공유 시 미리보기 없음 |
| `robots.txt` | ❌ 없음 | |
| `sitemap.xml` | ❌ 없음 | |
| 구조화 데이터 (JSON-LD) | ❌ 없음 | |
| 이미지 alt 텍스트 | 🟡 부분 작성 | 제품 슬라이드 개선 필요 |
