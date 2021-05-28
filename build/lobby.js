function play(){
    const NAME = document.getElementById("nameInput");
    if(!NAME.value){
        alert('please enter a name');
        return
    }
    
    localStorage.setItem("name", NAME.value);
    location.href = './game.html'
}