//之前安装这个插件时报错了，是因为下面的字符串前后都多了一个空格
var uglifyjs=require('uglifyjs-webpack-plugin');
var webpack=require('webpack');
//自动加载jquery,之前使用jquery报错，是因为，没有下载jquery
//npm install jquery --save-dev
var providePlugin = new webpack.ProvidePlugin({
                    $: 'jquery',
                    jQuery: 'jquery',
                    'window.jQuery': 'jquery'
                    });

const path=require('path');
module.exports={
    entry:{
        index:'./src/js/index.js',
        goodsinfo:'./src/js/goodsinfo.js'
    },
    
    output:{
        path:path.resolve(__dirname,'out'),
        filename:'[name].bundle.js',
        publicPath:'http://localhost:8080/out'   
    },
    module:{
        rules:[
            {test:/.less$/,use:['style-loader','css-loader','less-loader']},
            // {test:/.css$/,use:['style-loader','css-loader','less-loader']},
            {test:/.jpg$/,use:['url-loader?limit=10&name=./[name].[ext]']},
            {test:/.js$/,use:['babel-loader']},
        ]
    },
    //插件
    plugins:[
        new uglifyjs(),
        providePlugin
        // new webpack.HotModuleReplacementPlugin()

    ],

    mode:'development',  
}