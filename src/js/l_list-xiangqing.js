	//接收数据
// 获取URL参数 并生成页面
(function(){
			var url =window.location.href;
			url= decodeURI(url);
			 
			
			//查找？的index
			var index  = url.indexOf("?");

			// 截取出属性和属性值
			var ser = url.slice(index+1,url.length)
			  console.log(ser);

				// 从&号拆分  拆分字符串
			    ser = ser.split('&');//["img/rl=../images/new1.png", "sale=30"]

		 	// console.log(ser)
			//遍历数组
			ser.forEach(function(item){
				// 拆分key/value
				// 对象拆分为属性--属性值（以=拆分）
				var arr = item.split('=');//(1) ["img/rl", "../images/new1.png"]    (1) ["sale", "30"]
				
				 // 判断并写入img的src属性
				if(arr[0] == 'imgurl'){
					// 获取main_imgs元素
					var img = document.querySelector('#tu');
					
		            // 写入内容
		            img.src = arr[1]   
				}
				//判断并写入价格
		       if(arr[0] == 'sale'){
		       		//价格
					var	price = arr[1];
					// console.log(price);

					//数量
					var	qty = document.querySelector('.shuliang');
					//计算后结果
					var jieguo = document.querySelector('.jiage');
					
					qty.onchange  = function(){
						 show();
					}
					
					
					//函数
					function show(){
						//获取
						var quantity_ = qty.value*1;
						
						console.log(quantity_)

						//计算并写入总价
						var res = quantity_ * price;
						console.log(res)
							jieguo.innerHTML =`价格为：${res}`;
						//判断
						if(quantity_ < 0 ||  price < 0){
							jieguo.innerText =`数值不能小于0哦`;
						}
					}
					
			       }

			});
})()
// 获取URL参数 并生成页面END

	
//详情页 动画轮播图
function Li_slideshow(){
		//获取元素
		var show =document.querySelector('.main_imgs .show');
		var next =document.querySelector('.main_imgs .next');
		var pvev =document.querySelector('.main_imgs .pvev');
		var ul =document.querySelector('.main_imgs ul');
		var li = document.querySelectorAll('.main_imgs ul li'); 
			
		//鼠标hover上去li边框变色
		ul.onmousemove = function(e){
		     for(let i = 0;i<li.length;i++){
		  
				e = e||e.event;
				var target=e.target||e.srcElement;
			
			
			    li[i].onmousemove = function (e) {
					if(target.tagName == 'IMG'  || target.tagName == 'Li'){

		                  for(var j=0;j<li.length;j++){
		                  	li[j].style.border = "1px solid #ccc";
		                  }

					    li[i].style.border= '1px solid red';

					}
			
				}

			}
		}		
		      
		//点击下一张
		next.onclick = function(){
			ul.style.left = '-275px';
		}
		//点击上一张
		pvev.onclick = function(){
			ul.style.left = '0';
		}
};
Li_slideshow();
//详情页 动画轮播图END
	





//详情页  尺码图片切换
(function(){
     function AAA(lis_1,I_1){

	    for(let j =0;j<I_1.length;j++){

	    	lis_1[j].onclick = function(e){

	              var target = e.target||e.srcElement;                       

	              if(target.tagName == 'LI'){
	              	       //利用循环将之前显示的I清除掉
	                      for(var i = 0;i<lis_1.length;i++){
	                      	// console.log(I_1[i])
	                             I_1[i].style.display = 'none';	
	                      }

			        		I_1[j].style.display = 'block';		   
	              }
	        }
	}
    }

var lis_1 = document.querySelectorAll('.main_size  li');
var I_1 = document.querySelectorAll('.main_size  li i');

var lis_2 = document.querySelectorAll('.main_color li');
var I_2 = document.querySelectorAll('.main_color  li i');

AAA(lis_1,I_1);
AAA(lis_2,I_2);
			
})()
//详情页  尺码图片切换END     	 
       	
        	 
     








// //中间商品切换部分
// // (function(){
// 	// 获取页面元素
// 	var mt = document.querySelector('.main_bottom_t');
// 	var lis1 = mt.querySelectorAll('li');
// 	// console.log(mt,lis1);
// 	var mb = document.querySelector('.main_bottom_b');
// 	var lis2 = mb.querySelectorAll('li');
// 	var imgs = document.querySelector('.main_bottom li img');
// 	// console.log(mb,lis2,imgs);




	
// 	for(var i = 0;i< lis1.length;i++){
// 		var h = lis1[i];
// 		// console.log(h)

// 		var a = 5;

// 		lis1[i].onclick = function(){
// 			 a++;
// 			 imgs.src = `../images/new${a}.png`;
// 			 if(a >9){
// 			 	imgs.src = `../images/new5.png`;
// 			  }

// 		   }
// 	  }
	




// })()









// 评价提交
// (function(){
	
	

// 用户验证部分

		// 提交验证
		// 获取按钮
		var btn = document.querySelector('#refer');
		// 获取用户名
		var username = document.querySelector('#youName');
		//输入框
		var txt  = document.querySelector('#txt');
		// 输入验证吗
		var vCode = document.querySelector('#vCode');
		// 获取
		var showCode = document.querySelector('.showCode');
		// 生成验证码
		var yzm = parseInt(Math.random()*(9999-1111+1))+1111;

		// 验证码写入页面
		showCode.innerHTML = yzm;

		// 评星
		xingxing();
		// 点击更换验证码
		showCode.onclick = function(){
			var yzm = parseInt(Math.random()*(9999-1111+1))+1111;
			showCode.innerHTML = yzm;
		}
		
		
		// 点击事件
		btn.onclick = function(e){
			// 兼容
			e = e || window.event;
			// 获取输入的值
			var _vCode = vCode.value;

			// 获取输入的内容
			var _txt = txt.value;
			

			// 判断是否评星
			var star =  document.querySelector('#star');
			if(star.className === 'aaaaaaaa'){
				// 获取用户输入的值
				var user = username.value;


					
			// 正则判断用户名是否合法// 判断验证码是否正确
			}else if(!/^[a-z][a-z0-9_\-]{3,19}$/i.test(user)){
				alert('请输入正确的用户名');
				
				
			}else if(_vCode != yzm && _vCode == null){
				alert('验证码不对');
			
			}else if(_txt >200){
				alert('你话太多');
				
			}else{

				show();
				zan();

				// 获取星星图片路径
				var ul = document.querySelector('.ul1');
				// console.log(ul)
				



				return false;
			}
			
		}	
		
			
				
// 封装传入数据
function show(){
	// 验证通过时提交相应的数据
	var pj = document.querySelector('.pj');
	var html = `<div class="pj1">
            	<div class="dv1">
            		<div class="dv1-s">
            			<ul class="ul1">
            			<li></li>
            			<li></li>
            			<li></li>
            			<li></li>
            			<li></li>
                		</ul>
                		<span class="span1"></span>
                		<h5>Test</h5>
            		</div>
            		<div class="dv1-x">
            			<img src="../images/zan.png" class="img1" />
            			<span class="dv1-x-span1">0</span>

            			<img src="../images/t.png" class="img2" />
            			<span class="dv1-x-span2">0</span>
            		</div>
            		
            	</div>
            	<div class="dv2"></div>
            </div>`
		  

	return pj.innerHTML = html;


}
			
// 封装传入数据///////////////////





// 星星部分
function xingxing(){

	var star =  document.querySelector('#star');
	var lis = star.children;
	var len = lis.length;



	 // 声明变量，用于存放分数（0-4）
        var score=0;

     // 鼠标移入
      star.onmouseover = e=>{
	        if(e.target.tagName.toLowerCase() === 'li'){
	            // 确定当前li：遍历所有，找出与e.target一样的li
	            var currentIdx;
	            for(var i=0;i<len;i++){
	                if(lis[i] === e.target){
	                    currentIdx = i;
	                }
	            }

	            // 高亮<=currentIdx的li
	            // 去除高亮>currentIdx的li
	            for(var i=0;i<len;i++){
	                if(i<=currentIdx){
	                    lis[i].className = 'active'
	                }else{
	                    lis[i].className = '';
	                }
	            }
	        }
	    }


		 // 鼠标点击：评分
        star.onclick = e=>{
        	star.className = 'aaaaaaaa';
            if(e.target.tagName.toLowerCase() === 'li'){
                for(var i=0;i<len;i++){
                    if(lis[i] === e.target){
                        score = i;
                    }
                }
            }
        }


         // 鼠标移开
            star.onmouseout = ()=>{
                for(var i=0;i<len;i++){
                    if(i<=score){
                        lis[i].className = 'active'
                    }else{
                        lis[i].className = '';
                    }
                }
            }
}
	















// 			/*点赞*/

function zan(){
	var pj = document.querySelector('.pj');
	var qty1 = 0;
	var qty2 = 0;
	     
    //利用事件委托进行评价 点赞+1/踩-1
    pj.onclick = function(e){
	     e=e||window.event;/*兼容写法*/
	     var target = e.target||e.srcElement;
     
	     //点赞
	      if(target.className =="img1" ||target.className =="like"){
	      	
	      	/*获取like*/
	      	var like_num = target.parentNode.children[1];
               var text1 = like_num.innerText

               text1++;

	      	    like_num.innerHTML=text1;
	         
          }
           //吐槽
	 	  if(target.className =="img2" ||target.className =="dislike"){
	 	       
	      	/*获取dislike_num*/
	      	var dislike_num = target.parentNode.children[3];
	        var text2 = dislike_num.innerText

	        text2++;

	      	dislike_num.innerHTML=text2;
	      }
     }

 
}

			
		/*点赞END*/



 


// })();








// 星星评分star/////////////////////


// (function(){

// 	 // 声明变量，用于存放分数（0-4）
//             var score=0;

//      // 鼠标移入
//       star.onmouseover = e=>{
// 	        if(e.target.tagName.toLowerCase() === 'li'){
// 	            // 确定当前li：遍历所有，找出与e.target一样的li
// 	            var currentIdx;
// 	            for(var i=0;i<len;i++){
// 	                if(lis[i] === e.target){
// 	                    currentIdx = i;
// 	                }
// 	            }

// 	            // 高亮<=currentIdx的li
// 	            // 去除高亮>currentIdx的li
// 	            for(var i=0;i<len;i++){
// 	                if(i<=currentIdx){
// 	                    lis[i].className = 'active'
// 	                }else{
// 	                    lis[i].className = '';
// 	                }
// 	            }
// 	        }
// 	    }


// 		 // 鼠标点击：评分
//         star.onclick = e=>{
//             if(e.target.tagName.toLowerCase() === 'li'){
//                 for(var i=0;i<len;i++){
//                     if(lis[i] === e.target){
//                         score = i;

//                         // 评星成功添加时间
// 			            var now = new Date();

// 						// 年月日
// 						var year = now.getFullYear();
// 						var month = now.getMonth()+1;
// 						var date = now.getDate();

// 						// 补0操作
// 						month = month<10 ? '0'+month:month;
// 						date = date<10 ? '0'+date:date;

// 						// 组合
// 						span1.innerText = year + '/' + month + '/'+ date;
			                       
                       
//                     }
//                 }
//             }
//         }


//          // 鼠标移开
//             star.onmouseout = ()=>{
//                 for(var i=0;i<len;i++){
//                     if(i<=score){
//                         lis[i].className = 'active'
//                     }else{
//                         lis[i].className = '';
//                     }
//                 }
//             }
// })();
// //星星评分end/////////////////////////
 
      





           

           
     