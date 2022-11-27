import { lazy } from "solid-js";
import { render } from "solid-js/web";
import { Router, useRoutes, A } from "@solidjs/router";
import "virtual:uno.css";

const routes = [
  {
    path: "/",
    component: lazy(() => import("/src/Pages/Index")),
  },
  {
    path: "/about",
    component: lazy(() => import("/src/Pages/About.tsx")),
  },
];

function App() {
  const Routes = useRoutes(routes);
  return (
    <>
      <h1>Aipitipi</h1>
      <A class="nav" href="/">
        Home
      </A>
      <A class="nav" href="/about">
        About
      </A>
      <Routes />
    </>
  );
}

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("app")
);
