import { Toaster } from "react-hot-toast";
import "./App.css";
import LoginPage from "./pages/auth/LoginPage";

function App() {
  return <div className="App">
    <LoginPage/>
    <Toaster/>
  </div>;
}

export default App;
