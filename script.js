
document.getElementById("button").addEventListener('click',function(e){
	e.preventDefault();
	let name = document.getElementById("name").value;
    let year = document.getElementById("year").value;
    
	let  url = `https://localhost:8080/`;
	
	// let url = document.getElementById("url");
	if(name){
		url+=`?name=${name}`;
	}
	if(year){
		url+=`?year=${year}`;
	}
	if(year && name){
		url+=`?name=${name}&year=${year}`;
	}

	document.getElementById("url").innerHTML=url;
})