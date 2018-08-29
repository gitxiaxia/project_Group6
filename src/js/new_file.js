
		document.addEventListener('DOMContentLoaded',()=>{
			/*
				1）设置ul宽度，达到水平排列的效果
				2）水平轮播效果
				3）移入移出，清除轮播效果
				4）添加分页效果
					* 点击分页切换
				5）无缝滚动
					* 把第一张复制到最后
					* 当滚动到复制那张图片时，瞬间重置回初始状态，并把index改成1

				6）添加前后按钮，实现上一张、下一张的效果


				公式：left = index*banner.clientWidth
			 */
			
			let banner = document.getElementsByClassName('banner')[0];
			let ul = banner.children[0];

			// 初始化
			let index = 0;

			// 无缝滚动关键1：把第一张复制到最后
			ul.appendChild(ul.children[0].cloneNode(true));

			let len = ul.children.length;

			// 设置ul宽度，实现水平排列效果
			ul.style.width = banner.clientWidth * len + 'px';

			// 添加分页
			let page = document.createElement('div');
			page.className = 'page';
			for(let i=0;i<len-1;i++){
				let span = document.createElement('span');
				span.innerText = i+1;
				if(i===index){
					span.className = 'active';
				}

				page.appendChild(span);
			}
			banner.appendChild(page);


			// 添加上一张、下一张按钮
			let btnNext = document.createElement('span');
			btnNext.className = 'btn-next';
			btnNext.innerHTML = '&gt;';

			let btnPrev = document.createElement('span');
			btnPrev.className = 'btn-prev';
			btnPrev.innerHTML = '&lt;';

			banner.appendChild(btnPrev);
			banner.appendChild(btnNext);


			let timer = setInterval(autoPlay,3000);


			// 鼠标移入移除
			banner.onmouseover = ()=>{
				clearInterval(timer);
			}

			banner.onmouseout = ()=>{
				timer = setInterval(autoPlay,3000);

			}

			banner.onclick = e=>{
				// 点击分页切换
				if(e.target.parentNode.className === 'page'){
					// 修改index值为当前分页数字-1
					index = e.target.innerText-1;

					show();
				}

				// 上一张，下一张
				else if(e.target.className === 'btn-prev'){
					index--;
					show();
				}else if(e.target.className === 'btn-next'){
					index++;
					show();
				}
			}


			function autoPlay(){
				index++;

				show();
			}


			function show(){
				if(index>=len){
					// 无缝滚动关键2：当滚动到复制那张图片时，瞬间重置回初始状态，并把index改成1
					ul.style.left = 0;
					index = 1;
				}else if(index<0){
					index = len-2;
				}

				animate(ul,{left:-index*banner.clientWidth});

				for(let i=0;i<len-1;i++){
					page.children[i].className = ''
				}

				if(index===len-1){
					page.children[0].className = 'active';
				}else{
					page.children[index].className = 'active';
					
				}
			}
		})
			
	