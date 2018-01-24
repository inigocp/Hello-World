import QtQuick 2.2
import QtQuick.Window 2.2
import QtQuick.Layouts 1.1

import "astar.js" as Js
Window {
    width: rowss.width
    height: botonsito1.y + botonsito1.height
    visible: true
    Column{
        id:rowss
        anchors.top: parent.top
        spacing:0
        Repeater{
            id:jss
            model:Js.fil
            delegate: Row{
                spacing:0
                id:columss
                property int columnsIndex:index
                Repeater{
                    id:jsss
                    model:Js.col
                    delegate: Rectangle{
                        id:rus
                        height: 5
                        width: 5
                        property int cuadroIndex:index
                        MouseArea{
                            acceptedButtons: Qt.LeftButton | Qt.RightButton
                            anchors.fill:parent
                            onClicked:{
                                if(mouse.button == Qt.LeftButton){
                                    Js.defineStart(rus, columss);
                                    Js.startol();
                                    Js.displayW(rowss);
                                }
                               else if(mouse.button == Qt.RightButton){
//                                    Js.defineEnd(rus, columss);
                                    Js.turnWall(rus,columss)
                                    Js.displayW(rowss);
                                }
                            }
                            onWheel: {
                                //if(mouse.button == Qt.RightButton){
                                    Js.turnWall(rus,columss)
                                    Js.displayW(rowss);
                                //}
                            }
                        }
                     }
                }
            }
        }


}
    Button{
        id:botonsito1
        anchors.top:rowss.bottom
        text: " Generate Walls "
        MouseArea {
            anchors.fill: parent
            onClicked: {

                Js.generateWalls();
                Js.displayW(rowss);
        }
    }

    }
    Button{
        onClicked: {
            timeadorsito.running = !timeadorsito.running
            estatus.text = "Started"

        }
        anchors.top:rowss.bottom
        anchors.left: botonsito1.right
        text: "Start!"
        id: estart
    }

    Timer{
        onTriggered:{
            Js.astarnoloop();
            counterr.c += 1

           // Js.displayW(rowss);


        }
        running:false
        id:timeadorsito
        repeat:true
        interval:1

    }
    Button{
        id: estatus
        text: "Not Started"
        anchors.top:rowss.bottom
        anchors.left: estart.right
    }
    Button{
        property int c
        c:0
        id: counterr
        text: c
        anchors.top:rowss.bottom
        anchors.left: estatus.right
    }

}
