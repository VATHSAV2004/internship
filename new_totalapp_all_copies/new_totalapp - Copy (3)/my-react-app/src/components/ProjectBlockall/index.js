import './index.css'

const ProjectBlockall=(props)=>{
    console.log(props);
    console.log("block page"); 
    const {projectDetails}=props;
    console.log("---"+projectDetails);
    return (
        <div className="project-block-css">
            <h2 className="project-heading-css">{projectDetails.project_title}</h2>
            <p className="project-explore-css">explore more</p>
        </div>
    );
}
export default ProjectBlockall;