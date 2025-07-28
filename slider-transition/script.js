let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');
let csDom = document.querySelector('.CS');
let listItemDom = document.querySelector('.CS .list');
let thumbnailDom = document.querySelector('.CS .thumbnail');

nextBtn.onclick = function() {
    showSlider('next');
}

prevBtn.onclick = function() {
    showSlider('prev');
}

let timeRunning = 500;
let timeAutoNext = 4000;
let runTimeOut;
let runAutoRun = setTimeout(()=>{
        nextBtn.click();
    }, timeAutoNext);

function showSlider(type){
    let itemSlider = document.querySelectorAll('.CS .list .item');
    let itemThumbnail = document.querySelectorAll('.CS .thumbnail .item');

    if(type === 'next') {
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        csDom.classList.add('next');
    }else{
        let positionLastItem = itemSlider.length -1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        csDom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
        csDom.classList.remove('next');
        csDom.classList.remove('prev');

    },timeRunning)

    clearTimeout(runAutoRun);
        runAutoRun = setTimeout(()=>{
        nextBtn.click();
    }, timeAutoNext);
}