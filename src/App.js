import { Toaster } from "react-hot-toast";
import "./App.css";
import LoginPage from "./pages/auth/LoginPage";
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";

function App() {
  const [email, setEmail] = useState("");
  useEffect(() => {
    console.log(localStorage.getItem("email"))
    setEmail(localStorage.getItem("email"));
  }, []);
  return (
    <div className="App">
      {email!=="" && email!==undefined && email!==null ? <HomePage /> : <LoginPage />}
      <Toaster />
    </div>
  );
}

export default App;
