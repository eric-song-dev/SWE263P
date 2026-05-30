function runReport(url)
{
	var re = /(^|\s)((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/gi;
	newurl=url.match(re);
	if(newurl) {
        document.location = "/report#/" + newurl;
	}
	else {
		alert("Please enter a valid URL");
		document.getElementById("input_url").focus();
		document.getElementById("input_url").select();
	}
	return false;
}

document.addEventListener('DOMContentLoaded', function() {

	document.getElementById("button_wave").onclick = function(e) {
		e.preventDefault();
		runReport(document.getElementById("input_url").value);
	};
	
	document.getElementById("waveform").onsubmit = function(e) {
		e.preventDefault();
		runReport(document.getElementById("input_url").value);
	};
	
	// Preload submit button
	var submitImg=document.createElement("img");
	submitImg.setAttribute("src","/img/web/submit_on.svg");	
})