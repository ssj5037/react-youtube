import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import koLocale from 'timeago.js/lib/lang/ko';
import { register } from "timeago.js";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Video from "./pages/Video";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";

const queryClient = new QueryClient({
  defaultOptions: {
    staleTime: 5 * 60 * 1000, // 2분
  }
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Home />},
      {path: 'videos', element: <Home />},
      {path: 'videos/:text', element: <Home />},
      {path: "watch/:id", element: <Video />}
    ]
  },
]);


function App() {
  register('ko', koLocale);
  return (
    <YoutubeApiProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} >
        </RouterProvider>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </YoutubeApiProvider>
  );
}

export default App;
