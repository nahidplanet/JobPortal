const express = require('express');
const { getJobs, createJob } = require('../../controller/job.controller');
const jobsRoute = express.Router();

jobsRoute.route("/")
.get(getJobs)
.post(createJob)
// .patch(updateJob)
// .delete(updateJob)

module.exports = jobsRoute;