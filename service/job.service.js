const Job = require("../models/job.model");

// get jobs 
module.exports.getJobsService = async () => {
    return jobs = " tis is all jobs";
}
// create job 
module.exports.createJobService = async (data) => {
   const result = await Job.create(data);
    return result;
}
