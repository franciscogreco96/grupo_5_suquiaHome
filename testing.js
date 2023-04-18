
const hash = bcryptjs.hashSync("Belgranodemivida", 10);
console.log(hash);
console.log(bcryptjs.compareSync("Belgranodemivida", hash));

