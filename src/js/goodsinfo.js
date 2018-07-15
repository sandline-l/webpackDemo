require("../css/goodsinfo.less");
require("jquery");
require('./goodsCover.js');

//获取点击商品的id值
function getId(){
    var list=location.search.slice(1).split(';'),
        id;
    list.forEach(function(ele,index){
        if(ele.indexOf('id')!==-1){
            id=ele.slice(3);
        }
    })
    return id;
}
var idNum=getId();
console.log(idNum);
//获取Ajax数据
function getData(cb){
    $.ajax({
        type:'get',
        url:'../api/goodsList.json',
        success:function(data){
            cb(data);
        },
        error:function(){
            console.log('error')
        }
    })
}
getData(createGoodsinfo);
//动态创建页面的内容
var dataList;
function createGoodsinfo(data){
    dataList=data.list;
    var str='',
        sizeStr='',
        len=dataList.length;
    console.log(dataList);
    idNum=idNum-1;
    console.log(dataList[idNum]);
    $('.img_one').html(`<img src="${dataList[idNum].imgurl[0]}" alt="">`);
    $('.goodsName').html(dataList[idNum].name);
    $('.price').html(`￥${dataList[idNum].spectList[0].price}
                    -￥${dataList[idNum].spectList[dataList[idNum].spectList.length-1].price}`);
    $('.two').html(dataList[idNum].name);
    //添加货物图片
    dataList[idNum].imgurl.forEach(function(ele,index){
        str+=`<img src="${ele}" alt="">`;
    })
    $('.goods').append(str); 
    //添加单价
    $('.price_two_num').html(dataList[idNum].spectList[0].price);
    //添加规格
    dataList[idNum].spectList.forEach(function(ele,index){
        sizeStr+=`<li class="size_num_li" data_price='${ele.price}'">${ele.spect}</li>`;
    })
    $('.size_num li').addClass('active');
    $('.size ul').append(sizeStr);
}
function bind(){
    $('.choice').on('click',function(){
        console.log('111');
        $('.wrap_two').css('display',"block");
        $('html').add($('body')).css({height:'100%',overflow:'hidden'});
    })
    //点击背景，隐藏弹出框
    $('.bg').on('click',function(){
        $('.wrap_two').css('display',"none");
        $('html').add($('body')).css({height:'auto',overflow:'visible'});
    })
}
bind();



