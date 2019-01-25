import conf from '../common/config.js';
const req = function(params){
	uni.request({
		url: conf.url + params.url,
		success: function(res){
			params.sCallback && params.sCallback(res);
		}		
	})
}
export default req
