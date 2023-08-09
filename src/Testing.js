var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request = new XMLHttpRequest();
request.open("POST","https://account.uipath.com/oauth/token",true);
request.setRequestHeader("Content-Type", "application/json");
request.setRequestHeader("X-UIPATH-TenantName", "DefaultTenant");
var post_data = JSON.stringify({
      'grant_type' : 'refresh_token',
      'client_id': '8DEv1AMNXczW3y4U15LL3jYf62jK93n5',
	  'refresh_token': '8bz8NlqPOfHo-PLUOob-L8ps8hbVsbbEIDCPl56MHtaQt'
  });
request.send(post_data);
request.onload = () =>{     
	 if (request.status == 200){
		 const obj = JSON.parse(request.responseText);
	     var access = obj.access_token;
//var obj2 = {"startInfo":{ "ReleaseKey":"YOUR PROCESS ReleaseKey", "Strategy":"All"}};
var obj2 = {"startInfo":{ "ReleaseKey":"151e5836-9ed5-455f-bede-e1db6e5e7e2f", "Strategy":"All","InputArguments": "{b}"}};

var request2 = new XMLHttpRequest();
request2.open("POST","https://cloud.uipath.com/aswatbicxtzp/DefaultTenant/odata/Jobs/UiPath.Server.Configuration.OData.StartJobs",true);
request2.setRequestHeader("Content-Type", "application/json");
request2.setRequestHeader("X-UIPATH-TenantName", "DefaultTenant");
request2.setRequestHeader("Authorization", "Bearer "+access);
var post_data2 = JSON.stringify(obj2);      
request2.send(post_data2);
request2.onload = () =>{     
	 if (request2.status == 200){
		 console.log(request2.responseText);
		 console.log("Command send successful");
	 }else{
	    console.log("Error"+request2.responseText);
	 }
}		 
	 }else{
	    console.log("Error");
	 }
}