const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");
const d1Inp = document.getElementById("d1Inp");
const d2Inp = document.getElementById("d2Inp");
const d1h = document.getElementById("d1h");
const d1l = document.getElementById("d1l");
const d1w = document.getElementById("d1w");
const d1a = document.getElementById("d1a");
const d2h = document.getElementById("d2h");
const d2l = document.getElementById("d2l");
const d2w = document.getElementById("d2w");
const d2a = document.getElementById("d2a");
const cpy = document.getElementById("cpyBtn");
const clr = document.getElementById("clrBtn");
cpy.addEventListener("click", () => {
  let message = `__**Battle of the Week**__
-# <@&1008706265200984144>
## ${d1Inp.value} vs ${d2Inp.value}
**${d1Inp.value}**
- size: ${d1h.value || 'no value provided'} x ${d1l.value || 'no value provided'}
- mass: ${d1w.value || 'no value provided'}
- abilities: ${d1a.value || 'no value provided'}

**${d2Inp.value}**
- size: ${d2h.value || 'no value provided'} x ${d2l.value || 'no value provided'}
- mass: ${d2w.value || 'no value provided'}
- abilities: ${d2a.value || 'no value provided'}`;
  navigator.clipboard.writeText(message);
  cpy.innerText = "Copied to Clipboard";
});
d1Inp.addEventListener("input", () => {
  d1.textContent = d1Inp.value;
});

d2Inp.addEventListener("input", () => {
  d2.textContent = d2Inp.value;
});
clr.addEventListener("click", () => {
  d1Inp.value = "";
  d2Inp.value = "";
  d1h.value = "";
  d1l.value = "";
  d1w.value = "";
  d1a.value = "";
  d2h.value = "";
  d2l.value = "";
  d2w.value = "";
  d2a.value = "";
  d2.textContent = "Dino 2";
  d1.textContent = "Dino 1";
});
