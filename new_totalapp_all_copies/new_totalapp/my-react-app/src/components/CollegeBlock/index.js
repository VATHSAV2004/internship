import './index.css'
import {Link} from 'react-router-dom'

const ProjectBlock=(props)=>{
    console.log(props);
    console.log("block page");
    const {details}=props;
    const {university_id}=details;
    const collegeId=university_id;
    return ( 
        <Link to={`/CollegeProjects/${collegeId}`}>
        <div className="project-block-css">
            <h2 className="project-heading-css">{details.university_name}</h2>
            <p className="project-explore-css">visit college Projects --</p>
        </div>
        </Link>
    );
}
export default ProjectBlock;