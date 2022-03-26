import "./App.css";
import { NavBar, Footer, ScrollToTop } from "./layouts";
import AppRoutes from "./app-routes/AppRoutes";
function App() {
  return (
    <div className="App">
      <NavBar />
      <AppRoutes />
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
