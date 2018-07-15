require("../css/index.less");
require("jquery");
console.log(123);
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
getData(createList);
function createList(data){
    var dataList=data.list,
        len=dataList.length;
    console.log(dataList);
    var str='';
    for(i=0;i<len;i++){
        dataList[i].spectList.sort(function(a,b){
            return a.price-b.price;
        })
        str+=`<a href='../src/goodsinfo.html?id=${dataList[i].id}'>
                <div>
                    <img src="${dataList[i].imgurl[0]}" alt="">
                    <p class="one">${dataList[i].name}</p>
                    <p class="two">￥${dataList[i].spectList[0].price}
                    -￥${dataList[i].spectList[dataList[i].spectList.length-1].price}</p>
                </div>
            </a>`;
    }
    $('.content').html(str);
}


