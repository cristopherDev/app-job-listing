import { useState } from 'react'
import { message } from 'antd'
import { APIGetAllJobs, APIPostNewJob, APIDelJob } from './api'

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

    const deleteJob = async (id) => {
        try {
            var res = await APIDelJob(id)

            console.log(res)

            message.info('Pendiente eliminado...')

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
        postNewJob,
        deleteJob
    ]
}

export default useJobs