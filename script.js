let mylibrary = [];

class book{
    constructor(title){
        this.title=title
    }
}

function record(){
    let title=document.getElementById('booktitle').value;
    mylibrary.push(title);
    tag=document.createElement("p");
    var text = document.createTextNode(title);
    tag.appendChild(text);
    let element = document.getElementById("container");
    element.appendChild(tag);
}
