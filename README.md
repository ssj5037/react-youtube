# Youtube Clone
- 배포: https://endearing-gaufre-d47b0b.netlify.app
## 프로젝트 소개
### 제작 이유
- React.js를 공부를 하는 도중 역량 개발을 위해 유튜브 api를 활용하여 제작하였습니다.
- **React Router**, **TanStack Query**(React Query)를 공부하였습니다.
- 수강 강의 : [드림코딩 - 리액트](https://academy.dream-coding.com/courses/react)

### 기능 목록
- 유튜브 목록 조회
- 키워드 검색
- 특정 동영상 조회, 해당 채널 정보 조회
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
[관련 커밋](https://github.com/ssj5037/react-youtube/commit/6c04f301aeec327c707cf04b086d83c8ab25612b)
-  **Reference.** 
    1. [React Query meets React Router](https://tkdodo.eu/blog/react-query-meets-react-router)
    2. [TanStack Query - React Example: React Router](https://tanstack.com/query/latest/docs/framework/react/examples/react-router)
#### 2. class, context(혹은 custom Hook)를 활용하여 api 분리

컴포넌트를 나눌 때는 재사용성과 단일책임을 기준으로 나누어야 한다. 비즈니스 로직과 view를 분리할 때도 해당 내용이 적용되는데, 가독성과 유지보수성을 높일 수 있다. 이 프로젝트를 하면서 사용한 방법은 다음 두 가지이다. 
1. **class, context를 활용** (_최종적으로 해당 기능 적용_)

동일한 인터페이스를 사용하지만 api path가 다른 경우(여기서는 Mock data, Real data에 해당.) class를 활용하여 api를 분리해주는 것이 좋다.

class 내부에서 private 필드(#)를 사용하면,
- 외부에서는 참조할 수 없고, 
- 분리하지 않았을 때와 달리 로직이 노출되지 않으며, 
- 코드의 가독성이 증대된다.

또한 http client를 분리하여 인터페이스에 의존성을 주입(DI, Dependency Injection)하게되면 각 인터페이스의 중복된 코드를 줄일 수 있다. (DI에 관한 내용은 추가 정리가 필요하다.)
[관련 커밋](https://github.com/ssj5037/react-youtube/commit/2d7a5d6b9e658da946a3999c9595622c93f351db)

2. **custom Hook을 활용**

custom Hook을 활용하여도 외부 참조를 피하고, 재사용성과 가독성을 높여 구현이 가능하다.
상황에 맞춰, 협업 규칙에 맞춰 개발하면 될 것 같다.
[관련 커밋](https://github.com/ssj5037/react-youtube/commit/e88da7b5dbfc15d328d3fb4f107d682dfdb22964)
