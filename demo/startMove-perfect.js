function getStyle(obj, attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj, false)[attr];
    }
}
function startMove(obj, json, fun){
    clearInterval(obj.timer);
    obj.timer = setInterval(function (){
        for(let attr in json){
            let iCurr = 0;
            let bStop = true;
            if(attr == 'opacity'){
                iCurr = parseInt(parseFloat(getStyle(obj, attr))*100);
            }else{
                iCurr = parseInt(getStyle(obj, attr));
            }
            let iSpeed = (json[attr] - iCurr)/8;
            iSpeed = iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed)
            if(iCurr!=json[attr]){
                bStop = false;
            }
            if(attr == 'opacity'){
                obj.style.opacity = (iCurr + iSpeed)/100;
            }else{
                obj.style[attr] = iCurr + iSpeed +'px';
            }
        }
        if(bStop){
            clearInterval(obj.timer)
            if(fun){
                fun();
            }
        }
    },30)
}