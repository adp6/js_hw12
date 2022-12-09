window.onload = ()=>{
    function tryArg(arg){
        try {
            if(typeof arg != 'number'){
                throw new SyntaxError("argument is not a number")
            }
            else if(arg<10 || arg>100){
                throw new SyntaxError("argument must be from 10 to 100")
            }
            else{
                alert("argument is number")
            }
        }
        catch(err){
            alert(err)
        }
    }
    tryArg(50)
    let form = document.querySelector('form')
    let [...inputs] = form.elements
    let numberCheck = /\d{1,}/
    inputs[0].onchange = ()=>{
        if(!numberCheck.test(inputs[0].value)){
            inputs[0].classList.add('error')
        }
        else{
            inputs[0].classList.remove('error')
        }
        if(numberCheck.test(inputs[0].value) && numberCheck.test(inputs[1].value) == true){
            inputs[3].disabled=false
        }
        else{
            inputs[3].disabled=true
        }
    }
    inputs[1].onchange = ()=>{
        if(!numberCheck.test(inputs[1].value)){
            inputs[1].classList.add('error')
        }
        else{
            inputs[1].classList.remove('error')
        }
        if(numberCheck.test(inputs[0].value) && numberCheck.test(inputs[1].value) == true){
            inputs[3].disabled=false
        }
        else{
            inputs[3].disabled=true
        }
    }
    inputs[3].onclick = ()=>{
        if(document.querySelector('svg') != null){
            document.querySelector('svg').remove()
        }
        if(inputs[2].checked){
            createEllipse(inputs[0].value, inputs[1].value)
        }
        else{
            createRect(inputs[0].value, inputs[1].value)
        }
    }

    function createRect(width, heigth){
        let svg = document.createElementNS("http://www.w3.org/2000/svg",'svg');
        let rect = document.createElementNS("http://www.w3.org/2000/svg",'rect');
        svg.setAttribute('width',width+'px');
        svg.setAttribute('heigth',heigth+'px');
        rect.setAttribute('width', width);
        rect.setAttribute('height',heigth);
        rect.setAttribute('fill','#7902ff');
        rect.setAttribute('style', 'stroke-width:5; stroke:black')
        svg.appendChild(rect);
        document.body.appendChild(svg);
    }
    function createEllipse(width, heigth){
        let svg = document.createElementNS("http://www.w3.org/2000/svg",'svg');
        let ellipse = document.createElementNS("http://www.w3.org/2000/svg",'ellipse');
        svg.setAttribute('width',width*2+'px');
        svg.setAttribute('heigth',heigth*2+'px');
        ellipse.setAttribute('cx', '40%');
        ellipse.setAttribute('cy', '50%');
        ellipse.setAttribute('rx',width/2.5)
        ellipse.setAttribute('ry',heigth/2.5)
        ellipse.setAttribute('fill','#7902ff');
        ellipse.setAttribute('style', 'stroke-width:5; stroke:black')
        svg.appendChild(ellipse);
        document.body.appendChild(svg);
    }
}