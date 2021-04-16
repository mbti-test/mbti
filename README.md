# 현실연애 무BTI

## 1. 프로젝트 소개
- 프로젝트 주제:
   로맨스 영화 속 나의 부캐 및 궁합 정보를 알려주고
   연애를 코칭해줄 로맨스 영화를 추천하는 MBTI 테스트 서비스
- 사용하려는 데이터: 'OTT 서비스에서 서비스 중인 영화' 중 MBTI와 매칭된 32개 캐릭터(16유형*남녀)의 **대본**
- 기술 스택: Python, React, Flask, SQLalchemy, NRClex  



## 2. 프로젝트 목표
- 이번 프로젝트로 우리 팀이 얻고자 하는 것!
    - 유저 트래픽이 높은 서비스로 서비스 운영 경험을 쌓아보자
    - OTT 서비스 전환율로 비즈니스 가치를 검증해보자
    - 유저들의 검사 데이터로 새로운 데이터 셋을 만들어보자  



- 프로젝트로 해결하고 싶은 문제
    - 대상 유저: 20~30대 OTT 서비스 구독자
    - 유저의 문제: 콘텐츠 소비보다 탐색에 더 시간을 많이 쓰는 '넷플릭스 증후군'에 걸린 유저들
    - 기존 해결 방안: Netflix 셔플 재생 및 스트리밍 등 기존 알고리즘 추천을 벗어나, 다양한 경로로 유저-콘텐츠 접점을 만드는 중  



- 우리가 생각한 솔루션
    - 가설:
        MBTI와 같은 오락성 콘텐츠로 OTT 서비스 유저에게 콘텐츠 소비를 유도할 수 있다
        (재미있는 영화 소비 시나리오를 만들어보자!)
    - 프로덕트 고유가치 UVP:
        재밌는 MBTI 서비스(즐거움에 대한 Needs)에서 더 나아가, '영화 추천'까지! (페인포인트 해결의 실용적 Needs)



## 3. 프로젝트 기능 설명

- 우리 서비스의 핵심 기능
    1. 연애 유형 MBTI 검사 및 결과 제공
    1. 영화 캐릭터 분석 데이터 제공
    1. 추천 영화 콘텐츠 제공  



- 우리 서비스로 유저는 어떤 정보를 얻을까?
    - MBTI로 알아보는 나의 연애 스타일, 유사 캐릭터
    - 나와 유사한 캐릭터의 연애 중 감정어 사용 비율
    - 나와 궁합이 좋은/나쁜 MBTI 및 캐릭터 정보
    - 소비가능한 콘텐츠 정보 (OTT 서비스 링크 제공)  



## 4. 프로젝트 구성도

- 우리의 목표를 이루기 위한 핵심 지표
    - 가장 중요한 단 한 가지 지표 OMTM: 마지막 페이지 → OTT 서비스 전환율
    - 페이지별 목표 지표:
        - 랜딩 페이지: → 검사 진행으로 넘어가는 유저 비율 (선행지표)
        - 검사 페이지: → 검사를 완료하는 유저 비율 (선행지표)
        - 결과 페이지: → 유저 공유 횟수 & OTT 서비스로 전환되는 비율  



- 지표를 만족시킨 우리의 스토리보드/아키텍쳐!
    - [와이어프레임/스토리보드](https://kdt-gitlab.elice.io/001-part3-moviecharacter/team3/project-DNB/-/wikis/%5B%EA%B8%B0%ED%9A%8D%5D-%EC%84%9C%EB%B9%84%EC%8A%A4-%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85-(%EC%A0%95%EB%B3%B4-%EB%B0%8F-%EA%B8%B0%EB%8A%A5-%ED%8F%AC%ED%95%A8))
    - [인포메이션 아키텍쳐](https://kdt-gitlab.elice.io/001-part3-moviecharacter/team3/project-DNB/-/wikis/%5B%EA%B8%B0%ED%9A%8D%5D-Information-Architecture)  

    
 
## 5. 프로젝트 팀원 역할 분담

| 이름 | 담당 업무 |
| ------ | ------ |
| 박준효 | 리더, 기획 |
| 손상준 | 프론트엔드, 기획 |
| 민유지 | 프론트엔드, 기획 |
| 이민호 | 데이터 분석, 백엔드 |


## 6. 버전

- `2021/04/09` 0.9
- `2021/04/16` 1.0  
