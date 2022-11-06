const {
    getJobsService,
    createJobService
} = require("../service/job.service");


// get jobs 
module.exports.getJobs = async (req, res, next) => {
    try {
        const jobs = getJobsService();
        res.send(jobs)
        if (!jobs) {
            return res.status(400).json({ status: "failed", message: "No Job Available" })
        }
        res.status(200).json({ status: "success", data: jobs })

    } catch (error) {
        next(error)
    }
}

// create job
module.exports.createJob = async (req, res, next) => {
    try {
        const result = await createJobService(req.body);
        
        if (!result) {
            return res.status(400).json({ status: "failed", message: "job create failed" })
        }
        res.status(200).json({ status: "success", data: result })

    } catch (error) {
        next(error)
    }
}