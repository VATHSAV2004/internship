import Address from '../Address/index.js'
import Header from '../Header/index.js'
import ProjectsList from '../ProjectsList/index'
import './index.js'
const ProjectListPage=()=>{
    return (
        <>
        <Header/>
        <div className="app-background-css">
        <ProjectsList/>
        </div>
        <Address/>
        </>
    )  
}
export default ProjectListPage