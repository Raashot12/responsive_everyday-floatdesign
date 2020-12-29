// function color(){
// 	let bgcolor = document.getElementsByTagName("body").style.backgroundColor;
// 	if ( bgcolor != "" && bgcolor !="white"){
// 		document.getElementsByTagName("body").style.backgroundColor = "blue";
// 	}else{
// 		document.getElementsByTagName("body").style.backgroundColor = "red"
// 	}
// }

let currentColor = document.querySelector('#thecurrent').style.background = "#1111111";

const onclick = ()=>{
	if ( currentColor == "#111"){
		currentColor = document.querySelector('#thecurrent').style.background ="#eee";
	}else{
		currentColor = document.querySelector("#thecurrent").style.background = "blue";
	}
}

document.getElementById("#thecurrent").innerHTML = onclick();