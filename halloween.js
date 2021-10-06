let gens = [
    ["Mr Jack", "https://i.pinimg.com/564x/4a/2d/49/4a2d4984e0717a156f639a115521367c.jpg"],
    ["Sally", "https://i.pinimg.com/564x/92/a0/17/92a017ad3ab82da0047782e78267c5f6.jpg"],
    ["Emily", "https://i.pinimg.com/564x/dd/60/ff/dd60ff96e8bbc4aa7e045d0ebd13bfd3.jpg"],
    ["Victor Van Dort", "https://i.pinimg.com/564x/b4/cb/4e/b4cb4e6af0396da99506008ecc827746.jpg"],
    ["Pennywise", "https://i.pinimg.com/564x/2a/1e/c4/2a1ec4c2b49aa10e8f265a0267d019e3.jpg"],
    ["La Nonne", "https://i.pinimg.com/564x/e3/6c/bf/e36cbfcd6a76428e46154a096f64ad48.jpg"],
    ["Mavis", "https://i.pinimg.com/564x/39/af/cf/39afcfb0ef021d356bd7b2922b5ceca3.jpg"],
    ["Dracula", "https://i.pinimg.com/564x/6e/16/0f/6e160f1e4b4328b19f2a147016e922c6.jpg"],
    ["Mercredi Addams", "https://i.pinimg.com/564x/f6/f7/27/f6f727847a5b609fcdf7fbf727e1348a.jpg"],
    ["Morticia Addams", "https://i.pinimg.com/564x/1b/62/53/1b6253779ad05788833910f3c32b6771.jpg"],
    ["Gomez Addams", "https://i.pinimg.com/564x/3c/75/34/3c7534ab65a8ec7a292d437be715a54a.jpg"],
    ["Cousin Machin", "https://i.pinimg.com/564x/bf/90/73/bf9073ecd1e23e1b91e79147e313eec1.jpg"],
    ["Oncle Fétide", "https://i.pinimg.com/564x/4d/1f/03/4d1f03b1ff18537d09f27fde579b650d.jpg"],
    ["Le Joker", "https://i.pinimg.com/564x/f4/9f/30/f49f3036e50cc1e7ee3b2a35d6486435.jpg"],
    ["Frankenstein", "https://i.pinimg.com/564x/85/ce/42/85ce4267b0c09a0f6f27d6983264dd86.jpg"],
    ["Casper", "https://i.pinimg.com/564x/dc/a2/1c/dca21c81c8504e5448ad5e6873e0113f.jpg"],
    ["Carrie", "https://i.pinimg.com/564x/dd/18/d0/dd18d0c164300a735326947d7e92f3df.jpg"],
    ["Jack Torrance", "https://i.pinimg.com/564x/07/5f/e0/075fe00c5688d5358ba4ceb9c426df3b.jpg"],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
]

function generate() {
    let person1 = gens[Math.floor(Math.random() * gens.length)];
    let person2 = gens[Math.floor(Math.random() * gens.length)];
    let person3 = gens[Math.floor(Math.random() * gens.length)];

    if (person1[0] == person2[0] || person1[0] == person3[0] || person2[0] == person3[0]) {
        setTimeout(() => {
            generate();
        }, 100);
    } else {
        document.getElementById('person1-text').innerText = person1[0];
        document.getElementById('person1-image').src = person1[1];
        document.getElementById('person2-text').innerText = person2[0];
        document.getElementById('person2-image').src = person2[1];
        document.getElementById('person3-text').innerText = person3[0];
        document.getElementById('person3-image').src = person3[1];
    }
}

generate();
