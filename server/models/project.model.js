const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    description: { 
        type: String, 
        required: [true,  "Project is required."],
        minlength: [12, "Project description must be longer."] 
    },
    name: {
        type: String,
        // min: [new Date(), "Date cannot be in the past!"],
        required: [true, "Name is required."],
        minlength: [3, "Full name required."] 
    },
    email: {
        type: String,
        minlength: [8, "Email must be valid."],
        required: [true, "Email is required."],
    },
    link: {
        type: String,
        minlength: [3, "Link must be valid."],
        required: [true, "Link is required."],
    },
    number: {
        type: [Number,"must be a number"],
        maxlength: [10, "Phone Number must be valid."],
        required: [true, "Phone Number is required."],
    },
    why: {
        type: String,
        maxlength: [150, "Response cannot exceed 150 words."],
        required: [true, "Response is required."],
    }
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
