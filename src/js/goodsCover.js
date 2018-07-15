require("../css/goodsCover.less");
require("jquery");
var status={
    lock:false,
}
function init(){
    bindEvent();
}
init();
function bindEvent(){
    //选择规格，并根据规格计算单价
    $('.size_num').on('click','.size_num_li',function(e){
        // console.log(e.target);
        // console.log(this);
        $('.active').removeClass('active');
        $(this).addClass('active');
        index=$(this).attr('index');      
        $('.price_two_num').html($(this).attr('data_price'));
        status.lock=true;
    })
    //绑定加减号的事件
    $('.sub').on('click',function(){
        var val=+$('.num_two').html();
        if(val<=1){
            $('.num_two').html('1');
        }else{
            val--;
            $('.num_two').html(val+'');
        }
    })
    $('.plus').on('click',function(){
        var val=+$('.num_two').html();
        val++;
        $('.num_two').html(val+'');
    })
    //点击确认
    $('.sure').on('click',function(){
        if(status.lock==true){
            alert('提交成功');
            // window.open('http://localhost:8080/src/index.html');
            window.location='http://localhost:8080/src/index.html';
            // window.history.back(-1);
        }else{
            alert('请选择商品');
        }
    })
}
