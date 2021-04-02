import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

const Styles = {
    myHeader: {
        padding: 0
    },
    myContent: {
        margin: '24px 16px 0',
        background: '#f0f2f5',
        padding: 24,
        minHeight: 600
    },
    myFooter: {
        textAlign: 'center'
    }
}

const dateYear = new Date().toLocaleString("es-ES", {
    year: "numeric"
})

export default function AppLayout(props) {
    return (
        <Layout className="layout">
        <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[]}>
            </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
            <div style={Styles.myContent}>
                {props.children}
            </div>
        </Content>
            <Footer style={{ textAlign: 'center' }}>
                Job listing APP / CPET {dateYear}
            </Footer>
        </Layout>
    )
}
