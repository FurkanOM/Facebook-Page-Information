function getFacebookPageInfo(nameOrId, callback){

	var https = require("https");
	var options = {
		host: "graph.facebook.com",
		path: "/" + encodeURIComponent(nameOrId),
		method: "GET"
	};

	var request = https.request(options, function(response){
		var holder = "";
		response.on("data", function(massData){
			holder = massData;
		});

		response.on("end", function(){
			var result = JSON.parse(holder);
			if(result.error || !result.about){
				callback(false);
			}else{
				callback(result);
			}
		});

	});

	request.end();

}

module.exports.getFacebookPageInfo = getFacebookPageInfo;
