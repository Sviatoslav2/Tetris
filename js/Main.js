import { printFig } from './functions.js';
import { clearFig } from './functions.js';
import { staticFig } from './functions.js';
import { isStutic } from './functions.js';
import { IsGameOver } from './functions.js';
import {get_figur} from './Value.js';
import {Button} from './Value.js';



let MainArr = get_figur();
let tetris = document.createElement('div');
tetris.classList.add("tetris");
let main = document.getElementsByClassName("main-body")[0];






let width = 500;
let height = 900;
let cel=50;
let rotate = 1;
let currentFigure = 0;

function initial_field(width, height, cel, tetris){
    for(let i=0; i < width/cel * height/cel; i++){
        let excel = document.createElement('div');
        excel.classList.add('excel');
        tetris.appendChild(excel);
    }
    return tetris;
}

function get_cord_exel(excels, width, height, cel){
    let i =0;
    for(let y=height/cel; y>0; y--){
        for(let x=1;x<width/cel+1;x++){
            excels[i].setAttribute("X",x);
            excels[i].setAttribute("Y",y);
            i++;
        }
    }
    return excels;
}




function RowStatic(numRows, NumCol, marks){
    let count;

    for(let i =1; i < numRows-3; i++){
        count = 0;
        for(let j =1; j < NumCol+1; j++){
            if(document.querySelector(`[X = "${j}"][Y = "${i}"]`).classList.contains('set')){
                count++;
            }
            if(count === 10){
                marks++;
                for(let m=1; m < NumCol+1; m++){
                    document.querySelector(`[X = "${m}"][Y = "${i}"]`).classList.remove('set')
                }
                let set = document.querySelectorAll(".set");
                let newSet = [];
                for(let s=0; s < set.length; s++){
                    let setCord = [set[s].getAttribute("X"),set[s].getAttribute("Y")];
                    if(setCord[1]>i){
                        set[s].classList.remove('set');
                        newSet.push(document.querySelector(`[X = "${setCord[0]}"][Y = "${setCord[1]-1}"]`));
                    }
                }
                for(let a = 0; a < newSet.length; a++){
                    newSet[a].classList.add('set');
                }
                i--;
            }
        }

    }
    return marks;
}



function create(MainArr,x, y){
    rotate = 1;
    function get_random() {
        return Math.round(Math.random() * (MainArr.length-1));
    }

    currentFigure = get_random();
    let figBody = [document.querySelector(`[X = "${x}"][Y = "${y}"]`),
        document.querySelector(`[X = "${x + MainArr[currentFigure][0][0]}"][Y = "${y + MainArr[currentFigure][0][1]}"]`),
        document.querySelector(`[X = "${x + MainArr[currentFigure][1][0]}"][Y = "${y + MainArr[currentFigure][1][1]}"]`),
        document.querySelector(`[X = "${x + MainArr[currentFigure][2][0]}"][Y = "${y + MainArr[currentFigure][2][1]}"]`)];

    //printFig(figBody);
    return figBody;
}


function move(figBody,marks){
    let moveFlag = true;
    let cordinate =[[ figBody[0].getAttribute("X"), figBody[0].getAttribute("Y")],
        [ figBody[1].getAttribute("X"), figBody[1].getAttribute("Y")],
        [ figBody[2].getAttribute("X"), figBody[2].getAttribute("Y")],
        [ figBody[3].getAttribute("X"), figBody[3].getAttribute("Y")]];
    for(let i =0; i < cordinate.length; i++){
        if(cordinate[i][1] == 1 || document.querySelector(`[X = "${cordinate[i][0]}"][Y = "${cordinate[i][1] -1}"]`).classList.contains("set")){
            moveFlag = false;
            break;
        }
    }
    if(moveFlag){
        clearFig(figBody);
        figBody = [ document.querySelector(`[X = "${cordinate[0][0]}"][Y = "${cordinate[0][1] -1}"]`),
            document.querySelector(`[X = "${cordinate[1][0]}"][Y = "${cordinate[1][1] -1}"]`),
            document.querySelector(`[X = "${cordinate[2][0]}"][Y = "${cordinate[2][1] -1}"]`),
            document.querySelector(`[X = "${cordinate[3][0]}"][Y = "${cordinate[3][1] -1}"]`)];
        printFig(figBody);
    }
    else{
        clearFig(figBody);
        staticFig(figBody);


        RowStatic(height/cel,width/cel);
        isGameOvwe = IsGameOver(height/cel,width/cel);
    }
    return figBody;
}


let fild = initial_field(500, 900, 50, tetris);
main.appendChild(fild);
let excels = document.getElementsByClassName('excel');
get_cord_exel(excels, width, height, cel);


let flag = true;
window.addEventListener('keydown', function (e) {
    let cordinate1 = [figBody[0].getAttribute("X"),figBody[0].getAttribute("Y")];
    let cordinate2 = [figBody[1].getAttribute("X"),figBody[1].getAttribute("Y")];
    let cordinate3 = [figBody[2].getAttribute("X"),figBody[2].getAttribute("Y")];
    let cordinate4 = [figBody[3].getAttribute("X"),figBody[3].getAttribute("Y")];
    function getNewState(a) {
        flag = true;
        let NewFigure = [document.querySelector(`[X = "${+cordinate1[0] + a}"][Y = "${cordinate1[1]}"]`),
            document.querySelector(`[X = "${+cordinate2[0] + a}"][Y = "${cordinate2[1]}"]`),
            document.querySelector(`[X = "${+cordinate3[0] + a}"][Y = "${cordinate3[1]}"]`),
            document.querySelector(`[X = "${+cordinate4[0] + a}"][Y = "${cordinate4[1]}"]`),];
        for(let i =0; i<NewFigure.length; i++){
            if(!NewFigure[i] || NewFigure[i].classList.contains('set')){
                flag = false;
            }
        }
        if(flag){
            clearFig(figBody);
            figBody = NewFigure;
            printFig(figBody);
        }

    }
    if(e.keyCode === 37){
        getNewState(-1);
    } else if(e.keyCode === 39){
        getNewState(1);
    }
    else if (e.keyCode === 40){
        move(figBody);
        move(figBody);
        move(figBody);
    }
    else if(e.keyCode ==38){
        flag = true;

        //MainArr[currentFigure] cordinate1

        let figureNew = [
            document.querySelector(`[posX = "${+cordinate1[0] + MainArr[currentFigure][rotate + 2][0][0]}"][posY = "${
            +coordinates1[1] + mainArr[currentFigure][rotate + 2][0][1]}"]`),
            document.querySelector(`[posX = "${+cordinate2[0] + MainArr[currentFigure][rotate + 2][1][0]}"][posY = "${
            +coordinates2[1] + mainArr[currentFigure][rotate + 2][1][1]}"]`),
            document.querySelector(`[posX = "${+cordinate3[0] + MainArr[currentFigure][rotate + 2][2][0]}"][posY = "${
            +coordinates3[1] + mainArr[currentFigure][rotate + 2][2][1]}"]`),
            document.querySelector(`[posX = "${+cordinate4[0] + MainArr[currentFigure][rotate + 2][3][0]}"][posY = "${
            +coordinates4[1] + mainArr[currentFigure][rotate + 2][3][1]}"]`),
        ];

        for (let i=0; i<figureNew.length; i++) {
            if (!figureNew[i] || figureNew[i].classList.contains('set')) {
                flag = false;
                window.alert(flag);
                window.alert(figureNew.length);
            }
        }

        if (flag) {
            clearFig(figBody);
            window.alert("!!!!!!!!!!1");
            figBody = figureNew;

            printFig(figBody);

            if (rotate < 4) {
                rotate++;
            } else {
                rotate = 1;
            }
    }
    }
});


let marks = 0;

let isGameOvwe = false;
let input = document.getElementsByTagName('set');
input.value = `Score: ${marks}`;


let figBody = create(MainArr,5, 15);
let interval = setInterval(()=>{
    if(isStutic(figBody)){
        figBody = create(MainArr,5, 15);
    }

    else{
        figBody= move(figBody,marks);
    }
}, 300);