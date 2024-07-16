import './index.css'
import {Component} from 'react'
import Header from '../Header/index.js'
import CollegeBlock from '../CollegeBlock/index.js'
import Address from '../Address/index.js'
class Projects extends Component{
    state={colleges:[]}

    fetchcolleges=async()=>{
        try{
            const url="http://localhost:4860/AllUniversities"
            const options={
                method:"GET",
            }
            const res=await fetch(url,options)
            const data=await res.json()
            console.log("ppppppppp")
            console.log(data)
            console.log("ppppppppp")
            this.setState({colleges:data})
        }
        catch(e){
            console.log(e);
        }

    }
    componentDidMount(){
     this.fetchcolleges()
    }
    render(){
        const {colleges}=this.state
        console.log("/////////")
        console.log(colleges)
        console.log("////////")
        return (
            <div>
                <Header/>
                {colleges.map(value=>{
                    return (
                        <CollegeBlock details={value}/>
                    )
                })}
                <Address/>
    
            </div>
        )
    }
}
export default Projects