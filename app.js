const hugotQuote = document.querySelector('.hugot-quote');
const btn = document.querySelector('.btn');

let hugotQuotes = ["Bahalag gutom basta dili uhaw - silingan namo nagpalit ug tanduay",
"If it gives you stress more than happiness, fuck it. Better be single than miserable - Dave Uwu",
"Kung di ka magiging akin, mamatay ka na lang",
"Masakit ang maiwan, pero mas masakit ang manatili sa isang relasyong alam mong ikaw na lang ang nagmamahal",
"Minsan nakakatamad na din magseryoso. Lalo na’t parati ka nalang niloloko.",
"Mahal mo kasi maputi? It’s not love, it’s Dove!",
"Wag kang magpakatanga sa taong binabalewala ka",
"Pwede ba tayong magkunwaring mahal natin ang isat-isa?? Tapos totohanin na lang natin pag-naniwala na sila",
"Ang mag syota daw ay parang presyo ng bagong model na cellphone. Sa una nagmamahalan tapos di magtatagal magmumurahan!",
"Sa panahon ngayon, bihira na yung babaeng kinakasal muna bago mabuntis",
"Hindi ko naman hinihiling na ako ang unahin mo. Ayoko lang maramdaman na parang wala lang ako sayo."];


btn.addEventListener("click", () => {
    console.log(Math.floor(Math.random(hugotQuotes[0]) * hugotQuotes.length));
})

console.log(hugotQuotes.length);


