


window.addEventListener("load", tabchangeHandler);

[...document.querySelectorAll('.account-block-title')].forEach((blockTitle) => {
    if(blockTitle.hash){
        blockTitle.addEventListener('click', (e) => {
            e.preventDefault();
            if(history.pushState) {
                history.pushState(null, null, blockTitle.hash);
            }
            else {
                location.hash = blockTitle.hash;
            }
            tabchangeHandler();
        });
    }
});

function tabchangeHandler() {
    if(typeof location.hash != "undefined" && location.hash){
        [...document.querySelectorAll('.account-block-title')].forEach((title) => {
            if(title.classList.contains('active')) title.classList.remove('active')
        });
        document.querySelector(`a[href="${location.hash}"]`).classList.add('active');
        document.querySelectorAll('.account-block-body').forEach((el) => {
            el.classList.remove('active');
        });
        document.querySelector(`${location.hash}`).classList.add('active');
    }
}
