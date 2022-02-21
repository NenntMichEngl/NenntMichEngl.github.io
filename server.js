webSocket = new WebSocket('ws://45.93.249.80:8111');
  webSocket.onopen = function (e) {
  };
  webSocket.onmessage = function (event) {
    if(document.URL.includes("main.html")){
      const d = JSON.parse(event.data);
      var template = document.getElementById("template");
      instantiate(d);
    }

  }
function kochen()
{
    if(document.getElementById("name").value != "")
    {
        localStorage.setItem("film", "f");
        webSocket.send("fkochen");
        window.location.href = 'main.html';
    }
}
function make_date(n, d)
{
  var x = [n,d];
  webSocket.send(x);
  window.location.href = 'main.html';
}
function create()
{
  var e = document.getElementById("emoji").value;
  var h = document.getElementById("head").value;
  var i = document.getElementById("info").value;
  var x = ["Create",e,h,i];
  webSocket.send(x);
  window.location.href = 'main.html';
}