/*cross origin will not work without webserver.Mozilla have webserver facility */
/*state less  means href="#" and state full protocol means href="filename.html" */
/* in child file state less protocol will not work,javascript will not be used in child file */
/*IE Edge,IE  tester-important software */
/*when page is not loaded it is called asynchronous */
function showdata(alldata)
{
	document.getElementById("mydata").innerHTML=alldata;
}

	function one()
	{
		
		if (window.XMLHttpRequest) {
				// code for IE7+, Firefox, Chrome, Opera, Safari
				var xmlhttp = new XMLHttpRequest();
			} else {
				// code for IE6, IE5
				var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
                       showdata(xmlhttp.responseText);
				}
			};
			xmlhttp.open("GET", "homecontent.html", true);
			xmlhttp.send();
		
	}

function lead()
{
	if (window.XMLHttpRequest) {
				// code for IE7+, Firefox, Chrome, Opera, Safari
				var xmlhttp = new XMLHttpRequest();
			} else {
				// code for IE6, IE5
				var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
			//alert(xmlhttp.responseText);
                       showdata(xmlhttp.responseText);
				}
			};
			xmlhttp.open("GET", "lead.html", true);
			xmlhttp.send();
			//var data = "leads page will come here";
			//showdata(data);
}

function profile()
{
	if (window.XMLHttpRequest) {
				// code for IE7+, Firefox, Chrome, Opera, Safari
				var xmlhttp = new XMLHttpRequest();
			} else {
				// code for IE6, IE5
				var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
                       showdata(xmlhttp.responseText);
				}
			};
			xmlhttp.open("GET", "profile.html", true);
			xmlhttp.send();
}

function photo()
{
	if (window.XMLHttpRequest) {
				// code for IE7+, Firefox, Chrome, Opera, Safari
				var xmlhttp = new XMLHttpRequest();
			} else {
				// code for IE6, IE5
				var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
                       var photo=JSON.parse(xmlhttp.responseText);
					   var data="";
					   for(var i=0; i<photo.length; i++)
					   {
						   data=data+ "<div class='col-sm-3'><img src='"+photo[i].name+"' height='150'></div>";
					   }
					   showdata(data);
				}
			};
			xmlhttp.open("GET", "photolist.json", true);
			xmlhttp.send();
}
function getdata()
{
	if (window.XMLHttpRequest) {
				// code for IE7+, Firefox, Chrome, Opera, Safari
				var xmlhttp = new XMLHttpRequest();
			} else {
				// code for IE6, IE5
				var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
                       var photo=JSON.parse(xmlhttp.responseText);
					   var data="";
					   var j=1;
					   for(var i=0; i<photo.length; i++)
					   {
						   if(j==1)
						   {
							   data=data+ "<div class='row'>";
						   }
						   
						   data=data+ "<div class='col-sm-3'><img src='"+photo[i].name+"'class='img-responsive'></div>";//'height=100'
						   if(j==4)
						   {
							   data=data+"</div><hr>";
							   j=1;
						   }else{
							   j++;
						   }//new
						   
					   }
					   document.getElementById("mydata2").innerHTML=data;
				}
			};
			xmlhttp.open("GET", "photolist.json", true);
			xmlhttp.send();
}

function getcontact()
{
	if (window.XMLHttpRequest) {
				// code for IE7+, Firefox, Chrome, Opera, Safari
				var xmlhttp = new XMLHttpRequest();
			} else {
				// code for IE6, IE5
				var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
                       document.getElementById("mydata2").innerHTML=xmlhttp.responseText;
				}
			};
			xmlhttp.open("GET", "contact.html", true);
			xmlhttp.send();
}
