var size_i_want = 11;
var run=0;

function addToCart()
{
	var sizesList=document.getElementsByClassName("size-type");
	function setSizeValue()
	{
		for (var i=0; i<sizesList.length; i++)
		{
			if(sizesList[i].outerText == ("US " + size_i_want))
			{
				sizesList[i].click();
			}
		}
	}
	if(sizesList != undefined)
	{
	    setSizeValue();
	    setTimeout("goToCart()",250);
	}

	else
	{
	    setTimeout("addToCart()", 250);
	}
}//end of function

function goToCart()
{
	if (document.getElementById("add-to-cart").className == "active")
	{
		document.querySelectorAll("span.active")[0].click();
		setTimeout("checkout()",250);
	}

	else if (document.getElementById("add-to-cart").className == "inactive")
	{
		setTimeout("goToCart()", 250);
	}
}//end of function

function checkout()
{
	document.getElementsByClassName("modal-button to-cart")[0].click();
}//end of function

function disable()
{
	run=0;
	alert("hi");
}

function enable()
{
	run=1;
	alert("hi");
}

if (run==1)
	setTimeout("addToCart()", 250);
