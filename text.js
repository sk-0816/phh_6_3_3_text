/*document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('result_text').textContent =
        '<a href="http://www.wings.msn.to/">WINGSプロジェクト</a>';
        document.getElementById('result_html').innerHTML =
        '<a href="http://www.wings.msn.to/">WINGSプロジェクト</a>';
},false);*/
document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('btn').addEventListener('click',function(){
        let name = document.getElementById('name');
        let result = document.getElementById('result');
//      result.innerHTML = 'こんにちは、'+ name.value + 'さん!'; ←プログラムを打ち込まれるとそれを実装してしまう。
        result.textContent = 'こんにちは、'+ name.value + 'さん!'; 
    },false);
},false);