import { Row, Col, Card, Button, Tag } from 'antd'
import { CheckOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const Styles = {
    myTitle: {
        fontSize: '19px',
        fontWeight: 'bold'
    },
    myJobs: {
        marginBottom: '13px'
    },
    myTag: {
        marginBottom: '9px'
    },
    jobTitle: {
        fontSize: '19px',
        fontWeight: 'bold',
        color: '#393939'
    },
    emptyJobs: {
        textAlign: 'center',
        fontSize: '24px'
    }
}

export default function ListJobs({ jobs, deleteJob }) {
    if (jobs.length) {
        return (
            <>
            <p style={Styles.myTitle}>Mis pendientes</p>
            <Row gutter={14}>
            {
                jobs.map(job => {
                    return (
                        <Col key={job['_id']+'col'}>
                            <Card 
                                hoverable 
                                key={job['_id']} 
                                style={Styles.myJobs}
                                actions={[
                                    <Button type="text" shape="circle" icon={<CheckOutlined />} />,
                                    <Button type="text" shape="circle" icon={<EditOutlined />} />,
                                    <Button type="text" shape="circle" onClick={() => deleteJob(job['_id'])} icon={<DeleteOutlined />} />
                                ]}
                            >
                                <p  style={Styles.jobTitle}>
                                    {job.job}
                                </p>

                                <Tag style={Styles.myTag}>{job.tags}</Tag>

                                <p>{job.observations}</p>

                            </Card>
                        </Col>
                    )
                })
            }
            </Row>
            </>
        )
    }

    if (!jobs.length) {
        return (
            <Card style={Styles.emptyJobs}>
                <p>SIN PENDIENTES</p>
            </Card>
        )
    }
}