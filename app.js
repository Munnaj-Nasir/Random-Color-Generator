function randomColorGen() {
    let numLet = "0123456789ABCDEF" ;
    let hash = "#" ;

    for (let index = 0; index < 6 ; index++) {
        hash += numLet [Math.floor(Math.random() * 16 )];
    }
    const el = document.querySelector('.Color-container') ;
    el.style.background = hash ;
    document.getElementById('hex').textContent = hash ;
}