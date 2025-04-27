import ReactDOM from "react-dom/client";

import "./index.css";
import LandingPage from "./pages/LandingPage";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <LandingPage />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);