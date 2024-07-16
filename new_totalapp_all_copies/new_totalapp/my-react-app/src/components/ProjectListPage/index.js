import Address from '../Address/index.js'
import ProjectsList from '../ProjectsList/index'
import './index.js'
const ProjectListPage=({ projectTitle })=>{ 
    return (
        <>
        <div className="app-background-css">
        <ProjectsList  projectTitle={projectTitle}/>
        </div>
        <Address/>
        </>
    )  
}
export default ProjectListPage