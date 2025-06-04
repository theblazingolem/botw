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
cpy.addEventListener("click", () => {
  let message = `__**Battle of the Week**__
-# <@&1008706265200984144>
## ${d1Inp.value} vs ${d2Inp.value}
**${d1Inp.value}**
size: ${d1h.value} x ${d1l.value}
mass: ${d1w.value}
abilities: ${d1a.value}

**${d2Inp.value}**
size: ${d2h.value} x ${d2l.value}
mass: ${d2w.value}
abilities: ${d2a.value}`;
  navigator.clipboard.writeText(message);
  cpy.innerText = "Copied to Clipboard";
});
d1Inp.addEventListener("input", () => {
  d1.textContent = d1Inp.value;
});

d2Inp.addEventListener("input", () => {
  d2.textContent = d2Inp.value;
});
/*
  {
  name:'',
  type: '',
  sizeClass: ,
  height: ,
  length: ,
  weight: ,
  weightUnit: ''
  }
*/
