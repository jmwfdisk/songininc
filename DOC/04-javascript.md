# JavaScript 구조 — SONGIN INDUSTRY

> 최종 업데이트: 2026-10-13

## 파일
| 파일 | 로드 | 역할 |
|---|---|---|
| `js/language.js` | 16개 페이지 `<script defer>` | ENG/KOR 버튼 → 짝 페이지로 이동, `localStorage.preferredLanguage` 저장 |
| `js/ie.js` | **어디서도 로드 안 함** | 미사용 |
| 인라인 `<script>` | 각 HTML 하단 | 페이지별 동작 |
| 인라인 `<script>` (head) | `index.html`만 | 첫 접속 한국어 이동 |

## language.js
- `languageMap`: 파일명(공백 그대로) → `{kor, eng}`. 8쌍 등록(홈 · 회사소개 · 제품 · 갤러리 · 고객지원 · privacy · terms · sitemap). **새 페이지 추가 시 반드시 등록.**
- 현재 언어 판별: 파일명에 `-kor.html` 포함 여부.

## 첫 접속 한국어 (`index.html` head)
```
저장값 != 'eng'  그리고  referrer가 같은 사이트가 아님  →  location.replace('index-kor.html')
```
- 사이트 내부 이동(ENG 버튼, 영문 로고)은 referrer가 같은 사이트라 영문 유지.
- 테스트한 시나리오: 첫 방문 → 한국어 / ENG 클릭 → 영문 / 영어 선택 후 재접속 → 영문 / 한국어 선택 후 재접속 → 한국어 / 영문 페이지 로고 → 영문.

## 페이지별 인라인 스크립트
| 페이지 | 동작 |
|---|---|
| 공통(전 페이지) | 햄버거 메뉴 토글, 스크롤 100px 넘으면 헤더 `.scrolled` |
| 홈 | 앵커 부드러운 스크롤, `.news-card` · `.why-card` 화면 진입 시 `.fade-in` (IntersectionObserver) |
| 제품 | 화면 가운데 섹션에 맞춰 상단 앵커 탭 `.active` 표시 (IntersectionObserver) |
| 갤러리 | 필터(`data-filter` ↔ `data-category`: `chungbuk`=S1 등받이, `s1-round`=S1 원형), 라이트박스(ESC 닫기) |
| 고객지원 | FAQ 아코디언(하나만 열림) |
| 회사소개 · 정책 · 사이트맵 | 공통 동작만 |

## 삭제된 스크립트 (2026-10-13)
홈 제품 탭 전환, 제품 이미지 캐러셀(prev/next/dot), 커뮤니티 페이지 스크립트.
