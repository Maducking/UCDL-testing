// import {reqExam} from './req_exam.js';
function cntStart(flagValue) {
    var flag = flagValue;
    // const pbtQuiz = "http://localhost:3000/pbt";
    if (flag == "stop") {   // 테스트 시작
        flag = "run";
        var chk_start = confirm("시작 하시겠습니까?");

        //테스트문제요청
        var xhr = new XMLHttpRequest;
        xhr.onreadystatechange = function(){
            console.log("xhr.status :" + xhr.status);
            if(xhr.readyState === 4 && xhr.status === 200){
                var responseData = xhr.responseText;
                document.getElementById("view_Box").value = responseData;
                // console.log("response Data:" + responseData);
                }
            }
        xhr.open('GET', "http://localhost:3000/pbt", true);        
        xhr.send();

        var start_stop_Btn = document.getElementById('start_stop_Btn').innerText = "시작중";
        var start_stop_Btn = document.getElementById('start_stop_Btn').defaultValue = flag;
        // console.log(flag);

        // https://sawol-today.tistory.com/396
        const MAX_MIN = 1;      //분 설정
        const MAX_SEC = 30;     //초 설정(60초)
        var timer = MAX_MIN * MAX_SEC;  //300초
        var start_stop_Btn = document.getElementById('start_stop_Btn');
        var input_box = document.getElementById('input_Box');
        input_box.readOnly = false;
        

        setInterval(() => {
            if (timer <= 0){    //테스트 끝났을때
                
                start_stop_Btn.innerText = "종료";
                input_box.readOnly = true;
                return 0;
            }
            //테스트 진행중
            --timer;
            let _min = Math.floor(timer / 60);  //몫을 계산
            let _sec = Math.floor(timer % 60);   //나머지 계산
            
            document.getElementById("cnt_min").innerHTML = _min + "분 " + _sec + "초";
            console.log(timer);
        }, 1000);

    }else if (flag == "run"){
        return 0;
    }
}
