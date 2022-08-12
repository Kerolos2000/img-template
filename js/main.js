// تغير الصورة الرئيسية
function change(source){
    document.querySelector('.imgmain').src = source;
    localStorage.setItem("img", source);
}
document.querySelector('.imgmain').src = localStorage.getItem('img');
// علشان لو شيلته اول مرة افتح الموقع مش هيجيب اى صورة خالص
if(localStorage.getItem("img") == null){
    document.querySelector('.imgmain').src = "img/1.png";
}

// تغير لون الفوتر
function colorFooter(colorfooter){
    document.querySelector('#footer').style.backgroundColor = colorfooter;
    localStorage.setItem("colorFooter", colorfooter);
}
document.querySelector('#footer').style.backgroundColor = localStorage.getItem('colorFooter');

// تغير لون البادى
function colorBody (colorbody){
    document.querySelector('body').style.backgroundColor = colorbody;
    localStorage.setItem("colorBody",colorbody)
}
document.querySelector('body').style.backgroundColor = localStorage.getItem('colorBody');

// عمل زر الصعود للأعلى و حفظ اخر مكان وقفت عنده فى الصفحة
window.onscroll = function(){
    let toUp = document.querySelector('#toUp');
        if (window.scrollY > 100){
            toUp.style.display = 'block';
            toUp.addEventListener('click', function(){
                window.scrollTo(0,0);
            })
        }else{
            toUp.style.display = 'none';
        }
    sessionStorage.setItem("scrollY",window.scrollY);
};
window.scrollTo(0, sessionStorage.getItem('scrollY'));