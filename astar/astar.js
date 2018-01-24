/*

    Necesito leer todo y checarlo, siento que hay algo que no esta bien
    s
    Update 11/23/2017
    Funciona de alguna manera que no comprendo para este caso en particular. al menos mejor qu ela vez pasada

*/
function Cell(i, j){
    this.x= i;
    this.y= j;
    this.g = 0;
    this.h = (heuristic(i,j,col-1,fil-1));
    this.f =this.g+this.h;
    this.isWall = false;
    this.isEnd = false;
    this.isStart = false;
    this.cameFrom = 0;
    this.isPath = false;
    this.isInOpenlist = false;
    this.isInClosedlist = false;
    this.neighboors =  function(){
        var u = this.y;
        var v = this.x;
        var g = this.g;
        var wall =this.isWall
            if(wall !== true){               
                trabajo[u][v].isInClosedlist = true;
                openlist.splice(indexIn(trabajo[u][v],openlist),1 );
                if((v-1) >= 0 && !trabajo[u][v-1].isInClosedlist && !trabajo[u][v-1].isInOpenlist && !trabajo[u][v-1].isWall){
                   trabajo[u][v-1].g =g+1;
                   trabajo[u][v-1].isInOpenlist=true;
                   trabajo[u][v-1].cameFrom = trabajo[u][v];
                   openlist.push(trabajo[u][v-1]);
                }
                if((v+1)<= (fil-1)&& !trabajo[u][v+1].isInClosedlist && !trabajo[u][v+1].isInOpenlist && !trabajo[u][v+1].isWall){
                    trabajo[u][v+1].g =g+1;
                    trabajo[u][v+1].isInOpenlist=true;

                    trabajo[u][v+1].cameFrom = trabajo[u][v];
                    openlist.push(trabajo[u][v+1]);
                }
                if((u+1)<= (col-1)&& !trabajo[u+1][v].isInClosedlist && !trabajo[u+1][v].isInOpenlist &&!trabajo[u+1][v].isWall){
                    trabajo[u+1][v].g =g+1;

                    trabajo[u+1][v].isInOpenlist=true;
                    trabajo[u+1][v].cameFrom = trabajo[u][v];
                    openlist.push(trabajo[u+1][v]);
                }
                if( (u-1)>= 0 && !trabajo[u-1][v].isInClosedlist && !trabajo[u-1][v].isInOpenlist && !trabajo[u-1][v].isWall){
                        trabajo[u-1][v].g =g+1;
                        trabajo[u-1][v].isInOpenlist=true;
                        trabajo[u-1][v].cameFrom = trabajo[u][v];
                        openlist.push(trabajo[u-1][v]);
                    }


                //vecinos diag

//                if( (v-1) >= 0 &&(u-1)>= 0 && !trabajo[u-1][v-1].isInClosedlist && !trabajo[u-1][v-1].isInOpenlist && !trabajo[u-1][v-1].isWall){
//                        trabajo[u-1][v-1].g =g+1.4;
//                        trabajo[u-1][v-1].isInOpenlist=true;
//                        trabajo[u-1][v-1].cameFrom = trabajo[u][v];
//                        openlist.push(trabajo[u-1][v-1]);
//                    }
//                if( (v+1)<= (fil-1)&&(u-1)>= 0 && !trabajo[u-1][v+1].isInClosedlist && !trabajo[u-1][v+1].isInOpenlist && !trabajo[u-1][v+1].isWall){
//                        trabajo[u-1][v+1].g =g+1.4;
//                        trabajo[u-1][v+1].isInOpenlist=true;
//                        trabajo[u-1][v+1].cameFrom = trabajo[u][v];
//                        openlist.push(trabajo[u-1][v+1]);
//                    }
//                if((v-1) >= 0 &&(u+1)<= (col-1)&& !trabajo[u+1][v-1].isInClosedlist && !trabajo[u+1][v-1].isInOpenlist &&!trabajo[u+1][v-1].isWall){
//                    trabajo[u+1][v-1].g =g+1.4;

//                    trabajo[u+1][v-1].isInOpenlist=true;
//                    trabajo[u+1][v-1].cameFrom = trabajo[u][v];
//                    openlist.push(trabajo[u+1][v-1]);
//                }
//                if((v+1)<= (fil-1)&&(u+1)<= (col-1)&& !trabajo[u+1][v+1].isInClosedlist && !trabajo[u+1][v+1].isInOpenlist &&!trabajo[u+1][v+1].isWall){
//                    trabajo[u+1][v+1].g =g+1.4;

//                    trabajo[u+1][v+1].isInOpenlist=true;
//                    trabajo[u+1][v+1].cameFrom = trabajo[u][v];
//                    openlist.push(trabajo[u+1][v+1]);
//                }

         }
   }
}
var startX=0;
var startY=0;
var col = 100;
var fil = 100;
var trabajo = new Array(col);
var openlist = new Array;
for (var i =0; i<col; i++){
    trabajo[i]=new Array(fil); 
    for(var j = 0; j< fil; j++){
        trabajo[i][j]= new Cell(j,i)     
    }
}
function defineStart(rus,columss){
    startX = columss.columnsIndex;
    startY = rus.cuadroIndex;
    trabajo[startX][startY].isStart=true;
}
function turnWall(rus,columss){
    trabajo[columss.columnsIndex][rus.cuadroIndex].isWall = true

}
trabajo[fil-1][col-1].isEnd = true;
function generateWalls(){
    for(var i = 0; i<col; i++){
        for(var j = 0; j<fil; j++){
            if(Math.random()< 0.3 && trabajo[i][j].isEnd == false && trabajo[i][j].isStart == false){
                trabajo[i][j].isWall = true;
            }
        }
    }

}
function startol(){
    openlist.push(trabajo[startX][startY]);
    trabajo[startX][startY].isInOpenlist = true;
    return console.log("Started");
}
function astarnoloop(){
    var chosen =0;
    for(var i =0; i<openlist.length; i++){
        if(openlist[i].f < openlist[chosen].f  ){
            chosen = i;
            if(openlist[chosen].isEnd){
                generatepath(openlist[chosen]);
                timeadorsito.running= !timeadorsito.running;
                return estatus.text = "Solved";
            }
            openlist[chosen].neighboors();
            if(openlist.length == 0){
                estatus.text = "No solution"
                timeadorsito.running= !timeadorsito.running;
                return console.error("No Solution")
            }
        }
        else if(openlist[i].f == openlist[chosen].f && openlist[i].g < openlist[chosen].g+Math.random()){
            chosen = i;
            if(openlist[chosen].isEnd){
                generatepath(openlist[chosen]);
                timeadorsito.running= !timeadorsito.running;
                return estatus.text = "Solved";
            }
            openlist[chosen].neighboors();
            if(openlist.length == 0){
                estatus.text = "No solution"
                timeadorsito.running= !timeadorsito.running;
                return console.error("No Solution")
            }
        }
        else if(openlist[chosen].isStart){
            openlist[chosen].neighboors();
        }
    }
}
function generatepath(object){
    if( !object.cameFrom.isStart ){
        object.cameFrom.isPath = true;
        generatepath(object.cameFrom);
    }
        else{
        displayW(rowss);
        return console.log("Done");
    }
}

function displayW(rowss){
    for(var i =0; i<fil; i++){
        for(var j =0; j<col;j++){
            if(trabajo[i][j].isPath){
                rowss.children[i].children[j].color = 'blue'
            }
            if(trabajo[i][j].isStart){
                rowss.children[i].children[j].color = 'blue'
            }
//            if(trabajo[i][j].isInOpenlist && !trabajo[i][j].isPath && !trabajo[i][j].isStart){
//                rowss.children[i].children[j].color = 'light green'
//            }
//            if (trabajo[i][j].isInClosedlist && !trabajo[i][j].isPath && !trabajo[i][j].isStart){
//                rowss.children[i].children[j].color = 'red'
//            }
            if(trabajo[i][j].isEnd){
                rowss.children[i].children[j].color = 'black'
            }
            if(trabajo[i][j].isWall){
                rowss.children[i].children[j].color = 'gold'
            }
        }
    }
}
function heuristic(x,y,a,b){


    //return ((Math.abs(x-a)+Math.abs(y-b)));
    return Math.sqrt(Math.pow((x-a),2)+Math.pow((y-b),2))

}
function indexIn(object, place){
        for(var i=0;i<place.length;i++){
            if(place[i]===object){
                return i;
            }
        }
}


