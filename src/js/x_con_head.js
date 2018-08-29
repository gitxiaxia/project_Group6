

 function hovering_up(){
 	
  
        //1.首页二级导航 hover动画
		
//		 思路：1.相对于hover对象定位；初始0.0点       
//		      2.在根据节点关系找hover源对象的子节点（三级导航）
//		      3.利用自定义属性  hover是获取他的index  
//		 
			//全部分类 =
			var ALL_sale =  document.querySelector(".Xia_nav_l");
			
		    //导航条部分    
			var box_hover = document.querySelector('.Xia_nav1');
			
			//显示导航条信息
			ALL_sale.onmouseover= function(){
			
				box_hover.style.display = 'block';
			}
			
			
				
				//hover     
				var hover  = document.querySelectorAll('.Xia_nav1_0');
			
					
				//个每个hover添加自定义类名
				for(var i = 0;i<hover.length;i++){
					hover[i].setAttribute('idx',i);
					
				}
				
				
				//利用事件委托实现hover效果
				box_hover.onmousemove = function(e){
					
					e=e||window.event;
					var target = e.target||e.srcElement;
					
					//用于判断目标元素
					var a_span = target.parentNode.parentNode;
			     	var h3_p = target.parentNode;
					var div = target;
				
				
					if( div.className == "Xia_nav1_0"||a_span.className =='Xia_nav1_0'|| h3_p.className =="Xia_nav1_0" ){
						
							   //获取当前的li索引值（自定义属性得到的）
								var j = a_span.getAttribute('idx')|| h3_p.getAttribute('idx')||div.getAttribute('idx');
								console.log(j);
//							
									//移动距离
									var distance = j*hover[0].clientHeight;
									
									
									//显示后改变位置（三级导航部分）
				                     var show  = hover[j].children[3];
									
		
									//显示
									show.style.display = 'block';
									
//									
									//调用封装动画  并传参
									animate(show,{top:- distance});
									
								
						
							hover[j].onmouseout = function(){
	
									show.style.top= 0;
									show.style.display = 'none';
							};
				
					};	
	
				}

}  		
		//首页二级导航 hover动画END



