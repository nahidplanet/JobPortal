const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types
var validator = require('validator');



const jobSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true, "job name is required"],
        minLength: [3, "name at least 3 characters"],
    },
    imageUrl: {
        type: String,
        validate: [validator.isURL, "please provide a valid image link"]

    },
    category: {
        type: String,
        required: [true, "job category is required"],
        lowercase: true,
        enum: {
            values:["web development", "seo", "marketing", "data entry", "graphics design"],
            message: "category values can't be {VALUE}. must be web development/seo/marketing/data entry/graphics design"
        }
    },
    description: {
        type: String,
        required: [true, "job description is required"]
    },
    jobType: {
        type: String,
        required: [true, "job type is required"],
        lowercase: true,
        enum: {
            values: ["remote", "office"],
            message: "job type values can't be {VALUE}. must be web remote/office"
        }
    },
    location: {
        type: String,
        required: [true, "job location is required"],
        lowercase: true,
        enum: {
            values: ["dhaka", "barishal", "jhenaidah", "khulna"],
            message: "Location values can't be {VALUE}. must be web dhaka/barishal/jhenaidah/khulna"
        }
    },
    salary: {
        type: Number,
        required: [true, "job salary is required"],
        validate: {
            validator: (value) => {
                isInteger = Number.isInteger(value)
                if (isInteger) {
                    return true;
                } else {
                    return false;
                }
            },
            message: "{VALUE} salary must be a number"
        }
    },
    jobStatus: {
        type: String,
        lowercase: true,
        required: [true, "status is require"],
        enum: {
            values: ["available", "unavailable",],
            message: "job status values can't be {VALUE}. must be web available or unavailable"
        }
    },
    publisher: {
        type: ObjectId,
        ref: "User"
    }
},
    {
        timestamps: true
    }
);
const Job = mongoose.model("Job", jobSchema);
module.exports = Job;