function readyFunction(){

	var items = document.getElementsByClassName("list-group");
	for(var i = 0; i<items.length;i++)
	
	
		items[i].addEventListener("click",function(event)
		
		for (var j = 0; j<event.target.childNodes.length;j++);{
		
				if(event.target.childNodes.style.tagname=='SPAN')
				{
					var num = event.target.childNodes[j]==='SPAN'.innerHTML;
					num--;
					if (num <= 0) {
						num = '';
					}
					if(event.target.childNodes[j].innerHTML!='') event.target.childNodes[j].innerHTML = num;	
				}
				
			}
			}
		});
	}
}