import Home from "./Home";
import Projects from "./Projects";

export default function App() {
  return window.location.pathname.startsWith("/projetos") ? <Projects /> : <Home />;
}
