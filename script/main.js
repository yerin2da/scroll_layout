//main.js

$(document).ready(function(){
    //next_btn을 클릭하면 top3가 상단으로 애니메이션 되면서 올라오게 한다.
$('.next_btn').click(function(e){
    e.preventDefault();//a태그 새로고침 막는 방법1
    $('html, body').animate({scrollTop:$('#top3').offset().top-70},500, 'easeOutQuint');
    //top3의 오프셋 탑값이 -70이 될때까지,,,
    //탑0으로 가면 헤더랑 겹치니까 헤더높이를 뺀만큼만 올라감
    //return false;//a태그 새로고침 막는 방법2
});

//이벤트 무력화방법
//a 태그의 #때문에 클릭시 새로고침되는 현상이 발생되는데
//이런 경우는 함수의 마지막에 return false를 넣어주는 방법과
//e(이벤트 객체)를 사용하여 e.preventDefault();를 작성해주는 방법이 있다.









//  4)이벤트 배너 구현
    const e_banner = $('.e_banner > ul');//움직이는 이미지 박스 목록에게 변수 선언
    const c_btn = $('.e_banner .ctrl_btn span');//콘트롤 버튼 누르면 바뀌는 거여서 변수 선언
    let i = $('.e_banner .ctrl_btn span').index();//span태그 1~4까지의 인덱스 번호
    console.log(i);//1번사진의 인덱스 번호:0//0,1,2,3

    let e_w = $('.e_banner').width();//1200//이미지 크기 구하기!!


    function moveLeft(){
        let mv= -(e_w * i);//마지막 전에 쓴 것
        console.log(i);//-0, -1200, -2400, -3600

        e_banner.animate({'left': mv},500,easeOutQuart);//맨 마지막에 쓴 것


        //맞추기위해서 그대로 넣어줌
        c_btn.removeClass('act1');//컨트롤 버튼 서식 모두 제거하고
        $('.ctrl_btn span').eq(i).addClass('act1');//해당하는 컨트롤 버튼 서식에만 적용
        
        

        
        //시간함수 만들기 위해서2
        if(i==3){
            i=0;
        }else{
            i++;
        }
    }

   



    //0. 인덱스 값 구한이유: 1x1200, 2x1200,,,(e_w * i)
    //1. 콘트롤 버튼을 클릭하면 해당이미지가 나오게하기
    c_btn.click(function(){//컨트롤 버튼 클릭시
        i = $(this).index();//해당인덱스 값을 변수에 담아서
        //moveLeft(i);//함수로 넘겨준다

        //시간제거하기 1
        clearInterval(Timer);//클릭시 자동으로 움직이는 것을 막는다.

        c_btn.removeClass('act1');
        $(this).addClass('act1');


        //맞추기위해서 그대로 넣어줌
        let mv= -(e_w * i);//마지막 전에 쓴 것
        console.log(mv);//-0, -1200, -2400, -3600
        e_banner.animate({'left': mv},500);//맨 마지막에 쓴 것
    });



    //2. 자동으로 움직이게 시간객체를 사용
        // 시간함수 만들기1
        //let Timer = senInterval(moveLeft,3000);//버튼을 클릭했을 때만 인덱스 값이 바뀌기 때문에 아직은 자동으로 움직이지 않음
        let Timer = setInterval(moveLeft, 3000);


    
    //3. 컨트롤 버튼에 (클릭시 시간을 제거하여 멈추게하고) 마우스 리브시 다시 시간을 재생하여 움직이게 한다.
    c_btn.mouseleave(function(){
        clearInterval(Timer);
        Timer = setInterval(moveLeft,3000);
    });

    //1. 이벤트 배너 자바스크립트
    let img_num = Math.floor(Math.random()*5+1);
    // document.getElementById('banner1').src="./images/banner0"+img_num+".jpg"

    //2. 이벤트 배너 제이쿼리
    $('#banner1').attr('src','./images/banner0'+img_num+'.jpg');

});
