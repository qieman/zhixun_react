/**
 * Created by zfd on 2018/5/30.
 */
import fetch from 'isomorphic-fetch'

export function fetchList() {
	return (dispatch) => {
		return fetch('./symbol.json')
			.then(res => res.json())
			.then(json => dispatch({ type: 'FETCH_LIST_SUCCESS', payload: json }));
	}
}

export function fetchItem(id) {
	return (dispatch) => {
		if (!id) return Promise.resolve();
		return fetch(`https://api.huobi.br.com/market/detail/merged?AccessKeyId=51111e88-dd4d1959-c15bd648-30498&symbol=${id}`)
			.then(res => res.json())
			.then(json => dispatch({ type: 'FETCH_ITEM_SUCCESS', payload: json }));
	}
}
