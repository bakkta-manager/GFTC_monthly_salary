# 본문 크기와 레이아웃 통일 검증

Date: 2026-10-24
Feature: content-width-balance
Design: ../02-design/features/content-width-balance.design.md (2026-10-24 기준)

## 결과
설계 7개 항목을 수동 대조하여 모두 충족했다. 구현 차이 없음.

1. 버전 37을 기준으로 수정: CSS를 제외한 HTML/스크립트 문자열이 원본과 완전히 동일하다. 루트 원본과 배포 HTML도 동일하다.
2. 도입부 전체 화면 연출 보존: 1000px 높이에서 종이 질감 메시지 최소 높이 935px 유지.
3. 이후 섹션 자연 높이: evidence/proble​​ms의 min-height 0, 다른 하단 섹션도 양의 최소 높이 없음. 1800px 높이 뷰포트에서 각각 837.47px/926.30px로 내용에 맞춰 표시.
4. 공통 콘텐츠 폭/정렬: 데스크톱 최대 832px 외곽 폭, 24px 내부 여백. 모바일 20px 내부 여백. 두 섹션의 실제 콘텐츠 좌우 경계 일치.
5. 제목/본문/행간: 1440/1920px에서 제목 40px, 본문과 강조문 19px, 본문 행간 35.15px. 320/390/768px에서 제목 28px, 본문과 강조문 17px, 행간 31.45px로 두 섹션 일치.
6. 320/390/768/1440/1920px Chrome에서 가로 넘침 및 pageerror 없음. git diff --check 통과.
7. 데스크톱의 증거/훈련, 모바일 훈련 스크린샷을 확인했다. 제목 위계와 타임라인/인용문 구조 유지.

## 증빙
- /tmp/reading-layout-check.json
- /tmp/reading-evidence-1440.png
- /tmp/reading-evidence-390.png
- /tmp/reading-problems-1440.png
- /tmp/reading-problems-390.png

변경 범위는 표시용 CSS다. 폼 네트워크·데이터베이스 변경이 없어 실제 상담 저장 재시험은 하지 않았다.
