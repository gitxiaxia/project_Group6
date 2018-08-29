/*清单
 1.吸顶效果(搜索框)
2. 吸顶效果(导航条)
 2.首页轮播图
 3.首页动态生成首页品牌logo部分HTML
 4.返回顶部动画
 5.首页二级导航 hover动画
 6.首页畅销区轮播效果
  */

//1.搜索框 /二级导航==吸顶效果(20px启动固定定位)
(function() {

	//left (container)二级导航距离left的距离
	var left = document.querySelector('#Xia_nav .container').offsetLeft;

	//全部分类（获取二级导航）
	var ALL_sale = document.querySelector(".Xia_nav_l");

	//获取logo
	var logo = document.getElementById("Xia_logo");

	//添加事件
	window.onscroll = function() {

		var top = document.documentElement.scrollTop || document.body.scrollTop
		if(top > 20) {
			logo.style.position = "fixed";
		}
		if(top > 70) {
			//滑动后的定位
			ALL_sale.style.position = "fixed";
			ALL_sale.style.top = '65px';
			ALL_sale.style.left = left + "px";

		} else if(top < 20) {
			//回到原位
			logo.style.position = "static";

			ALL_sale.style.position = 'absolute';

			ALL_sale.style.top = 0;
			ALL_sale.style.left = 0;
		}

	}
})();

//吸顶效果(20px启动固定定位)END

//【注意】只有index.js才有混动条固定的效果
//导航栏  吸顶效果  20+搜索框的高（70）

//2首页轮播图	
function slideshow() {

	let slideshow = document.getElementsByClassName('slideshow')[0];

	let ul = slideshow.children[0];

	// 初始化
	let index = 0;

	// 无缝滚动关键1：把第一张复制到最后
	ul.appendChild(ul.children[0].cloneNode(true));

	let len = ul.children.length;

	// 设置ul宽度，实现水平排列效果
	ul.style.width = slideshow.clientWidth * len + 'px';

	// 添加分页
	let page = document.createElement('div');
	page.className = 'page';
	for(let i = 0; i < len - 1; i++) {
		let span = document.createElement('span');
		span.innerText = i + 1;
		if(i === index) {
			span.className = 'active';
		}

		page.appendChild(span);
	}
	slideshow.appendChild(page);

	let timer = setInterval(autoPlay, 3000);

	// 鼠标移入停止
	slideshow.onmouseover = () => {
		clearInterval(timer);
	}
	//鼠标移开移动
	slideshow.onmouseout = () => {
		timer = setInterval(autoPlay, 3000);

	}

	slideshow.onclick = e => {
		// 点击分页切换
		if(e.target.parentNode.className === 'page') {
			// 修改index值为当前分页数字-1
			index = e.target.innerText - 1;

			show();
		}

	}

	function autoPlay() {
		index++;

		show();
	}

	function show() {
		if(index >= len) {
			// 无缝滚动关键2：当滚动到复制那张图片时，瞬间重置回初始状态，并把index改成1
			ul.style.left = 0;
			index = 1;
		} else if(index < 0) {
			index = len - 2;
		}

		animate(ul, {
			left: -index * slideshow.clientWidth
		});

		for(let i = 0; i < len - 1; i++) {
			page.children[i].className = ''
		}

		if(index === len - 1) {
			page.children[0].className = 'active';
		} else {
			page.children[index].className = 'active';

		}
	}
}
slideshow();
/*首页轮播图	END*/

//3.生成Xia_goodsMarks 的HTML结构
(function() {
	var logo_arr = [{
			imgUrl: 'logo1.png',
			title: "Miu Miu"
		},
		{
			imgUrl: 'logo2.png',
			title: "Prada"
		},
		{
			imgUrl: 'logo3.png',
			title: "Catier"
		},
		{
			imgUrl: 'logo4.png',
			title: "Chloe"
		},
		{
			imgUrl: 'logo5.png',
			title: "Christan Louboutin"
		},
		{
			imgUrl: 'logo6.png',
			title: "NBA"
		},
		{
			imgUrl: 'logo7.png',
			title: "Guess"
		},
		{
			imgUrl: 'logo8.png',
			title: "Moncler"
		},
		{
			imgUrl: 'logo9.png',
			title: "Tory Burch"
		},
		{
			imgUrl: 'logo10.png',
			title: "Givenchy"
		}

	]

	var goodsMarks = document.querySelector('.goodsMarks');
	//生成ul
	var logo_ul = document.createElement('ul');

	logo_ul.innerHTML = logo_arr.map(item => {
		return ` <li>
						
						<a href="#"><img src="images/${item.imgUrl}"/></a>
						<p>${item.title}</p>
					    </li>`;

	}).join('');

	//写入页面		
	goodsMarks.appendChild(logo_ul);
})();
//生成Xia_goodsMarks 的HTML结构END

//4.返回顶部动画
(function() {

	//获取元素
	let toTop = document.querySelector('.toTop');
	var cc = toTop.nextElementSibling

	// 点击返回顶部
	toTop.onclick = () => {
		let timer = setInterval(() => {
			// 计算缓冲速度
			let speed = Math.ceil(window.scrollY / 5); //1

			scrollBy(0, -speed);

			if(window.scrollY <= 0) {
				clearInterval(timer);
			}

		}, 30)
	}
})();
//返回顶部动画END

//5.首页二级导航 hover动画
//【函数来自】x_con_head.js
hovering_up();

/*6首页畅销区轮播效果*/

var prev = document.querySelector('.sellers .prev');
var next = document.querySelector('.sellers .next');
var list = document.querySelector('.sellers .show .tab10');

//下上一张
prev.onclick = function() {
	list.style.left = '0';
}

//下一张
next.onclick = function() {
	list.style.left = '-700px';
}

/*首页畅销区轮播效果END*/