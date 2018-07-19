var a=$('#center>div')
let x=a.length
//点击事件及点击的对象所添加的属性
for (i=0;i<a.length;i++){
    $(a[i]).on('click',function(e){
        let index=$(e.currentTarget).index()
        let sibling=$(a[index]).parent().children()
            for (i=0;i<sibling.length;i++){
                $(a[i]).css({                              
                    background:'linear-gradient(to bottom,#F9F9F9 0%,#ececec 100%)'                    
                })  
            }            
        $(a[index]).css({
            background:'linear-gradient(to bottom,#E0E0E0 0%,#AEAEAE 100%)'
        })
        $('#imgs').css({
            transform:'translateX('+(-800)*index+'px)'  
        })
        n=index
    })
}
var n=0
$(a[0]).css({
    background:'linear-gradient(to bottom,#E0E0E0 0%,#AEAEAE 100%)'
})
//闹钟函数
function time(){
    return setInterval (()=>{
        n=n+1
        a.eq(n%x).trigger('click')        
        },2000)
}
let kill=time()
//移除和添加闹钟，添加需要一个中间变量，如上一行
$('.window').on('mouseenter',function(){
    window.clearInterval(kill)
    console.log('进去')
})
$('.window').on('mouseleave',function(){
    kill=time()
        console.log('出来')
})