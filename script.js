function instantiate(d)
{
    var template = document.getElementById("template");

    for(let i = 0; i < Object.keys(d).length; i++)
    {
      var c = template.cloneNode(true);
      c.getElementsByClassName("emoji")[0].innerHTML = d[i][0];
      c.getElementsByClassName("head")[0].innerHTML = d[i][1];
      c.getElementsByClassName("info")[0].innerHTML = d[i][2];
      if(d[i][3] == true)
      {
        c.getElementsByClassName("modal-btn")[0].onclick = function () {
            load_select(d[i][1]);
          };
      }

      if(d[i][3] == false)
      {
        c.getElementsByClassName("modal-btn")[0].style.backgroundColor = "gray";
        c.getElementsByClassName("modal-btn")[0].innerHTML = "Schon Benutzt!";
      }
      else
      {
        c.getElementsByClassName("modal-btn")[0].style.backgroundColor = "#d9a90c";
      }
      document.getElementById("container").appendChild(c);
    }
    template.style.display = "none";
}
function load_select(d)
{
    localStorage.setItem("action", d);
    window.location.href = "action.html";;
}
function load_admin()
{
    window.location.href = "admin.html";
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