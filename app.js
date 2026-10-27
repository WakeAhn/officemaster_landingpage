const menu = document.querySelector('.menu');
const nav = document.querySelector('#navigation');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','메뉴 열기');}
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기');});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});document.querySelectorAll('.product').forEach(p=>p.hidden=button.dataset.filter!=='all'&&(button.dataset.filter==='ink'?p.dataset.kind!=='ink':p.dataset.type!==button.dataset.filter));}));
const dialog=document.querySelector('#inquiry');
document.querySelectorAll('[data-model]').forEach(b=>b.addEventListener('click',()=>{document.querySelector('#inquiry-model').textContent=b.dataset.model;const photo=b.closest('.product').querySelector('img');const large=document.querySelector('#inquiry-photo');large.src=photo.src;large.alt=photo.alt;dialog.showModal();}));
document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();});
document.querySelector('#copy-number').addEventListener('click',async()=>{const status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText('오피스마스터 02-1899-1809 / 잉크마니 02-400-7588, 010-3496-7588');status.textContent='전화번호를 복사했습니다.';}catch{status.textContent='오피스마스터 02-1899-1809 / 잉크마니 02-400-7588, 010-3496-7588 번호를 선택해 복사해 주세요.';}});
document.querySelector('#year').textContent=new Date().getFullYear();
