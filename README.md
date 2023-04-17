# HelloJeju

## 서비스 설명

HelloJeju는 코로나로 인한 관광사업침체에 도움이 되고자 제작하게 되었습니다.<br>
기존 리액트, 자바스크립트, 리덕스로 구현된 프로젝트를 리액트, 타입스크립트, 리덕스 툴킷으로 마이그레이션 진행했습니다.
<br>
<br>

- 다양한 제주도 정보를 제공
- google map api를 이용한 제주도 맛집, 숙박업소등의 정보 제공
- 커뮤니티 페이지에서 유저간의 소통
- 마이트레블에서 본인이 찜한 스팟들을 한눈에 볼수 있으며 계획을 세우고, 계획 삭제 가능

## 기술 스택

- TypeScript
- React.js
- Redux Toolkit
- Styled Component
- node Js
- mongoDb

## 성능 개선

프로젝트를 완성한후 사이트 테스트를 해보았을때, 데이터 로딩시간이 굉장히 느리다는점을 깨닫게 되었습니다.<br>
주변 지인들에게 사이트 테스트 요청을 하였고 6명중 5명이 느리다고 대답하였고, lighthouse에서 성능 측정을 하였습니다.
<br>
성능 측정시 38점이라는 낮은 점수가 나왔고, lighthouse에서 성능 저하 요인중 1위 였던 불필요한 js코드 먼저
해결하고자, 코드를 돌아보았고, 중복되는 코드가 굉장히 많았고, 재사용 불가능한 컴포넌트들이 대부분이었습니다.
<br>
이로 인하여 저는 전체적으로 코드 리팩토링에 도입하였고, 예기치 못한 버그를 방지하기위하여 ts 마이그레이션,
중복된 코드를 줄이기 위하여 리덕스 툴킷으로 마이그레이션을 진행 했습니다.
<br>
이후에 lighthouse에서 2순위로 지적했던 이미지 문제점을 이미지 리사이징과 이미지 lazyloading을 도입하게 되었고, 지금도 사용자 입장에서 생각하며 유지보수 진행중 입니다.

- 리팩토링전

<br>
<a href="https://ibb.co/djdZtzt"><img src="https://i.ibb.co/fqhJ9P9/1.png" alt="1" border="0"></a>

- 리팩토링후

<br>

<a href="https://ibb.co/GHKCh0J"><img src="https://i.ibb.co/3RDSJ7s/image.png" alt="image" border="0"></a>

## 실제 웹사이트 구현화면

![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjk4MmE5MjEzNjI4ZWM3MjQxMDk2YmY3ZmRhNjlkOTgyODcyOWU3YSZjdD1n/MkCl5uZm04o61PWDeg/giphy.gif)
<br>
<br>

![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWI5MDdjMDhhODQ2ODVmOTI0NzUxYTkyNGI4ZjVlMDI5OTZkZGFiMSZjdD1n/OoBhloOdDZEtxiskAg/giphy.gif)
<br>
<br>

![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGZhMGE5NzNhYjQxNzEyYTU4NDhlYmEwNmI3ZDM0NjBlMjgxMGE3NiZjdD1n/anWw53TvyyYmucsrUr/giphy.gif)

<br>
<br>

![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDU0NTExM2QyNWQ4NTI3MmViMTNlZTU4MGE1OTIwOWZlZDZkY2NiYiZjdD1n/n1jvBGEp7bpojQDyAp/giphy.gif)

## 주요 기능

<br>

- 메인페이지 : 사이트소개 및 페이지 소개 기능
- travelspot페이지 :무한스크롤 구현, 검색기능 Debounce 처리 구현, 필터기능 구현
- travelnews페이지 :동영상 클립기능, google map api를 이용한 스팟 위치정보 제공
- community페이지 : 게시판 미리보기 슬라이드 기능, 게시판 페이지 네이션, 글쓰기, 댓글쓰기, 상세페이지 기능
- mypage : 찜한 목록 보기 기능, 유저 여행 계획 CRUD
- login, 회원가입 페이지 : 회원가입, 로그인 기능

### Installing

1. 깃클론을 합니다.
2. npm install
3. npm run start 하시면 프로젝트를 보실수 있습니다

## 배포 주소

_서버측 버그 수정중으로 서버와의 통신은 어려운점 양해부탁드립니다._
[Hello jeju 바로가기](https://develop--leafy-marzipan-915948.netlify.app/)

## 깃 커밋 컨벤션

- feature : 새로운 기능 추가

- fix : 버그 수정

- docs : 문서 수정

- test : 테스트 코드 추가

- refactor : 코드 리팩토링

- style : 코드 의미에 영향을 주지 않는 변경사항

- chore : 빌드 부분 혹은 패키지 매니저 수정사항
