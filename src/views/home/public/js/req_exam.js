export function reqExam(url, data){
    //AJAX 체크
    httpRequest.onreadystatechange = function(){
        if(httpRequest.readyState == XMLHttpRequest.DONE && httpRequest.status == 200){
           console.log('Request Error!');
        }

    }

    var data = {"name": data};
    data = JSON.stringify(data);
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('POST', url);
    httpRequest.setRequestHeader('Content-type', "application/json");
    httpRequest.send(data)

    httpRequest.addEventListener('load', function(){
        return httpRequest.responseText;
    });

    
}