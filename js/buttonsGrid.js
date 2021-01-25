var Case0 = [[1,2,3,4,5,6,7,8,9],[4,1,2,7,5,3,8,9,6],[7,4,1,8,5,2,9,6,3],[8,7,4,9,5,1,6,3,2],[9,8,7,6,5,4,3,2,1],[6,9,8,3,5,7,2,1,4],[3,6,9,2,5,8,1,4,7],[2,3,6,1,5,9,4,7,8]]
var number = 1

for(var e in Case0[0]){
    var j = "btn" +(parseInt(e)+1)
    document.getElementById(j).innerText = Case0[0][e]
    
}



function Case(){
    for(var e in Case0[number]){
        var j = "btn" +(parseInt(e)+1)
        document.getElementById(j).innerText = Case0[number][e]
        
    }
    number +=1
    if(number==8){
        number = 0
    }

    
}