console.log("Hello World!");

//OU const createChessBoard = function(n){...}
const createChessBoard = (n) => {
    let board = "", space = " ", hash = "#",aux;

    for(let i=0;i<n;i++){
        for(let j=0; j<n; j++){
            if(j%2 == 0){
                board += space;
            }
            else{
                board += hash;
            }
        }
        aux = space;
        space = hash;
        hash = aux;
        if(i < n-1){
            board += "\n";
        }
    }

    return board;
}

//var board = createChessBoard(15);
//console.log(board);


function power(b,n){
    if(n == 0){
        return 1;
    }
    else{
        return b * power(b,n-1);
    }
}

//console.log(power(2,3));

function min(i,j){
    if(i > j){
        return j;
    }
    else{
        return i;
    }
}

//console.log(min(0,-10));

function isEven(n){
    if(n<0) {n *= -1;}
 
    if(n == 1){
        return false;
    }
    else if(n == 0){
        return true;
    }
    else{
        return isEven(n-2);
    }
}

//console.log(isEven(-2));

function countChar(str,c){
    let count = 0;
    for(let i=0;i<str.length;i++){
        if(str[i] == c){
            count++;
        }
    }

    return count;
}

//console.log(countChar("kakkerlak", "k"))