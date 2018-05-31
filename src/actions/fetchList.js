/**
 * Created by zfd on 2018/5/30.
 */
import fetch from 'isomorphic-fetch'




export function getNews(){
	return {type:"START_GET_NEWS"}
}



let actions = {

	fetchNew:()=>{
		return fetch('./symbol.json')
			.then(res => res.json())
			.then(json => dispatch(actions.getNewsSuccess(json)))
			.catch (()=>{dispatch(actions.getNewsErr())})
	},
	getNewsSuccess:(json)=>{
		return {
			type:'FETCH_NEWS_SUCCESS',
			json
		}
	},
	getNewsErr:()=>{
		return {
			type:'FETCH_NEWS_FALSE',
			error:ture
		}
	}
}

export  default  actions