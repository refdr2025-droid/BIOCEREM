// Scroll reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.sec h2,.card,.steps li,.chips,.impact').forEach(el=>{el.classList.add('reveal');io.observe(el)});
// Count-up numbers
const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target,t=+el.dataset.n;let n=0;
const id=setInterval(()=>{n++;el.textContent=n;if(n>=t)clearInterval(id)},40);co.unobserve(el)}),{threshold:.6});
document.querySelectorAll('[data-n]').forEach(el=>co.observe(el));
// Demo dashboard (simulated data, not real sensors)
const $=id=>document.getElementById(id);let stressed=false;
function render(s,ph,m,npk,t){$('score').textContent=s;$('ph').textContent=ph;$('moist').textContent=m+'%';$('npk').textContent=npk;$('temp').textContent=t+'°C';
$('ring').style.strokeDashoffset=327*(1-s/100);$('ring').style.stroke=s<60?'#e0533d':'#1f6b45';
$('alert').className='alert'+(s<60?' bad':'');
$('alert').textContent=s<60?'⚠️ Moisture stress detected. Irrigate block now.':'✅ All good. Next irrigation in 14 hours.'}
function tick(){const r=(a,b)=>a+Math.random()*(b-a);
if(stressed)render(Math.round(r(44,54)),r(7.1,7.5).toFixed(1),Math.round(r(14,19)),'26·14·19',Math.round(r(33,36)));
else render(Math.round(r(84,92)),r(6.0,6.4).toFixed(1),Math.round(r(38,45)),'32·18·24',Math.round(r(25,27)))}
$('stress').onclick=()=>{stressed=!stressed;$('stress').textContent=stressed?'Back to normal':'Simulate drought stress';tick()};
tick();setInterval(tick,2500);
