//Layout
import LayoutHome from "../layouts/LayoutHome";

//Pages
import Populars from "../pages/Films/Populars";
import SignIn from "../pages/SignIn";
import Searchs from "../pages/Films/Searchs";
import UpdateFilms from "../pages/Films/UpdateFilms";
import Premieres from "../pages/Films/Premieres";
import AllMovies from "../pages/Films/AllMovies/AllMovies";

//Components
import Film from "../components/Film/Film";
import Play from "../components/Play";

const routes = [
  {
    path: "/app",
    component: LayoutHome,
    exact: false,
    routes: [
      { path: "/app", component: Populars, exact: true },

      {
        path: "/app/populares",
        component: Populars,
        exact: true,
      },
      {
        path: "/app/estrenos",
        component: Premieres,
        exact: true,
      },
      {
        path: "/app/pelicula",
        component: Film,
        exact: true,
      },
      {
        path: "/app/play",
        component: Play,
        exact: true,
      },
      {
        path: "/app/searchs",
        component: Searchs,
        exact: true,
      },
      {
        path: "/app/updateFilms",
        component: UpdateFilms,
        exact: true,
      },
      {
        path: "/app/allFilms",
        component: AllMovies,
        exact: true,
      },
    ],
  },
  { path: "/", component: SignIn, exact: false },
];

export default routes;
