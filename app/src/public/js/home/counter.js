'use strict';
// import {reqExam} from './req_exam.js';
function cntStart(flag) {
    let flag_status = flag;
    const processing_btn = document.getElementById('process_btn');
    const send_btn = document.getElementById('send_answer');
    
    // const pbtQuiz = "http://localhost:3000/pbt";
    if (flag_status === "ready") {   // 테스트 시작
        console.log("플래그 값: "+ flag);
        flag_status = "running";
        
        // var chk_start = confirm("시작 하시겠습니까?");
        confirm("시작 하시겠습니까?");
        // five_cnt();
        //테스트문제 요청
        let xhr = new XMLHttpRequest;
        xhr.onreadystatechange = function(){
            console.log("xhr.status :" + xhr.status);
            if(xhr.readyState === 4 && xhr.status === 200){
                var responseData = xhr.responseText;
                document.getElementById("view_Box").value = responseData;
                }
            }
            
        // xhr.open('GET', "http://localhost:8080/pbt", true);
        //로컬 시험문제        
        xhr.open('GET', "https://test-korkb.herokuapp.com/pbt", true);        
        xhr.send();

        processing_btn.innerText = "진행";
        // processing_btn.value = 'running';
        processing_btn.setAttribute('value', flag_status);
        processing_btn.setAttribute('disabled', true);
        console.log("이후 플래그: " + processing_btn.value);

        // console.log(flag);

        // https://sawol-today.tistory.com/396
        const MAX_MIN = 1;      //분 설정
        const MAX_SEC = 15;     //초 설정(60초)
        let timer = MAX_MIN * MAX_SEC;  //300초
        // var running_btn = document.getElementById('running_btn');
        const input_box = document.getElementById('input_Box');
        input_box.readOnly = false;
        

        let time_cnt = setInterval(() => {
            if (timer <= 1){    //테스트 끝났을때
                
                processing_btn.innerText = "종료";
                processing_btn.setAttribute('disabled', true);
                send_btn.removeAttribute('disabled');
                input_box.readOnly = true;
                console.log('여기' + timer);
                clearInterval(time_cnt);
                // return 0;
            }
            //테스트 진행중
            --timer;
            let _min = Math.floor(timer / 60);  //몫을 계산
            let _sec = Math.floor(timer % 60);   //나머지 계산
            
            document.getElementById("cnt_min").innerHTML = _min + "분 " + _sec + "초";
            console.log(timer);
        }, 1000);
        // time_cnt()

    }else if (flag === "running"){
        return 0;
    }
}

function five_cnt(){
    setInterval(() => {
        let five = 5;

        alert("`five`초 후에 시작합니다.")
        
    }, 1000);
}



        // 교체버튼
function swap_box(flag){
    const swapBtn = document.getElementById('swapBtn');
    const left = document.getElementById('left_frame');
    const right = document.getElementById('right_frame');

    const view= document.getElementById('view_Box');
    const input = document.getElementById('input_Box');

    //복제 하고 삭제한다
    var view_tmp = view.cloneNode();
    view.remove();
    var input_tmp = input.cloneNode();
    input.remove();

    //복제한것을 붙여넣기
    if(flag==="1"){
        left.appendChild(input_tmp);
        right.appendChild(view_tmp);
        swapBtn.setAttribute('value', '2')
        
    }else{
        left.appendChild(view_tmp);
        right.appendChild(input_tmp);
        swapBtn.setAttribute('value', '1')
    }
}

        //글자세팅
const plus = document.getElementById('font_size_plus');
const reset = document.getElementById('font_size_reset');
const minus= document.getElementById('font_size_minus');
const bold = document.getElementById('font_bold');

plus.addEventListener('click', ()=>{
    // document.getElementById('view_Box').style.fontSize = '1.125em'; //14pt
    document.getElementById('view_Box').style.fontSize = '10pt';
    document.getElementById('input_Box').style.fontSize = '10pt';
});

// reset.addEventListener('click', ()=>{
//     document.getElementById('view_Box').style.fontSize = '11pt';
// });

minus.addEventListener('click', ()=>{
    document.getElementById('view_Box').style.fontSize = '12pt';
    document.getElementById('input_Box').style.fontSize = '12pt';
});

bold.addEventListener('click', ()=>{
    const bold_btn=document.getElementById('font_bold');
    const view_Box=document.getElementById('view_Box');
    const input_Box=document.getElementById('input_Box');
    let flag = bold_btn.value;
    if(flag === 'unbold'){
        bold_btn.setAttribute('value', 'bold');
        view_Box.style.fontWeight = 'bold';
        input_Box.style.fontWeight = 'bold';
        
    }else{
        bold_btn.setAttribute('value', 'unbold');
        view_Box.style.fontWeight = '';
        input_Box.style.fontWeight = 'bold';
    }


});



