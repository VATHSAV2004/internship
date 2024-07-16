import React, { Component } from 'react';
import './index.css';
import Spinner from '../Spinner/index';
import withParams from '../withParams';
import ProjectListPage from '../ProjectListPage/index.js'
import Header from '../Header/index.js'

class ProjectDetails extends Component {
    state = {
        result: null, // Initialize as null
        loading: true, // Add loading state
        error: null, // Add error state
    }

    componentDidMount() {
        this.fetchProjectDetails();
    }

    fetchProjectDetails = async () => {
        try {
            console.log("params", this.props.params);
            const { project_id } = this.props.params;
            const url = `http://localhost:4860/ProjectsDetails/${project_id}`;
            console.log("project id", project_id);
            const options = {
                method: 'GET',
            };
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            } 
            const data = await response.json();
            console.log("hello--------------------------------------------------");
            this.setState({ result: data, loading: false });
        } catch (error) {
            console.error(error);
            this.setState({ error: error.message, loading: false });
        }
    }

    render() {
        const { result, loading, error } = this.state;
        console.log(result);

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <p>{error}</p>;
        }

        if (!result) {
            return <p>No project details available.</p>;
        }

        const { project_id, project_title,project_description,project_category,project_supervisor,start_date,end_date,keywords,github_url,tools_technologies,project_outcome} = result[0];

        return (
            <div>
                <Header/>
                <h1>{project_id}</h1>
                <h1>{project_title}</h1>
                <p>{project_description}</p>
                <p>{project_category}</p>
                <p>{project_supervisor}</p>
                <p>{start_date}</p>
                <p>{end_date}</p>
                <p>{keywords}</p>
                <p>{github_url}</p>
                <p>{tools_technologies}</p>
                <p>{project_outcome}</p>
                <ProjectListPage projectTitle={project_title}/>
            </div>
        );
    }
}

export default withParams(ProjectDetails);