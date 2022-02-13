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
        window.location.href = 'main.html';
    }
}
function kochen_send()
{
    if(document.getElementById("name").value != "")
    {
        localStorage.setItem("kochen", "f");
        notification()
        window.location.href = 'main.html';
    }
}
function notification()
{
    window.open('mailto:maxi.engl@outlook.de?subject=&body=body');
}