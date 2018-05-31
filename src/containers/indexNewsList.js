/**
 * Created by zfd on 2018/5/31.
 */
import React from 'react'
import { connect } from 'react-redux'
import Newlist from '../components/newList'


const demostate = {
	loadingNews:false,
	newslatest:[
		{
			id:1,
			tit:'下面看看“苹果篮子”的动态布局',
			text:'我们这个数据结构把它 “实例化”，如下这样放在我们改成写的 AppleBasket.jsx 中，然后我们开始书写我们的动态渲染代码啦，如下'
		},
		{
			id:2,
			tit:'222222下面看看“苹果篮子”的动态布局',
			text:'我们这个数据结构把它 “实例化”，如下这样放在我们改成写的 AppleBasket.jsx 中，然后我们开始书写我们的动态渲染代码啦，如下'
		}
	]
}


const indexNewsList = () =>{
	let state = demostate
	return (
		<Newlist  newsList={state.newslatest} />
	)
}



/*const indexNewsList =connect(demostate)(Newlist)*/

export default indexNewsList





