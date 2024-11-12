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

    return sonic;
}