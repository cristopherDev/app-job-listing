import { 
    Row, Col, 
    Form, Input, 
    Radio, Card ,
    Button
} from 'antd'

const { TextArea } = Input

const Styles = {
    myCard: {
        marginBottom: '13px'
    },
    myTextArea: {
        resize: 'none'
    }
}

export default function FormJob({ visible, postNewJob }) {
    const [form] = Form.useForm()

    const handleSubmit = async (values) => {
        console.log(values)
        
        await postNewJob(values)

        form.resetFields()
    }

    if (visible) {
        return (
            <Row>
                <Col span={14} offset={5}>
                    <Card style={Styles.myCard}>
                        <Form 
                            form={form}
                            layout="vertical"
                            initialValues={{
                                'tag': "NORMAL"
                            }}
                            onFinish={handleSubmit}
                        >
                            <Row gutter={18}>
                            <Col span={12}>
                                <Form.Item
                                    label="Pendiente"
                                    name="job"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Favor de agregar un pendiente',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Tipo de prioridad" 
                                    label="tag"
                                    name="tag"
                                >
                                    <Radio.Group>
                                        <Radio.Button value="NORMAL">NORMAL</Radio.Button>
                                        <Radio.Button value="IMPORTANTE">IMPORTANTE</Radio.Button>
                                        <Radio.Button value="CRITICO">CRITICO</Radio.Button>
                                    </Radio.Group>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Observaciones"
                                    name="observations"
                                    rules={[]}
                                >
                                    <TextArea style={Styles.myTextArea} rows={5} />
                                </Form.Item>
                                <Col align="right">
                                    <Form.Item align="right">
                                        <Button type="primary" htmlType="submit">
                                            REGISTRAR
                                        </Button>
                                    </Form.Item>
                                </Col>
                            </Col>
                            </Row>
                        </Form>
                    </Card>
                </Col>
            </Row>
        )
    }

    if (!visible) return null
    
}