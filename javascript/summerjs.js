<script type="text/javascript">
				function dispartime()
				{
					var time = new Date();
					var hour = time.getHours();
					var minute = time.getMinutes();
					var second = time.getSeconds();
					if (minute < 10)
						minute="0"+minute;
					if (second < 10)
						second="0"+second;
					document.getElementById("time").innerHTML="<span id='hour'>"+hour+"</span>:<span id='minute'>" + minute+"</span>:<span id='second'>"+second+"</span>";
					
					var myTime = setInterval("dispartime()",1000);
				}
				</script>