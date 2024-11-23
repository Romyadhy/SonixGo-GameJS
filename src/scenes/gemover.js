import k from "../kaplayCTX";

export default function gameover(citySfx){
    citySfx.paused = true;

    k.add([
        k.text("GAME OVER", { font: "mania", size: 96 }),
        k.anchor("center"),
        k.pos(k.center().x, k.center().y - 300),
      ]);

      k.wait(1, () => {
        k.add([
          k.text("Press Space/Click/Touch to Play Again", {
            font: "mania",
            size: 64,
          }),
          k.anchor("center"),
          k.pos(k.center().x, k.center().y + 350),
        ]);
        k.onButtonPress("jump", () => k.go("game"));
      });

}