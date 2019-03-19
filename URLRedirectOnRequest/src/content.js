var patterns=["thagm","thagmo","cuslone"];
var viewtext_base_url = "http://jira.nrifintech.com/browse/";
var newurl;
var currentTitle = window.document.title.toLowerCase();

if(currentTitle.endsWith("google search")) {
	patterns.forEach(function(currentPattern) {
		if (currentTitle.startsWith(currentPattern)) // if it matches pattern defined above
		{  
			newurl = viewtext_base_url + currentTitle.substring(0,currentTitle.indexOf(" "));
			chrome.extension.sendRequest({redirect: newurl}); // send message to redirect
		}
	});
}