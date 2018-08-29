jQuery(function($){
	
 $('#com_head').load('com_head.html');
	 $('#com_footer').load('com_footer.html #Xia_links');
});




    var code = document.getElementsByClassName('w_code')[0];
    var usersname = document.getElementsByClassName('usersname')[0];
    var password = document.getElementsByClassName('password')[0];
    var w_loginbtn = document.getElementsByClassName('w_loginbtn')[0];

   
   // 随机验证码
    code.innerHTML = randomCode(4);
    code.onclick = function(){
    	console.log(666666);
         code.innerHTML = randomCode(4);
    }

    w_loginbtn.onclick = function(){
        var _code = code.innerHTML;
        var _usersname = usersname.value;
        var _password = password.value;
        var logincode = document.getElementsByClassName('logincode')[0].value;
        if(logincode.toLowerCase() == _code){

            if(_usersname.length < 6 && _password.length < 6){
                alert("用户名或密码为空");
                return false;
            }else{
                 alert("登录成功");
            }
        }else{
            alert("验证码错误");
            return false;
        }


  
}