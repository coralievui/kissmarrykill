let gens= [
["Tom Holland", "https://i.pinimg.com/564x/1f/11/ec/1f11ecfc6e2464324db62583eedac088.jpg"],
["Thimotée Chalamet", "https://i.pinimg.com/564x/ee/1d/ab/ee1dab68eddea0a26d2857203d46c117.jpg"],
["Ryan Gosling", "https://i.pinimg.com/564x/2c/14/04/2c14042cd809f403b7aab28f6f6e5ef2.jpg"],
["Chris Hemsworth", "https://i.pinimg.com/564x/b4/78/1d/b4781d3d79fe3bbc44a88ba15405bc1e.jpg"],
["Tom Hiddleston", "https://i.pinimg.com/564x/1d/6d/f6/1d6df6fd3b56ae662be152986c0e3c11.jpg"],
["Edouard Baer", "https://i.pinimg.com/564x/f7/e1/ab/f7e1ab78d19d8aa933392c99063ce527.jpg"],
["Alain Chabat", "https://i.pinimg.com/564x/c6/11/cc/c611cc17c14c7facaf59401c5c4f8fa1.jpg"],
["David Tennant", "https://i.pinimg.com/564x/b7/d1/5a/b7d15af8a38b731384bea8da32f46ad8.jpg"],
["Michael Sheen", "https://i.pinimg.com/564x/6f/4b/d4/6f4bd4c1574053ca020373fbd875dcc4.jpg"],
["Ryan Reynolds", "https://i.pinimg.com/564x/e4/ee/9c/e4ee9c6ef9e082ad22bd3aa89db7afe2.jpg"],
["Jim Parsons", "https://i.pinimg.com/564x/74/3c/9c/743c9cddb68d1499fe3e36dc42a5bd52.jpg"],
["Andrew Scott", "https://i.pinimg.com/564x/14/92/49/14924987591e56b9869471ec9acaae25.jpg"],
["Robert Downey Jr", "https://i.pinimg.com/564x/31/3e/89/313e890db28affe2d55372e9f34b6ac0.jpg"],
["Zendaya", "https://i.pinimg.com/564x/c8/ec/a9/c8eca99ef8d63ed6e932e543c962b2bb.jpg"],
["Jim Carrey", "https://i.pinimg.com/564x/e6/5d/d6/e65dd6d033f64efc22762a2ce4a4b005.jpg"],
["Joaquin Phoenix", "https://i.pinimg.com/564x/ff/a6/79/ffa6792a7b1ce909f64efea92a6d3b28.jpg"],
["Michael J Fox", "https://i.pinimg.com/564x/64/6a/d9/646ad97c394bdda459d7fa48ef1040b7.jpg"],
["Léa Seydoux", "https://i.pinimg.com/564x/68/c1/36/68c1364af3e2368f7ddbf51610e72834.jpg"],
["Johnny Depp", "https://i.pinimg.com/564x/b2/d7/21/b2d721b29c087751a0d3d0aad7477c86.jpg"],
["Christopher Lloyd", "https://i.pinimg.com/564x/9f/53/5b/9f535b6810a477055ccef5ba6d9983c8.jpg"],
["Millie Bobby Brown", "https://i.pinimg.com/564x/51/2a/22/512a22dca8dc465ed6e4a74ac4eeb281.jpg"],
["Chris Evans", "https://i.pinimg.com/564x/ab/b8/8f/abb88fe4cc8e13fe7d49f1c56be8eccd.jpg"],
["Benedict Cumberbatch", "https://i.pinimg.com/564x/c2/a6/2d/c2a62dfaeaf58d65e0f45b309cb9f297.jpg"],
["Madelaine Petsch", "https://i.pinimg.com/564x/61/5f/05/615f05dd347edae1a0838a7a0d5d083d.jpg"],
["Elliot Paige", "https://i.pinimg.com/564x/c9/ce/fc/c9cefcf3e9834770449b35217107b359.jpg"],
["Ariana Grande", "https://i.pinimg.com/564x/61/30/94/613094e3d09d6b618ff6c5963ac6dd0e.jpg"],
["Matt Smith", "https://i.pinimg.com/564x/97/c4/33/97c433609d7bcd01a62d30203f77f095.jpg"],
["Elizabeth Gillies", "https://i.pinimg.com/564x/49/22/ce/4922cebaa3ff47de08d860babe19b0bb.jpg"],
["Blake Lively", "https://i.pinimg.com/564x/ba/21/3b/ba213bfbae732494495793a515d2ff3e.jpg"],
["The Rock", "https://i.pinimg.com/564x/23/a9/b3/23a9b346ef9fc69ef068f1b66e89d08f.jpg"],
["Josephine Langford", "https://i.pinimg.com/564x/30/94/56/30945687f36289bc455d6fd97c2efc92.jpg"],
["Jennifer Lawrence", "https://i.pinimg.com/564x/06/43/e5/0643e577a907ab3b624a8d0ce83dcba1.jpg"],
["Scarlett Johansson", "https://i.pinimg.com/564x/bd/63/d1/bd63d1466be956372998dcd338875f01.jpg"],
["Emma Watson", "https://i.pinimg.com/564x/0b/db/99/0bdb997bdb94b1e70d9f71ce500cf536.jpg"],
["Chris Pratt", "https://i.pinimg.com/564x/67/98/2f/67982f6a31af34fecbc250086cffa4be.jpg"],
["Eva Green", "https://i.pinimg.com/564x/66/ea/fb/66eafbfab8d5394ae9dc0bf3f2224aa4.jpg"],
["Collin Pharrell", "https://i.pinimg.com/564x/a9/94/32/a994325ef9d6f398430189425256760e.jpg"],
["Emma Mackey", "https://i.pinimg.com/564x/39/50/8c/39508c47caf5e6aa2656f7dcee7ad446.jpg"],
["Louis Partrige", "https://i.pinimg.com/564x/e6/6a/88/e66a883d36d8d8c377984641b4adb90b.jpg"],
["Tom Felton", "https://i.pinimg.com/564x/27/fb/6a/27fb6ae6d520762c79b5b9e2b64e58eb.jpg"],
["Robert Pattinson", "https://i.pinimg.com/564x/e2/8f/68/e28f686a1f34f1323e1961642896fdcf.jpg"],
["Ed Westwick", "https://i.pinimg.com/564x/bf/b9/44/bfb9449864db42c37a41afc42d412dcb.jpg"],
["Brad Pitt", "https://i.pinimg.com/564x/95/24/58/952458980db466c4ad21e09be6a2a16c.jpg"],
["Angelina Jolie", "https://i.pinimg.com/564x/c2/5d/71/c25d7191f3af4a59247e54b26e253621.jpg"],
["Will Smith", "https://i.pinimg.com/564x/88/05/0e/88050ecce8345ce7388dd514ee203264.jpg"],
["Leonardo Dicaprio", "https://i.pinimg.com/564x/91/25/cf/9125cf60e440d6d3915b2de4b6ec9b4c.jpg"],
["Karen Gillian", "https://i.pinimg.com/564x/d6/6c/f5/d66cf505aea34f7391f3948b17b45a27.jpg"],
["Tim Curry", "https://i.pinimg.com/564x/11/81/97/118197a7bf3383c512fcd13729008337.jpg"],
["Gal Gadot", "https://i.pinimg.com/564x/65/b0/6b/65b06b2dbdd2777e825e7b2baf318bb2.jpg"],
["Jennette Mc Curdy", "https://i.pinimg.com/564x/2c/ed/0b/2ced0b98f72b0aa37868be895cec8b4a.jpg"],
["Maggie Smith", "https://i.pinimg.com/564x/2e/a0/c7/2ea0c7ad4e385397b666e5a6e8cd988e.jpg"],
["Natalie Portman", "https://i.pinimg.com/564x/51/ad/f9/51adf9c81cf0f3480e0cc1c9d74cc593.jpg"],
["Noah Schnapp", "https://i.pinimg.com/564x/fe/95/9b/fe959bd2d6625f764efec6e6aa85e75d.jpg"],
["Adam Driver", "https://i.pinimg.com/564x/4a/29/88/4a29882c4db4c76fe7b3dc8e32c1be4d.jpg"],
["Cole Sprouse", "https://i.pinimg.com/564x/97/fb/b5/97fbb5448770da93f1ed579b714d83ab.jpg"],
["Chadwick Boseman", "https://i.pinimg.com/564x/f6/92/b2/f692b27411051dd01a4398c65e7c3714.jpg"],
["Rosa Salazar", "https://i.pinimg.com/564x/2a/c8/26/2ac82640ffcf8c5ea140b10b1758e32f.jpg"],
["Rachel McAdams", "https://i.pinimg.com/564x/30/7f/34/307f342ead25ea05ad3c2649c128375c.jpg"],
["Orlando Bloom", "https://i.pinimg.com/564x/2a/a4/5e/2aa45e2c7f8189f641b6ce2cc33c819f.jpg"],
["Franck Dubosc", "https://i.pinimg.com/564x/61/44/6c/61446c29dd015b595ef10cc57791d438.jpg"],
["Gérard Depardieu", "https://i.pinimg.com/564x/79/bb/3b/79bb3bb48780f45041d4a92fd40f63a4.jpg"],
["Anne Hathaway", "https://i.pinimg.com/564x/3a/e6/45/3ae645d81ffe1b59d7dcec5c89567784.jpg"],
["Helena Boham Carter", "https://i.pinimg.com/564x/29/e5/34/29e53492b9f0cdc160338e57d46605cc.jpg"],
["Mimi Mathy", "https://i.pinimg.com/564x/3a/ad/da/3aadda019e39bbe558f797b4c49894fe.jpg"],
["Nick Jonas", "https://i.pinimg.com/564x/28/f0/f1/28f0f113bb964e3fd246deadb5013aa3.jpg"],
["Demi Lovato", "https://i.pinimg.com/564x/c8/98/6c/c8986cadb545667314e40148d2473cb6.jpg"],
["Lady Gaga", "https://i.pinimg.com/564x/cf/b4/b5/cfb4b589e96985a275cdd3dc9ab983e3.jpg"],
["Bradley Cooper", "https://i.pinimg.com/564x/91/fa/8d/91fa8db38d6ab5d7d529c29e080cb2ae.jpg"],
["Rihanna", "https://i.pinimg.com/564x/5f/a5/97/5fa59705a81c9c9194ec4b2b43ee3663.jpg"],
["Tom Ellis", "https://i.pinimg.com/564x/20/a6/73/20a673e10dcad3f9409616202be48779.jpg"],
["Katherine Langford", "https://i.pinimg.com/564x/06/10/39/061039b9bc6804cee85c134dc28a63ee.jpg"],
["Miley Cyrus", "https://i.pinimg.com/564x/96/cc/a7/96cca787f1e8c94451f9507476290089.jpg"],
["Sabrina Carpenter", "https://i.pinimg.com/564x/ef/b1/6c/efb16ca2abdc9bb9ea1f6be7fce8d9f0.jpg"],
["Song Kang", "https://i.pinimg.com/564x/2a/e9/1d/2ae91dc76755509509709e2fa47fb4d3.jpg"],
["Cha Eunwoo", "https://i.pinimg.com/564x/12/eb/4c/12eb4c0e29a936fac2362a22d1bcd7fc.jpg"],
["Hwang In Yeop", "https://i.pinimg.com/564x/0d/90/50/0d9050316da056079d882ff8567f2c5d.jpg"],
["Moon Ga Young", "https://i.pinimg.com/564x/91/a9/1b/91a91bd13488d1fbbad2086bd0e0bbb4.jpg"],
["Lily James", "https://i.pinimg.com/564x/2f/ce/9b/2fce9b9abf5a60e296dc605483476d27.jpg"],
["Margot Robbie", "https://i.pinimg.com/564x/d5/d2/96/d5d296a30e862efe9a3622f28b09e17e.jpg"],
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
