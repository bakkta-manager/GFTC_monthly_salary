# 본문 레이아웃 정리 완료

Date: 2026-10-24
Feature: content-width-balance
Status: completed

10월 15일 밤 버전 37을 기준으로 도입부 이후의 글자 크기·콘텐츠 폭·행간·세로 간격을 통일했다. 화면 전체 높이 연출은 종이 질감 메시지까지 유지하며 그 아래는 콘텐츠에 맞는 높이를 사용한다. 증거/훈련 제목 및 본문은 동일한 토큰을 사용하고, 이후 편지/커리큘럼/혜택/신청의 외곽 레이아웃도 같은 기준에 맞췄다.

- 기준 소스: eae03a4d7d413818f3a975167db19051547ff165 (버전 37)
- 기준 버전 대비 HTML/문구/스크립트/폼/미디어 동일. CSS만 변경.
- 검증: ../03-analysis/content-width-balance-2026-10-24.analysis.md
- Chrome 320/390/768/1440/1920px 및 큰 높이 뷰포트 검증 통과. 가로 넘침 및 스크립트 오류 없음.
- Version: 41
- Commit: 677c2c25cdf746045137630fab976ddb2ff09898
- Deployment: appgdep_6adc6e04acc08191a0125a3cfacdd5f0 / succeeded
- URL: https://gftc-wolgeupban.secretpoppy1.chatgpt.site

로컬 및 원격 소스 HEAD도 이제 버전 37 기반 수정본으로 동기화되었다. 다음 수정은 이 버전 41을 기준으로 진행한다. 월억반 리뉴얼 버전 38~40은 이력에 보존했다.
