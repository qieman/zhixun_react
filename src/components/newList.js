/**
 * Created by zfd on 2018/5/31.
 */
import React from 'react'


class Newlist extends  React.Component{

	shouldComponentUpdate(nextProps) {
		return nextProps.state != this.props.state;
	}


	render(){

		let { newsList } = this.props;

		const demostate = [{
			id: 1,
			tit: '下面看看“苹果篮子”的动态布局',
			text: '我们这个数据结构把它 “实例化”，如下这样放在我们改成写的 AppleBasket.jsx 中，然后我们开始书写我们的动态渲染代码啦，如下'
		}];



		return (
			<div className="main-box">
				<ul className="news-list">
					{newsList.map(news=>
						<li key={news.id}>
								<div  className="tit"><a href="">{news.tit}</a></div>
								<div  className="text">{news.text}<a href="/">阅读原文</a></div>
								<div  className="tags"><a href="">BTC</a><a href="">eth</a></div>
						</li>
					)}
				</ul>
				<div className="load-more">加载更多</div>
			</div>
		)
	}
}

export default Newlist