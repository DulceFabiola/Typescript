"use strict";
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    let fuerza;
    (function (fuerza) {
        fuerza[fuerza["acuaman"] = 0] = "acuaman";
        fuerza[fuerza["batman"] = 1] = "batman";
        fuerza[fuerza["flash"] = 5] = "flash";
        fuerza[fuerza["superman"] = 100] = "superman";
    })(fuerza || (fuerza = {}));
    const fuerzaFlash = fuerza.flash;
    const fuerzaSuperman = fuerza.superman;
    const fuerzaBatman = fuerza.flash;
    const fuerzaAcuaman = fuerza.acuaman;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(() => {
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    const fuerzaFlash = 5;
    const fuerzaSuperman = 100;
    const fuerzaBatman = 1;
    const fuerzaAcuaman = 0;
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
const unirheroes = (...personas) => {
    return personas.join(", ");
};
const noHaceNada = (numero, texto, booleano, arreglo) => { };
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
(() => {
    const batimovil = {
        carroceria: "Negra",
        modelo: "6x6",
        antibalas: true,
        pasajeros: 4,
    };
    const bumblebee = {
        carroceria: "Amarillo con negro",
        modelo: "4x2",
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log("Disparando");
        },
    };
    const villanos = [
        {
            nombre: "Lex Luthor",
            edad: 54,
            mutante: false,
        },
        {
            nombre: "Erik Magnus Lehnsherr",
            edad: 49,
            mutante: true,
        },
        {
            nombre: "James Logan",
            edad: undefined,
            mutante: true,
        },
    ];
    const charles = {
        poder: "psiquico",
        estatura: 1.78,
    };
    const apocalipsis = {
        lider: true,
        miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
    };
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = "Dr. STrange";
    console.log(avenger.charAt(0));
    console.log(avenger.charAt(0));
    avenger = 150.23256415;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const villians = ['Ómega Rojo', 'Dormammu', 'Duende Verde'];
    villians.forEach(v => console.log(v.toUpperCase()));
    console.log(numbers);
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    console.log(isBatman);
    isSuperman = (isBatman) ? true : false;
    console.log({ isBatman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium;
})();
(() => {
    const error = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    error("Auxilio");
    console.log("Hola Mundo");
})();
(() => {
    let nada = undefined;
    let isActive = undefined;
})();
(() => {
    let avengers = 10;
    const villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos ');
    }
    avengers = Number('555a');
    console.log({ avengers });
})();
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = "Linterna Verde";
    const volcanNegro = `Heroe: Volcan Negro`;
    console.log(batman.toUpperCase());
    console.log(`I'm ${batman}`);
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || "No esta presente");
})();
(() => {
    const hero = ['Dr Strange', 100, true];
    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
(() => {
    function callBatman() {
        return;
    }
    const callSuperman = () => {
        return;
    };
    const a = callBatman();
    console.log(a);
})();
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || "----"}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || "----"}`;
        }
    };
    const name = fullName("Tony", "Stark", true);
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || "----"}`;
    };
    const name = fullName("Tony", "Stark");
    console.log(name);
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName("Tony", "Stark");
    console.log(name);
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(" ")}`;
    };
    const superman = fullName("Clark", "Joseph", "Kent");
    console.log({ superman });
})();
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado`;
    let myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(() => {
    const hero = "Flash";
    function returnName() {
        return hero;
    }
    const activarBatiseñal = () => {
        return "Batiseñal activa";
    };
    console.log(typeof activarBatiseñal);
    const heroName = returnName();
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
    flash = {
        name: 'Clark Kent',
        powers: ['Super fuerza'],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: [1, 2],
    };
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    let myCustomeVariable = "Fabiola";
    console.log(typeof myCustomeVariable);
    myCustomeVariable = 20;
    console.log(typeof myCustomeVariable);
    myCustomeVariable = {
        name: "Bruce",
        age: 43,
        powers: [1],
    };
    console.log(typeof myCustomeVariable);
})();
//# sourceMappingURL=main.js.map