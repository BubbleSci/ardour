<template>
	<div class="home">
		<header>
			<div>水果大甩卖！</div>
		</header>
		<section>
			<nav>
				<span class="c1">苹果</span>
				<div class="small" id="small"></div>
				<div class="big hide" id="big">
					<img
						src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592822818585&di=d6dd4a6794d4539a27e2b5ab33f298e6&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F7%2F567b4e42cb98e.jpg"
						width="200px"
						height="150px"
						alt
					/>
				</div>
				<br />
				<span>单价：1元/个</span>
				<br />
				<div id>
					请选择苹果购买的个数:
					<select id="appleNum">
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</select>
				</div>
			</nav>

			<aside>
				<span>香蕉</span>
				<div>
					<img
						src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592823214275&di=0010a4c30de221c82e7a67c592784709&imgtype=0&src=http%3A%2F%2Fc0001-1.zzyicheng.cn%2Fupload%2Fimg%2Fstore%2F0%2F1524714069840.jpg"
						width="200px"
						height="150px"
						alt
					/>
				</div>
				<span>单价：5元/提</span>
				请选择香蕉购买的个数:
				<select id="bananaNum">
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
				</select>
			</aside>

			<aside>
				<span>火龙果</span>
				<div >
					<img
						src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592823253983&di=6e6c71486b390f65c4267422f03e7e8f&imgtype=0&src=http%3A%2F%2Fimg.cnhnb.com%2Fimage%2Fjpeg%2Fhead%2F2018%2F10%2F15%2Fedd7f57def52448a916563b823e64bfe.jpeg%3FimageView2%2F0%2Fw%2F650%2Fh%2F650%2Fq%2F75%2Fignore-error%2F1"
						width="200px"
						height="150px"
						alt
					/>
				</div>
				<br />
				<span>单价：10元/个</span>
				<br />请选择火龙果购买的个数:
				<select id="dragonNum">
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
				</select>
			</aside>
		</section>
		<div>
			<button id="sure" @click="sure">确定</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "Home",
	methods: {
		sure() {
			let appleNum = document.getElementById("appleNum").value;
			let bananaNum = document.getElementById("bananaNum").value;
			let dragonNum = document.getElementById("dragonNum").value;
			let total = appleNum * 1 + bananaNum * 5 + dragonNum * 10;
			if (confirm("您将付款" + total + "元")) {
				window.location.href =
					"付款界面.html?total=" +
					total +
					"&&apple=" +
					appleNum * 1 +
					"&&banana=" +
					bananaNum * 5 +
					"&&dragon=" +
					dragonNum * 10;
			}
		}
	}
};
</script>

<style scoped>
* {
	margin: 5px;
	padding: 10px;
}

header {
	width: 100%;
	height: 100px;
	background-color: ivory;
}

nav {
	width: 30%;
	float: left;
}

aside {
	width: 30%;
	float: left;
}

article {
	width: 30%;
	float: left;
}

header {
	text-align: center;
	font-size: 50px;
	font-weight: bolder;
}
</style>