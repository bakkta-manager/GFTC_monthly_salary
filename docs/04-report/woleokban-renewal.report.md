# 월억반 리뉴얼 완료 보고서

> 최신 상태 (2026-10-24 후속): 버전 37을 기반으로 본문 CSS를 정리한 버전 41이 배포되었다. 로컬/원격 HEAD도 677c2c25cdf746045137630fab976ddb2ff09898로 동기화 완료. 아래 롤백 직후의 ‘HEAD는 버전 40’ 기록은 과거 상태다. 상세: content-width-balance-2026-10-24.report.md

> 운영 상태 변경 (2026-10-24): 사용자 요청으로 2026-10-15 21:11:22 KST에 저장한 버전 37을 직접 재배포했다. 현재 공개 사이트는 아래 월억반 리뉴얼 결과가 아닌 월급반 버전 37이다.
> 복원 버전 ID: appgprj_6ad0598bc47481918748d724e60f7a2c~appgver_358a0cf2c9848191b4927349650f0ad8
> 복원 소스: eae03a4d7d413818f3a975167db19051547ff165
> 배포 ID: appgdep_6adc2fb164b88191813695c77935866c / succeeded
> 기존 버전 40과 이후 리뉴얼 소스 이력은 보존되어 있다. 로컬 checkout 및 원격 소스 HEAD는 버전 40 상태이므로, 다음 수정 시 현재 공개 버전 37을 기준으로 작업할지 먼저 구분하고 리뉴얼 코드를 실수로 재배포하지 않는다. 이번 작업은 저장된 배포 아카이브만 재배포했으며 데이터베이스 변경은 없다.

Date: 2026-10-20
Feature: woleokban-renewal
Status: completed

## 결과
녹음 검토를 바탕으로 월급반 페이지를 월억반으로 리뉴얼했다. 사용자가 확정한 9개월 과정을 유지하고 월 55만 원을 표시했다. 결제·최소 이용 기간·환불 정책 및 1:1 진단·라이브의 횟수·대상·제공 조건은 추가하지 않았다.

첫 화면을 수익 확장과 자본 운용 메시지로 변경하고, 월백반/월천반/월억반 비교, 공개 3단계 교육 개요, 정돈한 혜택, 가격 요약 및 FAQ를 배치했다. 기존 어두운 영상·종이 질감·파란 강조색을 유지했다. 강제 섹션 이동은 제거하고 일반 스크롤로 바꿨다.

## 검증
- 설계 대조 15/15 항목 충족. 상세: ../03-analysis/woleokban-renewal.analysis.md
- Chrome 320/390/1440/1920px 레이아웃, FAQ, 영상 pause, reduced-motion 및 스크롤 확인.
- 상담 폼의 필수 검증, 3단계 이동, mock 실패/재시도/성공 UI 확인.
- 폼 필드·허용값·요청 계약, 운영 Supabase 서버와 저장 데이터는 유지했다.
- 실제 상담 데이터를 새로 생성하는 서버 저장 테스트는 이번 변경에서 실행하지 않았다.
- git diff --check 및 JavaScript 구문 검사 통과. 루트/배포 HTML 동일.

## 배포
- Project: appgprj_6ad0598bc47481918748d724e60f7a2c
- Version: 38
- Saved version ID: appgprj_6ad0598bc47481918748d724e60f7a2c~appgver_24d69115c9bc81918e1489f465e8336a
- Commit: 091adfa495de9809d798bad34052ae7ad3ea9ab6
- Deployment: appgdep_6ad6f56c4bb08191aa7304ae62b83dd8
- Deployment status: succeeded
- URL: https://gftc-wolgeupban.secretpoppy1.chatgpt.site
- 기존 공개 범위(public) 유지.

## 다음 작업
공개 페이지의 문구와 구성 확인. 이후 확정되는 결제 및 제공 조건을 별도 변경으로 반영할 수 있다.

## 후속 수정: 보조 영상 두 영역 삭제 (2026-10-20)
- 사용자 요청에 따라 자동차/신문 영상의 나란한 섹션과 전용 CSS 제거. 첫 화면 바로 다음에 종이 질감 메시지 배치.
- 390/1440px Chrome에서 삭제 여부, 영상 1개 유지, 섹션 인접 배치, 내부 앵커, 가로 넘침 및 pageerror 확인 통과.
- git diff --check 통과. 루트 HTML 동기화.
- Version: 39
- Commit: a1b6cac78492cb7c99e7f2ff240ebe948bad4832
- Deployment: appgdep_6ad6f6ef4fac8191acb4b698770343ba
- Deployment status: succeeded
- URL: https://gftc-wolgeupban.secretpoppy1.chatgpt.site

## 후속 수정: FAQ만 삭제 (2026-10-20)
- 사용자의 정정 요청에 따라 FAQ 네 항목과 전용 CSS/간격만 제거했다. 9개월 안내, 월 55만 원, 상담 버튼 및 상담 폼은 유지했다.
- 390/1440px Chrome에서 FAQ 삭제, 안내·가격·CTA 보존, 가로 넘침 없음, 스크립트 오류 없음을 확인했다.
- git diff --check 통과. 루트 HTML 동기화.
- Version: 40
- Commit: 8ab70c4f821d25b7a8a52288295cb3fbc9227920
- Deployment: appgdep_6ad6f8d8871c8191ab79ec0c92560c21
- Deployment status: succeeded
- URL: https://gftc-wolgeupban.secretpoppy1.chatgpt.site
