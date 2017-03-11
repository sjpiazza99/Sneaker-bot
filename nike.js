var size_i_want = "11";
var how_many = 1;

function addToCart() {
	var sizesList=document.getElementsByClassName("nsg-form--drop-down--option-container selectBox-options nsg-form--drop-down exp-pdp-size-dropdown exp-pdp-dropdown two-column-dropdown")[0];
	function setQuantity() {
		document.getElementsByName("qty")[0].selectedIndex = how_many-1;
	}
	function setSizeValue() {
		for (var i=0; i<sizesList.length; i++){
			if(sizesList.options[i].text == size_i_want) {
				document.getElementsByName("skuAndSize")[0].selectedIndex = i;
				setQuantity();
			}
		}
	}
	if(sizesList != undefined) {
	    setSizeValue();
	    document.getElementsByClassName("js-add-to-cart add-to-cart nsg-button nsg-grad--nike-orange")[0].click();
	} else {
	    setTimeout("addToCart()", 250);
	}
}
setTimeout("addToCart()", 250);
