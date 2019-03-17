var pattern1=/^thagm/i;
var pattern2=/^thagmo/i;
var pattern3=/^cuslone/i;
var viewtext_base_url = "http://jira.nrifintech.com/browse/";
var newurl;
var currentTitle = window.document.title;

if (pattern1.test(currentTitle) || pattern2.test(currentTitle) || pattern3.test(currentTitle)) // if it matches pattern defined above
{
  newurl = viewtext_base_url + currentTitle.substring(0,currentTitle.indexOf(" "));
  chrome.extension.sendRequest({redirect: newurl}); // send message to redirect
}