# 이미지 · 파일 — SONGIN INDUSTRY

> 최종 업데이트: 2026-10-13

## img/catalog/ (2026 카탈로그, 웹용 축소본 · 약 22MB)
| 폴더 | 파일 수 | 내용 |
|---|---|---|
| `product/` | 22 | S1 · S2 16모델 PNG(투명 배경, 최대 900px), 홈 히어로용 `thumb-*.jpg`, 홈 S 카드 `s2-family.png` · `s1-family.png` |
| `color/` | 31 | 상판 `top-1~4`, 등받이 `back-*` 7색, 원형 `round-*` 8색, 측면커버 `cover-*` 12색 |
| `logo/` | 9 | 조달우수 · MAS · 환경표지 · SPS · Q마크 · G-PASS · ISO · 특허 |
| `func/` | 14 | 표지 이미지(`hero-s1/s2`), 제품 특징 스케치, 기능 · 시험 사진, 색상 콜라주 `design-identity.png` |
| `site/` | 18 | 납품사진(갤러리 16장), 항균 섹션 사진, 공장 항공사진 `factory-aerial.jpg` |

### 원본 위치
- 카탈로그 번들: `~/Desktop/untitled/project/` (`assets/`, `uploads/`)
- 제품 원본: iCloud `회사용 폴더/송인산업 카달로그 재디자인 작업/images/제품사진 /`
- 카탈로그 PDF 원본(103MB): `~/Desktop/26.10.13 신 카달로그 디자인(페이지 수정).pdf`

### 추가 · 교체 방법 (macOS 기본 도구)
```bash
sips -Z 1200 원본.png --out img/catalog/product/새파일.png          # 투명 PNG 축소
sips -s format jpeg -s formatOptions 82 -Z 1800 원본 --out img/catalog/site/새파일.jpg  # 사진 → JPG
```

## catalogue.pdf
- 10.13본, **4.4MB** (원본 103MB를 200dpi 이미지로 다시 만든 것 — GitHub 100MB 제한). 글자 선택 · 검색 불가.

## 이전 이미지 (`img/` 바로 아래)
- 계속 사용: `logo.png`, `news.jpg`, `news2.png`(6.5MB — 압축 필요), `SI/S1-round/현천고등학교.png`
- 미사용(2026-10-13 grep 확인, 삭제 전 재확인): `visual.mp4`, `SI/JANG/`, `SI/chung buk/`, `우수/`, `일반/`, `news4.*`, `ENG-P*.png`, `Cus.png`, `main.png`, `brand4.jpg`, `S1-*`, `S2-*`, `s1-B6(…).png`, `무제 폴더/`
