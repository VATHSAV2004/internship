import './App.css'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import ProjectListPage from './components/ProjectListPage/index';
import ProjectDetails from './components/ProjectDetails/index'
const App=()=>{
        console.log("app is running-------------------------------------------------------------");
return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<ProjectListPage/>}/>
        <Route path="/ProjectsDetails" element={<ProjectDetails/>}/>
        </Routes>
        </BrowserRouter>
       
      

);
}
export default App;
