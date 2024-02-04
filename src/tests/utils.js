import { MemoryRouter, Routes } from "react-router-dom";

// react-router를 테스트 할 때는 MemoyRouter로 감싸주어야 함.
export function withRouter(routes, initialEntry = "/") {
  return (
    <MemoryRouter initialEntries={[initialEntry]}>
      <Routes>{routes}</Routes>
    </MemoryRouter>
  );
}
