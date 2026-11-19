// Boreal Horizon - Bot meme We got X before GTA 6
const memes = [
  'we got GTA 6 launch-week contract before GTA 6',
  'we got Medan macet 3 jam before GTA 6',
  'we got skripsi kelar before GTA 6',
  'we got libur panjang before GTA 6',
  'we got gaji naik before GTA 6',
];
const pick = memes[Math.floor(Math.random()*memes.length)];
const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1080"><rect width="1080" height="1080" fill="#0b1220"/><text x="540" y="540" font-family="Arial" font-size="64" fill="white" text-anchor="middle">'+pick+'</text></svg>';
await Deno.writeTextFile('meme.svg', svg);
console.log('Generated:', pick);
