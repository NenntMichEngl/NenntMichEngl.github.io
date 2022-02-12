function load_home()
{
    if(document.getElementById("name").value == "lenx")
    {   
        window.location.href = 'main.html';
    }
    else
    {
        alert("Falsches Passwort")
    }
}