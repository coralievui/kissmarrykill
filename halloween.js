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
    ["Chucky", "https://i.pinimg.com/564x/48/ad/9a/48ad9a92effa2f8184389662eddd347c.jpg"],
    ["Tiffany", "https://i.pinimg.com/564x/a7/ac/07/a7ac076bf0021695fce659dadaf96c0f.jpg"],
    ["Glenn", "https://i.pinimg.com/564x/91/d0/88/91d088036d4857cf803105475b81672e.jpg"],
    ["Ryuk", "https://i.pinimg.com/564x/ff/17/99/ff1799e2316f59766b722aacd0985c71.jpg"],
    ["Annabelle", "https://i.pinimg.com/564x/37/2f/65/372f656d83428fb8cb505727860931c6.jpg"],
    ["Michael Myers", "https://i.pinimg.com/564x/c3/2f/a3/c32fa339dff81dea851b3618bcd2d868.jpg"],
    ["Freddy Krueger", "https://i.pinimg.com/564x/43/02/37/430237e9c73afbdd2462e036a660f525.jpg"],
    ["Edward aux mains d'argent", "https://i.pinimg.com/564x/51/ae/cd/51aecda7d2cc9de1f0af7c3e190705fe.jpg"],
    ["Coraline", "https://i.pinimg.com/564x/b0/cb/a5/b0cba58594391a1b526804f469530d04.jpg"],
    ["Sweeney Todd", "https://i.pinimg.com/564x/5c/a5/5e/5ca55e6247839b3a93d1c468a8e7203e.jpg"],
    ["Mrs Lovett", "https://i.pinimg.com/564x/05/33/4b/05334b34db045ee54b0c17376ae11d7c.jpg"],
    ["Voldemort", "https://i.pinimg.com/564x/91/d5/8a/91d58a6648e8d75392a55f5d861e3a85.jpg"],
    ["Bellatrix Lestrange", "https://i.pinimg.com/564x/82/fc/db/82fcdbbe95819bed923880683ba1719e.jpg"],
    ["Dolores Ombrage", "https://i.pinimg.com/564x/eb/96/65/eb9665a27b1dea07740f8f82c569021f.jpg"],
    ["The Mask", "https://i.pinimg.com/564x/7b/fb/6e/7bfb6e51b916b9daaf60b56c59b20b1c.jpg"],
    ["Lucifer", "https://i.pinimg.com/564x/36/da/ff/36daffbd3847c622425fd1b84975af1e.jpg"],
    ["Billy the Puppet", "https://i.pinimg.com/564x/3c/f4/5a/3cf45a0bfdd3213685eb12df4014599c.jpg"],
    ["La Sorcière de l'Ouest", "https://i.pinimg.com/564x/1a/7c/7a/1a7c7a84597649930ca246e8e178e589.jpg"],
    ["Ange Pleureur", "https://i.pinimg.com/564x/67/d1/88/67d188474870c23076ef36995f59981f.jpg"],
    ["Ghostface", "https://i.pinimg.com/564x/10/e3/45/10e3451ea9b6b2e4284319e6de15c888.jpg"],
    ["Freddy", "https://i.pinimg.com/564x/5a/fd/99/5afd993a5440b2227e6a4d292981af2d.jpg"],
    ["Slenderman", "https://i.pinimg.com/564x/f1/48/e9/f148e911712f11450d0ef03386add000.jpg"],
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
