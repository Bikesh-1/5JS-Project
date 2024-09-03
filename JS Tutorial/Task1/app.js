var istatus = document.querySelector("h5")

var btn = document.querySelector("#add")

var check = 0

btn.addEventListener("click",function(){
    if(check == 0){
        istatus.innerHTML="Friend"
        istatus.style.color = "green"
        btn.innerHTML="Remove Friend"
        btn.style.color="red"
        btn.style.backgroundColor="#dadada"
        check = 1
    }else{
        istatus.innerHTML="Stranger"
        istatus.style.color = "red"
        btn.innerHTML="Add Friend"
        btn.style.color="white"
        btn.style.backgroundColor="cadetblue"
        check = 0
        

    }
    

})

