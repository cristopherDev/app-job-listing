import { memo } from 'react'
import { Row, Col, Button } from 'antd'

const Styles = {
    myOpts: {
        paddingBottom: '13px'
    }
}

function OptsJobs(props) {
    const { visible, setVisible } = props

    return(
        <Row>
            <Col align="right" span={24} style={Styles.myOpts}>
                {
                    !visible ?
                    <Button type="primary" shape="round" onClick={() =>setVisible(!visible)}>
                        AGREGAR PENDIENTE
                    </Button>
                    :
                    <Button type="primary" danger shape="round" onClick={() =>setVisible(!visible)}>
                        CANCELAR
                    </Button>
                }
            </Col>
        </Row>
    )
}

export default memo(OptsJobs)
