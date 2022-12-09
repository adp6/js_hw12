window.onload = ()=>{
    let dataExpire = new Date(Date.now()+10000)
    document.cookie = `${encodeURIComponent('key1')}=${encodeURIComponent('is valid')}; expires = ${dataExpire}`
    function checkCookie(){
        return `Cookie is valid: ${new Date < dataExpire}`
    }
    let btn = document.querySelector('.Cookie')
    btn.onclick = ()=>{
        alert(checkCookie());
    }
    
    function drawCircle(){
        let canvas = document.querySelector('canvas');
        let context = canvas.getContext('2d');
        canvas.setAttribute('width','300');
        canvas.setAttribute('height','300');
        context.arc(150,150,100,0,180);
        context.fillStyle = '#333';
        context.fill()
        context.font = '20px Arial';
        context.strokeStyle = 'white';
        context.strokeText('hello world', 100,160)
    }
    drawCircle()
}