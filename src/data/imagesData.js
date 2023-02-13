/* import { db } from "../utils/firebase"
import { ref, set } from "firebase/database"; */
/* 
function getCharacterData(game) {
    if (game.waldo) {
        set(ref(db, 'game/' + game + "waldo"), {
            x1: game.waldo[0],
            x2: game.waldo[1],
            y1: game.waldo[2],
            y2: game.waldo[3]
        });
    }
    if (game.wizard) {
        set(ref(db, 'game/' + game + "wizard"), {
            x1: game.wizard[0],
            x2: game.wizard[1],
            y1: game.wizard[2],
            y2: game.wizard[3]
        });
    }
    if (game.wizard) {
        set(ref(db, 'game/' + game + "odlaw"), {
            x1: game.odlaw[0],
            x2: game.odlaw[1],
            y1: game.odlaw[2],
            y2: game.odlaw[3]
        });
    }
}


const game1 = {
    waldo: [0.6671348314606742,
      0.7303370786516854,
      0.5152671755725191,
      0.6393129770992366]
}

const game2 = {
    waldo: [
        0.26570048309178745,
        0.2898550724637681,
        0.3244274809160305,
        0.37213740458015265 
      ],

    wizard: [
        0.6038647342995169,
        0.6189613526570048,
        0.8492366412213741,
        0.9064885496183206 
      ],

      odlaw: [
        0.09963768115942029,
        0.11171497584541062,
        0.3482824427480916,
        0.38645038167938933
      ]
}

const game3 = {
    waldo: [
        0.6096813725490197,
        0.625,
        0.36259541984732824,
        0.41030534351145037
      ],

    wizard: [
        0.26348039215686275,
        0.2818627450980392,
        0.3435114503816794,
        0.3816793893129771
      ],

    odlaw: [
        0.10110294117647059,
        0.1133578431372549,
        0.3482824427480916,
        0.38645038167938933
      ]
}

export { game1, game2, game3 };

/* getCharacterData(game1);
getCharacterData(game2);
getCharacterData(game3); */ /* */