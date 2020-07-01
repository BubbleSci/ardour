<template>
	<div></div>
</template>

<script>
export default {
	methods: {
		data() {
			return{}
		},
		getRequest(urlStr) {
			if (typeof urlStr == "undefined") {
				var url = decodeURI(location.search);
			} else {
				var url = "?" + urlStr.split("?")[1];
			}
			var theRequest = new Object();
			if (url.indexOf("?") != -1) {
				var str = url.substr(1);
				var strs = str.split("&");
				for (var i = 0; i < strs.length; i++) {
					theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
				}
			}
			return theRequest;
		}
	},
	mounted() {
		let arr = this.getRequest(location.search);
		let prise = arr["total"];
		let apple = arr["apple"];
		let banana = arr["banana"];
		let dragon = arr["dragon"];
		alert(
			"苹果" + apple + "香蕉" + banana + "火龙果" + dragon + "总计" + prise
		);
	}
};
</script>

<style lang="scss" scoped>
</style>