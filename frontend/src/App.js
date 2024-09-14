import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Layout/Root";
import Loading from "./Pages/Loading";

// import using lazy
const Home = lazy(() => import("./Pages/Home"));
const SavedProfiles = lazy(() => import("./Pages/SavedProfiles"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true, // tells route to be same as parent
        element: <Home />,
      },
      {
        path: "/saved-profiles",
        element: <SavedProfiles />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
