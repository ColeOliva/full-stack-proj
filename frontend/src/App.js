import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorProvider } from "./context/ErrorContext";
import { ProfileProvider } from "./context/ProfileContext";
import Root from "./Layout/Root";
import Loading from "./Pages/Loading";

// import using lazy
const Home = lazy(() => import("./Pages/Home"));
const SavedProfiles = lazy(() => import("./Pages/SavedProfiles"));
const Error = lazy(() => import("./Pages/Error"));

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
      {
        path: "*", // catch all routes
        element: <Error />,
      },
    ],
  },
]);

const App = () => {
  return (
    <ErrorProvider>
      <ProfileProvider>
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router} />
        </Suspense>
      </ProfileProvider>
    </ErrorProvider>
  );
};

export default App;
