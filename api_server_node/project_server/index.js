const express=require('express');
const app=express();
const cors = require('cors');


app.use(cors({
  origin: 'http://localhost:3000'
}));
const sqlite3=require('sqlite3');
const {open}=require('sqlite');
var db=0;
const initialiseDb=async()=>{
    try{
                db=await open({
                driver:sqlite3.Database,
                filename:'C:/Users/HP/Desktop/database_sqlite/sqlite-tools-win-x64-3450200/uniproject.db'
            })
    }
    catch(e){
        console.log(e);
        process.exit(1);
    }
}
initialiseDb();

app.get('/AllUniversities',async (req,res)=>{
    const query='SELECT * FROM universities;';
    const data=await db.all(query);
    res.send(data);
});
app.get('/CollegeProjects/:collegeId',async (req,res)=>{
    const collegeId=req.params.collegeId
    const query=`SELECT projects.*
    FROM projects
    JOIN students ON projects.student_id = students.student_id
    JOIN universities ON students.university_id = universities.university_id
    WHERE universities.university_id = '${collegeId}';`;
    const data=await db.all(query);
    res.send(data);
});

app.get('/ProjectsDetails/:project_id',async (req,res)=>{
    const project_id=req.params.project_id;
    const query=`SELECT * FROM projects WHERE project_id='${project_id}';'`;
    const data=await db.all(query);
    res.send(data);
});
app.get('/ProjectsDetails/title/:project_title', async (req, res) => {
    const project_title = req.params.project_title;
    const query = `SELECT * FROM projects WHERE project_title LIKE '%${project_title}%';`;
    try {
        const data = await db.all(query);
        res.send(data);
    } catch (error) {
        console.error('Error fetching project details:', error);
        res.status(500).send('An error occurred while fetching project details.');
    }
});

app.listen(4860,()=>{console.log("running server at 4860")})