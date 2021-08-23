

const Images = [
    {id:"ATS", src:"./Images/yacht.jpg"},
    {id:"IEEE", src:"./Images/island.jpg"},
    {id:"ACM", src:"./Images/supercars.jpg"},
    {id:"ABC", src:"./Images/yacht.jpg"},
    {id:"DEF", src:"./Images/island.jpg"},
    {id:"LMN", src:"./Images/supercars.jpg"}
]

const Names=[
    {name:"ATS", fullname:"Aerospace Technical Society", desc:"ATS is the oldest technical society in pec founded in 1988."},
    {name:"IEEE",fullname:"Institute of Electronics and Electrical Engineers" , desc:"This society is a home to all the budding electrical and electronics engineers and have yielded some strong results in the past which have made us very proud."},
    {name:"ACM",fullname:"Some coding society dk the name" ,desc:"This relatively new society is getting very famous in the computer science enthusiasts and they are rising some of the finest computer engineers out there."},
    {name:"ABC",fullname:"Aerospace Technical Society", desc:"ATS is the oldest technical society in pec founded in 1988."},
    {name:"DEF",fullname:"Institute of Electronics and Electrical Engineers" ,desc:"This society is a home to all the budding electrical and electronics engineers and have yielded some strong results in the past which have made us very proud."},
    {name:"LMN", fullname:"Some coding society dk the name", desc:"This relatively new society is getting very famous in the computer science enthusiasts and they are rising some of the finest computer engineers out there."}];
    

function MouseOver(name){
    console.log(name);
    var image=document.getElementById("image-id");
    Images.forEach(element => {
        if(element.id===name){
            image.src=element.src;
        }
    });
}

function check(){
    console.log("hi");
    var div=document.createElement("div");
    div.classList.add("div-style")
    for(i=0;i<6;i++){
        var divi=document.createElement("div");
        divi.classList.add("button-divi");
        var button=document.createElement("button");
        button.innerHTML=Names[i].name;
        button.setAttribute("id",Names[i].name)
        button.classList.add("btn");
        button.classList.add("btn-primary")
        button.classList.add("my-button");
        divi.appendChild(button);
        div.appendChild(divi);
    }
    var buttondiv=document.getElementById("button-cont");
    buttondiv.appendChild(div);
    document.querySelectorAll(".my-button").forEach(item=>{
        var imge=document.getElementById("image-id");
        item.addEventListener("mouseover", event=>{
            Images.forEach(image=>{
                if(item.id === image.id){
                    imge.src=image.src;
                }
            })
        })
    })
}

window.onload=check;

