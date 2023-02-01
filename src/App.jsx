//Bibliotecas
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  Navigate
} from 'react-router-dom'

//Páginas
import Home from './Pages/Home/Home';

//Components
import Header from './componets/Header/Header';
import Footer from './componets/Footer/Footer';


function App() {
  return (
    <div className="">
     <BrowserRouter> {/*Tag principal para universialização das rotas*/}
      <Header/>
      <main>
        <Routes>{/*Páginas do App*/}
          <Route path="/" element={<Home/>}/>
        </Routes>
      </main>
     </BrowserRouter>
     <Footer />
    </div>
  );
}

export default App;
