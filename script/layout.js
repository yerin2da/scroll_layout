

$(document).ready(function(){


    //세로스크롤 값 구하기
    $(window).scroll(function(){
        let sPos = $(this).scrollTop();
        console.log(sPos);

        if(sPos>=900){
            $('header').addClass('act');//1. 배경색 변경
            //2. 로고변경
            $('header h1 img').attr('src','./images/logo-casper_black.png');

            //3. 메뉴색상 변경
            $('header .gnb > li>a, header i.fas').css('color','#333');

            //header에 마우스 아웃시 색상 어둡게
            $('header').mouseenter(function(){
                $('header').addClass('act');//1. 배경색 변경
                //2. 로고변경
                $('header h1 img').attr('src','./images/logo-casper_black.png');
    
                //3. 메뉴색상 변경
                $('header .gnb > li>a, header i.fas').css('color','#333');
            });
        }else{
            $('header').removeClass('act');//1. 배경 원래대로
            //2. 로고 원래대로
            $('header h1 img').attr('src','./images/logo-casper-white.png');

            //3. 메뉴색상, 알람아이콘 원래대로
            $('header .gnb > li>a, header i.fas').css('color','#fff');
        }
    });

    //화면 스크롤 내리지 않고 헤더에 마우스 오버시 색상 변경
    $('header').hover(function(){
        $('header').addClass('act');//1. 배경색 변경
        //2. 로고변경
        $('header h1 img').attr('src','./images/logo-casper_black.png');

        //3. 메뉴색상 변경
        $('header .gnb > li>a, header i.fas').css('color','#333');
    }, function(){
       
    });





    //내비게이션 글자 누르면 scrollTop값이 0px되게 하기
    //내비게이션 변수선언
    let gnb = $('.gnb li, #m_nav li');

    gnb.click(function(){
        let i = $(this).index()+2;//+2를 주는 이유: 0,1번 섹션은 내비게이션에 포함되지 않기때문에
        console.log(i);//0,1,2,3,4,...

        $('html, body').animate({scrollTop:$('main section').eq(i).offset().top-70},400,'easeOutCubic');
    //main section의 인덱스번호를 찾아서
    // -70인 이유: 헤더랑 겹치지 않기위해서
    //오프셋 탑 -70이 될때까지 올라가라
        return false;
    });

    //모달창 띄우기
     //1. 모달 변수 생성하기
     const modal = `
     <div class="modal">
         <div class="inner">
             <a href="#" title""><img src="./images/main_Popup_PC_450x600.jpg" alt=""></a>
             <p>
                 <input type="checkbox" id="ch">
                 <label for="ch">오늘 하루 열지 않음</label>
                 <input type="button" value="닫기" id="c_btn">
             </p>
         </div>
     </div>
     `;

     //모달변수를 body의 맨 뒤쪽에 출력한다
     $('body').append(modal);



     //쿠키 생성하기
     let ch = $('.modal #ch');//체크박스 변수

     //1. 현재 브라우저에 쿠키 정보가 있는지, 없는지 유무를 판단하여 모달이 나오지 않게 함
     if($.cookie('popup')=='none'){//쿠키의 이름을 popup으로 정함
         $('.modal').hide();
     }

     //2. 쿠키의 존재 유무를 체크하여 쿠키를 생성하거나 모달윈도우 숨기기
     function closeModal(){
         if(ch.is(':checked')){//만약 사용자가 체크박스에 체크를 하면

             //쿠키를 생성해야함
             $.cookie('popup','none', {expires:1, path:'/'});//expires:1==1일

         }
      
         
             //체크박스에 체크 안 한 경우 그냥 모달 숨기기
         $('.modal').hide();
        
         }
         //닫기 버튼을 클릭하면 closeModal 함수를 실행하여 쿠키를 생성하고 모달을 숨긴다
         $('.modal #c_btn').click(function(){
             closeModal();
         });
         

});