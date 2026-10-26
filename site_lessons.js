
// --- COMPILED lesson_restore.js --- 
/*
 * Standard Model Lab V4: original-design-aligned teaching animations.
 * Built on the verified V3 scientific text. Overrides four renderers only.
 * Intent: restore vivid comparisons while separating model output from analogy.
 */
(function () {
'use strict';
const UI = {
  higgsA: "\u4e09\u6761\u8f68\u9053\u5c55\u793a\u4e0d\u540c\u53d1\u5c04\u6761\u4ef6\uff1a\u5149\u5b50\u4ee5 c \u4f20\u64ad\uff0c\u7535\u5b50\u548c\u9876\u5938\u514b\u5206\u522b\u8bbe\u7f6e\u521d\u901f\u5ea6\u3002\u5feb\u6162\u4e0d\u4ee3\u8868\u5e0c\u683c\u65af\u573a\u963b\u529b\u3002",
  higgsB: "\u540c\u52a8\u91cf\u5bf9\u6bd4\uff1a\u8bbe\u4e09\u8005\u52a8\u91cf\u5927\u5c0f\u76f8\u540c\uff0c\u901f\u5ea6\u7531\u76f8\u5bf9\u8bba\u80fd\u91cf\u5173\u7cfb\u8ba1\u7b97\uff1b\u9876\u5938\u514b\u5728\u6b64\u6761\u4ef6\u4e0b\u51e0\u4e4e\u4e0d\u52a8\u3002",
  higgsLaunch: "\u8bbe\u5b9a\u4e0d\u540c\u53d1\u5c04\u901f\u5ea6",
  higgsSame: "\u540c\u52a8\u91cf\u5b9a\u91cf\u5bf9\u7167",
  higgsMomentum: "\u5171\u540c\u52a8\u91cf",
  higgsCaveat: "\u901f\u5ea6\u53d6\u51b3\u4e8e\u8d28\u91cf\u548c\u52a8\u91cf\uff0c\u5e0c\u683c\u65af\u8026\u5408\u4e0d\u4ea7\u751f\u6469\u64e6\u3002\u9876\u5938\u514b\u5bff\u547d\u6781\u77ed\uff0c\u8fd9\u91cc\u53ea\u4f5c\u77ac\u65f6\u6982\u5ff5\u5bf9\u7167\u3002",
  higgsLane: "\u53d1\u5c04\u901f\u5ea6",
  higgsCoupling: "\u7d2b\u8272\u9ad8\u4eae\u4ec5\u793a\u610f\u8026\u5408\u5f3a\u5f31\uff0c\u4e0d\u662f\u573a\u7684\u53d8\u5f62\u6216\u963b\u529b\u3002",
  higgsPhoton: "\u5149\u5b50",
  higgsElectron: "\u7535\u5b50",
  higgsTop: "\u9876\u5938\u514b",
  noetherTitle: "\u8bfa\u7279\u5b9a\u7406\uff1a\u5bf9\u79f0\u6027\u7684\u7ec7\u5e03\u673a",
  noetherSubtitle: "\u6539\u53d8\u5b9e\u9a8c\u7684\u4f4d\u7f6e\u3001\u65b9\u5411\u6216\u5f00\u59cb\u65f6\u523b\uff0c\u68c0\u9a8c\u89c4\u5f8b\u662f\u5426\u4f9d\u8d56\u8fd9\u4e9b\u9009\u62e9",
  noetherTranslation: "\u7a7a\u95f4\u5e73\u79fb",
  noetherRotation: "\u7a7a\u95f4\u65cb\u8f6c",
  noetherTime: "\u65f6\u95f4\u5e73\u79fb",
  noetherLeft: "\u5b9e\u9a8c\u63a7\u5236",
  noetherCenter: "\u52a8\u753b\u5b9e\u9a8c",
  noetherRight: "\u5b88\u6052\u91cf\u8bfb\u6570",
  noetherShift: "\u79fb\u52a8\u6574\u5957\u5b9e\u9a8c",
  noetherAngle: "\u65cb\u8f6c\u6574\u4e2a\u5b9e\u9a8c",
  noetherClock: "\u6539\u53d8\u5b9e\u9a8c\u8d77\u59cb\u65f6\u95f4",
  noetherExternal: "\u5f15\u5165\u5916\u754c\u5f71\u54cd",
  noetherPlay: "\u6682\u505c\u6f14\u793a",
  noetherResume: "\u7ee7\u7eed\u64ad\u653e",
  noetherReset: "\u91cd\u7f6e",
  noetherMomentum: "\u603b\u52a8\u91cf",
  noetherAngular: "\u89d2\u52a8\u91cf",
  noetherEnergy: "\u673a\u68b0\u80fd",
  noetherField: "\u56fa\u5b9a\u5916\u573a\u4e2d\u5fc3",
  noetherNoForce: "\u4e24\u4e2a\u7b49\u8d28\u91cf\u5c0f\u7403\u7684\u7406\u60f3\u5f39\u6027\u78b0\u649e\uff1b\u6574\u4f53\u5e73\u79fb\u4e0d\u6539\u53d8\u78b0\u649e\u89c4\u5f8b\u3002",
  noetherForce: "\u56fa\u5b9a\u4f4d\u7f6e\u7684\u5916\u573a\u5bf9\u4e24\u7403\u7cfb\u7edf\u65bd\u529b\uff1a\u603b\u52a8\u91cf\u53ef\u53d8\u5316\uff0c\u5b8c\u6574\u7cfb\u7edf\u5e94\u5305\u542b\u5916\u573a\u6765\u6e90\u3002",
  noetherNoTorque: "\u4e2d\u5fc3\u529b\u4f7f\u8f68\u9053\u7b49\u65f6\u626b\u8fc7\u76f8\u7b49\u9762\u79ef\uff1b\u65cb\u8f6c\u5b9e\u9a8c\u65b9\u5411\u4e0d\u6539\u53d8\u89d2\u52a8\u91cf\u5927\u5c0f\u3002",
  noetherTorque: "\u5916\u754c\u9a71\u52a8\u6539\u53d8\u7269\u4f53\u6cbf\u692d\u5706\u8def\u5f84\u7684\u8fd0\u52a8\u901f\u5ea6\uff0c\u9700\u8981\u5916\u529b\u77e9\uff0c\u4e5f\u53ef\u80fd\u9700\u8981\u989d\u5916\u7684\u7ea6\u675f\u529b\uff1b\u89d2\u52a8\u91cf\u53ca\u7b49\u65f6\u626b\u9762\u79ef\u968f\u4e4b\u53d8\u5316\u3002",
  noetherNoTime: "\u53c2\u6570\u4e0d\u968f\u7edd\u5bf9\u65f6\u95f4\u53d8\u5316\uff0c\u5355\u6446\u52a8\u80fd\u4e0e\u52bf\u80fd\u4ea4\u6362\uff0c\u603b\u673a\u68b0\u80fd\u8fd1\u4f3c\u5b88\u6052\u3002",
  noetherTimeDrive: "\u5916\u754c\u5468\u671f\u8c03\u5236\u91cd\u529b\u53c2\u6570\uff0c\u5355\u6446\u4e0e\u5916\u90e8\u88c5\u7f6e\u4ea4\u6362\u80fd\u91cf\uff1b\u5e76\u975e\u603b\u80fd\u91cf\u5b88\u6052\u5f8b\u5931\u6548\u3002",
  noetherNote: "\u8bfa\u7279\u5b9a\u7406\u8981\u6c42\u4f5c\u7528\u91cf\u5177\u6709\u76f8\u5e94\u8fde\u7eed\u5bf9\u79f0\u6027\uff1b\u4ec5\u4fee\u6539\u753b\u9762\u7684\u5750\u6807\u8f74\u5e76\u4e0d\u8db3\u4ee5\u8bc1\u660e\u5b9a\u7406\u3002",
  noetherAudit: "\u672c\u6f14\u793a\u4f7f\u7528\u660e\u786e\u7b80\u5316\u6a21\u578b\uff0c\u5355\u4f4d\u4ec5\u4f9b\u6a21\u578b\u5185\u90e8\u6bd4\u8f83\uff1b\u5916\u754c\u5f71\u54cd\u6a21\u5f0f\u4e2d\u4e0d\u628a\u5b50\u7cfb\u7edf\u5f53\u4f5c\u95ed\u5408\u7cfb\u3002",
  noetherArea: "\u7b49\u65f6\u626b\u9762\u79ef",
  action: "\u4f5c\u7528\u91cf\u7684\u8fde\u7eed\u5bf9\u79f0\u6027",
  actionTag: "\u53d8\u6362\u4e0b\u4e0d\u53d8\uff08\u5141\u8bb8\u8fb9\u754c\u9879\uff09",
  actionBridge: "\u56e0\u6b64\u51fa\u73b0\u5b88\u6052\u91cf"
};

function v4Canvas(canvas, width, height) {
  const box=canvas.getBoundingClientRect();
  const dpr=Math.min(window.devicePixelRatio || 1,2);
  const w=width || box.width, h=height || box.height;
  const pw=Math.max(1,Math.round(w*dpr)),ph=Math.max(1,Math.round(h*dpr));
  if (canvas.width!==pw || canvas.height!==ph) {canvas.width=pw;canvas.height=ph;}
  const ctx=canvas.getContext('2d');ctx.setTransform(dpr,0,0,dpr,0,0);
  return {ctx,w,h};
}
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
function line(ctx,x1,y1,x2,y2,color='#fff',width=1){ctx.strokeStyle=color;ctx.lineWidth=width;ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke();}
function dot(ctx,x,y,r,color){ctx.fillStyle=color;ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();}
function text(ctx,s,x,y,color='#e4e9fb',size=13,align='left'){ctx.font=`${size}px system-ui,sans-serif`;ctx.textAlign=align;ctx.fillStyle=color;ctx.fillText(s,x,y);}

// Keep the original four-force 2 x 2 comparison and its four illustrative animations.
// Crucially, the canvas is out of layout flow and the parent has an explicit size.
window.initHubCanvas = function (container, drawFn) {
  container.replaceChildren();
  const canvas=document.createElement('canvas');
  canvas.style.cssText='position:absolute;left:0;top:0;display:block;width:100%;height:100%;';
  container.appendChild(canvas);
  let t0=performance.now();
  function render(time){
    if(currentView!=='forces'||!canvas.isConnected) return;
    const box=container.getBoundingClientRect();
    const width=Math.max(1,box.width), height=Math.max(1,box.height);
    const {ctx}=v4Canvas(canvas,width,height);
    ctx.clearRect(0,0,width,height);
    drawFn(ctx,width,height,(time-t0)/1000);
    safeRequestAnimationFrame(render);
  }
  safeRequestAnimationFrame(render);
};

// Restore meaningful differences in the three visible tracks. For the first
// mode, different INITIAL VELOCITIES are set by different sources, not by Higgs drag.
// For the comparison mode the same momentum is used and speed is derived.
window.renderHiggs = function () {
  const stage=document.getElementById('higgs-stage');if(!stage)return;
  stage.innerHTML='';stage.style.position='relative';stage.style.overflow='hidden';stage.style.background='#050914';stage.setAttribute('aria-label','原版三轨道速度差异示意：光子、电子、顶夸克按预设速度运动，运动速度不是希格斯场造成的摩擦减速。');
  const canvas=document.createElement('canvas');canvas.style.cssText='position:absolute;inset:0;display:block;width:100%;height:100%;';stage.appendChild(canvas);
  const bar=document.createElement('div');bar.className='higgs-v4-toolbar';stage.appendChild(bar);
  const btnLaunch=document.createElement('button'),btnSame=document.createElement('button');
  btnLaunch.textContent=UI.higgsLaunch;btnSame.textContent=UI.higgsSame;
  bar.append(btnLaunch,btnSame);
  const btnCoupling=document.createElement('button');btnCoupling.textContent='◎ 只看场耦合';bar.appendChild(btnCoupling);
  let freezeMotion=false;btnCoupling.addEventListener('click',()=>{freezeMotion=!freezeMotion;btnCoupling.classList.toggle('active',freezeMotion);btnCoupling.textContent=freezeMotion?'▶ 恢复位移':'◎ 只看场耦合';stage.dataset.v9CouplingOnly=String(freezeMotion);});
  const readouts=document.createElement('div');readouts.className='higgs-v4-readouts';stage.appendChild(readouts);
  const vals=['','',''].map(()=>{const s=document.createElement('span');readouts.appendChild(s);return s;});
  const note=document.createElement('div');note.className='higgs-v4-summary';stage.appendChild(note);
  const labels=[UI.higgsPhoton,UI.higgsElectron,UI.higgsTop];
  const colors=['#fcd34d','#4ecdc4','#ff6b6b'];
  const glowR=[0,46,82];
  const massesMeV=[0,0.511,173000];
  const higgsSubtitle=document.querySelector('#view-matter-higgs .higgs-header .subtitle');
  const heading=document.querySelector('#view-matter-higgs .higgs-header');
  if(heading)heading.querySelector('.v9-higgs-chain')?.remove();
  note.remove();const layout=document.querySelector('#view-matter-higgs .higgs-layout');if(layout){layout.insertAdjacentElement('afterend',note);note.classList.add('v9-higgs-under-note');}
  let mode='launch',last=0;
  const positions=[0.13,0.13,0.13];
  function speeds(){
    if(mode==='launch')return [1,1/3,1/24]; // original relative speeds 12:4:0.5; preset motion, not Higgs friction
    const momentum=0.5; // same p=0.5 MeV/c; explicit model input
    return massesMeV.map(m=>m===0?1:momentum/Math.hypot(momentum,m));
  }
  function setMode(next){mode=next;positions.fill(0.13);last=0;
    btnLaunch.classList.toggle('active',mode==='launch');btnSame.classList.toggle('active',mode==='same');
    note.textContent=mode==='launch'?'光晕只表示耦合强弱，不表示减速。':'同动量对照：运动快慢取决于质量与动量。';
    // Original subtitle is retained; mode-specific scientific detail stays out of the title.
    stage.dataset.v4Mode=mode;
  }
  btnLaunch.addEventListener('click',()=>setMode('launch'));
  btnSame.addEventListener('click',()=>setMode('same'));
  setMode('launch');
  function render(time){
    if(currentView!=='higgs'||!canvas.isConnected)return;
    const {ctx,w,h}=v4Canvas(canvas);
    const dt=last?clamp((time-last)/1000,0,0.06):0;last=time;
    ctx.fillStyle='#040815';ctx.fillRect(0,0,w,h);
    const lanes=[0.2,0.49,0.78],vel=speeds();
    const top=Math.max(78,h*.15),bottom=Math.max(top+95,h-44);
    const ys=lanes.map(v=>top+(bottom-top)*(v-.2)/.58);
    // A fixed field texture: activity changes with illustrative coupling, not force.
    const spacing=25;
    for(let x=13;x<w;x+=spacing)for(let y=12;y<h;y+=spacing){
      const drift=Math.sin((x+y)*.04+time*.001)*.48;
      dot(ctx,x,y+drift,1.1,'rgba(61,107,190,.29)');
    }
    // V10: coupling is encoded by a stationary LANE-WIDE field texture.
    // It is emphatically not viscous drag, so the texture has zero dependence
    // on the chosen particle speed or distance travelled.
    ys.forEach((y,i)=>{
      const alpha=[.05,.17,.58][i],count=i===0?2:i===1?7:19;
      for(let k=0;k<count;k++){
        const fx=30+(k+.5)*(w-60)/count;
        const wave=Math.sin(time*.0016+k*.72);
        ctx.save();ctx.globalAlpha=alpha*(.72+.28*wave);
        const glow=ctx.createRadialGradient(fx,y,1,fx,y,i===2?21:12);
        glow.addColorStop(0,'#d9a3ff');glow.addColorStop(.35,'#9853da55');glow.addColorStop(1,'#9853da00');
        ctx.fillStyle=glow;ctx.fillRect(fx-24,y-24,48,48);
        ctx.restore();
      }
    });
    vel.forEach((ratio,i)=>{
      const y=ys[i], r=glowR[i];
      if(!freezeMotion)positions[i]+=(ratio*205*dt)/Math.max(w-88,1);
      if(positions[i]>1.12)positions[i]=-0.06;
      const x=42+positions[i]*(w-88);
      const highlight=i===0?0.0:(i===1?0.46:0.95);
      if(highlight){
        const halo=ctx.createRadialGradient(x,y,3,x,y,r);
        halo.addColorStop(0,`rgba(163,93,249,${highlight*.34})`);
        halo.addColorStop(1,'rgba(163,93,249,0)');
        ctx.fillStyle=halo;ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();
        // Pulsing neighbouring FIELD POINTS encode coupling strength, not force or slowing.
        const count=i===1?3:9;
        for(let k=0;k<count;k++){const theta=k*Math.PI*2/count+0.34;const nr=(i===1?23:38)+5*Math.sin(time*.002+k);const nx=x+Math.cos(theta)*nr,ny=y+Math.sin(theta)*nr;
          ctx.shadowColor='#bc81ff';ctx.shadowBlur=i===1?5:13;dot(ctx,nx,ny,(i===1?2.2:3.7)*(0.75+.25*Math.sin(time*.005+k)),'rgba(192,134,255,.82)');ctx.shadowBlur=0;
        }
        for(let k=1;k<=2;k++){ctx.strokeStyle=`rgba(171,109,254,${highlight*.33/k})`;ctx.lineWidth=1.4;ctx.beginPath();ctx.arc(x,y,(k*14+time*.02)%Math.max(r,18),0,Math.PI*2);ctx.stroke();}
      }
      line(ctx,14,y,w-14,y,i===0?'#746c392a':i===1?'#245c5b42':'#56283351',1);
      line(ctx,x-21*ratio,y,x,y,colors[i],i===0?2.5:1.6);
      ctx.shadowBlur=15;ctx.shadowColor=colors[i];dot(ctx,x,y,i===2?8:6,colors[i]);ctx.shadowBlur=0;
      text(ctx,labels[i],16,y-12,colors[i],12);
      text(ctx,['无直接质量耦合','极弱耦合 · 微光','强耦合 · 强光晕'][i],16,y+23,i===0?'#a1afc7':'#d0aeff',11);
      let vlabel=ratio>=.99999?'1.000 c':ratio>=.01?ratio.toFixed(3)+' c':ratio.toExponential(2)+' c';
      vals[i].textContent=vlabel;
      vals[i].style.top=(y-12)+'px';
    });
    stage.dataset.v9CouplingVisual='lane-wide-stationary-field-points-and-pulses';
    stage.dataset.v10CouplingIndependentOfSpeed='true';
    stage.dataset.v4Velocities=vel.map(v=>v.toPrecision(7)).join(',');
    stage.dataset.v13OriginalSpeedRatio=mode==='launch'?'24:8:1':'same-momentum';
    safeRequestAnimationFrame(render);
  }
  safeRequestAnimationFrame(render);
};

// Original loom narrative retained: slider + external condition + physics + readout.
window.renderSymmetry = function () {
  const stage=document.getElementById('view-symmetry');if(!stage)return;
  stage.style.cssText='display:block;width:100%;height:auto;overflow:visible;';
  stage.replaceChildren();
  const root=document.createElement('div');root.className='noether-v4-shell';stage.appendChild(root);
  root.innerHTML=`
    <header class="noether-v4-heading"><h2>${UI.noetherTitle}</h2><p>${UI.noetherSubtitle}</p></header>
    <nav class="noether-v4-tabs"></nav>
    <section class="noether-v4-machine">
      <div class="noether-v4-label">NOETHER LOOM / SYMMETRY &amp; CONSERVATION</div>
      <div class="noether-v4-columns">
        <div class="noether-v4-panel noether-v4-controls">
          <h3>${UI.noetherLeft}</h3>
          <label class="noether-v4-slider-label"><span></span><input type="range" min="-100" max="100" step="1" value="0"><output>0</output></label>
          <label class="noether-v4-checkbox"><input type="checkbox"><span>${UI.noetherExternal}</span></label>
          <div class="noether-v4-actions"><button class="noether-v4-pause">${UI.noetherPlay}</button><button class="noether-v4-reset">${UI.noetherReset}</button></div>
        </div>
        <div class="noether-v4-panel"><h3>${UI.noetherCenter}</h3><canvas class="noether-v4-canvas" width="480" height="315"></canvas></div>
        <div class="noether-v4-causal"><strong>\u0394S = 0</strong><small>${UI.action}<br>${UI.actionTag}</small><span>\u27f6</span><small>${UI.actionBridge}</small></div>
        <div class="noether-v4-panel"><h3>${UI.noetherRight}</h3><div class="noether-v4-metric-label"></div><div class="noether-v4-metric">0</div><div class="noether-v4-metric-unit"></div><canvas class="noether-v4-graph" width="210" height="65"></canvas></div>
      </div>
    </section>
    <div class="noether-v4-notes"><div class="noether-v4-lesson"></div><div class="noether-v4-boundary" style="margin-top:7px;color:#96a6c9"></div></div>`;
  const $=s=>root.querySelector(s);
  const tabs=$('.noether-v4-tabs'),scene=$('.noether-v4-canvas'),graph=$('.noether-v4-graph');
  const chk=$('.noether-v4-checkbox input'),slider=$('input[type=range]');
  const metric=$('.noether-v4-metric'),unit=$('.noether-v4-metric-unit'),label=$('.noether-v4-metric-label');
  const lesson=$('.noether-v4-lesson');
  $('.noether-v4-boundary').textContent=UI.noetherNote+' '+UI.noetherAudit;
  const modes=[UI.noetherTranslation,UI.noetherRotation,UI.noetherTime];
  const controls=[UI.noetherShift,UI.noetherAngle,UI.noetherClock];
  const metrics=[UI.noetherMomentum,UI.noetherAngular,UI.noetherEnergy];
  const descriptions=[[UI.noetherNoForce,UI.noetherForce],[UI.noetherNoTorque,UI.noetherTorque],[UI.noetherNoTime,UI.noetherTimeDrive]];
  let active=0,t=0,last=0,playing=true,external=false,offset=0;
  let pend={theta:0.74,omega:0,time:0},history=[],metricValue=0,dynamic={};
  const buttons=modes.map((str,idx)=>{
    const b=document.createElement('button');b.textContent=str;
    b.onclick=()=>{active=idx;offset=0;slider.value='0';reset();refresh();};
    tabs.appendChild(b);return b;
  });
  function reset(){t=0;last=0;history=[];pend={theta:.74,omega:0,time:0};}
  function refresh(){
    buttons.forEach((b,i)=>b.classList.toggle('active',i===active));
    $('.noether-v4-slider-label span').textContent=controls[active];
    $('.noether-v4-slider-label output').textContent=String(offset);
    label.textContent=metrics[active];lesson.textContent=descriptions[active][external?1:0];
    chk.checked=external;
    stage.dataset.v4Mode=String(active);stage.dataset.v4External=String(external);
  }
  chk.onchange=()=>{external=chk.checked;reset();refresh();};
  slider.oninput=()=>{offset=Number(slider.value);reset();refresh();};
  $('.noether-v4-pause').onclick=()=>{playing=!playing;last=0;$('.noether-v4-pause').textContent=playing?UI.noetherPlay:UI.noetherResume;};
  $('.noether-v4-reset').onclick=()=>{reset();refresh();};
  refresh();
  function keplerState(time,drive=false){
    const a=107,e=.55,b=a*Math.sqrt(1-e*e),n=.8;
    const M=n*time+(drive?.50*Math.sin(.70*time):0);
    let E=M;for(let i=0;i<12;i++)E-=(E-e*Math.sin(E)-M)/(1-e*Math.cos(E));
    const mdot=n+(drive?.35*Math.cos(.70*time):0);
    return {x:a*(Math.cos(E)-e),y:b*Math.sin(E),a,b,e,M,mdot,Lratio:mdot/n};
  }
  function sceneGrid(ctx){
    ctx.fillStyle='#080d24';ctx.fillRect(0,0,480,315);
    for(let x=0;x<480;x+=40)line(ctx,x,0,x,315,'#28385c51');
    for(let y=0;y<315;y+=40)line(ctx,0,y,480,y,'#28385c51');
  }
  function drawTranslation(ctx){
    const omega=.63,x0=offset*.57;
    const com=external?(x0+45)*Math.cos(omega*t):x0;
    const vcm=external?-(x0+45)*omega*Math.sin(omega*t):0;
    const phase=t%3.4,approach=phase<1.7;
    const r=approach?(91-91/1.7*phase):(91/1.7*(phase-1.7));
    const cx=240+com,y=192;
    if(external){
      line(ctx,240,45,240,259,'#fa647b88',2);
      text(ctx,UI.noetherField,245,65,'#fa9aa8',11);
      line(ctx,240,246,cx,246,'#fa647b88',2);
    }
    line(ctx,35,230,450,230,'#96a5db',2);
    ctx.fillStyle='#26335d';ctx.fillRect(cx-119,215,238,12);
    const left=cx-r,right=cx+r;
    dot(ctx,left,y,14,'#9c9ffa');dot(ctx,right,y,14,'#ffd35e');
    line(ctx,left-25,y,left-12,y,'#9c9ffa',3);line(ctx,right+12,y,right+25,y,'#ffd35e',3);
    const vp=vcm*(2/45);
    metricValue=vp;
    text(ctx,`x0=${x0.toFixed(0)} | Xcm=${com.toFixed(1)}`,24,28,'#cfddf9',12);
    text(ctx,`v1=${(vcm+(approach?53.5:-53.5)).toFixed(1)}   v2=${(vcm+(approach?-53.5:53.5)).toFixed(1)}`,24,290,'#9bd0f6',12);
    unit.textContent='p / (2m*45) = vCM/45 (model units)';
    stage.dataset.v4Invariant='total-momentum';
    dynamic={com,vcm,separation:r};
  }
  function drawRotation(ctx){
    const s=keplerState(t,external),phi=offset/100*Math.PI*.7;
    ctx.save();ctx.translate(240,163);ctx.rotate(phi);
    ctx.strokeStyle='#56649b';ctx.lineWidth=1;
    ctx.beginPath();ctx.ellipse(-s.a*s.e,0,s.a,s.b,0,0,2*Math.PI);ctx.stroke();
    const sectors=[[t-.96,t-.48,'rgba(103,143,245,.34)'],[t-.48,t,'rgba(255,201,83,.39)']];
    sectors.forEach(([t1,t2,color])=>{
      ctx.beginPath();ctx.moveTo(0,0);
      for(let j=0;j<=28;j++){
        const q=keplerState(t1+(t2-t1)*j/28,external);ctx.lineTo(q.x,q.y);
      }
      ctx.closePath();ctx.fillStyle=color;ctx.fill();
    });
    line(ctx,0,0,s.x,s.y,'#a8bce6aa',1.5);
    dot(ctx,0,0,12,'#ffd75c');dot(ctx,s.x,s.y,9,external?'#ff7d76':'#999dff');
    ctx.restore();
    metricValue=s.Lratio;
    text(ctx,`L/L0 = ${s.Lratio.toFixed(4)}`,24,29,'#f6d783',14);
    const prev=keplerState(t-.48,external),prev2=keplerState(t-.96,external);
    const delta1=.5*s.a*s.b*(prev.M-prev2.M),delta2=.5*s.a*s.b*(s.M-prev.M);
    text(ctx,`A1=${delta1.toFixed(1)}    A2=${delta2.toFixed(1)} (area units)`,24,290,'#c6cbe8',12);
    unit.textContent='L/L0; equal time sectors: 0.48 s each';
    stage.dataset.v4Invariant='angular-momentum';
    dynamic={Lratio:s.Lratio,areaOne:delta1,areaTwo:delta2};
  }
  function pendG(time){
    const phase=time+(offset+100)/200*13;
    return 9.81*(external?1+.25*Math.sin(.75*phase):1);
  }
  function drawTime(ctx){
    const L=1,m=1,g=pendG(pend.time),ek=.5*m*L*L*pend.omega*pend.omega,ep=m*g*L*(1-Math.cos(pend.theta));
    const E=ek+ep;metricValue=E;
    const pivot={x:240,y:84};
    const bX=pivot.x+Math.sin(pend.theta)*148,bY=pivot.y+Math.cos(pend.theta)*148;
    dot(ctx,pivot.x,pivot.y,7,'#d7dff4');line(ctx,pivot.x,pivot.y,bX,bY,'#dce8ff',2.2);
    dot(ctx,bX,bY,17,external?'#ff8182':'#8088ff');
    line(ctx,115,255,365,255,'#425078',1);
    const scale=125;
    ctx.fillStyle='#3fb9ca';ctx.fillRect(151,250-scale*Math.min(ep/4,1),35,scale*Math.min(ep/4,1));
    ctx.fillStyle='#f6bd58';ctx.fillRect(295,250-scale*Math.min(ek/4,1),35,scale*Math.min(ek/4,1));
    text(ctx,`Ep ${ep.toFixed(2)} J`,168,269,'#89e6df',12,'center');
    text(ctx,`Ek ${ek.toFixed(2)} J`,311,269,'#ffd484',12,'center');
    text(ctx,`g(t)=${g.toFixed(3)} m/s2`,24,28,'#d8e3ff',12);
    text(ctx,`t0=${((offset+100)/200*13).toFixed(1)} s`,360,28,'#a3b7e3',12);
    unit.textContent='E = 0.5 m L2 omega2 + mg(t)L(1-cos theta)  [J]';
    stage.dataset.v4Invariant='pendulum-energy';
    dynamic={ek,ep,total:E,theta:pend.theta,omega:pend.omega,g};
  }
  function updatePendulum(dt){
    const n=Math.max(1,Math.ceil(dt/.006));
    for(let j=0;j<n;j++){
      const h=dt/n;
      const half=pend.omega-.5*h*pendG(pend.time)*Math.sin(pend.theta);
      pend.theta+=half*h;pend.time+=h;
      pend.omega=half-.5*h*pendG(pend.time)*Math.sin(pend.theta);
    }
  }
  function plot(){
    const {ctx,w,h}=v4Canvas(graph);
    ctx.fillStyle='#071023';ctx.fillRect(0,0,w,h);
    if(history.length<2)return;
    let min=Infinity,max=-Infinity;
    history.forEach(o=>{min=Math.min(min,o.v);max=Math.max(max,o.v);});
    if(max-min<.02){max+=.015;min-=.015;}
    const scale=Math.max(.0001,max-min);
    ctx.lineWidth=2;ctx.strokeStyle=external?'#ff8b80':'#eec975';ctx.beginPath();
    history.forEach((o,i)=>{
      const x=2+(w-4)*i/(history.length-1),y=h-3-(h-6)*(o.v-min)/scale;
      if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);
    });ctx.stroke();
  }
  function animate(now){
    if(currentView!=='symmetry'||!scene.isConnected)return;
    const dt=(last&&playing)?clamp((now-last)/1000,0,.048):0;last=now;
    if(playing){t+=dt;if(active===2&&dt>0)updatePendulum(dt);}
    const {ctx,w,h}=v4Canvas(scene);
    ctx.save();ctx.scale(w/480,h/315);sceneGrid(ctx);
    if(active===0)drawTranslation(ctx);
    else if(active===1)drawRotation(ctx);
    else drawTime(ctx);
    ctx.restore();
    metric.textContent=Number(metricValue).toFixed(active===0?3:active===1?4:3);
    stage.dataset.v4Metric=String(metricValue);
    stage.dataset.v4Dynamics=JSON.stringify(dynamic);
    if(!history.length||Math.abs(t-history[history.length-1].t)>.08){history.push({t,v:metricValue});if(history.length>100)history.shift();}
    plot();safeRequestAnimationFrame(animate);
  }
  safeRequestAnimationFrame(animate);
};

Object.assign(UI,{
 breakTitle: "\u5bf9\u79f0\u6027\u7684\u7834\u7f3a\u4e0e\u91cd\u5efa",
 breakSub: "\u4ece\u5434\u5065\u96c4\u5b9e\u9a8c\u7406\u89e3\u5b87\u79f0\u4e0d\u5b88\u6052\uff0c\u8fdb\u800c\u8ba4\u8bc6 C\u3001P\u3001T \u4e0e CPT \u7684\u5173\u7cfb",
 breakWu: "1. \u7834\u788e\u7684\u955c\u50cf\uff1a\u5434\u5065\u96c4\u5b9e\u9a8c",
 breakReal: "\u771f\u5b9e\u7684 Co-60 \u03b2 \u8870\u53d8",
 breakMirror: "\u7a7a\u95f4\u53cd\u6f14\u540e\u7684\u6bd4\u8f83",
 breakRefMode: "\u5bf9\u79f0\u53c2\u7167\uff08\u5047\u8bbe\uff09",
 breakWeakMode: "\u5b9e\u9645\u5f31\u8870\u53d8",
 breakNote: "\u5b9e\u9a8c\u7ed3\u8bba\u6765\u81ea\u7535\u5b50\u53d1\u5c04\u65b9\u5411\u4e0e\u539f\u5b50\u6838\u81ea\u65cb\u65b9\u5411\u7684\u7edf\u8ba1\u5173\u8054\uff1b\u56fe\u4e2d\u6570\u91cf\u4ec5\u4e3a\u5b9a\u6027\u793a\u610f\uff0c\u4e0d\u662f\u5434\u5065\u96c4\u56e2\u961f\u7684\u539f\u59cb\u8ba1\u6570\u3002",
 breakMirrorLabel: "\u5b87\u79f0\u53d8\u6362\u65f6\uff1a\u52a8\u91cf\u65b9\u5411\u53cd\u8f6c\uff0c\u4f46\u81ea\u65cb\u662f\u8f74\u77e2\u91cf\uff0c\u4e0d\u968f\u7a7a\u95f4\u53cd\u6f14\u6539\u53d8\u3002",
 breakRefDesc: "\u53c2\u7167\u6a21\u5f0f\u8868\u793a\u4e00\u4e2a\u5047\u8bbe\u7684\u5b87\u79f0\u5bf9\u79f0\u8fc7\u7a0b\uff0c\u4e0d\u662f Co-60 \u7684\u7535\u78c1\u8870\u53d8\u3002",
 breakWeakDesc: "\u5f31\u8870\u53d8\u4e2d\u7535\u5b50\u66f4\u504f\u5411\u9006\u6838\u81ea\u65cb\u65b9\u5411\u53d1\u5c04\uff1b\u5bf9\u5176\u4f5c\u5b87\u79f0\u53d8\u6362\uff0c\u5f97\u5230\u7684\u5206\u5e03\u5e76\u4e0d\u7b49\u540c\u4e8e\u539f\u8fc7\u7a0b\u3002",
 breakPCT: "2. \u5206\u522b\u89c2\u5bdf C\u3001P\u3001T",
 breakP: "P\uff1a\u5b87\u79f0\uff08\u7a7a\u95f4\u53cd\u6f14\uff09",
 breakC: "C\uff1a\u7535\u8377\u5171\u8f6d",
 breakT: "T\uff1a\u65f6\u95f4\u53cd\u6f14",
 breakPDesc: "\u67d0\u4e9b\u5f31\u76f8\u4e92\u4f5c\u7528\u8fc7\u7a0b\u7834\u574f P\uff1b\u81ea\u65cb\u8f74\u77e2\u91cf\u4e0e\u52a8\u91cf\u6781\u77e2\u91cf\u5728 P \u4e0b\u7684\u53d8\u6362\u4e0d\u540c\u3002",
 breakCDesc: "\u67d0\u4e9b\u5f31\u76f8\u4e92\u4f5c\u7528\u8fc7\u7a0b\u7834\u574f C\uff1b\u7c92\u5b50\u4e0e\u53cd\u7c92\u5b50\u7684\u53d8\u5316\u4e0d\u80fd\u7b49\u540c\u4e8e\u5b87\u5b99\u4e2d\u7269\u8d28\u5360\u4f18\u7684\u5168\u90e8\u539f\u56e0\u3002",
 breakTDesc: "\u67d0\u4e9b\u5fae\u89c2\u5f31\u8fc7\u7a0b\u5b58\u5728 T \u7834\u574f\uff1b\u5b83\u4e0e\u70ed\u529b\u5b66\u71b5\u589e\u9020\u6210\u7684\u5b8f\u89c2\u65f6\u95f4\u7bad\u5934\u4e0d\u662f\u4e00\u56de\u4e8b\u3002",
 breakView: "\u70b9\u51fb\u67e5\u770b\u8bc1\u636e\u4e0e\u8fb9\u754c",
 breakCPT: "3. \u8054\u5408\u53d8\u6362\uff1aCPT",
 breakCPTNote: "\u5728\u5c40\u57df\u3001\u6d1b\u4f26\u5179\u4e0d\u53d8\u3001\u6ee1\u8db3\u901a\u5e38\u91cf\u5b50\u573a\u8bba\u6761\u4ef6\u7684\u7406\u8bba\u4e2d\uff0cCPT \u5bf9\u79f0\u6027\u6210\u7acb\u3002\u4ee5\u4e0b\u53ea\u662f\u5c55\u793a\u4e09\u79cd\u53d8\u6362\u5982\u4f55\u7ec4\u5408\uff0c\u5e76\u975e\u5b9e\u9a8c\u6216\u6570\u5b66\u8bc1\u660e\u3002",
 breakCPT0: "\u9009\u62e9 P\u3001C\u3001T \u9010\u6b65\u67e5\u770b\u4e00\u4e2a\u62bd\u8c61\u4e8b\u4ef6\u5982\u4f55\u53d8\u5316\u3002",
 breakCPT1: "P\uff1a\u7a7a\u95f4\u65b9\u5411\u53cd\u8f6c\uff1b\u662f\u5426\u5bf9\u79f0\u8fd8\u8981\u68c0\u9a8c\u7269\u7406\u8fc7\u7a0b\u6982\u7387\u3002",
 breakCPT2: "CP\uff1a\u518d\u53d8\u4e3a\u76f8\u5e94\u53cd\u7c92\u5b50\u8fc7\u7a0b\uff1b\u67d0\u4e9b\u5f31\u8fc7\u7a0b\u4ecd\u4f1a\u7834\u574f CP\u3002",
 breakCPT3: "CPT \u7ec4\u5408\u5b8c\u6210\u3002\u91cd\u8981\u7684\u662f\u6574\u4e2a\u7406\u8bba\u5728\u8054\u5408\u53d8\u6362\u4e0b\u5177\u6709\u5bf9\u79f0\u6027\uff0c\u800c\u4e0d\u662f\u52a8\u753b\u81ea\u52a8\u8bc1\u660e\u4e86\u5b83\u3002",
 breakReset: "\u91cd\u505a\u4e00\u904d",
 breakForward: "\u65f6\u95f4\u65b9\u5411",
 breakCharge: "\u7535\u8377\u7b26\u53f7",
 breakDirection: "\u7a7a\u95f4\u65b9\u5411",
 breakMirrorExpectation: "\u5b87\u79f0\u53cd\u6f14\u540e\u7684\u671f\u671b",
 breakObserved: "\u5b9e\u9645\u89c2\u6d4b",
 breakSpin: "\u6838\u81ea\u65cb",
 breakElectron: "\u7535\u5b50\u53d1\u5c04",
 breakPDist: "\u7535\u5b50\u53d1\u5c04\u6982\u7387\u7684\u65b9\u5411\u5206\u5e03",
 breakEvent: "\u62bd\u8c61\u5fae\u89c2\u8fc7\u7a0b",
 nu: "\u4e2d\u5fae\u5b50",
 antinu: "\u53cd\u4e2d\u5fae\u5b50",
 helicity: "\u87ba\u65cb\u5ea6",
 spinV: "\u81ea\u65cb S",
 momV: "\u52a8\u91cf p",
 particleState: "\u7c92\u5b50\u8eab\u4efd",
 nuLimit: "\u6b64\u56fe\u91c7\u7528\u9ad8\u80fd\u87ba\u65cb\u5ea6\u793a\u610f\uff1b\u4e2d\u5fae\u5b50\u5177\u6709\u8d28\u91cf\uff0c\u87ba\u65cb\u5ea6\u4e0e\u624b\u5f81\u6027\u5e76\u4e0d\u4e25\u683c\u7b49\u540c\u3002\u5b83\u63cf\u8ff0 P\u3001C\u3001T \u7684\u53d8\u6362\uff0c\u4e0d\u662f CPT \u5b9a\u7406\u7684\u8bc1\u660e\u3002",
 nuCPT0: "\u4ece\u9ad8\u80fd\u8fd1\u4f3c\u4e0b\u7684\u5de6\u65cb\u4e2d\u5fae\u5b50\u51fa\u53d1\uff1a\u52a8\u91cf\u5411\u53f3\uff0c\u81ea\u65cb\u5411\u5de6\u3002",
 nuCPT1: "P \u53cd\u8f6c\u52a8\u91cf\u800c\u4e0d\u53cd\u8f6c\u8f74\u77e2\u91cf\u81ea\u65cb\uff0c\u87ba\u65cb\u5ea6\u7531\u5de6\u53d8\u53f3\u3002",
 nuCPT2: "C \u5c06\u4e2d\u5fae\u5b50\u6362\u4e3a\u53cd\u4e2d\u5fae\u5b50\uff0c\u793a\u610f\u4e2d\u52a8\u91cf\u4e0e\u81ea\u65cb\u65b9\u5411\u4fdd\u6301\u4e0d\u53d8\u3002",
 nuCPT3: "T \u540c\u65f6\u53cd\u8f6c\u52a8\u91cf\u4e0e\u81ea\u65cb\uff0c\u87ba\u65cb\u5ea6\u4fdd\u6301\u53f3\u65cb\u3002\u6700\u7ec8\u5bf9\u5e94\u53f3\u65cb\u53cd\u4e2d\u5fae\u5b50\u3002",
 breakGuide: "\u89c2\u5bdf\u91cd\u70b9\uff1a\u73b0\u5b9e\u8fc7\u7a0b\u4e0e\u5176\u7a7a\u95f4\u53cd\u6f14\u540e\u7684\u6982\u7387\u662f\u5426\u76f8\u540c\uff0c\u800c\u4e0d\u662f\u770b\u5de6\u53f3\u4e24\u5e45\u56fe\u662f\u5426\u753b\u5f97\u4e00\u6837\u3002"
});

// Re-create the original three-part narrative: Wu experiment -> P/C/T cards -> CPT.
// Co-60 beta decay is NEVER shown as an electromagnetic decay. The symmetric mode
// is an explicitly hypothetical reference process, not an alternate Wu result.
window.renderSymmetryBreaking = function () {
  const stage=document.getElementById('view-symmetry-breaking');if(!stage)return;
  stage.style.cssText='display:block;width:100%;';stage.replaceChildren();
  const root=document.createElement('div');root.style.cssText='padding:16px 18px 0;max-width:1440px;margin:auto;';
  stage.appendChild(root);
  root.innerHTML=`
    <header class="breaking-v4-title"><h2>${UI.breakTitle}</h2><p class="breaking-v4-subtitle">${UI.breakSub}</p></header>
    <section class="breaking-v4-section">
      <h3>${UI.breakWu}</h3>
      <div class="breaking-v4-card">
        <div class="breaking-v4-toggle"><button class="wu-v4-ref">${UI.breakRefMode}</button><button class="wu-v4-weak">${UI.breakWeakMode}</button></div>
        <canvas class="breaking-v4-canvas" width="760" height="260"></canvas>
        <p class="breaking-v4-footnote wu-v4-status"></p>
        <p class="breaking-v4-footnote">${UI.breakMirrorLabel} ${UI.breakNote}</p>
      </div>
    </section>
    <section class="breaking-v4-grid">
      <div class="breaking-v4-card">
        <h3>${UI.breakPCT}</h3><p>${UI.breakView}</p>
        <div class="breaking-v4-symcards"></div>
        <p class="breaking-v4-footnote pct-v4-status"></p>
      </div>
      <div class="breaking-v4-card">
        <h3>${UI.breakCPT}</h3><p>${UI.breakCPTNote}</p><p class="breaking-v4-nu-note">${UI.nuLimit}</p>
        <canvas class="breaking-v4-cpt-display" width="400" height="145"></canvas>
        <div class="breaking-v4-steps"><button data-step="P">P</button><button data-step="C" disabled>C</button><button data-step="T" disabled>T</button><button data-step="reset">${UI.breakReset}</button></div>
        <div class="breaking-v4-cpt-status"></div>
      </div>
    </section>`;
  const $=q=>root.querySelector(q),wu=$('.breaking-v4-canvas'),cpt=$('.breaking-v4-cpt-display');
  let wuMode='reference',cptState=0;
  const wuRef=$('.wu-v4-ref'),wuWeak=$('.wu-v4-weak'),wuStatus=$('.wu-v4-status');
  function updateWuMode(){
    wuRef.classList.toggle('active',wuMode==='reference');wuWeak.classList.toggle('active',wuMode==='weak');
    wuStatus.textContent=wuMode==='reference'?UI.breakRefDesc:UI.breakWeakDesc;
    stage.dataset.v4WuMode=wuMode;
  }
  wuRef.onclick=()=>{wuMode='reference';updateWuMode();};
  wuWeak.onclick=()=>{wuMode='weak';updateWuMode();};
  updateWuMode();
  const pctCard=$('.breaking-v4-symcards');
  [[UI.breakP,UI.breakPDesc,'P'],[UI.breakC,UI.breakCDesc,'C'],[UI.breakT,UI.breakTDesc,'T']].forEach(([title,desc,key])=>{
    const card=document.createElement('button');card.className='breaking-v4-symcard';
    card.innerHTML=`<b>${key}</b><small>${title}</small>`;
    card.title=UI.breakView;
    card.onclick=()=>{
      pctCard.querySelectorAll('button').forEach(x=>x.classList.remove('active'));
      card.classList.add('active');$('.pct-v4-status').textContent=desc;
    };
    pctCard.appendChild(card);
  });
  $('.pct-v4-status').textContent=UI.breakGuide;
  const steps=Array.from(root.querySelectorAll('[data-step]'));
  function updateCPT(){
    steps.forEach(el=>{
      const s=el.dataset.step;
      el.classList.toggle('active',s==='P'&&cptState===1||s==='C'&&cptState===2||s==='T'&&cptState===3);
      el.disabled=s==='P'?cptState!==0:s==='C'?cptState!==1:s==='T'?cptState!==2:false;
    });
    $('.breaking-v4-cpt-status').textContent=[UI.nuCPT0,UI.nuCPT1,UI.nuCPT2,UI.nuCPT3][cptState];
    stage.dataset.v4CptStage=String(cptState);
  }
  steps.forEach(b=>b.onclick=()=>{
    const s=b.dataset.step;
    if(s==='reset')cptState=0;
    else if(s==='P'&&cptState===0)cptState=1;
    else if(s==='C'&&cptState===1)cptState=2;
    else if(s==='T'&&cptState===2)cptState=3;
    updateCPT();
  });updateCPT();
  function drawArrow(ctx,x,y,len,direction,color,label){
    line(ctx,x,y,x,y+direction*len,color,3);
    const ay=y+direction*len;
    line(ctx,x,ay,x-5,ay-direction*9,color,2);
    line(ctx,x,ay,x+5,ay-direction*9,color,2);
    if(label)text(ctx,label,x+12,ay,color,11);
  }
  function drawWuPanel(ctx,cx,label,upRatio,time,isMirrored){
    text(ctx,label,cx,28,'#e0e9ff',13,'center');
    dot(ctx,cx,112,20,'#4189d8');text(ctx,'Co-60',cx,116,'white',11,'center');
    drawArrow(ctx,cx,96,41,-1,'#fbd65e',UI.breakSpin);
    // The nuclear spin is AXIAL and stays up under parity.
    const mix=clamp(upRatio,.05,.95);
    const n=8;
    for(let i=0;i<n;i++){
      const up=(i+.5)/n<mix;
      const phi=((time*.35+i*.137)%1);
      const drift=16+phi*55;
      const x=cx+((i%3)-1)*12+(i%2?3:-3)*Math.sin(time*1.2+i);
      const y=112+(up?-drift:drift);
      dot(ctx,x,y,3.1,up?'#77e1ee':'#fa7b82');
    }
    const firstX=cx-60,baseY=209;
    text(ctx,'e-',cx,189,'#cdd9f6',11,'center');
    // The bars are only schematic, deliberately have no percentage ticks.
    ctx.fillStyle='#172d44';ctx.fillRect(firstX,baseY,120,8);ctx.fillRect(firstX,baseY+20,120,8);
    ctx.fillStyle='#77e1ee';ctx.fillRect(firstX,baseY,120*mix,8);
    ctx.fillStyle='#fa7b82';ctx.fillRect(firstX,baseY+20,120*(1-mix),8);
    text(ctx,'up',firstX-8,baseY+8,'#8bcce4',10,'right');
    text(ctx,'down',firstX-8,baseY+28,'#ed9694',10,'right');
    if(isMirrored)text(ctx,'P',cx+84,62,'#faad7b',15);
  }
  function drawWu(ctx,time){
    ctx.fillStyle='#070d20';ctx.fillRect(0,0,760,260);
    line(ctx,380,17,380,244,'#c5cbea55',3);
    const weak=wuMode==='weak';
    const up=weak?.22:.5;
    drawWuPanel(ctx,186,weak?UI.breakReal:UI.breakRefMode,up,time,false);
    drawWuPanel(ctx,566,UI.breakMirror,weak?.78:.5,time,true);
    stage.dataset.v4WuAsymmetry=String(weak);
  }
  function drawCPT(ctx,time){
    ctx.fillStyle='#070e25';ctx.fillRect(0,0,400,145);
    for(let x=8;x<400;x+=32)line(ctx,x,0,x,145,'#25365c37',1);
    // Under P, p flips and axial spin S does not. Under C, particle identity flips.
    // Under T, both p and S flip, so helicity remains unchanged.
    const pDir=(cptState>=1?-1:1)*(cptState>=3?-1:1);
    const sDir=cptState>=3?1:-1;
    const anti=cptState>=2;
    const helicity=pDir*sDir;
    const color=cptState===3?'#fbd76a':anti?'#ff9e6e':'#69def2';
    const cx=200,cy=46;
    const halo=ctx.createRadialGradient(cx,cy,3,cx,cy,37);
    halo.addColorStop(0,color+'88');halo.addColorStop(1,'#00000000');
    ctx.fillStyle=halo;ctx.beginPath();ctx.arc(cx,cy,37,0,2*Math.PI);ctx.fill();
    dot(ctx,cx,cy,14,color);
    text(ctx,anti?'\u03bd\u0304':'\u03bd',cx,cy+5,'#08111f',17,'center');
    text(ctx,(anti?UI.antinu:UI.nu)+'  |  h '+(helicity<0?'-':'+'),cx,19,'#d7e8ff',12,'center');
    const drawVector=(y,dir,color,label)=>{
      const x0=201,xe=x0+dir*106;
      line(ctx,x0,y,xe,y,color,2.5);
      line(ctx,xe,y,xe-dir*12,y-7,color,2.2);
      line(ctx,xe,y,xe-dir*12,y+7,color,2.2);
      text(ctx,label,20,y+4,color,11);
    };
    drawVector(82,pDir,'#73dff5',UI.momV);
    drawVector(113,sDir,'#f4c66c',UI.spinV);
    text(ctx,UI.helicity+' '+(helicity<0?'-':'+'),284,135,'#b1d4f1',11);
    stage.dataset.v4CptHelicity=helicity<0?'left':'right';
    stage.dataset.v4CptParticle=anti?'antineutrino':'neutrino';
    stage.dataset.v4CptPDir=String(pDir);
    stage.dataset.v4CptSDir=String(sDir);
  }
  let first=performance.now();
  function animate(time){
    if(currentView!=='symmetry-breaking'||!wu.isConnected)return;
    {
      const {ctx,w,h}=v4Canvas(wu);ctx.save();ctx.scale(w/760,h/260);
      drawWu(ctx,(time-first)/1000);ctx.restore();
    }
    {
      const {ctx,w,h}=v4Canvas(cpt);ctx.save();ctx.scale(w/400,h/145);
      drawCPT(ctx,(time-first)/1000);ctx.restore();
    }
    safeRequestAnimationFrame(animate);
  }
  safeRequestAnimationFrame(animate);
};

})();


// --- COMPILED lesson_v5.js --- 
/*
 * V5 — minimal-change learning restoration.
 * Retains the original cosmic-nucleus / 3D-sphere visual grammar and the
 * V4 scientific restoration. The only replacement animation is Weak Force.
 * Two explanatory pages are added without touching earlier renderers.
 */
(function () {
  'use strict';
  const PERIOD = 11500;
  const CUTS = [0, 2600, 4450, 6650, 9150, PERIOD];
  const STATES = [
    { Z:27,N:32, iso:'⁵⁹Co', note:'27 质子 + 32 中子', color:'#93c5fd' },
    { Z:27,N:33, iso:'⁶⁰Co', note:'27 质子 + 33 中子', color:'#60a5fa' },
    { Z:27,N:33, iso:'⁶⁰Co', note:'半衰期约 5.27 年（统计量）', color:'#60a5fa' },
    { Z:28,N:32, iso:'⁶⁰Ni*', note:'28 质子 + 32 中子', color:'#c4b5fd' },
    { Z:28,N:32, iso:'⁶⁰Ni', note:'28 质子 + 32 中子', color:'#a78bfa' },
  ];
  const CAPTIONS = [
    '中子靠近稳定的钴-59 核',
    '中子俘获：质量数 +1，伴随 γ 射线',
    '时间跳跃：放射性衰变时刻不可对单核预测',
    'β⁻：中子变质子，放出 e⁻ 与 ν̄ₑ',
    '镍-60：核子总数仍为 60，电荷守恒'
  ];
  function sphereNodes(Z,N) {
    const total=Z+N; const arr=[];
    // Deterministic mixed proton/neutron distribution; original 3D sphere grammar.
    const order=Array.from({length:total},(_,i)=>({key:(i*37)%total,i})).sort((a,b)=>a.key-b.key);
    const types=Array(total).fill('n');for(let i=0;i<Z;i++)types[order[i].i]='p';
    for(let i=0;i<total;i++) {
      const y=1-(2*(i+0.5))/total;
      const rad=Math.sqrt(1-y*y);const ang=i*2.399963229728653;
      arr.push({x:rad*Math.cos(ang),y:y,z:rad*Math.sin(ang),kind:types[i]});
    }
    return arr;
  }
  const nodes={
    '27/32':sphereNodes(27,32),
    '27/33':sphereNodes(27,33),
    '28/32':sphereNodes(28,32)
  };
  const clamp=(x,a,b)=>Math.min(b,Math.max(a,x));
  function dot(ctx,x,y,r,color,stroke) {
    const grad=ctx.createRadialGradient(x-r*.33,y-r*.3,Math.max(1,r*.1),x,y,r);
    grad.addColorStop(0,'#fff');grad.addColorStop(.28,color);grad.addColorStop(1,'#121829');
    ctx.fillStyle=grad;ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();
    if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=.55;ctx.stroke();}
  }
  function label(ctx,s,x,y,color='#eef7ff',size=14,align='center') {
    ctx.save();ctx.font=`700 ${size}px 'Noto Sans SC',system-ui,sans-serif`;
    ctx.textAlign=align;ctx.fillStyle=color;ctx.shadowColor='#071127';ctx.shadowBlur=5;
    ctx.fillText(s,x,y);ctx.restore();
  }
  function roundedTag(ctx,s,x,y,color='#5fe8e4') {
    ctx.save();ctx.font='700 15px system-ui,sans-serif';
    const ww=Math.min(ctx.measureText(s).width+28,330);const hh=31;
    ctx.fillStyle='rgba(6,13,36,.91)';ctx.strokeStyle=color+'a0';ctx.lineWidth=1;
    ctx.beginPath();ctx.roundRect(x-ww/2,y-hh/2,ww,hh,11);ctx.fill();ctx.stroke();
    label(ctx,s,x,y+5,color,15);ctx.restore();
  }
  function drawRay(ctx,x0,y0,x1,y1,color) {
    ctx.save();ctx.strokeStyle=color;ctx.lineWidth=2.7;ctx.shadowBlur=12;ctx.shadowColor=color;
    ctx.beginPath();ctx.moveTo(x0,y0);ctx.lineTo(x1,y1);ctx.stroke();
    const a=Math.atan2(y1-y0,x1-x0);ctx.beginPath();ctx.moveTo(x1,y1);
    ctx.lineTo(x1-10*Math.cos(a-.42),y1-10*Math.sin(a-.42));
    ctx.lineTo(x1-10*Math.cos(a+.42),y1-10*Math.sin(a+.42));ctx.closePath();ctx.fillStyle=color;ctx.fill();ctx.restore();
  }
  window.renderWeakForce=function renderWeakForceV5() {
    const stage=document.getElementById('weak-stage');if(!stage)return;
    stage.replaceChildren();
    const canvas=document.createElement('canvas');canvas.className='weak-v5-canvas';
    canvas.setAttribute('role','img');canvas.setAttribute('aria-label','三维球形核素示意：钴59俘获中子、钴60贝塔衰变为镍60；粒子计数与电荷守恒');
    const phaseBar=document.createElement('div');phaseBar.className='weak-v5-phase';phaseBar.setAttribute('aria-live','polite');
    stage.append(canvas,phaseBar);
    const ctx=canvas.getContext('2d');const cards=[...document.querySelectorAll('#view-energy-weak .weak-step')];
    const pause=document.getElementById('weak-pause'),replay=document.getElementById('weak-replay'),next=document.getElementById('weak-next');
    let elapsed=0,previous=0,playing=true,shownPhase=-1;
    let w=640,h=510;
    function resize(){
      const rect=stage.getBoundingClientRect();if(rect.width<4||rect.height<4)return;
      const dpr=Math.min(devicePixelRatio||1,2);w=rect.width;h=rect.height;
      const pw=Math.round(w*dpr),ph=Math.round(h*dpr);
      if(canvas.width!==pw||canvas.height!==ph){canvas.width=pw;canvas.height=ph;}
      ctx.setTransform(dpr,0,0,dpr,0,0);
      paint();
    }
    const obs=registerViewObserver(new ResizeObserver(resize));obs.observe(stage);
    function phase(){
      for(let i=0;i<CUTS.length-1;i++)if(elapsed<CUTS[i+1])return i;
      return 4;
    }
    function sync(p){
      stage.dataset.weakPhase=String(p);stage.dataset.weakNuclide=STATES[p].iso;
      stage.dataset.weakProtons=String(STATES[p].Z);stage.dataset.weakNeutrons=String(STATES[p].N);
      if(shownPhase===p)return;
      shownPhase=p;cards.forEach((el,i)=>el.classList.toggle('active',i===p));
      phaseBar.textContent=`阶段 ${p+1}/5 · ${CAPTIONS[p]}`;
    }
    function paint(){
      if(w<1||h<1)return;
      const p=phase();sync(p);const s=STATES[p];
      ctx.clearRect(0,0,w,h);
      const bg=ctx.createLinearGradient(0,0,w,h);bg.addColorStop(0,'#0d183a');bg.addColorStop(.6,'#0a112c');bg.addColorStop(1,'#040915');ctx.fillStyle=bg;ctx.fillRect(0,0,w,h);
      // Original cosmos-themed ambient field (purely visual).
      for(let k=0;k<55;k++){
        const xx=((k*83.17+11)%1000)/1000*w;
        const yy=((k*193.61+55)%1000)/1000*h;
        const rad=(k%7===0?1.4:.65);
        ctx.fillStyle=`rgba(144,191,247,${.08+(k%5)*.035})`;ctx.beginPath();ctx.arc(xx,yy,rad,0,Math.PI*2);ctx.fill();
      }
      const cx=w*.53,cy=h*.51,sz=Math.min(w*.22,h*.27,86),theta=elapsed*.00011;
      // The original uses shaded spheres and 3D rotation; positions are not physical nuclear orbits.
      const arr=nodes[`${s.Z}/${s.N}`].map((q,i)=>{
        const x=q.x*Math.cos(theta)-q.z*Math.sin(theta);
        const z=q.x*Math.sin(theta)+q.z*Math.cos(theta);
        const depth=1+z*.14;
        return {x:cx+x*sz,y:cy+q.y*sz*.9,z,kind:q.kind,r:Math.max(4.5,10*depth*(w<480?.72:1))};
      }).sort((a,b)=>a.z-b.z);
      // Backdrop aura makes the clustered nucleons read as a single nucleus.
      const glow=ctx.createRadialGradient(cx,cy,18,cx,cy,sz*1.35);
      glow.addColorStop(0,'rgba(64,112,206,.17)');glow.addColorStop(1,'rgba(64,112,206,0)');ctx.fillStyle=glow;
      ctx.beginPath();ctx.arc(cx,cy,sz*1.35,0,Math.PI*2);ctx.fill();
      arr.forEach(q=>dot(ctx,q.x,q.y,q.r,q.kind==='p'?'#fb7185':'#94a3b8','rgba(234,246,255,.2)'));
      // Motion and emitted particles: valid isotope transition Co59 -> Co60 -> Ni60.
      const u=(elapsed-CUTS[p])/(CUTS[p+1]-CUTS[p]);
      if(p===0){
        const nx=cx-sz-210+clamp(u,0,1)*195,ny=cy-17;
        dot(ctx,nx,ny,11,'#94a3b8','#dfecff');label(ctx,'n · 入射中子',nx,ny-22,'#e1f2ff',12);
      } else if(p===1){
        const run=clamp(u,0,1);drawRay(ctx,cx+sz*.45,cy-10,cx+sz*.45+run*160,cy-15-run*85,'#fbbf24');
        label(ctx,'γ · 俘获后退激发',Math.min(w-122,cx+sz*.45+50),cy-100,'#fce797',12);
      } else if(p===2){
        const a=(elapsed-CUTS[p])/(CUTS[p+1]-CUTS[p]);
        label(ctx,'⏭ 时间跳跃（不是单个核的倒计时）',cx,Math.max(58,cy-sz-56),'#fcd699',w<480?11:13);
        ctx.strokeStyle='rgba(255,213,111,.5)';ctx.lineWidth=3;
        ctx.beginPath();ctx.arc(cx,cy,sz*1.2,-Math.PI/2,-Math.PI/2+Math.PI*2*a);ctx.stroke();
      } else if(p===3){
        const d=clamp(u,0,1);const ox=cx+sz*.2,oy=cy-18;
        const ex=ox+185*d,ey=oy-73*d,vx=ox-205*d,vy=oy+83*d;
        drawRay(ctx,ox,oy,ex,ey,'#5fe0ff');dot(ctx,ex,ey,6,'#60a5fa');
        label(ctx,'e⁻',Math.min(w-24,ex),ey-15,'#8cecff',15);
        drawRay(ctx,ox,oy,vx,vy,'#d5cbff');dot(ctx,vx,vy,4,'#ddd6fe');
        label(ctx,'ν̄ₑ',Math.max(25,vx),vy+20,'#e0d8ff',15);
      } else if(p===4){
        drawRay(ctx,cx+sz*.35,cy-12,cx+sz*.35+Math.min(150,w*.2),cy-76,'#fbbf24');
        label(ctx,'γ · Ni* 退激发（示意）',cx,Math.max(55,cy-sz-55),'#f8e5a8',12);
      }
      // Floating nucleus tag and correct counted nucleons.
      const titleY=Math.min(h-79,cy+sz+54);
      roundedTag(ctx,`${s.iso}  ·  ${s.Z}p + ${s.N}n`,cx,titleY,s.color);
      if(w>410) {
        dot(ctx,22,h-52,6,'#fb7185');label(ctx,'质子',35,h-48,'#ffc3ca',12,'left');
        dot(ctx,110,h-52,6,'#94a3b8');label(ctx,'中子',123,h-48,'#d4dceb',12,'left');
      }
      label(ctx,'核子分布为概念示意，不是真实核内空间定位',w/2,h-17,'#869ab8',w<460?10:12);
    }
    function frame(t){
      if(currentView!=='weak'||!stage.isConnected)return;
      if(!playing)return;
      if(previous)elapsed+=(clamp(t-previous,0,90));previous=t;
      if(elapsed>=PERIOD){elapsed=0;shownPhase=-1;}
      paint();safeRequestAnimationFrame(frame);
    }
    pause.onclick=()=>{
      playing=!playing;pause.textContent=playing?'暂停':'继续';previous=0;
      if(playing)safeRequestAnimationFrame(frame);else paint();
    };
    replay.onclick=()=>{elapsed=0;shownPhase=-1;previous=0;if(!playing){playing=true;pause.textContent='暂停';safeRequestAnimationFrame(frame);}paint();};
    next.onclick=()=>{
      const newP=(phase()+1)%5;elapsed=CUTS[newP]+170;shownPhase=-1;previous=0;
      if(playing){playing=false;pause.textContent='继续';}
      paint();
    };
    resize();safeRequestAnimationFrame(frame);
  };

  const cases={
    wu:{
      title:'吴健雄团队：镜像世界遵守相同规律吗？',
      question:'如果弱相互作用遵守宇称 P，对准自旋方向的钴-60 核，其电子发射规律应在空间反演后保持等价。',
      measure:'把钴-60 原子核的自旋方向定向，测量 β 电子沿不同方向发射的统计分布。',
      result:'电子相对于核自旋方向存在明确的不对称，说明弱相互作用不遵守 P。',
      limit:'不能仅凭镜子中的图案不同得出结论；图中箭头只是说明自旋和动量如何变换，不是原始实验计数。',
      refs:[['吴健雄等｜1957 原始实验论文','https://journals.aps.org/pr/abstract/10.1103/PhysRev.105.1413'],['Nobel Prize｜1957 年物理学奖','https://www.nobelprize.org/prizes/physics/1957/summary/']]
    },
    jpsi:{
      title:'1974 J/ψ：如何确认新的夸克族？',
      question:'粒子模型需要新的粲夸克时，应出现可探测的含粲夸克束缚态。',
      measure:'SLAC 的电子—正电子碰撞和 Brookhaven 的质子束实验独立发现异常的共振信号。',
      result:'J/ψ 的发现为粲夸克及夸克模型提供了关键证据，开启粒子物理“十一月革命”。',
      limit:'不能把某张示意图中的一座“峰”当作原始计数；具体信号需要探测效率、背景和统计分析。',
      refs:[['SLAC｜1974 十一月革命','https://ahro.slac.stanford.edu/history-bits/november-revolution-physics'],['Brookhaven｜J/ψ 发现历史','https://www.bnl.gov/decadeofdiscovery/index.php']]
    },
    higgs:{
      title:'2012 希格斯：为什么不直接拍到粒子？',
      question:'电弱理论预期存在希格斯玻色子；它极短寿命，必须通过末态产物重建质量。',
      measure:'ATLAS 与 CMS 分析不同衰变道的能量和径迹，重建事件的质量分布，并与已知背景比较。',
      result:'2012 年 7 月，两组实验报告在约 125 GeV 质量区域出现达到发现标准的信号；后续测量支持其希格斯玻色子身份。',
      limit:'发现希格斯粒子并不等于直接验证所有费米子耦合；电子汤川耦合的数值主要由标准模型质量关系给出。',
      refs:[['CERN｜怎样发现希格斯玻色子','https://home.web.cern.ch/science/physics/higgs-boson/how/'],['ATLAS｜希格斯发现与后续研究','https://atlas.cern/Discover/Physics/Higgs']]
    }
  };
  const svg=(s)=>s;
  function figureFor(which){
    const header='<rect x="0" y="0" width="650" height="325" rx="18" fill="#070f28"/><text x="30" y="32" fill="#98a9d1" font-size="14" font-family="sans-serif">科学原理可视化 · 示意图，非原始实验数据</text>';
    if(which==='wu')return header+`
      <line x1="310" y1="55" x2="310" y2="265" stroke="#364562" stroke-dasharray="6,6"/>
      <text x="150" y="65" fill="#a9d9fb" text-anchor="middle" font-size="16">实际弱衰变</text>
      <text x="492" y="65" fill="#e4c7a8" text-anchor="middle" font-size="16">空间反演后比较</text>
      <circle cx="159" cy="168" r="45" fill="#213c65" stroke="#6f9cd1" stroke-width="2"/>
      <circle cx="491" cy="168" r="45" fill="#213c65" stroke="#6f9cd1" stroke-width="2"/>
      <text x="159" y="174" text-anchor="middle" fill="white" font-size="17">⁶⁰Co</text>
      <text x="491" y="174" text-anchor="middle" fill="white" font-size="17">P(⁶⁰Co)</text>
      <path d="M159 129 L159 80 M151 92 L159 80 L167 92" stroke="#f6c76f" stroke-width="5" fill="none"/>
      <path d="M491 129 L491 80 M483 92 L491 80 L499 92" stroke="#f6c76f" stroke-width="5" fill="none"/>
      <text x="177" y="93" fill="#f9da9f" font-size="13">自旋 ↑</text>
      <path d="M159 212 L159 265 M151 252 L159 265 L167 252" stroke="#5de3df" stroke-width="5" fill="none"/>
      <path d="M491 122 L491 78 M483 90 L491 78 L499 90" stroke="#5de3df" stroke-width="5" fill="none"/>
      <text x="178" y="260" fill="#89f2eb" font-size="13">电子动量 ↓</text>
      <text x="339" y="279" fill="#bed0ea" font-size="13">P 下：动量翻转，自旋不翻转</text>`;
    if(which==='jpsi'){
      const pts=[];for(let i=0;i<=140;i++){
        const x=57+i*3.7;
        const b=215+16*Math.sin(i*.07);
        const peak=155*Math.exp(-.5*Math.pow((i-70)/7,2));
        pts.push(`${i?'L':'M'}${x.toFixed(1)},${(b-peak).toFixed(1)}`);
      }
      return header+`<line x1="57" y1="262" x2="580" y2="262" stroke="#b8cbe9" stroke-width="2"/>
        <line x1="57" y1="262" x2="57" y2="57" stroke="#b8cbe9" stroke-width="2"/>
        <text x="314" y="300" text-anchor="middle" fill="#a9b8d8" font-size="13">重建不变质量（示意）</text>
        <text x="62" y="60" fill="#a9b8d8" font-size="13">事件数</text>
        <path d="${pts.join(' ')}" fill="none" stroke="#61d6df" stroke-width="3"/>
        <line x1="316" y1="87" x2="316" y2="256" stroke="#f4c565" stroke-dasharray="5,5"/>
        <text x="326" y="85" fill="#f4d492" font-size="15">J/ψ ≈3.1 GeV</text>
        <text x="355" y="245" fill="#8ba3ca" font-size="12">信号 + 背景示意</text>`;
    }
    return header+`
      <ellipse cx="322" cy="165" rx="133" ry="124" fill="none" stroke="#364e86" stroke-width="2"/>
      <ellipse cx="322" cy="165" rx="85" ry="76" fill="none" stroke="#364e86" stroke-width="1.5" stroke-dasharray="7,7"/>
      <circle cx="322" cy="165" r="15" fill="#f5d079"/>
      <path d="M322 165 L476 88 M322 165 L480 240 M322 165 L160 82 M322 165 L160 240" stroke-width="3" stroke="#83d1ef" fill="none"/>
      <circle cx="480" cy="88" r="8" fill="#ff9b99"/><circle cx="480" cy="240" r="8" fill="#ff9b99"/>
      <circle cx="160" cy="82" r="8" fill="#81e6d8"/><circle cx="160" cy="240" r="8" fill="#81e6d8"/>
      <text x="512" y="102" fill="#e1eaf7" font-size="13">e⁺</text><text x="507" y="246" fill="#e1eaf7" font-size="13">e⁻</text>
      <text x="128" y="75" fill="#e1eaf7" font-size="13">μ⁺</text><text x="125" y="251" fill="#e1eaf7" font-size="13">μ⁻</text>
      <text x="325" y="296" text-anchor="middle" fill="#a7b8d5" font-size="14">示例：四轻子末态的运动方向（非真实事件）</text>`;
  }
  window.renderEvidenceV5=function(){
    const root=document.getElementById('view-science-evidence');if(!root)return;
    const buttons=[...root.querySelectorAll('[data-experiment]')],fig=root.querySelector('#evidence-figure');
    function choose(which){
      const c=cases[which];if(!c)return;
      buttons.forEach(b=>{b.classList.toggle('active',b.dataset.experiment===which);b.setAttribute('aria-pressed',String(b.dataset.experiment===which));});
      const ids={'evidence-title':c.title,'evidence-question':c.question,'evidence-measure':c.measure,'evidence-result':c.result,'evidence-limit':c.limit};
      Object.entries(ids).forEach(([id,val])=>{root.querySelector('#'+id).textContent=val;});
      const refs=root.querySelector('#evidence-primary');refs.replaceChildren();refs.append('核验原始或机构资料：');
      c.refs.forEach(([name,url],i)=>{const a=document.createElement('a');a.href=url;a.textContent=name;a.target='_blank';a.rel='noopener noreferrer';refs.append(a);if(i<c.refs.length-1)refs.append(' · ');});
      fig.innerHTML=figureFor(which);fig.setAttribute('aria-label',c.title+'实验原理示意，非真实测量数据');
      root.dataset.evidenceCase=which;
    }
    buttons.forEach(b=>{b.onclick=()=>choose(b.dataset.experiment);});choose(root.dataset.evidenceCase||'wu');
  };
  window.renderLimitsV5=function(){
    const root=document.getElementById('view-science-limits');if(!root)return;
    // Native details elements do all the interaction; no animation implies measured data.
    root.dataset.limitsReady='true';
  };
})();


// --- COMPILED lesson_v7.js --- 
/*
 * V7 targeted restoration of TWO lessons only.
 * Noether: original collision / planet / one-pendulum teaching scenes;
 * Weak: original shaded 3D nucleus / incoming neutron / beta products.
 * All other V5 lessons and renderers remain unchanged.
 */
(function () {
  'use strict';
  const min = Math.min, max = Math.max, PI = Math.PI;
  const clamp=(x,a,b)=>max(a,min(b,x));
  const N=document;
  function d(ctx,x,y,r,color){ctx.beginPath();ctx.arc(x,y,r,0,PI*2);ctx.fillStyle=color;ctx.fill();}
  function lin(ctx,x,y,x2,y2,color='#aebede',width=2,dash=[]) {
    ctx.beginPath();ctx.setLineDash(dash);ctx.moveTo(x,y);ctx.lineTo(x2,y2);ctx.strokeStyle=color;ctx.lineWidth=width;ctx.stroke();ctx.setLineDash([]);
  }
  function txt(ctx,s,x,y,color='#e2ebff',size=13,align='center',bold=false) {
    ctx.save();ctx.font=`${bold?'700':'500'} ${size}px system-ui,'Noto Sans SC',sans-serif`;
    ctx.textAlign=align;ctx.fillStyle=color;ctx.fillText(s,x,y);ctx.restore();
  }
  function arrow(ctx,x,y,x2,y2,color='#ffa77c',width=2.4) {
    lin(ctx,x,y,x2,y2,color,width);const a=Math.atan2(y2-y,x2-x);
    ctx.beginPath();ctx.moveTo(x2,y2);ctx.lineTo(x2-10*Math.cos(a-.48),y2-10*Math.sin(a-.48));
    ctx.lineTo(x2-10*Math.cos(a+.48),y2-10*Math.sin(a+.48));ctx.closePath();ctx.fillStyle=color;ctx.fill();
  }
  function ball(ctx,x,y,r,color){
    const grad=ctx.createRadialGradient(x-r*.32,y-r*.36,1,x,y,r);
    grad.addColorStop(0,'#fff');grad.addColorStop(.26,color);grad.addColorStop(1,'#172342');
    ctx.beginPath();ctx.arc(x,y,r,0,PI*2);ctx.fillStyle=grad;ctx.fill();
  }
  function sized(canvas){
    const rect=canvas.getBoundingClientRect(),w=rect.width,h=rect.height;
    if(w<1||h<1)return null;
    const ratio=min(devicePixelRatio||1,2),cw=Math.round(w*ratio),ch=Math.round(h*ratio);
    if(canvas.width!==cw||canvas.height!==ch){canvas.width=cw;canvas.height=ch;}
    const ctx=canvas.getContext('2d');ctx.setTransform(ratio,0,0,ratio,0,0);
    ctx.scale(w/480,h/315);return ctx;
  }
  function drawBase(ctx){
    ctx.clearRect(0,0,480,315);
    const g=ctx.createLinearGradient(0,0,480,315);g.addColorStop(0,'#091025');g.addColorStop(1,'#131c3e');ctx.fillStyle=g;ctx.fillRect(0,0,480,315);
    for(let x=30;x<480;x+=35)lin(ctx,x,0,x,315,'rgba(136,161,215,.07)',1);
    for(let y=20;y<315;y+=35)lin(ctx,0,y,480,y,'rgba(136,161,215,.07)',1);
  }

  // ------------------ NOETHER: original visual grammar ------------------
  function collideSamples(shift,withExternal){
    // Two equal balls exchange velocities at an elastic collision.
    // In the external case, A THEN strikes a stationary wall which belongs
    // to the environment. The wall impulse changes only the two-ball momentum.
    let x1=-87+shift,x2=87+shift,v1=75,v2=-75,hit=false,wallHit=false;
    const wall=-145,dt=.008,out=[];
    for(let j=0;j<=600;j++){
      const t=j*dt;
      out.push({t,x1,x2,v1,v2,p:v1+v2,hit,wallHit,wall});
      x1+=v1*dt;x2+=v2*dt;
      if(!hit&&x1+12>=x2-12&&v1>v2){
        const center=(x1+x2)*.5;x1=center-12;x2=center+12;
        [v1,v2]=[v2,v1];hit=true;
      }
      if(withExternal&&hit&&!wallHit&&v1<0&&x1-12<=wall){
        x1=wall+12;v1=-v1;wallHit=true;
      }
    }
    return out;
  }
  function solveE(M,e){
    let E=M;for(let i=0;i<9;i++)E-=(E-e*Math.sin(E)-M)/(1-e*Math.cos(E));return E;
  }
  function cleanOrbit(t){
    const a=123,e=.40,b=a*Math.sqrt(1-e*e),n=.92,E=solveE(n*t,e);
    const x=a*(Math.cos(E)-e),y=b*Math.sin(E);
    const den=1-e*Math.cos(E);
    const vx=-a*n*Math.sin(E)/den,vy=b*n*Math.cos(E)/den;
    return {x,y,vx,vy,L:x*vy-y*vx};
  }
  const orbitInitial=cleanOrbit(0),L0=orbitInitial.L;
  function drivenOrbit(){
    // Newtonian central force plus drawn tangential thruster. Original ellipse
    // is a comparison guide; no fictitious prescribed ellipse after the thrust.
    const a=123,n=.92,mu=n*n*a*a*a,dt=.006;
    const states=[];let {x,y,vx,vy}=orbitInitial;
    function acceleration(x,y,vx,vy){
      const rr=Math.hypot(x,y),speed=max(1,Math.hypot(vx,vy));
      return {ax:-mu*x/(rr*rr*rr)-15*vy/speed,
        ay:-mu*y/(rr*rr*rr)+15*vx/speed};
    }
    for(let j=0;j<=1100;j++){
      states.push({t:j*dt,x,y,vx,vy,L:x*vy-y*vx});
      const acc=acceleration(x,y,vx,vy);
      const x2=x+vx*dt+.5*acc.ax*dt*dt,y2=y+vy*dt+.5*acc.ay*dt*dt;
      const acc2=acceleration(x2,y2,vx+acc.ax*dt,vy+acc.ay*dt);
      vx+=.5*(acc.ax+acc2.ax)*dt;vy+=.5*(acc.ay+acc2.ay)*dt;
      x=x2;y=y2;
    }
    return states;
  }
  const orbitDriven=drivenOrbit();
  function orbitAt(t,ext){return ext?orbitDriven[clamp(Math.round(t/.006),0,orbitDriven.length-1)]:cleanOrbit(t);}
  function orbitSector(ctx,t0,t1,ext,fill){
    ctx.beginPath();ctx.moveTo(0,0);
    const chunks=38;
    let area=0,old=orbitAt(t0,ext);
    ctx.lineTo(old.x,old.y);
    for(let i=1;i<=chunks;i++){
      const p=orbitAt(t0+(t1-t0)*i/chunks,ext);
      ctx.lineTo(p.x,p.y);area+=.5*(old.x*p.y-old.y*p.x);old=p;
    }
    ctx.closePath();ctx.fillStyle=fill;ctx.fill();
    return area;
  }
  function gValue(t,ext,start){return 9.81*(ext?1+.36*Math.sin(1.75*(t+start)):1);}
  function advancePend(p,dt,ext,start){
    const step=.005,n=max(1,Math.ceil(dt/step)),h=dt/n;
    for(let i=0;i<n;i++){
      const g=gValue(p.t,ext,start),half=p.omega-.5*h*g*Math.sin(p.theta);
      p.theta+=h*half;p.t+=h;
      p.omega=half-.5*h*gValue(p.t,ext,start)*Math.sin(p.theta);
    }
  }
  window.renderSymmetry=function renderNoetherV7(){
    const stage=N.getElementById('view-symmetry');if(!stage)return;
    stage.innerHTML=`<main class="noether-v7">
      <header class="noether-v7-header"><h2>🌌 诺特定理：对称性的织布机</h2><p><b>改变实验所在的位置、朝向或开始时刻</b>，观察规律是否改变；再看与之相连的守恒量。</p></header>
      <nav class="noether-v7-tabs" aria-label="三类连续对称性">
        <button data-mode="0">空间平移 · 动量</button><button data-mode="1">空间旋转 · 角动量</button><button data-mode="2">时间平移 · 能量</button>
      </nav>
      <section class="noether-v7-machine">
        <div class="noether-v7-machine-title">NOETHER LOOM / 对称性 → 守恒量</div>
        <div class="noether-v7-cols">
          <aside class="noether-v7-control noether-v7-card"><h3>① 改变实验条件</h3>
            <label class="noether-v7-slider-label"><span id="nv7-slider-label">移动整套实验</span><input id="nv7-slider" type="range" min="-100" max="100" step="1" value="0"/><output id="nv7-offset">0</output></label>
            <label class="noether-v7-ext"><input id="nv7-ext" type="checkbox"/><span>引入外界影响</span></label>
            <p id="nv7-explanation" class="noether-v7-explanation"></p>
            <div class="noether-v7-actions"><button id="nv7-pause">暂停</button><button id="nv7-reset">重播</button></div>
          </aside>
          <div class="noether-v7-card noether-v7-visual"><h3>② 观察动画</h3><canvas id="nv7-canvas" width="480" height="315" aria-label="双球碰撞、行星轨道或单摆可操作动画"></canvas>
            <p id="nv7-scene-label" class="noether-v7-scene-label"></p></div>
          <div class="noether-v7-card noether-v7-conservation"><h3>③ 观察守恒量</h3>
            <p id="nv7-metric-label" class="noether-v7-metric-label"></p><div id="nv7-metric" class="noether-v7-metric">—</div><p id="nv7-unit" class="noether-v7-unit"></p>
            <p id="nv7-observation" class="noether-v7-observation"></p>
          </div>
        </div>
        <div class="noether-v7-bridge"><b>作用量具有相应连续对称性</b><span>⟹</span><b>对应守恒量</b><small>图中动画是经典力学例子；诺特定理更一般，不能仅凭坐标网格移动或动画画面证明。</small></div>
      </section>
      <p class="noether-v7-footer" id="nv7-footnote">注：打开外界作用后，变化的是选定子系统的量；需要把外界装置纳入完整系统分析，不是守恒定律在整个宇宙失效。</p>
    </main>`;
    const get=(id)=>N.getElementById(id),canvas=get('nv7-canvas'),ctx=canvas.getContext('2d');
    const tabButtons=[...stage.querySelectorAll('[data-mode]')];const slider=get('nv7-slider'),extInput=get('nv7-ext');
    let mode=0,offset=0,external=false,playing=true,last=0,t=0;
    let pend={theta:.65,omega:0,t:0}, collision=collideSamples(0,false);
    const reset=()=>{
      t=mode===1?1.5:0;pend={theta:.65,omega:0,t:0};
      collision=collideSamples(offset*.7,external);last=0;
    };
    function updateTexts(){
      slider.min=mode===0?'-45':'-100';slider.max=mode===0?'45':'100';
      const labels=['移动整套实验（位置）','旋转整套实验（方向）','改变开始时钟（时刻）'];
      const notes=[
        external?'A、B 先相撞；随后 A 撞到左侧固定墙壁并弹回。墙壁属于外界，会给两球系统一个冲量。':'两球只相互碰撞，不撞墙，彼此交换速度；把整套实验平移，碰撞规律不变。',
        external?'行星旁的箭头代表外界切向推力；轨迹与扫面积变化，角动量发生变化。':'太阳在椭圆焦点。等时间扫过等面积，换个方向放置实验也一样。',
        external?'外部装置让 g 随绝对时间变化：同样的单摆在不同时刻启动，能量交换不同。':'单摆的运动方程与绝对时钟无关。改变启动时刻，不会改变同样初始条件的运动。'
      ];
      const scene=['先看两球碰撞；打开外界作用，再看 A 撞墙后的反弹','行星绕焦点运动 → 等时扫面积','单摆摆动 → 动能与势能交换'];
      const metric=['两球总动量 P','轨道角动量 L / 初始值','单摆机械能 E'];
      get('nv7-slider-label').textContent=labels[mode];
      stage.querySelector('.noether-v7-ext span').textContent=mode===0?'加入固定墙壁（外界冲量）':'引入外界影响';
      get('nv7-offset').textContent=mode===0?`${Math.round(offset*.7)} 位置单位`:mode===1?`${Math.round(offset*.65)}°`:`${(offset*.04).toFixed(1)} 秒`;
      get('nv7-explanation').textContent=notes[mode];get('nv7-scene-label').textContent=scene[mode];
      get('nv7-metric-label').textContent=metric[mode];
      tabButtons.forEach((b,i)=>{b.classList.toggle('active',mode===i);b.setAttribute('aria-pressed',String(mode===i));});
      stage.dataset.v7Mode=String(mode);stage.dataset.v7External=String(external);
    }
    tabButtons.forEach((b,i)=>b.onclick=()=>{mode=i;offset=0;slider.value='0';external=false;extInput.checked=false;reset();updateTexts();});
    slider.oninput=()=>{offset=Number(slider.value);reset();updateTexts();};
    extInput.onchange=()=>{external=extInput.checked;reset();updateTexts();};
    get('nv7-reset').onclick=reset;
    get('nv7-pause').onclick=()=>{playing=!playing;get('nv7-pause').textContent=playing?'暂停':'继续';last=0;};
    reset();updateTexts();
    function drawTranslation(ctx){
      const sample=collision[clamp(Math.round(t/.008),0,collision.length-1)];
      const cx=240,cy=168,rail=211;
      lin(ctx,24,rail+18,456,rail+18,'#53678e',2);
      const labX=cx+offset*.7;
      ctx.fillStyle='rgba(109,126,243,.11)';ctx.fillRect(labX-112,rail,224,9);
      ctx.strokeStyle='#7788d8';ctx.strokeRect(labX-112,rail,224,9);
      if(external){
        const wallX=cx+sample.wall;
        ctx.fillStyle='#e1a17135';ctx.fillRect(wallX-14,110,14,121);
        for(let yy=115;yy<225;yy+=15)lin(ctx,wallX-14,yy,wallX,yy+11,'#f7b17c',1.6);
        lin(ctx,wallX,105,wallX,229,'#ffc18d',3);
        txt(ctx,'固定墙壁',wallX,95,'#ffce9f',12,'center',true);
        if(sample.wallHit){
          txt(ctx,'③ A 已撞墙弹回：墙给两球外界冲量',240,62,'#ffce9f',13,'center',true);
          arrow(ctx,wallX+17,cy+38,wallX+76,cy+38,'#ffab78',3.2);
          txt(ctx,'外界冲量 →',wallX+50,cy+57,'#ffbc94',10);
        }else if(sample.hit){
          txt(ctx,'② A 正朝固定墙壁运动',240,62,'#ffcaa1',13,'center',true);
        }else{
          txt(ctx,'① A、B 先做正常弹性碰撞',240,62,'#a9d8f2',13,'center',true);
        }
      }else{
        txt(ctx,'没有外墙：两球只互相作用',240,65,'#a9d8f2',12);
      }
      ball(ctx,cx+sample.x1,cy,13,'#8798fa');ball(ctx,cx+sample.x2,cy,13,'#ffca70');
      txt(ctx,'A',cx+sample.x1,cy-23,'#a5baff',14,'center',true);
      txt(ctx,'B',cx+sample.x2,cy-23,'#ffe0a8',14,'center',true);
      const vx=sample.v1,vx2=sample.v2;
      arrow(ctx,cx+sample.x1,cy-42,cx+sample.x1+clamp(vx*.38,-43,43),cy-42,'#a9baff',2);
      arrow(ctx,cx+sample.x2,cy-42,cx+sample.x2+clamp(vx2*.38,-43,43),cy-42,'#ffe09c',2);
      txt(ctx,'蓝/黄箭头 = 两球速度方向',240,283,'#b2c3e1',12);
      const p=sample.p;get('nv7-metric').textContent=p.toFixed(1);
      get('nv7-unit').textContent='相对模型单位（两球质量均取 1）';
      get('nv7-observation').textContent=external?(sample.wallHit?'撞墙后 P = '+p.toFixed(0)+'；外墙提供冲量。':'碰撞期间 P = 0；等 A 撞墙才会变化。'):'没有外墙，碰撞前后两球总动量始终为 0。';
      stage.dataset.v9WallHit=String(sample.wallHit);
      stage.dataset.v7Momentum=p.toFixed(5);
      stage.dataset.v7Pucks=JSON.stringify({x1:sample.x1,x2:sample.x2,v1:sample.v1,v2:sample.v2});
    }
    function drawRotation(ctx){
      const ang=offset*.65*PI/180;
      const curr=orbitAt(t,external),A=1.0;
      ctx.save();ctx.translate(250,151);ctx.rotate(ang);
      ctx.beginPath();for(let i=0;i<=180;i++){
        const E=i*2*PI/180;const x=123*(Math.cos(E)-.4),y=123*Math.sqrt(1-.4*.4)*Math.sin(E);
        if(!i)ctx.moveTo(x,y);else ctx.lineTo(x,y);
      }
      ctx.closePath();ctx.strokeStyle=external?'#a5a6ee88':'#8d8aff';ctx.lineWidth=2;ctx.setLineDash(external?[5,6]:[]);ctx.stroke();ctx.setLineDash([]);
      const t0=max(0,t-1.30),t1=max(0,t-.65);
      const area1=orbitSector(ctx,t0,t1,external,'rgba(116,150,249,.34)');
      const area2=orbitSector(ctx,t1,t,external,'rgba(252,202,102,.40)');
      if(external){
        ctx.beginPath();for(let i=0;i<=85;i++){
          const q=orbitAt(t*i/85,true);if(!i)ctx.moveTo(q.x,q.y);else ctx.lineTo(q.x,q.y);
        }ctx.strokeStyle='#ff997e';ctx.lineWidth=2;ctx.stroke();
        const v=Math.hypot(curr.vx,curr.vy);const ux=curr.vx/max(1,v),uy=curr.vy/max(1,v);
        arrow(ctx,curr.x,curr.y,curr.x+ux*55,curr.y+uy*55,'#ff977e',2.7);
        txt(ctx,'外部切向推力',curr.x+ux*12,curr.y+uy*12-27,'#ffae91',11);
      }
      lin(ctx,0,0,curr.x,curr.y,'#afc0eb',1.2);
      ball(ctx,0,0,13,'#ffca5c');ball(ctx,curr.x,curr.y,9,external?'#ff967e':'#a19dff');
      ctx.restore();
      const ratio=curr.L/L0;
      txt(ctx,'太阳在焦点',250,24,'#f6d695',12);
      txt(ctx,`蓝区与金区：相邻等长时段（各 ${(t-t1).toFixed(2)} s）`,240,285,'#b6c9ec',11);
      get('nv7-metric').textContent=ratio.toFixed(3);
      get('nv7-unit').textContent='L / L₀（无量纲）';
      get('nv7-observation').textContent=external?'外力矩改变角动量；两个等时扇形面积也可能不等。':'中心力无外力矩，L/L₀ = 1；相等时间扫过相等面积。';
      stage.dataset.v7Angular=ratio.toFixed(6);stage.dataset.v7Areas=JSON.stringify({a1:area1,a2:area2});
    }
    function drawTime(ctx){
      const g=gValue(pend.t,external,offset*.04),theta=pend.theta;
      const Ek=.5*pend.omega*pend.omega,Ep=g*(1-Math.cos(theta)),E=Ek+Ep;
      const px=240,py=70,rr=143,x=px+Math.sin(theta)*rr,y=py+Math.cos(theta)*rr;
      ctx.beginPath();ctx.arc(px,py,rr,PI/2-.80,PI/2+.80);ctx.strokeStyle='#7487b5aa';ctx.lineWidth=1.8;ctx.setLineDash([4,7]);ctx.stroke();ctx.setLineDash([]);
      ball(ctx,px,py,7,'#d5e6fa');lin(ctx,px,py,x,y,'#d9e1ff',2.5);
      ball(ctx,x,y,16,external?'#ff938b':'#8b92fe');
      txt(ctx,`时钟：${(pend.t+offset*.04).toFixed(1)} s`,18,26,'#c9d6f9',12,'left');
      if(external){
        txt(ctx,`外部驱动：g(t) = ${g.toFixed(1)}`,453,26,'#ffb19f',12,'right');
        arrow(ctx,px+25,py+8,px+25,py+60,'#ffa179',2.3);
      }else txt(ctx,'g = 9.81 m/s²',454,26,'#aabdf1',12,'right');
      const baseline=278,barMax=80,scale=9.5;
      const bar=(bx,value,color,label)=>{
        const hh=min(barMax,value*scale);ctx.fillStyle=color;ctx.fillRect(bx,baseline-hh,48,hh);
        txt(ctx,`${label} ${value.toFixed(2)} J`,bx+24,baseline+20,'#e1e9ff',11);
      };
      bar(109,Ep,'#5edbcf','势能');bar(318,Ek,'#e7bb65','动能');
      get('nv7-metric').textContent=E.toFixed(3);
      get('nv7-unit').textContent='E = Ek + Ep（J，m = L = 1）';
      get('nv7-observation').textContent=external?'g(t) 是外界控制的时间依赖参数；单摆机械能因交换能量而变化。':'动能、势能此消彼长，总机械能近似不变。';
      stage.dataset.v7Energy=E.toFixed(6);stage.dataset.v7Pendulum=JSON.stringify({theta,omega:pend.omega,Ek,Ep,g});
    }
    function draw(){
      const ctx=sized(canvas);if(!ctx)return;
      drawBase(ctx);
      if(mode===0)drawTranslation(ctx);
      else if(mode===1)drawRotation(ctx);
      else drawTime(ctx);
    }
    function animation(now){
      if(!canvas.isConnected||currentView!=='symmetry')return;
      const dt=playing&&last?clamp((now-last)/1000,0,.05):0;last=now;
      if(playing){
        t+=dt;
        if(mode===0 && t>4.25){t=0;}
        if(mode===1 && t>5.8){t=1.50;}
        if(mode===2){advancePend(pend,dt,external,offset*.04);if(t>7){t=0;pend={theta:.65,omega:0,t:0};}}
      }
      draw();safeRequestAnimationFrame(animation);
    }
    safeRequestAnimationFrame(animation);
  };

  // ------------------ WEAK: original shaded nucleon cluster ------------------
  const PHASE_TIMES=[0,3400,6700,10400];
  function nucleons(Z,N){
    const total=Z+N,types=Array(total).fill('n');
    for(let i=0;i<Z;i++)types[(i*13+3)%total]='p';
    const phi=PI*(3-Math.sqrt(5));const out=[];
    for(let i=0;i<total;i++){
      const y=1-(i+.5)*2/total,r=Math.sqrt(1-y*y),a=phi*i;
      out.push({x:r*Math.cos(a),y,z:r*Math.sin(a),kind:types[i]});
    }
    return out;
  }
  const clusters={'26/32':nucleons(26,32),'26/33':nucleons(26,33),'27/32':nucleons(27,32)};
  function globe(ctx,x,y,r,color){
    const g=ctx.createRadialGradient(x-r*.3,y-r*.35,1,x,y,r);
    g.addColorStop(0,'#fff');g.addColorStop(.29,color);g.addColorStop(1,'#111a31');
    ctx.fillStyle=g;ctx.beginPath();ctx.arc(x,y,r,0,PI*2);ctx.fill();
  }
  window.renderWeakForce=function renderWeakOriginalV7(){
    const stage=N.getElementById('weak-stage');if(!stage)return;
    stage.replaceChildren();const canvas=N.createElement('canvas');canvas.className='weak-v5-canvas';
    canvas.setAttribute('role','img');canvas.setAttribute('aria-label','原版风格的三维原子核动画，铁58捕获中子生成铁59，铁59经β衰变生成钴59');
    const phaseBanner=N.createElement('div');phaseBanner.className='weak-v5-phase';
    stage.append(canvas,phaseBanner);const ctx=canvas.getContext('2d');
    let w=640,h=490,elapsed=0,last=0,playing=true,visiblePhase=-1;
    const cards=[...N.querySelectorAll('#view-energy-weak .weak-step')];
    const pause=N.getElementById('weak-pause'),next=N.getElementById('weak-next'),replay=N.getElementById('weak-replay');
    const names=['① 中子进入铁核','② β⁻ 衰变：中子变质子','③ 新元素形成：钴-59'];
    function stageIndex(){if(elapsed<PHASE_TIMES[1])return 0;if(elapsed<PHASE_TIMES[2])return 1;return 2;}
    function sync(phase,Z,NN,nuclide){
      stage.dataset.weakPhase=String(phase);stage.dataset.weakProtons=String(Z);
      stage.dataset.weakNeutrons=String(NN);stage.dataset.weakNuclide=nuclide;
      if(phase!==visiblePhase){visiblePhase=phase;cards.forEach((c,i)=>c.classList.toggle('active',i===phase));phaseBanner.textContent=names[phase];}
    }
    function resize(){
      const r=stage.getBoundingClientRect();if(r.width<2||r.height<2)return;
      const dpr=min(devicePixelRatio||1,2);w=r.width;h=r.height;
      canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);
      ctx.setTransform(dpr,0,0,dpr,0,0);paint();
    }
    const obs=registerViewObserver(new ResizeObserver(resize));obs.observe(stage);
    function paint(){
      if(w<2||h<2)return;
      ctx.clearRect(0,0,w,h);
      const g=ctx.createLinearGradient(0,0,w,h);g.addColorStop(0,'#0d183a');g.addColorStop(1,'#060d20');ctx.fillStyle=g;ctx.fillRect(0,0,w,h);
      for(let i=0;i<52;i++){
        const x=(i*97.7%997)/997*w,y=(i*211.37%991)/991*h;
        globe(ctx,x,y,i%7===0?1.35:.60,'#587bb5');
      }
      const phase=stageIndex(),u=(elapsed-PHASE_TIMES[phase])/(PHASE_TIMES[phase+1]-PHASE_TIMES[phase]);
      // Stable initial 58Fe: 26p, 32n. After neutron absorption 59Fe: 26p,33n.
      // After beta-minus decay 59Co: 27p,32n. 3D locations are schematic.
      let Z=26,NN=32,iso='⁵⁸Fe';
      if(phase===0&&u>.63||phase===1&&u<.22){Z=26;NN=33;iso='⁵⁹Fe';}
      if(phase===1&&u>=.22||phase===2){Z=27;NN=32;iso='⁵⁹Co';}
      sync(phase,Z,NN,iso);
      const cx=w*.51,cy=h*.51,sz=min(w*.22,h*.25,87),rot=elapsed*.00015;
      const pts=clusters[`${Z}/${NN}`].map(q=>{
        const x=q.x*Math.cos(rot)-q.z*Math.sin(rot);
        const z=q.x*Math.sin(rot)+q.z*Math.cos(rot);
        return {x:cx+x*sz,y:cy+q.y*sz*.89,z,kind:q.kind,r:max(4.6,9.5*(1+z*.23)*(w<490?.83:1))};
      }).sort((a,b)=>a.z-b.z);
      const glow=ctx.createRadialGradient(cx,cy,sz*.2,cx,cy,sz*1.4);
      glow.addColorStop(0,'#4266ae30');glow.addColorStop(1,'#4266ae00');ctx.fillStyle=glow;
      ctx.beginPath();ctx.arc(cx,cy,sz*1.4,0,PI*2);ctx.fill();
      pts.forEach(q=>globe(ctx,q.x,q.y,q.r,q.kind==='p'?'#fa7084':'#a2aebb'));
      if(phase===0){
        if(u<.63){
          const x=cx-sz-170+u/.63*153,y=cy-15;
          globe(ctx,x,y,11,'#a5b6c9');txt(ctx,'入射中子 n',x,y-21,'#deedff',13);
          arrow(ctx,x-40,y,x-17,y,'#e9f5fe');
        }else{
          txt(ctx,'俘获中子：铁-58 → 铁-59',cx,cy-sz-46,'#c6daff',13);
          const ray=(u-.63)/.37;arrow(ctx,cx+sz*.55,cy-10,cx+sz*.55+ray*140,cy-26-ray*65,'#ffd66f',2.2);
          txt(ctx,'γ',cx+sz*.7+ray*100,cy-38-ray*59,'#ffe4aa',17);
        }
      }else if(phase===1){
        if(u<.22){txt(ctx,'时间压缩：铁-59 半衰期约 44.5 天',cx,cy-sz-45,'#ffd39c',w<430?11:13);}
        const f=clamp((u-.22)/.68,0,1);
        if(f>0){
          const x1=cx+sz*.15+f*min(178,w*.27),y1=cy-23-f*85;
          const x2=cx-sz*.12-f*min(155,w*.25),y2=cy+12+f*77;
          arrow(ctx,cx+sz*.15,cy-23,x1,y1,'#73d7ff');
          arrow(ctx,cx-sz*.12,cy+12,x2,y2,'#c9b8fa');
          globe(ctx,x1,y1,5,'#4fc9fa');globe(ctx,x2,y2,4,'#e5d7ff');
          txt(ctx,'e⁻',min(w-22,x1),y1-12,'#9be8ff',15);
          txt(ctx,'ν̄ₑ',max(25,x2),y2+19,'#e5d7ff',15);
          txt(ctx,'核内 n → p',cx,cy-sz-48,'#a8f5df',14);
        }
      }else{
        txt(ctx,'质子数 26 → 27，所以 Fe 变成 Co',cx,cy-sz-48,'#b8f4db',w<430?12:14);
        txt(ctx,'质量数 59 保持不变',cx,cy-sz-26,'#ffddaa',12);
      }
      const ww=min(300,max(190,iso.length*17+150)),tagY=min(h-73,cy+sz+55);
      ctx.fillStyle='#030b20df';ctx.strokeStyle=phase===2?'#a8e5c7':'#90b6e1';ctx.lineWidth=1;
      ctx.beginPath();ctx.roundRect(cx-ww/2,tagY-19,ww,38,12);ctx.fill();ctx.stroke();
      txt(ctx,`${iso} · ${Z}p + ${NN}n`,cx,tagY+5,'#edfbff',15,'center',true);
      // Original visual's red proton / grey neutron semantics preserved.
      globe(ctx,20,h-47,6,'#fa7084');txt(ctx,'质子 p',33,h-42,'#ffc5ce',w<430?10:12,'left');
      globe(ctx,111,h-47,6,'#a2aebb');txt(ctx,'中子 n',124,h-42,'#d2dce8',w<430?10:12,'left');
      txt(ctx,'粒子排列是概念示意，并非真实核内轨道',w/2,h-16,'#90a6c4',w<430?9:11);
    }
    function frame(now){
      if(currentView!=='weak'||!stage.isConnected)return;
      if(!playing)return;
      if(last)elapsed+=clamp(now-last,0,75);last=now;
      if(elapsed>=PHASE_TIMES[3]){elapsed=0;visiblePhase=-1;}
      paint();safeRequestAnimationFrame(frame);
    }
    pause.onclick=()=>{
      playing=!playing;last=0;pause.textContent=playing?'暂停':'继续';
      if(playing)safeRequestAnimationFrame(frame);else paint();
    };
    next.onclick=()=>{
      const phase=(stageIndex()+1)%3;
      elapsed=PHASE_TIMES[phase]+(phase===0?150:phase===1?2500:230);
      visiblePhase=-1;last=0;
      if(playing){playing=false;pause.textContent='继续';}
      paint();
    };
    replay.onclick=()=>{
      elapsed=0;visiblePhase=-1;last=0;
      if(!playing){playing=true;pause.textContent='暂停';safeRequestAnimationFrame(frame);}
      paint();
    };
    resize();safeRequestAnimationFrame(frame);
  };
})();


// --- COMPILED lesson_v8.js --- 
/* V8: recover original symmetry-breaking lesson visual narrative; refine research pages. */
(function(){
'use strict';
const $=(root,s)=>root.querySelector(s);
const $$=(root,s)=>Array.from(root.querySelectorAll(s));
const TAU=Math.PI*2;
function line(ctx,x1,y1,x2,y2,color='#a2b1db',w=2){ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.lineWidth=w;ctx.strokeStyle=color;ctx.stroke();}
function label(ctx,s,x,y,size=12,color='#e7f1ff',align='center'){ctx.font=`${size}px system-ui,'Noto Sans SC',sans-serif`;ctx.textAlign=align;ctx.fillStyle=color;ctx.fillText(s,x,y);}
function arrow(ctx,x1,y1,x2,y2,color,w=2.5){line(ctx,x1,y1,x2,y2,color,w);let a=Math.atan2(y2-y1,x2-x1);ctx.beginPath();ctx.moveTo(x2,y2);ctx.lineTo(x2-9*Math.cos(a-.48),y2-9*Math.sin(a-.48));ctx.lineTo(x2-9*Math.cos(a+.48),y2-9*Math.sin(a+.48));ctx.closePath();ctx.fillStyle=color;ctx.fill();}
function disc(ctx,x,y,r,fill){ctx.beginPath();ctx.arc(x,y,r,0,TAU);ctx.fillStyle=fill;ctx.fill();}
function validCanvas(canvas){let r=canvas.getBoundingClientRect();if(r.width<2||r.height<2)return null;let d=Math.min(window.devicePixelRatio||1,2);let w=Math.round(r.width*d),h=Math.round(r.height*d);if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h;}let ctx=canvas.getContext('2d');ctx.setTransform(d,0,0,d,0,0);return {ctx,width:r.width,height:r.height};}

// Original page architecture: Wu mirror experiment above; broken P/C/T cards and CPT machine below.
window.renderSymmetryBreaking=function renderSymmetryBreakingV8(){
 const stage=document.getElementById('view-symmetry-breaking');if(!stage)return;
 stage.style.removeProperty('display');
 stage.replaceChildren();
 const root=document.createElement('div');root.className='breaking-v8';stage.append(root);
 root.innerHTML=`
 <header class="breaking-v8-heading">
  <h2>对称性的破缺与重建</h2>
  <p>上帝是个左撇子？从宇称不守恒，到 C、P、T 与 CPT</p>
 </header>
 <section class="breaking-v8-wu">
  <div class="breaking-v8-section-title"><h3><span>01</span> 镜中世界崩塌 <small>The Broken Mirror</small></h3><p>同一物理过程照进镜子，实验结果还一样吗？</p></div>
  <div class="breaking-v8-wu-stage">
   <div class="breaking-v8-toggle" role="group" aria-label="选择宇称实验演示模式">
    <button type="button" data-wu="reference" class="active" aria-pressed="true">对称参照（假设）</button>
    <button type="button" data-wu="weak" aria-pressed="false">真实弱衰变（破缺）</button>
   </div>
   <canvas class="breaking-v8-wu-canvas" width="800" height="205" aria-label="钴60核自旋和贝塔电子发射方向的对比动画" role="img"></canvas>
   <div class="breaking-v8-wu-caption"><strong class="breaking-v8-wu-key">请切换到真实弱衰变</strong><span class="breaking-v8-wu-explain">参照模式仅代表“电子上下发射对称”的假设，绝不是钴-60 的另一种电磁衰变。</span></div>
  </div>
 </section>
 <div class="breaking-v8-bottom">
  <section class="breaking-v8-sym">
   <div class="breaking-v8-section-title"><h3><span>02</span> 摇摇欲坠的对称性 <small>C · P · T</small></h3><p>点击图标，看哪些微观对称性可以被破坏。</p></div>
   <div class="breaking-v8-sym-stage">
    <div class="breaking-v8-sym-grid">
      <button class="breaking-v8-sym-card" data-sym="P" type="button"><span class="breaking-v8-icon">🪞<canvas width="84" height="84" class="breaking-v8-crack"></canvas></span><b>宇称 P</b><small>查看物理证据</small></button>
      <button class="breaking-v8-sym-card" data-sym="C" type="button"><span class="breaking-v8-icon">⚡<canvas width="84" height="84" class="breaking-v8-crack"></canvas></span><b>电荷共轭 C</b><small>查看物理证据</small></button>
      <button class="breaking-v8-sym-card" data-sym="T" type="button"><span class="breaking-v8-icon">⏳<canvas width="84" height="84" class="breaking-v8-crack"></canvas></span><b>时间反演 T</b><small>查看物理证据</small></button>
    </div>
    <p class="breaking-v8-sym-text" aria-live="polite">P、C、T 是三种不同的变换。点击一张卡片观察“破缺”并读出具体含义。</p>
    <button type="button" class="breaking-v8-reset-cracks">重看破缺效果</button>
   </div>
  </section>
  <section class="breaking-v8-cpt">
   <div class="breaking-v8-section-title"><h3><span>03</span> 终极秩序 <small>CPT Theorem</small></h3><p>以原版的左旋中微子为主角，连续完成 P → C → T。</p></div>
   <div class="breaking-v8-cpt-stage">
    <canvas class="breaking-v8-cpt-canvas" width="440" height="172" role="img" aria-label="中微子及反中微子在P、C、T联合变换中的概念动画"></canvas>
    <div class="breaking-v8-cpt-state" aria-live="polite"><strong>左旋中微子</strong><small>初始：动量向右，自旋向左</small></div>
    <div class="breaking-v8-cpt-controls" role="group" aria-label="依次执行宇称、电荷共轭与时间反演">
      <button type="button" data-cpt="P">① P · 宇称</button>
      <button type="button" data-cpt="C" disabled>② C · 电荷</button>
      <button type="button" data-cpt="T" disabled>③ T · 时间</button>
      <button type="button" data-cpt="reset" class="breaking-v8-cpt-reset">↺ 重来</button>
    </div>
    <p class="breaking-v8-cpt-explain">请按 P → C → T 依次操作；注意粒子颜色、运动方向和自旋箭头的变化。</p>
    <div class="breaking-v8-cpt-note">这张图说明变换如何组合，<strong>不是点击三次就证明 CPT 定理</strong>。CPT 定理依赖局域、洛伦兹不变等通常量子场论条件。此处采用高能中微子螺旋度示意；中微子有质量，螺旋度不等同于手征性。</div>
   </div>
  </section>
 </div>`;
 let wuMode='reference',cptState=0;
 const wu=$ (root,'.breaking-v8-wu-canvas'),cpt=$(root,'.breaking-v8-cpt-canvas');
 const wuKey=$(root,'.breaking-v8-wu-key'),wuExplain=$(root,'.breaking-v8-wu-explain');
 $$(root,'[data-wu]').forEach(b=>b.addEventListener('click',()=>{
   wuMode=b.dataset.wu;
   $$(root,'[data-wu]').forEach(x=>{let on=x===b;x.classList.toggle('active',on);x.setAttribute('aria-pressed',String(on));});
   wuKey.textContent=wuMode==='weak'?'观察到了电子发射的方向偏好':'请切换到真实弱衰变';
   wuExplain.textContent=wuMode==='weak'?'原子核自旋向上时，β 电子更偏向下方。宇称变换把电子动量翻转，却不翻转核自旋；镜像过程不以相同概率出现。':'参照模式仅代表“电子上下发射对称”的假设，绝不是钴-60 的另一种电磁衰变。';
   stage.dataset.v8Wu=wuMode;
   drawWu((performance.now()-start)/1000);
 }));
 const symNotes={
   P:'宇称 P：空间反演时，电子动量反向而核自旋方向不变。吴健雄实验表明，某些弱衰变不遵守 P。',
   C:'电荷共轭 C：将粒子换为对应反粒子。弱相互作用中的某些过程不遵守 C；它不等于宇宙物质—反物质不对称的全部解释。',
   T:'时间反演 T：时间、动量和角动量的变换有明确规则；某些弱过程存在微观 T 破坏，但这不同于宏观熵增。'
 };
 $$(root,'[data-sym]').forEach(btn=>btn.addEventListener('click',()=>{
  const type=btn.dataset.sym;btn.classList.add('broken');btn.querySelector('small').textContent='存在破坏实例';
  const cv=btn.querySelector('canvas'),x=cv.getContext('2d');x.clearRect(0,0,84,84);x.strokeStyle='#ff6c7a';x.lineWidth=2;x.shadowColor='#f56a70';x.shadowBlur=4;
  for(let k=0;k<7;k++){let a=(k/7)*TAU,x1=42,y1=42;x.beginPath();x.moveTo(x1,y1);for(let m=0;m<3;m++){let r=12+m*10;x.lineTo(x1+Math.cos(a+(m%2?.13:-.1))*r,y1+Math.sin(a+(m%2?.13:-.1))*r);}x.stroke();}
  $(root,'.breaking-v8-sym-text').textContent=symNotes[type];stage.dataset.v8LastSym=type;
 }));
 $(root,'.breaking-v8-reset-cracks').onclick=()=>{ $$(root,'[data-sym]').forEach(b=>{b.classList.remove('broken');b.querySelector('small').textContent='查看物理证据';b.querySelector('canvas').getContext('2d').clearRect(0,0,84,84);});$(root,'.breaking-v8-sym-text').textContent='P、C、T 是三种不同的变换。点击一张卡片观察“破缺”并读出具体含义。';};
 const cptNames=[
 ['左旋中微子','初始：动量向右，自旋向左'],
 ['P：右旋中微子态','动量反向，自旋保持；弱相互作用不单独遵守 P'],
 ['C：右旋反中微子态','改为反粒子，动量和自旋方向不变'],
 ['T：右旋反中微子对应态','动量、自旋同时反向；到达 CPT 对应态（非证明）']
 ];
 function syncCPT(){let [name,info]=cptNames[cptState];$(root,'.breaking-v8-cpt-state strong').textContent=name;$(root,'.breaking-v8-cpt-state small').textContent=info;
   for(const b of $$(root,'[data-cpt]')){let s=b.dataset.cpt;b.disabled=s==='P'?cptState!==0:s==='C'?cptState!==1:s==='T'?cptState!==2:false;b.classList.toggle('done',s==='P'&&cptState>=1||s==='C'&&cptState>=2||s==='T'&&cptState>=3);}
   let notes=[
    '请按 P → C → T 依次操作；注意粒子颜色、运动方向和自旋箭头的变化。',
    'P：动量 p 反向，自旋 S 不变。相对于运动方向，左旋变右旋。',
    'C：中微子变反中微子；p、S 都不变，所以仍为右旋。',
    'T：动量 p 与自旋 S 一同反向，右旋状态保持。联合 CPT 使完整过程与对应过程等概率。'
   ];$(root,'.breaking-v8-cpt-explain').textContent=notes[cptState];stage.dataset.v8CptStage=String(cptState);}
 $$(root,'[data-cpt]').forEach(b=>b.addEventListener('click',()=>{let s=b.dataset.cpt;if(s==='reset')cptState=0;else if(s==='P'&&cptState===0)cptState=1;else if(s==='C'&&cptState===1)cptState=2;else if(s==='T'&&cptState===2)cptState=3;syncCPT();drawCPT((performance.now()-start)/1000);}));syncCPT();
 function drawNucleus(ctx,x,y){
  const g=ctx.createRadialGradient(x-6,y-7,2,x,y,26);g.addColorStop(0,'#81c5ff');g.addColorStop(.55,'#367cf3');g.addColorStop(1,'#122a69');
  ctx.save();ctx.shadowBlur=17;ctx.shadowColor='#348ff9';disc(ctx,x,y,22,g);ctx.restore();label(ctx,'Co-60',x,y+4,10,'#fff');
 }
 function wuPanel(ctx,x,title,weak,isMirror,t){
   label(ctx,title,x,22,15,'#d8e8ff');
   const y=98;drawNucleus(ctx,x,y);
   arrow(ctx,x,y-20,x,y-66,'#f9ca54',3.3);label(ctx,'核自旋 ↑',x+42,y-58,11,'#f9d986','left');
   const preferDown=weak&&!isMirror,preferUp=weak&&isMirror;
   for(let i=0;i<10;i++){
     const isDown=weak?(preferDown?i<8:i<2):i<5;
     const d=isDown?1:-1;const r=22+((t*.22+i*.121)%1)*33;
     disc(ctx,x+((i%3)-1)*8+(i%2?3:-3),y+d*r,3.3,'#64dce8');
   }
   arrow(ctx,x,y+20,x,y+56,'#fa8b93',2);arrow(ctx,x,y-20,x,y-56,'#74dfe2',2);
   const k=weak?(preferDown?'向下偏多':'P 变换：向上偏多'):'上下概率相同（假设）';
   label(ctx,k,x,190,11,weak?(isMirror?'#ffb18c':'#f6d8a5'):'#9cebd9');
   if(weak&&isMirror){ctx.save();ctx.setLineDash([4,5]);ctx.strokeStyle='#fa757b';ctx.lineWidth=1.5;ctx.strokeRect(x-116,29,232,164);ctx.restore();}
 }
 function drawWu(t){
  const c=validCanvas(wu);if(!c)return;const {ctx,width:w,height:h}=c;
  ctx.save();
  if(w<560){
   ctx.scale(w/390,h/372);ctx.fillStyle='#060c20';ctx.fillRect(0,0,390,372);
   const weak=wuMode==='weak';
   function compactPanel(cy,top,title,isMirror){
    label(ctx,title,195,top+15,14,'#d8e8ff');
    drawNucleus(ctx,195,cy);
    arrow(ctx,195,cy-20,195,cy-57,'#f9ca54',2.8);label(ctx,'核自旋 ↑',242,cy-46,11,'#f9d986','left');
    const preferDown=weak&&!isMirror;
    for(let i=0;i<8;i++){
     const isDown=weak?(preferDown?i<6:i<2):i<4;
     const d=isDown?1:-1,r=21+((t*.2+i*.139)%1)*27;
     disc(ctx,195+((i%4)-1.5)*9,cy+d*r,3.5,'#64dce8');
    }
    arrow(ctx,195,cy+20,195,cy+48,'#fa8b93',2);arrow(ctx,195,cy-20,195,cy-48,'#74dfe2',2);
    label(ctx,weak?(isMirror?'P 变换后的电子偏向 ↑':'实际观测的电子偏向 ↓'):'上下发射概率相同（假设）',195,cy+75,11,weak?'#f5c49b':'#a3e8d9');
    if(weak&&isMirror){ctx.save();ctx.setLineDash([4,6]);ctx.strokeStyle='#f18b99';ctx.strokeRect(62,top+23,266,132);ctx.restore();}
   }
   compactPanel(95,8,weak?'真实：钴-60 的弱衰变':'对称参照（假设）',false);
   line(ctx,34,184,356,184,'#66799d88',1.5);
   compactPanel(276,193,weak?'空间反演 P 后的比较':'镜像参照（假设）',true);
  }else{
   ctx.scale(w/800,h/205);ctx.fillStyle='#060c20';ctx.fillRect(0,0,800,205);
   ctx.fillStyle='#263455aa';ctx.fillRect(393,20,14,169);line(ctx,400,20,400,189,'#65738e',1.4);
   wuPanel(ctx,200,wuMode==='weak'?'现实 · Co-60 弱衰变':'对称参照（假设）',wuMode==='weak',false,t);
   wuPanel(ctx,600,wuMode==='weak'?'宇称 P 变换后的对比':'空间反演（假设）',wuMode==='weak',true,t);
  }
  ctx.restore();
 }
 function drawCPT(t){
  const c=validCanvas(cpt);if(!c)return;
  const {ctx,width:w,height:h}=c;ctx.save();ctx.scale(w/440,h/172);
  ctx.fillStyle='#0a1229';ctx.fillRect(0,0,440,172);
  const px=216,py=45,anti=cptState>=2;
  // helicity is sign(S dot p), never the decorative halo spin direction.
  const pDir=[1,-1,-1,1][cptState],sDir=[-1,-1,-1,1][cptState];
  const isLeft=pDir*sDir<0,color=anti?'#f4ae84':'#79d6ea';
  const grad=ctx.createRadialGradient(px,py,2,px,py,38);
  grad.addColorStop(0,color+'66');grad.addColorStop(1,'#00000000');disc(ctx,px,py,38,grad);
  ctx.save();ctx.translate(px,py);
  // Light trail is a mnemonic for helicity, NOT a literal spinning particle.
  // P changes helicity; C and T preserve helicity in this sequential example.
  const haloDir=isLeft?-1:1;
  ctx.rotate(t*.72*haloDir);
  ctx.beginPath();ctx.ellipse(0,0,34,11,.2,0,TAU);ctx.strokeStyle=color+'c0';ctx.lineWidth=1.65;ctx.stroke();
  const phi=t*.80*haloDir;
  for(let i=0;i<3;i++){const theta=phi+i*TAU/3;
    disc(ctx,33*Math.cos(theta),10*Math.sin(theta),2.5,i===0?'#fff2bf':color);
  }
  ctx.restore();
  stage.dataset.v16HaloDir=String(haloDir);
  disc(ctx,px,py,13,'#e8f5ff');label(ctx,anti?'ν̄':'ν',px,py+5,16,'#172848');
  label(ctx,anti?'反中微子':'中微子',px+27,py+5,12,color,'left');
  label(ctx,'动量 p',46,92,12,'#78e4f0','left');
  label(ctx,'自旋 S',46,126,12,'#f7c678','left');
  line(ctx,130,88,330,88,'#586b91',1);line(ctx,130,122,330,122,'#586b91',1);
  disc(ctx,230,88,3.5,'#82e7ed');disc(ctx,230,122,3.5,'#f4cb77');
  arrow(ctx,230,88,230+pDir*93,88,'#66dfe8',3.5);
  arrow(ctx,230,122,230+sDir*93,122,'#f4c775',3.5);
  label(ctx,isLeft?'左旋：p 与 S 反向':'右旋：p 与 S 同向',220,154,13,isLeft?'#a6edf2':'#f9da99');
  stage.dataset.v8CptParticle=anti?'antineutrino':'neutrino';
  stage.dataset.v8MomentumDir=String(pDir);stage.dataset.v8SpinDir=String(sDir);
  stage.dataset.v8Helicity=isLeft?'left':'right';ctx.restore();
 }
 let start=performance.now();function tick(t){if(currentView!=='symmetry-breaking'||!wu.isConnected)return;drawWu((t-start)/1000);drawCPT((t-start)/1000);safeRequestAnimationFrame(tick);}drawWu(0);drawCPT(0);safeRequestAnimationFrame(tick);
};

// Both research chapters now use the same uncluttered reading surface.
const EVIDENCE={
 wu:{year:'1957',name:'吴健雄实验',tag:'宇称 P 的可检验预言',question:'镜像实验中的电子发射概率应相同吗？',prediction:'如果弱相互作用守恒宇称，对齐的 Co-60 核在自旋方向上应没有这样的上下不对称。',measured:'使 Co-60 核自旋取向一致，统计 β 电子相对核自旋方向的发射情况。',conclusion:'实验观测到了明显方向偏好，因此弱相互作用不遵守宇称 P。',boundary:'箭头和粒子数只是说明观察方法，不是当年的真实计数。',refs:[['1957 原始论文','https://journals.aps.org/pr/abstract/10.1103/PhysRev.105.1413'],['诺贝尔奖资料','https://www.nobelprize.org/prizes/physics/1957/summary/']]},
 jpsi:{year:'1974',name:'J/ψ 的发现',tag:'从共振信号识别新粒子',question:'什么观测能支持粲夸克的存在？',prediction:'包含粲夸克的束缚态，可能在特定质量附近出现共振信号。',measured:'两个独立实验团队研究碰撞产物及其不变质量分布，观察到约 3.1 GeV 的窄共振。',conclusion:'J/ψ 为粲夸克及夸克模型提供重要实验证据。',boundary:'曲线是概念性绘制，峰的形状、显著性与误差不能从图中计算。',refs:[['SLAC 实验史','https://ahro.slac.stanford.edu/history-bits/november-revolution-physics'],['Brookhaven 实验史','https://www.bnl.gov/decadeofdiscovery/index.php']]},
 higgs:{year:'2012',name:'希格斯粒子',tag:'从衰变产物重建短寿命粒子',question:'看不见瞬间衰变的粒子，如何证实它？',prediction:'标准模型预期存在希格斯玻色子，其衰变产物可在若干末态形成共同的质量结构。',measured:'ATLAS 和 CMS 分析不同衰变道的能量和径迹，重建不变质量并估计背景。',conclusion:'2012 年两组实验在约 125 GeV 发现符合发现标准的新玻色子信号，后续研究支持其希格斯身份。',boundary:'单一四轻子示意事件不能代表发现；确认依靠大样本、背景估计和多渠道独立核验。',refs:[['CERN：希格斯发现','https://home.cern/science/physics/higgs-boson'],['ATLAS：希格斯专题','https://atlas.cern/Discover/Physics/Higgs']]}
};
function evidenceVisual(key){
 let head=`<svg viewBox="0 0 720 420" role="img" aria-label="${EVIDENCE[key].name}原理示意，非实验原始数据" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="v8g"><stop stop-color="#182c4a"/><stop offset="1" stop-color="#080e23"/></radialGradient></defs><rect width="720" height="420" rx="14" fill="url(#v8g)"/><g stroke="#6884ae" stroke-opacity=".09">${Array.from({length:12},(_,i)=>`<path d="M${35+i*60} 22 V398"/>`).join('')}${Array.from({length:7},(_,i)=>`<path d="M28 ${38+i*55} H690"/>`).join('')}</g>`;
 if(key==='wu')return head+`<line x1="360" y1="50" x2="360" y2="345" stroke="#7882a0" stroke-opacity=".5" stroke-dasharray="6 7"/>
 <text x="186" y="60" text-anchor="middle" fill="#c6def1" font-size="17">真实弱衰变</text><text x="535" y="60" text-anchor="middle" fill="#d7c3bd" font-size="17">空间反演后的对应过程</text>
 <circle cx="186" cy="209" r="50" fill="#203b68" stroke="#6eacde" stroke-width="2"/><circle cx="535" cy="209" r="50" fill="#203b68" stroke="#6eacde" stroke-width="2"/>
 <text x="186" y="217" text-anchor="middle" fill="white" font-size="20">⁶⁰Co</text><text x="535" y="217" text-anchor="middle" fill="white" font-size="20">P(⁶⁰Co)</text>
 <path d="M186 153 V92 l-9 13 m9-13 l9 13 M535 153 V92 l-9 13 m9-13 l9 13" stroke="#f3d075" stroke-width="5" fill="none" stroke-linecap="round"/>
 <path d="M186 267 V338 l-9 -13 m9 13 l9 -13" stroke="#69deeb" stroke-width="5" fill="none"/><path d="M535 153 V101 l-9 13 m9-13 l9 13" stroke="#ef8b90" stroke-width="5" fill="none"/>
 <text x="186" y="365" fill="#72e0ea" text-anchor="middle" font-size="14">电子动量 ↓ 偏多</text><text x="535" y="365" fill="#ed9b9f" text-anchor="middle" font-size="14">P 变换：电子动量 ↑</text>
 <text x="360" y="398" fill="#9daccc" text-anchor="middle" font-size="13">自旋是轴矢量，不随空间反演改变</text></svg>`;
 if(key==='jpsi'){
  const pts=[];for(let i=0;i<=180;i++){const x=72+i*3.06,baseline=310-15*Math.sin(i*.02),peak=190*Math.exp(-.5*Math.pow((i-90)/6.5,2));pts.push(`${i?'L':'M'}${x.toFixed(1)},${(baseline-peak).toFixed(1)}`);}
  const bline=[];for(let i=0;i<=90;i++){let x=72+i*6.12,y=310-15*Math.sin(i*.04);bline.push(`${i?'L':'M'}${x.toFixed(1)},${y.toFixed(1)}`);}
  return head+`<text x="38" y="45" fill="#c3d9f0" font-size="15">碰撞信号的质量分布（示意）</text><path d="M72 65 V350 H643" fill="none" stroke="#91a6c6" stroke-width="2"/>
  <path d="${bline.join(' ')}" stroke="#697b9d" stroke-width="3" stroke-dasharray="7 7" fill="none"/>
  <path d="${pts.join(' ')}" stroke="#6bdade" stroke-width="4" fill="none"/>
  <path d="M347 102 V348" stroke="#f8cc77" stroke-dasharray="5 7" stroke-width="2"/><text x="367" y="100" fill="#f9d997" font-size="19">J/ψ 约 3.1 GeV</text>
  <text x="28" y="85" fill="#a7b9d2" font-size="12">事件数</text><text x="356" y="385" fill="#b3c8df" text-anchor="middle" font-size="15">重建不变质量</text>
  <text x="475" y="316" fill="#b3c7de" font-size="14">虚线：背景示意</text></svg>`;
 }
 return head+`<text x="34" y="43" fill="#c4daec" font-size="15">以 H → ZZ* → 4ℓ 为例</text>
   <circle cx="360" cy="196" r="112" fill="none" stroke="#415c94" stroke-width="2" stroke-dasharray="7 9"/><circle cx="360" cy="196" r="23" fill="#f6cf76"/>
   <text x="360" y="202" text-anchor="middle" fill="#182444" font-size="18" font-weight="bold">H?</text>
   <path d="M360 196 L518 95 M360 196 L522 302 M360 196 L202 95 M360 196 L195 303" stroke="#72d7e7" stroke-width="3"/>
   <circle cx="518" cy="95" r="9" fill="#ff9e93"/><circle cx="522" cy="302" r="9" fill="#ff9e93"/><circle cx="202" cy="95" r="9" fill="#89ebd5"/><circle cx="195" cy="303" r="9" fill="#89ebd5"/>
   <text x="547" y="96" fill="#e9e8f0" font-size="17">e⁺</text><text x="549" y="307" fill="#e9e8f0" font-size="17">e⁻</text>
   <text x="162" y="97" fill="#e9e8f0" font-size="17">μ⁺</text><text x="155" y="309" fill="#e9e8f0" font-size="17">μ⁻</text>
   <text x="360" y="376" fill="#bed3e7" font-size="15" text-anchor="middle">测到末态轨迹 → 重建不变质量 → 判断是否存在共同信号</text></svg>`;
}
function externalLinks(refs){return refs.map(([n,u])=>`<a href="${u}" target="_blank" rel="noopener noreferrer">${n}</a>`).join('<span class="v8-link-div"> · </span>');}
window.renderEvidenceV5=function renderEvidenceV8(){
 const root=document.getElementById('view-science-evidence');if(!root)return;
 root.innerHTML=`<article class="v8-research v8-evidence">
 <header class="v8-research-title"><span class="v8-kicker">RESEARCH 01 · 证据</span><h2>我们怎么知道？</h2><p>理论能够提出预言，但<strong>证据来自可重复的测量</strong>。粒子不能简单靠“拍一张照片”来证实。</p></header>
 <div class="v8-research-surface">
   <div class="v8-proof-line"><span>提出可检验预言</span><i>→</i><span>设计测量</span><i>→</i><span>排除背景</span><i>→</i><span>交叉确认</span></div>
   <div class="v8-tabs" role="group" aria-label="切换实验案例"><button data-evi="wu" type="button">1957 · 宇称</button><button data-evi="jpsi" type="button">1974 · J/ψ</button><button data-evi="higgs" type="button">2012 · 希格斯</button></div>
   <div class="v8-research-focus"><div class="v8-figure"><div class="v8-figure-image"></div><p class="v8-figure-legend">科学机制示意 · 并非原始实验数据</p></div><div class="v8-reading"><div class="v8-reading-kicker"></div><h3></h3><div class="v8-facts"><div><b>预测</b><p class="v8-predict"></p></div><div><b>测量</b><p class="v8-measure"></p></div><div><b>结论</b><p class="v8-conclude"></p></div><div><b>边界</b><p class="v8-boundary"></p></div></div><div class="v8-refs"></div></div></div>
 </div>
 <footer class="v8-research-footer"><p><b>带走一个判断：</b> 信号是什么、背景是什么、哪些结论尚未被证明？</p><button type="button" data-target="limits">继续：标准模型的边界 →</button></footer>
 </article>`;
 const select=(key)=>{const c=EVIDENCE[key];if(!c)return;
 $$(root,'[data-evi]').forEach(b=>{b.classList.toggle('active',b.dataset.evi===key);b.setAttribute('aria-pressed',String(b.dataset.evi===key));});
 $(root,'.v8-figure-image').innerHTML=evidenceVisual(key);
 $(root,'.v8-reading-kicker').textContent=c.year+' · '+c.tag;
 $(root,'.v8-reading h3').textContent=c.question;
 $(root,'.v8-predict').textContent=c.prediction;$(root,'.v8-measure').textContent=c.measured;$(root,'.v8-conclude').textContent=c.conclusion;$(root,'.v8-boundary').textContent=c.boundary;
 $(root,'.v8-refs').innerHTML=externalLinks(c.refs);root.dataset.v8EvidenceCase=key;
 };
 $$(root,'[data-evi]').forEach(b=>b.onclick=()=>select(b.dataset.evi));
 $(root,'[data-target]').onclick=()=>switchView('limits');
 select(root.dataset.v8EvidenceCase||'wu');
};
const LIMITS=[
 {id:'gravity',n:'01',title:'引力',short:'为什么没有包含时空引力？',known:'广义相对论在大量天文与精密实验中成功描述了引力和时空几何。',unknown:'怎样在经过实验证实的框架内，使引力与量子理论相容，目前仍没有公认的完整答案。',implication:'标准模型没有描述引力，不代表引力不存在或已经证明不可能量子化。',action:'gravity',actionLabel:'看引力专题'},
 {id:'dark',n:'02',title:'暗物质',short:'重力效应可见，身份仍未知',known:'星系、星系团、引力透镜和宇宙学观测提供了显著的额外引力效应证据。',unknown:'这些效应是否源于新的粒子、若有其性质如何，尚未确定。',implication:'目前的粒子标准模型不能自然解释全部暗物质相关现象；不能把任何一个候选粒子写成已发现。'},
 {id:'neutrino',n:'03',title:'中微子质量',short:'振荡证实质量差，起源未定',known:'中微子振荡实验表明不同质量本征态存在质量平方差，至少部分中微子质量非零。',unknown:'具体质量机制、绝对质量标度及中微子是否为马约拉纳粒子尚待厘清。',implication:'最简的零中微子质量标准模型需要扩展；不能把尚不确定的机制当成已解释。'},
 {id:'asymmetry',n:'04',title:'正反物质不对称',short:'为何可见宇宙主要是物质？',known:'一些弱相互作用过程存在 CP 破坏；宇宙观测显示普通物质显著多于反物质。',unknown:'已知标准模型效应不足以完整解释宇宙的重子不对称。',implication:'镜像 P、粒子反粒子 C 与 CP 破坏要分开理解；目前尚无被公认的完整解释。',action:'symmetry-breaking',actionLabel:'看对称性破缺'},
 {id:'generations',n:'05',title:'三代与质量参数',short:'为什么恰好三代、质量差这么大？',known:'标准模型能使用三代费米子及其耦合参数，成功计算许多实验结果。',unknown:'这些参数为什么恰好取现有数值、为何存在三代，不由现有基本结构唯一给出。',implication:'把测得的参数放进理论进行预测，不等于理论已经解释了参数的根源。',action:'grid',actionLabel:'看标准模型粒子表'},
 {id:'energy',n:'06',title:'暗能量',short:'宇宙为什么加速膨胀？',known:'宇宙学观测支持宇宙膨胀在加速；这是一个独立于粒子标准模型的重大研究问题。',unknown:'驱动宇宙加速膨胀的物理本质和精确机制仍然有待研究。',implication:'暗能量主要属于宇宙学未解问题，不是已经在实验室发现的标准模型基本粒子。'}
];
function limitsDiagram(){return `<svg viewBox="0 0 480 364" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="标准模型涉及已知粒子与强、弱、电磁相互作用；图中虚线表示其理论边界，不是空间尺度"><defs><radialGradient id="v8scope"><stop stop-color="#152b4a"/><stop offset="1" stop-color="#080f23"/></radialGradient></defs><rect width="480" height="364" rx="14" fill="url(#v8scope)"/>
 <circle cx="240" cy="178" r="139" fill="none" stroke="#8ca4cf" stroke-width="1.5" stroke-dasharray="5 9" opacity=".6"/>
 <circle cx="240" cy="178" r="103" fill="#1d3452" stroke="#63ccdb" stroke-width="2" stroke-opacity=".9"/>
 <circle cx="240" cy="178" r="59" fill="#172743" stroke="#9fc3e5" stroke-width="1.5"/>
 <text x="240" y="172" text-anchor="middle" fill="#e6f7ff" font-size="18" font-weight="bold">标准模型</text><text x="240" y="194" text-anchor="middle" fill="#a3c2d9" font-size="13">已检验的适用范围</text>
 <g fill="#e6f5fb" font-size="14" text-anchor="middle"><text x="240" y="105">强相互作用</text><text x="316" y="218">弱相互作用</text><text x="166" y="218">电磁相互作用</text><text x="240" y="263" fill="#e6d3a0">希格斯机制</text></g>
 <g stroke="#8193b1" stroke-width="1.5" fill="none" opacity=".8"><path d="M240 39 V20"/><path d="M380 178 H399"/><path d="M240 317 V336"/></g><text x="240" y="17" fill="#b7c9e5" text-anchor="middle" font-size="12">已知粒子与三种相互作用</text><text x="240" y="355" fill="#d7bfae" text-anchor="middle" font-size="13">虚线之外：并非由此理论全面解释</text></svg>`;}
window.renderLimitsV5=function renderLimitsV8(){
 const root=document.getElementById('view-science-limits');if(!root)return;
 root.innerHTML=`<article class="v8-research v8-limits">
  <header class="v8-research-title"><span class="v8-kicker">RESEARCH 02 · 边界</span><h2>标准模型解释不了什么？</h2><p>一个理论可以在自己的适用范围内非常成功，同时<strong>并不等于完整解释宇宙</strong>。</p></header>
  <div class="v8-research-surface">
    <div class="v8-limits-intro"><b>它解释了什么</b><span>已知基本粒子、强／弱／电磁相互作用，以及希格斯机制中的许多可检验现象。</span><i></i><b>它尚未回答</b><span>引力与量子理论怎样协调？宇宙和物质为什么呈现今天的样子？</span></div>
    <div class="v8-limits-body">
      <div class="v8-limits-scope">${limitsDiagram()}<p>范围示意：虚线不是宇宙空间边界，而是理论的解释边界。</p></div>
      <div class="v8-limits-panel"><div class="v8-limits-options" role="group" aria-label="选择一个尚未解决的问题">${LIMITS.map(x=>`<button type="button" data-limit="${x.id}"><small>${x.n}</small><span>${x.title}</span></button>`).join('')}</div>
        <div class="v8-limits-answer" aria-live="polite"><span class="v8-reading-kicker">一个待回答的问题</span><h3></h3><p class="v8-limit-question"></p><div class="v8-limit-pair"><div><b>我们已经知道</b><p class="v8-limit-known"></p></div><div><b>还没有解决</b><p class="v8-limit-unknown"></p></div></div><p class="v8-limit-interpret"></p><button type="button" class="v8-limits-deep" hidden></button></div>
      </div>
    </div>
  </div>
  <footer class="v8-research-footer"><p><b>带走一个判断：</b> 理论有边界，不等于理论不可靠；仍有问题，并不妨碍我们相信经过反复检验的部分。</p><button type="button" data-target="evidence">返回：怎么知道 ←</button></footer>
 </article>`;
 function choose(key){const l=LIMITS.find(x=>x.id===key);if(!l)return;
 $$(root,'[data-limit]').forEach(b=>{b.classList.toggle('active',b.dataset.limit===key);b.setAttribute('aria-pressed',String(b.dataset.limit===key));});
 $(root,'.v8-limits-answer h3').textContent=l.title;
 $(root,'.v8-limit-question').textContent=l.short;
 $(root,'.v8-limit-known').textContent=l.known;$(root,'.v8-limit-unknown').textContent=l.unknown;
 $(root,'.v8-limit-interpret').textContent='判断边界：'+l.implication;
 const b=$(root,'.v8-limits-deep');b.hidden=!l.action;if(l.action){b.textContent=l.actionLabel+' →';b.onclick=()=>switchView(l.action);}
 root.dataset.v8Limit=key;
 }
 $$(root,'[data-limit]').forEach(b=>b.onclick=()=>choose(b.dataset.limit));
 $(root,'[data-target]').onclick=()=>switchView('evidence');
 choose(root.dataset.v8Limit||'gravity');
};
})();


// --- COMPILED lesson_v9.js --- 
/* V9: teach-through-visuals consistency patch. Preserve V8's core stages. */
(function(){
'use strict';
const $=(root,q)=>root.querySelector(q);
const $$=(root,q)=>Array.from(root.querySelectorAll(q));
function svgArrow(x,y,dx,dy,color){const endX=x+dx,endY=y+dy;
 const a=Math.atan2(dy,dx),ax=endX-11*Math.cos(a-.42),ay=endY-11*Math.sin(a-.42),bx=endX-11*Math.cos(a+.42),by=endY-11*Math.sin(a+.42);
 return `<path d="M${x} ${y} L${endX} ${endY}" stroke="${color}" stroke-width="4" stroke-linecap="round"/><path d="M${ax} ${ay} L${endX} ${endY} L${bx} ${by}" stroke="${color}" fill="none" stroke-linecap="round" stroke-width="4"/>`;
}
function symScene(type){
 const frame=(body)=>`<svg viewBox="0 0 540 177" role="img" aria-label="${type} 物理变换对照示意，不是原始实验数据" xmlns="http://www.w3.org/2000/svg">`+body+'</svg>';
 if(type==='P')return {
  heading:'P · 宇称：翻转空间方向',
  hint:'只翻转电子动量；核自旋是轴矢量，空间反演后方向不变。',
  why:'实际 Co-60 弱衰变中，电子偏向核自旋的反方向。镜像后的分布与实际规律不同，所以 P 不守恒。',
  evidence:'吴健雄等，1956 年实验；1957 年发表。',
  art:frame(`<path d="M270 14 V162" stroke="#607492" stroke-dasharray="5 6"/><text x="135" y="25" fill="#cce5fb" text-anchor="middle" font-size="15">真实弱衰变</text><text x="408" y="25" fill="#cce5fb" text-anchor="middle" font-size="15">P 变换后的假想过程</text>
    <circle cx="130" cy="89" r="21" fill="#2b4777" stroke="#77afd7"/><circle cx="409" cy="89" r="21" fill="#2b4777" stroke="#77afd7"/>
    <text x="130" y="94" fill="#fff" text-anchor="middle" font-size="12">Co-60</text><text x="409" y="94" fill="#fff" text-anchor="middle" font-size="12">Co-60</text>
    ${svgArrow(130,63,0,-35,'#f6ce79')}${svgArrow(409,63,0,-35,'#f6ce79')}${svgArrow(130,115,0,34,'#74e3ea')}${svgArrow(409,65,0,-29,'#74e3ea')}
    <text x="165" y="55" fill="#f6d38c" font-size="11">核自旋 ↑</text><text x="444" y="55" fill="#f6d38c" font-size="11">核自旋 ↑</text>
    <text x="130" y="166" text-anchor="middle" fill="#96e9ec" font-size="12">电子偏向 ↓</text><text x="409" y="166" text-anchor="middle" fill="#f7b5a0" font-size="12">镜像电子偏向 ↑</text>`)
 };
 if(type==='C')return {
  heading:'C · 电荷共轭：粒子变反粒子',
  hint:'比较高能中微子与做 C 变换的反中微子：只换粒子身份，不能偷偷同时翻转自旋。',
  why:'弱相互作用更偏好左手征中微子和右手征反中微子。对左旋中微子单独作 C 变换，不会得到同样参与弱作用的对应过程，因此 C 可被破坏。',
  evidence:'这是高能近似的手征／螺旋度对照，不是中微子质量严格为零的断言。',
  art:frame(`<path d="M270 16 V162" stroke="#607492" stroke-dasharray="5 6"/><text x="128" y="28" text-anchor="middle" fill="#cce5fb" font-size="15">真实弱过程中的 ν</text><text x="402" y="28" text-anchor="middle" fill="#cce5fb" font-size="15">仅做 C 变换的 ν̄</text>
    <circle cx="126" cy="80" r="24" fill="#163b56" stroke="#79dce9" stroke-width="3"/><circle cx="404" cy="80" r="24" fill="#513c39" stroke="#f4a58c" stroke-width="3"/>
    <text x="126" y="87" text-anchor="middle" fill="#d8fcff" font-size="21">ν</text><text x="404" y="87" text-anchor="middle" fill="#ffe8cf" font-size="21">ν̄</text>
    ${svgArrow(68,125,115,0,'#75dde5')}${svgArrow(347,125,115,0,'#75dde5')}${svgArrow(183,147,-115,0,'#f2ca7a')}${svgArrow(462,147,-115,0,'#f2ca7a')}
    <text x="130" y="163" fill="#98e7ed" text-anchor="middle" font-size="11">p →，S ←，左旋</text><text x="404" y="163" fill="#f6c8ac" text-anchor="middle" font-size="11">C 变换后仍是左旋</text>`)
 };
 return {
  heading:'T · 时间反演：比较两个互逆过程',
  hint:'T 不等于“把视频倒放”。实验应比较正确配对的量子态转变概率。',
  why:'BABAR 2012 年比较了中性 B 介子系统的 T 互逆跃迁，发现对应转变概率不相等，直接观察到微观 T 破坏。',
  evidence:'图中两条长短条仅用于强调“概率可能不同”，不是实验的真实数值。',
  art:frame(`<text x="270" y="24" fill="#cce5fb" text-anchor="middle" font-size="14">同样的等待时间，比较 T 互逆跃迁</text>
    <rect x="33" y="42" width="114" height="43" rx="10" fill="#20345d" stroke="#879fe3"/><text x="90" y="68" fill="#e6efff" font-size="17" text-anchor="middle">B̄⁰</text>
    <rect x="390" y="42" width="114" height="43" rx="10" fill="#20345d" stroke="#879fe3"/><text x="447" y="68" fill="#e6efff" font-size="17" text-anchor="middle">B₋</text>
    ${svgArrow(155,63,221,0,'#7fe4e6')}${svgArrow(378,84,-221,0,'#f7ba86')}
    <text x="270" y="53" text-anchor="middle" fill="#9decef" font-size="11">正向</text><text x="270" y="99" text-anchor="middle" fill="#f7c3a1" font-size="11">T 互逆</text>
    <text x="50" y="127" fill="#b9d5ee" font-size="12">转变几率（定性示意）</text>
    <rect x="219" y="114" width="192" height="13" rx="6" fill="#397d93"/><rect x="219" y="137" width="115" height="13" rx="6" fill="#c7896f"/>
    <text x="427" y="126" fill="#78dce4" font-size="11">正向</text><text x="348" y="149" fill="#f5b88e" font-size="11">互逆</text>`)
 };
}
const beforeBreaking=window.renderSymmetryBreaking;
window.renderSymmetryBreaking=function renderSymmetryBreakingV9(){
 beforeBreaking();
 const root=document.querySelector('#view-symmetry-breaking .breaking-v8');if(!root)return;
 const grid=$(root,'.breaking-v8-sym-grid'),oldText=$(root,'.breaking-v8-sym-text');
 grid.innerHTML=[['P','🪞','空间反演','动量反向，自旋不变'],['C','◐','电荷共轭','粒子 ↔ 反粒子'],['T','⇄','时间反演','比较互逆跃迁']].map(([id,icon,title,sub])=>
  `<button type="button" class="v9-sym-button" data-v9sym="${id}" aria-pressed="false"><span class="v9-sym-icon">${icon}</span><b>${id} · ${title}</b><small>${sub}</small></button>`).join('');
 const box=document.createElement('div');box.className='v9-sym-scene';box.innerHTML=`<div class="v9-sym-visual"></div><h4></h4><p class="v9-sym-hint"></p><p class="v9-sym-why"></p><small class="v9-sym-evidence"></small>`;
 oldText.replaceWith(box);
 const reset=$(root,'.breaking-v8-reset-cracks');reset.textContent='重新比较 P、C、T';
 function select(id){let info=symScene(id);$(box,'.v9-sym-visual').innerHTML=info.art;
  $(box,'h4').textContent=info.heading;$(box,'.v9-sym-hint').textContent=info.hint;
  $(box,'.v9-sym-why').textContent=info.why;$(box,'.v9-sym-evidence').textContent=info.evidence;
  $$(grid,'[data-v9sym]').forEach(b=>{const active=b.dataset.v9sym===id;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
  root.parentElement.dataset.v9Sym=id;
 }
 $$(grid,'[data-v9sym]').forEach(b=>b.onclick=()=>select(b.dataset.v9sym));
 // Replace V8 reset handler, which assumed every card contained a crack canvas.
 const newReset=reset.cloneNode(true);reset.replaceWith(newReset);newReset.onclick=()=>select('P');
 select('P');
 const wuCaption=$(root,'.breaking-v8-wu-caption');wuCaption.insertAdjacentHTML('beforebegin',
  `<div class="v9-wu-legend"><span><i class="v9-legend-spin"></i>金色箭头：核自旋，P 后不变</span><span><i class="v9-legend-electron"></i>青色：β 电子，P 后方向反转</span><span>判据：镜像过程与真实过程是否等概率</span></div>`);
 $(root,'.breaking-v8-cpt-state').insertAdjacentHTML('afterend',
  `<div class="v9-cpt-legend">判定左旋／右旋只看箭头：<b>动量 p 与自旋 S 反向＝左旋；同向＝右旋</b>。粒子周围的光环不代表自旋。</div>`);
};

// V9 evidence: the prediction, measured signal, inference and limitation unfold
// in the same graphic, rather than a static illustration unrelated to four paragraphs.
const evidenceData={
 wu:{date:'1957 · 吴健雄实验',title:'宇称 P：镜像与现实是否服从同一规律？',rows:[
 ['预测','若弱衰变守恒宇称，定向 Co-60 核沿自旋的正、反两侧不应出现这种不对称。'],
 ['测量','将 Co-60 核自旋定向，分别统计沿自旋与逆自旋方向发出的 β 电子。'],
 ['结论','实测电子更偏向逆核自旋方向，证明弱相互作用不遵守 P 宇称。'],
 ['边界','图中发射频率仅是比例演示，不是 1956 年实验的计数；定向、温度与背景都需要控制。']],
 refs:[['NIST · 吴健雄实验','https://www.nist.gov/pml/fall-parity/reversal-parity-law-nuclear-physics'],['原始论文','https://journals.aps.org/pr/abstract/10.1103/PhysRev.105.1413']]},
 jpsi:{date:'1974 · J/ψ 发现',title:'怎样从碰撞产物中认出一个新粒子？',rows:[
 ['预测','若存在一种质量固定的短寿命共振态，它的衰变产物重建质量会集中在某处。'],
 ['测量','在碰撞实验中重建末态粒子的合计四动量，统计不同不变质量附近的事件数。'],
 ['结论','两组团队在约 3.1 GeV 附近发现窄共振 J/ψ，为粲夸克提供关键证据。'],
 ['边界','曲线为概念绘制，不是真实数据或显著性；需排除背景与仪器效应，并由独立实验验证。']],
 refs:[['SLAC · 十一月革命','https://ahro.slac.stanford.edu/history-bits/november-revolution-physics']]},
 higgs:{date:'2012 · 希格斯发现',title:'一个瞬间衰变的粒子，如何被发现？',rows:[
 ['预测','希格斯场机制预言相应玻色子，其衰变产生可由探测器识别的末态。'],
 ['测量','重建光子对、四轻子等多个末态的不变质量，比较信号和预期背景。'],
 ['结论','ATLAS、CMS 在约 125 GeV 观察到符合发现标准的新玻色子；随后证据支持希格斯身份。'],
 ['边界','一张四轻子事件图不是发现证据；还需大量事件、显著性检验及多个独立衰变道。']],
 refs:[['CERN · 希格斯玻色子','https://home.cern/science/physics/higgs-boson'],['ATLAS · Higgs','https://atlas.cern/Discover/Physics/Higgs']]}
};
function v9Canvas(canvas){const r=canvas.getBoundingClientRect(),w=r.width,h=r.height;if(w<1||h<1)return null;const d=Math.min(devicePixelRatio||1,2);const dw=Math.round(w*d),dh=Math.round(h*d);if(canvas.width!==dw||canvas.height!==dh){canvas.width=dw;canvas.height=dh;}const c=canvas.getContext('2d');c.setTransform(dw/610,0,0,dh/350,0,0);return c;}
function evLine(c,x,y,x2,y2,col,width=2,dash=[]){c.beginPath();c.setLineDash(dash);c.moveTo(x,y);c.lineTo(x2,y2);c.strokeStyle=col;c.lineWidth=width;c.stroke();c.setLineDash([]);}
function evCircle(c,x,y,r,col){c.beginPath();c.arc(x,y,r,0,Math.PI*2);c.fillStyle=col;c.fill();}
function evTxt(c,s,x,y,size=13,color='#d4eaff',align='left'){c.font=`${size}px system-ui,'Noto Sans SC',sans-serif`;c.textAlign=align;c.fillStyle=color;c.fillText(s,x,y);}
function evArrow(c,x,y,x2,y2,col){evLine(c,x,y,x2,y2,col,3);const a=Math.atan2(y2-y,x2-x);c.beginPath();c.moveTo(x2,y2);c.lineTo(x2-10*Math.cos(a-.43),y2-10*Math.sin(a-.43));c.lineTo(x2-10*Math.cos(a+.43),y2-10*Math.sin(a+.43));c.closePath();c.fillStyle=col;c.fill();}
function drawEvidence(c,key,step,t){
 c.fillStyle='#0a132d';c.fillRect(0,0,610,350);
 c.save();c.strokeStyle='#263856';c.lineWidth=.6;for(let x=32;x<610;x+=37){evLine(c,x,0,x,350,'#263856',.6);}for(let y=18;y<350;y+=37)evLine(c,0,y,610,y,'#263856',.6);c.restore();
 if(key==='wu'){
  evTxt(c,step===0?'先预测：若 P 守恒，向上、向下概率应相等':step===1?'测量：定向核发出的 β 电子更偏向下方':step===2?'比较：现实偏向 ↓，P 反演却要求 ↑':'边界：仅为概率示意，不能从这些点计算显著性',305,30,15,'#b8e3ef','center');
  evCircle(c,169,164,35,'#24436b');evCircle(c,169,164,26,'#3767a0');evTxt(c,'Co-60',169,169,14,'#fff','center');evArrow(c,169,119,169,65,'#f6cd79');evTxt(c,'核自旋 ↑',210,88,13,'#f5d892');
  // One color for electrons; direction is indicated by motion and arrows.
  const downRatio=step===0?.5:.78;
  for(let i=0;i<26;i++){const down=((i*17)%26)/26<downRatio,phase=(t*.32+i/26)%1,dir=down?1:-1;
    const r=39+phase*74,x=169+Math.sin(i*2.3)*36*(.4+.6*phase);
    evCircle(c,x,164+dir*r,3.4,'#78e4ed');
  }
  evTxt(c,'β 电子（青色粒子）',36,319,13,'#a7e9ee');
  evTxt(c,'统计发射方向 · 示意比例',422,82,12,'#a6bdda','center');
  const bx=350,top=111,scale=1.8,up=(1-downRatio)*100,down=downRatio*100;
  evTxt(c,'↑ 顺自旋',bx,123,12,'#bdd5e8');evTxt(c,'↓ 逆自旋',bx,209,12,'#bdd5e8');
  c.fillStyle='#2c445e';c.fillRect(bx,135,190,21);c.fillRect(bx,220,190,21);
  c.fillStyle='#76bacb';c.fillRect(bx,135,up*scale,21);c.fillRect(bx,220,down*scale,21);
  evTxt(c,step===0?'相等（假设）':'更偏向下方',439,286,14,step===0?'#a9eee1':'#f5d6a1','center');
  if(step>=2){evTxt(c,'P：动量翻转，自旋不翻转',435,316,12,'#f2b28a','center');}
  return;
 }
 if(key==='jpsi'){
  evTxt(c,step===0?'预测：新共振态应产生集中的质量信号':step===1?'测量：积累碰撞事件并重建不变质量':step===2?'结论：约 3.1 GeV 附近出现显著窄峰':'边界：图为模拟分布，显著性依赖真实数据',305,30,15,'#b8e3ef','center');
  evLine(c,77,56,77,288,'#8098b6',2);evLine(c,77,288,565,288,'#8098b6',2);
  evTxt(c,'事件数',21,67,12,'#aec5db');evTxt(c,'重建不变质量（GeV/c²）',315,324,13,'#aec5db','center');
  const center=340,area=step===0?0:step===1?Math.min(1,.25+(t%4)/4):1;
  c.beginPath();for(let i=0;i<190;i++){const x=80+i*2.4,background=240-30*Math.cos(i/93),peak=135*area*Math.exp(-.5*Math.pow((x-center)/13,2));
    const y=background-peak+Math.sin(i*5.7)*((step===0)?0:3.5);
    if(i===0)c.moveTo(x,y);else c.lineTo(x,y);
  }c.lineWidth=3;c.strokeStyle='#79e2e6';c.stroke();
  c.beginPath();for(let i=0;i<190;i++){const x=80+i*2.4,y=240-30*Math.cos(i/93);if(i===0)c.moveTo(x,y);else c.lineTo(x,y);}
  c.setLineDash([7,5]);c.lineWidth=2;c.strokeStyle='#9aacc8';c.stroke();c.setLineDash([]);
  if(step>=2){evLine(c,center,70,center,284,'#f6cf84',2,[4,6]);evTxt(c,'J/ψ ≈3.1 GeV',center+16,85,15,'#f6d995');}
  evTxt(c,'虚线：预期背景（示意）',87,53,11,'#a5b5d3');
  return;
 }
 evTxt(c,step===0?'预测：可能存在与希格斯场相关的新玻色子':step===1?'测量：探测衰变产物并重建质量':step===2?'结论：多个通道出现约 125 GeV 的信号':'边界：一个候选事件不是发现证据',305,30,15,'#b8e3ef','center');
 if(step<2){
  evCircle(c,305,150,21,'#f2d07e');evTxt(c,'H?',305,156,15,'#152039','center');
  const tracks=[[-142,-92,'e⁺','#f9a69b'],[146,-92,'e⁻','#f9a69b'],[-150,96,'μ⁺','#92e9e0'],[154,96,'μ⁻','#92e9e0']];
  tracks.forEach(([dx,dy,name,col],i)=>{const progress=step===0?.25:Math.min(1,.30+(t%3.5)/3.5),ex=305+dx*progress,ey=150+dy*progress;
    evLine(c,305,150,ex,ey,col,3);evCircle(c,ex,ey,7,col);evTxt(c,name,ex+12,ey+3,14,'#e9f3ff');});
  evTxt(c,'示意：H → ZZ* → 4ℓ（具体概率需统计）',305,314,13,'#afc9e6','center');
 }else{
  evLine(c,70,60,70,288,'#879db7',2);evLine(c,70,288,550,288,'#879db7',2);
  c.beginPath();for(let i=0;i<180;i++){let x=70+i*2.65,bg=250-28*Math.sin(i/170*Math.PI),peak=134*Math.exp(-.5*Math.pow((x-322)/19,2));let y=bg-peak;if(i)c.lineTo(x,y);else c.moveTo(x,y);}c.strokeStyle='#6ddde6';c.lineWidth=3;c.stroke();
  evLine(c,322,80,322,284,'#f1cb80',2,[6,5]);evTxt(c,'约 125 GeV',340,93,15,'#f7d997');evTxt(c,'多衰变道、大样本、独立检验',302,320,13,'#bbd3eb','center');
 }
}
window.renderEvidenceV5=function renderEvidenceV9(){
 const stage=document.getElementById('view-science-evidence');if(!stage)return;
 stage.innerHTML=`<article class="v8-research v9-evidence"><header class="v8-research-title"><span class="v8-kicker">RESEARCH 01 · 证据</span><h2>我们怎么知道？</h2><p>把理论的预言变成能比较、能排除背景、能重复的观察。</p></header>
 <section class="v8-research-surface"><div class="v9-proof-flow"><span>可检验预言</span><i>→</i><span>实际测量</span><i>→</i><span>比较背景</span><i>→</i><span>得出有边界的结论</span></div>
 <nav class="v8-tabs v9-evidence-tabs" role="group" aria-label="选择历史实验"><button type="button" data-evi="wu">1957 · 宇称</button><button type="button" data-evi="jpsi">1974 · J/ψ</button><button type="button" data-evi="higgs">2012 · 希格斯</button></nav>
 <div class="v9-evi-grid"><div class="v9-evi-visual"><canvas class="v9-evi-canvas" role="img" aria-label="随预测、测量、结论而变化的实验示意动画"></canvas><p>示意动画 · 不使用原始实验数据 · 不能用于统计推断</p><div class="v9-evi-tools"><button data-evi-prev type="button">‹ 上一步</button><span class="v9-evi-stage-label"></span><button data-evi-next type="button">下一步 ›</button><button data-evi-auto type="button">暂停自动演示</button></div></div>
 <div class="v9-evi-reading"><div class="v8-reading-kicker v9-evi-date"></div><h3 class="v9-evi-title"></h3><div class="v9-evi-steps" aria-label="证据推理的四个环节"></div><div class="v9-evi-links"></div></div></div></section>
 <footer class="v8-research-footer"><p><b>判断：</b> 一个漂亮图像不等于证据；关键是预言、测量、背景和独立确认如何连接。</p><button type="button" data-target="limits">继续：理论边界 →</button></footer></article>`;
 const canvas=$(stage,'.v9-evi-canvas');let key='wu',step=0,auto=true,start=performance.now(),lastSwitch=start;
 const modes=['预测','测量','结论','边界'];
 function update(){const data=evidenceData[key];$$(stage,'[data-evi]').forEach(b=>{let active=b.dataset.evi===key;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
  $(stage,'.v9-evi-date').textContent=data.date;$(stage,'.v9-evi-title').textContent=data.title;
  $(stage,'.v9-evi-stage-label').textContent=`${step+1} / 4 · ${modes[step]}`;
  $(stage,'.v9-evi-steps').innerHTML=data.rows.map(([kind,desc],i)=>`<button type="button" class="v9-evi-step ${i===step?'active':i<step?'done':''}" data-evstep="${i}" aria-current="${i===step?'step':'false'}"><span>${i+1}</span><b>${kind}</b><p>${desc}</p></button>`).join('');
  $$(stage,'[data-evstep]').forEach(b=>b.onclick=()=>{step=Number(b.dataset.evstep);lastSwitch=performance.now();update();});
  $(stage,'.v9-evi-links').innerHTML=data.refs.map(([label,url])=>`<a href="${url}" rel="noopener noreferrer" target="_blank">${label}</a>`).join(' · ');
  stage.dataset.v9EvidenceCase=key;stage.dataset.v9EvidenceStep=String(step);
 }
 $$(stage,'[data-evi]').forEach(b=>b.onclick=()=>{key=b.dataset.evi;step=0;lastSwitch=performance.now();update();});
 $(stage,'[data-evi-prev]').onclick=()=>{step=(step+3)%4;lastSwitch=performance.now();update();};
 $(stage,'[data-evi-next]').onclick=()=>{step=(step+1)%4;lastSwitch=performance.now();update();};
 $(stage,'[data-evi-auto]').onclick=()=>{auto=!auto;$(stage,'[data-evi-auto]').textContent=auto?'暂停自动演示':'继续自动演示';lastSwitch=performance.now();};
 $(stage,'[data-target]').onclick=()=>switchView('limits');
 if(matchMedia('(prefers-reduced-motion: reduce)').matches){auto=false;$(stage,'[data-evi-auto]').textContent='继续自动演示';}
 update();
 function animate(now){if(currentView!=='evidence'||!canvas.isConnected)return;
  if(auto&&now-lastSwitch>4600){step=(step+1)%4;lastSwitch=now;update();}
  const ctx=v9Canvas(canvas);if(ctx)drawEvidence(ctx,key,step,(now-start)/1000);
  safeRequestAnimationFrame(animate);
 }safeRequestAnimationFrame(animate);
};

const v9Limits={
 gravity:{name:'引力',question:'为什么引力没有包含在粒子标准模型中？',known:'广义相对论已成功描述大量引力和时空现象。',unknown:'如何让引力与量子理论形成经实验检验的相容框架，仍未解决。',warning:'不包含引力不意味着引力不存在。',action:'gravity'},
 dark:{name:'暗物质',question:'额外的引力效应来自什么？',known:'星系运动、引力透镜等观测支持存在难以用已知可见物质解释的引力效应。',unknown:'其来源是否为新粒子、具有什么性质尚未确定。',warning:'观测支持额外引力效应，不代表某个候选暗物质粒子已经发现。'},
 neutrino:{name:'中微子质量',question:'中微子为什么具有非零质量？',known:'中微子振荡证明质量本征态之间存在非零质量平方差。',unknown:'绝对质量大小、质量产生机制及其是否为马约拉纳粒子仍待研究。',warning:'最简的零中微子质量标准模型需要扩展。'},
 asymmetry:{name:'物质与反物质',question:'为什么可见宇宙主要由物质构成？',known:'部分弱过程存在 CP 破坏；宇宙普通物质多于反物质。',unknown:'目前已知的标准模型 CP 破坏不足以解释观测到的宇宙重子不对称。',warning:'CP 破坏是线索，但还不是完整答案。',action:'symmetry-breaking'},
 generations:{name:'三代与质量',question:'为什么有三代粒子，质量差这么多？',known:'标准模型把三代粒子和相关参数纳入计算，能高度准确地预测很多现象。',unknown:'目前理论没有从更基础的原理唯一推出这些参数的数值。',warning:'用测得的参数准确预测，不等于解释这些参数的根源。',action:'grid'},
 darkenergy:{name:'暗能量',question:'宇宙加速膨胀的原因是什么？',known:'多种宇宙学观测支持宇宙处于加速膨胀阶段。',unknown:'其根本机制、宇宙常数问题等仍是开放课题。',warning:'暗能量不是已经在实验室发现的标准模型粒子。'}
};
const v9LimitOrder=['gravity','dark','neutrino','asymmetry','generations','darkenergy'];
function drawLimits(c,key,time){
 c.fillStyle='#0a1329';c.fillRect(0,0,610,350);
 const pulse=0.5+0.5*Math.sin(time*2.1);
 // The center is an explanatory boundary, not a literal radius in space.
 c.beginPath();c.arc(201,173,135,0,2*Math.PI);c.setLineDash([5,9]);c.strokeStyle='#6887b4';c.lineWidth=2;c.stroke();c.setLineDash([]);
 c.beginPath();c.arc(201,173,116,0,2*Math.PI);c.fillStyle='#173351';c.fill();c.strokeStyle='#69cbd4';c.lineWidth=2;c.stroke();
 evTxt(c,'标准模型',201,99,22,'#e6f9ff','center');
 evTxt(c,'描述已知基本粒子与',201,126,13,'#bdd8e9','center');
 evTxt(c,'三种基本相互作用',201,148,13,'#bdd8e9','center');
 const chips=[['强',137],['弱',200],['电磁',263]];
 chips.forEach(([str,x],i)=>{c.fillStyle=i===2?'#264a5b':'#284b68';c.beginPath();c.roundRect(x-30,166,60,31,8);c.fill();evTxt(c,str,x,187,13,'#d8f4fa','center');});
 evTxt(c,'以及希格斯机制',201,230,14,'#e7d49c','center');
 evTxt(c,'（本图不表示空间大小）',201,255,10,'#97b2c9','center');
 // A single changing question remains outside the boundary.
 evLine(c,348,173,392,173,'#718db1',2,[6,6]);
 c.save();c.shadowColor='#f5bd86';c.shadowBlur=10+8*pulse;
 c.beginPath();c.arc(473,171,77,0,2*Math.PI);c.fillStyle='#332e42';c.fill();c.lineWidth=2.5;c.strokeStyle='#f4ba8a';c.stroke();c.restore();
 c.beginPath();c.arc(473,171,62+3*pulse,0,2*Math.PI);c.strokeStyle=`rgba(242,175,126,${.16+.15*pulse})`;c.lineWidth=2;c.stroke();
 if(key==='gravity'){for(let i=-2;i<=2;i++)evLine(c,431,149+i*10,516,149+i*10,'#b99cd5',1.5);evCircle(c,475,171,17,'#f2c991');evTxt(c,'弯曲的时空',473,245,11,'#e8c7ad','center');}
 if(key==='dark'){for(let i=0;i<9;i++){const a=i*.74+time*.19;evCircle(c,473+Math.cos(a)*(15+i*4.5),171+Math.sin(a)*(10+i*3.2),2.8,'#8fcce6');}evTxt(c,'额外引力效应',473,245,11,'#e8c7ad','center');}
 if(key==='neutrino'){for(let i=0;i<3;i++){c.beginPath();for(let x=426;x<=520;x+=3){let y=166+20*Math.sin((x-426)/17+time*.55+i*1.7);if(x===426)c.moveTo(x,y);else c.lineTo(x,y);}c.strokeStyle=['#66cce8','#dfc478','#bd91e5'][i];c.lineWidth=2;c.stroke();}evTxt(c,'振荡与质量',473,245,11,'#e8c7ad','center');}
 if(key==='asymmetry'){for(let i=0;i<20;i++){let a=i*2.4+time*.19,r=20+i%4*9;evCircle(c,473+Math.cos(a)*r,171+Math.sin(a)*r,4,i<15?'#89d9e7':'#f3a28e');}evTxt(c,'物质 ≠ 反物质',473,245,11,'#e8c7ad','center');}
 if(key==='generations'){const hs=[15,32,58];hs.forEach((h,i)=>{c.fillStyle=['#77d5dd','#b3abe5','#efbb80'][i];c.fillRect(441+i*24,197-h,13,h);});evTxt(c,'三代质量差异',473,245,11,'#e8c7ad','center');}
 if(key==='darkenergy'){for(let i=0;i<11;i++){const a=i*2.4,r=16+(i%4)*12+(time%5)*2.2;evCircle(c,473+Math.cos(a)*r,171+Math.sin(a)*r,3.5,'#9bb6e6');}evTxt(c,'空间加速膨胀',473,245,11,'#e8c7ad','center');}
 evTxt(c,'理论已成功描述的部分',201,333,12,'#9ddee3','center');evTxt(c,'当前解释边界之外的问题',468,333,12,'#f1c59d','center');
}
window.renderLimitsV5=function renderLimitsV9(){
 const stage=document.getElementById('view-science-limits');if(!stage)return;
 stage.innerHTML=`<article class="v8-research v9-limits"><header class="v8-research-title"><span class="v8-kicker">RESEARCH 02 · 理论边界</span><h2>标准模型解释不了什么？</h2><p>理论准确回答了很多问题，但没有解释宇宙的一切。<b>点击一个未解问题，看看它在哪条边界之外。</b></p></header>
 <section class="v8-research-surface"><div class="v9-limits-main"><div class="v9-limits-visual"><canvas class="v9-limit-canvas" role="img" aria-label="标准模型核心解释范围与选中未解问题的动态图"></canvas><p>范围与研究问题示意，并非真实空间分布或天体轨道数据。</p></div>
 <div class="v9-limits-reading"><p class="v8-reading-kicker">一个理论的能力与边界</p><nav class="v9-limit-choices" role="group" aria-label="六个理论边界问题">${v9LimitOrder.map((key,i)=>`<button type="button" data-v9limit="${key}"><small>${String(i+1).padStart(2,'0')}</small>${v9Limits[key].name}</button>`).join('')}</nav>
 <div class="v9-limit-detail" aria-live="polite"><h3></h3><p class="v9-limit-question"></p><div><b>已知的观察／理论</b><p class="v9-limit-known"></p></div><div><b>尚未解释</b><p class="v9-limit-unknown"></p></div><p class="v9-limit-warning"></p><button class="v9-limit-deep" type="button" hidden>查看相关专题 →</button></div></div></div></section>
 <footer class="v8-research-footer"><p><b>判断：</b> “理论有适用边界”与“理论已经被反驳”不是一回事。</p><button type="button" data-target="evidence">返回：怎么知道 ←</button></footer></article>`;
 let key='gravity',start=performance.now();const canvas=$(stage,'.v9-limit-canvas');
 function select(id){key=id;const x=v9Limits[id];$$(stage,'[data-v9limit]').forEach(b=>{let on=b.dataset.v9limit===key;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));});
  $(stage,'.v9-limit-detail h3').textContent=x.name;$(stage,'.v9-limit-question').textContent=x.question;
  $(stage,'.v9-limit-known').textContent=x.known;$(stage,'.v9-limit-unknown').textContent=x.unknown;$(stage,'.v9-limit-warning').textContent='阅读边界：'+x.warning;
  const b=$(stage,'.v9-limit-deep');b.hidden=!x.action;if(x.action){b.onclick=()=>switchView(x.action);}
  stage.dataset.v9Limit=key;
 }
 $$(stage,'[data-v9limit]').forEach(b=>b.onclick=()=>select(b.dataset.v9limit));
 $(stage,'[data-target]').onclick=()=>switchView('evidence');select('gravity');
 function animate(now){if(currentView!=='limits'||!canvas.isConnected)return;
  const c=v9Canvas(canvas);if(c)drawLimits(c,key,(now-start)/1000);safeRequestAnimationFrame(animate);
 }safeRequestAnimationFrame(animate);
};

// Put the optional task after the complete chapter, outside views whose
// own animation canvases may extend past legacy fixed-height wrappers.
const v9GuideHost=document.createElement('aside');
v9GuideHost.id='v9-lesson-footer';v9GuideHost.setAttribute('aria-label','当前专题学习任务');
const v9Main=document.getElementById('main-learning-content');
if(v9Main)v9Main.insertAdjacentElement('afterend',v9GuideHost);
if(typeof installLessonGuide==='function'){
 const previousGuide=installLessonGuide;
 window.installLessonGuide=function(view){
   previousGuide(view);
   const active=document.querySelector('.view-section.active');
   const guide=active&&active.querySelector('.lesson-guide');
   v9GuideHost.replaceChildren();
   if(guide && view!=='home')v9GuideHost.appendChild(guide);
   v9GuideHost.hidden=!guide||view==='home';
 };
}

// Keep all learning tasks in document flow; update one stale isotope instruction.
if(typeof lessonGuides!=='undefined' && lessonGuides.weak){
 lessonGuides.weak=['中子俘获与 β 衰变怎样改变原子核？','观察铁-58俘获中子形成铁-59，再经 β⁻ 衰变形成钴-59；半衰期不是事先确定的等待时间。'];
}
})();


// --- COMPILED lesson_v10.js --- 
/** V10 — Original-first teaching scenes. Only active implementations below. */
(function(){
'use strict';
const $=(root,sel)=>root.querySelector(sel), $$=(root,sel)=>Array.from(root.querySelectorAll(sel));
const PI=Math.PI,TAU=2*PI,clamp=(v,a,b)=>Math.min(b,Math.max(a,v));
function line(c,x,y,X,Y,color='#8a9cbd',width=1.7,dash=[]){c.beginPath();c.setLineDash(dash);c.moveTo(x,y);c.lineTo(X,Y);c.strokeStyle=color;c.lineWidth=width;c.stroke();c.setLineDash([]);}
function circle(c,x,y,r,fill){c.beginPath();c.arc(x,y,r,0,TAU);c.fillStyle=fill;c.fill();}
function glowball(c,x,y,r,color){const g=c.createRadialGradient(x-r*.33,y-r*.38,.5,x,y,r);g.addColorStop(0,'#fff');g.addColorStop(.24,color);g.addColorStop(1,'#17213b');circle(c,x,y,r,g);}
function text(c,t,x,y,size=12,color='#e1edff',align='center',weight=500){c.save();c.font=`${weight} ${size}px system-ui,'Noto Sans SC',sans-serif`;c.textAlign=align;c.fillStyle=color;c.fillText(t,x,y);c.restore();}
function arrow(c,x,y,X,Y,color='#e8c77d',width=2){line(c,x,y,X,Y,color,width);const a=Math.atan2(Y-y,X-x);c.beginPath();c.moveTo(X,Y);c.lineTo(X-9*Math.cos(a-.5),Y-9*Math.sin(a-.5));c.lineTo(X-9*Math.cos(a+.5),Y-9*Math.sin(a+.5));c.closePath();c.fillStyle=color;c.fill();}
function screenCanvas(canvas,W=480,H=315){const r=canvas.getBoundingClientRect(),w=r.width,h=r.height;if(w<2||h<2)return null;const d=Math.min(devicePixelRatio||1,2),ww=Math.round(w*d),hh=Math.round(h*d);if(canvas.width!==ww||canvas.height!==hh){canvas.width=ww;canvas.height=hh;}const c=canvas.getContext('2d');c.setTransform(ww/W,0,0,hh/H,0,0);return c;}
function canvasBase(c,W=480,H=315){const g=c.createLinearGradient(0,0,W,H);g.addColorStop(0,'#071027');g.addColorStop(1,'#121d39');c.fillStyle=g;c.fillRect(0,0,W,H);for(let x=20;x<W;x+=34)line(c,x,0,x,H,'#8eabe910',1);for(let y=20;y<H;y+=34)line(c,0,y,W,y,'#8eabe910',1);}

// NOETHER: the slider transforms the ENTIRE experiment; the optional lab-fixed
// environment is a separate demonstration rather than the main interaction.
function kepler(t){const a=113,e=.39,b=a*Math.sqrt(1-e*e),n=.87,M=n*t;let E=M;for(let i=0;i<9;i++)E-=(E-e*Math.sin(E)-M)/(1-e*Math.cos(E));const den=1-e*Math.cos(E);return{x:a*(Math.cos(E)-e),y:b*Math.sin(E),vx:-a*n*Math.sin(E)/den,vy:b*n*Math.cos(E)/den};}
const kinit=kepler(0),Lk0=kinit.x*kinit.vy-kinit.y*kinit.vx;
function orbitDriven(angle){const dt=.006,mu=.87*.87*Math.pow(113,3),k=.18,ct=Math.cos(angle),st=Math.sin(angle),q=[];let x=kinit.x*ct-kinit.y*st,y=kinit.x*st+kinit.y*ct,vx=kinit.vx*ct-kinit.vy*st,vy=kinit.vx*st+kinit.vy*ct;
 function acc(X,Y){let r=Math.max(25,Math.hypot(X,Y));return[-mu*X/(r*r*r)-k*X,-mu*Y/(r*r*r)];}
 for(let i=0;i<=1150;i++){q.push({x,y,vx,vy,L:x*vy-y*vx});const [ax,ay]=acc(x,y),X=x+vx*dt+.5*ax*dt*dt,Y=y+vy*dt+.5*ay*dt*dt,[a2,b2]=acc(X,Y);vx+=(ax+a2)*dt*.5;vy+=(ay+b2)*dt*.5;x=X;y=Y;}return q;
}
function pendulumSamples(clock,external){const dt=.008,out=[{theta:.61,omega:0,t:0}],steps=1070;let th=.61,w=0;
 function accel(t,theta){return -9.81*Math.sin(theta)+(external?1.65*Math.sin(2.5*(t+clock)):0);}
 for(let i=1;i<=steps;i++){const t=(i-1)*dt,half=w+.5*dt*accel(t,th);th+=half*dt;w=half+.5*dt*accel(t+dt,th);out.push({t:i*dt,theta:th,omega:w});}return out;}
window.renderSymmetry=function renderNoetherV10(){
 const stage=document.getElementById('view-symmetry');if(!stage)return;
 stage.style.cssText='width:100%;height:auto;overflow:visible;';
 stage.innerHTML=`<main class="noether-v7 noether-v10">
 <header class="noether-v7-header"><h2>🌌 诺特定理：对称性的织布机</h2><p>改变<b>实验整体的位置、朝向或开始时刻</b>，比较同一规律是否保持不变，再观察对应的守恒量。</p></header>
 <nav class="noether-v7-tabs" aria-label="选择三种连续对称性"><button data-nmode="0">空间平移 · 动量</button><button data-nmode="1">空间旋转 · 角动量</button><button data-nmode="2">时间平移 · 能量</button></nav>
 <section class="noether-v7-machine"><div class="noether-v7-machine-title">NOETHER LOOM · 改变整个实验 → 对照规律 → 认识守恒</div>
 <div class="noether-v7-cols">
 <aside class="noether-v7-card noether-v7-control"><h3>① 做一次对称变换</h3><label class="noether-v7-slider-label"><span id="nv10-slider-label">平移整套实验</span><input id="nv10-slider" type="range" min="-65" max="65" step="1" value="45" aria-label="改变完整实验的变换参数"><output id="nv10-offset">+45</output></label>
 <p id="nv10-meaning" class="noether-v7-explanation"></p><label class="noether-v7-ext"><input type="checkbox" id="nv10-external"><span>进阶：加入实验室固定的外部条件</span></label><p id="nv10-external-explainer" class="v10-secondary-note"></p>
 <div class="noether-v7-actions"><button id="nv10-pause">暂停</button><button id="nv10-reset">重新演示</button></div></aside>
 <div class="noether-v7-card noether-v7-visual"><h3>② 看两个实验是否等价</h3><canvas id="nv10-canvas" width="480" height="315" role="img" aria-label="两组变换前后对照的物理实验"></canvas><p id="nv10-scene" class="noether-v7-scene-label"></p></div>
 <aside class="noether-v7-card noether-v7-conservation"><h3>③ 对应的守恒量</h3><p id="nv10-metric-label" class="noether-v7-metric-label"></p><div id="nv10-metric" class="noether-v7-metric">—</div><p id="nv10-unit" class="noether-v7-unit"></p><p id="nv10-result" class="noether-v7-observation"></p></aside></div>
 <div class="noether-v7-bridge"><b>作用量在连续变换下具有相应对称性</b><span>⟹</span><b>守恒量</b><small>整体变换展示的是对称性；定理的严格前提是作用量的连续对称性，不是“画面看起来相似”。</small></div></section>
 <p class="noether-v7-footer"><b>先观察主实验：</b>不添加外部条件时，只改变实验位置、朝向或启动时间。进阶对照里的墙和外部场保持在实验室参照系中；改变的是所选系统的守恒性质，不代表自然界守恒定律失效。</p></main>`;
 const g=id=>stage.querySelector('#'+id),canvas=g('nv10-canvas'),slide=g('nv10-slider'),ext=g('nv10-external'),buttons=$$(stage,'[data-nmode]');
 let mode=0,offset=45,external=false,playing=true,t=0,last=0,orbitCache=null,pendA=null,pendB=null;
 function resetClock(){t=0;last=0;orbitCache=null;pendA=pendulumSamples(0,external);pendB=pendulumSamples(offset*.065,external);}
 function setLabels(){const labels=['移动整套两球实验','旋转整个太阳—行星系统','调整单摆实验启动时钟'];const meanings=[
 'A 与 B 采用完全相同的两球质量、速度和碰撞条件，只改变整套实验的位置。灰色 A 与彩色 B 同步进行。',
 '太阳、椭圆轨道、行星和扫面积区域作为一个整体旋转；灰色原方向始终作为参照。',
 '两次单摆实验从相同初态启动；调整 B 的绝对开始时刻，然后比较相同经过时间后的摆动。'];
 const outer=[
 '墙壁固定在实验室，不跟着实验移动；不同位置的两球在不同时刻撞墙，外部冲量改变两球的总动量。',
 '实验室固定 x 方向的额外回复力不随轨道转动；转向后运动不再只是同一轨道的旋转，角动量会变化。',
 '实验室存在随绝对时钟变化的驱动；不同开始时刻的单摆受到不同驱动相位，运动可能不再重合。'];
 slide.min=mode===0?'-65':mode===1?'-90':'0';slide.max=mode===0?'65':mode===1?'90':'120';slide.value=String(offset);
 g('nv10-slider-label').textContent=labels[mode];g('nv10-meaning').textContent=meanings[mode];g('nv10-external-explainer').textContent=external?outer[mode]:'主实验：没有固定外部干扰，只比较完整实验的变换。';
 g('nv10-offset').textContent=mode===0?`${offset>0?'+':''}${offset} 位置单位`:mode===1?`${offset>0?'+':''}${offset}°`:`B 比 A 晚 ${(offset*.065).toFixed(2)} 秒`;
 g('nv10-metric-label').textContent=['总动量：A / B','角动量：L / L₀','相同经过时间的机械能：A / B'][mode];
 g('nv10-unit').textContent=['质量×速度（模型单位）','无量纲（对称时为 1）','m=L=1；模型能量单位'][mode];
 g('nv10-scene').textContent=['灰色 A 是原位置；彩色 B 是整体平移后的同一碰撞','淡线是原方向，实线是整体旋转后的系统','青色 A 和金色 B 重合意味着相同的运动规律'][mode];
 buttons.forEach((b,i)=>{b.classList.toggle('active',mode===i);b.setAttribute('aria-pressed',String(i===mode));});
 stage.dataset.v10NoetherMode=String(mode);stage.dataset.v10NoetherExternal=String(external);stage.dataset.v10Transform=String(offset);}
 buttons.forEach((b,i)=>b.onclick=()=>{mode=i;offset=[45,50,48][i];slide.value=String(offset);external=false;ext.checked=false;resetClock();setLabels();});
 slide.oninput=()=>{offset=Number(slide.value);resetClock();setLabels();};ext.onchange=()=>{external=ext.checked;resetClock();setLabels();};
 g('nv10-reset').onclick=()=>{resetClock();playing=true;g('nv10-pause').textContent='暂停';};g('nv10-pause').onclick=()=>{playing=!playing;last=0;g('nv10-pause').textContent=playing?'暂停':'继续';};
 function collide(time,dx){let tHit=(210-24)/150,x1=-105+dx,x2=105+dx,v1=100,v2=-50;if(time<=tHit){return{x1:x1+v1*time,x2:x2+v2*time,v1,v2,p:25,wall:false};}let x0=x1+v1*tHit,other=x2+v2*tHit,after=time-tHit;v1=-80;v2=70;let b=false;
 // Wall fixed at world coordinate -191, center must remain right of -179.
 if(external){const tWall=(x0+179)/80;if(tWall>=0&&after>=tWall){x1=-179+80*(after-tWall);v1=80;b=true;}else{x1=x0-80*after;}}else x1=x0-80*after;
 x2=other+70*after;return{x1,x2,v1,v2,p:v1+1.5*v2,wall:b};}
 function translation(c){const ti=t%5.05,ref=collide(ti,0),newP=collide(ti,offset),wallX=240-191;
 text(c,'实验 A · 原位置',19,24,12,'#a8bdd9','left');text(c,'实验 B · 整体平移',19,160,12,'#a6eddf','left');
 if(external){line(c,wallX,35,wallX,270,'#ffba80',5);text(c,'固定墙壁',wallX+10,40,10,'#f6c59f','left');}
 [[ref,104,.52],[newP,236,1]].forEach(([r,y,alpha])=>{c.save();c.globalAlpha=alpha;line(c,17,y+20,463,y+20,'#7d8fb5',1.5);glowball(c,240+r.x1,y,12,'#77cfe0');glowball(c,240+r.x2,y,15,'#eebc63');if(r.wall)arrow(c,wallX,y-21,wallX+42,y-21,'#ffb18e',2.8);c.restore();});
 line(c,20,148,460,148,'#61729444',1);text(c,'质量：m₁=1，m₂=1.5；弹性碰撞',240,294,11,'#b9cce2');
 g('nv10-metric').textContent=external?`${ref.p.toFixed(0)} / ${newP.p.toFixed(0)}`:'25 / 25';
 g('nv10-result').textContent=external?'固定墙壁的冲量可改变两球子系统的总动量；注意墙的位置没有随 B 移动。':'A、B 的相对碰撞轨迹相同；两组总动量均保持 25。平移整套实验不改变碰撞规律。';
 stage.dataset.v10MomentumA=ref.p.toFixed(3);stage.dataset.v10MomentumB=newP.p.toFixed(3);}
 function keplerSector(c,t0,t1,ang,fill){let area=0,p=kepler(t0),co=Math.cos(ang),si=Math.sin(ang);c.beginPath();c.moveTo(0,0);c.lineTo(co*p.x-si*p.y,si*p.x+co*p.y);for(let i=1;i<=32;i++){const q=kepler(t0+(t1-t0)*i/32);area+=.5*(p.x*q.y-p.y*q.x);c.lineTo(co*q.x-si*q.y,si*q.x+co*q.y);p=q;}c.closePath();c.fillStyle=fill;c.fill();return area;}
 function drawOrbitCurve(c,ang,stroke,dashed=false){c.save();c.rotate(ang);c.beginPath();for(let j=0;j<=180;j++){const E=j*TAU/180,qx=113*(Math.cos(E)-.39),qy=113*Math.sqrt(1-.39*.39)*Math.sin(E);if(!j)c.moveTo(qx,qy);else c.lineTo(qx,qy);}c.closePath();c.strokeStyle=stroke;c.lineWidth=2;c.setLineDash(dashed?[5,7]:[]);c.stroke();c.restore();}
 function rotation(c){const a=offset*PI/180,ti=.8+(t%5.1),co=Math.cos(a),si=Math.sin(a);c.save();c.translate(242,169);
 drawOrbitCurve(c,0,'#7b8eaf77',true);const before=kepler(ti);glowball(c,before.x,before.y,6,'#8d9bb2');
 if(external){for(let x=-190;x<=180;x+=36)line(c,x,-145,x,145,'#edb07720',2);text(c,'实验室固定 x 方向',3,-137,10,'#efa888');}
 if(!external){drawOrbitCurve(c,a,'#97a5ff');const areaA=keplerSector(c,ti-1.0,ti-.5,a,'#7c93ed55'),areaB=keplerSector(c,ti-.5,ti,a,'#efc07866');const q=kepler(ti);line(c,0,0,q.x*co-q.y*si,q.x*si+q.y*co,'#d0def0',1.2);glowball(c,0,0,12,'#ffcb60');glowball(c,q.x*co-q.y*si,q.x*si+q.y*co,9,'#9ea3ff');
 g('nv10-metric').textContent='1.000';g('nv10-result').textContent='整套系统旋转后仍遵守同样的中心力规律，两个等时扫面积接近相等，角动量大小守恒。';stage.dataset.v10Areas=JSON.stringify({a:areaA,b:areaB});stage.dataset.v10Angular='1.000000';
 }else{drawOrbitCurve(c,a,'#ad9dfc77',true);if(!orbitCache)orbitCache=orbitDriven(a);const idx=clamp(Math.floor(ti/.006),0,orbitCache.length-1),q=orbitCache[idx],L=q.L/Lk0;c.beginPath();for(let i=0;i<=idx;i+=3){const q0=orbitCache[i];if(i===0)c.moveTo(q0.x,q0.y);else c.lineTo(q0.x,q0.y);}c.strokeStyle='#ef9b8c';c.lineWidth=2.4;c.stroke();glowball(c,0,0,12,'#ffcb60');glowball(c,q.x,q.y,9,'#f4a492');arrow(c,q.x,q.y,q.x-32,q.y,'#efa581');g('nv10-metric').textContent=L.toFixed(3);g('nv10-result').textContent='固定实验室的方向性外场不随轨道转向；轨迹可偏离旋转后的理想椭圆，角动量一般不再守恒。';stage.dataset.v10Angular=L.toFixed(6);}
 c.restore();text(c,external?'外场相对实验室固定（橙色）':'虚线：原方向；实线：整体旋转后',242,296,11,external?'#efc1ac':'#bcc9f4');}
 function drawPend(c){const ti=t%8.1,ia=Math.min(pendA.length-1,Math.floor(ti/.008)),A=pendA[ia],B=pendB[ia],x=242,y=69,l=139;
 function bob(q,color,r){const bx=x+Math.sin(q.theta)*l,by=y+Math.cos(q.theta)*l;line(c,x,y,bx,by,color,r===15?2.6:1.6);glowball(c,bx,by,r,color);return{bx,by};}
 c.beginPath();c.arc(x,y,l,PI/2-.76,PI/2+.76);c.strokeStyle='#8393bc80';c.setLineDash([5,8]);c.stroke();c.setLineDash([]);glowball(c,x,y,7,'#d8e6ff');
 const a=bob(A,'#7ddce7',13),b=bob(B,'#f5bd74',15);
 const energy=q=>0.5*q.omega*q.omega+9.81*(1-Math.cos(q.theta));const EA=energy(A),EB=energy(B);
 const equal=Math.abs(A.theta-B.theta)<.004&&Math.abs(A.omega-B.omega)<.01;
 text(c,`实验 A：08:00 + ${ti.toFixed(1)}s`,13,22,11,'#91e6ef','left');text(c,`实验 B：08:00 + ${(ti+offset*.065).toFixed(1)}s`,467,22,11,'#f4ce8d','right');
 if(external){arrow(c,400,68,400+35*Math.sin((ti+offset*.065)*2.5),68,'#efa885');text(c,'实验室外部周期驱动',367,49,10,'#efa885','center');}
 const barY=281,maxEnergy=3.4;
 [[108,EA,'#7edce7','A'],[316,EB,'#eebc78','B']].forEach(([bx,en,col,label])=>{c.fillStyle='#2b3956';c.fillRect(bx,barY-57,52,57);c.fillStyle=col;c.fillRect(bx,barY-57*clamp(en/maxEnergy,0,1),52,57*clamp(en/maxEnergy,0,1));text(c,label+' 能量',bx+26,barY+19,11,col);});
 text(c,equal?'两次摆动重合 ✓':'两次摆动出现可见差异',242,202,12,equal?'#9befd0':'#ffb39c');
 g('nv10-metric').textContent=EA.toFixed(2)+' / '+EB.toFixed(2);
 g('nv10-result').textContent=external?'固定绝对时间的外部驱动改变了两次实验受到的力；单摆可与外界交换能量。':'开始时刻变了，但在相同经过时间后单摆轨迹重合；两次机械能相同且近似守恒。';
 stage.dataset.v10EnergyA=EA.toFixed(5);stage.dataset.v10EnergyB=EB.toFixed(5);stage.dataset.v10PendulumDifference=Math.abs(A.theta-B.theta).toFixed(6);}
 function tick(now){if(currentView!=='symmetry'||!canvas.isConnected)return;const dt=last?clamp((now-last)/1000,0,.045):0;last=now;if(playing)t+=dt;const c=screenCanvas(canvas);if(c){canvasBase(c);if(mode===0)translation(c);else if(mode===1)rotation(c);else drawPend(c);}safeRequestAnimationFrame(tick);}
 resetClock();setLabels();safeRequestAnimationFrame(tick);
};

// WEAK: original luminous 3-D nucleus and a continuous, conserved A=68
// beta-minus decay BRANCH, not a universal fate or a real-time clock.
const beta68=[
 {sym:'Fe',zh:'铁',z:26,n:42,color:'#ffca81'},
 {sym:'Co',zh:'钴',z:27,n:41,color:'#ffaaa2'},
 {sym:'Ni',zh:'镍',z:28,n:40,color:'#8cdbf2'},
 {sym:'Cu',zh:'铜',z:29,n:39,color:'#eeb17b'},
 {sym:'Zn',zh:'锌',z:30,n:38,color:'#aceda7'}
];
const nucleusSites=Array.from({length:68},(_,i)=>{const yy=1-(i+.5)*2/68,r=Math.sqrt(1-yy*yy),a=i*PI*(3-Math.sqrt(5));return{id:i,x:r*Math.cos(a),y:yy,z:r*Math.sin(a)};});
const conversionIds=nucleusSites.slice().sort((a,b)=>b.z-a.z).slice(0,4).map(p=>p.id);
const firstProtons=nucleusSites.filter(p=>!conversionIds.includes(p.id)).sort((a,b)=>((a.id*31+11)%71)-((b.id*31+11)%71)).slice(0,26).map(p=>p.id);
const protonSet=new Set(firstProtons);
window.renderWeakForce=function renderWeakForceV10(){
 const stage=document.getElementById('weak-stage');if(!stage)return;stage.replaceChildren();
 const canvas=document.createElement('canvas');canvas.className='weak-v5-canvas';canvas.setAttribute('role','img');canvas.setAttribute('aria-label','六十八个核子的三维原子核，依次由铁转为钴、镍、铜、锌，放出β电子与电子反中微子');
 const banner=document.createElement('div');banner.className='weak-v5-phase weak-v10-phase';stage.append(canvas,banner);
 const section=document.getElementById('view-energy-weak'),cards=$$(section,'.weak-step'),pause=document.getElementById('weak-pause'),next=document.getElementById('weak-next'),reset=document.getElementById('weak-replay');
 const names=['富中子铁核 · ⁶⁸Fe','第 1 次 β⁻ · Fe → Co','第 2 次 β⁻ · Co → Ni','第 3 次 β⁻ · Ni → Cu','第 4 次 β⁻ · Cu → Zn'];
 let elapsed=0,last=0,playing=true,active=-1;const per=3150,period=5*per;
 function phase(){return clamp(Math.floor(elapsed/per),0,4);}
 function sync(idx){if(idx!==active){active=idx;banner.textContent=names[idx];cards.forEach((b,i)=>b.classList.toggle('active',i===idx));}
  const element=beta68[idx];stage.dataset.weakPhase=String(idx);stage.dataset.weakNuclide='68'+element.sym;stage.dataset.weakProtons=String(element.z);stage.dataset.weakNeutrons=String(element.n);stage.dataset.v10WeakMass='68';stage.dataset.v10WeakBranch='selected-beta-minus-branch';}
 function draw(now){const c=screenCanvas(canvas,640,420);if(!c)return;canvasBase(c,640,420);
  const idx=phase(),u=(elapsed-idx*per)/per,pre=beta68[Math.max(0,idx-1)],after=beta68[idx];let display=idx;
  if(idx>0&&u<.43)display=idx-1;
  const e=beta68[display],count=display;sync(idx);
  const cx=315,cy=192,R=100,theta=now*.00011;const g=c.createRadialGradient(cx,cy,22,cx,cy,155);g.addColorStop(0,'#668bd426');g.addColorStop(1,'#315f9d00');circle(c,cx,cy,157,g);
  const pts=nucleusSites.map(p=>{const xx=p.x*Math.cos(theta)-p.z*Math.sin(theta),zz=p.x*Math.sin(theta)+p.z*Math.cos(theta);return{...p,x2:cx+R*xx,y2:cy+R*p.y*.89,z2:zz,r:7.5+2.3*zz};}).sort((a,b)=>a.z2-b.z2);
  pts.forEach(p=>{const converted=conversionIds.indexOf(p.id),isProton=protonSet.has(p.id)||(converted>=0&&converted<count),isCurrent=idx>0&&conversionIds[idx-1]===p.id;
    let col=isProton?'#fb7588':'#a4b5c9';if(isCurrent&&u<.43){col='#e3f8ff';c.shadowBlur=18;c.shadowColor='#fff3b0';}
    glowball(c,p.x2,p.y2,p.r,col);c.shadowBlur=0;
  });
  // The nucleus layout remains fixed; one neutron changes color to a proton.
  if(idx>0&&u<.45){text(c,'核内一个中子即将转为质子',cx,43,15,'#f2d6a7');}
  if(idx>0&&u>=.20&&u<=.94){const f=clamp((u-.20)/.74,0,1),xx=cx+60+f*194,yy=cy-12-f*81;
    arrow(c,cx+35,cy-19,xx,yy,'#74e4fa',2.4);glowball(c,xx,yy,5,'#6bdeff');text(c,'e⁻',xx,yy-13,14,'#8be8ff');
    const xn=cx-62-f*173,yn=cy+12+f*87;arrow(c,cx-33,cy+14,xn,yn,'#c7b1ff',2.0);glowball(c,xn,yn,4,'#dac5ff');text(c,'ν̄ₑ',xn,yn+16,13,'#e2d4ff');
    if(u>.43)text(c,'n → p',cx,41,17,'#b4f3db');
  }else if(idx===0){text(c,'富中子铁-68 · 核内68个核子',cx,43,15,'#e7cc9d');}
  const tag=`⁶⁸${e.sym} · ${e.z} p + ${e.n} n`;
  c.beginPath();c.roundRect(cx-155,310,310,43,12);c.fillStyle='#07152ae9';c.fill();c.lineWidth=1;c.strokeStyle=after.color;c.stroke();text(c,tag,cx,338,18,'#ecf7ff','center',700);
  text(c,'A = 68 始终不变',cx,378,14,'#ddc991');
  // small fixed explanatory legend exactly matching the original color grammar
  glowball(c,39,391,7,'#fb7588');text(c,'质子 p',51,396,12,'#f7b6c0','left');glowball(c,147,391,7,'#a4b5c9');text(c,'中子 n',160,396,12,'#d0daeb','left');
  if(idx===4&&u>.45)text(c,'稳定核素：锌-68',500,54,12,'#b8ecba');
  const read=section.querySelector('.v10-weak-live');if(read)read.textContent=`当前核素：⁶⁸${e.sym} ｜ Z=${e.z}（质子）｜ N=${e.n}（中子）｜ A=68`;
  stage.dataset.v10WeakVisibleNuclide='68'+e.sym;stage.dataset.v10WeakVisibleProtons=String(e.z);stage.dataset.v10WeakVisibleNeutrons=String(e.n);
 }
 function render(now){if(currentView!=='weak'||!canvas.isConnected)return;const dt=last?clamp(now-last,0,50):0;last=now;if(playing){elapsed+=dt;if(elapsed>=period){elapsed=0;active=-1;}}draw(now);safeRequestAnimationFrame(render);}
 pause.onclick=()=>{playing=!playing;pause.textContent=playing?'暂停':'继续';last=0;};
 next.onclick=()=>{const p=phase();elapsed=((p+1)%5)*per+per*.58;active=-1;playing=false;pause.textContent='继续';draw(performance.now());};
 reset.onclick=()=>{elapsed=0;active=-1;playing=true;pause.textContent='暂停';last=0;draw(performance.now());};
 cards.forEach((el,i)=>{el.tabIndex=0;el.setAttribute('role','button');el.onclick=()=>{elapsed=i*per+per*.62;active=-1;playing=false;pause.textContent='继续';draw(performance.now());};el.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();el.click();}};});
 draw(performance.now());safeRequestAnimationFrame(render);
};

// EVIDENCE: same clean gallery shell, but three fundamentally DIFFERENT
// measurement methods. All simulated spectra are explicitly not source data.
const evidenceV10={
 wu:{label:'1957 · 吴健雄',title:'一束 β 电子，推翻了镜子里的预言',short:'测量的是电子相对于核自旋的发射方向分布',steps:[
  ['预测','如果弱衰变守恒宇称，沿自旋与逆自旋方向的电子分布应当对称。'],
  ['测量','把低温 Co-60 原子核自旋定向，按方向统计发射的 β 电子。'],
  ['结论','电子明显偏向逆自旋方向；真实过程与 P 反演后的概率不相同。'],
  ['边界','图中电子点、比例和柱高只是定性示意，不能代替实验数据或显著性检验。']],
  source:[['NIST · 吴健雄实验','https://www.nist.gov/pml/fall-parity/reversal-parity-law-nuclear-physics'],['原始论文','https://journals.aps.org/pr/abstract/10.1103/PhysRev.105.1413']]},
 jpsi:{label:'1974 · J/ψ',title:'两条实验路径，看到同一颗新粒子',short:'SLAC 扫描碰撞能量；BNL 重建衰变产生的正反缪子质量',steps:[
  ['预测','新的重夸克束缚态可能在特定能量附近形成寿命较长的窄共振。'],
  ['测量','SLAC：改变 e⁺e⁻ 对撞能量并测截面。BNL：质子打靶，重建 μ⁺μ⁻ 不变质量。'],
  ['结论','两条独立路径都指向约 3.1 GeV 的窄共振 J/ψ，支持粲夸克物理。'],
  ['边界','右侧峰形是教学示意；SLAC 和 BNL 的坐标、背景及分析方法并不相同。']],
  source:[['SLAC · 十一月革命','https://www6.slac.stanford.edu/about/our-story/history'],['Brookhaven · J/ψ','https://www.bnl.gov/newsroom/news.php?a=111648']]},
 higgs:{label:'2012 · 希格斯',title:'粒子消失了，怎样从末态看见它？',short:'重建多种衰变末态，观察共同质量附近的统计超额',steps:[
  ['预测','希格斯机制预期一种玻色子，可以通过可测量的衰变末态间接寻找。'],
  ['测量','ATLAS 与 CMS 在 H→γγ、H→ZZ*→4ℓ 等通道重建末态不变质量，并估计背景。'],
  ['结论','2012 年在约 125 GeV 发现符合发现标准的新玻色子，后续测量支持其希格斯身份。'],
  ['边界','任何单次四轻子事件都不能证明希格斯存在；发现依赖大量事例和统计检验。']],
  source:[['CERN · 希格斯','https://home.cern/science/physics/higgs-boson'],['ATLAS · Higgs','https://atlas.cern/Discover/Physics/Higgs']]}
};
function eviAxes(c,labelY,labelX){line(c,65,68,65,317,'#7c97b7',1.7);line(c,65,317,610,317,'#7c97b7',1.7);text(c,labelY,72,50,12,'#9eb9d3','left');text(c,labelX,335,347,12,'#9eb9d3');}
function gaussian(x,m,s){return Math.exp(-.5*Math.pow((x-m)/s,2));}
function drawEvidenceV10(c,key,step,elapsed,variant){canvasBase(c,640,385);
 if(key==='wu'){
  text(c,'极化的 Co-60 核',175,48,17,'#d5ebff');glowball(c,175,172,39,'#7199d7');text(c,'⁶⁰Co',175,179,16,'#eaf8ff');arrow(c,175,123,175,77,'#f7ca78',3.6);text(c,'核自旋 ↑',226,94,13,'#f3d184','left');
  line(c,175,58,175,288,'#728cb266',1,[5,6]);
  const down=step===0?.5:.78,count=step===0?18:28;
  for(let i=0;i<count;i++){const dir=((i*11)%31)/31<down?1:-1,tt=((elapsed*.00018+i*.113)%1),y=172+dir*(40+tt*86),x=175+Math.sin(i*2.83)*26*(1+tt);
   circle(c,x,y,3.3,'#7fe6eb');}
  line(c,371,51,371,324,'#62759644',1.5);
  text(c,step===0?'对称预测':'实际发射方向',505,59,16,'#e9e5ff');
  const up=1-down;const lengths=[up,down],ys=[115,210];
  lengths.forEach((ratio,i)=>{text(c,i===0?'顺自旋 ↑':'逆自旋 ↓',399,ys[i]-11,12,'#b6cce1','left');c.fillStyle='#1a3150';c.fillRect(395,ys[i],199,22);c.fillStyle=i===0?'#86a7dc':'#6de0d9';c.fillRect(395,ys[i],199*ratio/.82,22);});
  text(c,step===2?'顺/逆方向不等概率：P 不守恒':step===3?'柱长仅为概念示意':step===0?'若守恒 P，两方向应等概率':'沿逆核自旋的电子偏多',508,289,12,step===2?'#facaa2':'#b9d4ed');
 } else if(key==='jpsi'){
  const slac=variant==='slac';text(c,slac?'SLAC · e⁺e⁻ 能量扫描':'Brookhaven · 质子打靶',164,50,17,'#d9eeff');
  if(slac){glowball(c,102,177,12,'#f7a4a4');glowball(c,244,177,12,'#85dcef');arrow(c,122,177,154,177,'#f7a4a4',3);arrow(c,224,177,190,177,'#85dcef',3);circle(c,177,177,23,'#fee19855');text(c,'e⁺',102,214,15,'#f6aeab');text(c,'e⁻',244,214,15,'#a0e8f3');text(c,'调节 √s',173,246,14,'#e7c78a');}
  else{glowball(c,110,177,11,'#7edfe6');arrow(c,126,177,180,177,'#7edfe6',3);c.fillStyle='#7796bc';c.fillRect(179,156,15,44);text(c,'靶',185,220,13,'#e7c78a');arrow(c,202,168,263,118,'#e59ba3');arrow(c,202,187,263,230,'#86ddec');text(c,'μ⁺',280,118,15,'#e9b3b5');text(c,'μ⁻',280,235,15,'#9be6ea');text(c,'重建 μ⁺μ⁻ 质量',166,276,13,'#e3d9b9');}
  line(c,331,52,331,315,'#60799e55',1.5);line(c,356,306,615,306,'#9bb2d0',1.6);line(c,356,306,356,76,'#9bb2d0',1.6);
  text(c,slac?'截面':'事例数',365,66,11,'#b6d1e4','left');text(c,slac?'对撞能量 √s':'缪子对不变质量',489,331,10,'#afcde7');
  const amp=step===0?0:step===1?.64:1.0,mid=485;
  c.beginPath();for(let x=356;x<=609;x+=2){const y=287-14*Math.sin((x-356)/80)-amp*177*gaussian(x,mid,slac?11:15);if(x===356)c.moveTo(x,y);else c.lineTo(x,y);}c.strokeStyle='#6ae5e0';c.lineWidth=3;c.stroke();
  line(c,mid,100,mid,303,'#f2c178',1.2,[5,7]);text(c,'约 3.1 GeV',mid+10,94,13,'#f6d99b','left');text(c,'两种测量路径，相关的共振质量',484,368,11,'#b4c9e3');
 }else{
  text(c,'粒子碰撞 → 末态径迹 → 质量重建',317,46,17,'#d4e9ff');
  glowball(c,155,173,17,'#f2d88d');for(let i=0;i<4;i++){let a=PI*.28+i*PI*.50,x=155+Math.cos(a)*(45+20*Math.sin(elapsed*.001)),y=173+Math.sin(a)*(45+20*Math.sin(elapsed*.001));arrow(c,155,173,x,y,i%2?'#f6a7a5':'#86dfe5',2.1);glowball(c,x,y,6,i%2?'#f0a2a5':'#8ee6e8');}
  text(c,'示例：四轻子末态',155,287,12,'#b8cbe1');line(c,323,52,323,325,'#60799e55');line(c,350,307,613,307,'#95aacc',1.7);line(c,350,307,350,83,'#95aacc',1.7);
  text(c,'事件数',354,73,12,'#b8d1e1','left');text(c,'重建质量',497,336,12,'#b8d1e1');
  c.beginPath();for(let x=351;x<=610;x+=2){let y=278-14*Math.sin((x-351)/65);if(!step)y=278;else y-= (step===1?.45:1)*129*gaussian(x,487,18);if(x===351)c.moveTo(x,y);else c.lineTo(x,y);}c.strokeStyle='#7bdfef';c.lineWidth=3;c.stroke();
  c.beginPath();for(let x=351;x<=610;x+=2){const y=278-14*Math.sin((x-351)/65);if(x===351)c.moveTo(x,y);else c.lineTo(x,y);}c.strokeStyle='#7f91ac';c.lineWidth=2;c.setLineDash([5,6]);c.stroke();c.setLineDash([]);
  text(c,'约 125 GeV',488,93,13,'#eecb86');text(c,'独立实验：ATLAS / CMS',482,368,12,'#a2cadf');
 }
 // No fabricated significance numbers: animations are qualitative principles.
}
window.renderEvidenceV5=function renderEvidenceV10(){
 const stage=document.getElementById('view-science-evidence');if(!stage)return;
 stage.innerHTML=`<article class="v8-research v10-research v10-evidence"><header class="v8-research-title"><span class="v8-kicker">RESEARCH 01 · 科学证据</span><h2>我们怎么知道？</h2><p>科学发现不是“看见一颗小球”，而是<strong>知道应该测量什么，以及怎样排除其他解释</strong>。</p></header>
 <section class="v8-research-surface"><nav class="v10-evidence-tabs" aria-label="选择实验案例"><button data-v10evi="wu">1957 · 宇称</button><button data-v10evi="jpsi">1974 · J/ψ</button><button data-v10evi="higgs">2012 · 希格斯</button></nav>
 <div class="v10-research-grid"><div class="v10-research-figure"><div class="v10-evi-top"><strong class="v10-evi-kicker"></strong><span class="v10-evi-step-mark">01 / 04</span></div><canvas class="v10-evi-canvas" role="img" aria-label="对应实验实际测量方法的动态教学示意"></canvas><div class="v10-jpsi-variants" hidden><button data-v10path="slac">SLAC · e⁺e⁻ 扫描</button><button data-v10path="bnl">BNL · 质子打靶</button></div><small class="v10-evi-figure-note">原理动画，不是实验原始记录；峰形、计数和统计显著性不可从图中推算。</small>
 <div class="v10-evidence-actions"><button data-v10prev>上一步</button><button data-v10next>下一步</button><button data-v10autoplay>暂停自动演示</button></div></div>
 <div class="v10-research-story"><span class="v10-evi-label"></span><h3 class="v10-evi-title"></h3><p class="v10-evi-short"></p><nav class="v10-step-tabs" aria-label="研究推理的四个环节"><button data-v10stage="0">预测</button><button data-v10stage="1">测量</button><button data-v10stage="2">结论</button><button data-v10stage="3">边界</button></nav><p class="v10-evi-reading" aria-live="polite"></p><div class="v10-evi-links"></div></div></div></section>
 <footer class="v8-research-footer"><p><strong>最重要的提问：</strong>这幅动画展示的是哪种观测量？哪些部分只是示意？</p><button data-v10evi-target="limits" type="button">继续：理论边界 →</button></footer></article>`;
 let key='wu',step=0,variant='slac',auto=true,lastSwitch=performance.now(),start=lastSwitch;
 const canvas=$(stage,'.v10-evi-canvas');
 function update(){const item=evidenceV10[key];
 $$(stage,'[data-v10evi]').forEach(b=>{const on=b.dataset.v10evi===key;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));});
 $$(stage,'[data-v10stage]').forEach(b=>{const on=Number(b.dataset.v10stage)===step;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));});
 $$(stage,'[data-v10path]').forEach(b=>{const on=b.dataset.v10path===variant;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));});
 $(stage,'.v10-jpsi-variants').hidden=key!=='jpsi';$(stage,'.v10-evi-kicker').textContent=item.label;
 $(stage,'.v10-evi-label').textContent='当前观察 · '+['提出预言','真正测量','形成结论','知道边界'][step];
 $(stage,'.v10-evi-title').textContent=item.title;$(stage,'.v10-evi-short').textContent=item.short;
 $(stage,'.v10-evi-reading').textContent=item.steps[step][1];$(stage,'.v10-evi-step-mark').textContent=`0${step+1} / 04`;
 $(stage,'.v10-evi-links').innerHTML=item.source.map(([label,url])=>`<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`).join(' · ');
 stage.dataset.v10EvidenceCase=key;stage.dataset.v10EvidenceStep=String(step);stage.dataset.v10EvidenceVariant=variant;
 }
 $$(stage,'[data-v10evi]').forEach(b=>b.onclick=()=>{key=b.dataset.v10evi;step=0;lastSwitch=performance.now();update();});
 $$(stage,'[data-v10stage]').forEach(b=>b.onclick=()=>{step=Number(b.dataset.v10stage);lastSwitch=performance.now();update();});
 $$(stage,'[data-v10path]').forEach(b=>b.onclick=()=>{variant=b.dataset.v10path;lastSwitch=performance.now();update();});
 $(stage,'[data-v10prev]').onclick=()=>{step=(step+3)%4;lastSwitch=performance.now();update();};$(stage,'[data-v10next]').onclick=()=>{step=(step+1)%4;lastSwitch=performance.now();update();};
 $(stage,'[data-v10autoplay]').onclick=()=>{auto=!auto;$(stage,'[data-v10autoplay]').textContent=auto?'暂停自动演示':'继续自动演示';lastSwitch=performance.now();};
 $(stage,'[data-v10evi-target]').onclick=()=>switchView('limits');
 if(matchMedia('(prefers-reduced-motion: reduce)').matches){auto=false;$(stage,'[data-v10autoplay]').textContent='继续自动演示';}
 function tick(now){if(currentView!=='evidence'||!canvas.isConnected)return;if(auto&&now-lastSwitch>=5500){step=(step+1)%4;lastSwitch=now;update();}const c=screenCanvas(canvas,640,385);if(c)drawEvidenceV10(c,key,step,now-start,variant);safeRequestAnimationFrame(tick);}
 update();safeRequestAnimationFrame(tick);
};

// SYMMETRY BREAKING: preserve the original mirror/CPT visual narrative,
// clarify the common testing method across P/C/T examples.
const previousBreaking=window.renderSymmetryBreaking;
window.renderSymmetryBreaking=function renderBreakingV10(){previousBreaking();const stage=document.getElementById('view-symmetry-breaking');if(!stage)return;
 const section=$(stage,'.breaking-v8-sym-stage'),grid=section&&$(section,'.breaking-v8-sym-grid');
 if(section&&grid){const intro=document.createElement('div');intro.className='v10-sym-bridge';intro.innerHTML='<strong>同一个判断方法：</strong>对一个物理过程作 P、C 或 T 变换 → 比较变换后的过程是否有相同发生概率。<small>三个案例来自不同实验，不是假装同一个实验同时验证三种破缺。</small>';grid.before(intro);}
 const cpt=$(stage,'.breaking-v8-cpt-stage');if(cpt){const start=$(cpt,'.breaking-v8-cpt-controls');if(start){const note=document.createElement('div');note.className='v10-cpt-note';note.innerHTML='连续 P → C → T：跟随同一组<strong>粒子身份／动量 p／自旋 S</strong>。每一步观察箭头而不是光环；终态仅作联合变换示意。';start.before(note);}}
 const header=$(stage,'.breaking-v8-heading');if(header){const p=header.querySelector('p');if(p)p.textContent='从一面不再对称的镜子出发，理解 P、C、T 各自怎样改变物理过程，再观察它们的联合变换。';}
};

// BOUNDARIES: use one dynamic focus, but explicitly classify different kinds
// of incompleteness rather than treating all as failed predictions.
const previousLimits=window.renderLimitsV5;
const limitV10Categories={
 gravity:['理论范围之外','引力属于广义相对论描述的时空动力学，不属于已建立的粒子标准模型。'],
 dark:['未知成分','引力证据存在，但没有确定是哪一种新粒子或其他机制。'],
 neutrino:['最小模型需扩展','振荡表明存在质量差，零中微子质量的最简方案不完整。'],
 asymmetry:['已知机制不足','标准模型允许 CP 破坏，但不足以解释宇宙整体的物质优势。'],
 generations:['参数来源未解','模型能利用这些实测参数准确预测，却没有解释它们为什么取这些数值。'],
 darkenergy:['宇宙学未解问题','宇宙加速膨胀属于更广泛的宇宙学问题，不能等同某个标准模型粒子缺失。']
};
window.renderLimitsV5=function renderLimitsV10(){previousLimits();const stage=document.getElementById('view-science-limits');if(!stage)return;
 const reading=$(stage,'.v9-limits-reading'),choices=$(stage,'.v9-limit-choices');
 if(reading&&choices){const bar=document.createElement('div');bar.className='v10-limits-classify';bar.innerHTML='<span>当前属于哪类知识边界？</span><strong class="v10-limit-category"></strong><small class="v10-limit-kind"></small>';
 choices.insertAdjacentElement('afterend',bar);
 const change=()=>{const key=stage.dataset.v9Limit||'gravity',r=limitV10Categories[key]||limitV10Categories.gravity;$(bar,'.v10-limit-category').textContent=r[0];$(bar,'.v10-limit-kind').textContent=r[1];stage.dataset.v10LimitCategory=r[0];};
 $$(stage,'[data-v9limit]').forEach(b=>b.addEventListener('click',change));change();}
 const top=$(stage,'.v8-research-title p');if(top)top.textContent='先看清标准模型已经解释的范围，再一次只点亮一个未解问题：它究竟属于理论范围、未知物质、参数来源，还是宇宙学？';
};

// EM: The original electron-cloud animation and cards provide the lesson; no extra explanatory panel.
// Existing finished lessons: add short factual readouts without interfering
// with the original hero animations or introducing floating panels.
// Group: retain the original geometry story without inserting another note under the picture.
// Guides ask questions the actually visible experiments can answer.
if(typeof lessonGuides!=='undefined'){
 lessonGuides.weak=['铁到锌，哪一种核内变化让元素身份接连发生改变？','点“下一幕”：每次 Z+1、N−1，而 A 始终为68；解释为什么这属于选定 β⁻ 分支，不代表每个核的必经命运。'];
 lessonGuides.symmetry=['三个滑块分别变换了什么？','先不打开外界条件：分别移动整套碰撞实验、旋转整个椭圆轨道、改变单摆开始时间，观察对应规律是否改变。'];
 lessonGuides.higgs=['紫色场响应与粒子移动速度是不是同一个物理量？','先点“只看场耦合”，比较三轨道的耦合光效和质量卡片；再看同动量模式，区分运动学与希格斯耦合。'];
 lessonGuides.strong=['为什么质子质量不能只把三个夸克静质量相加？','观察三夸克与束缚能量；图中的约1%／约99%是解释量级，不等于把99%严格划给“胶子势能”。'];
 lessonGuides['symmetry-breaking']=['镜像不相同，是“图案破了”还是“物理概率不相同”？','观察 Wu 电子偏向；切换 P/C/T 时认清改变的是方向、粒子身份还是互逆跃迁；CPT 看动量和自旋箭头。'];
 lessonGuides.evidence=['三次发现分别测量的是什么？','1957 看电子角分布；1974 对比 SLAC 与 BNL 两条实验路线；2012 看衰变末态与质量重建。'];
 lessonGuides.limits=['六个问题属于同一类型的标准模型失败吗？','分别点击引力、中微子质量与暗能量，比较三种不同的理论边界类别。'];
}
})();


/* V11 · Original-visual-first repairs. One active implementation per affected chapter.
   Drawings keep the original dark-cosmic language, luminous spheres, restrained copy.
   Existing chapters not listed here remain unchanged. */
(function(){
'use strict';
const $=(el,sel)=>el.querySelector(sel), $$=(el,sel)=>Array.from(el.querySelectorAll(sel));
const TAU=Math.PI*2,PI=Math.PI, clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
function seg(c,x,y,X,Y,col='#7b93bd',w=1.4,dash=[]){c.save();c.beginPath();c.setLineDash(dash);c.moveTo(x,y);c.lineTo(X,Y);c.strokeStyle=col;c.lineWidth=w;c.stroke();c.restore();}
function disc(c,x,y,r,col){c.beginPath();c.arc(x,y,r,0,TAU);c.fillStyle=col;c.fill();}
function txt(c,s,x,y,sz=13,col='#dce8fc',align='center',weight=500){c.save();c.textAlign=align;c.textBaseline='middle';c.fillStyle=col;c.font=`${weight} ${sz}px Outfit,'Noto Sans SC',system-ui,sans-serif`;c.fillText(s,x,y);c.restore();}
function arrow(c,x,y,X,Y,col='#f1cb7b',w=2.4){seg(c,x,y,X,Y,col,w);const a=Math.atan2(Y-y,X-x);c.beginPath();c.moveTo(X,Y);c.lineTo(X-9*Math.cos(a-.47),Y-9*Math.sin(a-.47));c.lineTo(X-9*Math.cos(a+.47),Y-9*Math.sin(a+.47));c.closePath();c.fillStyle=col;c.fill();}
// This gradient and relative-depth idea are taken directly from the ORIGINAL weak-force renderer.
function originalSphere(c,x,y,r,color){const g=c.createRadialGradient(x-r*.3,y-r*.3,r*.1,x,y,r);g.addColorStop(0,'#fff');g.addColorStop(.3,color);g.addColorStop(1,'#000');c.beginPath();c.arc(x,y,r,0,TAU);c.fillStyle=g;c.fill();}
function tag(c,s,x,y,col='#8edce5',size=13){c.save();c.font=`600 ${size}px 'Noto Sans SC',system-ui,sans-serif`;const w=c.measureText(s).width+22;c.fillStyle='#030915c9';c.strokeStyle=col+'b0';c.lineWidth=1;c.beginPath();c.roundRect(x-w/2,y-14,w,28,14);c.fill();c.stroke();txt(c,s,x,y,size,col);c.restore();}
function stageContext(canvas,W,H){const r=canvas.getBoundingClientRect();if(r.width<2||r.height<2)return null;const d=Math.min(2,devicePixelRatio||1),cw=Math.round(r.width*d),ch=Math.round(r.height*d);if(canvas.width!==cw||canvas.height!==ch){canvas.width=cw;canvas.height=ch;}const c=canvas.getContext('2d');c.setTransform(cw/W,0,0,ch/H,0,0);return c;}
function deepSpace(c,W,H,grid=false){c.fillStyle='#080b20';c.fillRect(0,0,W,H);const stars=[[.10,.25],[.24,.71],[.43,.16],[.68,.57],[.87,.29],[.92,.83],[.16,.89],[.74,.12],[.53,.86],[.34,.5],[.61,.39],[.81,.64]];
 stars.forEach(([u,v],i)=>disc(c,u*W,v*H,i%4===0?1.35:.8,'#9db8db'+(i%3===0?'62':'2d')));
 if(grid){for(let x=22;x<W;x+=42)seg(c,x,0,x,H,'#8aa2c80b',1);for(let y=18;y<H;y+=42)seg(c,0,y,W,y,'#8aa2c80b',1);}}
function viewIs(id,canvas){return currentView===id&&canvas.isConnected;}

// 07 弱力: same left-hand original nucleus, incoming neutron, floating tag,
// and original three-stage right-hand story. Only correct the nuclear states.
const chain=[['Fe','铁',26,42,'#aebbcf'],['Co','钴',27,41,'#87a8eb'],['Ni','镍',28,40,'#ae9fec'],['Cu','铜',29,39,'#f7c37a'],['Zn','锌',30,38,'#b7e6ba']];
const nucSites=Array.from({length:68},(_,i)=>{const y=1-i/67*2,r=Math.sqrt(Math.max(0,1-y*y)),a=i*PI*(3-Math.sqrt(5)),j=(k)=>Math.sin(i*14.27+k)*2.4;return {id:i,x:Math.cos(a)*r*55+j(2),y:y*55+j(3),z:Math.sin(a)*r*55+j(4)};});
const convert=nucSites.filter(p=>p.id>=26).sort((a,b)=>b.z-a.z).slice(0,4).map(p=>p.id);
window.renderWeakForce=function renderWeakOriginalV11(){const stage=document.getElementById('weak-stage');if(!stage)return;
 stage.replaceChildren();const canvas=document.createElement('canvas');canvas.className='v11-weak-canvas';canvas.setAttribute('role','img');canvas.setAttribute('aria-label','沿用原版三维球形核子：中子向原子核飞入，随后四次中子变质子并发射β粒子');stage.append(canvas);
 const panel=document.getElementById('view-energy-weak'),pause=$ (panel,'#weak-pause'),next=$(panel,'#weak-next'),replay=$(panel,'#weak-replay'),status=$(panel,'.v11-weak-status');
 const milestones=[0,2700,5100,7500,9900,12300],total=14800;let elapsed=0,playing=true,last=0,stepStop=null;
 function scene(){if(elapsed<milestones[1])return 0;if(elapsed<milestones[2])return 1;if(elapsed<milestones[3])return 2;if(elapsed<milestones[4])return 3;if(elapsed<milestones[5])return 4;return 5;}
 function displayData(){const phase=scene(),local=phase>0&&phase<5?(elapsed-milestones[phase])/2400:0;
  const done=phase===0?0:phase===5?4:(phase-1)+(local>=.51?1:0);return{phase,local,done,nuclide:chain[done]};}
 function sync(){const state=displayData(),p=state.phase,i=state.done;const list=[panel.querySelector('#text-mechanism'),panel.querySelector('#text-scene'),panel.querySelector('#text-product')];list.forEach((el,k)=>el?.classList.toggle('active',k===(p<2?0:p<4?1:2)));
  status.textContent=p===0?(elapsed<1600?'⁶⁷Fe + n  →  ⁶⁸Fe':'中子俘获 · ⁶⁸Fe'):(p===5?'稳定 ⁶⁸Zn · 30p / 38n':`⁶⁸${chain[p-1][0]} → ⁶⁸${chain[p][0]}   ·   β⁻ 衰变  ${chain[i][2]}p / ${chain[i][3]}n`);
  stage.dataset.weakPhase=String(p);stage.dataset.v12Transmutations=String(i);stage.dataset.v12Element=chain[i][0];stage.dataset.weakNuclide=(p===0&&elapsed<1650?'67Fe':String(68)+chain[i][0]);stage.dataset.weakProtons=String(chain[i][2]);stage.dataset.weakNeutrons=String(p===0&&elapsed<1650?41:chain[i][3]);stage.dataset.v11Capture=String(p===0);stage.dataset.v11IncomingVisible=String(p===0&&elapsed<1600);
  return state;}
 function draw(now){const c=stageContext(canvas,720,455);if(!c)return;deepSpace(c,720,455);
  const {phase,local,done,nuclide}=sync(),cx=365,cy=206;
  const incoming=phase===0&&elapsed<1650,justCaptured=phase===0&&elapsed>=1650;
  let protons=26,neutrons=41,highlight=-1;
  if(!incoming){neutrons=42-done;protons=26+done;}
  if(phase>0&&phase<5&&local>=.31&&local<.54)highlight=convert[phase-1];
  const nod=nucSites.slice(0,incoming?67:68).map(p=>({...p,typ:(p.id<26||convert.slice(0,done).includes(p.id))?'p':'n'}));
  nod.sort((a,b)=>a.z-b.z);const t=now*.00017;
  // Preserve the original quiet nucleus and pearlescent sphere shading. No particle cloud expansion.
  nod.forEach(p=>{let x=cx+p.x,y=cy+p.y,r=10*(p.z+100)/100,col=p.typ==='p'?'#ff6b6b':'#94a3b8';
    if(p.id===highlight){col='#ffffff';c.shadowColor='#f7d8a7';c.shadowBlur=28;}
    originalSphere(c,x+Math.sin(t+p.id*.3)*.55,y+Math.cos(t+p.id*.45)*.55,r,col);c.shadowBlur=0;});
  if(incoming){const u=clamp(elapsed/1650,0,1),ease=u*u*(3-2*u),x=55+(cx-5-55)*ease;
    c.save();c.shadowBlur=18;c.shadowColor='#b2c8e5';originalSphere(c,x,cy,11,'#94a3b8');c.restore();txt(c,'n',x,cy-22,17,'#eef5ff');
    if(u>.54){seg(c,x+13,cy,x+41,cy,'#8ba9d77b',2,[4,5]);}}
  if(justCaptured){const u=clamp((elapsed-1650)/1050,0,1);c.save();c.globalAlpha=1-u;c.strokeStyle='#efd6a9';c.lineWidth=1.8;c.beginPath();c.arc(cx,cy,74+u*46,0,TAU);c.stroke();c.restore();originalSphere(c,cx+60+160*u,cy-47-58*u,5,'#ffe3a6');txt(c,'γ',cx+72+160*u,cy-66-58*u,14,'#f9d791');}
  if(phase>0&&phase<5&&local>.25&&local<.94){const u=clamp((local-.25)/.69,0,1),ex=cx+40+u*210,ey=cy-12-u*70,nx=cx-39-u*175,ny=cy+9+u*65;
   originalSphere(c,ex,ey,7,'#65b8f8');txt(c,'e⁻',ex+14,ey-14,14,'#89cfff','left');
   originalSphere(c,nx,ny,4.5,'#b6d1eb');txt(c,'ν̄ₑ',nx-14,ny+13,13,'#d7e7fa','right');
   if(local<.59){c.save();c.globalAlpha=1-Math.abs(local-.45)*5;seg(c,cx-83,cy-82,cx-116,cy-110,'#ffbca8',1.4);c.restore();}}
  // One visually unmissable transformation at each beta decay. Original sphere remains the hero.
  if(phase>0&&phase<5){
    const old=chain[phase-1],newer=chain[phase],peak=clamp(1-Math.abs(local-.53)/.30,0,1);
    if(peak>0){
      c.save();c.globalAlpha=peak*.42;
      const bloom=c.createRadialGradient(cx,cy,14,cx,cy,121+25*peak);
      bloom.addColorStop(0,'#fff9de');bloom.addColorStop(.38,'#b3bfff60');bloom.addColorStop(1,'#a176ee00');
      disc(c,cx,cy,140,bloom);c.lineWidth=2.5;c.strokeStyle='#e6caa9';
      c.beginPath();c.arc(cx,cy,76+(1-peak)*37,0,TAU);c.stroke();c.restore();
    }
    if(local>=.42&&local<.86){
      const opacity=clamp((local-.42)*7,0,1)*clamp((.86-local)*7,0,1);
      c.save();c.globalAlpha=opacity;c.shadowBlur=14;c.shadowColor=newer[4];
      txt(c,`⁶⁸${old[0]}   →   ⁶⁸${newer[0]}`,cx,99,28,'#f1e9fc','center',750);
      c.shadowBlur=0;c.restore();
    }
  }
  const displaySymbol=incoming?'⁶⁷Fe':`⁶⁸${nuclide[0]}`;
  tag(c,`${displaySymbol} · ${incoming?'铁':nuclide[1]}`,cx,326,incoming?'#94a3b8':nuclide[4],14);
  let flash='';if(phase===0)flash=incoming?'中子飞入原子核':'俘获完成 · 原子核获得一个中子';else if(phase===5)flash='连续嬗变 · 锌-68';else if(local<.42)flash='核内中子开始变身';else flash='β⁻ 衰变 · 元素身份改变';
  txt(c,flash,cx,65,15,phase===5?'#beeac6':'#cfdcf1');
  if(phase===0&&!incoming)txt(c,'俘获 ≠ β 衰变',cx,366,11,'#aabbd3');
  else if(phase>0)txt(c,phase===5?'A = 68 · 质子数 30':'n → p + e⁻ + ν̄ₑ   ·   A = 68',cx,366,12,'#b4c8df');
  // Tiny, non-intrusive controls are in the ORIGINAL right panel, not drawn over the atom.
 }
 function frame(now){if(!viewIs('weak',canvas))return;const dt=last?clamp(now-last,0,50):0;last=now;if(playing){elapsed+=dt;if(stepStop!==null&&elapsed>=stepStop){elapsed=stepStop;stepStop=null;playing=false;pause.textContent='继续';}else if(elapsed>=total)elapsed=0;}draw(now);safeRequestAnimationFrame(frame);}
 pause.onclick=()=>{playing=!playing;last=0;pause.textContent=playing?'暂停':'继续';};
 next.onclick=()=>{const p=scene();if(p===5){elapsed=0;stepStop=null;playing=true;}else{stepStop=milestones[p+1]+120;playing=true;}last=0;pause.textContent='暂停';draw(performance.now());};
 replay.onclick=()=>{elapsed=0;stepStop=null;playing=true;last=0;pause.textContent='暂停';draw(performance.now());};
 draw(performance.now());safeRequestAnimationFrame(frame);
};

// 10 诺特 · original three-scene loom; one bob, one system. No external-factor switch.
function orbit(t){const a=116,e=.38,b=a*Math.sqrt(1-e*e),n=.9;let E=n*t;for(let i=0;i<7;i++)E-=(E-e*Math.sin(E)-n*t)/(1-e*Math.cos(E));const d=1-e*Math.cos(E);return{x:a*(Math.cos(E)-e),y:b*Math.sin(E),vx:-a*n*Math.sin(E)/d,vy:b*n*Math.cos(E)/d};}
const pend=(()=>{const o=[],dt=.005,n=1800,g=9.81;let a=.61,v=0;for(let i=0;i<n;i++){o.push({t:i*dt,a,v,E:.5*v*v+g*(1-Math.cos(a))});let h=v-.5*dt*g*Math.sin(a);a+=dt*h;v=h-.5*dt*g*Math.sin(a);}return o;})();
window.renderSymmetry=function renderNoetherOriginalV11(){const stage=document.getElementById('view-symmetry');if(!stage)return;stage.style.cssText='width:100%;height:auto;overflow:visible;';
 stage.innerHTML=`<main class="noether-v7 noether-v10 v11-noether">
  <header class="noether-v7-header"><h2>🌌 诺特定理：对称性的织布机</h2><p><strong>改变实验的位置、朝向或开始时刻。</strong>规律依旧吗？</p></header>
  <nav class="noether-v7-tabs" aria-label="选择对称性"><button type="button" data-nv11="0">空间平移 · 动量</button><button type="button" data-nv11="1">空间旋转 · 角动量</button><button type="button" data-nv11="2">时间平移 · 能量</button></nav>
  <section class="noether-v7-machine"><div class="noether-v7-machine-title">NOETHER LOOM · 对称性 → 守恒律</div><div class="noether-v7-cols">
  <aside class="noether-v7-card noether-v7-control"><h3>对称性控制</h3><label for="nv11-slider" id="nv11-control-label">平移整套碰撞实验</label><input type="range" id="nv11-slider" min="-65" max="65" value="42"><output id="nv11-value">+42</output><p id="nv11-hint" class="v11-noether-hint"></p><div class="noether-v7-actions"><button type="button" id="nv11-play">暂停</button><button type="button" id="nv11-reset">重看</button></div></aside>
  <div class="noether-v7-card noether-v7-visual"><h3>物理场景</h3><canvas id="nv11-canvas" width="540" height="340" role="img" aria-label="原版双球、轨道或单摆的连续对称变换"></canvas><p class="noether-v7-scene-label" id="nv11-caption"></p></div>
  <aside class="noether-v7-card noether-v7-conservation"><h3>守恒律</h3><p class="noether-v7-metric-label" id="nv11-metric-label"></p><div class="noether-v7-metric" id="nv11-metric"></div><p id="nv11-reading" class="v11-noether-reading"></p></aside>
  </div><div class="noether-v7-bridge"><b>空间平移 → 动量</b><span>·</span><b>空间旋转 → 角动量</b><span>·</span><b>时间平移 → 能量</b></div></section>
  <details class="v11-noether-details v11-quiet-details"><summary>进阶：变换与守恒的适用条件</summary><p>本页比较的是<strong>完整实验</strong>的连续变换。诺特定理的严格条件是作用量具有相应连续对称性；位置、方向或绝对时刻变化本身不会凭空改变同一个封闭系统的规律。外部固定墙、方向性场或随绝对时间变化的驱动属于另一问题，不混入这三幅主实验。</p></details></main>`;
 const canvas=$(stage,'#nv11-canvas'),slider=$(stage,'#nv11-slider'),value=$(stage,'#nv11-value'),label=$(stage,'#nv11-control-label'),hint=$(stage,'#nv11-hint'),caption=$(stage,'#nv11-caption'),reading=$(stage,'#nv11-reading'),metric=$(stage,'#nv11-metric'),metLabel=$(stage,'#nv11-metric-label');
 let mode=0,offset=42,t=0,playing=true,last=0;
 function update(){const cfg=[{l:'平移整套碰撞实验',h:'移动实验，不改变球的质量与速度。',cap:'淡色：原位置　亮色：整体平移',m:'总动量 p · 模型示例',v:'碰前 +30 → 碰后 +30',r:'本例 m₁=1、m₂=2；数值为模型单位，并非普适常数。保持不变的是总动量。'},{l:'旋转整个行星系统',h:'太阳、轨道、行星一起转。',cap:'虚线：原方向　实线：旋转后',m:'角动量 L',v:'守恒',r:'在同一中心力下，轨道旋转不改变规律。'},{l:'改变单摆开始时刻',h:'只移动时钟起点，单摆仍是一只。',cap:'不同的开始时刻，同一条运动轨迹',m:'机械能 E · 本例',v:'守恒',r:'示例参数：m=1 kg、L=1 m、g=9.81 m/s²。能量数值随模型设定改变。'}][mode];label.textContent=cfg.l;hint.textContent=cfg.h;caption.textContent=cfg.cap;metLabel.textContent=cfg.m;metric.textContent=cfg.v;reading.textContent=cfg.r;
 value.textContent=mode===0?`${offset>=0?'+':''}${offset} 位置单位`:mode===1?`${offset>=0?'+':''}${offset}°`:`晚 ${offset/12} 小时`;
 slider.min=mode===0?'-65':mode===1?'-90':'0';slider.max=mode===0?'65':mode===1?'90':'72';slider.step=mode===2?'12':'1';slider.value=offset;
 $$(stage,'[data-nv11]').forEach(b=>{const active=Number(b.dataset.nv11)===mode;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
 stage.dataset.v11NoetherMode=String(mode);stage.dataset.v11Transform=String(offset);stage.dataset.v11External='false';}
 $$(stage,'[data-nv11]').forEach(b=>b.onclick=()=>{mode=Number(b.dataset.nv11);offset=[42,48,36][mode];t=0;update();});
 slider.oninput=()=>{offset=Number(slider.value);update();};
 const play=$(stage,'#nv11-play');play.onclick=()=>{playing=!playing;last=0;play.textContent=playing?'暂停':'继续';};$(stage,'#nv11-reset').onclick=()=>{t=0;playing=true;last=0;play.textContent='暂停';};
 function puck(c,t0,dy,shift,dim){/* elastic: m1=1,m2=2; (90,-30)->(-70,50), p=30, KE=4950 */const hit=200/120,x1=t0<hit?-101+90*t0:49-70*(t0-hit),x2=t0<hit?99-30*t0:49+50*(t0-hit);c.save();c.globalAlpha=dim? .45:1;seg(c,20,dy+22,520,dy+22,'#657895',1.2);
   originalSphere(c,270+shift+x1,dy,13,'#7cb3ef');originalSphere(c,270+shift+x2,dy,16,'#f3bf72');c.restore();}
 function rotation(c){const a=offset*PI/180,tt=(t%5.9)+.2;const curve=(ang,col,dashed)=>{c.save();c.rotate(ang);c.beginPath();for(let j=0;j<=150;j++){let E=j/150*TAU,x=116*(Math.cos(E)-.38),y=116*Math.sqrt(1-.38*.38)*Math.sin(E);j?c.lineTo(x,y):c.moveTo(x,y);}c.closePath();c.strokeStyle=col;c.lineWidth=dashed?1.3:2.2;c.setLineDash(dashed?[5,6]:[]);c.stroke();c.restore();};
  c.save();c.translate(268,171);curve(0,'#8b91b272',true);curve(a,'#a4a5fa');let q=orbit(tt),xx=q.x*Math.cos(a)-q.y*Math.sin(a),yy=q.x*Math.sin(a)+q.y*Math.cos(a);seg(c,0,0,xx,yy,'#b5c4ee88',1.2);originalSphere(c,0,0,13,'#ffc657');originalSphere(c,xx,yy,10,'#8d9bfe');const qb=orbit(tt),qa=orbit(tt-.55);c.beginPath();c.moveTo(0,0);c.lineTo(qa.x*Math.cos(a)-qa.y*Math.sin(a),qa.x*Math.sin(a)+qa.y*Math.cos(a));for(let i=0;i<=32;i++){let r=orbit(tt-.55+i/32*.55);c.lineTo(r.x*Math.cos(a)-r.y*Math.sin(a),r.x*Math.sin(a)+r.y*Math.cos(a));}c.closePath();c.fillStyle='#f7c97e3e';c.fill();c.restore();
  txt(c,'太阳',268,186,11,'#e6ba74');txt(c,'等时扫过相同面积',270,317,12,'#c2cbed');stage.dataset.v11Angular='constant';}
 function drawPend(c){let sample=pend[Math.min(pend.length-1,Math.floor((t%8.8)/.005))],px=270,py=54,len=158;
 c.beginPath();c.arc(px,py,len,PI/2-.7,PI/2+.7);c.setLineDash([4,8]);c.strokeStyle='#7f8bb577';c.stroke();c.setLineDash([]);
 let x=px+len*Math.sin(sample.a),y=py+len*Math.cos(sample.a);seg(c,px,py,x,y,'#a4b2cf',2.6);originalSphere(c,x,y,15,'#88d9e3');originalSphere(c,px,py,5,'#ccd8ea');
 let bStart=8+offset/12;txt(c,'实验 A · 08:00 开始',20,25,12,'#9bdce8','left');txt(c,`实验 B · ${String(Math.floor(bStart)).padStart(2,'0')}:00 开始`,520,25,12,'#f3cf98','right');
 const KE=.5*sample.v*sample.v,PE=9.81*(1-Math.cos(sample.a)),E=KE+PE;const aX=161,bX=328,Y=303;seg(c,100,Y,435,Y,'#506686',1);
 [[aX,KE,'#7cdeeb','动能'],[bX,PE,'#efc47a','势能']].forEach(([X,V,C,S])=>{c.fillStyle='#233852';c.fillRect(X,Y-50,61,50);c.fillStyle=C;c.fillRect(X,Y-50*clamp(V/1.8,0,1),61,50*clamp(V/1.8,0,1));txt(c,S,X+30,Y+18,11,C);});
 txt(c,'相同初态 · 相同经过时间',270,244,12,'#c2d9f0');metric.textContent=`本例约 ${E.toFixed(2)} J`;stage.dataset.v11PendulaCount='1';stage.dataset.v11Energy=E.toFixed(5);}
 function frame(now){if(!viewIs('symmetry',canvas))return;const dt=last?clamp((now-last)/1000,0,.048):0;last=now;if(playing)t+=dt;
 const c=stageContext(canvas,540,340);if(c){deepSpace(c,540,340,true);if(mode===0){txt(c,'实验 A · 原位置',23,31,12,'#8da5c3','left');txt(c,'实验 B · 新位置',23,178,12,'#a6e4e9','left');puck(c,t%3.4,108,0,true);puck(c,t%3.4,254,offset,false);txt(c,'把两只球、初态与轨迹一起移动',270,318,12,'#b5c8df');stage.dataset.v11Momentum='30';}
 else if(mode===1)rotation(c);else drawPend(c);}safeRequestAnimationFrame(frame);}
 update();safeRequestAnimationFrame(frame);
};

window.__renderBreakingV10ForV11=window.renderSymmetryBreaking;

// 12 P/C/T: retain the ORIGINAL broken-mirror top scene and the original
// glowing-neutrino CPT machine. Replace only the unclear lower-left card body.
window.renderSymmetryBreaking=function renderBreakingOriginalV11(){
 // V10 kept the original Wu/CPT machinery through its V8→V9 renderer.
 // We deliberately call the V9 implementation, NOT the verbose V10 wrapper.
 if(typeof window.__renderBreakingV9ForV11==='function')window.__renderBreakingV9ForV11();
 else if(typeof window.__renderBreakingV10ForV11==='function')window.__renderBreakingV10ForV11();
 else return;
 const stage=document.getElementById('view-symmetry-breaking');if(!stage)return;
 const root=$(stage,'.breaking-v8'),grid=$(stage,'.breaking-v8-sym-grid');if(!root||!grid)return;
 $$(root,'.v10-sym-bridge,.v10-cpt-note,.v9-wu-legend').forEach(el=>el.remove());
 $(root,'.breaking-v8-heading p').textContent='上帝是个左撇子？从一面破碎的镜子，到 CPT 的深层秩序。';
 const sub=$(root,'.breaking-v8-sym .breaking-v8-section-title p');if(sub)sub.textContent='改变一个微观过程，看看自然是否同样回应。';
 grid.innerHTML=[['P','🪞','宇称'],['C','◐','电荷'],['T','⏳','时间']].map(([id,ico,label])=>`<button type="button" class="breaking-v8-sym-card v11-sym-card" data-v11sym="${id}"><span class="breaking-v8-icon">${ico}</span><b>${label} ${id}</b></button>`).join('');
 const old=$(stage,'.v9-sym-scene');if(old)old.remove();const rbtn=$(stage,'.breaking-v8-reset-cracks');if(rbtn)rbtn.remove();
 const art=document.createElement('div');art.className='v11-sym-art';art.innerHTML=`<canvas class="v11-sym-canvas" role="img" aria-label="三种不同的微观对称操作动态对照"></canvas><p class="v11-sym-line" aria-live="polite"></p><details class="v11-quiet-details v11-sym-source"><summary>进一步理解物理判据</summary><p class="v11-sym-science"></p><p><a href="https://www.nist.gov/pml/fall-parity/reversal-parity-law-nuclear-physics" target="_blank" rel="noopener noreferrer">Wu 宇称实验</a> · <a href="https://doi.org/10.1103/PhysRevLett.109.211801" target="_blank" rel="noopener noreferrer">BABAR 时间反演实验</a></p></details>`;
 grid.after(art);
 const symCanvas=$(art,'canvas'),lineP=$(art,'.v11-sym-line'),science=$(art,'.v11-sym-science');let selected='P',entered=performance.now();
 const notes={
 P:['镜像的预言，与真实的电子发射方向不一致。','P 翻转动量方向，核自旋作为轴矢量不变。Co-60 的 β 衰变中，电子更常沿核自旋反方向发射，因此宇称变换后的过程与真实过程不等价。'],
 C:['仅把左旋中微子换成左旋反中微子，相同的弱作用耦合会受到抑制。','这里比较的是 W 玻色子介导的带电弱相互作用的手征选择性：高能近似下，它耦合左旋中微子和右旋反中微子。C 只改变粒子身份，不改变动量、自旋，因此左旋中微子的 C 对应态（左旋反中微子）在这一类作用中受到强烈抑制；不代表所有反中微子都不参与弱作用。画中的光圈是固定的概念性比较区域，亮暗表示这种耦合的选择性，不是引力或吸引，粒子大小与速度保持不变。'],
 T:['正向与反向跃迁，未必具有相同概率。','T 不是简单倒放视频，而是比较量子态之间互逆跃迁的概率。BABAR 对中性 B 介子系统发现了 T 破坏；图中 B₋ 为 CP 标记态，不代表带负电的 B 介子。两条色条为原理示意，不是实测概率。']
 };
 function select(id){selected=id;entered=performance.now();$$(grid,'[data-v11sym]').forEach(b=>{const on=b.dataset.v11sym===id;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));});lineP.innerHTML='<span class="v14-sym-verdict">不守恒</span><strong>'+notes[id][0]+'</strong>';science.textContent=notes[id][1];stage.dataset.v11Sym=id;stage.dataset.v14SymConclusion=id;}
 $$(grid,'[data-v11sym]').forEach(b=>b.onclick=()=>select(b.dataset.v11sym));
 function drawSym(t){const c=stageContext(symCanvas,560,255);if(!c)return;deepSpace(c,560,255);
   if(selected==='P'){
     txt(c,'真实世界',139,29,13,'#dcecff');txt(c,'空间反演 P',422,29,13,'#e8d9eb');
     c.fillStyle='#64718c30';c.fillRect(276,44,8,153);seg(c,280,44,280,196,'#8196bd',1);
     [[139,false],[422,true]].forEach(([x,mirror])=>{
       originalSphere(c,x,119,23,'#3d8bff');txt(c,'Co-60',x,119,10,'#e4f2ff');
       arrow(c,x,93,x,48,'#f9c76d',3);
       for(let i=0;i<14;i++){const goingDown=mirror?i<3:i<11,dy=goingDown?1:-1,progress=(t*.32+i*.17)%1;
         disc(c,x+(i%4-1.5)*10,119+dy*(24+progress*61),3.3,'#70e0ec');}
       txt(c,mirror?'镜像要求 ↑ 多':'实测 ↓ 多',x,221,13,mirror?'#edaaa7':'#9ee4e9');
     });
     txt(c,'核自旋 ↑ 在 P 下不变',280,244,11,'#b3c5d9');
   }else if(selected==='C'){
     // The particle glides through a FIXED interaction zone at constant size/speed.
     // A pulse at the fixed zone illustrates the weak charged-current helicity
     // selection, rather than suggesting the neutrino is attracted or grows.
     const phase=(t*.36)%1;
     txt(c,'原态 · 左旋中微子',139,25,13,'#dcefff');
     txt(c,'仅 C 变换 · 左旋反中微子',422,25,13,'#f0d7bd');
     c.fillStyle='#67779b23';c.fillRect(277,37,6,185);seg(c,280,37,280,221,'#7185aa',1);
     [[139,false],[422,true]].forEach(([x,anti])=>{
       const left=x-101,gate=x+30,right=x+100;
       const px=left+clamp(phase,0,1)*198;
       const col=anti?'#eeb18b':'#6bdbe9';
       seg(c,left,125,right,125,'#566f95',1.4);
       // An outlined station fixed in place; it never pulls on the particle.
       c.save();c.strokeStyle=anti?'#a3938e70':'#7bdcd47a';c.lineWidth=1.5;
       c.setLineDash([4,5]);c.beginPath();c.arc(gate,125,21,0,TAU);c.stroke();c.setLineDash([]);
       const proximity=Math.exp(-Math.pow((px-gate)/24,2));
       if(!anti){
         c.shadowColor='#6dddc7';c.shadowBlur=9+18*proximity;
         c.beginPath();c.arc(gate,125,23+3*proximity,0,TAU);
         c.strokeStyle=`rgba(112,233,213,${.22+.72*proximity})`;c.lineWidth=2+proximity*2;c.stroke();
         if(proximity>.35){c.beginPath();c.arc(gate,125,33,Math.PI*1.1,Math.PI*1.8);c.strokeStyle=`rgba(246,204,126,${proximity*.72})`;c.lineWidth=2;c.stroke();}
       }else{
         c.beginPath();c.arc(gate,125,23,0,TAU);c.strokeStyle='#afa0a44b';c.lineWidth=1.3;c.stroke();
       }
       c.shadowBlur=0;c.restore();
       originalSphere(c,px,125,10,col);
       txt(c,anti?'ν̄':'ν',px,125,10,'#17233a');
       arrow(c,x-52,181,x+45,181,'#7de4ed',2);
       arrow(c,x+45,202,x-52,202,'#f0c67d',2);
       txt(c,'p →',x-65,178,11,'#87dce7');txt(c,'← S',x+62,201,11,'#eccc95');
       txt(c,anti?'W 作用：耦合受抑':'W 作用：可以耦合',x,243,12,anti?'#e4b29e':'#9ee8d6');
     });
     txt(c,'W± 带电弱作用 · 光圈表示耦合，不是吸引力',280,69,11,'#9fb0c9');
     stage.dataset.v16CParticleRadius='10';stage.dataset.v16CMechanism='fixed-gate-helicity-selection';
      }else{
     txt(c,'正向跃迁',155,32,13,'#d7ebff');txt(c,'T 对应跃迁',409,32,13,'#d7ebff');
     const first=62,second=313;[[first,false],[second,true]].forEach(([x,rev])=>{
       const a=rev?'B₋':'B̄⁰',b=rev?'B̄⁰':'B₋';
       originalSphere(c,x+33,107,15,rev?'#e9b388':'#78cee4');originalSphere(c,x+170,107,15,rev?'#7dc6e5':'#e8b685');
       txt(c,a,x+33,107,11,'#152342');txt(c,b,x+170,107,11,'#152342');txt(c,a==='B₋'?'CP态':'味态',x+33,140,9,'#9db6d5');txt(c,b==='B₋'?'CP态':'味态',x+170,140,9,'#9db6d5');
       arrow(c,x+58,107,x+142,107,rev?'#f2b88f':'#70d5de',2.3);
       const u=(t*.28)%1;originalSphere(c,x+60+u*80,107,4,'#c5ecfb');
       txt(c,rev?'反向过程':'原过程',x+101,67,10,'#abbfda');
       c.fillStyle='#263750';c.fillRect(x+25,158,172,9);c.fillStyle=rev?'#e0a178':'#7bdcde';c.fillRect(x+25,158,(rev?96:146)*clamp(t/1.7,0,1),9);
     });
     txt(c,'比较互逆过程的发生概率（长度仅示意）',280,215,12,'#bacce4');
     txt(c,'BABAR · 2012 · 中性 B 介子',280,242,11,'#8ea8c9');
   }
 }
 function tick(now){if(!viewIs('symmetry-breaking',symCanvas))return;drawSym((now-entered)/1000);safeRequestAnimationFrame(tick);}select('P');safeRequestAnimationFrame(tick);
 // Restore V8 CPT's quiet original art, but reveal a meaningful change at each step.
 const cpt=$(stage,'.breaking-v8-cpt-stage');if(cpt){
   const extra=$(cpt,'.v9-cpt-legend');if(extra)extra.remove();
   const oldNote=$(cpt,'.breaking-v8-cpt-note');if(oldNote){oldNote.innerHTML='光环只是视觉提示，<strong>左右旋以动量 p 和自旋 S 的相对方向为准</strong>。联合 CPT 的等概率关系是通常局域量子场论的理论结论。';}
   const heading=$(root,'.breaking-v8-cpt .breaking-v8-section-title p');if(heading)heading.textContent='单独变换可以失效，三者联合为何仍然对称？';
   const caption=$(cpt,'.breaking-v8-cpt-explain');if(caption)caption.classList.add('v11-cpt-explain');
   const strip=document.createElement('div');strip.className='v11-cpt-strip';strip.innerHTML='<span data-cptphase="0" class="active">ν · 左旋</span><i>→</i><span data-cptphase="1">P · 右旋 ν</span><i>→</i><span data-cptphase="2">C · 右旋 ν̄</span><i>→</i><span data-cptphase="3">T · 右旋 ν̄</span>';
   const controls=$(cpt,'.breaking-v8-cpt-controls');if(controls)controls.before(strip);
   const law=document.createElement('div');law.className='v15-cpt-law';law.setAttribute('aria-live','polite');
   law.innerHTML='<div class="v16-cpt-contrast">单独 C · P · T 可以失效</div><div class="v16-cpt-conclusion"><span>C + P + T</span><strong>联合对称</strong></div><div class="v16-cpt-twin" aria-label="两条同步光迹，表示在定理条件下原过程与CPT对应过程具有相同发生概率"><div class="v16-cpt-trace"><span>原过程</span><i><em></em></i></div><span class="v16-cpt-equals">＝</span><div class="v16-cpt-trace"><span>CPT 对应过程</span><i><em></em></i></div></div><p>完成 P → C → T 后，比较完整过程的概率</p>';
   strip.after(law);
   const update=()=>{const ix=Number(stage.dataset.v8CptStage||0);$$(strip,'[data-cptphase]').forEach(el=>el.classList.toggle('active',Number(el.dataset.cptphase)===ix));law.classList.toggle('is-complete',ix===3);law.querySelector('p').textContent=ix===3?'两个对应过程发生概率相同 · CPT 定理结论':'依次完成三种变换，再揭示两条对应轨迹';stage.dataset.v15CptComplete=String(ix===3);stage.dataset.v11CptStage=String(ix);};
   $$(cpt,'[data-cpt]').forEach(b=>b.addEventListener('click',update));update();
 }
};

// 15 Evidence: same original canvas and glass style; one precise finding,
// one measurement method, one visual cue. 1974 BNL measured e+e- (not muon) pairs.
const evi={
 wu:{date:'1957 · 宇称不守恒',title:'发现：弱相互作用不守镜像对称',one:'怎么发现：让 Co-60 核自旋定向，统计 β 电子的发射方向。',metric:'看右侧：逆自旋方向的电子明显更多',detail:'吴健雄等测量定向 Co-60 原子核的 β 电子角分布，证实了弱相互作用中的宇称不守恒。右侧柱长是教学示意，不是原始数据。',source:'https://www2.lbl.gov/abc/wallchart/chapters/05/2.html'},
 jpsi:{date:'1974 · J/ψ',title:'发现：新粒子 J/ψ，指向粲夸克',one:'怎么发现：SLAC 扫对撞能量；BNL 在固定靶产物中重建 e⁺e⁻ 的质量。',metric:'看两条曲线：不同实验都在约 3.1 GeV 发现尖锐信号',detail:'SLAC SPEAR 的 e⁺e⁻ 对撞能量扫描揭示窄共振；丁肇中团队在 BNL 以质子打铍靶，测量正负电子对 e⁺e⁻ 不变质量谱，独立发现相同质量的 J 粒子。不是正负缪子对。曲线是概念示意，不是原始数据。',source:'https://link.aps.org/doi/10.1103/PhysRevLett.33.1404'},
 higgs:{date:'2012 · 希格斯',title:'发现：约 125 GeV 的希格斯玻色子',one:'怎么发现：从大量质子碰撞的衰变产物重建质量，寻找超出背景的信号。',metric:'看右侧：重建质量在约 125 GeV 附近出现超额',detail:'2012 年 ATLAS 与 CMS 在双光子和四轻子等衰变通道观察到新粒子信号，统计显著性达到发现标准。此图演示一种四轻子末态的质量重建，并不等于单靠某个事件或一条示意峰就完成发现。',source:'https://cms.cern/physics/higgs-boson/observation-new-particle-mass-125-gev'}
};
window.renderEvidenceV5=function renderEvidenceOriginalV11(){const stage=document.getElementById('view-science-evidence');if(!stage)return;
 stage.innerHTML=`<article class="v8-research v11-research v11-evidence"><header class="v8-research-title"><span class="v8-kicker">RESEARCH 01 · 探索证据</span><h2>我们怎么知道？</h2><p>从打破镜像对称，到发现新粒子，再到验证质量机制：<strong>证据怎样一步步说话？</strong></p></header>
 <section class="v8-research-surface"><nav class="v11-research-tabs v16-evidence-timeline" aria-label="按时间探索三项实验"><button data-v11e="wu"><small>01 · 对称性</small>1957 · 宇称</button><button data-v11e="jpsi"><small>02 · 新粒子</small>1974 · J/ψ</button><button data-v11e="higgs"><small>03 · 质量机制</small>2012 · 希格斯</button></nav>
 <div class="v11-research-main"><div class="v11-research-scene"><canvas class="v11-evi-canvas" width="760" height="420" role="img" aria-label="随时间动态变化的实验示意：核自旋电子方向、两条Jψ发现路线或希格斯事件重建"></canvas><div class="v11-scene-actions"><span class="v11-evi-act" aria-live="polite"></span><button type="button" data-v11replay>↺ 重看</button><button type="button" data-v11pause>暂停</button></div></div>
 <aside class="v11-research-reading"><span class="v8-reading-kicker v11-evi-date"></span><h3 class="v11-evi-title"></h3><p class="v11-evi-one"></p><div class="v11-evi-metric"><span>图中的关键证据</span><strong></strong></div><details class="v11-quiet-details"><summary>科学依据与示意边界</summary><p class="v11-evi-detail"></p><a class="v11-evi-source" rel="noopener noreferrer" target="_blank">查看资料 ↗</a></details></aside></div></section></article>`;
 const canvas=$(stage,'.v11-evi-canvas'),act=$(stage,'.v11-evi-act'),pause=$(stage,'[data-v11pause]');let key='wu',clock=0,last=0,playing=true;
 function select(id){key=id;clock=0;last=0;const x=evi[id];$$(stage,'[data-v11e]').forEach(b=>{const on=b.dataset.v11e===id;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));});$(stage,'.v11-evi-date').textContent=x.date;$(stage,'.v11-evi-title').textContent=x.title;$(stage,'.v11-evi-one').textContent=x.one;$(stage,'.v11-evi-metric strong').textContent=x.metric;$(stage,'.v11-evi-detail').textContent=x.detail;$(stage,'.v11-evi-source').href=x.source;stage.dataset.v11EvidenceCase=id;stage.dataset.v16Finding=x.title;stage.dataset.v16Method=x.one;stage.dataset.v16Visual=x.metric;}
 $$(stage,'[data-v11e]').forEach(b=>b.onclick=()=>select(b.dataset.v11e));$(stage,'[data-v11replay]').onclick=()=>{clock=0;playing=true;pause.textContent='暂停';last=0;};pause.onclick=()=>{playing=!playing;last=0;pause.textContent=playing?'暂停':'继续';};
 function massCurve(c,x0,y0,W,H,progress,col='#6ad6e2'){seg(c,x0,y0,x0,y0-H,'#6c84a6',1.1);seg(c,x0,y0,x0+W,y0,'#6c84a6',1.1);c.beginPath();for(let j=0;j<=95;j++){const x=j/95*W,peak=clamp(progress,0,1)*H*.78*Math.exp(-.5*Math.pow((j-51)/5,2));const y=y0-H*.12-peak-H*.05*Math.sin(j*.19);if(j===0)c.moveTo(x0+x,y);else c.lineTo(x0+x,y);}c.strokeStyle=col;c.lineWidth=2.2;c.stroke();}
 function drawWu(c,t){txt(c,'Co-60 核自旋 ↑',232,42,16,'#e2eaff');originalSphere(c,232,179,35,'#3e82e1');txt(c,'Co-60',232,181,13,'#fff');arrow(c,232,129,232,75,'#f7cd79',3);
  const cycle=t*.52;for(let i=0;i<32;i++){const down=((i*17)%32)<25,dy=down?1:-1,u=(cycle+i/32)%1,x=232+Math.sin(i*4.3)*35*u,y=179+dy*(38+u*99);disc(c,x,y,3.4,'#6fdde4');}
  txt(c,'电子发射方向',560,53,13,'#b4c7e1');const top=120;[[0,'顺自旋 ↑',.25,'#88a9bc'],[1,'逆自旋 ↓',.78,'#70d5dd']].forEach(([i,s,p,col])=>{let yy=top+i*113;txt(c,s,469,yy,13,'#d0dfeb','left');c.fillStyle='#25334d';c.fillRect(469,yy+17,203,21);c.fillStyle=col;c.fillRect(469,yy+17,203*clamp(p*(.58+.42*clamp(t/3,0,1)),0,1),21);});
  txt(c,'若 P 守恒，两侧不应有这种偏向',565,352,13,'#d2bf9b');act.textContent='定向原子核 → 观察发射方向';}
 function drawJpsi(c,t){const phase=t%8,p1=clamp(phase/1.75,0,1),p2=clamp(((phase+1.2)%8)/2,0,1);seg(c,380,35,380,390,'#61749b55',1);
  txt(c,'SLAC · e⁺e⁻ 对撞',190,40,16,'#a3dceb');txt(c,'BNL · 质子固定靶',566,40,16,'#e9c48b');
  // Left: two beams approach collision in a luminous oval chamber.
  c.save();c.beginPath();c.ellipse(190,157,128,70,0,0,TAU);c.strokeStyle='#4a6899';c.lineWidth=2;c.stroke();c.restore();
  const bx1=94+95*p1,bx2=286-95*p1;originalSphere(c,bx1,157,8,'#78d3e5');originalSphere(c,bx2,157,8,'#f0b689');
  if(p1>.9){c.save();c.globalAlpha=1-(p1-.9)*7;c.beginPath();c.arc(190,157,19+31*(p1-.9)*10,0,TAU);c.strokeStyle='#cde7fa';c.lineWidth=2;c.stroke();c.restore();}
  txt(c,'扫能量 → 反应率',190,257,12,'#aec4de');massCurve(c,73,372,232,73,Math.max(.28,clamp(t/4.1,0,1)),'#77d4e7');
  // Right: protons hit a stationary target and two leptons are detected.
  const ux=430+118*p2;originalSphere(c,ux,157,8,'#79d5e2');c.fillStyle='#e0bf88';c.fillRect(555,115,7,87);txt(c,'靶',558,104,12,'#efd3a5');
  if(p2>.90){let q=clamp((p2-.90)*10,0,1);[[154,-1],[154,1]].forEach(([dx,dy])=>{let x=559+90*q,y=157+75*q*dy;seg(c,559,157,x,y,'#e1b58b',2);originalSphere(c,x,y,6,'#a7dcf4');if(q>.68)txt(c,dy<0?'e⁺':'e⁻',x+12,y,12,'#dceafa','left');});}
  txt(c,'e⁺e⁻ 质量重建',566,257,12,'#aec4de');massCurve(c,447,372,235,73,Math.max(.28,clamp((t-.6)/4.1,0,1)),'#e3bd85');
  txt(c,'两条证据 → J/ψ ≈ 3.1 GeV',380,405,13,t>1.5?'#eccb94':'#b7bed4');
  stage.dataset.v11JpsiTwoLivePaths='true';act.textContent='SLAC 看反应率 · BNL 看正负电子对质量';}
 function drawHiggs(c,t){const cyc=t%9,q=clamp((cyc-1.5)/3.5,0,1),peak=clamp((cyc-4)/3,0,1);
  txt(c,'高能碰撞',222,45,16,'#d7e9fb');
  // No fictitious long-lived glowing Higgs sphere. Only its possible decay products.
  [[115,220,1],[329,220,-1]].forEach(([x,y,d])=>{originalSphere(c,x+d*104*clamp(cyc/1.2,0,1),y,8,d===1?'#77cde7':'#ecc181');});
  if(cyc>1.4){let a=clamp((cyc-1.4)/1.5,0,1);c.save();c.globalAlpha=1-a;c.beginPath();c.arc(222,220,10+35*a,0,TAU);c.strokeStyle='#f1c887';c.lineWidth=2;c.stroke();c.restore();}
  const tracks=[[-114,-91,'e⁺','#f5ada5'],[114,-91,'e⁻','#f5ada5'],[-119,85,'μ⁺','#8fe2df'],[119,85,'μ⁻','#8fe2df']];
  if(cyc>1.65)tracks.forEach(([dx,dy,name,col])=>{const x=222+dx*q,y=220+dy*q;seg(c,222,220,x,y,col,2.1);originalSphere(c,x,y,6,col);if(q>.64)txt(c,name,x+(dx>0?14:-14),y,12,'#d6e9f4',dx>0?'left':'right');});
  txt(c,'识别末态 · 重建质量',558,48,14,'#dce8f5');massCurve(c,430,302,260,191,peak,'#7ad4df');
  if(cyc>5)txt(c,'约 125 GeV 的超额',562,90,13,'#f2ce86');txt(c,'统计大量事件',561,340,12,'#b4c7dd');
  act.textContent=cyc<1.7?'高能碰撞':cyc<4?'探测衰变末态':cyc<6.4?'重建候选质量':'统计信号与背景';}
 function draw(){const c=stageContext(canvas,760,420);if(!c)return;deepSpace(c,760,420);if(key==='wu')drawWu(c,clock);else if(key==='jpsi')drawJpsi(c,clock);else drawHiggs(c,clock);}
 function frame(now){if(!viewIs('evidence',canvas))return;const dt=last?clamp((now-last)/1000,0,.06):0;last=now;if(playing)clock+=dt;draw();safeRequestAnimationFrame(frame);}select('wu');safeRequestAnimationFrame(frame);
};

// 16 Limits: unresolved questions APPEAR OUTSIDE THE CORE on the LEFT first;
// the RIGHT is a sparse, linked interpretation of whichever light is selected.
const boundary=[
 {id:'gravity',name:'引力',kind:'理论范围之外',ask:'引力并不在粒子物理标准模型中。',detail:'经典引力由广义相对论成功描述；尚无经实验确认的完整量子引力理论。',color:'#fbbf24'},
 {id:'dark',name:'暗物质',kind:'未知成分',ask:'额外引力效应已被观测，但身份未明。',detail:'星系与宇宙学观测提示存在未解释的引力来源；尚未确认是哪种粒子或其他机制。',color:'#a78bfa'},
 {id:'neutrino',name:'中微子质量',kind:'最小模型需扩展',ask:'振荡表明至少存在质量平方差。',detail:'中微子振荡已获实验证实，但质量机制与是否属于马约拉纳粒子尚未确定。',color:'#4ecdc4'},
 {id:'asymmetry',name:'反物质之谜',kind:'已知机制不足',ask:'为什么宇宙中物质占据优势？',detail:'实验观测到 CP 破坏，但已知的标准模型来源不足以解释当前宇宙物质优势。',color:'#ff6b6b'},
 {id:'generations',name:'三代与参数',kind:'参数来源未解',ask:'为什么粒子恰有三代、质量相差如此大？',detail:'标准模型能使用测得的质量与耦合参数作预测，但没有从基本原理推出全部参数值。',color:'#7bd5b3'},
 {id:'darkenergy',name:'暗能量',kind:'宇宙学问题',ask:'宇宙为什么加速膨胀？',detail:'加速膨胀来自天文学观测；其原因属于更广泛的宇宙学问题，不是标准模型已找到的新粒子。',color:'#cf9de7'}
];
const boundaryAngles=[-1.12,-.46,.25,1.04,2.05,3.12];
window.renderLimitsV5=function renderLimitsOriginalV11(){const stage=document.getElementById('view-science-limits');if(!stage)return;
 stage.innerHTML=`<article class="v8-research v11-research v11-limits"><header class="v8-research-title"><span class="v8-kicker">THE GRAND UNIFICATION · 未竟之问</span><h2>理论的边界</h2><p>看见光照亮的部分，也看见仍隐没在黑暗中的问题。</p></header>
 <section class="v8-research-surface"><div class="v11-limits-main"><div class="v11-limits-visual"><canvas class="v11-limit-canvas" width="760" height="430" role="img" aria-label="标准模型四类粒子与外围六种不同类型的未解问题；外围符号不代表粒子，可点击"></canvas><small>点选外围的现象符号，右侧随之回应。符号不代表新粒子。</small></div>
 <aside class="v11-limits-reading"><span class="v8-reading-kicker">未解之境 · <span class="v11-limit-count">01 / 06</span></span><h3 class="v11-limit-title">引力</h3><p class="v11-limit-ask"></p><div class="v11-limit-kind"></div><p class="v11-limit-detail"></p><div class="v11-limit-choices" role="group" aria-label="选择未解问题"></div><details class="v11-quiet-details"><summary>了解这类知识边界</summary><p>“不在模型范围内”“已观测但身份未知”“最小模型需要扩展”“参数来源未解”并不是同一个判断。<a href="https://home.cern/science/physics/standard-model" target="_blank" rel="noopener noreferrer">CERN｜标准模型</a></p></details></aside></div></section></article>`;
 const canvas=$(stage,'.v11-limit-canvas'),choices=$(stage,'.v11-limit-choices');let current=0,last=0,seconds=0,manual=false;
 choices.innerHTML=boundary.map((a,i)=>`<button type="button" data-v11limit="${a.id}"><span>${String(i+1).padStart(2,'0')}</span>${a.name}</button>`).join('');
 function select(ix,byUser=false){current=ix;manual=manual||byUser;if(byUser)seconds=Math.max(seconds,4.1);$$(choices,'button').forEach((b,i)=>{const on=i===current;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));});const item=boundary[ix];$(stage,'.v11-limit-title').textContent=item.name;$(stage,'.v11-limit-ask').textContent=item.ask;$(stage,'.v11-limit-kind').textContent=item.kind;$(stage,'.v11-limit-detail').textContent=item.detail;$(stage,'.v11-limit-count').textContent=`${String(ix+1).padStart(2,'0')} / 06`;stage.dataset.v11Limit=item.id;stage.dataset.v11LimitCategory=item.kind;}
 $$(choices,'button').forEach((b,i)=>b.onclick=()=>select(i,true));
 function nodePositions(){const pts=[[246,59],[516,77],[549,232],[526,351],[140,351],[93,220]];return boundary.map((item,i)=>({x:pts[i][0],y:pts[i][1],...item}));}
 function drawQuestionSymbol(c,p,i,on,t){
  // These icons deliberately depict unresolved PHENOMENA, not candidate particles.
  const x=p.x,y=p.y,lit=on?1:.66;c.save();c.translate(x,y);c.strokeStyle=p.color;c.fillStyle=p.color;c.lineCap='round';c.lineJoin='round';c.lineWidth=on?2.35:1.65;c.globalAlpha=lit;
  if(on){c.shadowColor=p.color;c.shadowBlur=12+2*Math.sin(t*2.2);}const stroke=(fn)=>{c.beginPath();fn();c.stroke();};
  if(i===0){ // Gravity: a small distorted space-time grid, not a mass sphere.
   for(let j=-1;j<=1;j++)stroke(()=>{c.moveTo(-23,8+j*7);c.quadraticCurveTo(0,-8+j*3,23,8+j*7);});
   for(let j=-1;j<=1;j++)stroke(()=>{c.moveTo(j*15,-13);c.quadraticCurveTo(j*15-8,5,j*15,19);});
  }else if(i===1){ // Dark matter: diffuse galactic halo + orbit.
   c.beginPath();c.ellipse(0,0,26,11,-.27,0,TAU);c.stroke();c.beginPath();c.ellipse(0,0,17,5,-.27,0,TAU);c.stroke();
   c.globalAlpha=.3;stroke(()=>{c.arc(0,0,29,-1.1,1.4);});
  }else if(i===2){ // Neutrino mass: oscillating wave bands.
   for(let row=0;row<2;row++)stroke(()=>{for(let j=0;j<=36;j++){const xx=-25+j*1.4,yy=(row?7:-7)+6*Math.sin(j*.32+row*2+(on?t*.55:0));j?c.lineTo(xx,yy):c.moveTo(xx,yy);}});
  }else if(i===3){ // Matter / antimatter imbalance: unequal twin signals.
   for(let row=0;row<2;row++){const v=row?14:29;stroke(()=>{c.moveTo(-22,(-8+row*16));c.lineTo(-22+v,(-8+row*16));});}
   stroke(()=>{c.moveTo(-24,-17);c.lineTo(-24,18);});
  }else if(i===4){ // Generations and parameters: ascending scales.
   for(let row=0;row<3;row++){const y0=-13+row*13;stroke(()=>{c.moveTo(-22,y0);c.lineTo(-22+(row+1)*13,y0);});}
  }else{ // Accelerating cosmos: space itself expanding.
   for(let a=0;a<4;a++){const ang=a*PI/2+PI/4,ux=Math.cos(ang),uy=Math.sin(ang);stroke(()=>{c.moveTo(ux*5,uy*5);c.lineTo(ux*25,uy*25);c.lineTo(ux*17-uy*4,uy*17+ux*4);c.moveTo(ux*25,uy*25);c.lineTo(ux*17+uy*4,uy*17-ux*4);});}
  }
  c.restore();
 }
 canvas.onclick=evt=>{const r=canvas.getBoundingClientRect(),x=(evt.clientX-r.left)*760/r.width,y=(evt.clientY-r.top)*430/r.height;let best=-1,dist=Infinity;nodePositions().forEach((p,i)=>{let d=Math.hypot(p.x-x,p.y-y);if(d<dist){best=i;dist=d;}});if(dist<71){select(best,true);}};
 canvas.tabIndex=0;canvas.onkeydown=e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();select((current+(e.key==='ArrowRight'?1:5))%6,true);}};
 function draw(){const c=stageContext(canvas,760,430);if(!c)return;deepSpace(c,760,430);
  const cx=302,cy=215,R=107;
  const halo=c.createRadialGradient(cx,cy,26,cx,cy,148);halo.addColorStop(0,'#5675ca38');halo.addColorStop(.7,'#647bdb16');halo.addColorStop(1,'#647bdb00');disc(c,cx,cy,150,halo);
  // One quietly luminous model nucleus and the original blue/purple lines.
  c.beginPath();c.arc(cx,cy,R,0,TAU);c.strokeStyle='#829ce6b9';c.lineWidth=1.6;c.stroke();
  c.beginPath();c.arc(cx,cy,R-19,0,TAU);c.setLineDash([4,6]);c.strokeStyle='#8296d060';c.stroke();c.setLineDash([]);
  // The Standard Model is NOT just three particles. Refer back to the original particle-grid taxonomy.
  txt(c,'标准模型',cx,cy-57,21,'#e7eeff');
  // Same four groups, exact color values and marker language as the ORIGINAL particle grid.
  // The central classification is a tiny overview of the grid, not three invented particles.
  const particleFamilies=[
    ['夸克','#ff6b6b'],['轻子','#4ecdc4'],
    ['规范玻色子','#ffe66d'],['标量玻色子','#ff9f43']
  ];
  particleFamilies.forEach(([name,color],i)=>{
    const col=i%2,row=Math.floor(i/2),bx=cx+(col?47:-47),by=cy-11+row*45;
    c.fillStyle='#0b1831';c.strokeStyle=color+'95';c.lineWidth=1;
    c.beginPath();c.roundRect(bx-43,by-16,86,32,6);c.fill();c.stroke();
    // Dot uses the exact same categorical color as the home grid legend.
    disc(c,bx-32,by,3.5,color);txt(c,name,bx+6,by,11,'#edf1fc');
  });
  stage.dataset.v13FourFamilies='quark,lepton,gauge-boson,scalar-boson';
  const all=nodePositions();all.forEach((p,i)=>{const appear=clamp((seconds-i*.62)/.72,0,1);if(appear<=0)return;const s=appear*appear*(3-2*appear),on=i===current;
   c.save();c.globalAlpha=s*(on?1:.6);const tx=p.x,ty=p.y;
   if(on){const dx=tx-cx,dy=ty-cy,dist=Math.max(1,Math.hypot(dx,dy));seg(c,cx+dx/dist*R,cy+dy/dist*R,tx-dx/dist*34,ty-dy/dist*34,p.color,1.15,[3,5]);}
   drawQuestionSymbol(c,p,i,on,seconds);txt(c,p.name,tx,ty+39,on?14:12,on?'#eef5ff':'#aebcd6','center',on?650:450);c.restore();});
 }
 function tick(now){if(!viewIs('limits',canvas))return;const dt=last?clamp((now-last)/1000,0,.06):0;last=now;seconds+=dt;if(!manual&&seconds>7.5){const step=Math.floor((seconds-7.5)/4.1);if(step>=0){const i=step%6;if(i!==current)select(i);}}draw();safeRequestAnimationFrame(tick);}
 select(0);safeRequestAnimationFrame(tick);
};

// Update the existing footer questions, without putting them on the animation stage.
if(typeof lessonGuides!=='undefined'){
 lessonGuides.weak=['中子打入后，为什么元素还没有立刻改变？','分辨中子俘获与后面的 β⁻ 衰变；观察 Fe→Co→Ni→Cu→Zn 时核内哪个数字每次增加 1。'];
 lessonGuides.symmetry=['改变的是整套实验，还是向系统施加外力？','用三种滑块移动整套实验；时间平移只有一只单摆，比较不同启动时刻下的同一条轨迹。'];
 lessonGuides['symmetry-breaking']=['点击 C、P、T，画面分别改变了什么？','先看吴健雄镜像，随后观察三个不同的微观过程；CPT 连点三次时跟踪粒子身份、动量和自旋。'];
 lessonGuides.evidence=['1957、1974、2012 年分别发现了什么？靠什么证据？','1957 看电子发射不对称；1974 看 SLAC 扫描和 BNL 正负电子对质量的相同 J/ψ 信号；2012 看约 125 GeV 的事件超额。'];
 lessonGuides.limits=['六个问题为什么都出现在标准模型的外围？','看它们逐一浮现，再点击星点，比对每个问题属于哪一种边界。'];
}
})();
