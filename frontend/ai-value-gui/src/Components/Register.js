import React from 'react';
import { Layout, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Title from 'antd/lib/typography/Title'
import Head from './Layouts/Head'
const { Header, Footer, Sider, Content } = Layout;

export default class Register extends React.Component {
	render() {
		return (
			<div className="App">
				<Layout>
					<Head />
					<Layout>
						<p>Here is Register</p>
					</Layout>
				</Layout>
			</div>

		)
	}
}

// export default Head;