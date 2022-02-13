function load_home()
{
    if(document.getElementById("name").value == "lenx")
    {   
        localStorage.setItem("kino", "r");
        localStorage.setItem("kochen", "r");
        window.location.href = 'main.html';
    }
    else
    {
        alert("Falsches Passwort")
    }
}