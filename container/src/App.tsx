import ReactDOM from "react-dom/client";
import LandingPage2 from "./remote/components/LandingPage2";
import LandingPage1 from "./remote/components/LandingPage1";
import './index.css'

  

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl flex flex-col gap-2 px-2  ">
    <h2 className="text-center text-purple-700">Container</h2>
    <div className="flex gap-10 border-2 border-blue-600 p-4 rounded-md">
      <div className=" border-2 border-blue-600 p-4 rounded-md">
        <LandingPage1 />

   </div>
      <div className="border-2 border-blue-600 p-4 rounded-md">
        <LandingPage2 />

   </div>
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);