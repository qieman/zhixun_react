/**
 * Created by zfd on 2018/5/31.
 */
import React from 'react'


const Nav = ()=>
	<nav>
		<div className="row">
			<a className="logo" href="/"><img src="https://static.feixiaohao.com/themes/default/images/logo.png"/></a>
			<ul className="nav-left-menu">
				<li className="active"><a href="">最新</a></li>
				<li><a href="">热门</a></li>
				<li><a href="">关注</a></li>
			</ul>
			<ul className="nav-right-menu">
				<li><a href="">登陆</a></li>
				<li><a href="">注册</a></li>
				<li><a href="" className="btn">投稿</a></li>
			</ul>
		</div>
	</nav>


export default Nav
