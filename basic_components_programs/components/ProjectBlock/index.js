import './index.css'

const ProjectBlock=(props)=>{
    console.log(props);
    const {projectDetails}=props;
    return (
        
        <div className="project-block-css">
            <h2 className="project-heading-css">{projectDetails[0]}</h2>
            <img className="project-image-css" src={projectDetails.problemImage} alt="imagenotloaded"/>
            <p className="project-explore-css">explore more</p>
        </div>
    );
}
export default ProjectBlock;