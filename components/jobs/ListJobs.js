import { Row, Col, Card } from 'antd'

const Styles = {
    myTitle: {
        fontSize: '19px',
        fontWeight: 'bold'
    },
    myJobs: {
        marginBottom: '13px'
    },
    emptyJobs: {
        textAlign: 'center',
        fontSize: '24px'
    }
}

export default function ListJobs({ jobs }) {
    if (jobs.length) {
        return (
            <>
            <p style={Styles.myTitle}>Mis pendientes</p>
            <Row gutter={14}>
            {
                jobs.map(job => {
                    return (
                        <Col>
                            <Card style={Styles.myJobs}>
                                <p>{job.job}</p>
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