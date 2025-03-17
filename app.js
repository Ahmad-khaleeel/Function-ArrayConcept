const students = ["Ahmad", "Sami", "Jihad"];

const courses = [
  { coursename: "FrontEnd react", duration: "200Hr", dateOfStarting: "1-6-2025" },
  { coursename: "BackEnd node", duration: "200Hr", dateOfStarting: "1-7-2025" },
  { coursename: "FullStack web", duration: "400Hr", dateOfStarting: "1-6-2025" },
];

const findByName = ((courseName)=>{
    const getCourse = courses.find((course)=>{
    return course.coursename.toLowerCase()===courseName.toLowerCase() 
    })
    if(getCourse){
    return `the course is existed with this details ${getCourse.coursename}, ${getCourse.duration}, ${getCourse.dateOfStarting}`   
    }else{
    return `the course ${courseName} not found`  
    }
})
console.log(findByName("BackEnd node"));


const addCourse = ((coursename, duration, dateOfStarting)=>{
    courses.push({coursename, duration, dateOfStarting})
    return `the course has been added ${coursename}`
})

console.log(addCourse("Angular", "200Hr", "1-11-2025"));
console.log(courses);


const registerStudent =((studentName,CourseName)=>{
    return `Hello ${studentName} your registeration was successfull please find your course ${findByName(CourseName)}    `
})

console.log(registerStudent("Mona", "FrontEnd react"));

 