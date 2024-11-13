import k from "../kaplayCTX";
import { makeSonic } from "../entities/sonic";
import { createMotobug } from "../entities/motobug";



export default function game() {
    k.setGravity(3100);

    const bgPieceWidth = 1920;
    const bgPieces = [
        k.add([k.sprite("chemical-bg"), k.pos(0, 0), k.opacity(0.8), k.scale(2)]), 
        k.add([k.sprite("chemical-bg"), k.pos(bgPieceWidth, 0), k.opacity(0.8), k.scale(2)]), 
     ];

    const platformWidth = 1280;
    const platforms = [
        k.add([k.sprite("platforms"), k.pos(0, 450), k.scale(4)]),
        k.add([k.sprite("platforms"), k.pos(platformWidth *4, 450), k.scale(4)]),
    ];

   const sonic = makeSonic(k.vec2(200, 745))
   //Call the method to jump
   sonic.setJumpSonic();
   sonic.setEventsSonic();
   sonic.onCollide("enemy", (enemy) => {
    if(!sonic.isGrounded()) {
        k.play("destroy", {volume: 0.5});
        k.play("hyper-ring", {volume: 0.5});
        k.destroy(enemy);
        sonic.play("jump");
        sonic.jump();
        return;
    }

    k.play("hurt", {volume: 0.3});
    k.go("gameover");

   });

    let gameSpeed = 300;
    k.loop(1, () => {
        gameSpeed += 50;
    });

    // call the motobug(enemy)
    const spawnMotobug = () => {
        const motoBug = createMotobug(k.vec2(1950, 773));
        motoBug.onUpdate(() => {
            if(gameSpeed < 3000) {
                motoBug.move(-(gameSpeed + 300), 0);
                return;
            }
            motoBug.move(-gameSpeed, 0);

        });

        motoBug.onExitScreen(() => {
            if(motoBug.pos.x < 0) k.destroy(motoBug);
        });

        const timeWait = k.rand(0.5, 2.5);
        k.wait(timeWait, spawnMotobug); //rekurdif function for infinite spwan enemy

    };
    spawnMotobug();

    k.add([
        k.opacity(0),
        k.rect(1920, 300),
        k.area(),
        k.pos(0, 832),
        k.body({isStatic: true}),
    ]);

    k.onUpdate(() => {
        if (bgPieces[1].pos.x < 0) {
            bgPieces[0].moveTo(bgPieces[1].pos.x + bgPieceWidth * 2, 0);
            bgPieces.push(bgPieces.shift());
        }

        bgPieces[0].move(-100, 0)
        bgPieces[1].moveTo(bgPieces[0].pos.x + bgPieceWidth * 2, 0);

         // for jump effect
         bgPieces[0].moveTo(bgPieces[0].pos.x, -sonic.pos.y / 10 - 50);
         
         if (platforms[1].pos.x < 0) {
             platforms[0].moveTo(platforms[1].pos.x + platformWidth * 4, 450);
             platforms.push(platforms.shift());
            }
            platforms[0].move(-gameSpeed, 0),
            bgPieces[1].moveTo(bgPieces[1].pos.x, -sonic.pos.y / 10 - 50);
        platforms[1].moveTo(platforms[0].pos.x + platformWidth * 4, 450);

    });

}