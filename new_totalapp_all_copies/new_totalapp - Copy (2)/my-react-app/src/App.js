import './App.css'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import ProjectListPage from './components/ProjectListPage/index';
import ProjectDetails from './components/ProjectDetails/index'
import Home from './components/Home/index'
const App=()=>{
        console.log("app is running-------------------------------------------------------------");
return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<ProjectListPage/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/ProjectsDetails" element={<ProjectDetails/>}/>
        </Routes>
        </BrowserRouter>
       
      

);
}
export default App;
