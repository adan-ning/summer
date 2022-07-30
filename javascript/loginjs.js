<script language="javascript" type="text/javascript">
			window.onload = function(){
				var count = document.getElementById("count")
				var pwd = document.getElementById("pwd")
				var btnClick = document.getElementById("enter")
				var new_count
				var new_pwd
				var content={
					count : [3392055472,],
					pwd : [123456789,]
				}
				count.onchange = function(){
					new_count = count.value
				}
				pwd.onchange = function(){
					new_pwd = pwd.value
				}
				btnClick.onclick = function login(){
					 if(
						(new_count == content.count[0]) && (new_pwd == content.pwd[0]) &&(new_count != "")&&(new_pwd != "")
					){
							window.location.href="summer.html";
							alert("登录成功！！")
							
					}else{
					        alert("登录失败！！请检测账号密码是否正确");
					    }
				}
			}
		</script>