import k from "./kaplayCTX";

k.loadSprite("chemical-bg", "pic/chemical-bg.png");
k.loadSprite("platforms", "pic/platforms.png");
k.loadSprite("sonic", "pic/sonic.png", {
    sliceX: 8,
    sliceY: 2,
    anims: {
        run: {from: 0, to: 7, loop:true, speed: 30},
        jump: {from: 8, to: 15, loop:true, speed: 100},
    },
});
k.loadSprite("ring", "pic/ring.png", {
    sliceX: 16,
    sliceY: 1,
    anims: {
        spin: { from: 0, to: 15, loop: true, speed: 30},
    },
});
k.loadSprite("motobug", "pc/motobug.png", {
    sliceX: 5,
    sliceY: 1,
    anims: {
        run: {from: 0, to: 4, loop: true, speed: 8}
    },
});
k.loadFont("mania", "font/mania.ttf");
k.loadSound("destroy", "sound/Destroy.wav");
k.loadSound("hurt", "sound/Hurt.wav");
k.loadSound("hyper-ring", "sound/HiperRing.wav");
k.loadSound("jump", "sound/Jump.wav");
k.loadSound("ring", "sound/Ring.wav");
k.loadSound("city", "sound/city.mp3");
