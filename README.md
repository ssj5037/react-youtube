# Youtube Clone

## 프로젝트 소개
### 제작 이유
- React.js를 공부를 하는 도중 역량 개발을 위해 유튜브 api를 활용하여 제작하였습니다.
- **React Router**, **TanStack Query**(React Query)를 활용하였습니다.
- 수강 강의 : [드림코딩 - 리액트](https://academy.dream-coding.com/courses/react)

### 기능 목록
- 유튜브 목록 조회
- 키워드 검색
- 특정 동영상 정보 조회, 영상 재생
- 반응형 UI 적용

### 사용 기술
<p>
  <img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=white"/>
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat&logo=javascript&logoColor=white"/>
  <img src="https://img.shields.io/badge/tailwindCss-06B6D4?style=flat&logo=tailwindcss&logoColor=white"/>
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=reactrouter&logoColor=white"/>
  <img src="https://img.shields.io/badge/React_Query-FF4154?style=flat&logo=reactquery&logoColor=white"/>
</p>

### 배운 점
#### 1. React Router의 loader를 활용하면, 컴포넌트가 렌더링되기 전에 데이터를 받아올 수 있다.
> 💡 **loader?** 
>- 각 route에 loader를 정의 할 수 있다.
>- 해당 route를 방문할 때 호출된다.
>- 해당 route 컴포넌트에서 `useLoaderData()`를 사용하여 데이터를 받아올 수 있다.

>번외) 데이터를 업데이트 하는 **action**
>- react router에서 제공하는 Form 태그를 함께 사용한다.
>- action은 모든 active loader를 invalidate 하므로, 자동으로 데이터가 업데이트 된다.
>(invalidate : 쿼리를 무효화 하여 데이터를 새로 가져옴. 보통 `invalidateQueries()`메서드를 사용하여 무효화한다.)

여기서 React Query와 함께 사용하면, loader를 사용하여 React Query Cache를 미리 채우고, 컴포넌트에서 useQuery를 사용하여 데이터를 보여줄 수 있다.
결국, **렌더링 전에 데이터를 먼저 받아올** 수 있으면서, React Query의 **캐싱**을 활용할 수 있다.
-  **Reference.** 
    1. [React Query meets React Router](https://tkdodo.eu/blog/react-query-meets-react-router)
    2. [TanStack Query - React Example: React Router](https://tanstack.com/query/latest/docs/framework/react/examples/react-router)