import req from '../../common/request.js';

export function getBanner(callback){
	var params = {
		url: '/banner/1',
		sCallback: function(res){
			callback && callback(res)
		}
	}
	req(params);
}