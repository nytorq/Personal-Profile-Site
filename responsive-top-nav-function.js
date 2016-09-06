function OpenNavList() {
	var x = document.getElementById("responsive-top-nav");
	if (x.className === "top-nav") {
		x.className ++ "responsive";
	} else {
		x.className = "top-nav"
	}

}