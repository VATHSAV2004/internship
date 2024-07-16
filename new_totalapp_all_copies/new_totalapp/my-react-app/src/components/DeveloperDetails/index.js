import './index.css'
import Header from '../Header/index.js'
import Address from '../Address/index.js'
const DeveloperDetails=()=>{
    return (
        <>
         <Header/>
        <div className='containercss'>
        <div class="background-css">
            <h1 class="heading-css">Developer Details</h1>
            
            <img className="imagecss" src="/image333.jpg" alt="not" />
            
            
            <p className="paracss-name">Sai srivathsav Dasi</p>
            <p className="paracss">STUDENT-UNIVERSITY COLLEGE OF ENGINEERING OSMANIA UNIVERSITY<br/>CSE DEPT(AIML)</p>
            <p className="paracss">LinkedIn Profile:<a target="_blank" className="profile-anchor-css" href=" http://www.linkedin.com/in/dasisaisrivathsav"> http://www.linkedin.com/in/dasisaisrivathsav</a></p>
            <p className="descriptioncss"> Driven and dedicated professional aspiring to excel in the dynamic fields
 of Full Stack Development and Artificial Intelligence/Machine Learning
 (AI/ML). With a <br/>solid foundation in both front-end and back-end
 technologies, coupled with a passion for leveraging AI/ML algorithms to
 solve complex problems,I aim to contribute my skills<br/> and expertise
 towards creating innovative software solutions. Eager to collaborate with
 talented teams and continue learning to stay at the forefront of
 technological advancements, I am <br/>committed to delivering high-quality,
 scalable, and user-centric applications that push the boundaries of
 innovation</p>

 </div>

        </div>
        <Address/>
        </>
    )
}
export default DeveloperDetails