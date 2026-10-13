# 프로젝트 개요 — SONGIN INDUSTRY

> 최종 업데이트: 2026-10-13

## 한 줄 요약
(주)송인산업(학교 · 사무 가구 제조, 정부조달 우수제품 업체)의 회사 홈페이지. **빌드 도구 없는 순수 정적 사이트**를 GitHub Pages로 `songininc.com`에 배포.

## 기술 스택
| 항목 | 내용 |
|---|---|
| 마크업/스타일 | HTML5, CSS3 (CSS 변수), 바닐라 JS |
| 폰트 | Google Fonts — Noto Sans KR, Montserrat (`style.css` 상단 `@import`) |
| 아이콘 | Font Awesome 6.4.0 (cdnjs) |
| 호스팅 | GitHub Pages, `main` 푸시 시 자동 배포, `CNAME` = songininc.com |
| 빌드 · 테스트 | 없음 |

## 디렉토리 구조
```
/
├── index.html / index-kor.html              홈 (루트는 첫 방문 시 한국어로 이동)
├── about us.html / about-us-kor.html         회사소개
├── Products.html / Products-kor.html         제품 (카탈로그 데이터)
├── Gallery.html / Gallery-kor.html           갤러리 (납품사진)
├── Customer Support.html / Customer-Support-kor.html  고객지원 (FAQ · 연락처)
├── privacy*.html / terms*.html / sitemap*.html         정책 · 사이트맵
├── sitemap.xml, robots.txt, CNAME, favicon.ico
├── catalogue.pdf                              카탈로그 다운로드 (2026 10.13본 압축)
├── css/style.css                              디자인 시스템 + 홈 스타일 + 공통 부품
├── js/language.js                             언어 전환 (ie.js는 미사용)
├── img/catalog/                               2026 카탈로그 이미지 (product/color/logo/func/site)
├── img/…                                      이전 이미지 (일부 미사용)
├── DOC/                                       개발 문서 (이 폴더)
└── backup/                                    작업 전 사본 (.gitignore로 배포 제외)
```

## 아키텍처 요점
- **공유 컴포넌트 없음**: 헤더 · 네비 · 푸터 HTML이 16개 파일에 복사돼 있음 → 공통 변경은 16개 모두 수정.
- **페이지 전용 CSS는 각 HTML의 인라인 `<style>`**, 홈만 예외(`style.css`에 있음).
- **영문 · 한글 쌍**: 파일명 매핑은 `js/language.js`의 `languageMap`. 영문 파일명의 공백은 링크에서 `%20`.
- 자세한 내용: 페이지 [02](./02-pages.md) · 디자인 [03](./03-design-system.md) · JS [04](./04-javascript.md) · 이미지 [05](./05-assets.md) · 현황 [06](./06-dev-status.md) · 일지 [07](./07-dev-log.md)
