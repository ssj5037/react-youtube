import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import koLocale from 'timeago.js/lib/lang/ko';
import { register } from "timeago.js";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import Home, {loader as homeLoader} from "./pages/Home";
// import Search, { loader as searchloader } from "./pages/Search";
import Video, {loader as videoLoader} from "./pages/Video";
import VideoSide, {loader as videoSideLoader} from "./pages/VideoSide";

const queryClient = new QueryClient({
  defaultOptions: {
    staleTime: 2 * 60 * 1000, // 2분
  }
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Home />, loader: homeLoader(queryClient)},
      {path: 'videos', element: <Home />, loader: homeLoader(queryClient)},
      {path: 'videos/:text', element: <Home />, loader: homeLoader(queryClient)},
      {
        path: "watch/:id", element: <Video />,
        loader: videoLoader(queryClient),
        children: [
          {index: true, element: <VideoSide />, loader: videoSideLoader(queryClient)},
        ]
      }
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
