import { useGlobalContext } from "./GlobalContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import Submenu from "./components/Submenu";

const App = () => {
  const { isSidebarOpen } = useGlobalContext();
  return (
    <main>
      <Navbar />
      <Hero />
      <Sidebar />
      <Submenu />
    </main>
  );
};
export default App;
