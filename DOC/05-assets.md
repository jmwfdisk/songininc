# 에셋 인벤토리 — SONGIN INDUSTRY

> 리포트 작성일: 2026-03-03

---

## 이미지 파일 목록 (`img/`)

### 핵심 에셋

| 파일 | 크기 | 용도 | 사용 페이지 |
|------|------|------|------------|
| `logo.png` | 594KB | 헤더 로고 (height:29px) | 전체 12페이지 |
| `visual.mp4` | 2.3MB | 히어로 배경 영상 | index.html, index-kor.html |
| `main.png` | 2.3MB | 히어로 콜라주 메인 제품 | index.html, index-kor.html |
| `favicon.ico` | 9.3KB | 브라우저 탭 아이콘 | 전체 12페이지 |

### 뉴스 / 커뮤니티 이미지

| 파일 | 크기 | 용도 | 비고 |
|------|------|------|------|
| `news.jpg` | 324KB | 장곡초등학교 설치 | 홈, 커뮤니티, 히어로 콜라주 |
| `news2.png` | 6.5MB | 로봇 용접 공장 | 홈, 커뮤니티, 히어로 콜라주 |
| `news3.png` | 551KB | 신제품 소개 | 홈, 커뮤니티, 히어로 콜라주 |
| `news4.png` | 620KB | 색상 옵션 (최신) | 홈, 커뮤니티, 히어로 콜라주 |
| `news4.jpg` | 73KB | 구버전 news4 | **미사용** (news4.png로 교체됨) |

> ⚠️ `news2.png`가 **6.5MB**로 매우 큼 — 웹 최적화 필요 (WebP 변환 권장)

### 제품 카탈로그 이미지

| 파일 | 크기 | 카테고리 |
|------|------|---------|
| `ENG-P1.png` | 913KB | Portable Stool Table - Premium |
| `ENG-P2.png` | 919KB | Portable Stool Table - Premium |
| `ENG-P3.png` | 2.1MB | Portable Stool Table - Standard |
| `ENG-P4.png` | 1.9MB | Portable Stool Table - Standard |
| `ENG-P5.png` | 1.8MB | Cabinet |
| `ENG-P6.png` | 1.8MB | Cabinet |
| `Cus.png` | 2.8MB | Color Chart |

> ⚠️ 제품 이미지 대부분 1~3MB 수준 — 모두 최적화 필요

### 갤러리 이미지

| 파일 | 크기 | 프로젝트 |
|------|------|---------|
| `S1.png` | 2.2MB | S1 Backrest — **현재 갤러리에 미사용** |
| `SI/chung buk/1.JPG` | 434KB | 충북 설치 현장 |
| `SI/chung buk/2.JPG` | 267KB | 충북 설치 현장 |
| `SI/chung buk/3.JPG` | 42KB | 충북 설치 현장 |
| `SI/JANG/1.jpg` | 479KB | 장곡초등학교 |
| `SI/JANG/2.jpg` | 497KB | 장곡초등학교 |
| `SI/JANG/3.jpg` | 457KB | 장곡초등학교 |

### 기타 / 미사용 에셋

| 파일 | 크기 | 상태 |
|------|------|------|
| `brand4.jpg` | 175KB | **미사용** |
| `무제 폴더/news1.jpg` | 277KB | **미사용** (구버전 뉴스 이미지) |
| `무제 폴더/news2.jpg` | 157KB | **미사용** (구버전 뉴스 이미지) |
| `무제 폴더/news3.jpg` | 121KB | **미사용** (구버전 뉴스 이미지) |
| `news4.jpg` | 73KB | **미사용** (news4.png로 대체됨) |

---

## 외부 CDN 에셋

| 라이브러리 | 버전 | 파일 | 용량 (approx) |
|-----------|------|------|--------------|
| Font Awesome | 6.4.0 | all.min.css + 웹폰트 | ~400KB |
| Swiper | 8.0 | swiper-bundle.min.css + .min.js | ~120KB |

---

## 용량 분석 요약

| 분류 | 총 용량 (approx) | 메모 |
|------|-----------------|------|
| 영상 | 2.3MB | `visual.mp4` 1개 |
| 제품 이미지 | ~12MB | ENG-P1~P6 + Cus.png |
| 뉴스 이미지 | ~8MB | news2.png가 6.5MB로 압도적 |
| 갤러리 이미지 | ~2.2MB | SI 폴더 6장 |
| 로고 | 594KB | PNG 최적화 여지 있음 |
| **미사용 에셋** | **~800KB** | brand4.jpg, 구버전 뉴스, news4.jpg |

---

## 최적화 권고사항

| 우선순위 | 파일 | 조치 |
|---------|------|------|
| 🔴 높음 | `news2.png` (6.5MB) | WebP 변환, 최대 200KB 목표 |
| 🔴 높음 | `ENG-P3.png`, `ENG-P4.png` (~2MB 각) | WebP 변환 |
| 🟡 중간 | `ENG-P5.png`, `ENG-P6.png`, `Cus.png` (~1.8MB~2.8MB) | WebP 변환 |
| 🟡 중간 | `main.png` (2.3MB), `S1.png` (2.2MB) | WebP 변환 |
| 🟢 낮음 | `logo.png` (594KB) | PNG 압축 또는 SVG 전환 고려 |
| 🟢 낮음 | 미사용 파일 삭제 | `brand4.jpg`, `무제 폴더/`, `news4.jpg` |

---

## 이미지 `alt` 텍스트 현황

| 이미지 | alt 텍스트 | 평가 |
|--------|-----------|------|
| 로고 | "송인산업 로고" | ✅ 적절 |
| hero main | "Songin Industry Products" | ✅ |
| hc-install | "School Installation" | ✅ |
| news cards | 각 기사 제목 또는 설명 | ✅ |
| 갤러리 이미지 | "Chungbuk Project 1~3", "Jang Project 1~3" | 🟡 더 구체적으로 개선 가능 |
| 제품 슬라이드 | "Product 1~6", "Custom Product" | ⚠️ 개선 필요 — 제품명으로 교체 권장 |
