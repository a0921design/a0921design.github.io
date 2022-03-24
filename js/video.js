var defaultQueryList = {
	sp: matchMedia("(max-width: 599px)"),
	pc: matchMedia("(min-width: 600px)")
}

function v_breakpoint(sourceList) {
	for(var i = 0, l = sourceList.length; i < l; i++){
		var source = sourceList[i];

		if(!(source.dataset.query && defaultQueryList[source.dataset.query] && source.dataset.src)) continue;
		if(!(defaultQueryList[source.dataset.query].matches)) continue;

		var newSource = document.createElement("source");
		newSource.src = source.dataset.src;

		source.parentElement.appendChild(newSource);
	}
}

(function (){
	var elemList = document.getElementsByClassName("v_breakpoint");

	for(var i = 0, l = elemList.length; i < l; i++){
		var sourceList = elemList[i].getElementsByTagName("source");

		v_breakpoint(sourceList);
	}

})();