import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import Home, {loader as homeLoader} from "./pages/Home";
import Search, { loader as searchloader } from "./pages/Search";
import Video, {loader as videoLoader} from "./pages/Video";
import koLocale from 'timeago.js/lib/lang/ko';
import { register } from "timeago.js";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {path: '', element: <Home />, loader: homeLoader(queryClient)},
      {path: 'search/:text', element: <Search />, loader: searchloader(queryClient)},
      {path: "watch/:id", element: <Video />, loader: videoLoader(queryClient)}
    ]
  },
]);


function App() {
  register('ko', koLocale);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} >
      </RouterProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

export default App;
