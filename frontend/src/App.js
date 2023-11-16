import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage'

import Header from './Components/Header'
import NavbarComp from './Components/NavbarComp'
import AboutPage from './Pages/AboutPage'
import Branches from './Pages/Branches'
import NoPage from './Pages/NoPage'
import Hero from './Pages/Hero'
import PdfPage from './Pages/PdfPage';
import NotesUpload from './Pages/NotesUpload';
import RegisterPage from './Pages/RegisterPage';


import AuthContext, { AuthProvider } from './Context/AuthContext'

import PrivateRoutes from './Utils/PrivateRoutes'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProfileCard from './Pages/ProfileCard';
import AssignmentUpload from './Pages/AssignmentUpload';
import QPupload from './Pages/QPupload';
import AssignmentPage from './Pages/AssignmentPage';
import QP from './Pages/QP1';
import AssignmentPage1 from './Pages/AssignmentPage1';
import QP1 from './Pages/QP1';




function App() {

  return (
    <>
    <div className='App'>
      <Router>
        <AuthProvider>
        <NavbarComp/>
        {/* <Header/> */}
        <Routes>
          <Route element = {<PrivateRoutes/>}>
            {/* <Route element = {<Hero />} path='/' exact/> */}
            
            <Route path="/upload_notes" element={<NotesUpload />}/>
            <Route path="/upload_assignments" element={<AssignmentUpload/>}/>
            <Route path="/upload_question_papers" element={<QPupload/>}/>

            <Route path="/profile" element={<ProfileCard />}/>
            <Route path="/register" element={<RegisterPage/>} />
          </Route>
          <Route element = {<LoginPage/>} path = '/login' />
          <Route index element={<Hero />} />
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/branches" element={<Branches />}/>
          <Route path="/notes" element={<PdfPage />}/>
          <Route path="/assignments" element={<AssignmentPage1/>}/>
          <Route path="/question_papers" element={<QP1/>}/>


          <Route path="*" element={<NoPage />} />
        </Routes>
        </AuthProvider>
      </Router>

    </div>

    </>
  );
}

export default App;
