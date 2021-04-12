import { Footer } from './components/common/footer/Footer';
import { NavBar } from './components/common/navBar/NavBar';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  return (
    <>
      <NavBar />

      <AppRoutes />

      <Footer />
    </>
  );
}

export default App;
