var url = serverUrlBase + "/server/images/" + mapid + "/files/png";
var xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.responseType = "blob";
xhr.setRequestHeader("client_type", "DESKTOP_WEB");
xhr.setRequestHeader("desktop_web_access_key", _desktop_web_access_key);
xhr.send();
xhr.onload = function () {
  if (this.status == 200) {
    var blob = this.response;
    var img = document.createElement("img");
    img.onload = function (e) {
      window.URL.revokeObjectURL(img.src);
    };
    img.src = window.URL.createObjectURL(blob);
    $("#imgcontainer").html(img);
  }
}
