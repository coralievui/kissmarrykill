let gens = [
    ["Pr Layton", "https://i.pinimg.com/236x/f4/b7/09/f4b7095db6e190c5a2509ffcb12ddc14.jpg"],
    ["Mario", "https://i.pinimg.com/564x/22/9f/22/229f221c0819375972b61a23b935edc7.jpg"],
    ["Luigi", "https://i.pinimg.com/564x/b2/2c/b8/b22cb8a7d825e5a6432d70e4f6ad5bd4.jpg"],
    ["Princesse Peach", "https://i.pinimg.com/564x/ab/f3/aa/abf3aa9afde525d00112e7d15db0a8e9.jpg"],
    ["Princesse Daisy", "https://i.pinimg.com/564x/ea/20/8a/ea208ac9613c3202d507eb73473228d5.jpg"],
    ["Toad", "https://i.pinimg.com/564x/f2/8b/fc/f28bfc7bebcd8b54567ae8ad5424eb32.jpg"],
    ["Yoshi", "https://i.pinimg.com/564x/73/7b/b7/737bb75bcc31f320e6a7b0a49040138c.jpg"],
    ["Donkey Kong", "https://i.pinimg.com/564x/e4/fe/52/e4fe52f5ab4dd243dcaf4f83a2298c38.jpg"],
    ["Pac-Man", "https://i.pinimg.com/564x/35/3c/34/353c340ad56b7f0a97e44959df8b791c.jpg"],
    ["Zelda", "https://i.pinimg.com/564x/a1/17/66/a1176654f5877b10cc95b65a4c2c98c8.jpg"],
    ["Link", "https://i.pinimg.com/564x/be/26/73/be267311f0b4fbb41597734f86be021b.jpg"],
    ["Ghirahim", "https://i.pinimg.com/564x/e9/d3/0d/e9d30d64a72418fabeca31ff3bcc6dfe.jpg"],
    ["Luke", "https://i.pinimg.com/564x/f4/7e/1e/f47e1e7670738cc98c1383e1f4e9c1b2.jpg"],
    ["Katrielle Layton", "https://i.pinimg.com/564x/a7/50/6f/a7506fc720a8bef63264d078c720a988.jpg"],
    ["Ace Attorney", "https://i.pinimg.com/564x/95/65/88/956588528365db00ad6bc4c6a3ddbc5d.jpg"],
    ["Yuri", "https://i.pinimg.com/564x/ac/12/90/ac12904537fa2e9002ac8f0df32f3a7e.jpg"],
    ["Monika", "https://i.pinimg.com/564x/1c/27/4a/1c274ad67abea14228516d345e62e405.jpg"],
    ["Natsuki", "https://i.pinimg.com/564x/09/6f/9c/096f9ccc876fba18f2678c1894820dfd.jpg"],
    ["Sayori", "https://i.pinimg.com/564x/fb/91/b0/fb91b059e325e95c1c019269bd102781.jpg"],
    ["Lara Croft", "https://i.pinimg.com/564x/da/e4/4f/dae44fc6443ecc9cdb48aad417689228.jpg"],
    ["Tom Nook", "https://i.pinimg.com/564x/fb/8c/a6/fb8ca6f7d92d48c60f7dadecbdf83853.jpg"],
    ["Marie", "https://i.pinimg.com/564x/af/b1/f0/afb1f0a3c4d4f6765523b6aa11b860c8.jpg"],
    ["Kéké", "https://i.pinimg.com/564x/53/bc/92/53bc921f9491aa2619abe23c0d8d7019.jpg"],
    ["Kirby", "https://i.pinimg.com/564x/f6/9f/4a/f69f4a2bf43b3f48eb9a0d444ba177f1.jpg"],
    ["Chun Li", "https://i.pinimg.com/564x/a4/19/91/a41991e1ade4bd5b989efd57d69a53cb.jpg"],
    ["Ryu", "https://i.pinimg.com/564x/2c/14/a9/2c14a9d1e78d52e4607ec8eb56971549.jpg"],
    ["Vega", "https://i.pinimg.com/564x/60/dc/99/60dc99c6eaaa5c055ddf42bbd936e1c4.jpg"],
    ["Ken", "https://i.pinimg.com/564x/ca/17/2e/ca172ebd39792bbe33aad56a6bc49e92.jpg"],
    ["Cammy", "https://i.pinimg.com/564x/04/f5/7a/04f57af2d66d33d35180f57aa7a0acad.jpg"],
    ["Mii", "https://i.pinimg.com/564x/2d/fc/42/2dfc42411b768768a7752f8466e63f16.jpg"],
    ["Steve", "https://i.pinimg.com/564x/a8/cb/79/a8cb79a2bad5ddf7c4d4d1a16cfc8db5.jpg"],
    ["Samus", "https://i.pinimg.com/564x/74/c5/24/74c52407ca02fdc11c66c38bed57c5eb.jpg"],
    ["Sacha", "https://i.pinimg.com/564x/e4/c6/dd/e4c6dd8f72f97d7666af87799e3f27fc.jpg"],
    ["Pikachu", "https://i.pinimg.com/564x/ff/2b/f4/ff2bf4316e74dec25dd26a29a3c03471.jpg"],
    ["Rondoudou", "https://i.pinimg.com/564x/32/ab/b7/32abb79d0018186e26aa1a8919a4a898.jpg"],
    ["Bowser", "https://i.pinimg.com/564x/4e/74/08/4e7408c3372cbd8c2331a364a6b6eac1.jpg"],
    ["Pikmin", "https://i.pinimg.com/564x/86/56/a0/8656a0b7b5235af0cfdc1eef719f9180.jpg"],
    ["Mega Man", "https://i.pinimg.com/564x/77/6b/57/776b57a4914b986c3ba508586bd4a97c.jpg"],
    ["Bayonetta", "https://i.pinimg.com/564x/a4/a1/eb/a4a1eb16a1c68978d3f77900cb15e4f4.jpg"],
    ["Ganondorf", "https://i.pinimg.com/564x/0d/64/b9/0d64b9e40ff392661e432dce29156d8c.jpg"],
    ["Pit", "https://i.pinimg.com/564x/52/0b/12/520b1224c684749b05ab88b5cd8890b2.jpg"],
    ["Sonic", "https://i.pinimg.com/564x/cd/4a/8a/cd4a8a99b17ec5a7c92cea0d7eca08fb.jpg"],
    ["Inkling", "https://i.pinimg.com/564x/7a/98/c5/7a98c54bf23008a4639bf54b9bfb1811.jpg"],
    ["Mewtwo", "https://i.pinimg.com/564x/31/94/6c/31946c1930738d848c0bda35f343ec24.jpg"],
    ["Rosalina", "https://i.pinimg.com/564x/10/01/76/100176193a6d901307018c852309d01e.jpg"],
    ["Rayman", "https://i.pinimg.com/564x/0d/a2/40/0da2404e9f8352ce88c16db1ddcd08fc.jpg"],
    ["Adibou", "https://i.pinimg.com/564x/27/c1/0b/27c10bfbb3224772133c2b77312520a7.jpg"],
    ["Kassandra", "https://i.pinimg.com/564x/e9/b1/e4/e9b1e4687726ec37f59671f37935f092.jpg"],
    ["Sora", "https://i.pinimg.com/564x/91/99/b3/9199b39e596c6c613179c2cb0cb0a7c9.jpg"],
    ["Riku", "https://i.pinimg.com/564x/36/38/22/3638224a2ad03b5081000716685fb8d4.jpg"],
    ["Mickey Mouse", "https://i.pinimg.com/564x/88/e0/f1/88e0f1fa9a78760acadd04ee7128e3ba.jpg"],
    ["Donald Duck", "https://i.pinimg.com/564x/56/01/86/56018628d5ed272a4f720a861b4ef4bf.jpg"],
    ["Dingo", "https://i.pinimg.com/564x/80/b5/40/80b5403997b76f6651b0e80139b116ed.jpg"],
    ["Ela", "https://i.pinimg.com/564x/fc/0b/39/fc0b39b35cd1da7b417284fc700c8bc0.jpg"],
    ["Sonia Gothik", "https://i.ibb.co/tZNQcfv/Sonia-Gothik-Les-Sims-4.png"],
    ["Arthur Morgan", "https://i.pinimg.com/564x/c1/b1/82/c1b182102845695eaa0d738125319e72.jpg"],
    ["Tifa", "https://i.pinimg.com/564x/9d/a7/1b/9da71b40a8b3f796f46c6826e8267c4a.jpg"],
    ["Cloud", "https://i.pinimg.com/564x/cf/22/12/cf2212afc2f31a39dd04fadc3d057f52.jpg"],
    ["Foxy", "https://i.pinimg.com/564x/1c/b0/34/1cb0341f032a281f2c71524a39ca8c74.jpg"],
    ["Freddy", "https://i.pinimg.com/564x/31/c3/2b/31c32b80a284c88764553547d77900ac.jpg"],
    ["Bonnie", "https://i.pinimg.com/564x/8f/c7/10/8fc7105358901a140da778eabfee195d.jpg"]
    ["Sans","https://i.pinimg.com/564x/7a/77/29/7a7729833ca64892ed1840c3eef10700.jpg"]
    ["Flowey","https://i.pinimg.com/564x/71/08/d2/7108d2243de04ab3fa24cdc5a858a0e7.jpg"]
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
