import React, { Component } from 'react'
import { Button,DatePicker } from 'antd';
import {WechatOutlined,WeiboOutlined,SearchOutlined} from '@ant-design/icons'
import "./App.less"
const { RangePicker } = DatePicker;

export default class App extends Component {
	render() {
		return (
			<div>
				<h2 className="haha">哈哈哈</h2>
				App....
				<button>点我</button>
				<Button type="primary">按钮1</Button>
				<Button >按钮2</Button>
				<Button type="link">按钮3</Button>
				<Button type="primary" icon={<SearchOutlined />}>
					Search
				</Button>
				<WechatOutlined />
				<WeiboOutlined />
				<DatePicker/>
				<RangePicker/>
			</div>
		)
	}
}