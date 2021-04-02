import axios from 'axios'

const API_URL = process.env.API_URL

const API = {
    GET_JOBS: `${API_URL}/api/jobs`,
    POST_JOB: `${API_URL}/api/jobs`,
    PATCH_JOB: (id) => `${API_URL}/api/jobs/${id}`,
    DELETE_JOB: (id) => `${API_URL}/api/jobs/${id}`
}

const APIGetAllJobs = async () => {
    var res = await axios.get(API.GET_JOBS)
    return res
}

const APIPostNewJob = async (job) => {
    var res = await axios.post(API.POST_JOB, { job })
    return res
}

const APIPatchJob = async (id, job) => {
    var res = await axios.patch(API.PATCH_JOB(id), { job: job })
    return res
}

const APIDelJob = async (id) => {
    var res = await axios.delete(API.DELETE_JOB(id))
    return res
}

export {
    APIGetAllJobs,
    APIPostNewJob,
    APIPatchJob,
    APIDelJob
}
