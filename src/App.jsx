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


function App() {
  return (
    <div className="">
     <BrowserRouter> {/*Tag principal para universialização das rotas*/}
      <Header/>
      <div>
        <Routes>{/*Páginas do App*/}
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
