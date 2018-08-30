$(document).ready(function()
{
 $("#loginform").css({"visibility":"hidden","display":"none"});
 $("#show_login").click(function(){
  showpopup();
 });
 $("#clse_buttn").click(function(){
  hidepopup();
 });
 $("#register").click(function(){
  hidepopup();
  regnow();
 });
 
});

function showpopup()
{
 $("#loginform").fadeIn();
 $("#loginform").css({"visibility":"visible","display":"block"});
}

function hidepopup()
{
 $("#loginform").fadeOut();
 $("#loginform").css({"visibility":"hidden","display":"none"});
}

function regnow()
{
 $("#sup").fadeIn();
 $("#sup").css({"visibility":"visible","display":"block"});
}
