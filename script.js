
document.getElementById("button").addEventListener('click',function(){
	let name = document.getElementById("name").value;
    let year = document.getElementById("year").value;
// https://localhost:8080/
	let url = document.getElementById("url");
	if(name){
		url.innerHTML+=`?name=${name}`;
	}
	if(year){
		url.innerHTML+=`?year=${year}`;
	}
	if(year && name){
		url.innerHTML+=`?name=${name}&year=${year}`;
	}
})