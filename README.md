# HelloJeju

## 목차

- [서비스설명](#서비스설명)
- [기술스택](#기술스택)
- [주요기능](#주요기능)
- [리팩토링](#리팩토링)
- [배포주소](#배포주소)
- [Installing](#Installing)
- [convention](#깃커밋컨벤션)
- [파일구조](#파일구조)

## 서비스설명

HelloJeju는 코로나로 인한 관광사업침체에 도움이 되고자 제작하게 되었습니다.<br>
기존 리액트, 자바스크립트, 리덕스로 구현된 프로젝트를 리액트, 타입스크립트, 리덕스 툴킷으로 마이그레이션 진행했습니다.<br>
개인 프로젝트로 진행 되었으며, 지속적인 유지보수로 성능 향상에 노력하고 있습니다.
<br>
<br>

- 다양한 제주도 정보를 제공
- google map api를 이용한 제주도 맛집, 숙박업소등의 정보 제공
- 커뮤니티 페이지에서 유저간의 소통
- 마이트레블에서 본인이 찜한 스팟들을 한눈에 볼수 있으며 계획을 세우고, 계획 삭제 가능

## 기술스택

- TypeScript
- React.js
- Redux Toolkit
- Styled Component
- node Js
- mongoDb

## 성능개선

코드 간소화로 대부분의 페이지의 성능점수가 상승했습니다. 또한 리팩토링으로 컴포넌트당 최소 20줄~ 많게는 100줄 감소하였습니다.

- 리팩토링전

<br>
<a href="https://ibb.co/djdZtzt"><img src="https://i.ibb.co/fqhJ9P9/1.png" alt="1" border="0"></a>

- 리팩토링후

<br>

<a href="https://ibb.co/8xPHt6V"><img src="https://i.ibb.co/n1QFtzS/image.png" alt="image" border="0"></a>

## 실제 웹사이트 구현 화면

<br>
<br>
**메인페이지**
<br>
![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjk4MmE5MjEzNjI4ZWM3MjQxMDk2YmY3ZmRhNjlkOTgyODcyOWU3YSZjdD1n/MkCl5uZm04o61PWDeg/giphy.gif)
<br>
<br>
<!-- **회원가입 로그인 페이지**
<br>
![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWI5MDdjMDhhODQ2ODVmOTI0NzUxYTkyNGI4ZjVlMDI5OTZkZGFiMSZjdD1n/OoBhloOdDZEtxiskAg/giphy.gif)
<br>
<br>
**travelspot 페이지**
<br>
![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGZhMGE5NzNhYjQxNzEyYTU4NDhlYmEwNmI3ZDM0NjBlMjgxMGE3NiZjdD1n/anWw53TvyyYmucsrUr/giphy.gif)
<br>
**travelnews 페이지**
<br>
![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDU0NTExM2QyNWQ4NTI3MmViMTNlZTU4MGE1OTIwOWZlZDZkY2NiYiZjdD1n/n1jvBGEp7bpojQDyAp/giphy.gif) -->

## 주요기능

<br>
- 메인페이지: 사이트소개 및 페이지 소개 기능
- travelspot페이지:무한스크롤 구현, 검색기능 Debounce 처리 구현, 필터기능 구현
- travelnews페이지:동영상 클립기능, google map api를 이용한 스팟 위치정보 제공
- community페이지: 게시판 미리보기 슬라이드 기능, 게시판 페이지 네이션, 글쓰기, 댓글쓰기, 상세페이지 기능
- mypage: 찜한 목록 보기 기능, 유저 여행 계획 CRUD
- login, 회원가입 페이지: 회원가입, 로그인 기능

### Installing

1. 깃클론을 합니다.
2. npm install
3. npm run start 하시면 프로젝트를 보실수 있습니다

## 배포주소

## 깃 커밋 컨벤션

- feature : 새로운 기능 추가

- fix : 버그 수정

- docs : 문서 수정

- test : 테스트 코드 추가

- refactor : 코드 리팩토링

- style : 코드 의미에 영향을 주지 않는 변경사항

- chore : 빌드 부분 혹은 패키지 매니저 수정사항

## 파일구조

travelapp-main
├─ client
│ ├─ .env
│ ├─ package-lock.json
│ ├─ package.json
│ ├─ public
│ │ ├─ favicon.ico
│ │ ├─ image
│ │ │ ├─ beach.png
│ │ │ ├─ hotel.png
│ │ │ ├─ icn-top.svg
│ │ │ ├─ restaurant.png
│ │ │ ├─ 남일러스트.jpg
│ │ │ ├─ 마이트레블.jpg
│ │ │ ├─ 북일러스트.jpg
│ │ │ ├─ 쇼핑.png
│ │ │ ├─ 제주지도.jpg
│ │ │ ├─ 제주지도1.png
│ │ │ ├─ 커뮤니티.jpg
│ │ │ ├─ 트래블뉴스.jpg
│ │ │ └─ 트래블스팟.jpg
│ │ ├─ index.html
│ │ ├─ manifest.json
│ │ ├─ robots.txt
│ │ └─ video
│ │ └─ 제주도추천.mp4
│ ├─ README.md
│ ├─ src
│ │ ├─ .env
│ │ ├─ App.css
│ │ ├─ App.tsx
│ │ ├─ components
│ │ │ ├─ button
│ │ │ │ ├─ Btn1.tsx
│ │ │ │ ├─ Btn2.tsx
│ │ │ │ └─ TopBtn.tsx
│ │ │ ├─ header
│ │ │ │ └─ NavBar.tsx
│ │ │ ├─ landingpage
│ │ │ │ ├─ Description.tsx
│ │ │ │ ├─ LandingLogo.tsx
│ │ │ │ └─ PageIntroduce.tsx
│ │ │ ├─ travelcommunity
│ │ │ │ ├─ Board.tsx
│ │ │ │ └─ Slice.tsx
│ │ │ ├─ travelnews
│ │ │ │ ├─ Map.tsx
│ │ │ │ ├─ MapModal.tsx
│ │ │ │ ├─ Recomendation.tsx
│ │ │ │ └─ VideoClip.tsx
│ │ │ └─ travelspot
│ │ │ ├─ Card.tsx
│ │ │ ├─ Filters.tsx
│ │ │ ├─ NorthModal.tsx
│ │ │ ├─ Search.tsx
│ │ │ └─ SouthModal.tsx
│ │ ├─ data
│ │ │ ├─ hotel.ts
│ │ │ ├─ JejuSection.js
│ │ │ ├─ Login.ts
│ │ │ ├─ Logout.ts
│ │ │ ├─ NewsData.ts
│ │ │ ├─ restaurant.ts
│ │ │ ├─ shopping.ts
│ │ │ └─ spot.ts
│ │ ├─ index.css
│ │ ├─ index.tsx
│ │ ├─ lotties
│ │ │ ├─ 114285-animated-wallpaper-under-sea.json
│ │ │ ├─ 139259-girl-with-suitcase.json
│ │ │ ├─ 23936-lighthouse.json
│ │ │ └─ 2523-loading.json
│ │ ├─ Pages
│ │ │ ├─ communitydetail
│ │ │ │ └─ CommunityDetail.tsx
│ │ │ ├─ communityupdate
│ │ │ │ └─ CommunityUpdate.tsx
│ │ │ ├─ good
│ │ │ │ └─ Good.tsx
│ │ │ ├─ landing
│ │ │ │ └─ LandingPage.tsx
│ │ │ ├─ login
│ │ │ │ └─ LoginPage.tsx
│ │ │ ├─ myschedule
│ │ │ │ └─ Myschedule.tsx
│ │ │ ├─ myscheduledetail
│ │ │ │ └─ MyscheduleDetail.tsx
│ │ │ ├─ mystyle
│ │ │ │ └─ MylStyle.tsx
│ │ │ ├─ mytravel
│ │ │ │ └─ MyTravel.tsx
│ │ │ ├─ northhotspot
│ │ │ │ └─ NorthHotSpotPage.tsx
│ │ │ ├─ registerpage
│ │ │ │ └─ RegisterPage.tsx
│ │ │ ├─ southhotspot
│ │ │ │ └─ SouthHotSpotPage.tsx
│ │ │ ├─ startpage
│ │ │ │ └─ StartPage.tsx
│ │ │ ├─ travelcommunity
│ │ │ │ └─ TravelCommunity.tsx
│ │ │ ├─ traveldetail
│ │ │ │ └─ TravelDetail.tsx
│ │ │ ├─ travelnews
│ │ │ │ └─ TravelNews.tsx
│ │ │ └─ travelspotpage
│ │ │ └─ TravelSpotpage.tsx
│ │ ├─ reportWebVitals.js
│ │ ├─ setupProxy.js
│ │ ├─ setupTests.js
│ │ ├─ slice
│ │ │ ├─ MapDataSlice.ts
│ │ │ ├─ SearchDataSlice.ts
│ │ │ ├─ TravelContetSlice.ts
│ │ │ └─ UserSlice.ts
│ │ ├─ store
│ │ │ └─ store.ts
│ │ ├─ styles
│ │ │ └─ colors.js
│ │ ├─ types
│ │ │ └─ types.ts
│ │ └─ utils
│ │ ├─ OnChangeEvent.ts
│ │ ├─ PageNation.js
│ │ └─ useDebounce.ts
│ └─ tsconfig.json
└─ README.md

```

```
