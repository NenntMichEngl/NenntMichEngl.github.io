function test()
{
    window.location.href = 'date.html';
}
function kino_send()
{
    if(document.getElementById("name").value != "")
    {
        notification()
        localStorage.setItem("kino", "f");
        notification("Lena will am " + document.getElementById("name").value + "  mit dir ins Kino gehen")
        window.location.href = 'main.html';
    }
}
function film_send()
{
    if(document.getElementById("name").value != "")
    {
        localStorage.setItem("film", "f");
        notification("Lena will am " + document.getElementById("name").value + "  mit dir einen Film Marathon machen")
        window.location.href = 'main.html';
    }
}
function kochen_send()
{
    if(document.getElementById("name").value != "")
    {
        localStorage.setItem("kochen", "f");
        notification("Lena will am " + document.getElementById("name").value + "  mit dir kochen")
        window.location.href = 'main.html';
    }
}
function notification(message)
{
    var s = "mailto:maxi.engl@outlook.de?subject="+message+"&body="+message;
    window.open(s);
}