import Home from "./Home";
import Projects from "./Projects";
import Investment from "./Investment";

export default function App() {
  if (window.location.pathname.startsWith("/projetos")) return <Projects />;
  if (window.location.pathname.startsWith("/investimento")) return <Investment />;
  return <Home />;
}
