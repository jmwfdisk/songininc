# 디자인 시스템 — SONGIN INDUSTRY

> 최종 업데이트: 2026-10-13 · 기준: 2026 인쇄 카탈로그 · 정의 위치: `css/style.css` `:root`

## 색상
| 토큰 | 값 | 용도 |
|---|---|---|
| `--brand` | `#F3A32B` | 주황 블록 · 막대 · 태그 · 테두리 · 버튼 · 푸터 |
| `--brand-ink` | `#E8951C` | 흰 배경 위 주황 글자 · 링크 |
| `--brand-dark` | `#C97A0E` | 버튼 hover |
| `--brand-soft` | `#FCEFD9` | 연주황 배경(특징 줄, 아이콘 타일) |
| `--alert` | `#E0362C` | "* 관리시 주의사항" 같은 강조 라벨 |
| `--paper` / `--surface` / `--surface-2` | `#fff` / `#FAF8F5` / `#F1EEE8` | 배경 |
| `--ink` / `--ink-2` / `--ink-3` / `--ink-dark` | `#222` / `#555` / `#888` / `#3a3a3a` | 글자 · 진회색 칩 |
| `--line` | `#e3e3e3` | 구분선 |

옛 토큰(`--primary-color`, `--text-dark`, `--bg-light` …)은 위 값으로 재연결돼 있음. 새 코드에는 새 토큰 사용.

## 글꼴
- 본문: **Noto Sans KR** (300–900) / 영문 제목 · 숫자 · 라벨: **Montserrat** (600–800, 넓은 자간 대문자)
- 큰 제목: 900 굵기, 자간 `--tracking-display` (-0.03em)

## 모서리 · 그림자
- `--radius-sm 4px` / `md 8px` / `lg·xl 14px`(사진 카드) / `pill 999px`
- 그림자는 거의 쓰지 않음 — 구분은 **주황 1px 테두리**로

## 공통 부품 (style.css)
| 클래스 | 모양 |
|---|---|
| `.cat-head` (+`h2`, `.cat-head-sub`, `.cat-head-badge`) | 왼쪽 주황 막대 + 자간 넓은 영문 대문자 제목, 오른쪽 한글 부제, 아래 구분선 |
| `.cat-lead` + `.cat-chip` | 진회색 라벨 칩 + 설명문 |
| `.cat-sub` | 주황 점 소제목 (긴 글은 `<span>`으로 감싸야 점과 같은 줄 유지) |
| `.cat-note` | 작은 주의 문구, `<b>`는 빨강 |
| `.prod-grid` / `.prod-card` / `.model-tag` / `.prod-card-price` | 제품 카드(주황 테두리 사진 + 모델 태그 + G2B · 가격) |
| `.swatch-grid` / `.swatch-box` | 색상 칩 4열(태블릿 3, 모바일 2) |
| `.feat-rows` | 왼쪽 주황 선 + 연주황 배경 줄, `.strong`은 주황 꽉 찬 줄 |
| `.cat-box` | 주황 1px 테두리 상자 |
| `.cert-strip` | 인증 로고 가로 줄 |
| `.photo-card` | 둥근 사진 + 아래 검정 그라데이션 캡션 |
| `.btn-primary` / `.btn-outline-dark` | 주황 꽉 찬 버튼 / 흰 바탕 주황 테두리 버튼 |

## 홈 히어로 카드
`.hero-stack img` — 각 카드 `style="--chair: #색"`으로 테두리 = 사진 속 의자 색, `nth-child`별 회전(-10°, 8°, -7°, 11°).

## 반응형
- 1024px: 푸터 3열, 일부 그리드 축소 / 768px: 햄버거 메뉴, 1열 전환 / 480px: 최소 레이아웃
- 푸터(데스크탑): `minmax(0,1fr) repeat(5, clamp(120px, 11vw, 152px))` — 링크 5열은 같은 너비로 오른쪽 정렬
