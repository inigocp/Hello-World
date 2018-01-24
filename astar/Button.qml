import QtQuick 2.2

Item{
    id: root

    property alias text: label.text
    property alias color: rectan.color
    signal clicked

    width: 116; height: 26
    Rectangle{
        id:rectan
        anchors.fill: parent
        color:'linen'
        border.color: Qt.darker(color)
    }
    Text{
        id:label
        text:'Click'
        anchors.centerIn: parent
        font.family:'Ubuntu'
    }
    MouseArea {
           anchors.fill: parent
           onClicked: {
               root.clicked()
           }
       }






}
