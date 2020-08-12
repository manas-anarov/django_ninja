import React from 'react';
import { Layout, Menu} from 'antd';
import { Link} from 'react-router-dom';

const { Header, Content, Footer } = Layout;

class CustomLayout extends React.Component {
    render() {
        return (
            <Layout className="layout">
                <Header>
                <div className="logo" />
                    <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                    >
                    <Menu.Item key="1">
                        <Link to="/">List</Link>
                    </Menu.Item>
                    
                    <Menu.Item key="2">
                        <Link to="/add">Create</Link>
                    </Menu.Item>
                </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        {this.props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                ©2020 | React for Django Ninja
                </Footer>
            </Layout>
        );
    }
}


export default CustomLayout;