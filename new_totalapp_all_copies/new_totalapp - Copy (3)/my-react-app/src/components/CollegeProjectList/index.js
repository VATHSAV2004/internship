import React, { Component } from 'react';
import './index.css';
import ProjectBlockall from '../ProjectBlockall/index';
import Spinner from '../Spinner/index'
import withParams from '../withParams';
class ProjectList extends Component {
  
        state = {
            result: []}
      
 
    componentDidMount() {
        this.fetchProjectDetails();
    }

    fetchProjectDetails = async () => {
        try {
      
            const { collegeId } = this.props.params;
            const url = "http://localhost:4860/CollegeProjects/"+collegeId;
            console.log("college id",collegeId)
            const options = {
                method: 'GET',
            };
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            console.log("hello--------------------------------------------------");
            this.setState({ result: data });
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        const { result } = this.state;
        console.log(result)

        return (
            <div className="project-list">
                
                {result.length > 0 ? (
                    result.map((values)=>{return (
                        <ProjectBlockall projectDetails={values} />
                    )})
                    
                ) : (
                    <Spinner/>
                )}
           
            </div>
        );
    }
}
export default withParams(ProjectList);