
	var list_l = document.querySelector('#list-l');
	var list_r = document.querySelector('#list-r');

console.log(list_l)
	// 创建list-l 左边html节构
	 list_l.innerHTML =  `<h2 class="h2"><span>shoes</span></h2><div class="dv1">
				<p>
					<img src="../l_images/jia.png" class="btn1"/>
					<a href="#">girl s shoes</a>
				</p>
				<ul class="ul1">
                    <li><a href="#">> men's casual shoes</a></li>
                </ul>
			</div>
			<div class="dv2">
				<p>
					<img src="../l_images/jia.png" class="btn2"/>
					<a href="#">girl s shoes</a>
				</p>
				<ul class="ul2">
                    <li><a href="#">> men's casual shoes</a></li>
                    <li><a href="#">> men's sneakers</a></li>
                    <li><a href="#">> men's jirdan shoes</a></li>
                    <li><a href="#">> men's slippers</a></li>
                    <li><a href="#">> men's snow boots</a></li>
                    <li><a href="#">> men's basketall shoes</a></li>
                    <li><a href="#">> men's running shoes</a></li>
                    <li><a href="#">> men's fashion shoes</a></li>
                </ul>
			</div>
			<div class="dv3">
				<p>
					<img src="../l_images/jia.png" class="btn3"/>
					<a href="#">girl s shoes</a>
				</p>
				<ul class="ul3">
                    <li><a href="#">> men's casual shoes</a></li>
                    <li><a href="#">> men's sneakers</a></li>
                    <li><a href="#">> men's jirdan shoes</a></li>
                    <li><a href="#">> men's slippers</a></li>
                    <li><a href="#">> men's snow boots</a></li>
                    <li><a href="#">> men's basketall shoes</a></li>
                    <li><a href="#">> men's running shoes</a></li>
                    <li><a href="#">> men's fashion shoes</a></li>
                </ul>
			</div>


			<h2 class="hh">best reviewed items</h2>
			<div class="dv4">
				<ul class="ul4"></ul>
			</div>`



	 	// 数据生成商品列表（左边）
	    var ul_left = document.querySelector('.ul4');
	    // console.log(ul_left)
	    var goods = [{
	        id:'001',
	        img:'../l_images/new1.png',
	        name:'up down open cowhide leather case with crocodile...',
	        price:'219',
	        sale:'189',
	        save:'30'
	    },{
	        id:'002',
	        img:'../l_images/new2.png',
	        name:'decent module case silicone skin cover for iphone...',
	        price:'319',
	        sale:'199',
	        save:'35'
	    },{
	        id:'003',
	        img:'../l_images/new3.png',
	        name:'decent module case silicone skin cover for iphone...',
	        sale:'299',
	        price:'499',
	        save:'55'
	    }
	    ]
	    var html = goods.map(function(goods){
	    	return `<li data-id="${goods.id}"><a href="#">
		    	<img src="${goods.img}"/>
		    	</a>
		    		<h4>${goods.name}</h4>
		    		<p><del>list price:${goods.price}</del></p>
		    		<p>our price:<span style="color:red;">USD${goods.sale}</span></p>
		    		<p><span style="color:#628B62;">save USD ${goods.save}</span></p>
		    	</li>`
	       
	    }).join('');
	    ul_left.innerHTML = html;

	    // 获取左边ul元素
	    var ul1 = document.querySelector('.ul1');
	   	var ul2 = document.querySelector('.ul2');
		var ul3 = document.querySelector('.ul3');
		var btn1 = document.querySelector('.btn1');
		var btn2 = document.querySelector('.btn2');
		var btn3 = document.querySelector('.btn3');


		// 按钮1
		btn1.onclick = function(){
			if(ul1.style.display === 'none'){
				btn1.src = '../images/jian1.png';
				ul1.style.display = 'block';
			}else{
				btn1.src = '../images/jia.png';
				ul1.style.display = 'none';
			}
		}


		// 按钮2
		btn2.onclick = function(){
			if(ul2.style.display === 'none'){
				btn2.src = '../images/jian1.png';
				ul2.style.display = 'block';
			}else{
				btn2.src = '../images/jia.png';
				ul2.style.display = 'none';
			}
		}


		// 按钮3
		btn3.onclick = function(){
			if(ul3.style.display === 'none'){
				btn3.src = '../images/jian1.png';
				ul3.style.display = 'block';
			}else{
				btn3.src = '../images/jia.png';
				ul3.style.display = 'none';
			}
		}







		// 创建右边html
		list_r.innerHTML = `<div class="shang">
				<ul class="rul1 fl">
					<li>sort by:</li>
                    <li>date<img src="../l_images/jtshang.png"></li>
                    <li class="price">price<img src="../l_images/jtxia.png" id="jiage"></li>
				</ul>
				<ul class="rul2  fr">
					<li><</li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li>next<i class="iconfont icon-jiantou-copy"></i></li>
				</ul>
			</div>


		
			<ul class="rul3">
			</ul>
		
		
            <ul class="rul4">
                <li class="li1  fl">total <strong>279</strong> records</li>
                <li>next<i class="iconfont icon-jiantou-copy"></i></li>
                <li><a href="#">4</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">1</a></li>
                <li><</li>
            </ul>`;

	


		 // 数据生成列表右边
	    var rul3= document.querySelector('.rul3');
	    // console.log(rul3)
	    var goods2 = [{
	        id:'001',
	        img:'../l_images/new1.png',
	        name:'up down open cowhide leather case with crocodile...',
	        price:'219',
	        sale:'189',
	        save:'30'
	    },{
	        id:'002',
	        img:'../l_images/new2.png',
	        name:'decent module case silicone skin cover for iphone...',
	        price:'319',
	        sale:'2199',
	        save:'35'
	    },{
	        id:'003',
	        img:'../l_images/new3.png',
	        name:'decent module case silicone skin cover for iphone...',
	        price:'499',
	        sale:'239',
	        save:'55'
	    },{
	        id:'004',
	        img:'../l_images/new4.png',
	        name:'decent module case silicone skin cover for iphone...',
	        price:'499',
	        sale:'599',
	        save:'55'
	    },{
	        id:'005',
	        img:'../l_images/new5.png',
	        name:'up down open cowhide leather case with crocodile...',
	        price:'959',
	        sale:'559',
	        save:'30'
	    },{
	        id:'006',
	        img:'../l_images/new6.png',
	        name:'up down open cowhide leather case with crocodile...',
	        price:'919',
	        sale:'889',
	        save:'30'
	    },{
	        id:'007',
	        img:'../l_images/new7.png',
	        name:'up down open cowhide leather case with crocodile...',
	        price:'359',
	        sale:'189',
	        save:'30'
	    },{
	        id:'008',
	        img:'../l_images/new8.png',
	        name:'up down open cowhide leather case with crocodile...',
	        price:'934',
	        sale:'99',
	        save:'30'
	    },{
	        id:'009',
	        img:'../l_images/new9.png',
	        name:'up down open cowhide leather case with crocodile...',
	        price:'219',
	        sale:'189',
	        save:'30'
	    },{
	        id:'010',
	        img:'../l_images/new10.png',
	        name:'decent module case silicone skin cover for iphone...',
	        price:'319',
	        sale:'199',
	        save:'35'
	    },{
	        id:'011',
	        img:'../l_images/new11.png',
	        name:'decent module case silicone skin cover for iphone...',
	        price:'499',
	        sale:'299',
	        save:'55'
	    },{
	        id:'012',
	        img:'../l_images/new12.png',
	        name:'decent module case silicone skin cover for iphone...',
	        price:'89',
	        sale:'299',
	        save:'55'
	    },{
	        id:'013',
	        img:'../l_images/new13.png',
	        name:'up down open cowhide leather case with crocodile...',
	        price:'159',
	        sale:'300',
	        save:'30'
	    },{
	        id:'014',
	        img:'../l_images/new14.png',
	        name:'up down open cowhide leather case with crocodile...',
	        price:'909',
	        sale:'389',
	        save:'30'
	    },{
	        id:'015',
	        img:'../l_images/new15.png',
	        name:'up down open cowhide leather case with crocodile...',
	        price:'559',
	        sale:'389',
	        save:'30'
	    },{
	        id:'016',
	        img:'../l_images/new16.png',
	        name:'up down open cowhide leather case with crocodile...',
	        price:'789',
	        sale:'389',
	        save:'30'
	    },{
	        id:'017',
	        img:'../l_images/new15.png',
	        name:'up down open cowhide leather case with crocodile...',
	        price:'449',
	        sale:'389',
	        save:'30'
	    },{
	        id:'018',
	        img:'../l_images/new16.png',
	        name:'up down open cowhide leather case with crocodile...',
	        price:'779',
	        sale:'389',
	        save:'30'
	    },{
	        id:'019',
	        img:'../l_images/new15.png',
	        name:'up down open cowhide leather case with crocodile...',
	        price:'666',
	        sale:'389',
	        save:'30'
	    },{
	        id:'020',
	        img:'../l_images/new16.png',
	        name:'up down open cowhide leather case with crocodile...',
	        price:'999',
	        sale:'389',
	        save:'30'
	    },{
	        id:'021',
	        img:'../l_images/new15.png',
	        name:'up down open cowhide leather case with crocodile...',
	        price:'900',
	        sale:'389',
	        save:'30'
	    }
	    ];
	
	    function list(){
	    		
	    	var html2 = goods2.map(function(g2){
		    	return `<li class="r2 " data-id="${g2.id}"><a href="#">
		    		<img src="${g2.img}"/>
					<p><input type="checkbox"/>${g2.name}</p>
					<p><del>USD<span>${g2.price}</span></del>
					   <span style="color:red;">USD<span>${g2.sale}</span></span>
					</p>
					<p><span style="color:#628B62;">save USD </span>
						<span id="sale">${g2.save}</span>
					</p><p><ins>wholesale</ins>
					<i class="iconfont icon-jiantou-copy1" style="font-size:12px;"></i></p>
			    	</a></li>`
		    }).join('');
		    	
		    	return html2;
		    }
	  	// console.log(list());

	    rul3.innerHTML = list();



	    //价格排序
	    var price = document.querySelector('.price');
	    var jiage = document.querySelector('#jiage');
	    // console.log(price,jiage);
	    var num =0;
	    price.onclick = function(){
	        num++; 
	        if(num%2 !=0){
	            jiage.src='../l_images/jtxia.png';
	            sort.reverse();
	            rul3.innerHTML = list();
	         
	        }
	        else{
	            jiage.src='../l_images/jtshang.png';
	            sort.reverse();
	            rul3.innerHTML = list();
	          
	        }
	    }

	 
	    //  //sort排序
 		var sort = goods2.sort(function(a,b){
 			
			  return a.sale-b.sale;
		})



 		// 获取a标签
		  var links = rul3.getElementsByTagName('a');
	     
	     for(var i = 0;i <links.length;i++){
            //点击获取当前a标签
	        links[i].onclick = (function(i){
               //利用闭包函数获取数据
	        	return function(){

                        //价格
                       var span = links[i].children[3].children[1]
                       var sale = span.innerText;
                        //利用节点关系获取图片路劲
			            var img = links[i].firstElementChild;
			            var imgUrl = img.getAttribute('src');
			            //转码
			            imgUrl = encodeURI(imgUrl)
			            console.log(imgUrl);
                       console.log(imgUrl)
                        //利用url改变路径  并传参
                        window.location.href = 'l_list-xiangqing.html?imgurl='+imgUrl+'&sale='+sale;

					     }
		        })(i);
		     }
	  

