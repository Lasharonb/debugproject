function readyFunction(){
	var checkInt = setInterval(function()
		
	{ 
		var perc = parseFloat(document.getElementById('myProgressBar').getAttribute('aria-valuenow'));
		perc += (100+perc)/2;
		
		if (perc > 99.99) {
			clearInterval(checkInt);
			document.getElementById('theAlert').style.display = "inline";
			return ;
		}
		document.getElementById('myProgressBar').setAttribute('aria-valuenow','55');
		document.getElementById('myProgressBar').setAttribute('style.width','100%');
		document.getElementById('myProgressBar').style.width= perc+'% ';
	}, 750);
}