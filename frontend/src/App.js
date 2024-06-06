import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/signIn';
import SignUp from './components/signUp';
import Client from './components/client';
import Admin from './components/admin';
import UpdateAccountGeneral from './components/updateAccountGeneral';
import ViewProduit from './components/viewProduit';
import AdminUsers from './components/viewUsersAdmin';
import AddFournisseur from './components/addFournisseur';
import UpdateFournisseur from './components/updateFournisseur';
import ViewArticles from './components/ViewArticle';
import AddArticle from './components/addArticle';
import UpdateArticle from './components/updateArticle';
import UpdateAccountGeneralAdmin from './components/updateAccountAdmin';
import './index.css';

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/admin/users"element={<AdminUsers/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path='/updateAccountGeneral/:id' element={<UpdateAccountGeneral/>}/>
          <Route path="/client/:id" element={<Client/>}/>
          <Route path="/admin/" element={<Admin/>}/>
          <Route path="/viewProduit/:id" element={<ViewProduit/>}/>
          <Route path="/admin/addFournisseur" element={<AddFournisseur/>}/>
          <Route path="/admin/updateFournisseur/:id" element={<UpdateFournisseur/>}/>
          <Route path="/admin/viewArticles/:id" element={<ViewArticles/>}/>
          <Route path="/admin/addArticle/:id" element={<AddArticle/>}/>
          <Route path="/admin/updateArticle/:idF/:id" element={<UpdateArticle/>}/>
          <Route path='/updateAccountGeneralAdmin/:id' element={<UpdateAccountGeneralAdmin/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
