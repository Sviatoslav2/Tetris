export function get_figur(){
    let mainArr=[[[0,1],[0,2],[0,3],[[-1,1],[0,0],[1,-1],[2,-2]],[[1,-1],[0,0],[-1,1],[-2,2]],[[-1,1],[0,0],[1,-1],[2,-2]],[[1,-1],[0,0],[-1,1],[-2,2]]],[[1,0],[0,1],[1,1],[[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0]],[[0,0],[0,0],[0,0],[0,0]]],[[1,0],[0,1],[0,2][[0,0],[-1,1],[1,0],[2,-1]],[[1,-1],[1,-1],[-1,0],[-1,0]],[[-1,0],[0,-1],[2,-2],[1,-1]],[[0,-1],[0,-1],[-2,0],[-2,0]]],[[1,0],[1,1],[1,2],[[0,0],[0,0],[1,-1],[-1,-1]],[[0,-1],[-1,0],[-2,1],[1,0]],[[2,0],[0,0],[1,-1],[1,-1]],[[-2,0],[1,-1],[0,0],[-1,1]]],[[1,0],[1,1],[2,1],[[2,-1],[0,0],[1,-1],[-1,0]],[[-2,0],[0,-1],[-1,0],[1,-1]],[[2,-1],[0,0],[1,-1],[-1,0]],[[-2,0],[0,-1],[-1,0],[1,-1]]],[[1,0],[-1,1],[0,1],[[0,-1],[-1,0],[2,-1],[1,0]],[[0,0],[1,-1],[-2,0],[-1,-1]],[[0,-1],[-1,0],[2,-1],[1,0]],[[0,0],[1,-1],[-2,0],[-1,-1]]],[[1,0],[2,0],[1,1],[[1,-1],[0,0],[0,0],[0,0]],[[0,0],[-1,0],[-1,0],[1,-1]],[[1,-1],[1,-1],[1,-1],[0,0]],[[-2,0],[0,-1],[0,-1],[-1,-1]]],];
    return mainArr;
}

export function Button() {
    let width = 0;
    window.addEventListener("mouseup", function(event){
        var but1 = document.getElementById("button1");
        var but2 = document.getElementById("button1");
        var but3 = document.getElementById("button1");

        if(event.target === but1){
            document.getElementsByClassName("main-body")[0].classList.add("butt1");
            document.getElementsByClassName("tetris")[0].classList.add("butt1");
            width = 500;
        }
        else if(event.target === but2){
            document.getElementsByClassName("main-body")[0].classList.add("butt2");
            document.getElementsByClassName("tetris")[0].classList.add("butt2");
            width = 700;
        }
        else if(event.target === but3){
            document.getElementsByClassName("main-body")[0].classList.add("butt3");
            document.getElementsByClassName("tetris")[0].classList.add("butt3");
            width = 900;
        }
    });
    return width;
}