function hide()
{
    if(localStorage.getItem("kino") == "f")
    {
        document.getElementById("kino_btn").innerHTML = "Schon benutzt!";
        document.getElementById("kino_btn").style.backgroundColor = "gray";
    }
    if(localStorage.getItem("kochen") == "f")
    {
        document.getElementById("kochen_btn").innerHTML = "Schon benutzt!";
        document.getElementById("kochen_btn").style.backgroundColor = "gray";
    }
    if(localStorage.getItem("film") == "f")
    {
        document.getElementById("film_btn").innerHTML = "Schon benutzt!";
        document.getElementById("film_btn").style.backgroundColor = "gray";
    }
}

function test(t)
{
    if(t == "kochen" && localStorage.getItem("kochen") != "f")
    {
        window.location.href = 'kochen.html';
    }

    if(t == "kino" && localStorage.getItem("kino") != "f")
    {
        window.location.href = 'kino.html';
    }
    if(t == "film" && localStorage.getItem("film") != "f")
    {
        window.location.href = 'film.html';
    }
    
}