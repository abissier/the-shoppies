import axios from 'axios';
const BASEURL = 'https://www.omdbapi.com/?t=';
const APIKEY = '&apikey=f4ee69aa';

export default {
	search: function(query) {
		return axios.get(BASEURL + query + APIKEY);
	}
};
