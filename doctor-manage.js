function test(){
    let one = document.getElementById("check");
    let two = document.getElementById("reveal");

    one.onclick = function(){
        window.alert("Your changes have been successfully saved");
    }
    two.onclick = function(){
        window.alert("You have deacivated the account");
    }
}