// socket.emit("churan");

// socket.on("churan papdi",function(){
//     console.log("churan papdi recieved");
// })

const socket=io();
const chess=new Chess();
const boardElement=document.querySelector(".chessboard");
let draggedPiece=null;
let sourceSquare=null;
let playerRole=null;

const renderBoard=()=>{
    const board=chess.board();
    boardElement.innerHTML="";
    board.forEach((row,rowindex)=>{
        row.forEach((square,squareindex)=>{
            const squareElement=document.createElement("div");
            squareElement.classList.add(
                "square",
                (rowindex+squareindex)%2===0? "light":"dark"
            );
            squareElement.dataset.row=rowindex;
            squareElement.dataset.col=squareindex;
            if(square){
                const pieceELement=document.createElement("div");
                pieceELement.classList.add("piece",square.color==="w" ? "white" : "black");
                pieceELement.innerText=getPieceUnicode(square);
                pieceELement.draggable=playerRole===square.color;

                pieceELement.addEventListener("dragstart",(e)=>{
                    if(pieceELement.draggable){
                        draggedPiece=pieceELement;
                        sourceSquare={row:rowindex , col:squareindex};
                        e.dataTransfer.setData("text/plain","");
                    }
                });
                pieceELement.addEventListener("dragged",(e)=>{
                    draggedPiece=null;
                    sourceSquare=null;
                });
                squareElement.appendChild(pieceELement);

            }
            squareElement.addEventListener("dragover",function(e){
                e.preventDefault();
            });
            squareElement.addEventListener("drop",function(e){
                e.preventDefault();
                if(draggedPiece){
                    const targetSource={
                        row:parseInt(squareElement.dataset.row),
                        col:parseInt(squareElement.dataset.col),
                    };
                    handleMove(sourceSquare,targetSource);
                }
            });
            boardElement.appendChild(squareElement);
        });
    });

    if(playerRole==='b'){
        boardElement.classList.add("flipped");
    }
    else{
        boardElement.classList.remove("flipped");
    }
    

};

const handleMove=(source,target)=>{
    const move={
        from: `${String.fromCharCode(97+source.col)}${8- source.row}`,
        to: `${String.fromCharCode(97+target.col)}${8- target.row}`,
        promotion: 'q',

    };
    socket.emit("move",move);


};

const getPieceUnicode=(piece)=>{
    const unicodePieces={
        p: "♙",
        r: "♖",
        n: "♘",
        b: "♗",
        q: "♕",
        k: "♔",
        P: "♟",
        R: "♜",
        N: "♞",
        B: "♝",
        Q: "♛",
        K: "♚",
    };
    return unicodePieces[piece.type] || "";
    
};
socket.on("playerRole",function(role){
    playerRole=role;
    renderBoard();
});

socket.on("spectatorRole",function(){
    playerRole=null;
    renderBoard();
});

socket.on("boardstate",function(fen){
    chess.load(fen);
    renderBoard();
});

socket.on("move",function(move){
    chess.move(move);
    renderBoard();
});

renderBoard();



