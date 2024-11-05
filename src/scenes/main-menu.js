import k from "../kaplayCTX";

export default function mainMenu(){
    if (!k.getData("best-score")) k.setData("base-score", 0); 
    k.onButtonPress("jump", () => k.go("game"));

    const bgPieceWidth = 1920;
    const bgPiece = [
        k.add([k.sprite("chemical-bg"), k.pos(0, 0), k.opacity(0.8), k.scale(2)]), 
        k.add([k.sprite("chemical-bg"), k.pos(bgPieceWidth * 2, 0), k.opacity(0.8), k.scale(2)]), 
     ];

    const platformWidth = 1280;
    const platforms = [
        k.add([k.sprite("platforms"), k.pos(0, 450), k.scale(4)]),
        k.add([k.sprite("platforms"), k.pos(platformWidth *4, 450), k.scale(4)]),
    ];

    k.onUpdate(() => {
        if (bgPiece[1].pos.x < 0) {
            bgPiece[0].moveTo(bgPiece[1].pos.x + bgPieceWidth * 2, 0);
            bgPiece.push(bgPiece.shift());
        }

        bgPiece[0].move(-100, 0)
        bgPiece[1].moveTo(bgPiece[0].pos.x + bgPieceWidth * 2, 0);
    });




        
}