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
});
