let skor=0;const s=document.getElementById('skor');
document.getElementById('koin').onclick=()=>{skor+=10;s.textContent=String(skor).padStart(3,'0');
  try{const a=new AudioContext(),o=a.createOscillator(),g=a.createGain();o.type='square';o.frequency.value=880;o.frequency.setValueAtTime(1320,a.currentTime+.07);
  g.gain.value=.06;o.connect(g);g.connect(a.destination);o.start();o.stop(a.currentTime+.15)}catch(e){}};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.querySelectorAll('i').forEach(i=>i.style.width=i.dataset.v+'%');io.unobserve(e.target)}}),{threshold:.3});
document.querySelectorAll('.box').forEach(b=>io.observe(b));

document.getElementById('wa').addEventListener('click',()=>{skor+=50;s.textContent=String(skor).padStart(3,'0')});
