const mongoose = require('mongoose')

const InstructorSchema = new mongoose.Schema({
Username: {
    type: String,
    required: true
},
Password: {
    type: String,
    required: true
},
Country: {
    type: String, 
    required: false
},
Course:{
    title:String,
    subject:String,
    instructor:String,
    subtitles:String,
    totalHoursOfEachSubtitle:Number,
    exercises:String,
    totalHoursOfCourse:Number,
    price:Number,
    required: true

}
})

module.exports = mongoose.model('Instructor', InstructorSchema)