import Vue from "vue";
import Header from "./header/";

Vue.component("HeaderCom",Header)
// 图片过滤器
Vue.filter("toImg",(url,params)=>{
	return url.replace(/w\.h/,params);
})