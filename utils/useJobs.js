import { useState } from 'react'
import { APIGetAllJobs, APIPostNewJob } from './api'

function useJobs() {
    const [jobs, setJobs] = useState([])
    const [visible, setVisible] = useState(false)

    const getAllJobs = async () => {
        try {
            var res = await APIGetAllJobs()

            console.log(res)

            setJobs(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const postNewJob = async (job) => {
        try {
            var res = await APIPostNewJob(job)

            console.log(res)

            await getAllJobs()
        } catch (error) {
            console.log(error)
        }
    }

    return [
        {
            jobs,
            visible, setVisible
        },

        getAllJobs,
        postNewJob
    ]
}

export default useJobs