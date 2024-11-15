import k from "../kaplayCTX";

export default function gameOver(){
    k.scene("gameover", () => {
        k.add([
            k.text("Game Over", {font: "mania", size: 32}),
            k.pos(k.center().x, k.center().y - 200),
            k.anchor("center"),
        ]);
    });

}