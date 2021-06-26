let gens = [
    ["Blanche Neige", "https://i.pinimg.com/564x/87/a3/ba/87a3ba9a132c696b68ed4a97715d63a1.jpg"],
    ["La Méchante Reine", "https://i.pinimg.com/564x/36/b9/c8/36b9c8143c281564121b10e371fdb3ff.jpg"],
    ["Cendrillon", "https://i.pinimg.com/236x/35/ea/2a/35ea2aa86d9a9ea08fd09c66ea1b2256.jpg"],
    ["Anastasie", "https://i.pinimg.com/236x/46/6f/e9/466fe92992140213a2820cd74a7e3db7.jpg"],
    ["Javotte", "https://i.pinimg.com/236x/b4/de/2b/b4de2ba086785e449bd99ebd14818824.jpg"],
    ["Aurore", "https://i.pinimg.com/236x/71/48/5c/71485c8ea13eef3505a690cc122c2e13.jpg"],
    ["Philippe", "https://i.pinimg.com/236x/df/8a/15/df8a155c908c903aeb1441b186810976.jpg"],
    ["Maléfique", "https://i.pinimg.com/564x/25/71/d7/2571d70731b67bc52059e2438f0b533b.jpg"],
    ["Ariel", "https://i.pinimg.com/236x/82/97/77/8297777ee890bea54959c5367786eb7b.jpg"],
    ["Eric", "https://i.pinimg.com/236x/f7/a5/a4/f7a5a47d4213e29dfc7fb95c94149fa3.jpg"],
    ["Ursula (humaine)", "https://i.pinimg.com/236x/29/53/60/29536004b7543df6986af958b225e154.jpg"],
    ["Belle", "https://i.pinimg.com/236x/1f/0b/74/1f0b749a4c3ede7bb1c3e5e0136701cf.jpg"],
    ["La Bête (humain)", "https://i.pinimg.com/236x/73/a3/bf/73a3bf9c0e457daeb943c74651ed2ca6.jpg"],
    ["Alice", "https://i.pinimg.com/236x/28/05/2d/28052de17c7fdd4ec0a0630f2d904f1c.jpg"],
    ["Peter Pan", "https://i.pinimg.com/236x/88/ef/03/88ef03a898f56908f8d86a13095af2cf.jpg"],
    ["Wendy", "https://i.pinimg.com/236x/b1/0c/a1/b10ca13a9f07d47b21b571728ecd5dd7.jpg"],
    ["Mary Poppins", "https://i.pinimg.com/236x/b0/ef/f6/b0eff6fe150edd1b3e500df90b23fc7b.jpg"],
    ["Jasmine", "https://i.pinimg.com/236x/4a/50/d7/4a50d70a110312d02c4e842be0198c3e.jpg"],
    ["Aladdin", "https://i.pinimg.com/236x/4a/14/50/4a14508881223ebe12f30a2a5fceab03.jpg"],
    ["Jafar", "https://i.pinimg.com/236x/88/63/2c/88632c09fefeafa99af5da443bc9a7e9.jpg"],
    ["Le génie", "https://i.pinimg.com/236x/03/25/79/0325794254e67a116de0e186da95a212.jpg"],
    ["Monsieur Jack", "https://i.pinimg.com/236x/8d/fa/19/8dfa198cf6f2e431d9e620bca7695998.jpg"],
    ["Sally", "https://i.pinimg.com/236x/5c/8d/71/5c8d713b46b4e57357ddea335008da22.jpg"],
    ["Pocahontas", "https://i.pinimg.com/236x/97/8f/1b/978f1b23f1223adb4e4fb74235a5116e.jpg"],
    ["John Smith", "https://i.pinimg.com/236x/95/9d/2a/959d2ad45ed493d49731e10bb7e58a45.jpg"],
    ["Woody", "https://i.pinimg.com/236x/be/a0/14/bea0143bca98e761addf0ef9dec37f67.jpg"],
    ["Jessie", "https://i.pinimg.com/564x/ab/29/49/ab29491a656500fb36970c2407ce1624.jpg"],
    ["Buzz l'éclair", "https://i.pinimg.com/564x/49/0b/5c/490b5c86bf01510e5af5b5ae3549fd7c.jpg"],
    ["Bo Peep", "https://i.pinimg.com/564x/4f/62/7f/4f627fbee3bb4f21984d0e9f709c86c7.jpg"],
    ["Duke Caboom", "https://i.pinimg.com/564x/5b/57/be/5b57be6079b94b09b0761e3383c2dc56.jpg"],
    ["Esmeralda", "https://i.pinimg.com/236x/4c/6b/ee/4c6beeed1ced174a83d904d36a6cf7ab.jpg"],
    ["Hercule", "https://i.pinimg.com/236x/cf/25/b2/cf25b26deb613410fac2789f032e6331.jpg"],
    ["Megara", "https://i.pinimg.com/236x/fb/de/83/fbde83438bfd922461a6cdbc323cd47c.jpg"],
    ["Anastasia", "https://i.pinimg.com/236x/19/34/9e/19349efe3de549dabfe42f29d8f016ac.jpg"],
    ["Mulan", "https://i.pinimg.com/236x/3e/c0/69/3ec0692847a84acc6128acf2db6d7e66.jpg"],
    ["Li Shang", "https://i.pinimg.com/236x/95/ee/91/95ee91b6d78ef79a317ab9482e135458.jpg"],
    ["Raiponce", "https://i.pinimg.com/236x/34/67/3c/34673c070558090629241a3f946ca94e.jpg"],
    ["Tarzan", "https://i.pinimg.com/236x/c7/82/42/c782425135e9abeb024f9a07f5d508cb.jpg"],
    ["Jane", "https://i.pinimg.com/564x/7a/30/5a/7a305adb1cd7b41a24173b43b42fb94c.jpg"],
    ["Kida", "https://i.pinimg.com/236x/5a/94/68/5a946807f355dedec64c8ca6f8aea896.jpg"],
    ["Milo", "https://i.pinimg.com/236x/58/25/f0/5825f0c59a58323887fbb835a94609e4.jpg"],
    ["Wall E", "https://i.pinimg.com/236x/37/2b/1b/372b1bc699cc80c57b9661d48a0a3dc1.jpg"],
    ["Eve", "https://i.pinimg.com/564x/80/25/a9/8025a9f63435b64305b1cf045c76fd70.jpg"],
    ["Clochette", "https://i.pinimg.com/564x/73/41/ba/7341ba9265fa26c836428e4370d9a660.jpg"],
    ["Iridessa", "https://i.pinimg.com/236x/ca/75/d0/ca75d0dfbc4e47f7d841635b6919fb02.jpg"],
    ["Ondine", "https://i.pinimg.com/564x/05/09/10/0509106f2086de76e543521c54863bb1.jpg"],
    ["Roselia", "https://i.pinimg.com/564x/f1/9d/50/f19d502bd43b88e22daef6af3e232126.jpg"],
    ["Vidia", "https://i.pinimg.com/236x/0e/14/f4/0e14f4a65663614aff32d29d314dab53.jpg"],
    ["Noa", "https://i.pinimg.com/564x/9d/77/16/9d77168aad89b8c5755265d909241e00.jpg"],
    ["Tiana", "https://i.pinimg.com/236x/f8/18/4d/f8184d05f09ec46461f0c5e4bfad36e4.jpg"],
    ["Naveen", "https://i.pinimg.com/236x/44/4a/33/444a330ac92ed584cf9db7ccce34acc0.jpg"],
    ["Dr Facilier", "https://i.pinimg.com/564x/57/bc/8c/57bc8c3a8c51cb0189094bcd00766fa3.jpg"]
    ["Charlotte", "https://i.pinimg.com/236x/e7/c3/99/e7c3995f59b6e7a88ee3676d40bb4219.jpg"],
    ["Flynn", "https://i.pinimg.com/236x/04/f9/35/04f93570abf5044ff3804782a9e2119d.jpg"],
    ["Merida", "https://i.pinimg.com/236x/bd/3f/3f/bd3f3fb8e39e53102527d98cadd010a3.jpg"],
    ["Elsa", "https://i.pinimg.com/236x/a7/15/de/a715de33669982c172a4f70b3fc8029e.jpg"],
    ["Anna", "https://i.pinimg.com/236x/a3/8a/a8/a38aa8ca030fc3309b1d1f424e6e5266.jpg"],
    ["Olaf", "https://i.pinimg.com/236x/6c/3e/12/6c3e12e584e6ef743a83387412c7a26f.jpg"],
    ["Christophe", "https://i.pinimg.com/564x/a6/a5/d8/a6a5d8b0d09270ff0e066f758ff9613a.jpg"],
    ["Tadashi", "https://i.pinimg.com/236x/66/da/6c/66da6c05798412da322b26216738ecdf.jpg"],
    ["Hiro", "https://i.pinimg.com/236x/58/91/07/5891074b4fa5699fb6ce5a51221de8a6.jpg"],
    ["Honey Lemon", "https://i.pinimg.com/564x/48/dd/08/48dd08925f6a72fcf1f13565fe03b620.jpg"],
    ["GoGo", "https://i.pinimg.com/564x/0e/59/67/0e5967f64e379583b66b49ffb1a48654.jpg"],
    ["Baymax", "https://i.pinimg.com/236x/92/4c/f5/924cf5ecf1a4c2abde419738dcead483.jpg"],
    ["Wasabi", "https://i.pinimg.com/236x/ac/41/5e/ac415ed49c14baa17bff491b1110b023.jpg"],
    ["Fred", "https://i.pinimg.com/236x/6a/ac/51/6aac51ba1824caa1d87007626266a95a.jpg"],
    ["Joie", "https://i.pinimg.com/236x/6f/ae/f9/6faef9debbb3c34443ddf59b2c81bf25.jpg"],
    ["Dégoût", "https://i.pinimg.com/236x/1a/44/98/1a4498c8817c638fd918cc1f2c743780.jpg"],
    ["Tristesse", "https://i.pinimg.com/236x/f5/95/da/f595da41495167b65314b88b00d5288c.jpg"],
    ["Peur", "https://i.pinimg.com/236x/42/05/bf/4205bfc00fbbcbc373bab2aee0ddbc70.jpg"],
    ["Colère", "https://i.pinimg.com/236x/42/a6/54/42a654026628457506920e05d5d5b75f.jpg"],
    ["Riley", "https://i.pinimg.com/236x/30/c4/e1/30c4e1ffe5bca092e39c1f60989a8780.jpg"],
    ["Miguel", "https://i.pinimg.com/236x/24/82/5f/24825f085fd26e89bd0afafcde07f3f1.jpg"],
    ["Elastigirl", "https://i.pinimg.com/236x/c8/57/98/c857986f3cbf1fccdaa465843f480c99.jpg"],
    ["Violette", "https://i.pinimg.com/236x/3b/49/7c/3b497cbf302e044d214a926c5558bc8b.jpg"],
    ["Vanellope", "https://i.pinimg.com/236x/d6/dd/be/d6ddbe64bece560f198a81020544c8c1.jpg"],
    ["Ralph", "https://i.pinimg.com/564x/65/d0/c3/65d0c3dafef97cc282d124baf2eda1f1.jpg"],
    ["Shank", "https://i.pinimg.com/236x/cc/b3/19/ccb319062a2453a57610e0ff9d3558d1.jpg"],
    ["Mickey", "https://i.pinimg.com/564x/29/e6/4e/29e64e3f482601b12cc902c159d7fa4c.jpg"],
    ["Minnie", "https://i.pinimg.com/564x/e9/68/eb/e968eb48f0fabfff65a9bc39fbe60c65.jpg"],
    ["Picsou", "https://i.pinimg.com/564x/15/25/7f/15257f8b745d6748255404dfd0b70d71.jpg"],
    ["Donald", "https://i.pinimg.com/564x/12/dc/fc/12dcfc1e1a63f2c6b2b2ce95ef84ade7.jpg"]
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
