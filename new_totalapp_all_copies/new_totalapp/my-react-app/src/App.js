import './App.css'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Login from './components/Login/index';
import About from './components/About/index';
import Projects from './components/Projects/index';
import DeveloperDetails from './components/DeveloperDetails/index';
import CollegeProjectList from './components/CollegeProjectList/index';
import ProjectDetails from './components/ProjectDetails/index'
import Home from './components/Home/index'
const App=()=>{
        console.log("app is running-------------------------------------------------------------");
return (
        <BrowserRouter>
        <Routes>
        
        <Route exact path="/Home" element={<Home/>}/>
        <Route exact path="/CollegeProjects/:collegeId" element={<CollegeProjectList/>}/>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/About" element={<About/>}/>
        <Route exact path="/Projects" element={<Projects/>}/>
        <Route exact path="/DeveloperDetails" element={<DeveloperDetails/>}/>
        <Route exact path="/ProjectsDetails/:project_id" element={<ProjectDetails/>}/>
        </Routes>
        </BrowserRouter>
       
      

); 
}
export default App;
