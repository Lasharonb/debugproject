function readyFunction(){

	var items = document.getElementsByClassName("list-group-item");
	for(var i = 0; i<items.length;i++)
	{
			items[i].addEventListener("click",function(event) {

			for(var j = 0; j<event.target.childNodes.length;j++)
			{
				if(event.target.childNodes[j].tagName=='SPAN')
				{
					var num = parseInt(event.target.childNodes[j].innerHTML,10);
					num--;
					if (num <= 0) {
						num = '';
					}
					if(event.target.childNodes[j].innerHTML!='') event.target.childNodes[j].innerHTML = num;	
				}
			}
		});
	}
}