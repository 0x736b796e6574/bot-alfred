var config = require('./index');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

module.exports.callSimsimiAPI = function (messge, requestCompelete) {
  var request = new XMLHttpRequest();
  var header = {"content-type": "application/json"}
  var url = "http://sandbox.api.simsimi.com/request.p?key="+config.simsimi_key+"&text="+messge+"&lc=vn"
  var encoded = encodeURI(url)

  request.open('GET', encoded, true);
  request.onreadystatechange  = function () {
      console.log(this);
     if(this.readyState === 4) {
        if (this.status == 200 ) {
          var data = JSON.parse(this.responseText);
          requestCompelete(data.response)
        }
      }
  }

  request.send(header);
}
