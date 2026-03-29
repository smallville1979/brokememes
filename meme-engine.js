// SKINT BUT SORTED — AUTO ROTATING MEME ENGINE
// Add new memes to this array. They rotate automatically every visit.

const MEMES = [
  {
    top: "WHY ARE YA PAYING FOR A WANK",
    bottom: "WHEN YA BROKE? 💀",
    sub: "seriously mate. they owe ya actual money.",
    color: "#FF1744"
  },
  {
    top: "ONLYFANS THIS MONTH: £29.99 😭",
    bottom: "BENEFITS YA NEVER CLAIMED: £1,400 😤",
    sub: "do the maths big boy.",
    color: "#FF4081"
  },
  {
    top: "SHE AIN'T THINKING ABOUT YA.",
    bottom: "THE GOVERNMENT IS. 💷",
    sub: "£19 billion unclaimed. some of it's yours.",
    color: "#FFD600"
  },
  {
    top: "GYM AT 6AM? DO ONE MATE. 💀",
    bottom: "CLAIM £90 A WEEK INSTEAD.",
    sub: "pot noodle > burpees. always.",
    color: "#FF1744"
  },
  {
    top: "3AM. BROKE. DOOM SCROLLING. 😭",
    bottom: "OR: £150 OFF YA BILLS. FREE.",
    sub: "warm home discount. they never told ya.",
    color: "#FF4081"
  },
  {
    top: "YA LAST £20 GONE ON ONLYFANS 💀",
    bottom: "FREE BOILER THO. GOVERNMENT PAYS.",
    sub: "ECO4 scheme. free. zero cost. just ask.",
    color: "#FFD600"
  },
  {
    top: "CLICKING FOR FREE NUDES AT 4AM 😂",
    bottom: "MATE. WE OWE YA ACTUAL MONEY.",
    sub: "entitledto.co.uk — 10 mins — free — sorted.",
    color: "#00E676"
  },
  {
    top: "SENDING FOOT PICS FOR £3 💀",
    bottom: "UNIVERSAL CREDIT: £90 A WEEK.",
    sub: "keep ya socks on big boy.",
    color: "#FF1744"
  },
  {
    top: "JAN DOING THAI BOXING AGAIN 😂",
    bottom: "JUST GET THE FAT INJECTIONS JAN.",
    sub: "we're all lazy tubs of lard. join the club. #sorted",
    color: "#FF4081"
  },
  {
    top: "ROMANCE SCAMMER SAID HE LOVED YA 💔",
    bottom: "CITIZENS ADVICE LOVE YA MORE. FREE.",
    sub: "0800 144 8848 — call them now.",
    color: "#FFD600"
  },
  {
    top: "SPENT £40 ON SCRATCH CARDS 💀",
    bottom: "£40 LEFT IN YA ACCOUNT. NICE.",
    sub: "meanwhile entitledto.co.uk is free and actually pays.",
    color: "#FF1744"
  },
  {
    top: "ELECTRIC RUNNING OUT AT 3AM ⚡",
    bottom: "CALL YA SUPPLIER. SAY EMERGENCY CREDIT.",
    sub: "they add it instantly. never go cold.",
    color: "#FFD600"
  }
];

// Pick random meme on each visit
function loadRandomMeme() {
  const idx = Math.floor(Math.random() * MEMES.length);
  const meme = MEMES[idx];
  const el = document.getElementById('rotating-meme');
  if (!el) return;
  el.innerHTML = `
    <div style="background:#111;border-top:4px solid ${meme.color};border-bottom:4px solid ${meme.color};padding:50px 24px;text-align:center;">
      <p style="font-family:'Bebas Neue',cursive;font-size:clamp(28px,7vw,56px);color:#fff;line-height:1;margin-bottom:12px;">${meme.top}</p>
      <p style="font-family:'Bebas Neue',cursive;font-size:clamp(24px,6vw,48px);color:${meme.color};line-height:1;margin-bottom:16px;">${meme.bottom}</p>
      <p style="font-size:clamp(14px,3vw,17px);color:rgba(255,255,255,0.6);margin-bottom:20px;">${meme.sub}</p>
      <a href="https://smallville1979.github.io/skintbutsorted" style="background:${meme.color};color:${meme.color === '#FFD600' ? '#000' : '#fff'};font-family:'Bebas Neue',cursive;font-size:clamp(18px,4vw,28px);padding:14px 36px;border-radius:8px;text-decoration:none;display:inline-block;letter-spacing:1px;">GET YA FREE MONEY →</a>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', loadRandomMeme);
