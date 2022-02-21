function start()
{
    if(localStorage.getItem("login") != "true")
    {
        window.location.href = 'index.html';
    }
    document.getElementById("btn").innerHTML = "Termin '" + localStorage.getItem("action") + "' ausmachen";

}
function date()
{
    make_date(localStorage.getItem("action"), document.getElementById("name").value);
}
