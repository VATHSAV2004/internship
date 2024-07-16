import './index.css'
import ProjectBlock from '../ProjectBlock/index'
const ProjectDetails=async()=>{
    url="http://127.0.0.1:5000";
    options={
        method:postMessage,
        body:JSON.stringify('{"project_title": "Adversarial Machine Learning for Cyber Defense"}')
        
    }
    const response=await fetch(url,options);
    const data=response.json();
    return data;

}

const projectDetails={
    projectHeading:"movie recommender system",
    problemSummary:"",
    problemImage:"https://repository-images.githubusercontent.com/275336521/20d38e00-6634-11eb-9d1f-6a5232d0f84f"
}
const ProjectList=()=>{
    return (
      
        <div className="project-list">
            {projectDetails.map((value)=>{<ProjectBlock projectDetails={value}/>})}
            
            <ProjectBlock projectDetails={projectDetails}/>
            <ProjectBlock projectDetails={projectDetails}/>
            <ProjectBlock projectDetails={projectDetails}/>
        </div>
    )
}
export default ProjectList;