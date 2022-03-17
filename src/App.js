import "./App.css";
import { NavBar, Footer } from "./layouts";
import AppRoutes from "./app-routes/AppRoutes";
function App() {
  return (
    <div className="App">
      <NavBar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
