// import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Customers from "./components/Customers";
import LoginForm from "./components/LoginForm";
import MovieForm from "./components/MovieForm";
import Movies from "./components/Movies";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Rentals from "./components/Rentals";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/:id" element={<MovieForm />} />
          <Route path="customers" element={<Customers />} />
          <Route path="rentals" element={<Rentals />} />
          <Route path="loginform" element={<LoginForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
