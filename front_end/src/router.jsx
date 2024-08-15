import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LogIn from "./pages/LogIn";
// import NotFoundPage from "./pages/NotFoundPage";
import SignUp from "./pages/SignUp";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import MyList from "./pages/MyList";
import TVShowsPage from "./pages/TVShowsPage";
import NewandPopularPage from "./pages/NewandPopularPage";
import MoviesPage from "./pages/MoviesPage";
import { confirmUser } from "./utilities";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: confirmUser,
    children: [
      {
        index: true,
        element: <SignUp />,
      },
      {
        path: "login/",
        element: <LogIn />,
      },
      {
        path: "profile/",
        element: <ProfilePage />,
      },
      {
        path: "home/",
        element: <HomePage />,
      },
      {
        path: "tvshows/",
        element: <TVShowsPage />,
      },
      {
        path: "movies/",
        element: <MoviesPage />,
      },
      {
        path: "new&popular/",
        element: <NewandPopularPage />,
      },
      {
        path: "/my-list",
        element: <MyList />,
      },
    ],
    // errorElement: <NotFoundPage/>,
  },
]);

export default router;