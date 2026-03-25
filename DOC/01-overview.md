# 프로젝트 개요 — SONGIN INDUSTRY 웹사이트

> 리포트 작성일: 2026-03-03

---

## 프로젝트 정보

| 항목 | 내용 |
|------|------|
| 클라이언트 | 송인산업 (SONGIN INDUSTRY) |
| 업종 | 사무·학교 가구 제조 |
| 소재지 | 충청북도 옥천군 옥천동이로 389-11 |
| 연락처 | 043-733-9505 |
| 사이트 유형 | 기업 소개 정적 웹사이트 (Static Site) |
| 언어 | 한국어 / 영어 (이중 언어) |
| 저작권 | © 2026 SONGIN INDUSTRY |

---

## 기술 스택

| 분류 | 기술 |
|------|------|
| 마크업 | HTML5 |
| 스타일 | CSS3 (Custom Properties 기반 Design System) |
| 스크립트 | Vanilla JavaScript (ES6+, 빌드 도구 없음) |
| 폰트 아이콘 | Font Awesome 6.4.0 (CDN) |
| 슬라이더 | Swiper 8.0 (CDN, Products 페이지 전용) |
| 빌드 도구 | 없음 (순수 정적) |
| 패키지 매니저 | 없음 |
| 프레임워크 | 없음 |

---

## 디렉토리 구조

```
송인산업/
├── index.html                  # 홈페이지 (영문)
├── index-kor.html              # 홈페이지 (한국어)
├── about us.html               # 회사소개 (영문) ← URL 공백 주의
├── about-us-kor.html           # 회사소개 (한국어)
├── Products.html               # 제품소개 (영문)
├── Products-kor.html           # 제품소개 (한국어)
├── Gallery.html                # 갤러리 (영문)
├── Gallery-kor.html            # 갤러리 (한국어)
├── Community.html              # 커뮤니티 (영문)
├── Community-kor.html          # 커뮤니티 (한국어)
├── Customer Support.html       # 고객지원 (영문) ← URL 공백 주의
├── Customer-Support-kor.html   # 고객지원 (한국어)
├── favicon.ico
├── CLAUDE.md                   # AI 어시스턴트 가이드
├── DESIGN.md                   # 디자인 시스템 문서
├── css/
│   └── style.css               # 전역 스타일시트 (1,541줄)
├── js/
│   ├── language.js             # 언어 전환기
│   └── ie.js                   # IE 브라우저 경고 (비활성)
├── img/
│   ├── logo.png                # 로고
│   ├── visual.mp4              # 히어로 배경 영상
│   ├── main.png                # 메인 제품 이미지
│   ├── news.jpg / news2~4.png  # 뉴스/커뮤니티 이미지
│   ├── ENG-P1~P6.png           # 제품 카탈로그 이미지
│   ├── Cus.png                 # 색상 차트
│   ├── S1.png                  # 갤러리 이미지
│   ├── SI/                     # 설치 사례 (chung buk, JANG 하위 폴더)
│   └── 무제 폴더/              # 미사용 뉴스 이미지 3장
├── DOC/                        # 개발 문서 (이 폴더)
└── .claude/                    # AI 워크스페이스 메타데이터
```

---

## 아키텍처 패턴

### 페이지 구성 (12개)
- 영문 6개 + 한국어 6개 = **총 12개 HTML 파일**
- 공통 컴포넌트(헤더, 네비, 푸터) HTML이 **12개 파일 전체에 수동 복제**
- 공유 컴포넌트 없음 → 공통 UI 변경 시 **12개 파일 모두 수정 필요**

### CSS 아키텍처
- 단일 파일(`css/style.css`) — 전역 공유
- 페이지별 추가 스타일은 각 HTML `<head>` 내 `<style>` 인라인 블록에 작성
- CSS Custom Properties(`:root` 변수)로 디자인 토큰 관리

### JavaScript 아키텍처
- `js/language.js`: 언어 전환 전용 외부 파일 (모든 페이지 `defer` 로드)
- 페이지별 인터랙션: 각 HTML 파일 최하단 인라인 `<script>` 블록
- `js/ie.js`: IE 감지 경고 (현재 어떤 페이지에서도 로드하지 않음 — 사실상 미사용)

### 반응형 브레이크포인트
| 브레이크포인트 | 적용 내용 |
|--------------|---------|
| 1024px 이하 | 2컬럼 레이아웃, 네비 간격 축소 |
| 768px 이하 | 모바일 전환, 햄버거 메뉴 활성화, 히어로 콜라주 숨김 |
| 480px 이하 | 단일 컬럼, 탭 세로 스택, 푸터 단일 컬럼 |

---

## URL 인코딩 현황

영문 파일명에 공백이 포함된 두 페이지는 HTML 링크에서 `%20` 인코딩 필요:

| 파일명 | 링크 URL |
|--------|---------|
| `about us.html` | `./about%20us.html` |
| `Customer Support.html` | `./Customer%20Support.html` |

`js/language.js`의 `languageMap`은 인코딩되지 않은 파일명(`'about us.html'`)을 키로 사용하며, 브라우저가 `pathname.split('/').pop()`으로 디코딩된 값을 반환하기 때문에 정상 작동.
