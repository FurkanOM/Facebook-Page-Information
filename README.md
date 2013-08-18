Facebook-Page-Information
=========================

You can get all the public information about the facebook page you want

## Example

```js
var facebookPage = require("facebook-page-information");

facebookPage.getInfo("9gag", function(data){
  console.log("About 9gag: " + data.about);
  //You can get data.id, data.likes, data.link, data.website etc. To learn more, https://developers.facebook.com/docs/reference/api/page/
});

```

## Installation

`npm install facebook-page-information`
