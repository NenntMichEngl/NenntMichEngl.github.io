function start()
{
    if(localStorage.getItem("login") == "true")
    {
        window.location.href = 'main.html';
    }
}

function load_home()
{
    if(document.getElementById("name").value == "lenx")
    {   
        localStorage.setItem("login", "true");
        window.location.href = 'main.html';
    }
    else if(document.getElementById("name").value == "anphi")
    {
        localStorage.setItem("login", "true");
        localStorage.setItem("admin", "true");
        window.location.href = 'main.html';
    }
    else
    {
        alert("Falsches Passwort")
    }
}