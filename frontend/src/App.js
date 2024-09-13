import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import using lazy

const router = createBrowserRouter([
  {
    path: "/",
    //element: <Root/>,
    children: [
      {
        index: true, // tells route to be same as parent
        //element: <Home/>,
      },
      {
        path: "/word-list",
        //element: <WordList/>,
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
