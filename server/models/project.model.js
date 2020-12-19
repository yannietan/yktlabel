const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    project: { 
        type: String, 
        required: [true,  "Project Name is Required"],
        minlength: [3, "Project must be at least 3 characters long"] 
    },
    date: {
        type: Date,
        // min: [new Date(), "Date cannot be in the past!"],
        required: [true, "Date is required"]

    },
    status: {
        type: String,
        default: 'new',
    }
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
