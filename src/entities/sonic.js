import k from "../kaplayCTX";

export function makeSonic(pos){
    let doubleJump = false;

    const sonic = k.add([
        k.sprite("sonic", {anim: "run"}),
        k.scale(4),
        k.area(),
        k.anchor("center"),
        k.pos(pos),
        k.body({jumpForce: 1500}),
        
        {
            ringCollectUI: null,
            setJumpSonic(){
                k.onButtonPress("jump", () => {
                    if (this.isGrounded()) {
                        this.play("jump");  //playing animation
                        this.jump();
                        k.play("jump", {volume: 0.3});  //playing sound
                        doubleJump = true;
                    } else if (doubleJump) {
                        this.play("jump");
                        this.jump();
                        k.play("jump", {volume: 0.3});
                        doubleJump = false;
                    } 
                    
                });
            },

            setEventsSonic(){
                this.onGround(() => {
                    this.play("run");
                    doubleJump = false;
                });
            }
        },
    ]);

    sonic.ringCollectUI = sonic.add([
        k.text("", {font: "mania", size: 24}),
        k.color(255, 255, 0),
        k.anchor("center"),
        k.pos(30, -10),
    ]);

    return sonic;
}