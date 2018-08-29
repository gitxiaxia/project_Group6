//利用jquery复制头部和尾部html代码
jQuery(function($){
	 $('#com_head').load('com_head.html',function(){
	 	
	 	//5.首页二级导航 hover动画
		//【函数来自】x_con_head.js
			hovering_up();

	 	
	 });
	 $('#com_footer').load('com_footer.html');
});
		
		
		
(function(){

    // 模拟数据
     var goods = [
                    {
                        id:001,
                        imgurl:"../images/main.new3.png",
                        name:"Louis Vuitton Monogram Canvas Speedy 30 M41526",
                        price:219,
                        sale:109,
                        qtx:1,
                    },{
                        id:002,
                        imgurl:"../images/main.new3.png",
                        name:"Louis Vuitton Monogram Canvas Speedy 30 M41526",
                        price:219,
                        sale:109,
                        qtx:2,
                    },{
                        id:002,
                        imgurl:"../images/main.new3.png",
                        name:"Louis Vuitton Monogram Canvas Speedy 30 M41526",
                        price:219,
                        sale:109,
                        qtx:2,
                    },{
                        id:002,
                        imgurl:"../images/main.new3.png",
                        name:"Louis Vuitton Monogram Canvas Speedy 30 M41526",
                        price:219,
                        sale:109,
                        qtx:2,
                    },{
                        id:002,
                        imgurl:"../images/main.new3.png",
                        name:"Louis Vuitton Monogram Canvas Speedy 30 M41526",
                        price:219,
                        sale:109,
                        qtx:2,
                    },{
                        id:002,
                        imgurl:"../images/main.new3.png",
                        name:"Louis Vuitton Monogram Canvas Speedy 30 M41526",
                        price:219,
                        sale:109,
                        qtx:2,
                    },{
                        id:002,
                        imgurl:"../images/main.new3.png",
                        name:"Louis Vuitton Monogram Canvas Speedy 30 M41526",
                        price:219,
                        sale:109,
                        qtx:2,
                    },{
                        id:002,
                        imgurl:"../images/main.new3.png",
                        name:"Louis Vuitton Monogram Canvas Speedy 30 M41526",
                        price:219,
                        sale:109,
                        qtx:2,
                    },{
                        id:002,
                        imgurl:"../images/main.new3.png",
                        name:"Louis Vuitton Monogram Canvas Speedy 30 M41526",
                        price:219,
                        sale:109,
                        qtx:2,
                    }
                ];


    var car_paylist = document.getElementsByClassName('car_paylist')[0];
    // 获取数据生成购物车
    car_paylist.innerHTML += goods.map(function(item,idx){
                return `
                     <li>
                        <div><img src="${item.imgurl}"/></div>
                        <div>
                            <p>${item.name}</p>
                            <p>ID:<span>#${item.id}</span></p>
                            <p>Size:Default</p>
                        </div>
                        <div class="goodsnumber">
                            <input type="button" value="-" class="subtract_btn"/>
                            <input type="text" class="num_import" value="${item.qtx}"/>
                            <input type="button" value="+" class="add_btn"/>
                        </div>
                        <div>
                            <p><del>${item.price} py6</del></p>
                            <p style="color:#f00;">${item.sale} py6</p>
                        </div>
                        <div>
                        <p ><span class="sumpay">${item.sale * item.qtx}</span> py6</p>
                            <p style="color:#4f4">your save <span class="sumsave">${(item.price- item.sale)*item.qtx}</span> py6</p>
                        </div>
                        <div class="ac">
                            <button class="car_delbtn">&times;</button>
                        </div>
                    </li> `
            }).join("");

    // 判断ul是否出现滚动条
    ulh();
    function ulh(){
        var ulHeight = car_paylist.querySelectorAll('li');
        if(ulHeight.length >= 5){
            car_paylist.classList.add("ulsecoll");
            // car_paylist.style.overflowY = "auto";
        }else if(ulHeight.length <5){
            car_paylist.classList.remove("ulsecoll");
            // car_paylist.style.overflowY = "";
        }
    }
    //实现购物车列表商品删除
    car_paylist.onclick = function(e){
        var target = e.target;
        if(target.className === "car_delbtn"){
            var Li = target.parentNode.parentNode;
            Li.parentNode.removeChild(Li);
        }
        // 删除后 ul的滚动条重新生成
        ulh();
        // 删除后重新计算价格
        paytotal()

    }
    // 清空购物车
    var continue_btn = document.getElementsByClassName('continue_btn')[0];
    continue_btn.onclick = function(){
        car_paylist.innerHTML = "";
    }


    //最后的价格和优惠多少钱
    paytotal()
    function paytotal(){
        var total = 0;
        var save = 0;
        // 获取页面上的优惠金额和付款金额
        var sumpay = car_paylist.querySelectorAll('.sumpay');
        var sumsave = car_paylist.querySelectorAll('.sumsave');
        for(var i=0; i<sumpay.length;i++){
            total += sumpay[i].innerHTML*1;
            save += sumsave[i].innerHTML*1;
        }
        // 写到页面
        document.getElementsByClassName('total_num')[0].innerHTML = total;
        document.getElementsByClassName('save_num')[0].innerHTML = save;
    }

    // 热卖部分
    var hot_items =  document.getElementsByClassName('hot_items')[0]

    hot_items.innerHTML += goods.map(function(item,ide){
        return `
           <li>
                <p><img src="../images/des3.png" height="59" width="60" alt="" /></p>
                <p>3refdgfdgfd gshhdfh sdfggfdg fdgfd</p>
                <p><span><del>$65</del></span><span style="color:#f00;">56 py6</span></p>
                <button>ADD to</button>
            </li>`
    }).join("");

})();

	 
		
		


	