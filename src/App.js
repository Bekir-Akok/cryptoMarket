import "./styles.css";
import HomePage from "./Pages/HomePage/HomePage";
import SearchBar from "./Pages/SearchBar/SearchBar";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Route path="/searchbar">
        <div className="search-bar">
          <SearchBar />
        </div>
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
    </Router>
  );
}
