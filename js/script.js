var loading = document.getElementById('loading');
var body = document.getElementById('body');
var section = document.getElementById('section')

setTimeout(function () {
    document.body.removeChild(loading);
    section.style.display = "block"
}, 2500);
///////////////////////////////////////////////////////////
const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item) =>
        item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) => item.addEventListener('click', activeLink))

/////////////////////////////////////////////////////////
const filled = document.querySelector('.filled');
var info = document.getElementById('info');

function update() {
    filled.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`;
    requestAnimationFrame(update);

    if(screen.availWidth <= 373){
        info.style.width= '100%';
    }
}
update();
//////////////////////////////////////////////////////////////////
var hide = document.getElementById('show-hide');
var pass = document.getElementById('pass');

hide.onclick = function () {
    if (hide.innerHTML === '<i class="fa-solid fa-eye"></i>') {
        pass.setAttribute('type', 'text');
        this.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    } else {
        pass.setAttribute('type', 'password');
        this.innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
}
/////////////////////////////////////////////////////////
var box_offline = document.getElementById('box-offline');
var title = document.querySelector('.title');
var reload = document.querySelector('.reload');


window.onload = function(){
    if(window.navigator.onLine){
        onLine()
    }else{
        offLine()
    }
}

window.addEventListener("online",function(){
    setTimeout(function () {
        document.body.removeChild(loading);
        section.style.display = "block"
    }, 2500);
    onLine()
});
window.addEventListener("offline",function(){
    offLine()
});

reload.onclick = function(){
    window.location.reload();
}


function onLine(){
    document.body.removeChild(box_offline);
    document.body.appendChild(loading);
    document.body.appendChild(section);
}

function offLine(){
    document.body.appendChild(box_offline);
    document.body.removeChild(loading);
    document.body.removeChild(section);
    title.innerHTML = ' انت مش فاتح نت';
    title.style.color = '#666';
}


