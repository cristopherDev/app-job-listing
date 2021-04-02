import Head from 'next/head'
import { useEffect } from 'react'

import useJobs from '../utils/useJobs'

import Layout from '../components/layout'
import OptsJobs from '../components/jobs/OptsJobs'
import FormJob from '../components/jobs/FormJob'
import ListJobs from '../components/jobs/ListJobs'

export default function Home() {
  const [
    {
      jobs,
      visible, setVisible
    },

    getAllJobs,
    postNewJob,
    patchCloseJob,
    deleteJob
  ] = useJobs()

  useEffect(() => { getAllJobs() }, [])

  return (
    <div className="container">
      <Head>
        <title>Job listing APP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <OptsJobs 
          visible={visible} 
          setVisible={setVisible}
        />
        <FormJob visible={visible} postNewJob={postNewJob} />
        <ListJobs jobs={jobs} patchCloseJob={patchCloseJob} deleteJob={deleteJob} />
      </Layout>
    </div>
  )
}
