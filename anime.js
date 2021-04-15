let gens = [
    ["Killua (Hunter x Hunter)", "https://i.pinimg.com/564x/b4/a9/7f/b4a97fcecac0bbdce829914ebea72322.jpg"],
    ["Gon (Hunter x Hunter)", "https://i.pinimg.com/564x/8d/51/f1/8d51f1ecfc07262034a4476192ad4014.jpg"],
    ["Kurapika (Hunter x Hunter)", "https://i.pinimg.com/564x/6b/de/a8/6bdea8779d4ebdc317ad2952b1553ff9.jpg"],
    ["Léolio (Hunter x Hunter)", "https://i.pinimg.com/564x/11/ed/2d/11ed2d14ab2985fdc5714a97440204c1.jpg"],
    ["Hisoka (Hunter x Hunter)", "https://i.pinimg.com/564x/91/b3/6d/91b36dea3b5d0af055cd503f5ed70a5b.jpg"],
    ["Izuku (MHA)", "https://i.pinimg.com/564x/b6/72/5f/b6725fd7d886fa644aff0f2a0edabdcb.jpg"],
    ["Bakugo (MHA)", "https://i.pinimg.com/564x/f8/1d/be/f81dbee7eee612cfe68957ae64a93ec6.jpg"],
    ["Shoto (MHA)", "https://i.pinimg.com/564x/66/25/f1/6625f1126b3ffb0ba543bf751869177e.jpg"],
    ["Ochaco (MHA)", "https://i.pinimg.com/564x/6b/f9/36/6bf9360209ab8e98e661d2fdea8041e7.jpg"],
    ["Momo (MHA)", "https://i.pinimg.com/564x/50/58/62/5058622938957453a571651db008f576.jpg"],
    ["Mina (MHA)", "https://i.pinimg.com/564x/28/44/7f/28447fb9a5a6372e349710ff03dbd1f9.jpg"],
    ["Denki (MHA)", "https://i.pinimg.com/564x/93/10/13/931013e6ba2dbd0cff37ea018ff51c5c.jpg"],
    ["Tamaki (MHA)", "https://i.pinimg.com/564x/a1/f9/db/a1f9db394938e7fcab704b86cf90ebe0.jpg"],
    ["Mirio (MHA)", "https://i.pinimg.com/564x/86/7c/65/867c656e09f48e0717374f1984a3f746.jpg"],
    ["Aizawa (MHA)", "https://i.pinimg.com/564x/64/a1/6a/64a16ae91407afa47dec4abbd60cd773.jpg"],
    ["All Might (MHA)", "https://i.pinimg.com/564x/49/9d/1f/499d1f4c1f3038c689cd8553009cf93e.jpg"],
    ["Nejire (MHA)", "https://i.pinimg.com/564x/d0/65/ee/d065eedf730abdb9cc8064a28b0436cf.jpg"],
    ["Hawks (MHA)", "https://i.pinimg.com/564x/60/5c/54/605c54a8a646cbec831d2e79fbd0a6a5.jpg"],
    ["Light (Death Note)", "https://i.pinimg.com/564x/45/ef/f6/45eff6467ed3bc90ea480123566e0f0b.jpg"],
    ["Misa (Death Note)", "https://i.pinimg.com/564x/60/09/50/6009501d27ef3be40feb23dc53c821e0.jpg"],
    ["L (Death Note)", "https://i.pinimg.com/564x/a7/08/46/a70846a58007be74ffcbc6e5295c304f.jpg"],
    ["Nagisa (Assassination Classroom)", "https://i.pinimg.com/564x/af/36/95/af36953f46f951aa76f098777b6c1a46.jpg"],
    ["Karma (Assassination Classroom)", "https://i.pinimg.com/564x/cc/6c/b4/cc6cb4dbd892d7835543a48bba413820.jpg"],
    ["Kayano (Assassination Classroom)", "https://i.pinimg.com/564x/1a/fe/d6/1afed695fd4e6c7c3fa5c9d48a912a36.jpg"],
    ["Irina (Assassination Classroom)", "https://i.pinimg.com/564x/72/c0/fb/72c0fbfc01c4bfa0292b1a60eba36bf4.jpg"],
    ["Karasuma (Assassination Classroom)", "https://i.pinimg.com/564x/b0/eb/c4/b0ebc4047fdc123cbc51a8e005d72fea.jpg"],
    ["Shinomiya (Love Is War)", "https://i.pinimg.com/564x/9b/98/fe/9b98feb63a22c6a559b7304ef7ccba84.jpg"],
    ["Shirogane (Love Is War)", "https://i.pinimg.com/564x/86/ac/da/86acda5e9864d6fc98279a16cc815492.jpg"],
    ["Fujiwara (Love Is War)", "https://i.pinimg.com/564x/ec/e0/3f/ece03f989cd7435166749d71d6fff234.jpg"],
    ["Ishigami (Love Is War)", "https://i.pinimg.com/564x/15/7d/31/157d310038f315f2d75e5e35455a1075.jpg"],
    ["Yumeko (Gambling School)", "https://i.pinimg.com/564x/db/c5/03/dbc5030b4cb08822935ca533cb91df6f.jpg"],
    ["Mary (Gambling School)", "https://i.pinimg.com/564x/7e/fc/4c/7efc4cddaad2809b30e94bda7a3fa813.jpg"],
    ["Kirari (Gambling School)", "https://i.pinimg.com/564x/9d/fe/10/9dfe10698bb6c1907fda2d5f3beca1ac.jpg"],
    ["Tanjirô (Demon Slayer)", "https://i.pinimg.com/564x/5b/fe/53/5bfe53ed22a14b51d75e96b5c0463765.jpg"],
    ["Nezuko (Demon Slayer)", "https://i.pinimg.com/564x/24/b5/fd/24b5fd63b79a3d88584c6bcafd14c6ec.jpg"],
    ["Giyû (Demon Slayer)", "https://i.pinimg.com/564x/01/a0/64/01a064866c62da820a8dd591c21b5c7c.jpg"],
    ["Zenitsu (Demon Slayer)", "https://i.pinimg.com/564x/46/63/cb/4663cbd74f685235a381f26df6e0f89b.jpg"],
    ["Saiki (Saiki Kusuo)", "https://i.pinimg.com/564x/11/b7/b0/11b7b0be3fe65903ed99e25167522681.jpg"],
    ["Eren (SNK)", "https://i.pinimg.com/564x/25/b2/d6/25b2d6e5db030175f353de288d89aeb4.jpg"],
    ["Mikasa (SNK)", "https://i.pinimg.com/564x/91/16/1e/91161e935bc2d056a98fa461e1852c69.jpg"],
    ["Armin (SNK)", "https://i.pinimg.com/564x/c7/c9/54/c7c954dffb5eb40cc6b32bd1bc410c19.jpg"],
    ["Livaï (SNK)", "https://i.pinimg.com/564x/05/78/c5/0578c51ad9aac6b28af750fce4d49382.jpg"],
    ["Ymir (SNK)", "https://i.pinimg.com/564x/83/ac/33/83ac33404c03107634b44da7d191e591.jpg"],
    ["Historia (SNK)", "https://i.pinimg.com/564x/f3/5c/0e/f35c0e944c6045cf02628f5a57574681.jpg"],
    ["Jean (SNK)", "https://i.pinimg.com/564x/dd/78/7b/dd787bb64fc0cee9719d9ede322c5449.jpg"],
    ["Sasha (SNK)", "https://i.pinimg.com/564x/57/88/da/5788da1a3657a8fcfe2273eb3b71b77c.jpg"],
    ["Annie (SNK)", "https://i.pinimg.com/564x/1e/1b/a8/1e1ba80f7d4fd3aeb531fa3340c8a7d5.jpg"],
    ["Erwin (SNK)", "https://i.pinimg.com/564x/2e/34/79/2e347979ceae897f238c30e30f00ee4f.jpg"],
    ["Naegi (Danganronpa)", "https://i.pinimg.com/564x/f7/f8/58/f7f858bfdf2442687e7bdd0a900eef51.jpg"],
    ["Enoshima (Danganronpa)", "https://i.pinimg.com/564x/5f/71/52/5f7152b7ec109d587092d3844b5e8c3f.jpg"],
    ["Asahina (Danganronpa)", "https://i.pinimg.com/564x/69/34/8c/69348c3a5619585ba55178e848d5c506.jpg"],
    ["Kirigiri (Danganronpa)", "https://i.pinimg.com/564x/a1/bc/c0/a1bcc0e9072f9372d801b844555fd954.jpg"],
    ["Fukawa (Danganronpa)", "https://i.pinimg.com/564x/90/e7/58/90e75859831d6c253e642bad4306797c.jpg"],
    ["Celestia (Danganronpa)", "https://i.pinimg.com/564x/1c/47/72/1c477288bb1c7c58eb42bb8a61e3265a.jpg"],
    ["Togami (Danganronpa)", "https://i.pinimg.com/564x/64/38/25/64382554d1f55ede4538d7fdec319db5.jpg"],
    ["Dio (Jojo's BA)", "https://i.pinimg.com/564x/98/3c/4d/983c4df83d3d09a19f28eba452b06af6.jpg"],
    ["Jotaro (Jojo's BA)", "https://i.pinimg.com/564x/52/a6/ba/52a6ba79e3b618816f26a318a4e35fd9.jpg"],
    ["Kakiôin (Jojo's BA)", "https://i.pinimg.com/564x/b9/c2/f6/b9c2f64dbdb5fcf889812368718be28a.jpg"],
    ["Polnareff (Jojo's BA)", "https://i.pinimg.com/564x/54/77/8a/54778af723605a2ca6f12765a748593a.jpg"],
    ["Kaneki (Tokyo Ghoul)", "https://i.pinimg.com/564x/4d/5b/80/4d5b8097ddf72c51cdc4c96127559ccb.jpg"],
    ["Lize (Tokyo Ghoul)", "https://i.pinimg.com/564x/07/8c/3f/078c3f8f8e0424192426cfe7c1d7c28c.jpg"],
    ["Tôka (Tokyo Ghoul)", "https://i.pinimg.com/564x/8d/83/d7/8d83d7e2c6f674eb19c1063ddbe6a41a.jpg"],
    ["Uta (Tokyo Ghoul)", "https://i.pinimg.com/564x/b5/fa/74/b5fa74c4ffbd4038e8ba6a9866b8d880.jpg"],
    ["Nishiki (Tokyo Ghoul)", "https://i.pinimg.com/564x/22/79/0f/22790f8f5e48833c4d609b373c30ca35.jpg"],
    ["Hide (Tokyo Ghoul)", "https://i.pinimg.com/564x/72/27/a7/7227a7f904e058b30f9c029091668f28.jpg"],
    ["Tsukiyama (Tokyo Ghoul)", "https://i.pinimg.com/564x/4e/77/37/4e77375cd61b66caa6b43b90d1f92773.jpg"],
    ["Suzuya (Tokyo Ghoul)", "https://i.pinimg.com/564x/d5/59/0e/d5590e53012550e80c8e02e8443fe102.jpg"],
    ["Akira (Tokyo Ghoul)", "https://i.pinimg.com/564x/23/de/c4/23dec46e52e0e25f5459321c938bd81c.jpg"],
    ["Amon (Tokyo Ghoul)", "https://i.pinimg.com/564x/55/1e/6b/551e6ba7a79a758864288663957be89f.jpg"],
    ["Luffy (One Piece)", "https://i.pinimg.com/564x/6f/66/30/6f66309d4fb6946f515ab8a2c55733c5.jpg"],
    ["Zoro (One Piece)", "https://i.pinimg.com/564x/7a/b9/13/7ab91335818a1d85809de558dde324f3.jpg"],
    ["Nami (One Piece)", "https://i.pinimg.com/564x/50/d4/92/50d4924f3055230462cc60cad7f3b35a.jpg"],
    ["Sanji (One Piece)", "https://i.pinimg.com/564x/a5/bd/f5/a5bdf53ad36e678e2974b730eaf8f118.jpg"],
    ["Nico Robin (One Piece)", "https://i.pinimg.com/564x/33/05/99/3305999c1886d2ee9bfe77ff30828f32.jpg"],
    ["Ace (One Piece)", "https://i.pinimg.com/564x/d7/55/fb/d755fb0575871a404a98a04b9b247093.jpg"],
    ["Naruto", "https://i.pinimg.com/564x/38/65/ad/3865adc7ea94ca9fd5e1b0c375f30f7a.jpg"],
    ["Sasuke (Naruto)", "https://i.pinimg.com/564x/e8/8e/d4/e88ed44f38e078bcd1a203e98ed2d29f.jpg"],
    ["Itachi (Naruto)", "https://i.pinimg.com/564x/b0/c1/ca/b0c1ca08848f4626110313f3081707c5.jpg"],
    ["Kakashi (Naruto)", "https://i.pinimg.com/564x/37/2a/ca/372aca55019530baeb790f6d41e17610.jpg"],
    ["Edward (FMA)", "https://i.pinimg.com/564x/d1/6b/3d/d16b3d3cae5af37db55053dfc2f6994f.jpg"],
    ["Winry (FMA)", "https://i.pinimg.com/564x/b0/fb/0c/b0fb0cc60eecd07cb5b604050a0ca41b.jpg"],
    ["Sonic (One Punch Man)", "https://i.pinimg.com/564x/5a/aa/c5/5aaac550e62ad0e328e3c406f4429120.jpg"],
    ["Genos (One Punch Man)", "https://i.pinimg.com/564x/78/f3/86/78f386f3fbf545fecbacb8c3ad2683c0.jpg"],
    ["Saitama (One Punch Man)", "https://i.pinimg.com/564x/d3/5f/17/d35f1782b36a2628f70e6de6fb0f9359.jpg"],
    ["Shinichi (Detective Conan)", "https://i.pinimg.com/564x/93/a4/12/93a412f7150e0512eb7eca3557ff103e.jpg"],
    ["Ran (Detective Conan)", "https://i.pinimg.com/564x/20/e4/42/20e4423df3c8bdc43ef93a256fafd75d.jpg"],
    ["Hinata (Haikyuu)", "https://i.pinimg.com/564x/9b/7d/20/9b7d205a82322bd822e145094214a862.jpg"],
    ["Kageyama (Haikyuu)", "https://i.pinimg.com/564x/a1/55/ca/a155cadd2e8f77997490c122baec2020.jpg"],
    ["Kenma (Haikyuu)", "https://i.pinimg.com/564x/3b/ea/84/3bea84a11b7821445c993767600fc02f.jpg"],
    ["Nishinoya (Haikyuu)", "https://i.pinimg.com/564x/71/3c/90/713c905c3c06e67b51b3c89a38dd34b8.jpg"],
    ["Zero Two", "https://i.pinimg.com/564x/33/45/d5/3345d5287dcb80a5221808d714ce6290.jpg"]
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
