
export function printFig(figBody){
    for(let i=0; i < figBody.length; i++){
        figBody[i].classList.add('figure');
    }
}

export function clearFig(figBody){
    for(let i=0; i < figBody.length; i++){
        figBody[i].classList.remove('figure');
    }
}

export function staticFig(figBody){
    for(let i=0; i < figBody.length; i++){
        figBody[i].classList.add('set');
    }
}

export function isStutic(figBody){
    for(let i=0; i < figBody.length; i++){
        if(figBody[i].classList.contains('set')){
            return true;
        }
    }
    return false;
}

export function IsGameOver(numRows, NumCol) {
    //window.alert("IsGameOver");
    for(let n=1; n< NumCol+1; n++){
        if(document.querySelector(`[X = "${n}"][Y = "${numRows-4}"]`).classList.contains('set')){
            window.alert("Game Over");
            break;
            return true;
        }
    }
    return false;
}