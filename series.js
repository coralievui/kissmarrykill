let gens = [
    ["Harry Potter", "https://i.pinimg.com/originals/e5/c4/09/e5c409a8e8e78d1d9d04cefeb579569f.jpg"],
    ["Hermione (Harry Potter)", "https://i.pinimg.com/originals/8a/40/8e/8a408e59e004ab88572cb351bfdb48e4.png"],
    ["Ron (Harry Potter)", "https://i.pinimg.com/originals/e6/43/47/e6434750dcdbf4514805c8062a2a1e53.jpg"],
    ["Drago (Harry Potter)", "https://i.pinimg.com/originals/4b/ee/03/4bee03dee87ce06c36f759d334ece15f.png"],
    ["Cedric (Harry Potter)", "https://i.pinimg.com/originals/4d/ee/db/4deedbe558df842e3b84dcac22e87507.jpg"],
    ["Luna (Harry Potter)", "https://i.pinimg.com/originals/64/38/58/643858241a1d13f2d7b84318f83392f9.png"],
    ["Marty (Retour Vers le Futur)", "https://i.pinimg.com/originals/d7/72/1a/d7721aa0b521283c6fb79ab2d742bc1f.jpg"],
    ["Sheldon (The Big Bang Theory)", "https://i.pinimg.com/564x/f9/4f/48/f94f48bb4dd3341465a161db0c80bfd1.jpg"],
    ["Penny (The Big Bang Theory)", "https://i.pinimg.com/564x/a9/1b/14/a91b1421779953f9852842ab6b605dca.jpg"],
    ["Leonard (The Big Bang Theory)", "https://i.pinimg.com/564x/a5/15/71/a515710f2fb23bb37641c0e2b2410ddd.jpg"],
    ["Howard (The Big Bang Theory)", "https://i.pinimg.com/564x/5a/2e/9b/5a2e9b75768728bf93d02663e4540c88.jpg"],
    ["Rajesh (The Big Bang Theory)", "https://i.pinimg.com/236x/d7/af/58/d7af58b43806a45bb03c7313a14162d8.jpg"],
    ["Amy (The Big Bang Theory)", "https://i.pinimg.com/564x/5b/03/6c/5b036c15161b07b381d4b4d7d5d2f09b.jpg"],
    ["Bernadette (The Big Bang Theory)", "https://i.pinimg.com/564x/3c/27/e2/3c27e218c10e97e372573a500409da00.jpg"],
    ["10th Doctor (Doctor Who)", "https://i.pinimg.com/564x/6e/f7/ac/6ef7acea823be296b643d72dd2a78afd.jpg"],
    ["11th Doctor (Doctor Who)", "https://i.pinimg.com/564x/39/91/eb/3991eb326d0d1f4991020fffeeb0d236.jpg"],
    ["Sherlock", "https://i.pinimg.com/564x/71/59/93/7159933cfaf2c39e56418a80cd8d7f33.jpg"],
    ["Watson (Sherlock)", "https://i.pinimg.com/564x/de/68/2e/de682e6d2ebd5297028012ca353dedf4.jpg"],
    ["Lucifer", "https://i.pinimg.com/564x/20/a6/73/20a673e10dcad3f9409616202be48779.jpg"],
    ["Klaus (Umbrella Academy)", "https://i.pinimg.com/564x/2c/8c/17/2c8c1793b311e879b2750778ad9986a1.jpg"],
    ["Five (Umbrella Academy)", "https://i.pinimg.com/564x/51/ee/2a/51ee2a5dc6ac8b9fc8a17d10b6a1b1ab.jpg"],
    ["Vanya (Umbrella Academy)", "https://i.pinimg.com/564x/29/82/14/2982145cd69090248bc7d4c227597994.jpg"],
    ["Luther (Umbrella Academy)", "https://i.pinimg.com/564x/9b/5e/3d/9b5e3dc6b280fd0bfb5bab30d650d2d7.jpg"],
    ["Ben (Umbrella Academy", "https://i.pinimg.com/564x/43/34/30/433430fdff04686f6d394b8b786f1a6c.jpg"],
    ["Crowley (Good Omens)", "https://i.pinimg.com/564x/47/06/c4/4706c460f4c544962e48e747dbaaaf55.jpg"],
    ["Aziraphale (Good Omens)", "https://i.pinimg.com/564x/4f/34/73/4f3473f83318c9baa5b4ab64561bc01b.jpg"],
    ["Norbert (Les Animaux Fantastiques)", "https://i.pinimg.com/564x/70/7f/fb/707ffbf127672a2d9208851418bd164c.jpg"],
    ["Tina (Les Animaux Fantastiques)", "https://i.pinimg.com/564x/95/fa/dc/95fadc73baf33a031e349413a5dc0d69.jpg"],
    ["Queenie (Les Animaux Fantastiques)", "https://i.pinimg.com/564x/04/d1/b2/04d1b21b02c1f6d7baa214bf22882b58.jpg"],
    ["Rachel (Friends)", "https://i.pinimg.com/564x/26/f6/ef/26f6efba3dbfe342caa8a19c00efb263.jpg"],
    ["Monica (Friends)", "https://i.pinimg.com/564x/1f/69/ad/1f69ad7102b4873a43e0ace40b7eaadd.jpg"],
    ["Phoebe (Friends)", "https://i.pinimg.com/564x/b9/9c/72/b99c72c3e325156237887f6e6af6baf6.jpg"],
    ["Chandler (Friends)", "https://i.pinimg.com/564x/0d/94/50/0d945003c8dd9bdf69134f8c8acde7d0.jpg"],
    ["Ross (Friends)", "https://i.pinimg.com/564x/0e/c9/bf/0ec9bfb7fdaff6635402bdd0d221a1f6.jpg"],
    ["Joey (Friends)", "https://i.pinimg.com/564x/3f/07/1b/3f071be0031842c8a107f0b304aa1b78.jpg"],
    ["Daenerys (Game of Thrones)", "https://i.pinimg.com/564x/c9/22/0d/c9220d56e984573c5e30650e74e33907.jpg"],
    ["Jon Snow (Game of Thrones)", "https://i.pinimg.com/236x/10/53/99/105399f9ceb475175b16045d9778764e.jpg"],
    ["Tokyo (La Casa De Papel)", "https://i.pinimg.com/564x/30/f7/32/30f7324cedbeef0f8f8149966f21eacc.jpg"],
    ["Rio (La Casa De Papel)", "https://i.pinimg.com/564x/c9/aa/ef/c9aaefb50a989ba737990873f4f5e007.jpg"],
    ["Luke (Star Wars)", "https://i.pinimg.com/564x/d4/3a/b9/d43ab91415c68f63266f2adc5e83572f.jpg"],
    ["Anakin (Star Wars)", "https://i.pinimg.com/564x/c8/7a/fe/c87afe46353fd4fdc03b9c5a6c159ea3.jpg"],
    ["Leia (Star Wars)", "https://i.pinimg.com/564x/ee/0c/9d/ee0c9d9d6eb80d8a850b86598506c5e6.jpg"],
    ["Padme (Star Wars)", "https://i.pinimg.com/564x/d3/93/1b/d3931b06aca5564dd22b771fd136fddd.jpg"],
    ["Rue (Euphoria)", "https://i.pinimg.com/564x/4b/a5/8a/4ba58abcaf6dc9ee06256ef47abfbfae.jpg"],
    ["Eleven (Stranger Things)", "https://i.pinimg.com/564x/84/4a/48/844a48fb3a01827ebaa3d0512a202079.jpg"],
    ["Legolas (Lord of The Rings)", "https://i.pinimg.com/564x/56/cc/a3/56cca3ae2d42bf6352e00bd7b9c24e83.jpg"],
    ["Frodon (Lord of The Rings)", "https://i.pinimg.com/564x/e9/c0/85/e9c0853068e60cb73c33b2d283251c3e.jpg"],
    ["Joker", "https://i.pinimg.com/564x/62/c3/cf/62c3cffb22a858cd3a3c1ae5f0c51f44.jpg"],
    ["Nairobi (La Casa de Papel)", "https://i.pinimg.com/564x/a2/c0/6d/a2c06de4937e55ca00134032031bc37e.jpg"],
    ["Spider-Man", "https://i.pinimg.com/564x/aa/c7/83/aac783715a692960dbcb277f18d4dcdd.jpg"],
    ["Dr Strange", "https://i.pinimg.com/564x/4a/ce/be/4acebe202f499250b86d865677e0f6c3.jpg"],
    ["Captain America", "https://i.pinimg.com/564x/31/6e/24/316e24ad6b255903f6f8ceece5449d23.jpg"],
    ["Black Widow", "https://i.pinimg.com/564x/0f/be/fc/0fbefcf44db805d99a99e6cca35d1346.jpg"],
    ["Gamora (Les Gardiens de la Galaxie)", "https://i.pinimg.com/564x/88/72/4a/88724a0c03bf7ba0c5e6781e884294df.jpg"],
    ["Nebula (Les Gardiens de la Galaxie)", "https://i.pinimg.com/564x/5a/a6/ee/5aa6ee5dc9bed2ba408ad89bac1dc94b.jpg"],
    ["Black Panther", "https://i.pinimg.com/564x/93/cb/8e/93cb8ef9e8f91fd8a49a714895b332b5.jpg"],
    ["Star-Lord (Les Gardiens de la Galaxie)", "https://i.pinimg.com/564x/25/be/87/25be87dccb167017017b6233b7890c0e.jpg"],
    ["Iron-Man", "https://i.pinimg.com/564x/6d/2b/c8/6d2bc84a483411b0ff92683e6f310d62.jpg"],
    ["Thor", "https://i.pinimg.com/564x/2d/f9/33/2df9337d376f0bae6205f6caf703a4b9.jpg"],
    ["Rose (Titanic)", "https://i.pinimg.com/564x/31/f7/89/31f789af9ddb3cc4eb80414e2f83d8ec.jpg"],
    ["Jack (Titanic)", "https://i.pinimg.com/564x/3b/b2/f7/3bb2f7a3d39611f2b71d49a1109afdaa.jpg"],
    ["Jack Sparrow (Pirates des Caraïbes)", "https://i.pinimg.com/564x/c5/6a/f2/c56af2ca4db9460d814ebb3bedad4dfa.jpg"],
    ["Elizabeth (Pirates des Caraïbes)", "https://i.pinimg.com/564x/6e/ab/55/6eab551827a660ae854cb27a3d2347ab.jpg"],
    ["William (Pirates des Caraïbes)", "https://i.pinimg.com/564x/9d/cf/ac/9dcfacd2f38bb566357fb04e5dc0e35b.jpg"],
    ["Newt", "https://i.pinimg.com/564x/af/f1/5d/aff15d656e2f4c04bbb0c259577c5801.jpg"],
    ["Thomas", "https://i.pinimg.com/564x/46/5e/2b/465e2b03ad0800d5f5a2c31c32a7685f.jpg"],
    ["Teresa", "https://i.pinimg.com/564x/69/64/eb/6964ebde4980ad8f2a2a7288ed402711.jpg"],
    ["Negan", "https://i.pinimg.com/564x/0d/38/b2/0d38b2bd575ff7986a4be5b86710b842.jpg"],
    ["Rick", "https://i.pinimg.com/564x/05/c1/c6/05c1c6c94a3a6ef35635b59ff35a54c3.jpg"],
    ["Maeve", "https://i.pinimg.com/564x/c1/47/81/c1478175c9921cc6b279b2af7172679c.jpg"],
    ["Otis", "https://i.pinimg.com/564x/07/72/75/077275a87e1db1f94e2b3b39f5d79849.jpg"],
    ["Miss Perigrine", "https://i.pinimg.com/564x/f5/f6/91/f5f69194faf57a541a3765cb2ce130f5.jpg"],
    ["Jo March", "https://i.pinimg.com/564x/00/31/f6/0031f60b65fae9f314816b562bca2711.jpg"],
    ["Meg March", "https://i.pinimg.com/564x/2c/55/c4/2c55c485d4c62c8441f23b63cdbe4d06.jpg"],
    ["Amy March", "https://i.pinimg.com/564x/51/25/94/512594b123c57c8f96662bd19e5f3bc5.jpg"],
    ["Théodore Laurence", "https://i.pinimg.com/564x/22/21/84/222184674a6340c9b801c29b4acfd04a.jpg"],
    ["Ginny", "https://i.pinimg.com/564x/61/bd/3b/61bd3b077ea9b77fe1f9e1654dda3a79.jpg"],
    ["Forrest Gump", "https://i.pinimg.com/564x/6c/52/c1/6c52c1eb12252773905231cac79097a4.jpg"],
    ["Cat", "https://i.pinimg.com/564x/bc/af/82/bcaf8268468768f7a27cddcfa3705c5e.jpg"],
    ["Jade", "https://i.pinimg.com/564x/86/42/a1/8642a1df006bd616c88d2226a8c2e5a0.jpg"],
    ["Beck", "https://i.pinimg.com/564x/4a/96/7d/4a967dfb4b3a5884d4f8b4a3cb768217.jpg"],
    ["Carly", "https://i.pinimg.com/564x/8b/09/a9/8b09a9f492adfa191863ab1ddbe02bf9.jpg"],
    ["Sam", "https://i.pinimg.com/564x/de/41/6f/de416fc10e2f2ad2affb8eca6e43e683.jpg"],
    ["Freddie", "https://i.pinimg.com/564x/3c/a5/81/3ca58126173a0232ac184d1a5ecdea64.jpg"],
    ["Jessie", "https://i.pinimg.com/564x/c1/e7/9d/c1e79d0f2974ecf2625cf34c08a176ac.jpg"],
    ["Emma", "https://i.pinimg.com/564x/af/30/d0/af30d031bee53aba30c65f5f7895a7b5.jpg"],
    ["Luke", "https://i.pinimg.com/564x/41/74/96/417496d0e5ab15362e9c3354d0d58704.jpg"],
    ["Enola Holmes", "https://i.pinimg.com/564x/70/8c/1b/708c1bed0fb2397e4bf81f8a4cc1afec.jpg"],
    ["Mr Bean", "https://i.pinimg.com/564x/72/f3/ab/72f3ab641148d227d799570de7547777.jpg"]
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
