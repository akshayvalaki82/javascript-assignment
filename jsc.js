
		function validate() {
			var fname = document.getElementById("fname");
			var lname = document.getElementById("lname");
			var pnumber3 = document.getElementById("pnumber").value; // for pnumber
			var regx = /^[7-9][0-9]{9}$/; // for pnumber

			var offnumber3 = document.getElementById("offnumber").value; //for off number
			var offregx = /^[0][0-9]{9}$/; // for offnumber
			
			var email3 = document.getElementById("email").value;
			var emailregx = /([a-z A-Z 0-9 \.-]+)@([a-z A-z 0-9]+).([a-z A-Z]+)/;

			var password3 = document.getElementById("password").value;
			var passregx = /^([a-z A-z]{8,12})$/;

			var cpasswoed3 = document.getElementById("cpassword").value	

			var month = document.getElementById("month").value;
    		var day = document.getElementById("day").value;
    		var year = document.getElementById("year").value;
    		var dob = document.getElementById("dob");

			var m1 = document.getElementById("rd1").checked;
			var f1 = document.getElementById("rd2").checked;
			var req1 = document.getElementById("req");
			
			var bi = document.getElementById("cb1").checked;
			var ri = document.getElementById("cb2").checked;
			var pi = document.getElementById("cb3").checked;
			var creq = document.getElementById("creq");

			var abouty=document.getElementById("abouty");




			if (fname.value.trim() == "") {
				//alert("blank ");
				fname.style.border = "solid 3px red";
				document.getElementById("fname1").style.visibility = "visible";
				//return false;
			}
			if (lname.value.trim() == "") {
				//alert("blank ");
				lname.style.border = "solid 3px red";
				document.getElementById("lname1").style.visibility = "visible";
				//return false;
			}
			if (1) 
			{
				
				if (regx.test(pnumber3)) {
					document.getElementById("pnumber1").innerHTML = "valid";
					document.getElementById("pnumber1").style.visibility = "visible";
					document.getElementById("pnumber1").style.color = "green";
					//return false;
				}
				else {
					document.getElementById("pnumber1").innerHTML = "***plze enter 10 digite number";
					document.getElementById("pnumber1").style.visibility = "visible";
					document.getElementById("pnumber1").style.color = "red";
					//return false;
				}	
				
			}
			
			if (1) 
			{

				if (offregx.test(offnumber3)) {
										
					document.getElementById("offnumber1").innerHTML = "valid";
					document.getElementById("offnumber1").style.visibility = "visible";
					document.getElementById("offnumber1").style.color = "green";
				}
				else {
					
					document.getElementById("offnumber1").innerHTML = "***plze enter 10 digite number";
					document.getElementById("offnumber1").style.visibility = "visible";
					document.getElementById("offnumber1").style.color = "red";
					return false;
				}
			}
			
			if (1) 
			{	
				if (emailregx.test(email3)) {
					document.getElementById("email1").innerHTML = "valid";
					document.getElementById("email1").style.visibility = "visible";
					document.getElementById("email1").style.color = "green";
					//return false;
				}
				else {
					document.getElementById("email1").innerHTML = "**plze enter valid email id";
					document.getElementById("email1").style.visibility = "visible";
					document.getElementById("email1").style.color = "red";
					return false;
				}		
			}
			if (1) 
			{	
				if (passregx.test(password3)) {
					document.getElementById("password1").innerHTML = "valid";
					document.getElementById("password1").style.visibility = "visible";
					document.getElementById("password1").style.color = "green";
					//return true;
				}
				else {
					document.getElementById("password1").innerHTML = "Range should be between 8 to 12 charachers, should accept only Alphanumeric characters, No Special characters";
					document.getElementById("password1").style.visibility = "visible";
					document.getElementById("password1").style.color = "red";
					return false;
				}		
			}
			if (1)
			{
				if(password3==cpasswoed3)
				{
					document.getElementById("cpassword1").innerHTML = "valid";
					document.getElementById("cpassword1").style.visibility = "visible";
					document.getElementById("cpassword1").style.color = "green";
					
				}
				else{
					document.getElementById("cpassword1").innerHTML = "password dosent match";
					document.getElementById("cpassword1").style.visibility = "visible";
					document.getElementById("cpassword1").style.color = "red";
					return false;
				}
			}
			if(1)
			{
				if(month == "select" || day=="select"|| year=="select")
				{
					dob.style.visibility="visible";
					return false;
				}
				else{
					dob.style.visibility="hidden";
					var month = Number(document.getElementById("month").value);
					var year = Number(document.getElementById("year").value);
					var age = document.getElementById("age");
					var date = new Date();
					var m = Math.abs(month - Number(date.getMonth()+1));
					var y = date.getFullYear() - year;
					var result = y+"."+m;
					age.value = result;
					
				}
			}
			
			if(1)
			{
				if(m1==true || f1==true)
				{
					req1.style.visibility="hidden";
					//return true;
				}
				else{
					req1.style.visibility="visible";
					//return false;
				}

			}
			
			if(1)
			{
				if(bi==true || ri==true || pi==true)
				{
					creq.style.visibility="hidden";
					//return true;
				}
				else
				{
					creq.style.visibility="visible";
					return false;
				}
			}
			if (abouty.value.trim() == "") {
				abouty.style.border = "solid 3px red";
				document.getElementById("abouty1").style.visibility = "visible";
				return false;
			}

			

			


		}
