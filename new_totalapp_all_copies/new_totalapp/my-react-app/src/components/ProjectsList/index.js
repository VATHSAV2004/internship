import React, { Component } from 'react';
import './index.css';
import ProjectBlock from '../ProjectBlock/index';
import Spinner from '../Spinner/index'

class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: []
        };
    }

    componentDidMount() {
        this.fetchProjectDetails();
    }

    fetchProjectDetails = async () => {
        try {
            const { projectTitle } = this.props;

            const url = "http://127.0.0.1:5000/recommend";
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "project_title":  projectTitle })
            };
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            console.log("hello--------------------------------------------------");
            this.setState({ result: data.recommendations }); 
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        const { result } = this.state;

        return (
            <div className="project-list">
                
                {result.length > 0 ? (
                    result.map((values)=>{return (
                        <ProjectBlock projectDetails={values} />
                    )})
                    
                ) : (
                    <Spinner/>
                )}
           
            </div>
        );
    }
}

export default ProjectList;