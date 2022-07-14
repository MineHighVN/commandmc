function searchUser(){
	var search = document.getElementById("search").value.replace('/','')
	var a = document.getElementsByClassName("incontent")
	a1 = []
	for(var i = 0; i < document.getElementsByClassName("incontent").length;i++){
		if(a[i].innerText.toLowerCase().includes(search.toLowerCase()) == false){
			a[i].style.display = "none"
		}else{
			a[i].style.display = ""
		}
	}
}