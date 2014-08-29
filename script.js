
    document.getElementById('getAppartaments').addEventListener('click', function(){
        var http = new XMLHttpRequest();
        http.open('GET', "configuration.json", true);
        http.onreadystatechange = function(){
            var json;
            if(http.readyState == 4){
                json = JSON.parse(this.responseText);
                console.log(json);
            };
        };
         http.send(null);
    })