var size_i_want = 0;//small =0 xlarge=3
var run=0;
var name="GBE";
var email="Gang";
var telephone="150";
var address="150 Rock Block";
var zip="5500";
var city="Chiraq";

function addToCart()
{
	var item= document.getElementsByClassName("button")[3];

	if(item != undefined)
	{
	    item.click();
	    setTimeout("goToCart()",250);
	}

	else
	{
	    setTimeout("addToCart()", 250);
	}
}//end of function

function goToCart()
{
	var cart=document.getElementsByClassName("button")[0];
  if(cart != undefined)
	{
	    cart.click();
	    setTimeout("checkout()",250);
	}

	else
	{
	    setTimeout("goToCart()", 250);
	}

}//end of function

function checkout()
{
	var check=document.getElementsByClassName("button checkout")[0].click();
	if(check != undefined)
	{
	    check.click();
	    setTimeout("info()",250);
	}

	else
	{
	    setTimeout("checkout()", 250);
	}
}//end of function

function info()
{
	if (document.getElementById("order_billing_name")!=undefined)
	{
		document.getElementById("order_billing_name").value=name;
		document.getElementById("order_email").value=email;
		document.getElementById("order_tel").value=telephone;
		document.getElementById("bo").value=address;
		document.getElementById("order_billing_zip").value=zip;
		document.getElementById("order_billing_city").value=city;
	}

	else
	{
		setTimeout("info()",250);
	}
}

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
run=1;
if (run==1)
	setTimeout("addToCart()", 250);
