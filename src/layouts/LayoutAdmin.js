import React from 'react';

// import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import "./LayoutAdmin.scss"
import { Route } from 'react-router';

export default function LayoutAdmin(props) {

    const { routes } = props;
    const { Header, Content, Footer } = Layout;
    return (
        <Layout>
            <h2>Menu sider Admin</h2>
            <Layout>
                <Header>Header...</Header>
                <Content>
                    <LoadRouters routes={routes} />
                </Content>
                <Footer>footer...</Footer>
            </Layout>
        </Layout>
    )
};

function LoadRouters({ routes }) {
    // console.log(props);
    // return null;

    // const { routes } = props;

    return routes.map((route, index) => (
        <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
        />
    ));
}