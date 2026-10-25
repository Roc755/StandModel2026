console.log("Script Version: 3.0 - Loaded");
const particlesData = {
    "up": {
        name: "上夸克 (Up Quark)",
        type: "费米子 (夸克)",
        mass: "2.2 MeV/c²",
        charge: "+2/3 e",
        spin: "1/2",
        desc: "上夸克是最轻的夸克。它与下夸克一起构成了原子核中的质子和中子，是构成物质世界最基础的粒子之一。",
        lifetime: "稳定 (在质子中)",
        forces: "强力, 电磁力, 弱力, 引力",
        relation: "质子(uud), 中子(udd)"
    },
    "down": {
        name: "下夸克 (Down Quark)",
        type: "费米子 (夸克)",
        mass: "4.7 MeV/c²",
        charge: "-1/3 e",
        spin: "1/2",
        desc: "下夸克是第二轻的夸克。它与上夸克配对形成质子和中子。在原子核外，自由中子会衰变成质子，涉及下夸克变为上夸克的过程。",
        lifetime: "稳定 (在原子核中)",
        forces: "强力, 电磁力, 弱力, 引力",
        relation: "质子(uud), 中子(udd)"
    },
    "charm": {
        name: "粲夸克 (Charm Quark)",
        type: "费米子 (夸克)",
        mass: "1.28 GeV/c²",
        charge: "+2/3 e",
        spin: "1/2",
        desc: "粲夸克是第二代夸克，比上夸克重得多。它的发现（J/ψ介子）引发了粒子物理学的“十一月革命”，确立了夸克模型。",
        lifetime: "1.1 × 10⁻¹² s",
        forces: "强力, 电磁力, 弱力, 引力",
        relation: "D介子, J/ψ介子"
    },
    "strange": {
        name: "奇夸克 (Strange Quark)",
        type: "费米子 (夸克)",
        mass: "96 MeV/c²",
        charge: "-1/3 e",
        spin: "1/2",
        desc: "奇夸克存在于K介子等粒子中。它最早被发现于宇宙射线中，因其产生的粒子寿命异常长（“奇异”）而得名。",
        lifetime: "1.2 × 10⁻⁸ s",
        forces: "强力, 电磁力, 弱力, 引力",
        relation: "K介子, Λ重子"
    },
    "top": {
        name: "顶夸克 (Top Quark)",
        type: "费米子 (夸克)",
        mass: "173.1 GeV/c²",
        charge: "+2/3 e",
        spin: "1/2",
        desc: "顶夸克是已知最重的基本粒子，其质量与金原子相当。由于寿命极短，它在强子化之前就会衰变，这为研究裸夸克性质提供了独特机会。",
        lifetime: "5 × 10⁻²⁵ s",
        forces: "强力, 电磁力, 弱力, 引力",
        relation: "不形成强子 (直接衰变)"
    },
    "bottom": {
        name: "底夸克 (Bottom Quark)",
        type: "费米子 (夸克)",
        mass: "4.18 GeV/c²",
        charge: "-1/3 e",
        spin: "1/2",
        desc: "底夸克（或美夸克）属于第三代夸克。底夸克的衰变是研究CP破坏（物质与反物质不对称性）的重要途径。",
        lifetime: "1.5 × 10⁻¹² s",
        forces: "强力, 电磁力, 弱力, 引力",
        relation: "B介子"
    },
    "electron": {
        name: "电子 (Electron)",
        type: "费米子 (轻子)",
        mass: "0.511 MeV/c²",
        charge: "-1 e",
        spin: "1/2",
        desc: "电子是带负电的稳定基本粒子，围绕原子核运动形成原子。它是电流的载体，也是化学反应的主角。",
        lifetime: "稳定 (> 6.6×10²⁸ 年)",
        forces: "电磁力, 弱力, 引力",
        relation: "原子壳层"
    },
    "muon": {
        name: "μ子 (Muon)",
        type: "费米子 (轻子)",
        mass: "105.7 MeV/c²",
        charge: "-1 e",
        spin: "1/2",
        desc: "μ子就像是更重的电子（约重200倍）。它不稳定，主要存在于宇宙射线中，能穿透地球深处。",
        lifetime: "2.2 × 10⁻⁶ s",
        forces: "电磁力, 弱力, 引力",
        relation: "衰变为电子+中微子"
    },
    "tau": {
        name: "τ子 (Tau)",
        type: "费米子 (轻子)",
        mass: "1.777 GeV/c²",
        charge: "-1 e",
        spin: "1/2",
        desc: "τ子是最重的轻子，比质子还重。它是唯一能衰变成强子（如π介子）的轻子。",
        lifetime: "2.9 × 10⁻¹³ s",
        forces: "电磁力, 弱力, 引力",
        relation: "衰变为强子/轻子"
    },
    "electron-neutrino": {
        name: "电子中微子 (Electron Neutrino)",
        type: "费米子 (轻子)",
        mass: "< 1 eV/c²",
        charge: "0",
        spin: "1/2",
        desc: "电子中微子是电中性的，几乎不与物质相互作用。每秒钟有数万亿个来自太阳的中微子穿过你的身体。",
        lifetime: "未知 (中微子振荡)",
        forces: "弱力, 引力",
        relation: "β衰变产物"
    },
    "muon-neutrino": {
        name: "μ中微子 (Muon Neutrino)",
        type: "费米子 (轻子)",
        mass: "< 0.17 MeV/c²",
        charge: "0",
        spin: "1/2",
        desc: "μ中微子与μ子相关联。1962年被发现，证明了中微子不止一种，导致了“两中微子实验”的诺贝尔奖。",
        lifetime: "未知 (中微子振荡)",
        forces: "弱力, 引力",
        relation: "π介子衰变产物"
    },
    "tau-neutrino": {
        name: "τ中微子 (Tau Neutrino)",
        type: "费米子 (轻子)",
        mass: "< 18.2 MeV/c²",
        charge: "0",
        spin: "1/2",
        desc: "τ中微子是最后被发现的轻子（2000年）。它与τ子相关联，标志着标准模型费米子家族的完整。",
        lifetime: "未知 (中微子振荡)",
        forces: "弱力, 引力",
        relation: "τ子衰变产物"
    },
    "gluon": {
        name: "胶子 (Gluon)",
        type: "玻色子 (规范)",
        mass: "0",
        charge: "0",
        spin: "1",
        desc: "胶子是强相互作用的传递者，负责将夸克“胶”在一起形成质子和中子。胶子本身也带有色荷，因此胶子之间也能相互作用。",
        lifetime: "稳定 (色禁闭)",
        forces: "强力 (传递者)",
        relation: "结合夸克"
    },
    "photon": {
        name: "光子 (Photon)",
        type: "玻色子 (规范)",
        mass: "0",
        charge: "0",
        spin: "1",
        desc: "光子是电磁相互作用的载体，也是光的量子。它没有质量，以光速运动，负责原子内部电子与原子核的束缚。",
        lifetime: "稳定",
        forces: "电磁力 (传递者)",
        relation: "电磁波, 光"
    },
    "z-boson": {
        name: "Z玻色子 (Z Boson)",
        type: "玻色子 (规范)",
        mass: "91.2 GeV/c²",
        charge: "0",
        spin: "1",
        desc: "Z玻色子是弱相互作用的中性载体。它的发现证实了电弱统一理论（杨-米尔斯理论的应用）。",
        lifetime: "3 × 10⁻²⁵ s",
        forces: "弱力 (传递者)",
        relation: "中性流相互作用"
    },
    "w-boson": {
        name: "W玻色子 (W Boson)",
        type: "玻色子 (规范)",
        mass: "80.4 GeV/c²",
        charge: "±1 e",
        spin: "1",
        desc: "W玻色子带电荷，负责弱相互作用中的带电流过程，如β衰变（中子变为质子）。",
        lifetime: "3 × 10⁻²⁵ s",
        forces: "弱力 (传递者)",
        relation: "β衰变, 核聚变"
    },
    "higgs": {
        name: "希格斯玻色子 (Higgs Boson)",
        type: "玻色子 (标量)",
        mass: "125.1 GeV/c²",
        charge: "0",
        spin: "0",
        desc: "希格斯玻色子是“上帝粒子”，是希格斯场的量子激发。基本粒子通过与希格斯场相互作用获得质量。",
        lifetime: "1.56 × 10⁻²² s",
        forces: "与所有有质量粒子作用",
        relation: "赋予质量"
    }
};

// Modal Logic
// Initialize Modal Logic when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('particle-modal');
    const closeBtn = document.querySelector('.close-btn');
    const cards = document.querySelectorAll('.particle-card');

    // Modal Elements
    const mSymbol = document.querySelector('.modal-symbol');
    const mName = document.querySelector('.modal-name');
    const mType = document.querySelector('.modal-type');
    const mDesc = document.querySelector('.modal-desc');
    const mMass = document.querySelector('.modal-mass');
    const mCharge = document.querySelector('.modal-charge');
    const mSpin = document.querySelector('.modal-spin');
    const mLifetime = document.querySelector('.modal-lifetime');
    const mForces = document.querySelector('.modal-forces');
    const mRelation = document.querySelector('.modal-relation');

    if (!modal || !closeBtn) {
        console.error('Modal elements not found');
        return;
    }

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-id');
            const data = particlesData[id];

            if (data) {
                // Populate modal
                if (mSymbol) mSymbol.innerHTML = card.querySelector('.symbol').innerHTML;
                if (mName) mName.textContent = data.name;
                if (mType) mType.textContent = `${data.type} | ${data.generation ? data.generation + ' Generation' : ''}`;
                if (mDesc) mDesc.textContent = data.desc;

                if (mMass) mMass.textContent = data.mass;
                if (mCharge) mCharge.textContent = data.charge;
                if (mSpin) mSpin.textContent = data.spin;

                // Add Decay Info to Modal
                const decayContainer = document.getElementById('modal-decay-container');
                if (decayContainer) {
                    const decayText = card.querySelector('.decay') ? card.querySelector('.decay').textContent : '未知';
                    const isStable = card.classList.contains('stable');

                    decayContainer.innerHTML = `
                        <div class="stat-box" style="grid-column: span 3; margin-top: 1rem; background: ${isStable ? 'rgba(76, 175, 80, 0.1)' : 'rgba(255, 152, 0, 0.1)'}; border: 1px solid ${isStable ? 'rgba(76, 175, 80, 0.3)' : 'rgba(255, 152, 0, 0.3)'};">
                            <span class="label" style="color: ${isStable ? '#81c784' : '#ffb74d'};">衰变模式 / 寿命</span>
                            <div class="value" style="font-family: 'Times New Roman', serif; font-size: 1.1rem; color: ${isStable ? '#a5d6a7' : '#ffcc80'};">
                                ${decayText}
                            </div>
                        </div>
                    `;
                }

                if (mLifetime) mLifetime.textContent = data.lifetime;
                if (mForces) mForces.textContent = data.forces;
                if (mRelation) mRelation.textContent = data.relation;

                // Color coding for modal symbol background
                if (mSymbol) {
                    mSymbol.className = 'modal-symbol'; // reset
                    if (card.classList.contains('quark')) mSymbol.style.color = 'var(--quark-color)';
                    if (card.classList.contains('lepton')) mSymbol.style.color = 'var(--lepton-color)';
                    if (card.classList.contains('boson')) mSymbol.style.color = 'var(--boson-color)';
                    if (card.classList.contains('scalar')) mSymbol.style.color = 'var(--scalar-color)';
                }

                modal.classList.remove('hidden');
                modal.classList.add('active');
            } else {
                console.warn('No data found for particle:', id);
            }
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        setTimeout(() => modal.classList.add('hidden'), 300);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            setTimeout(() => modal.classList.add('hidden'), 300);
        }
    });
});



// Yang Chen-Ning Tribute Modal Logic
const yangBtn = document.getElementById('yang-btn');
const yangModal = document.getElementById('yang-modal');
const yangClose = document.querySelector('.yang-close');

if (yangBtn && yangModal) {
    yangBtn.addEventListener('click', () => {
        yangModal.classList.add('active');
    });

    yangClose.addEventListener('click', () => {
        yangModal.classList.remove('active');
    });

    yangModal.addEventListener('click', (e) => {
        if (e.target === yangModal) {
            yangModal.classList.remove('active');
        }
    });
}

// Background Animation
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}

class Particle {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2;
        this.alpha = Math.random() * 0.5 + 0.1;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
    }

    draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    const numParticles = Math.floor((width * height) / 15000);
    for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
        p.update();
        p.draw();
    });

    // Draw connections
    particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach(p2 => {
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 100) {
                ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - dist / 100)})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }
        });
    });

    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    resize();
    initParticles();
});

resize();
initParticles();
animate();

// --- Navigation Logic ---
const navBtns = document.querySelectorAll('.nav-btn');
const viewSections = document.querySelectorAll('.view-section');

// --- Navigation Logic (Updated) ---
// --- State Management ---
let currentView = 'home';
let animationFrameIds = []; // Track all animation frames

function stopAllAnimations() {
    animationFrameIds.forEach(id => cancelAnimationFrame(id));
    animationFrameIds = [];
}

// Helper to safely request animation
function safeRequestAnimationFrame(callback) {
    const id = requestAnimationFrame((time) => {
        callback(time);
    });
    animationFrameIds.push(id);
    return id;
}

function switchView(viewId) {
    stopAllAnimations(); // Stop all previous animations
    currentView = viewId;

    // Hide/show navigation based on view
    const nav = document.getElementById('main-nav');
    if (viewId === 'home') {
        nav.classList.add('hidden');
    } else {
        nav.classList.remove('hidden');
    }

    // Update Nav buttons
    document.querySelectorAll('.main-nav button').forEach(btn => {
        btn.classList.remove('active');
    });

    // Set active button by onclick attribute
    document.querySelectorAll('.main-nav button').forEach(btn => {
        const onclick = btn.getAttribute('onclick');
        if (onclick && onclick.includes(`'${viewId}'`)) {
            btn.classList.add('active');
        }
    });

    // Update Views
    document.querySelectorAll('.view-section').forEach(section => {
        section.classList.remove('active');
    });

    // Map viewId to DOM ID and Render Function
    let sectionId = '';
    let renderFn = null;

    switch (viewId) {
        case 'home': sectionId = 'view-home'; renderFn = renderHomeTriangle; break;
        case 'tribute': sectionId = 'view-tribute'; renderFn = renderTribute; break;
        case 'grid': sectionId = 'view-matter-grid'; break; // Static
        case 'structure': sectionId = 'view-matter-structure'; renderFn = renderStructure; break;
        case 'higgs': sectionId = 'view-matter-higgs'; renderFn = renderHiggs; break;
        case 'em': sectionId = 'view-matter-em'; renderFn = renderEM; break;

        case 'strong': sectionId = 'view-energy-strong'; renderFn = renderStrongForce; break;
        case 'weak': sectionId = 'view-energy-weak'; renderFn = renderWeakForce; break;
        case 'gravity': sectionId = 'view-energy-gravity'; renderFn = renderGravity; break;
        case 'forces': sectionId = 'view-energy-forces'; renderFn = renderForcesWeb; break;

        case 'symmetry': sectionId = 'view-info-symmetry'; renderFn = renderSymmetry; break;
        case 'group': sectionId = 'view-info-group'; renderFn = renderGroupTheory; break;
        case 'symmetry-breaking': sectionId = 'view-symmetry-breaking'; renderFn = renderSymmetryBreaking; break;
        case 'spacetime': sectionId = 'view-info-spacetime'; renderFn = renderSpacetime; break;
    }

    if (sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.classList.add('active');
            if (renderFn) setTimeout(renderFn, 50); // Small delay to ensure DOM is ready
        }
    }
}

// Event Delegation for Buttons
document.addEventListener('click', (e) => {
    // View switching
    if (e.target.hasAttribute('data-view')) {
        const viewId = e.target.getAttribute('data-view');
        switchView(viewId);
    }

    // Structure building actions
    if (e.target.hasAttribute('data-action')) {
        const action = e.target.dataset.action;
        if (action === 'make-proton') renderStructure('proton');
        else if (action === 'make-neutron') renderStructure('neutron');
        else if (action === 'make-nucleus') renderStructure('nucleus');
        else if (action === 'make-atom') renderStructure('atom');
        else if (action === 'make-earth') renderStructure('earth');
    }
});

// Initialize Home
switchView('home'); // Changed from direct call to renderHomeTriangle

// --- Home View: The Grand Triangle ---
// --- Home View: The Grand Triangle (RGB Venn Diagram) ---
function renderHomeTriangle() {
    const stage = document.getElementById('home-triangle-stage');
    // Guard removed

    stage.innerHTML = '';
    const width = 600;
    const height = 500;

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    svg.style.overflow = "visible";

    // Centers for the 3 circles
    const cx = width / 2;
    const cy = height / 2 + 20;
    const r = 120; // Radius
    const offset = 100;

    const nodes = [
        {
            id: 'grid',
            x: cx, y: cy - offset,
            color: '#ff0000',
            label: '物质 (Matter)',
            sub: '粒子 / 场',
            desc: 'Particles & Fields'
        },
        {
            id: 'forces',
            x: cx - offset * 0.866, y: cy + offset * 0.5,
            color: '#00ff00',
            label: '能量 (Energy)',
            sub: '力 / 空间',
            desc: 'Forces & Space'
        },
        {
            id: 'symmetry',
            x: cx + offset * 0.866, y: cy + offset * 0.5,
            color: '#0000ff',
            label: '信息 (Info)',
            sub: '对称 / 熵 / 时间',
            desc: 'Symmetry & Time'
        }
    ];

    // Draw Circles (Mix Blend Mode for Venn effect)
    nodes.forEach(node => {
        const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
        g.style.cursor = "pointer";
        g.addEventListener('click', () => switchView(node.id));

        // Circle
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", node.x);
        circle.setAttribute("cy", node.y);
        circle.setAttribute("r", r);
        circle.setAttribute("fill", node.color);
        circle.style.mixBlendMode = "screen"; // RGB additive mixing
        circle.setAttribute("opacity", "0.6");

        // Hover effect
        g.addEventListener('mouseenter', () => {
            circle.setAttribute("opacity", "0.9");
            circle.setAttribute("r", r + 10);
        });
        g.addEventListener('mouseleave', () => {
            circle.setAttribute("opacity", "0.6");
            circle.setAttribute("r", r);
        });

        // Label
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", node.x);
        text.setAttribute("y", node.y - 20);
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("fill", "#fff");
        text.setAttribute("font-size", "24");
        text.setAttribute("font-weight", "bold");
        text.style.textShadow = "0 2px 4px rgba(0,0,0,0.8)";
        text.textContent = node.label;

        // Sub-label
        const sub = document.createElementNS("http://www.w3.org/2000/svg", "text");
        sub.setAttribute("x", node.x);
        sub.setAttribute("y", node.y + 10);
        sub.setAttribute("text-anchor", "middle");
        sub.setAttribute("fill", "#fff");
        sub.setAttribute("font-size", "14");
        sub.style.textShadow = "0 2px 4px rgba(0,0,0,0.8)";
        sub.textContent = node.sub;

        // Desc
        const desc = document.createElementNS("http://www.w3.org/2000/svg", "text");
        desc.setAttribute("x", node.x);
        desc.setAttribute("y", node.y + 30);
        desc.setAttribute("text-anchor", "middle");
        desc.setAttribute("fill", "rgba(255,255,255,0.8)");
        desc.setAttribute("font-size", "12");
        desc.style.textShadow = "0 2px 4px rgba(0,0,0,0.8)";
        desc.textContent = node.desc;

        g.appendChild(circle);
        g.appendChild(text);
        g.appendChild(sub);
        g.appendChild(desc);
        svg.appendChild(g);
    });

    // Central Text
    const centerText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    centerText.setAttribute("x", cx);
    centerText.setAttribute("y", cy + 10);
    centerText.setAttribute("text-anchor", "middle");
    centerText.setAttribute("fill", "#fff");
    centerText.setAttribute("font-size", "16");
    centerText.setAttribute("font-weight", "bold");
    centerText.style.textShadow = "0 2px 4px rgba(0,0,0,1)";
    centerText.textContent = "大统一理论?";
    svg.appendChild(centerText);

    stage.appendChild(svg);
}

// --- Weak Force View Logic (B2FH) ---
function renderWeakForce() {
    const stage = document.getElementById('weak-stage');
    stage.innerHTML = '';
    stage.style.cssText = 'display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 2rem; width: 100%; height: 100%;';

    const title = document.createElement('h3');
    title.innerHTML = '弱力：宇宙的炼金术士 (Alchemy)';
    title.style.marginBottom = '1rem';
    stage.appendChild(title);

    const container = document.createElement('div');
    container.style.cssText = 'position: relative; width: 400px; height: 300px; display: flex; justify-content: center; align-items: center;';

    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 300;
    container.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    // State
    let nucleus = { x: 200, y: 150, protons: 26, neutrons: 30, label: 'Fe (铁)', color: '#ff6b6b', scale: 1 };
    let neutron = { x: 50, y: 150, active: true };
    let step = 0; // 0: Moving, 1: Absorbed, 2: Decay to Co, 3: Co displayed, 4: Decay to Cu, 5: Cu displayed
    let timer = 0;

    function animateAlchemy() {
        if (currentView !== 'weak') return;
        if (!document.body.contains(canvas)) return;
        ctx.clearRect(0, 0, 400, 300);

        // Draw Nucleus
        ctx.beginPath();
        ctx.arc(nucleus.x, nucleus.y, 40 * nucleus.scale, 0, Math.PI * 2);
        ctx.fillStyle = nucleus.color;
        ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(nucleus.label, nucleus.x, nucleus.y);
        ctx.font = '12px Arial';
        ctx.fillText(`p:${nucleus.protons} n:${nucleus.neutrons}`, nucleus.x, nucleus.y + 20);

        // Animation Logic
        if (step === 0) {
            // Neutron moving towards nucleus
            neutron.x += 2;
            ctx.beginPath();
            ctx.arc(neutron.x, neutron.y, 8, 0, Math.PI * 2);
            ctx.fillStyle = '#888';
            ctx.fill();
            ctx.fillStyle = '#fff';
            ctx.fillText('n', neutron.x, neutron.y + 4);

            if (neutron.x >= nucleus.x - 30) {
                step = 1;
                nucleus.neutrons++;
                nucleus.scale = 1.1;
                timer = 0;
            }
        } else if (step === 1) {
            // Absorbed (Unstable)
            timer++;
            ctx.fillStyle = '#fff';
            ctx.fillText('中子俘获 (Capture)', 200, 80);
            if (timer > 30) {
                step = 2;
                timer = 0;
            }
        } else if (step === 2) {
            // Weak Decay to Co (Flash)
            timer++;
            ctx.fillStyle = `rgba(76, 205, 196, ${Math.sin(timer * 0.5)})`;
            ctx.beginPath();
            ctx.arc(nucleus.x, nucleus.y, 50, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#4ecdc4';
            ctx.fillText('弱力变身 (Weak Decay)', 200, 80);
            ctx.fillText('n → p + e + v', 200, 100);

            if (timer > 60) {
                step = 3;
                nucleus.neutrons--;
                nucleus.protons++;
                nucleus.label = 'Co (钴)';
                nucleus.color = '#4ecdc4';
                nucleus.scale = 1.0;
                timer = 0;
            }
        } else if (step === 3) {
            // Co displayed
            timer++;
            ctx.fillStyle = '#fff';
            ctx.fillText('新元素：钴 (Co)', 200, 80);

            if (timer > 60) {
                step = 4; // Start next decay
                nucleus.scale = 1.1;
                timer = 0;
            }
        } else if (step === 4) {
            // Second Decay to Cu (Flash)
            timer++;
            ctx.fillStyle = `rgba(245, 158, 11, ${Math.sin(timer * 0.5)})`;
            ctx.beginPath();
            ctx.arc(nucleus.x, nucleus.y, 50, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#f59e0b';
            ctx.fillText('再次变身！', 200, 80);
            ctx.fillText('n → p + e + v', 200, 100);

            if (timer > 60) {
                step = 5;
                nucleus.neutrons--;
                nucleus.protons++;
                nucleus.label = 'Cu (铜)';
                nucleus.color = '#f59e0b';
                nucleus.scale = 1.0;
                timer = 0;
            }
        } else if (step === 5) {
            // Cu displayed
            timer++;
            ctx.fillStyle = '#fff';
            ctx.fillText('新元素：铜 (Cu)', 200, 80);

            if (timer > 60) {
                // Reset to Fe
                step = 0;
                neutron.x = 50;
                nucleus.label = 'Fe (铁)';
                nucleus.protons = 26;
                nucleus.neutrons = 30;
                nucleus.color = '#ff6b6b';
            }
        }

        safeRequestAnimationFrame(animateAlchemy);
    }
    safeRequestAnimationFrame(animateAlchemy);

    stage.appendChild(container);

    const desc = document.createElement('div');
    desc.innerHTML = `
        <p style="margin-bottom: 1rem;"><strong>过程解析：</strong></p>
        <ol style="text-align:left; font-size:0.9rem; color:rgba(255,255,255,0.8); line-height: 2; padding-left: 1.5rem;">
            <li style="margin-bottom: 0.8rem;"><strong>吃掉中子 (Capture)</strong>: 原子核俘获一个中子，变得不稳定。</li>
            <li style="margin-bottom: 0.8rem;"><strong>弱力变身 (Decay)</strong>: 弱力将中子变为质子 (n→p)，原子序数+1。</li>
            <li style="margin-bottom: 0.8rem;"><strong>元素进化</strong>: 铁(Fe) → 钴(Co) → 铜(Cu)... 宇宙重元素由此诞生。</li>
        </ol>
    `;
    stage.appendChild(desc);
}

function createOriginCard(title, elements, desc, color) {
    const card = document.createElement('div');
    card.style.cssText = `
        background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 12px;
        border-left: 4px solid ${color}; width: 250px;
        display: flex; flex-direction: column; gap: 0.5rem;
        transition: transform 0.3s;
    `;
    card.innerHTML = `
        <h3 style="color:${color}; margin:0;">${title}</h3>
        <div style="font-weight:bold; font-size:1.1rem;">${elements}</div>
        <div style="font-size:0.9rem; opacity:0.8;">${desc}</div>
    `;
    card.addEventListener('mouseenter', () => card.style.transform = 'translateY(-5px)');
    card.addEventListener('mouseleave', () => card.style.transform = 'translateY(0)');
    return card;
}

// --- Tribute View (Yang Zhenning) ---
function renderTribute() {
    const stage = document.getElementById('view-tribute');
    stage.innerHTML = '';
    // Remove inline styles that conflict with CSS container
    stage.style.cssText = 'width: 100%; height: 100%;';

    // Main container - use consistent max-width
    const container = document.createElement('div');
    container.style.cssText = 'width: 100%; margin: 0 auto;';

    // ===== YANG ZHENNING TRIBUTE SECTION =====
    const tributeSection = document.createElement('div');
    tributeSection.style.cssText = `
        width: 100%;
        background: linear-gradient(180deg, rgba(255, 193, 7, 0.05) 0%, transparent 100%);
        border-radius: 16px;
        padding: 2rem;
        position: relative;
        overflow: hidden;
        border: 1px solid rgba(255, 193, 7, 0.1);
    `;

    // Background texture (gauge field formula)
    const bgTexture = document.createElement('div');
    bgTexture.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.03;
        font-size: 0.8rem;
        color: #ffc107;
        pointer-events: none;
        white-space: pre;
        font-family: monospace;
        padding: 1rem;
    `;
    bgTexture.textContent = 'Fμν = ∂μAν - ∂νAμ + g[Aμ,Aν]    Yang-Mills Field Strength    规范场论    ';
    tributeSection.appendChild(bgTexture);

    // Header
    const header = document.createElement('div');
    header.style.cssText = 'text-align: center; margin-bottom: 3rem; position: relative; z-index: 1;';
    header.innerHTML = `
        <div style="font-size: 0.75rem; color: #ffc107; letter-spacing: 2px; margin-bottom: 0.5rem; opacity: 0.8;">
            THE ARCHITECT OF MODERN PHYSICS
        </div>
        <h1 style="font-size: 2.8rem; color: #ffc107; margin: 1rem 0; text-shadow: 0 0 20px rgba(255, 193, 7, 0.5); font-weight: 700; letter-spacing: 2px;">
            杨振宁
        </h1>
        <h2 style="font-size: 1.6rem; color: #ffc107; margin: 0.8rem 0; text-shadow: 0 0 20px rgba(255, 193, 7, 0.5); font-weight: 400;">
            物理学底层框架的"立法者"
        </h2>
        <p style="font-size: 1rem; color: #b0bec5; margin: 1rem 0; line-height: 1.8;">
            以"立德、立功、立言"丈量杨振宁
        </p>
        <div style="width: 200px; height: 2px; margin: 1.5rem auto; background: linear-gradient(90deg, transparent, #ffc107, transparent);"></div>
    `;
    tributeSection.appendChild(header);

    // Three cards grid
    const cardsGrid = document.createElement('div');
    cardsGrid.style.cssText = `
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        position: relative;
        z-index: 1;
    `;

    const cards = [
        {
            title: '立言',
            subtitle: 'Li Yan',
            heading: '为造物主制定"语法"',
            icon: '🔷',
            content: '杨振宁提出的<strong>规范场论 (Yang-Mills)</strong> 是现代物理学的"大宪章"。他颠覆了认知，指出"对称性支配相互作用"。从此，强力、弱力与电磁力被统一在同一套几何语言之下。这是物理学真正的底层代码。',
            color: '#00bcd4', // Cyan
            glow: 'rgba(0, 188, 212, 0.4)'
        },
        {
            title: '立功',
            subtitle: 'Li Gong',
            heading: '为大国科学"校准航向"',
            icon: '🧭',
            content: '从破冰中美交流，到创建清华高研院；从引进图灵奖得主，到理性叫停千亿对撞机。他不仅是象牙塔里的大师，更是国家科学战略的"掌舵人"，为中国基础科学的资源配置按下了关键的"止损键"与"加速键"。',
            color: '#ef5350', // Red
            glow: 'rgba(239, 83, 80, 0.4)'
        },
        {
            title: '立德',
            subtitle: 'Li De',
            heading: '为后学垂范"科学品味"',
            icon: '🕯️',
            content: '他重塑了中华民族的智力自信，打破了"不如人"的心魔。他一生反对学术投机，坚持<strong>"Taste（品味）"</strong>至上。即使在百岁之年，仍坚持亲自为本科生授课，以身教将这种宁拙毋巧的科学风骨渗透给下一代。',
            color: '#26a69a', // Teal
            glow: 'rgba(38, 166, 154, 0.4)'
        }
    ];

    cards.forEach(card => {
        const cardEl = document.createElement('div');
        cardEl.className = 'tribute-card';
        cardEl.style.cssText = `
            background: rgba(20, 20, 30, 0.6);
            backdrop-filter: blur(10px);
            border: 1px solid ${card.color}40;
            border-radius: 12px;
            padding: 2rem;
            transition: all 0.3s ease;
            cursor: default;
            box-shadow: 0 4px 20px ${card.glow}20;
        `;

        cardEl.innerHTML = `
            <div style="text-align: center; margin-bottom: 2rem;">
                <div style="font-size: 3rem; margin-bottom: 0.8rem;">${card.icon}</div>
                <div style="font-size: 0.75rem; color: ${card.color}; letter-spacing: 1px; text-transform: uppercase; opacity: 0.8; margin-bottom: 0.5rem;">
                    ${card.subtitle}
                </div>
                <h3 style="font-size: 1.5rem; color: ${card.color}; margin: 0.5rem 0; text-shadow: 0 0 10px ${card.glow};">
                    ${card.title}
                </h3>
            </div>
            <h4 style="font-size: 1.1rem; color: #fff; margin: 0 0 1rem 0; font-weight: 600; line-height: 1.5;">
                ${card.heading}
            </h4>
            <p style="font-size: 0.9rem; line-height: 1.9; color: #cfd8dc; text-align: left;">
                ${card.content}
            </p>
        `;

        // Hover effect
        cardEl.addEventListener('mouseenter', () => {
            cardEl.style.transform = 'translateY(-8px)';
            cardEl.style.borderColor = `${card.color}80`;
            cardEl.style.boxShadow = `0 12px 40px ${card.glow}`;
        });
        cardEl.addEventListener('mouseleave', () => {
            cardEl.style.transform = 'translateY(0)';
            cardEl.style.borderColor = `${card.color}40`;
            cardEl.style.boxShadow = `0 4px 20px ${card.glow}20`;
        });

        cardsGrid.appendChild(cardEl);
    });

    tributeSection.appendChild(cardsGrid);
    container.appendChild(tributeSection);
    stage.appendChild(container);
}

// --- Group Theory View Logic ---
function renderGroupTheory() {
    const stage = document.getElementById('view-info-group');
    stage.innerHTML = '';
    // Standardize layout - ensure it fits within the global container
    stage.style.cssText = 'width: 100%; height: 100%; overflow-y: auto;';

    const title = document.createElement('h2');
    title.textContent = '规范群与杨-米尔斯场';
    title.style.cssText = 'text-align: center; margin-bottom: 0.5rem; font-size: 1.8rem; background: linear-gradient(to right, #fff, #a5b4fc); -webkit-background-clip: text; -webkit-text-fill-color: transparent;';
    stage.appendChild(title);

    const subtitle = document.createElement('p');
    subtitle.textContent = '从圆到球：局部规范对称性如何产生力场';
    subtitle.style.cssText = 'text-align: center; color: rgba(255,255,255,0.7); margin-bottom: 1rem; font-size: 0.9rem;';
    stage.appendChild(subtitle);

    // 1. Fiber Bundle Visualization (Compressed)
    const bundleContainer = document.createElement('div');
    bundleContainer.style.cssText = 'position: relative; width: 100%; height: 280px; background: rgba(0,0,0,0.2); border-radius: 12px; margin-bottom: 1rem; overflow: hidden; border: 1px solid rgba(255,255,255,0.05);';
    stage.appendChild(bundleContainer);

    const bundleCanvas = document.createElement('canvas');
    bundleCanvas.width = bundleContainer.clientWidth;
    bundleCanvas.height = 280;
    bundleContainer.appendChild(bundleCanvas);
    const bundleCtx = bundleCanvas.getContext('2d');

    // Animation for fiber bundle
    function animateFiberBundle() {
        if (!document.body.contains(bundleCanvas)) return;

        const time = Date.now() / 1000;
        bundleCtx.clearRect(0, 0, bundleCanvas.width, 280);

        // Spacetime baseline (horizontal axis) - ADJUSTED Y
        bundleCtx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        bundleCtx.lineWidth = 2;
        bundleCtx.beginPath();
        bundleCtx.moveTo(100, 240);
        bundleCtx.lineTo(bundleCanvas.width - 100, 240);
        bundleCtx.stroke();

        // Timeline label
        bundleCtx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        bundleCtx.font = '14px Arial';
        bundleCtx.fillText('时空 (Spacetime)', bundleCanvas.width / 2 - 50, 260);

        // Three fiber attachment points
        const fiberPoints = [
            { x: bundleCanvas.width * 0.25, label: 'U(1)', color: '#fcd34d', type: 'circle' },
            { x: bundleCanvas.width * 0.5, label: 'SU(2)', color: '#4ecdc4', type: 'sphere' },
            { x: bundleCanvas.width * 0.75, label: 'SU(3)', color: '#ff6b6b', type: 'complex' }
        ];

        fiberPoints.forEach((point, idx) => {
            // Vertical stem connecting spacetime to internal space (SHORTENED)
            bundleCtx.strokeStyle = `${point.color}60`;
            bundleCtx.lineWidth = 3;
            bundleCtx.setLineDash([5, 5]);
            bundleCtx.beginPath();
            bundleCtx.moveTo(point.x, 240);
            bundleCtx.lineTo(point.x, 110);
            bundleCtx.stroke();
            bundleCtx.setLineDash([]);

            // Point on spacetime
            bundleCtx.fillStyle = point.color;
            bundleCtx.beginPath();
            bundleCtx.arc(point.x, 240, 6, 0, Math.PI * 2);
            bundleCtx.fill();

            // Ghost copy visualization (local transformation)
            bundleCtx.save();
            bundleCtx.translate(point.x, 110);

            const ghostOffset = 20; // Offset for the ghost copy
            const ghostAlpha = 0.2 + Math.sin(time * 3 + idx) * 0.1; // Pulsating alpha

            if (point.type === 'circle') {
                // U(1) ghost copy
                bundleCtx.beginPath();
                bundleCtx.arc(ghostOffset, 0, 40, 0, Math.PI * 2);
                bundleCtx.strokeStyle = `rgba(255, 255, 255, ${ghostAlpha})`;
                bundleCtx.lineWidth = 1.5;
                bundleCtx.stroke();
            } else if (point.type === 'sphere') {
                // SU(2) ghost copy
                const r = 40;
                bundleCtx.beginPath();
                bundleCtx.arc(ghostOffset, 0, r, 0, Math.PI * 2);
                bundleCtx.strokeStyle = `rgba(255, 255, 255, ${ghostAlpha})`;
                bundleCtx.lineWidth = 1.5;
                bundleCtx.stroke();
            } else {
                // SU(3) ghost copy (simplified)
                const colors = ['#ff6b6b', '#34d399', '#60a5fa'];
                for (let i = 0; i < 3; i++) {
                    bundleCtx.save();
                    bundleCtx.translate(ghostOffset, 0);
                    bundleCtx.rotate(i * Math.PI / 3);
                    bundleCtx.beginPath();
                    bundleCtx.ellipse(0, 0, 40, 20, 0, 0, Math.PI * 2);
                    bundleCtx.strokeStyle = `rgba(255, 255, 255, ${ghostAlpha * 0.5})`;
                    bundleCtx.lineWidth = 1;
                    bundleCtx.stroke();
                    bundleCtx.restore();
                }
            }
            bundleCtx.restore();


            // Internal space geometry at top
            bundleCtx.save();
            bundleCtx.translate(point.x, 110);

            if (point.type === 'circle') {
                // U(1) - Circle with rotating arrow (SMALLER)
                bundleCtx.beginPath();
                bundleCtx.arc(0, 0, 40, 0, Math.PI * 2);
                bundleCtx.strokeStyle = point.color;
                bundleCtx.lineWidth = 2.5;
                bundleCtx.stroke();

                // Rotating arrow/phase
                const angle = time + idx;
                const arrowX = Math.cos(angle) * 40;
                const arrowY = Math.sin(angle) * 40;
                bundleCtx.beginPath();
                bundleCtx.moveTo(0, 0);
                bundleCtx.lineTo(arrowX, arrowY);
                bundleCtx.strokeStyle = point.color;
                bundleCtx.lineWidth = 2;
                bundleCtx.stroke();
                bundleCtx.beginPath();
                bundleCtx.arc(arrowX, arrowY, 4, 0, Math.PI * 2);
                bundleCtx.fillStyle = point.color;
                bundleCtx.fill();

            } else if (point.type === 'sphere') {
                // SU(2) - 3D Sphere with rotating rings AND rotation axes (SMALLER & SIMPLIFIED)
                const r = 40;

                // Main sphere outline
                bundleCtx.strokeStyle = point.color;
                bundleCtx.lineWidth = 2;
                bundleCtx.beginPath();
                bundleCtx.arc(0, 0, r, 0, Math.PI * 2);
                bundleCtx.stroke();

                // Rotating ellipse for 3D effect (DIMMED to not compete with orbit)
                bundleCtx.save();
                bundleCtx.rotate(time * 0.5);
                bundleCtx.beginPath();
                bundleCtx.ellipse(0, 0, r, r * 0.5, 0, 0, Math.PI * 2);
                bundleCtx.strokeStyle = `${point.color}40`;
                bundleCtx.stroke();
                bundleCtx.restore();

                // Enhanced rotation axes (T1, T2) - MORE VISIBLE
                // Axis 1 (horizontal) - Red/Pink
                bundleCtx.strokeStyle = '#ff6b9d';
                bundleCtx.lineWidth = 2;
                bundleCtx.setLineDash([4, 4]);
                bundleCtx.beginPath();
                bundleCtx.moveTo(-r - 8, 0);
                bundleCtx.lineTo(r + 8, 0);
                bundleCtx.stroke();
                bundleCtx.setLineDash([]);

                // T₁ label - MOVED RIGHT to avoid overlap
                bundleCtx.fillStyle = '#ff6b9d';
                bundleCtx.font = 'bold 10px Arial';
                bundleCtx.textAlign = 'left';
                bundleCtx.fillText('T₁', r + 12, 4);

                // Axis 2 (vertical) - Green
                bundleCtx.strokeStyle = '#60d394';
                bundleCtx.lineWidth = 2;
                bundleCtx.setLineDash([4, 4]);
                bundleCtx.beginPath();
                bundleCtx.moveTo(0, -r - 8);
                bundleCtx.lineTo(0, r + 8);
                bundleCtx.stroke();
                bundleCtx.setLineDash([]);

                // T₂ label - MOVED UP to avoid arrow
                bundleCtx.fillStyle = '#60d394';
                bundleCtx.font = 'bold 10px Arial';
                bundleCtx.textAlign = 'center';
                bundleCtx.fillText('T₂', -8, -r - 16);

                // Curved rotation arrow on vertical axis (LARGER & MORE VISIBLE)
                bundleCtx.strokeStyle = '#60d394';
                bundleCtx.lineWidth = 2;
                bundleCtx.beginPath();
                bundleCtx.arc(0, -r - 8, 8, Math.PI * 0.6, Math.PI * 1.9);
                bundleCtx.stroke();

                // Arrow head (larger)
                bundleCtx.beginPath();
                bundleCtx.moveTo(-5, -r - 14);
                bundleCtx.lineTo(-2, -r - 10);
                bundleCtx.lineTo(-7, -r - 9);
                bundleCtx.closePath();
                bundleCtx.fillStyle = '#60d394';
                bundleCtx.fill();

                // NEW: Orbit path for doublet particles (ENHANCED - brighter and thicker)
                bundleCtx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
                bundleCtx.lineWidth = 2;
                bundleCtx.setLineDash([4, 4]);
                bundleCtx.beginPath();
                bundleCtx.ellipse(0, 0, r * 0.7, r * 0.35, 0, 0, Math.PI * 2);
                bundleCtx.stroke();
                bundleCtx.setLineDash([]);

                // NEW: Doublet particles (2 particles for SU(2)!) with GLOW
                // Particle 1 (white - represents one state, e.g., electron)
                const particle1Angle = time * 0.8;
                const p1x = Math.cos(particle1Angle) * r * 0.7;
                const p1y = Math.sin(particle1Angle) * r * 0.35;

                // Glow for particle 1
                const glow1 = bundleCtx.createRadialGradient(p1x, p1y, 0, p1x, p1y, 12);
                glow1.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
                glow1.addColorStop(0.5, 'rgba(255, 255, 255, 0.3)');
                glow1.addColorStop(1, 'rgba(255, 255, 255, 0)');
                bundleCtx.fillStyle = glow1;
                bundleCtx.beginPath();
                bundleCtx.arc(p1x, p1y, 12, 0, Math.PI * 2);
                bundleCtx.fill();

                // Core of particle 1
                bundleCtx.beginPath();
                bundleCtx.arc(p1x, p1y, 5, 0, Math.PI * 2);
                bundleCtx.fillStyle = '#ffffff';
                bundleCtx.fill();
                bundleCtx.strokeStyle = point.color;
                bundleCtx.lineWidth = 1.5;
                bundleCtx.stroke();

                // Particle 2 (cyan - represents other state, e.g., neutrino)
                // Opposite side of sphere
                const particle2Angle = particle1Angle + Math.PI;
                const p2x = Math.cos(particle2Angle) * r * 0.7;
                const p2y = Math.sin(particle2Angle) * r * 0.35;

                // Glow for particle 2
                const glow2 = bundleCtx.createRadialGradient(p2x, p2y, 0, p2x, p2y, 12);
                glow2.addColorStop(0, 'rgba(34, 211, 238, 0.8)');
                glow2.addColorStop(0.5, 'rgba(34, 211, 238, 0.3)');
                glow2.addColorStop(1, 'rgba(34, 211, 238, 0)');
                bundleCtx.fillStyle = glow2;
                bundleCtx.beginPath();
                bundleCtx.arc(p2x, p2y, 12, 0, Math.PI * 2);
                bundleCtx.fill();

                // Core of particle 2
                bundleCtx.beginPath();
                bundleCtx.arc(p2x, p2y, 5, 0, Math.PI * 2);
                bundleCtx.fillStyle = '#22d3ee';
                bundleCtx.fill();
                bundleCtx.strokeStyle = point.color;
                bundleCtx.lineWidth = 1.5;
                bundleCtx.stroke();

            } else {
                // SU(3) - Complex 3-orbital system
                const colors = ['#ff6b6b', '#34d399', '#60a5fa'];
                for (let i = 0; i < 3; i++) {
                    bundleCtx.save();
                    bundleCtx.rotate(i * Math.PI / 3);
                    bundleCtx.beginPath();
                    bundleCtx.ellipse(0, 0, 40, 20, 0, 0, Math.PI * 2);
                    bundleCtx.strokeStyle = colors[i] + '60';
                    bundleCtx.lineWidth = 2;
                    bundleCtx.stroke();

                    // Orbiting quark
                    const qAngle = time * (0.8 + i * 0.2);
                    const qx = Math.cos(qAngle) * 40;
                    const qy = Math.sin(qAngle) * 20;
                    bundleCtx.beginPath();
                    bundleCtx.arc(qx, qy, 6, 0, Math.PI * 2);
                    bundleCtx.fillStyle = colors[i];
                    bundleCtx.fill();
                    bundleCtx.restore();
                }
            }

            bundleCtx.restore();

            // NEW: Ghost copy showing adjacent spacetime point (same internal space!)
            // Only draw ghost if not the last point
            if (idx < fiberPoints.length) {
                bundleCtx.save();
                bundleCtx.translate(point.x + 80, 110); // Ghost offset to the right
                bundleCtx.globalAlpha = 0.25; // Very transparent

                // Draw same geometry type
                if (point.type === 'circle') {
                    bundleCtx.beginPath();
                    bundleCtx.arc(0, 0, 40, 0, Math.PI * 2);
                    bundleCtx.strokeStyle = point.color;
                    bundleCtx.lineWidth = 2;
                    bundleCtx.stroke();
                } else if (point.type === 'sphere') {
                    const r = 40;
                    bundleCtx.beginPath();
                    bundleCtx.arc(0, 0, r, 0, Math.PI * 2);
                    bundleCtx.strokeStyle = point.color;
                    bundleCtx.lineWidth = 2;
                    bundleCtx.stroke();
                } else {
                    // SU(3) simplified ghost
                    bundleCtx.beginPath();
                    bundleCtx.arc(0, 0, 35, 0, Math.PI * 2);
                    bundleCtx.strokeStyle = point.color;
                    bundleCtx.lineWidth = 2;
                    bundleCtx.stroke();
                }
                bundleCtx.globalAlpha = 1;
                bundleCtx.restore();

                // Gauge field connection (same type only!)
                const ghostX = point.x + 80;
                bundleCtx.strokeStyle = `rgba(251, 191, 36, ${0.5 + Math.sin(time * 3 + idx) * 0.2})`;
                bundleCtx.lineWidth = 2;
                bundleCtx.setLineDash([3, 3]);
                bundleCtx.beginPath();

                // Different patterns for different gauge theories!
                const segments = 15;
                for (let i = 0; i <= segments; i++) {
                    const progress = i / segments;
                    const x = point.x + 40 + progress * 40; // From geometry edge to ghost edge

                    let y = 70; // Adjusted Y

                    if (point.type === 'circle') {
                        // U(1) - Straight line (abelian, no curvature)
                        y = 70;
                    } else if (point.type === 'sphere') {
                        // SU(2) - ZIGZAG pattern (discrete jumps, weak interaction style)
                        const zigzagFreq = 6; // Reduced frequency for visible steps
                        y = 70 + (Math.floor(progress * zigzagFreq) % 2 === 0 ? 1 : -1) * 6; // 6px amplitude
                    } else {
                        // SU(3) - SPIRAL/COILED pattern (VERY OBVIOUS strong curvature)
                        y = 70 + Math.sin(progress * Math.PI * 8 + time * 2) * 15; // MUCH larger amplitude
                    }

                    if (i === 0) bundleCtx.moveTo(x, y);
                    else bundleCtx.lineTo(x, y);
                }
                bundleCtx.stroke();
                bundleCtx.setLineDash([]);

                // Label for gauge field
                bundleCtx.fillStyle = 'rgba(251, 191, 36, 0.7)';
                bundleCtx.font = '9px Arial';
                bundleCtx.textAlign = 'center';
                bundleCtx.fillText(
                    point.type === 'circle' ? '光子' : (point.type === 'sphere' ? 'W/Z' : '胶子'),
                    point.x + 60,
                    98
                );

                // NEW: Add "x+dx" label for first ghost (U(1)) to explain concept
                if (idx === 0) {
                    bundleCtx.fillStyle = 'rgba(255, 255, 255, 0.5)';
                    bundleCtx.font = '8px Arial';
                    bundleCtx.fillText('x+dx', point.x + 80, 125);
                    bundleCtx.fillText('(相邻点)', point.x + 80, 135);
                }
            }

            // Label - RAISED to avoid overlap
            bundleCtx.fillStyle = point.color;
            bundleCtx.font = 'bold 16px Arial';
            bundleCtx.textAlign = 'center';
            bundleCtx.fillText(point.label, point.x, 40);
        });

        safeRequestAnimationFrame(animateFiberBundle);
    }
    safeRequestAnimationFrame(animateFiberBundle);

    // ===== SECTION 2: SIDE-BY-SIDE COMPARISON (COMPRESSED) =====
    const comparisonTitle = document.createElement('h3');
    comparisonTitle.innerHTML = '⚡ Maxwell vs Yang-Mills：自相互作用的革命';
    comparisonTitle.style.cssText = 'margin-bottom: 0.6rem; color: #a5b4fc; font-size: 1.1rem; margin-top: 0;';
    stage.appendChild(comparisonTitle);

    const comparisonSubtitle = document.createElement('p');
    comparisonSubtitle.innerHTML = '线性传播 vs 非线性纠缠 (Linear Propagation vs Nonlinear Entanglement)';
    comparisonSubtitle.style.cssText = 'margin-bottom: 0.8rem; color: rgba(255,255,255,0.6); font-size: 0.8rem; font-style: italic; text-align: center;';
    stage.appendChild(comparisonSubtitle);

    const comparisonContainer = document.createElement('div');
    comparisonContainer.style.cssText = 'display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; height: 160px; margin-bottom: 1rem;'; // Reduced height
    stage.appendChild(comparisonContainer);

    // LEFT: U(1) Photons (Non-interacting) - COMPRESSED
    const photonPanel = document.createElement('div');
    photonPanel.style.cssText = 'background: rgba(252, 211, 77, 0.1); border: 2px solid #fcd34d; border-radius: 12px; padding: 0.8rem; height: 100%; display: flex; flex-direction: column; justify-content: space-between;';
    photonPanel.innerHTML = `
        <h4 style="color: #fcd34d; margin: 0 0 0.5rem 0; font-size: 0.95rem;">📡 U(1): 光子互不理睢</h4>
        <canvas id="photon-demo" width="400" height="100" style="width: 100%; background: rgba(0,0,0,0.3); border-radius: 8px;"></canvas>
        <p style="margin-top: 0.5rem; font-size: 0.75rem; opacity: 0.8;">光子不带电荷 → 光子之间无相互作用</p>
    `;
    comparisonContainer.appendChild(photonPanel);

    // RIGHT: SU(3) Gluons (Self-interacting) - COMPRESSED
    const gluonPanel = document.createElement('div');
    gluonPanel.style.cssText = 'background: rgba(255, 107, 107, 0.1); border: 2px solid #ff6b6b; border-radius: 12px; padding: 0.8rem; height: 100%; display: flex; flex-direction: column; justify-content: space-between;';
    gluonPanel.innerHTML = `
        <h4 style="color: #ff6b6b; margin: 0 0 0.5rem 0; font-size: 0.95rem;">💥 SU(3): 胶子互相纠缠</h4>
        <canvas id="gluon-demo" width="400" height="100" style="width: 100%; background: rgba(0,0,0,0.3); border-radius: 8px;"></canvas>
        <p style="margin-top: 0.5rem; font-size: 0.75rem; opacity: 0.8;">胶子带色荷 → 胶子之间强烈相互作用！</p>
    `;
    comparisonContainer.appendChild(gluonPanel);

    // Animate photon demo (pass-through)
    const photonCanvas = document.getElementById('photon-demo');
    if (photonCanvas) {
        const pCtx = photonCanvas.getContext('2d');
        function animatePhotons() {
            if (!document.body.contains(photonCanvas)) return;

            const t = (Date.now() / 1000) % 4;
            pCtx.clearRect(0, 0, 400, 100); // Reduced height

            // Two photon wave packets moving through each other
            const ph1x = 50 + t * 80;
            const ph2x = 350 - t * 80;

            // Photon 1
            pCtx.fillStyle = '#fcd34d';
            pCtx.beginPath();
            pCtx.arc(ph1x, 50, 15, 0, Math.PI * 2); // Adjusted Y
            pCtx.fill();
            pCtx.fillStyle = 'rgba(252, 211, 77, 0.3)';
            pCtx.beginPath();
            pCtx.arc(ph1x, 50, 25, 0, Math.PI * 2); // Adjusted Y
            pCtx.fill();

            // Photon 2
            pCtx.fillStyle = '#fcd34d';
            pCtx.beginPath();
            pCtx.arc(ph2x, 50, 15, 0, Math.PI * 2); // Adjusted Y
            pCtx.fill();
            pCtx.fillStyle = 'rgba(252, 211, 77, 0.3)';
            pCtx.beginPath();
            pCtx.arc(ph2x, 50, 25, 0, Math.PI * 2); // Adjusted Y
            pCtx.fill();

            safeRequestAnimationFrame(animatePhotons);
        }
        animatePhotons();
    }

    // Animate gluon demo (entanglement)
    const gluonCanvas = document.getElementById('gluon-demo');
    if (gluonCanvas) {
        const gCtx = gluonCanvas.getContext('2d');
        function animateGluons() {
            if (!document.body.contains(gluonCanvas)) return;

            const t = (Date.now() / 1000) % 4;
            gCtx.clearRect(0, 0, 400, 100); // Reduced height

            const g1x = 50 + t * 80;
            const g2x = 350 - t * 80;
            // Gluon 1
            gCtx.fillStyle = '#ff6b6b';
            gCtx.beginPath();
            gCtx.arc(g1x, 50, 15, 0, Math.PI * 2); // Adjusted Y
            gCtx.fill();

            // Gluon 2
            gCtx.fillStyle = '#ff6b6b';
            gCtx.beginPath();
            gCtx.arc(g2x, 50, 15, 0, Math.PI * 2); // Adjusted Y
            gCtx.fill();

            // NEW: Enhanced Flux Tube - Realistic "通量管" with confinement physics
            // Always draw if particles exist
            if (true) {
                const distance = Math.abs(g1x - g2x);
                const tension = Math.max(0, (200 - distance) / 200);

                // Pulsating effect (energy oscillation)
                const pulse = 0.8 + Math.sin(t * 8) * 0.2;

                // Draw tapered flux tube (thick at ends, thin in middle like橡皮筋)
                const segments = 30;
                gCtx.strokeStyle = `rgba(239, 68, 68, ${tension * 0.9})`;

                for (let layer = 0; layer < 3; layer++) {
                    gCtx.beginPath();
                    for (let i = 0; i <= segments; i++) {
                        const progress = i / segments;
                        const x = g1x + (g2x - g1x) * progress;

                        // Vibrating string effect
                        const vibration = Math.sin(progress * Math.PI) * Math.sin(t * 20 + layer) * 5 * tension;
                        const y = 50 + vibration; // Adjusted Y to 50

                        // Tapering: thick at ends, thin in middle (parabolic) - EXTREME
                        const taper = 1 - Math.pow(2 * progress - 1, 2);
                        const baseWidth = 5 + tension * (15 + layer * 5);
                        const currentWidth = baseWidth * (0.2 + taper * 0.8);

                        // Multi-frequency wave for "muscle fiber" texture - MORE DRAMATIC
                        // const wave1 = Math.sin(progress * Math.PI * 5 + t * 3) * tension * 20;
                        // const wave2 = Math.cos(progress * Math.PI * 8 - t * 2) * tension * 10;
                        // const y = 75 + wave1 + wave2;

                        if (i === 0) {
                            gCtx.moveTo(x, y);
                            gCtx.lineWidth = currentWidth;
                        } else {
                            gCtx.lineTo(x, y);
                        }
                    }

                    // Layer-specific styling - MORE VIBRANT
                    if (layer === 0) {
                        // Core tube (brightest, red) - MUCH BRIGHTER
                        gCtx.strokeStyle = `rgba(239, 68, 68, ${Math.min(1, tension * 1.2 * pulse)})`;
                        gCtx.lineWidth = 5 + tension * 15;
                    } else if (layer === 1) {
                        // Middle glow (orange/yellow energy) - BRIGHTER
                        gCtx.strokeStyle = `rgba(251, 191, 36, ${tension * 0.8})`;
                        gCtx.lineWidth = 10 + tension * 20;
                        gCtx.globalAlpha = 0.6;
                    } else {
                        // Outer diffuse glow - MORE VISIBLE
                        gCtx.strokeStyle = `rgba(255, 107, 107, ${tension * 0.5})`;
                        gCtx.lineWidth = 15 + tension * 25;
                        gCtx.globalAlpha = 0.3;
                    }

                    gCtx.stroke();
                    gCtx.globalAlpha = 1;
                }

                // Texture lines (muscle fiber striations)
                if (tension > 0.3) {
                    gCtx.strokeStyle = `rgba(139, 0, 0, ${tension * 0.4})`;
                    gCtx.lineWidth = 1;
                    for (let i = 0; i < 12; i++) {
                        const stripProgress = i / 11;
                        const stripX = g1x + (g2x - g1x) * stripProgress;
                        const offset = Math.sin(t * 4 + i) * 3;
                        gCtx.beginPath();
                        gCtx.moveTo(stripX, 75 - 8 + offset);
                        gCtx.lineTo(stripX, 75 + 8 + offset);
                        gCtx.stroke();
                    }
                }
            }

            // Sparks
            gCtx.fillStyle = '#fbbf24';
            sparks = sparks.filter(s => {
                s.x += s.vx;
                s.y += s.vy;
                s.life -= 0.02;
                if (s.life > 0) {
                    gCtx.globalAlpha = s.life;
                    gCtx.beginPath();
                    gCtx.arc(s.x, s.y, 3, 0, Math.PI * 2);
                    gCtx.fill();
                    return true;
                }
                return false;
            });
            gCtx.globalAlpha = 1;

            // Explosion label
            if (colliding) {
                gCtx.fillStyle = '#fff';
                gCtx.font = 'bold 14px Arial';
                gCtx.textAlign = 'center';
                gCtx.fillText('💥 自相互作用！', 200, 120);
            }

            safeRequestAnimationFrame(animateGluons);
        }
        safeRequestAnimationFrame(animateGluons);
    }
}


function createGroupVisual(title, shape, force, color, drawFn) {
    const container = document.createElement('div');
    container.style.cssText = 'display: flex; flex-direction: column; align-items: center; gap: 1rem;';

    const canvas = document.createElement('canvas');
    canvas.width = 150;
    canvas.height = 150;
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    // Robust Animation Loop
    function animate() {
        if (currentView !== 'group') return; // Stop animation if not in current view
        if (!document.body.contains(canvas)) return; // Stop if removed from DOM

        // Only draw if visible (optimization)
        const rect = canvas.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            ctx.clearRect(0, 0, 150, 150);
            drawFn(ctx, 150, 150);
        }

        safeRequestAnimationFrame(animate);
    }
    safeRequestAnimationFrame(animate);

    const info = document.createElement('div');
    info.style.textAlign = 'center';
    info.innerHTML = `
        <h3 style="color:${color}; margin-bottom:0.2rem;">${title}</h3>
        <div style="font-weight:bold;">${shape}</div>
        <div style="font-size:0.9rem; opacity:0.7;">${force}</div>
    `;
    container.appendChild(info);

    return container;
}
// --- Spacetime Visualization (Newton vs Leibniz) ---
function renderSpacetime() {
    const stage = document.getElementById('spacetime-stage');
    stage.innerHTML = '';
    stage.style.cssText = 'display: flex; justify-content: space-around; align-items: center; padding: 2rem; flex-wrap: wrap;';

    // 1. Newton's Absolute容器 spacetime
    const newtonContainer = document.createElement('div');
    newtonContainer.style.cssText = 'width: 300px; text-align: center;';

    const newtonCanvas = document.createElement('canvas');
    newtonCanvas.width = 300;
    newtonCanvas.height = 300;
    newtonContainer.appendChild(newtonCanvas);

    const newtonLabel = document.createElement('p');
    newtonLabel.innerHTML = '<strong>牛顿 (Newton)</strong><br>绝对时空，像一个容器/舞台，物质放入其中。';
    newtonContainer.appendChild(newtonLabel);

    const ctx1 = newtonCanvas.getContext('2d');
    // Draw grid
    ctx1.strokeStyle = 'rgba(255,255,255,0.2)';
    ctx1.lineWidth = 1;
    for (let i = 0; i < 300; i += 30) {
        ctx1.beginPath();
        ctx1.moveTo(i, 0);
        ctx1.lineTo(i, 300);
        ctx1.stroke();
        ctx1.beginPath();
        ctx1.moveTo(0, i);
        ctx1.lineTo(300, i);
        ctx1.stroke();
    }
    // Draw object
    ctx1.beginPath();
    ctx1.arc(150, 150, 20, 0, Math.PI * 2);
    ctx1.fillStyle = '#4ecdc4';
    ctx1.fill();

    // 2. Leibniz's Relational space
    const leibnizContainer = document.createElement('div');
    leibnizContainer.style.cssText = 'width: 300px; text-align: center;';

    const leibnizCanvas = document.createElement('canvas');
    leibnizCanvas.width = 300;
    leibnizCanvas.height = 300;
    leibnizContainer.appendChild(leibnizCanvas);

    const leibnizLabel = document.createElement('p');
    leibnizLabel.innerHTML = '<strong>莱布尼茨(Leibniz)/爱因斯坦</strong><br>关系时空，没有背景舞台，时空是物质之间关系的集合。';
    leibnizContainer.appendChild(leibnizLabel);

    const ctx2 = leibnizCanvas.getContext('2d');

    // Leibniz Animation - particles with relationships
    const particles = [
        { x: 150, y: 100, vx: 0.5, vy: 0.3 },
        { x: 100, y: 200, vx: -0.3, vy: 0.5 },
        { x: 200, y: 200, vx: 0.4, vy: -0.4 }
    ];

    function animateLeibniz() {
        if (currentView !== 'spacetime') return;
        if (!document.body.contains(leibnizCanvas)) return;

        ctx2.clearRect(0, 0, 300, 300);

        // Draw connecting lines (relationships)
        ctx2.strokeStyle = 'rgba(255,255,255,0.3)';
        ctx2.lineWidth = 1;
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                ctx2.beginPath();
                ctx2.moveTo(particles[i].x, particles[i].y);
                ctx2.lineTo(particles[j].x, particles[j].y);
                ctx2.stroke();
            }
        }

        // Draw and update particles
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            // Bounce
            if (p.x < 20 || p.x > 280) p.vx *= -1;
            if (p.y < 20 || p.y > 280) p.vy *= -1;

            ctx2.beginPath();
            ctx2.arc(p.x, p.y, 8, 0, Math.PI * 2);
            ctx2.fillStyle = '#ff6b6b';
            ctx2.fill();
        });

        safeRequestAnimationFrame(animateLeibniz);
    }

    stage.appendChild(newtonContainer);
    stage.appendChild(leibnizContainer);

    // CRITICAL: Start Leibniz animation
    safeRequestAnimationFrame(animateLeibniz);
}


// --- Global Animations ---
const style = document.createElement('style');
style.textContent = `
    @keyframes scaleIn {from {transform: scale(0); } to {transform: scale(1); } }
    @keyframes pulse {0 % { transform: scale(1); opacity: 0.2; } 50% {transform: scale(1.2); opacity: 0.4; } 100% {transform: scale(1); opacity: 0.2; } }
    @keyframes rotate {from {transform: rotate(0deg); } to {transform: rotate(360deg); } }
    `;
document.head.appendChild(style);

// --- Structure View Logic ---
function renderStructure(type = 'proton') {
    const stage = document.getElementById('structure-stage');
    stage.innerHTML = '';
    stage.style.cssText = 'display: flex; flex-direction: column; justify-content: flex-start; align-items: center; width: 100%; height: 100%; padding: 2rem; overflow-y: auto;';

    // Update buttons
    document.querySelectorAll('[data-action]').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.action === type) btn.classList.add('active');
    });

    if (type === 'proton') {
        createNucleus(stage, 'proton');
    } else if (type === 'neutron') {
        createNucleus(stage, 'neutron');
    } else if (type === 'nucleus') {
        createComplexNucleus(stage); // Renamed to avoid confusion
    } else if (type === 'atom') {
        createAtom(stage);
    } else if (type === 'earth') {
        createEarth(stage); // Kept for legacy, but moved to EM view conceptually
    }

    // Scale Comparison Card (Always show)
    const scaleCard = document.createElement('div');
    scaleCard.style.cssText = `
        margin-top: 3rem;
        padding: 1rem;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        max-width: 800px;
        width: 100%;
    `;
    scaleCard.innerHTML = `
        <h3 style="color: #a5b4fc; margin: 0 0 0.8rem 0; text-align: center; font-size: 1rem;">📏 极简尺度比喻</h3>
        <div style="display: flex; justify-content: space-around; align-items: center; gap: 0.8rem;">
            <div style="flex: 1; text-align: center;">
                <div style="font-size: 1.5rem; margin-bottom: 0.3rem;">🏟️</div>
                <div style="font-weight: bold; color: #fff; font-size: 0.85rem;">原子</div>
                <div style="font-size: 0.75rem; color: #aaa;">体育场</div>
            </div>
            <div style="font-size: 1.2rem; color: #555;">→</div>
            <div style="flex: 1; text-align: center;">
                <div style="font-size: 1.5rem; margin-bottom: 0.3rem;">🐜</div>
                <div style="font-weight: bold; color: #fff; font-size: 0.85rem;">原子核</div>
                <div style="font-size: 0.75rem; color: #aaa;">蚂蚁</div>
            </div>
            <div style="font-size: 1.2rem; color: #555;">→</div>
            <div style="flex: 1; text-align: center;">
                <div style="font-size: 1.5rem; margin-bottom: 0.3rem;">✨</div>
                <div style="font-weight: bold; color: #fff; font-size: 0.85rem;">夸克/电子</div>
                <div style="font-size: 0.75rem; color: #aaa;">几何点</div>
            </div>
        </div>
        <p style="text-align: center; margin-top: 0.8rem; margin-bottom: 0; font-size: 0.75rem; opacity: 0.6;">
            原子内部 99.999...% 都是空旷的
        </p>
    `;
    stage.appendChild(scaleCard);
}

function createNucleus(stage, type) { // This now creates a single proton or neutron
    const container = document.createElement('div');
    container.style.cssText = 'position: relative; width: 200px; height: 200px; animation: scaleIn 0.5s ease forwards;';

    // Quarks
    const quarks = type === 'proton'
        ? ['u', 'u', 'd']
        : ['u', 'd', 'd'];

    const colors = type === 'proton'
        ? ['#ff6b6b', '#ff6b6b', '#4ecdc4']
        : ['#ff6b6b', '#4ecdc4', '#4ecdc4'];

    const positions = [
        { top: '20%', left: '50%' },
        { top: '70%', left: '30%' },
        { top: '70%', left: '70%' }
    ];

    quarks.forEach((q, i) => {
        const quark = document.createElement('div');
        quark.className = 'quark-ball';
        quark.style.cssText = `
            position: absolute; top: ${positions[i].top}; left: ${positions[i].left};
            width: 40px; height: 40px; background: radial-gradient(circle at 30% 30%, ${colors[i]}, #000);
            border-radius: 50%; display: flex; justify-content: center; align-items: center;
            color: #fff; font-weight: bold; box-shadow: 0 0 10px ${colors[i]};
            transform: translate(-50%, -50%); z-index: 2;
        `;
        quark.innerHTML = q;
        container.appendChild(quark);
    });

    // Gluon Field (Canvas)
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 200;
    canvas.style.cssText = 'position: absolute; top: 0; left: 0; z-index: 1;';
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    function animateGluons() {
        if (currentView !== 'structure') return; // Stop animation if not in current view
        if (!document.body.contains(canvas)) return;
        ctx.clearRect(0, 0, 200, 200);

        // Draw connecting springs
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(100, 40); // Top
        ctx.lineTo(60, 140); // Left
        ctx.lineTo(140, 140); // Right
        ctx.closePath();
        ctx.stroke();

        safeRequestAnimationFrame(animateGluons);
    }
    safeRequestAnimationFrame(animateGluons);

    const label = document.createElement('div');
    label.innerHTML = type === 'proton' ? '质子 (Proton)<br>uud' : '中子 (Neutron)<br>udd';
    label.style.cssText = 'position: absolute; bottom: -40px; width: 100%; text-align: center; font-weight: bold;';
    container.appendChild(label);

    stage.appendChild(container);
}

function createComplexNucleus(stage) { // This is the old createNucleus, renamed
    const container = document.createElement('div');
    container.style.cssText = `position: relative; width: 200px; height: 200px; animation: rotate 20s linear infinite;`;

    // Create Helium-4 Nucleus (2 Protons, 2 Neutrons)
    const positions = [
        { x: 60, y: 60, type: 'p', color: '#ff6b6b' },
        { x: 140, y: 60, type: 'n', color: '#4ecdc4' },
        { x: 60, y: 140, type: 'n', color: '#4ecdc4' },
        { x: 140, y: 140, type: 'p', color: '#ff6b6b' }
    ];

    positions.forEach(pos => {
        const ball = document.createElement('div');
        ball.textContent = pos.type === 'p' ? '+' : '0';
        ball.style.cssText = `
    position: absolute; left: ${pos.x}px; top: ${pos.y}px;
    width: 50px; height: 50px; border-radius: 50%;
    background: ${pos.color}; transform: translate(-50%, -50%);
    display: flex; justify-content: center; align-items: center;
    font-weight: bold; font-size: 1.5rem; color: rgba(0,0,0,0.6);
    box-shadow: inset -5px -5px 10px rgba(0,0,0,0.3);
    `;
        container.appendChild(ball);
    });

    const label = document.createElement('div');
    label.innerHTML = '<h3>原子核 (Nucleus)</h3><p>强相互作用克服了质子间的电磁斥力</p>';
    label.style.cssText = `
    position: absolute; bottom: -80px; width: 300px; text-align: center; left: 50%; transform: translateX(-50%);
    `;
    stage.appendChild(container);
    stage.appendChild(label);
}

function createAtom(stage) {
    const container = document.createElement('div');
    container.style.cssText = `position: relative; width: 300px; height: 300px; display: flex; justify-content: center; align-items: center;`;

    // Nucleus (Small)
    const nucleus = document.createElement('div');
    nucleus.style.cssText = `width: 40px; height: 40px; background: #ff6b6b; border-radius: 50%; box-shadow: 0 0 20px #ff6b6b; z-index: 2;`;
    container.appendChild(nucleus);

    // Electron Orbit
    const orbit = document.createElement('div');
    orbit.style.cssText = `
    position: absolute; width: 200px; height: 200px; border: 1px solid rgba(78, 205, 196, 0.3); border-radius: 50%;
    animation: rotate 4s linear infinite;
    `;

    const electron = document.createElement('div');
    electron.style.cssText = `
    position: absolute; top: -5px; left: 50%; width: 10px; height: 10px; background: #4ecdc4; border-radius: 50%;
    box-shadow: 0 0 10px #4ecdc4; transform: translateX(-50%);
    `;
    orbit.appendChild(electron);
    container.appendChild(orbit);

    const label = document.createElement('div');
    label.innerHTML = '<h3>原子 (Atom)</h3><p>电磁力束缚电子绕核运动</p>';
    label.style.cssText = `position: absolute; bottom: -60px; width: 100%; text-align: center;`;

    stage.appendChild(container);
    stage.appendChild(label);
}

function createEarth(stage) {
    const container = document.createElement('div');
    container.style.cssText = `
        display: flex; flex-direction: row; align-items: center; justify-content: center; gap: 2rem;
        width: 100%; height: 100%; animation: scaleIn 0.5s ease forwards;
    `;

    // 1. Atom (Small)
    const atomDiv = document.createElement('div');
    atomDiv.style.cssText = 'display: flex; flex-direction: column; align-items: center;';
    const atomVisual = document.createElement('div');
    atomVisual.style.cssText = `
        width: 60px; height: 60px; border: 1px solid rgba(78, 205, 196, 0.5); border-radius: 50%;
        position: relative; display: flex; justify-content: center; align-items: center;
    `;
    atomVisual.innerHTML = '<div style="width:10px; height:10px; background:#ff6b6b; border-radius:50%;"></div><div style="position:absolute; top:0; left:50%; width:6px; height:6px; background:#4ecdc4; border-radius:50%; animation:rotate 2s linear infinite; transform-origin: 0 30px;"></div>';
    atomDiv.appendChild(atomVisual);
    atomDiv.innerHTML += '<span style="margin-top:10px; font-size:0.9rem;">原子 (Atom)</span>';

    // Arrow
    const arrow1 = document.createElement('div');
    arrow1.innerHTML = '→';
    arrow1.style.cssText = 'font-size: 1.5rem; color: rgba(255,255,255,0.5);';

    // 2. Molecule (Medium)
    const molDiv = document.createElement('div');
    molDiv.style.cssText = 'display: flex; flex-direction: column; align-items: center;';
    const molVisual = document.createElement('div');
    molVisual.style.cssText = `
        width: 80px; height: 80px; position: relative; display: flex; justify-content: center; align-items: center;
    `;
    // H2O representation
    molVisual.innerHTML = `
        <div style="width:30px; height:30px; background:#ff6b6b; border-radius:50%; z-index:2; position:relative;"></div>
        <div style="width:20px; height:20px; background:#fff; border-radius:50%; position:absolute; top:10px; left:0;"></div>
        <div style="width:20px; height:20px; background:#fff; border-radius:50%; position:absolute; top:10px; right:0;"></div>
    `;
    molDiv.appendChild(molVisual);
    molDiv.innerHTML += '<span style="margin-top:10px; font-size:0.9rem;">分子 (Molecule)</span>';

    // Arrow
    const arrow2 = document.createElement('div');
    arrow2.innerHTML = '→';
    arrow2.style.cssText = 'font-size: 1.5rem; color: rgba(255,255,255,0.5);';

    // 3. Matter (Large)
    const matterDiv = document.createElement('div');
    matterDiv.style.cssText = 'display: flex; flex-direction: column; align-items: center;';
    const matterVisual = document.createElement('div');
    matterVisual.style.cssText = `
        width: 120px; height: 120px; background: radial-gradient(circle at 30% 30%, #4f46e5, #1e1b4b);
        border-radius: 50%; box-shadow: 0 0 30px rgba(79, 70, 229, 0.4);
        display: flex; justify-content: center; align-items: center; text-align: center;
        color: rgba(255,255,255,0.8); font-weight: bold;
    `;
    matterVisual.innerHTML = '宏观物质';
    matterDiv.appendChild(matterVisual);
    matterDiv.innerHTML += '<span style="margin-top:10px; font-size:0.9rem;">(Macro Matter)</span>';

    container.appendChild(atomDiv);
    container.appendChild(arrow1);
    container.appendChild(molDiv);
    container.appendChild(arrow2);
    container.appendChild(matterDiv);

    stage.appendChild(container);
}

const structureBtns = document.querySelectorAll('[data-action]');

structureBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const action = btn.getAttribute('data-action');
        renderStructure(action); // Call renderStructure with the action type
    });
});

// --- Strong Force View Logic ---
function renderStrongForce() {
    const stage = document.getElementById('strong-stage');
    stage.innerHTML = '';
    stage.style.cssText = `
        display: flex; flex-direction: row; align-items: center; justify-content: space-around;
        padding: 2rem; position: relative; overflow: hidden; width: 100%; height: 100%;
        `;

    // 1. Proton Internal Structure (Springs Analogy)
    const protonContainer = document.createElement('div');
    protonContainer.style.cssText = 'position: relative; width: 300px; height: 300px; display: flex; justify-content: center; align-items: center;';

    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 300;
    protonContainer.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    // Quarks positions (Triangle)
    const quarks = [
        { x: 150, y: 80, label: 'u', color: '#ff6b6b' },
        { x: 80, y: 220, label: 'u', color: '#ff6b6b' },
        { x: 220, y: 220, label: 'd', color: '#4ecdc4' }
    ];

    let t = 0;
    function animateSprings() {
        if (currentView !== 'strong') return; // Stop animation if not in current view
        if (!document.body.contains(canvas)) return;
        ctx.clearRect(0, 0, 300, 300);

        // Draw Springs (Gluons)
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';

        for (let i = 0; i < quarks.length; i++) {
            for (let j = i + 1; j < quarks.length; j++) {
                const q1 = quarks[i];
                const q2 = quarks[j];

                // Vibrate positions
                const vib1 = Math.sin(t * 10 + i) * 5;
                const vib2 = Math.cos(t * 10 + j) * 5;

                const x1 = q1.x + vib1;
                const y1 = q1.y + vib1;
                const x2 = q2.x + vib2;
                const y2 = q2.y + vib2;

                // Draw Spring (Sine wave)
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                const dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
                const angle = Math.atan2(y2 - y1, x2 - x1);

                for (let k = 0; k <= dist; k += 5) {
                    const px = x1 + (k / dist) * (x2 - x1);
                    const py = y1 + (k / dist) * (y2 - y1);
                    const offset = Math.sin(k * 0.2 + t * 10) * 10; // Wiggle

                    ctx.lineTo(
                        px + Math.cos(angle + Math.PI / 2) * offset,
                        py + Math.sin(angle + Math.PI / 2) * offset
                    );
                }
                ctx.stroke();
            }
        }

        // Draw Quarks
        quarks.forEach((q, i) => {
            const vib = Math.sin(t * 10 + i) * 5;
            ctx.beginPath();
            ctx.arc(q.x + vib, q.y + vib, 25, 0, Math.PI * 2);
            ctx.fillStyle = q.color;
            ctx.fill();
            ctx.fillStyle = '#000';
            ctx.font = 'bold 20px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(q.label, q.x + vib, q.y + vib);
        });

        t += 0.05;
        safeRequestAnimationFrame(animateSprings);
    }
    safeRequestAnimationFrame(animateSprings);

    const protonLabel = document.createElement('div');
    protonLabel.style.cssText = 'position: absolute; bottom: -2rem; width: 100%; text-align: center; padding: 0 1rem;';
    protonLabel.innerHTML = `
        <h3 style="margin: 0 0 0.5rem 0; color: #a78bfa; font-size: 1.1rem;">💜 强力势能 (Gluon Field)</h3>
        <p style="margin: 0; font-size: 0.85rem; line-height: 1.5; opacity: 0.9;">
            夸克被强力"弹簧"锁死，<strong>胶子通量管</strong>拉伸产生的势能是质子质量的主要来源。
        </p>
    `;
    protonContainer.appendChild(protonLabel);


    // 2. Mass Breakdown (Pie Chart)
    const pieContainer = document.createElement('div');
    pieContainer.style.cssText = 'display: flex; flex-direction: column; align-items: center; width: 300px;';

    const pieCanvas = document.createElement('canvas');
    pieCanvas.width = 200;
    pieCanvas.height = 200;
    pieContainer.appendChild(pieCanvas);

    const pieCtx = pieCanvas.getContext('2d');
    const centerX = 100, centerY = 100, radius = 90;

    // Data: Correct mass breakdown - 80% potential, 19% kinetic, 1% Higgs
    const slices = [
        { percent: 0.80, color: '#8b5cf6', label: '强力势能 (80%)' },   // Purple - potential
        { percent: 0.19, color: '#f59e0b', label: '夸克动能 (19%)' },  // Orange - kinetic
        { percent: 0.01, color: '#06b6d4', label: '希格斯质量 (1%)' }   // Cyan - Higgs
    ];

    let startAngle = 0;
    slices.forEach(slice => {
        const endAngle = startAngle + (Math.PI * 2 * slice.percent);

        // Draw Slice
        pieCtx.beginPath();
        pieCtx.moveTo(centerX, centerY);
        pieCtx.arc(centerX, centerY, radius, startAngle, endAngle);
        pieCtx.fillStyle = slice.color;
        pieCtx.fill();
        pieCtx.strokeStyle = 'rgba(0,0,0,0.5)';
        pieCtx.lineWidth = 1;
        pieCtx.stroke();

        // Add Percentage Text on Slice
        if (slice.percent > 0.05) { // Only show for > 5%
            const midAngle = startAngle + (endAngle - startAngle) / 2;
            const textR = radius * 0.65;
            const textX = centerX + Math.cos(midAngle) * textR;
            const textY = centerY + Math.sin(midAngle) * textR;

            pieCtx.fillStyle = '#fff';
            pieCtx.font = 'bold 14px Arial';
            pieCtx.textAlign = 'center';
            pieCtx.textBaseline = 'middle';
            pieCtx.fillText((slice.percent * 100).toFixed(0) + '%', textX, textY);
        }

        startAngle = endAngle;
    });

    // Legend (Simplified)
    const legend = document.createElement('div');
    legend.style.cssText = 'margin-top: 1.5rem; text-align: left; width: 100%; font-size: 0.9rem; display: flex; flex-direction: column; gap: 0.5rem;';
    legend.innerHTML = `
        <div style="display:flex; align-items:center; gap:8px;">
            <span style="width:12px; height:12px; background:#8b5cf6; border-radius:2px; display:inline-block;"></span>
            <span style="color:#ddd">强力势能 (80%)</span>
            <span style="font-size:0.8rem; color:#888; margin-left:auto;">弹簧拉伸能量</span>
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
            <span style="width:12px; height:12px; background:#f59e0b; border-radius:2px; display:inline-block;"></span>
            <span style="color:#ddd">夸克动能 (19%)</span>
            <span style="font-size:0.8rem; color:#888; margin-left:auto;">高速运动能量</span>
        </div>
        <div style="display:flex; align-items:center; gap:8px;">
            <span style="width:12px; height:12px; background:#06b6d4; border-radius:2px; display:inline-block;"></span>
            <span style="color:#ddd">希格斯质量 (1%)</span>
            <span style="font-size:0.8rem; color:#888; margin-left:auto;">固有质量</span>
        </div>
        <div style="margin-top: 0.5rem; padding-top: 0.5rem; border-top: 1px solid rgba(255,255,255,0.1);">
            <span style="color:#ff6b6b; font-weight:bold;">夸克禁闭</span>: 
            <span style="color:#aaa; font-size: 0.85rem;">夸克被强力禁闭在强子内部，无法被单独观测到。</span>
        </div>
    `;

    const contextText = document.createElement('div');
    contextText.innerHTML = `
        <div style="text-align: center; color: #fbbf24; font-weight: bold; margin-bottom: 0.5rem;">质量 ≈ 能量 (E=mc²)</div>
        <div style="opacity: 0.8;">我们身体 99% 的质量，其实是被强力禁锢住的能量。</div>
    `;
    contextText.style.cssText = 'margin-top: 1.5rem; padding: 1rem; background: rgba(255,255,255,0.05); border-radius: 8px; font-size: 0.9rem; line-height: 1.5; text-align: center; border: 1px solid rgba(255,255,255,0.1);';

    pieContainer.appendChild(legend);
    pieContainer.appendChild(contextText);

    stage.appendChild(protonContainer);
    stage.appendChild(pieContainer);
}

// --- Forces View Logic ---
function renderForcesWeb() {
    const stage = document.getElementById('forces-stage');
    stage.innerHTML = '';
    stage.style.cssText = `display: flex; flex-direction: column; align-items: center; justify-content: flex-start; padding: 2rem; width: 100%; height: 100%; overflow-y: auto;`;

    // Unification Note (Redesigned for better flow)
    const unificationNote = document.createElement('div');
    unificationNote.style.cssText = `
        width: 100%;
        max-width: 900px;
        margin-bottom: 2rem;
        padding: 1.5rem;
        background: linear-gradient(90deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1));
        border-left: 4px solid #8b5cf6;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        backdrop-filter: blur(5px);
    `;

    unificationNote.innerHTML = `
        <div style="flex: 1;">
            <h3 style="color: #a78bfa; margin: 0 0 0.5rem 0; font-size: 1.2rem;">✨ 三力统一 (Grand Unification)</h3>
            <p style="margin: 0; font-size: 0.95rem; opacity: 0.8;">
                在高能状态下，<strong>电磁力</strong>、<strong>弱力</strong>和<strong>强力</strong>统一于标准模型框架 (SU(3) × SU(2) × U(1))。
            </p>
        </div>
        <div style="display: flex; gap: 1rem; align-items: center; margin-left: 2rem;">
            <div style="text-align: center; opacity: 0.6;"><span style="font-size: 1.5rem;">⚡</span><br><span style="font-size: 0.8rem;">电磁</span></div>
            <div style="color: #fff; opacity: 0.3;">+</div>
            <div style="text-align: center; opacity: 0.6;"><span style="font-size: 1.5rem;">☢️</span><br><span style="font-size: 0.8rem;">弱力</span></div>
            <div style="color: #fff; opacity: 0.3;">+</div>
            <div style="text-align: center; opacity: 0.6;"><span style="font-size: 1.5rem;">⚛️</span><br><span style="font-size: 0.8rem;">强力</span></div>
        </div>
    `;
    stage.appendChild(unificationNote);

    // Gravity Warning (Subtle, below unification)
    const gravityNote = document.createElement('div');
    gravityNote.style.cssText = `
        width: 100%;
        max-width: 900px;
        margin-bottom: 2rem;
        text-align: center;
        font-size: 0.9rem;
        color: #f472b6;
        opacity: 0.8;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    `;
    gravityNote.innerHTML = `
        <span>⚠️ 引力 (Gravity) 尚未统一，需要量子引力理论 (如弦论)。</span>
    `;
    stage.appendChild(gravityNote);

    // Container for 4 Forces Grid
    const container = document.createElement('div');
    container.style.cssText = `
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
        width: 100%;
        max-width: 700px;
    `;

    // Data for 4 Forces
    const forces = [
        { id: 'em', label: '电磁力', desc: '光子交换 / 化学键 / 生命结构', color: '#fcd34d', icon: '🔋' },
        { id: 'weak', label: '弱力', desc: '粒子衰变 / 元素变换 / 中微子', color: '#4ecdc4', icon: '⚡' },
        { id: 'strong', label: '强力', desc: '夸克禁闭 / 胶子场 / 质量来源', color: '#ff6b6b', icon: '⚛️' },
        { id: 'gravity', label: '引力', desc: '时空弯曲 / 星系结构 / 宇宙学', color: '#ec4899', icon: '🌌' }
    ];

    forces.forEach(f => {
        const card = document.createElement('div');
        const isGravity = f.id === 'gravity';
        card.style.cssText = `
            background: ${isGravity ? 'rgba(236, 72, 153, 0.15)' : 'rgba(255,255,255,0.05)'};
            border: 2px solid ${f.color};
            ${isGravity ? 'box-shadow: 0 0 25px rgba(236, 72, 153, 0.5);' : ''}
            border-radius: 16px;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
        `;
        card.innerHTML = `
            <div style="font-size: 3rem; margin-bottom: 0.8rem;">${f.icon}</div>
            <h3 style="color: ${f.color}; margin: 0 0 0.5rem 0; font-size: 1.2rem;">${f.label}</h3>
            <p style="font-size: 0.85rem; opacity: 0.8; margin: 0; line-height: 1.4;">${f.desc}</p>
        `;

        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = `0 10px 30px ${f.color}40`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = isGravity ? '0 0 25px rgba(236, 72, 153, 0.5)' : 'none';
        });

        // RESTORE: Click to show force exchange animation
        card.addEventListener('click', () => {
            showForceExchange(f.id, stage);
        });

        container.appendChild(card);
    });

    stage.appendChild(container);
}

function showForceExchange(forceId, stage) {
    // Remove existing modal if any
    const existing = document.getElementById('exchange-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'exchange-modal';
    modal.style.cssText = `
        position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
        width: 320px; height: 320px; background: rgba(0,0,0,0.95); border: 1px solid rgba(255,255,255,0.3);
        border-radius: 16px; z-index: 100; display: flex; flex-direction: column; align-items: center; justify-content: center;
        padding: 1.5rem; animation: scaleIn 0.3s ease; box-shadow: 0 0 50px rgba(0,0,0,0.8);
    `;

    const closeBtn = document.createElement('div');
    closeBtn.innerHTML = '×';
    closeBtn.style.cssText = 'position: absolute; top: 10px; right: 15px; cursor: pointer; font-size: 1.5rem; color: #fff;';
    closeBtn.onclick = () => modal.remove();
    modal.appendChild(closeBtn);

    const title = document.createElement('h3');
    title.style.marginBottom = '1rem';

    const canvas = document.createElement('canvas');
    canvas.width = 280;
    canvas.height = 160;
    const ctx = canvas.getContext('2d');

    let animateFn;

    if (forceId === 'em') {
        title.textContent = '电磁力：光子交换';
        title.style.color = '#fcd34d';
        let t = 0;
        animateFn = () => {
            if (!document.getElementById('exchange-modal')) return;
            ctx.clearRect(0, 0, 280, 160);
            // Electron 1
            ctx.beginPath(); ctx.arc(60, 80, 12, 0, Math.PI * 2); ctx.fillStyle = '#4ecdc4'; ctx.fill(); ctx.fillStyle = '#fff'; ctx.fillText('e-', 55, 84);
            // Electron 2
            ctx.beginPath(); ctx.arc(220, 80, 12, 0, Math.PI * 2); ctx.fillStyle = '#4ecdc4'; ctx.fill(); ctx.fillStyle = '#fff'; ctx.fillText('e-', 215, 84);
            // Photon
            ctx.beginPath(); ctx.moveTo(72, 80);
            for (let x = 72; x <= 208; x += 5) ctx.lineTo(x, 80 + Math.sin((x + t * 50) * 0.1) * 6);
            ctx.strokeStyle = '#fcd34d'; ctx.lineWidth = 2; ctx.stroke();
            t += 0.02;
            requestAnimationFrame(animateFn);
        };
    } else if (forceId === 'strong') {
        title.textContent = '强力：胶子交换';
        title.style.color = '#ff6b6b';
        let t = 0;
        animateFn = () => {
            if (!document.getElementById('exchange-modal')) return;
            ctx.clearRect(0, 0, 280, 160);
            // Quark 1
            ctx.beginPath(); ctx.arc(80, 80, 15, 0, Math.PI * 2); ctx.fillStyle = '#ff0000'; ctx.fill(); ctx.fillStyle = '#fff'; ctx.fillText('u', 76, 84);
            // Quark 2
            ctx.beginPath(); ctx.arc(200, 80, 15, 0, Math.PI * 2); ctx.fillStyle = '#0000ff'; ctx.fill(); ctx.fillStyle = '#fff'; ctx.fillText('d', 196, 84);
            // Gluon
            ctx.beginPath(); ctx.moveTo(95, 80);
            for (let x = 95; x <= 185; x++) ctx.lineTo(x, 80 + Math.sin((x - t * 20) * 0.5) * 8);
            ctx.strokeStyle = '#fff'; ctx.lineWidth = 3; ctx.stroke();
            t += 0.05;
            requestAnimationFrame(animateFn);
        };
    } else if (forceId === 'weak') {
        title.textContent = '弱力：W玻色子衰变';
        title.style.color = '#4ecdc4';
        let t = 0;
        animateFn = () => {
            if (!document.getElementById('exchange-modal')) return;
            ctx.clearRect(0, 0, 280, 160);
            // Neutron
            ctx.beginPath(); ctx.arc(60, 80, 15, 0, Math.PI * 2); ctx.fillStyle = '#888'; ctx.fill(); ctx.fillStyle = '#fff'; ctx.fillText('n', 56, 84);

            if (t % 200 < 100) {
                const wx = 60 + (t % 100) * 1.5;
                ctx.beginPath(); ctx.arc(wx, 80, 8, 0, Math.PI * 2); ctx.fillStyle = '#4ecdc4'; ctx.fill(); ctx.fillStyle = '#000'; ctx.fillText('W-', wx - 6, 84);
            } else {
                ctx.beginPath(); ctx.arc(210, 60, 6, 0, Math.PI * 2); ctx.fillStyle = '#fff'; ctx.fill(); ctx.fillText('e-', 220, 60);
                ctx.beginPath(); ctx.arc(210, 100, 6, 0, Math.PI * 2); ctx.fillStyle = '#fff'; ctx.fill(); ctx.fillText('ve', 220, 100);
            }
            t += 1;
            requestAnimationFrame(animateFn);
        };
    } else if (forceId === 'gravity') {
        title.textContent = '引力：时空弯曲';
        title.style.color = '#a5b4fc';
        let t = 0;
        animateFn = () => {
            if (!document.getElementById('exchange-modal')) return;
            ctx.clearRect(0, 0, 280, 160);

            // Grid
            ctx.strokeStyle = 'rgba(255,255,255,0.2)';
            ctx.lineWidth = 1;
            for (let x = 0; x <= 280; x += 20) {
                ctx.beginPath();
                for (let y = 0; y <= 160; y += 5) {
                    // Distort grid around center mass
                    const dx = x - 140;
                    const dy = y - 80;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const offset = Math.max(0, 20 - dist * 0.2);
                    ctx.lineTo(x, y + offset);
                }
                ctx.stroke();
            }

            // Planet
            ctx.beginPath(); ctx.arc(140, 80, 30, 0, Math.PI * 2);
            const g = ctx.createRadialGradient(140, 80, 0, 140, 80, 30);
            g.addColorStop(0, '#a5b4fc'); g.addColorStop(1, '#000');
            ctx.fillStyle = g; ctx.fill();

            // Satellite
            const sx = 140 + Math.cos(t * 0.05) * 100;
            const sy = 80 + Math.sin(t * 0.05) * 40;
            ctx.beginPath(); ctx.arc(sx, sy, 5, 0, Math.PI * 2); ctx.fillStyle = '#fff'; ctx.fill();

            t += 1;
            requestAnimationFrame(animateFn);
        };
    }

    modal.appendChild(title);
    modal.appendChild(canvas);

    const desc = document.createElement('p');
    desc.style.fontSize = '0.9rem';
    desc.style.marginTop = '1rem';
    desc.style.opacity = '0.8';
    desc.style.textAlign = 'center';
    if (forceId === 'em') desc.textContent = '带电粒子通过交换光子产生斥力或引力。光子没有质量，作用距离无限。';
    if (forceId === 'strong') desc.textContent = '夸克通过交换胶子紧密结合。胶子带有色荷，产生夸克禁闭。';
    if (forceId === 'weak') desc.textContent = '中子衰变为质子，释放W玻色子，随后衰变为电子和反中微子。';
    if (forceId === 'gravity') desc.textContent = '质量弯曲时空，物体沿着弯曲的时空运动。引力是四种力中最弱的。';
    modal.appendChild(desc);

    stage.appendChild(modal);
    requestAnimationFrame(animateFn);
}

// --- New Views ---

// 1. Higgs Mechanism
function renderHiggs() {
    const stage = document.getElementById('higgs-stage');
    stage.innerHTML = '';
    stage.style.cssText = 'position: relative; width: 100%; height: 100%; overflow: hidden; background: #000;';

    const canvas = document.createElement('canvas');
    canvas.width = stage.clientWidth;
    canvas.height = stage.clientHeight;
    stage.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    // Particles with different "mass" (drag)
    const particles = [
        { x: 50, y: 100, mass: 0, color: '#fcd34d', label: 'Photon (0)', speed: 5 },
        { x: 50, y: 200, mass: 1, color: '#4ecdc4', label: 'Electron (Light)', speed: 3 },
        { x: 50, y: 300, mass: 5, color: '#ff6b6b', label: 'Top Quark (Heavy)', speed: 0.5 }
    ];

    // Higgs Field Grid
    const gridPoints = [];
    for (let x = 0; x < canvas.width; x += 30) {
        for (let y = 0; y < canvas.height; y += 30) {
            gridPoints.push({ x, y, baseOp: 0.1 });
        }
    }

    function animate() {
        if (!document.body.contains(canvas)) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw Higgs Field
        gridPoints.forEach(p => {
            let active = false;
            particles.forEach(part => {
                const d = Math.hypot(p.x - part.x, p.y - part.y);
                if (d < 50 && part.mass > 0) active = true;
            });

            ctx.fillStyle = active ? '#4f46e5' : `rgba(79, 70, 229, ${p.baseOp})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, active ? 3 : 1, 0, Math.PI * 2);
            ctx.fill();
        });

        // Draw Particles
        particles.forEach(p => {
            p.x += p.speed;
            if (p.x > canvas.width + 20) p.x = -20;

            ctx.beginPath();
            ctx.arc(p.x, p.y, 10 + p.mass * 2, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();

            ctx.fillStyle = '#fff';
            ctx.fillText(p.label, p.x - 20, p.y - 20);
        });

        safeRequestAnimationFrame(animate);
    }
    safeRequestAnimationFrame(animate);
}

// 2. Gravity (General Relativity)
function renderGravity() {
    const stage = document.getElementById('gravity-stage');
    stage.innerHTML = '';
    stage.style.cssText = 'position: relative; width: 100%; height: 100%; overflow: hidden; background: #000;';

    const canvas = document.createElement('canvas');
    canvas.width = stage.clientWidth;
    canvas.height = stage.clientHeight;
    stage.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    function animate() {
        if (!document.body.contains(canvas)) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw Spacetime Grid (Curved)
        ctx.strokeStyle = 'rgba(165, 180, 252, 0.3)';
        ctx.lineWidth = 1;

        const gridSize = 30;
        const time = Date.now() / 1000;

        for (let x = 0; x <= canvas.width; x += gridSize) {
            ctx.beginPath();
            for (let y = 0; y <= canvas.height; y += 5) {
                const dx = x - cx;
                const dy = y - cy;
                const dist = Math.sqrt(dx * dx + dy * dy);
                // Curvature formula
                const offset = Math.max(0, 1000 / (dist + 50)) * Math.sin(dist * 0.05 - time);

                // Simple pinch effect
                const pinch = Math.max(0, 1 - dist / 200);
                const px = x - dx * pinch * 0.3;
                const py = y - dy * pinch * 0.3;

                if (y === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.stroke();
        }

        for (let y = 0; y <= canvas.height; y += gridSize) {
            ctx.beginPath();
            for (let x = 0; x <= canvas.width; x += 5) {
                const dx = x - cx;
                const dy = y - cy;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const pinch = Math.max(0, 1 - dist / 200);
                const px = x - dx * pinch * 0.3;
                const py = y - dy * pinch * 0.3;

                if (x === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.stroke();
        }

        // Massive Object (Sun/Black Hole)
        ctx.beginPath();
        ctx.arc(cx, cy, 40, 0, Math.PI * 2);
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, 40);
        g.addColorStop(0, '#000');
        g.addColorStop(1, '#4338ca');
        ctx.fillStyle = g;
        ctx.fill();
        ctx.strokeStyle = '#a5b4fc';
        ctx.stroke();

        // Orbiting Particle
        const angle = time;
        const ox = cx + Math.cos(angle) * 120;
        const oy = cy + Math.sin(angle) * 120;

        ctx.beginPath();
        ctx.arc(ox, oy, 8, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.fill();

        safeRequestAnimationFrame(animate);
    }
    safeRequestAnimationFrame(animate);
}

// --- Renamed Views ---

function renderEM() {
    const stage = document.getElementById('em-stage');
    stage.innerHTML = '';
    stage.style.cssText = 'display: flex; flex-direction: column; align-items: center; padding: 2rem; width: 100%; overflow-y: auto;';

    // Title Section
    const titleSection = document.createElement('div');
    titleSection.style.cssText = 'text-align: center; margin-bottom: 2rem; max-width: 900px;';
    titleSection.innerHTML = `
        <h2 style="font-size: 2rem; margin-bottom: 1rem; background: linear-gradient(135deg, #fcd34d, #f59e0b); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
            ⚡ 电磁力：我们世界的隐秘引擎
        </h2>
        <p style="font-size: 1.1rem; opacity: 0.9; line-height: 1.6;">
            你能<strong>看到</strong>、<strong>摸到</strong>、<strong>听到</strong>的一切，几乎都由电磁力主宰。
        </p>
    `;
    stage.appendChild(titleSection);

    // Three Columns Container
    const columnsContainer = document.createElement('div');
    columnsContainer.style.cssText = `
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
        max-width: 900px;
        width: 100%;
        margin-bottom: 2rem;
    `;

    // Column 1: Chemistry & Life
    const gluonFieldBox = document.createElement('div');
    gluonFieldBox.style.cssText = `
        background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(167, 139, 250, 0.05));
        border: 2px solid rgba(139, 92, 246, 0.3);
        border-radius: 16px;
        padding: 1.5rem;
        margin-bottom: 2rem;
    `;
    gluonFieldBox.innerHTML = `
        <h3 style="color: #a78bfa; margin-bottom: 1rem;">💜 强力势能 (Gluon Field)</h3>
        <p style="line-height: 1.8; opacity: 0.9; margin-bottom: 1rem;">
            夸克被强力"弹簧"锁死，弹簧拉伸储存了巨大能量。
        </p>
        <canvas id="gluon-spring-canvas" width="600" height="200" style="width: 100%; max-width: 600px; margin: 1rem auto; display: block; background: rgba(0,0,0,0.2); border-radius: 12px;"></canvas>
        <p style="font-size: 0.85rem; opacity: 0.7; margin-top: 1rem; text-align: center; font-style: italic;">
            <strong>胶子通量管</strong>：拉伸产生的势能是质子质量的主要来源。
        </p>
    `;

    // Column 2: Daily Forces
    const col2 = document.createElement('div');
    col2.style.cssText = `
        background: linear-gradient(135deg, rgba(251, 191, 36, 0.15), rgba(245, 158, 11, 0.15));
        border: 2px solid #fbbf24;
        border-radius: 16px;
        padding: 1.2rem;
        text-align: center;
    `;
    col2.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 1rem;">⚙️</div>
        <h3 style="color: #fbbf24; margin-bottom: 1rem;">日常作用力</h3>
        <p style="font-size: 0.95rem; line-height: 1.6; opacity: 0.9;">
            你感受到的<strong>支持力、摩擦力、弹力</strong>，本质上都是原子间<strong>电荷的相互排斥与吸引</strong>。
        </p>
    `;

    // Column 3: Light, Sound, Heat
    const col3 = document.createElement('div');
    col3.style.cssText = `
        background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(220, 38, 38, 0.1));
        border: 2px solid #ef4444;
        border-radius: 16px;
        padding: 1.2rem;
        text-align: center;
    `;
    col3.innerHTML = `
        <div style="font-size: 3rem; margin-bottom: 1rem;">🌈</div>
        <h3 style="color: #ef4444; margin-bottom: 1rem;">光、声、热</h3>
        <p style="font-size: 0.95rem; line-height: 1.6; opacity: 0.9;">
            <strong>颜色</strong>是不同波长的电磁波，<strong>声音和热</strong>的传递依赖于分子间的跳跃，其背后也是电磁力。
        </p>
    `;

    columnsContainer.appendChild(col1);
    columnsContainer.appendChild(col2);
    columnsContainer.appendChild(col3);
    stage.appendChild(columnsContainer);

    // Visual Hierarchy (reuse existing Earth layers visual)
    const hierarchySection = document.createElement('div');
    hierarchySection.style.cssText = 'width: 100%; max-width: 900px;';
    createEarth(hierarchySection);
    stage.appendChild(hierarchySection);
}




// Add CSS animations
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    @keyframes scaleIn {from {transform: scale(0); } to {transform: scale(1); } }
    @keyframes pulse {0% { transform: scale(1); opacity: 0.2; } 50% {transform: scale(1.2); opacity: 0.4; } 100% {transform: scale(1); opacity: 0.2; } }
    @keyframes rotate {from {transform: rotate(0deg); } to {transform: rotate(360deg); } }
    @keyframes shakeBadge {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-2px) rotate(-1deg); }
        75% { transform: translateX(2px) rotate(1deg); }
    }
`;
document.head.appendChild(animationStyle);


// --- Symmetry View Logic (Noether's Theorem - Cosmic Loom Interactive) ---
let noetherCurrentSym = 0; // Global state for symmetry selection
let noetherControlValue = 0; // Slider/control value
let noetherSymmetryBroken = false; // NEW: Toggle for breaking symmetry

function renderSymmetry() {
    // Target the specific view section for Symmetry
    const stage = document.getElementById('view-symmetry');
    stage.innerHTML = ''; // Clear the old static HTML (right-side text, etc.)
    stage.style.cssText = 'display: flex; flex-direction: column; align-items: center; padding: 1.5rem; width: 100%; height: 100%; overflow-y: auto; background: linear-gradient(135deg, #0a0e27, #1a1d3a);';

    // Title with cosmic theme
    const title = document.createElement('h2');
    title.textContent = '🌌 诺特定理：对称性的织布机';
    title.style.cssText = 'margin-bottom: 0.5rem; font-size: 1.7rem; color: #a5b4fc;';
    stage.appendChild(title);

    const subtitle = document.createElement('p');
    subtitle.innerHTML = '<strong style="color: #818cf8;">对称性</strong> (蓝紫) → <strong style="color: #fbbf24;">守恒律</strong> (金色)';
    subtitle.style.cssText = 'font-size: 1rem; opacity: 0.9; margin-bottom: 1.5rem; text-align: center;';
    stage.appendChild(subtitle);

    // Symmetry data
    const symmetries = [
        { name: '空间平移', control: '空间位置', conservation: '动量', color: '#818cf8', conservationColor: '#fbbf24' },
        { name: '旋转', control: '方向/角度', conservation: '角动量', color: '#a78bfa', conservationColor: '#f59e0b' },
        { name: '时间平移', control: '时间', conservation: '能量', color: '#6366f1', conservationColor: '#fbbf24' }
    ];

    // Selector tabs (refined buttons)
    const selectorContainer = document.createElement('div');
    selectorContainer.style.cssText = 'display: flex; gap: 0.5rem; margin-bottom: 2rem; background: rgba(255,255,255,0.05); padding: 0.5rem; border-radius: 12px;';

    symmetries.forEach((sym, idx) => {
        const btn = document.createElement('button');
        btn.textContent = sym.name;
        btn.style.cssText = `
            padding: 0.7rem 1.2rem;
            background: ${idx === noetherCurrentSym ? sym.color : 'transparent'};
            border: 2px solid ${idx === noetherCurrentSym ? sym.color : 'rgba(255,255,255,0.2)'};
            border-radius: 8px;
            color: ${idx === noetherCurrentSym ? '#fff' : 'rgba(255,255,255,0.6)'};
            cursor: pointer;
            font-size: 0.95rem;
            transition: all 0.3s;
            font-weight: ${idx === noetherCurrentSym ? '600' : '400'};
        `;
        btn.onclick = () => {
            noetherCurrentSym = idx;
            noetherControlValue = 0; // Reset control
            renderSymmetry();
        };
        selectorContainer.appendChild(btn);
    });
    stage.appendChild(selectorContainer);

    // Main 3-panel layout
    const mainContainer = document.createElement('div');
    mainContainer.style.cssText = 'display: flex; gap: 1.5rem; width: 100%; max-width: 1100px; align-items: stretch;';

    const currentSym = symmetries[noetherCurrentSym];

    // === LEFT PANEL: Symmetry Control ===
    const controlPanel = document.createElement('div');
    controlPanel.style.cssText = `
        flex: 1;
        background: linear-gradient(135deg, ${currentSym.color}15, ${currentSym.color}08);
        border-radius: 16px;
        padding: 1.5rem;
        border: 2px solid ${currentSym.color}60;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    `;

    const controlTitle = document.createElement('h3');
    controlTitle.textContent = '🎛️ 对称性控制';
    controlTitle.style.cssText = `margin: 0; color: ${currentSym.color}; font-size: 1.1rem;`;
    controlPanel.appendChild(controlTitle);

    const controlDesc = document.createElement('p');
    controlDesc.textContent = currentSym.control;
    controlDesc.style.cssText = 'font-size: 0.85rem; opacity: 0.7; margin: 0.5rem 0 0 0;';
    controlPanel.appendChild(controlDesc);

    // NEW: Symmetry-Breaking Toggle
    const breakToggleContainer = document.createElement('div');
    breakToggleContainer.style.cssText = 'margin-top: 1rem; padding: 1rem; background: rgba(239, 68, 68, 0.1); border-radius: 8px; border: 1px solid rgba(239, 68, 68, 0.3);';

    const breakLabel = document.createElement('label');
    breakLabel.style.cssText = 'display: flex; align-items: center; gap: 0.5rem; cursor: pointer;';

    const breakCheckbox = document.createElement('input');
    breakCheckbox.type = 'checkbox';
    breakCheckbox.checked = noetherSymmetryBroken;
    breakCheckbox.style.cssText = 'width: 18px; height: 18px; cursor: pointer;';
    breakCheckbox.onchange = (e) => {
        noetherSymmetryBroken = e.target.checked;
        renderSymmetry();
    };

    const breakText = document.createElement('span');
    breakText.textContent = '⚠️ 破坏对称性';
    breakText.style.cssText = 'color: #ef4444; font-size: 0.9rem; font-weight: 600;';

    breakLabel.appendChild(breakCheckbox);
    breakLabel.appendChild(breakText);
    breakToggleContainer.appendChild(breakLabel);

    const breakHint = document.createElement('p');
    breakHint.textContent = noetherCurrentSym === 0 ? '力场随位置变化' : (noetherCurrentSym === 1 ? '空间不均匀' : '物理定律随时间变化');
    breakHint.style.cssText = 'margin: 0.5rem 0 0 0; font-size: 0.75rem; opacity: 0.7; color: #fca5a5;';
    breakToggleContainer.appendChild(breakHint);

    controlPanel.appendChild(breakToggleContainer);

    // Interactive slider/control
    const sliderContainer = document.createElement('div');
    sliderContainer.style.cssText = 'flex: 1; display: flex; flex-direction: column; justify-content: center;';

    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = '-100';
    slider.max = '100';
    slider.value = noetherControlValue;
    slider.style.cssText = `
        width: 100%;
        height: 8px;
        border-radius: 5px;
        background: linear-gradient(to right, ${currentSym.color}40, ${currentSym.color});
        outline: none;
        cursor: pointer;
    `;

    slider.oninput = (e) => {
        noetherControlValue = parseFloat(e.target.value);
        updateScene();
    };

    const sliderLabel = document.createElement('div');
    sliderLabel.textContent = `值: ${Math.round(noetherControlValue)}`;
    sliderLabel.style.cssText = `text-align: center; margin-top: 0.5rem; color: ${currentSym.color}; font-size: 0.9rem; font-weight: 600;`;

    function updateScene() {
        sliderLabel.textContent = `值: ${Math.round(noetherControlValue)}`;
        // Animation will read noetherControlValue
    }

    sliderContainer.appendChild(slider);
    sliderContainer.appendChild(sliderLabel);
    controlPanel.appendChild(sliderContainer);

    // === CENTER PANEL: Physics Scene ===
    const scenePanel = document.createElement('div');
    scenePanel.style.cssText = `
        flex: 2;
        background: rgba(0,0,0,0.4);
        border-radius: 16px;
        padding: 1.5rem;
        border: 2px solid rgba(255,255,255,0.1);
        display: flex;
        flex-direction: column;
        align-items: center;
    `;

    const sceneTitle = document.createElement('p');
    sceneTitle.textContent = noetherSymmetryBroken ? `⚠️ 对称性已破坏！` : `在任何${currentSym.control}做实验，结果都一样`;
    sceneTitle.style.cssText = `margin: 0 0 1rem 0; font-size: 0.9rem; opacity: 0.8; color: ${noetherSymmetryBroken ? '#ef4444' : '#fff'};`;
    // Move title positioning to avoid overlap with law indicator
    scenePanel.appendChild(sceneTitle);

    // NEW: Physical Law Indicator (repositioned to top-left to avoid overlap)
    const lawIndicator = document.createElement('div');
    lawIndicator.style.cssText = `
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background: ${noetherSymmetryBroken ? 'rgba(239, 68, 68, 0.2)' : 'rgba(34, 197, 94, 0.2)'};
        border: 2px solid ${noetherSymmetryBroken ? '#ef4444' : '#22c55e'};
        border-radius: 8px;
        padding: 0.4rem 0.7rem;
        font-size: 0.8rem;
        font-weight: 600;
        color: ${noetherSymmetryBroken ? '#fca5a5' : '#86efac'};
        display: flex;
        align-items: center;
        gap: 0.3rem;
        z-index: 10;
        ${noetherSymmetryBroken ? 'animation: shakeBadge 0.5s ease-in-out infinite;' : ''}
    `;

    let lawText = '';
    if (noetherCurrentSym === 0) {
        lawText = noetherSymmetryBroken ? 'F(x) 变化 ⚠️' : 'F = 常数 🔒';
    } else if (noetherCurrentSym === 1) {
        lawText = noetherSymmetryBroken ? 'V(θ) 不对称 ⚠️' : 'V(θ) 各向同性 🔒';
    } else {
        lawText = noetherSymmetryBroken ? 'g(t) 变化 ⚠️' : 'g = 9.8 m/s² 🔒';
    }
    lawIndicator.textContent = lawText;
    scenePanel.style.position = 'relative';
    scenePanel.appendChild(lawIndicator);

    const canvas = document.createElement('canvas');
    canvas.width = 450;
    canvas.height = 280;
    canvas.style.cssText = 'border: 1px solid rgba(255,255,255,0.15); border-radius: 8px; background: rgba(0,0,0,0.2);';
    scenePanel.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    // === RIGHT PANEL: Conservation Indicator ===
    const conservationPanel = document.createElement('div');
    conservationPanel.style.cssText = `
        flex: 1;
        background: linear-gradient(135deg, ${currentSym.conservationColor}18, ${currentSym.conservationColor}08);
        border-radius: 16px;
        padding: 1.5rem;
        border: 2px solid ${currentSym.conservationColor}60;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    `;

    conservationPanel.innerHTML = `
        <div style="text-align: center;">
            <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔒</div>
            <h3 style="color: ${currentSym.conservationColor}; margin: 0 0 0.5rem 0; font-size: 1.2rem;">${currentSym.conservation}守恒</h3>
            <p style="font-size: 0.85rem; opacity: 0.7; margin: 0;">对称性确保守恒</p>
        </div>
    `;

    // Conservation indicator (different for each type)
    const indicatorContainer = document.createElement('div');
    indicatorContainer.style.cssText = 'width: 100%; flex: 1; display: flex; align-items: center; justify-content: center;';
    indicatorContainer.id = 'conservation-indicator';
    conservationPanel.appendChild(indicatorContainer);

    mainContainer.appendChild(controlPanel);
    mainContainer.appendChild(scenePanel);

    // NEW: Action Principle Hint (δS = 0) - Connector between animation and conservation
    const actionHint = document.createElement('div');
    actionHint.style.cssText = `
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 0.5rem;
        gap: 0.3rem;
    `;

    // Arrow pointing right
    const arrow = document.createElement('div');
    arrow.textContent = '→';
    arrow.style.cssText = `
        font-size: 1.5rem;
        color: rgba(255, 255, 255, 0.3);
    `;

    // δS = 0 label with glow effect
    const deltaS = document.createElement('div');
    deltaS.innerHTML = '<i>δS</i> = 0';
    deltaS.style.cssText = `
        font-size: 0.75rem;
        color: ${noetherSymmetryBroken ? '#ef4444' : '#fbbf24'};
        background: rgba(0, 0, 0, 0.3);
        padding: 0.2rem 0.5rem;
        border-radius: 4px;
        border: 1px solid ${noetherSymmetryBroken ? '#ef444440' : '#fbbf2440'};
        font-weight: 500;
        box-shadow: 0 0 10px ${noetherSymmetryBroken ? '#ef444440' : '#fbbf2440'};
    `;

    // Explanation text (three-part pedagogical logic)
    const explanation = document.createElement('div');
    let explanationText = '';
    if (noetherCurrentSym === 0) {
        explanationText = '空间均匀 → 无势能梯度 → 动量守恒';
    } else if (noetherCurrentSym === 1) {
        explanationText = '各向同性 → 无扭矩 → 角动量守恒';
    } else {
        explanationText = '时间均匀 → 无额外成本 → 能量守恒';
    }
    explanation.textContent = explanationText;
    explanation.style.cssText = `
        font-size: 0.65rem;
        color: rgba(255, 255, 255, 0.6);
        text-align: center;
        max-width: 120px;
        line-height: 1.3;
    `;

    actionHint.appendChild(arrow);
    actionHint.appendChild(deltaS);
    actionHint.appendChild(explanation);
    mainContainer.appendChild(actionHint);

    mainContainer.appendChild(conservationPanel);
    stage.appendChild(mainContainer);

    // Animation logic
    let animT = 0;
    function animate() {
        if (currentView !== 'symmetry') return;
        if (!document.body.contains(canvas)) return;

        ctx.clearRect(0, 0, 450, 280);
        animT += 0.02;

        const controlOffset = noetherControlValue; // -100 to 100

        if (noetherCurrentSym === 0) {
            // Space Translation: "The Sliding Lab"
            // Concept: A physics experiment (collision) happens on a table.
            // Moving the table (Space Translation) doesn't change the collision physics.

            const tableX = 225 + (controlOffset * 1.5); // Table moves left/right
            const tableY = 200;

            // NEW: Grid Background (shows spatial uniformity)
            ctx.strokeStyle = noetherSymmetryBroken ? 'rgba(239, 68, 68, 0.1)' : 'rgba(129, 140, 248, 0.08)';
            ctx.lineWidth = 1;
            for (let x = (controlOffset * 1.5) % 40; x < 450; x += 40) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, 280);
                ctx.stroke();
            }

            // Draw Floor/Rail
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(0, tableY + 20);
            ctx.lineTo(450, tableY + 20);
            ctx.stroke();

            // Draw "Lab Table"
            ctx.fillStyle = noetherSymmetryBroken ? 'rgba(239, 68, 68, 0.1)' : 'rgba(129, 140, 248, 0.1)';
            ctx.strokeStyle = noetherSymmetryBroken ? '#ef4444' : '#818cf8';
            ctx.lineWidth = 2;
            ctx.fillRect(tableX - 100, tableY, 200, 10);
            ctx.strokeRect(tableX - 100, tableY, 200, 10);

            // Physics: Two pucks colliding on the table
            // The physics is calculated RELATIVE to the table center
            const period = 3;
            const phase = (animT % period) / period; // 0 to 1

            let p1x, p2x;
            // Simple elastic collision logic relative to table
            if (phase < 0.4) {
                // Approaching
                p1x = -80 + (phase / 0.4) * 80; // -80 to 0
                p2x = 80 - (phase / 0.4) * 80;  // 80 to 0
            } else if (phase < 0.6) {
                // Impact (brief pause/squish visual)
                p1x = 0;
                p2x = 0;
            } else {
                // Departing
                const departPhase = (phase - 0.6) / 0.4;
                p1x = -departPhase * 80;      // 0 to -80
                p2x = departPhase * 80;       // 0 to 80

                // NEW: Broken symmetry - momentum drift
                if (noetherSymmetryBroken) {
                    const driftFactor = (tableX / 225 - 1) * 30; // Force varies with position
                    p1x += departPhase * driftFactor;
                    p2x += departPhase * driftFactor;
                }
            }

            // Render Pucks (Absolute position = TableX + RelativeX)
            // Puck 1
            ctx.fillStyle = noetherSymmetryBroken ? '#ef4444' : '#818cf8';
            ctx.beginPath();
            ctx.arc(tableX + p1x - 12, tableY - 12, 12, 0, Math.PI * 2);
            ctx.fill();

            // Puck 2
            ctx.fillStyle = '#fbbf24';
            ctx.beginPath();
            ctx.arc(tableX + p2x + 12, tableY - 12, 12, 0, Math.PI * 2);
            ctx.fill();

            // Impact Flash
            if (phase >= 0.4 && phase < 0.6) {
                ctx.fillStyle = `rgba(255, 255, 255, ${Math.random()})`;
                ctx.beginPath();
                ctx.arc(tableX, tableY - 12, 15, 0, Math.PI * 2);
                ctx.fill();
            }

            // Caption
            ctx.fillStyle = '#fff';
            ctx.font = '14px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(noetherSymmetryBroken ? '力场不均匀，动量不守恒' : '实验台位置改变，碰撞规律不变', 225, 260);

            // Indicator: Pointer gauge (Momentum)
            updatePointerGauge(indicatorContainer, currentSym.conservationColor, noetherSymmetryBroken);

        } else if (noetherCurrentSym === 1) {
            // Rotation: "The Rotating Frame"
            // Concept: A planet orbits a star. Rotating the coordinate system (grid)
            // doesn't change the orbit's shape or speed.

            const centerX = 225;
            const centerY = 140;
            const rotationAngle = (controlOffset / 100) * Math.PI; // -PI to PI

            ctx.save();
            ctx.translate(centerX, centerY);

            // 1. Draw Coordinate System (The "Viewer")
            ctx.save();
            ctx.rotate(rotationAngle);

            // Grid lines (enhanced with broken symmetry feedback)
            ctx.strokeStyle = noetherSymmetryBroken ? 'rgba(239, 68, 68, 0.15)' : 'rgba(167, 139, 250, 0.15)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(-200, 0); ctx.lineTo(200, 0); // X-axis
            ctx.moveTo(0, -200); ctx.lineTo(0, 200); // Y-axis
            ctx.stroke();

            // Polar circles (distort when broken)
            if (noetherSymmetryBroken) {
                // Asymmetric field - elliptical distortion
                ctx.beginPath();
                ctx.ellipse(0, 0, 50, 40, Math.PI / 4, 0, Math.PI * 2);
                ctx.ellipse(0, 0, 100, 80, Math.PI / 4, 0, Math.PI * 2);
                ctx.stroke();
            } else {
                ctx.beginPath();
                ctx.arc(0, 0, 50, 0, Math.PI * 2);
                ctx.arc(0, 0, 100, 0, Math.PI * 2);
                ctx.stroke();
            }

            ctx.restore(); // End coordinate system rotation

            // 2. Draw Physics (The Orbit) - INDEPENDENT of rotationAngle visually,
            // but we want to show it relative to the frame? 
            // Actually, Noether says physics is invariant. 
            // If we rotate the LAB, the orbit rotates WITH the lab.
            // Let's rotate the ORBIT with the control to show "If I turn my head, the physics turns with me but stays valid"

            ctx.rotate(rotationAngle); // The physics frame rotates

            // Orbit Path (changes when broken)
            ctx.strokeStyle = noetherSymmetryBroken ? 'rgba(239, 68, 68, 0.3)' : 'rgba(251, 191, 36, 0.3)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            if (noetherSymmetryBroken) {
                // Asymmetric potential - spiraling orbit
                for (let t = 0; t < Math.PI * 2; t += 0.1) {
                    const r = 80 + Math.sin(t * 3) * 20;
                    const x = Math.cos(t) * r;
                    const y = Math.sin(t) * r * 0.6;
                    if (t === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
            } else {
                ctx.ellipse(0, 0, 100, 60, 0, 0, Math.PI * 2);
            }
            ctx.stroke();

            // Planet
            const orbitSpeed = noetherSymmetryBroken ? 1.5 * (1 + Math.sin(animT * 0.5) * 0.3) : 1.5;
            const planetAngle = animT * orbitSpeed;
            let px, py;
            if (noetherSymmetryBroken) {
                const r = 80 + Math.sin(planetAngle * 3) * 20;
                px = Math.cos(planetAngle) * r;
                py = Math.sin(planetAngle) * r * 0.6;
            } else {
                px = Math.cos(planetAngle) * 100;
                py = Math.sin(planetAngle) * 60;
            }

            ctx.fillStyle = noetherSymmetryBroken ? '#ef4444' : '#a78bfa';
            ctx.beginPath();
            ctx.arc(px, py, 10, 0, Math.PI * 2);
            ctx.fill();

            // Sun (Center)
            ctx.fillStyle = '#fbbf24'; // Gold sun
            ctx.beginPath();
            ctx.arc(0, 0, 15, 0, Math.PI * 2);
            ctx.fill();
            // Sun glow
            ctx.fillStyle = 'rgba(251, 191, 36, 0.3)';
            ctx.beginPath();
            ctx.arc(0, 0, 25, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();

            // Caption
            ctx.fillStyle = '#fff';
            ctx.font = '14px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(noetherSymmetryBroken ? '空间不对称，角动量不守恒' : '坐标系旋转，轨道形状不变', 225, 260);

            // Indicator: Rotating gear (Angular Momentum)
            updateGearIndicator(indicatorContainer, animT, currentSym.conservationColor, noetherSymmetryBroken);

        } else {
            // Time Translation: "The Eternal Pendulum"
            // Concept: Background changes (Day/Night), but pendulum swing is constant.

            const centerX = 225;
            const pivotY = 60;
            const stringLen = 140;

            // Time Control: -100 (Night) -> 0 (Day) -> 100 (Night)
            // Map control to a "Time of Day" cycle
            // Let's make it continuous: 0 = Noon, +/-100 = Midnight
            const timeVal = (controlOffset + 100) / 200; // 0 to 1

            // NEW: Temporal Grid Background (horizontal timeline)
            ctx.strokeStyle = noetherSymmetryBroken ? 'rgba(239, 68, 68, 0.08)' : 'rgba(99, 102, 241, 0.06)';
            ctx.lineWidth = 1;
            const gridOffset = (animT * 20) % 30;
            for (let y = gridOffset; y < 280; y += 30) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(450, y);
                ctx.stroke();
            }

            // Background Sky Gradient based on Time
            // 0/1 = Dark Blue/Black, 0.5 = Light Blue
            const skyDarkness = Math.abs(timeVal - 0.5) * 2; // 0 (Noon) to 1 (Midnight)

            // Draw Sky Window
            const r = Math.floor(135 * (1 - skyDarkness));
            const g = Math.floor(206 * (1 - skyDarkness));
            const b = Math.floor(235 * (1 - skyDarkness) + 20 * skyDarkness);
            const skyColor = `rgb(${r},${g},${b})`;

            ctx.fillStyle = skyColor;
            ctx.fillRect(100, 40, 250, 200);

            // Celestial Body (Sun or Moon)

            // Celestial Body (Sun/Moon) - High in the sky
            const celestialX = 120 + timeVal * 210;
            // Arc high up (Y=30 to Y=60)
            const celestialY = 60 - Math.sin(timeVal * Math.PI) * 30;

            if (skyDarkness > 0.6) {
                // Moon
                ctx.fillStyle = '#fff';
                ctx.beginPath();
                ctx.arc(celestialX, celestialY, 12, 0, Math.PI * 2);
                ctx.fill();
                // Crater details
                ctx.fillStyle = 'rgba(0,0,0,0.1)';
                ctx.beginPath();
                ctx.arc(celestialX - 3, celestialY + 2, 3, 0, Math.PI * 2);
                ctx.fill();
            } else {
                // Sun
                ctx.fillStyle = '#fbbf24';
                ctx.beginPath();
                ctx.arc(celestialX, celestialY, 18, 0, Math.PI * 2);
                ctx.fill();
                // Sun rays
                ctx.strokeStyle = 'rgba(251, 191, 36, 0.4)';
                ctx.lineWidth = 2;
                for (let i = 0; i < 8; i++) {
                    const ang = animT * 0.5 + i * (Math.PI / 4);
                    ctx.beginPath();
                    ctx.moveTo(celestialX + Math.cos(ang) * 22, celestialY + Math.sin(ang) * 22);
                    ctx.lineTo(celestialX + Math.cos(ang) * 30, celestialY + Math.sin(ang) * 30);
                    ctx.stroke();
                }
            }

            // Window Frame & Sill
            ctx.strokeStyle = 'rgba(255,255,255,0.3)';
            ctx.lineWidth = 6;
            ctx.strokeRect(100, 40, 250, 200);
            ctx.fillStyle = 'rgba(255,255,255,0.1)';
            ctx.fillRect(90, 240, 270, 10); // Sill

            // Pendulum Physics (Invariant, unless broken)
            let swingAmp = 0.5;
            if (noetherSymmetryBroken) {
                // Time-varying gravity causes chaotic amplitude changes
                swingAmp = 0.5 + Math.sin(animT * 0.7) * 0.3;
            }
            const swingAngle = Math.sin(animT * 2) * swingAmp;
            const bobX = centerX + Math.sin(swingAngle) * stringLen;
            const bobY = pivotY + Math.cos(swingAngle) * stringLen;

            // Draw Pendulum (Foreground)
            // Pivot point attached to frame (Lower down, below the sun's path)
            const actualPivotY = 80; // Attached to a crossbar or just lower

            // Draw a crossbar for the pendulum? Or just hang it from the top frame?
            // User said "hanging point below sun". Sun is at ~30-60. Pivot at 80 is below.

            ctx.fillStyle = '#ddd';
            ctx.beginPath();
            ctx.arc(centerX, actualPivotY, 6, 0, Math.PI * 2);
            ctx.fill();

            // String
            ctx.strokeStyle = noetherSymmetryBroken ? '#ef4444' : '#fff';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(centerX, actualPivotY);
            ctx.lineTo(bobX, bobY);
            ctx.stroke();

            // Bob
            ctx.fillStyle = noetherSymmetryBroken ? '#ef4444' : '#6366f1';
            ctx.beginPath();
            ctx.arc(bobX, bobY, 14, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 1;
            ctx.stroke();
            // Highlight (removed as per instruction, or implicitly by the new stroke)
            // The instruction doesn't explicitly remove the highlight, but it adds a stroke after the fill.
            // Given the context of changing the bob's appearance, I will assume the highlight is replaced by the new stroke.
            // If the highlight was intended to remain, the instruction would have included it.

            // Caption (moved to bottom to avoid overlap with sun)
            ctx.fillStyle = '#fff';
            ctx.font = '14px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(noetherSymmetryBroken ? 'g(t) 变化，能量不守恒' : '在任何时刻做实验，结果都一样', 225, 260);

            // Indicator: Liquid gauge (Energy)
            updateLiquidGauge(indicatorContainer, animT, currentSym.conservationColor, noetherSymmetryBroken);
        }

        safeRequestAnimationFrame(animate);
    }
    safeRequestAnimationFrame(animate);
}

// --- Enhanced Conservation Indicators ---

function updatePointerGauge(container, color, broken = false) {
    if (!container.querySelector('canvas')) {
        const canvas = document.createElement('canvas');
        canvas.width = 120;
        canvas.height = 120;
        container.appendChild(canvas);
    }

    const canvas = container.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 120, 120);

    const cx = 60, cy = 60, r = 45;

    // Gauge Background
    ctx.beginPath();
    ctx.arc(cx, cy, r, Math.PI * 0.75, Math.PI * 2.25);
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.lineWidth = 8;
    ctx.stroke();

    // Active Arc (Golden or Red)
    ctx.beginPath();
    ctx.arc(cx, cy, r, Math.PI * 0.75, Math.PI * 2.25); // Full range active
    ctx.strokeStyle = broken ? '#ef444440' : color + '40';
    ctx.lineWidth = 8;
    ctx.stroke();

    // Ticks
    ctx.strokeStyle = broken ? '#ef4444' : color;
    ctx.lineWidth = 2;
    for (let i = 0; i <= 10; i++) {
        const angle = Math.PI * 0.75 + (i / 10) * (Math.PI * 1.5);
        const innerR = (i === 5) ? r - 10 : r - 6;
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(angle) * innerR, cy + Math.sin(angle) * innerR);
        ctx.lineTo(cx + Math.cos(angle) * (r + 4), cy + Math.sin(angle) * (r + 4));
        ctx.stroke();
    }

    // Pointer (Locked at center or swinging wildly)
    let ptrAngle;
    if (broken) {
        // Wild swing
        ptrAngle = Math.PI * 1.5 + Math.sin(Date.now() * 0.01) * 0.8;
    } else {
        ptrAngle = Math.PI * 1.5; // Upright
    }
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(ptrAngle) * (r - 5), cy + Math.sin(ptrAngle) * (r - 5));
    ctx.stroke();

    // Center Cap
    ctx.fillStyle = broken ? '#ef4444' : color;
    ctx.beginPath();
    ctx.arc(cx, cy, 5, 0, Math.PI * 2);
    ctx.fill();

    // "LOCKED" or "WARNING" Text
    ctx.fillStyle = broken ? '#ef4444' : color;
    ctx.font = 'bold 10px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(broken ? '⚠️ 溢出' : 'LOCKED', cx, cy + 25);
}

function updateGearIndicator(container, time, color, broken = false) {
    if (!container.querySelector('canvas')) {
        const canvas = document.createElement('canvas');
        canvas.width = 120;
        canvas.height = 120;
        container.appendChild(canvas);
    }

    const canvas = container.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 120, 120);

    const cx = 60, cy = 60;

    // Gear rotation (steady or chaotic)
    let rotation;
    if (broken) {
        // Highly erratic speed with sudden jerks
        rotation = time * (2 + Math.sin(time * 1.5) * 1.5 + Math.cos(time * 2.3) * 0.8);
    } else {
        rotation = time * 2;
    }

    ctx.save();
    ctx.translate(cx, cy);

    // Add wobble when broken
    if (broken) {
        const wobble = Math.sin(time * 5) * 0.1;
        ctx.rotate(wobble);
        ctx.scale(1 + Math.sin(time * 3) * 0.05, 1 + Math.cos(time * 3) * 0.05);
    }

    ctx.rotate(rotation);

    // Gear Teeth
    const teeth = 12;
    const outerR = broken ? 35 + Math.sin(time * 4) * 3 : 35; // Vibrating radius
    const innerR = 28;

    ctx.fillStyle = broken ? '#ef4444' : color;
    ctx.beginPath();
    for (let i = 0; i < teeth; i++) {
        const angle1 = (i / teeth) * Math.PI * 2;
        const angle2 = ((i + 0.4) / teeth) * Math.PI * 2;
        const angle3 = ((i + 0.6) / teeth) * Math.PI * 2;
        const angle4 = ((i + 1) / teeth) * Math.PI * 2;

        // Add irregularity when broken
        const jitter = broken ? Math.sin(time * 8 + i) * 2 : 0;

        ctx.lineTo(Math.cos(angle1) * innerR, Math.sin(angle1) * innerR);
        ctx.lineTo(Math.cos(angle1) * (outerR + jitter), Math.sin(angle1) * (outerR + jitter));
        ctx.lineTo(Math.cos(angle2) * (outerR + jitter), Math.sin(angle2) * (outerR + jitter));
        ctx.lineTo(Math.cos(angle3) * (outerR + jitter), Math.sin(angle3) * (outerR + jitter));
        ctx.lineTo(Math.cos(angle4) * (outerR + jitter), Math.sin(angle4) * (outerR + jitter));
        ctx.lineTo(Math.cos(angle4) * innerR, Math.sin(angle4) * innerR);
    }
    ctx.closePath();
    ctx.fill();

    // Center hole
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.beginPath();
    ctx.arc(0, 0, 15, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();

    // Sparks/debris effect when broken
    if (broken) {
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 2;
        for (let i = 0; i < 8; i++) {
            const sparkAngle = rotation * 2 + i * (Math.PI / 4);
            const sparkDist = 40 + Math.random() * 10;
            const sparkLen = 5 + Math.random() * 5;

            ctx.beginPath();
            ctx.moveTo(cx + Math.cos(sparkAngle) * sparkDist, cy + Math.sin(sparkAngle) * sparkDist);
            ctx.lineTo(
                cx + Math.cos(sparkAngle) * (sparkDist + sparkLen),
                cy + Math.sin(sparkAngle) * (sparkDist + sparkLen)
            );
            ctx.globalAlpha = Math.random() * 0.5 + 0.3;
            ctx.stroke();
        }
        ctx.globalAlpha = 1;
    }

    // Warning text if broken
    if (broken) {
        ctx.fillStyle = '#ef4444';
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('⚠️ 不稳定', cx, cy + 50);
    }
}

function updateLiquidGauge(container, time, color, broken = false) {
    if (!container.querySelector('canvas')) {
        // Replace DOM-based liquid with Canvas for wave animation
        container.innerHTML = '';
        const canvas = document.createElement('canvas');
        canvas.width = 80;
        canvas.height = 140;
        canvas.style.cssText = `border: 2px solid ${broken ? '#ef4444' : color}; border-radius: 8px; background: rgba(0,0,0,0.3);`;
        container.appendChild(canvas);

        // Label overlay
        const label = document.createElement('div');
        label.textContent = broken ? '⚠️' : '守恒';
        label.style.cssText = `
            position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
            font-weight: 700; color: ${broken ? '#ef4444' : '#fff'}; font-size: 1rem; text-shadow: 0 0 4px rgba(0,0,0,0.8); pointer-events: none;
        `;
        container.style.position = 'relative';
        container.appendChild(label);
    }

    const canvas = container.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 80, 140);

    // Liquid Physics (constant or overflowing)
    let fillHeight = 100; // From bottom
    if (broken) {
        // Chaotic overflow - liquid spills over
        fillHeight = 100 + Math.sin(time * 3) * 40;
    }
    const surfaceY = 140 - fillHeight;

    // Draw Wave Surface
    ctx.beginPath();
    ctx.moveTo(0, 140);
    ctx.lineTo(0, surfaceY);

    // Sine wave surface
    for (let x = 0; x <= 80; x++) {
        const wave = Math.sin(x * 0.1 + time * 3) * (broken ? 5 : 3); // Larger waves when broken
        ctx.lineTo(x, surfaceY + wave);
    }

    ctx.lineTo(80, 140);
    ctx.closePath();

    // Fill Gradient
    const gradient = ctx.createLinearGradient(0, surfaceY, 0, 140);
    const fillColor = broken ? '#ef4444' : color;
    gradient.addColorStop(0, fillColor);
    gradient.addColorStop(1, fillColor + '60');
    ctx.fillStyle = gradient;
    ctx.fill();

    // Bubbles
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    for (let i = 0; i < 5; i++) {
        const bx = (Math.sin(time + i) * 40 + 40);
        const by = 140 - ((time * 20 + i * 30) % fillHeight);
        if (by > surfaceY) {
            ctx.beginPath();
            ctx.arc(bx, by, 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}


// --- Everyday Physics View Logic (EM Tree) ---
// --- Everyday Physics View Logic (EM Tree) ---
// Removed in favor of renderEM (using createEarth)


// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    console.log("Initializing Standard Model Visualization...");

    // Initialize Canvas & Particles
    resize();
    initParticles();
    animate();

    // Initialize View
    // Default to Home View
    switchView('home');

    // Ensure Home View renders even if switchView doesn't trigger it due to some race condition
    renderHomeTriangle();

    console.log("Initialization Complete.");
});

// --- Symmetry Breaking View Logic ---
function renderSymmetryBreaking() {
    const stage = document.getElementById('view-symmetry-breaking');

    // CRITICAL FIX: Clear any inline styles (like display: flex) that might override CSS classes
    // This ensures switchView can correctly hide this section using classes.
    stage.removeAttribute('style');
    stage.innerHTML = '';

    // Create a wrapper for the layout instead of applying it to the stage directly
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'width: 100%; height: 100%; overflow-y: auto; padding: 2rem; display: flex; flex-direction: column; align-items: center;';

    // Title Section
    const titleBox = document.createElement('div');
    titleBox.style.cssText = 'text-align: center; margin-bottom: 3rem;';
    titleBox.innerHTML = `
        <h2 style="font-size: 2.5rem; margin-bottom: 0.5rem; background: linear-gradient(to right, #ef4444, #fcd34d); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
            对称性的破缺与重建
        </h2>
        <p style="font-size: 1.1rem; color: rgba(255,255,255,0.7); font-style: italic;">
            上帝是个左撇子？从宇称不守恒到 CPT 定理
        </p>
    `;
    wrapper.appendChild(titleBox);

    // ==========================================
    // MAIN 3-COLUMN GRID LAYOUT
    // ==========================================
    const mainGrid = document.createElement('div');
    mainGrid.style.cssText = 'display: grid; grid-template-columns: 1fr 0.8fr 1fr; gap: 1.5rem; width: 100%; max-width: 1400px; align-items: start; height: calc(100% - 100px);';

    // ==========================================
    // COLUMN 1: The Broken Mirror (Wu Experiment) - LEFT
    // ==========================================
    const col1 = document.createElement('div');
    col1.style.cssText = 'width: 100%; display: flex; flex-direction: column; height: 100%;';

    const s1Header = document.createElement('div');
    s1Header.innerHTML = `
        <h3 style="color: #fff; border-left: 4px solid #ef4444; padding-left: 1rem; margin-bottom: 0.5rem; font-size: 1.1rem;">
            1. 镜中世界 (Wu Experiment)
        </h3>
        <p style="color: #aaa; margin-bottom: 1rem; font-size: 0.8rem;">
            上帝是个左撇子？弱相互作用下宇称不守恒。
        </p>
    `;
    col1.appendChild(s1Header);

    const experimentContainer = document.createElement('div');
    experimentContainer.style.cssText = `
        background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px;
        padding: 1rem; display: flex; flex-direction: column; align-items: center; flex-grow: 1; min-height: 500px;
    `;

    // Controls
    const toggleContainer = document.createElement('div');
    toggleContainer.style.cssText = 'display: flex; gap: 0.5rem; margin-bottom: 1rem; background: rgba(255,255,255,0.05); padding: 0.3rem; border-radius: 30px; width: 100%; justify-content: center;';

    let currentForce = 'em'; // 'em' or 'weak'

    const btnEm = document.createElement('button');
    btnEm.textContent = '电磁力 (对称)';
    btnEm.className = 'nav-btn active';
    btnEm.style.cssText = 'padding: 0.4rem 1rem; border-radius: 20px; border: none; cursor: pointer; background: #3b82f6; color: white; transition: all 0.3s; font-size: 0.8rem; flex: 1;';

    const btnWeak = document.createElement('button');
    btnWeak.textContent = '弱相互作用 (破缺)';
    btnWeak.className = 'nav-btn';
    btnWeak.style.cssText = 'padding: 0.4rem 1rem; border-radius: 20px; border: none; cursor: pointer; background: transparent; color: rgba(255,255,255,0.6); transition: all 0.3s; font-size: 0.8rem; flex: 1;';

    btnEm.onclick = () => {
        currentForce = 'em';
        btnEm.style.background = '#3b82f6'; btnEm.style.color = 'white';
        btnWeak.style.background = 'transparent'; btnWeak.style.color = 'rgba(255,255,255,0.6)';
    };

    btnWeak.onclick = () => {
        currentForce = 'weak';
        btnWeak.style.background = '#ef4444'; btnWeak.style.color = 'white';
        btnEm.style.background = 'transparent'; btnEm.style.color = 'rgba(255,255,255,0.6)';
    };

    toggleContainer.appendChild(btnEm);
    toggleContainer.appendChild(btnWeak);
    experimentContainer.appendChild(toggleContainer);

    // Canvas (Vertical Layout)
    const wuCanvas = document.createElement('canvas');
    wuCanvas.width = 300;
    wuCanvas.height = 400; // Taller for vertical stack
    wuCanvas.style.cssText = 'width: 100%; background: radial-gradient(circle at center, rgba(20,20,30,1), rgba(0,0,0,0)); border-radius: 8px; flex-grow: 1;';
    experimentContainer.appendChild(wuCanvas);

    const wuCtx = wuCanvas.getContext('2d');

    col1.appendChild(experimentContainer);
    mainGrid.appendChild(col1);

    // ==========================================
    // COLUMN 2: The Domino Effect (C, P, T) - CENTER
    // ==========================================
    const col2 = document.createElement('div');
    col2.style.cssText = 'width: 100%; display: flex; flex-direction: column; height: 100%;';

    const s2Header = document.createElement('div');
    s2Header.innerHTML = `
        <h3 style="color: #fff; border-left: 4px solid #f59e0b; padding-left: 1rem; margin-bottom: 0.5rem; font-size: 1.1rem;">
            2. 多米诺骨牌
        </h3>
        <p style="color: #aaa; margin-bottom: 1rem; font-size: 0.8rem;">
            对称性相继破碎。
        </p>
    `;
    col2.appendChild(s2Header);

    // NEW: Container for Center Column to match others
    const centerContainer = document.createElement('div');
    centerContainer.style.cssText = `
        background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px;
        padding: 1rem; display: flex; flex-direction: column; gap: 0.8rem; flex-grow: 1; min-height: 500px;
    `;

    const symmetries = [
        { id: 'P', label: '宇称 (P)', icon: '🪞', desc: '空间反演不对称', detail: '镜中物理定律不同' },
        { id: 'C', label: '电荷 (C)', icon: '⚡', desc: '正反物质不对称', detail: '反物质消失之谜' },
        { id: 'T', label: '时间 (T)', icon: '⏳', desc: '时间反演不对称', detail: '时间有方向性' }
    ];

    symmetries.forEach(sym => {
        const card = document.createElement('div');
        card.className = 'symmetry-card';
        card.style.cssText = `
            background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px;
            padding: 0.8rem; text-align: center; cursor: pointer; transition: all 0.3s; position: relative; overflow: hidden;
            display: flex; align-items: center; gap: 1rem; text-align: left;
        `;

        card.innerHTML = `
            <div class="sym-icon-container" style="width: 3rem; height: 3rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <div class="sym-icon" style="font-size: 2rem; transition: transform 0.3s;">${sym.icon}</div>
            </div>
            <div style="flex-grow: 1;">
                <h4 style="color: #fff; margin: 0; font-size: 0.9rem;">${sym.label}</h4>
                <div class="sym-status" style="color: #4ade80; font-size: 0.7rem; font-weight: bold;">SYMMETRIC</div>
            </div>
        `;

        let broken = false;
        card.onclick = () => {
            if (broken) return;
            broken = true;
            card.style.borderColor = '#ef4444';
            card.style.background = 'rgba(239, 68, 68, 0.1)';

            const iconContainer = card.querySelector('.sym-icon-container');
            iconContainer.innerHTML = '';

            const shatterBox = document.createElement('div');
            shatterBox.style.cssText = 'position: relative; width: 2rem; height: 2.5rem;';

            const halfLeft = document.createElement('div');
            halfLeft.textContent = sym.icon;
            halfLeft.style.cssText = `
                position: absolute; top: 0; left: 0; width: 100%; height: 100%; font-size: 2rem;
                clip-path: polygon(0 0, 60% 0, 40% 100%, 0 100%); 
                transform: translateX(-3px) rotate(-15deg); 
                filter: drop-shadow(-1px 1px 0px rgba(239,68,68,0.5));
                animation: shatterLeft 0.5s ease-out forwards;
            `;

            const halfRight = document.createElement('div');
            halfRight.textContent = sym.icon;
            halfRight.style.cssText = `
                position: absolute; top: 0; left: 0; width: 100%; height: 100%; font-size: 2rem;
                clip-path: polygon(60% 0, 100% 0, 100% 100%, 40% 100%); 
                transform: translateX(3px) rotate(15deg);
                filter: drop-shadow(1px 1px 0px rgba(239,68,68,0.5));
                animation: shatterRight 0.5s ease-out forwards;
            `;

            shatterBox.appendChild(halfLeft);
            shatterBox.appendChild(halfRight);
            iconContainer.appendChild(shatterBox);

            const status = card.querySelector('.sym-status');
            status.textContent = 'BROKEN';
            status.style.color = '#ef4444';
            status.style.textShadow = '1px 0 #000, -1px 0 #000';
        };

        centerContainer.appendChild(card);
    });

    col2.appendChild(centerContainer);
    mainGrid.appendChild(col2);

    // ==========================================
    // COLUMN 3: The Ultimate Crystal (CPT) - RIGHT
    // ==========================================
    const col3 = document.createElement('div');
    col3.style.cssText = 'width: 100%; display: flex; flex-direction: column; height: 100%;';

    const s3Header = document.createElement('div');
    s3Header.innerHTML = `
        <h3 style="color: #fff; border-left: 4px solid #3b82f6; padding-left: 1rem; margin-bottom: 0.5rem; font-size: 1.1rem;">
            3. 终极秩序 (CPT)
        </h3>
        <p style="color: #aaa; margin-bottom: 1rem; font-size: 0.8rem;">
            C、P、T 联合变换，物理定律依然完美。
        </p>
    `;
    col3.appendChild(s3Header);

    const cptContainer = document.createElement('div');
    cptContainer.style.cssText = `
        background: linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.8));
        border: 1px solid #3b82f6; border-radius: 16px; padding: 1rem;
        display: flex; flex-direction: column; align-items: center;
        box-shadow: 0 0 20px rgba(59, 130, 246, 0.1); flex-grow: 1; min-height: 500px;
    `;

    // CPT Machine UI
    const machineDisplay = document.createElement('div');
    machineDisplay.style.cssText = 'width: 100%; height: 150px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem; position: relative;';

    const cptCanvas = document.createElement('canvas');
    cptCanvas.width = 300;
    cptCanvas.height = 150;
    machineDisplay.appendChild(cptCanvas);

    const particleInfo = document.createElement('div');
    particleInfo.style.cssText = 'position: absolute; bottom: 0; text-align: center; width: 100%;';
    particleInfo.innerHTML = `
        <div id="cpt-name" style="color: #fff; font-weight: bold; margin-bottom: 0.1rem; font-size: 0.9rem;">左旋中微子</div>
        <div id="cpt-status" style="font-size: 0.7rem; color: #aaa;">Left-handed Neutrino</div>
    `;
    machineDisplay.appendChild(particleInfo);
    cptContainer.appendChild(machineDisplay);

    // Step Indicators
    const stepsContainer = document.createElement('div');
    stepsContainer.style.cssText = 'display: flex; gap: 0.8rem; margin-bottom: 1rem;';

    const steps = ['P', 'C', 'T'];
    const stepEls = {};

    steps.forEach(step => {
        const el = document.createElement('div');
        el.style.cssText = `
            width: 36px; height: 36px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.2);
            display: flex; align-items: center; justify-content: center; font-weight: bold; color: rgba(255,255,255,0.5);
            transition: all 0.3s; font-size: 0.9rem;
        `;
        el.textContent = step;
        stepEls[step] = el;
        stepsContainer.appendChild(el);
    });
    cptContainer.appendChild(stepsContainer);

    // Controls
    const controlsDiv = document.createElement('div');
    controlsDiv.style.cssText = 'display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center;';

    const btnP = document.createElement('button');
    btnP.textContent = '1. 宇称(P)';
    btnP.className = 'nav-btn';
    btnP.style.fontSize = '0.8rem'; btnP.style.padding = '0.4rem 0.8rem';

    const btnC = document.createElement('button');
    btnC.textContent = '2. 电荷(C)';
    btnC.className = 'nav-btn';
    btnC.disabled = true;
    btnC.style.opacity = '0.5';
    btnC.style.fontSize = '0.8rem'; btnC.style.padding = '0.4rem 0.8rem';

    const btnT = document.createElement('button');
    btnT.textContent = '3. 时间(T)';
    btnT.className = 'nav-btn';
    btnT.disabled = true;
    btnT.style.opacity = '0.5';
    btnT.style.fontSize = '0.8rem'; btnT.style.padding = '0.4rem 0.8rem';

    // Logic State
    let cptState = {
        p: false, // Parity flipped?
        c: false, // Charge flipped?
        t: false, // Time flipped?
        stage: 0 // 0: Start, 1: P done, 2: C done, 3: T done
    };

    function updateCPTVisuals() {
        const nameEl = document.getElementById('cpt-name');
        const statusEl = document.getElementById('cpt-status');

        if (cptState.stage === 0) {
            nameEl.textContent = '左旋中微子';
            statusEl.textContent = 'Left-handed Neutrino';
            statusEl.style.color = '#aaa';
        } else if (cptState.stage === 1) {
            nameEl.textContent = '右旋中微子';
            statusEl.textContent = '❌ 404 Not Found';
            statusEl.style.color = '#ef4444';
            stepEls['P'].style.borderColor = '#ef4444';
            stepEls['P'].style.color = '#ef4444';
            stepEls['P'].style.background = 'rgba(239, 68, 68, 0.1)';
        } else if (cptState.stage === 2) {
            nameEl.textContent = '右旋反中微子';
            statusEl.textContent = '⚠️ 反物质 (Antimatter)';
            statusEl.style.color = '#f59e0b';
            stepEls['C'].style.borderColor = '#f59e0b';
            stepEls['C'].style.color = '#f59e0b';
            stepEls['C'].style.background = 'rgba(245, 158, 11, 0.1)';
        } else if (cptState.stage === 3) {
            nameEl.textContent = 'CPT 守恒态';
            statusEl.textContent = '✨ 物理定律成立';
            statusEl.style.color = '#ffd700'; // Gold

            // Unify all indicators to Gold
            ['P', 'C', 'T'].forEach(k => {
                stepEls[k].style.borderColor = '#ffd700';
                stepEls[k].style.color = '#ffd700';
                stepEls[k].style.background = 'rgba(255, 215, 0, 0.2)';
                stepEls[k].style.boxShadow = '0 0 10px rgba(255, 215, 0, 0.3)';
            });

            // Unify Buttons to Gold
            btnP.style.borderColor = '#ffd700'; btnP.style.color = '#ffd700';
            btnC.style.borderColor = '#ffd700'; btnC.style.color = '#ffd700';
            btnT.style.borderColor = '#ffd700'; btnT.style.color = '#ffd700';

            // Success message
            if (!document.getElementById('cpt-success')) {
                const successMsg = document.createElement('div');
                successMsg.id = 'cpt-success';
                successMsg.innerHTML = '✨ <strong>CPT 联合守恒验证通过！</strong>';
                successMsg.style.cssText = 'margin-top: 1rem; color: #ffd700; text-align: center; animation: fadeIn 1s; font-size: 0.9rem;';
                cptContainer.appendChild(successMsg);
            }
        }
    }

    btnP.onclick = () => {
        cptState.p = true;
        cptState.stage = 1;
        updateCPTVisuals();
        btnP.disabled = true; btnP.style.opacity = '0.5';
        btnC.disabled = false; btnC.style.opacity = '1';
    };

    btnC.onclick = () => {
        cptState.c = true;
        cptState.stage = 2;
        updateCPTVisuals();
        btnC.disabled = true; btnC.style.opacity = '0.5';
        btnT.disabled = false; btnT.style.opacity = '1';
    };

    btnT.onclick = () => {
        cptState.t = true;
        cptState.stage = 3;
        updateCPTVisuals();
        btnT.disabled = true; btnT.style.opacity = '1'; // Keep opacity 1 for gold effect
    };

    controlsDiv.appendChild(btnP);
    controlsDiv.appendChild(btnC);
    controlsDiv.appendChild(btnT);
    cptContainer.appendChild(controlsDiv);

    col3.appendChild(cptContainer);
    mainGrid.appendChild(col3);

    wrapper.appendChild(mainGrid);

    stage.appendChild(wrapper);

    // Animation Loop for Wu Experiment & CPT Machine
    function animateSymmetryBreaking() {
        if (currentView !== 'symmetry-breaking') return;

        const t = Date.now() / 1000;

        // --- Wu Experiment Animation ---
        if (document.body.contains(wuCanvas)) {
            wuCtx.clearRect(0, 0, 300, 400); // Updated dimensions

            // Draw "Mirror" Line (Horizontal)
            wuCtx.save();
            wuCtx.strokeStyle = 'rgba(255,255,255,0.2)';
            wuCtx.lineWidth = 2;
            wuCtx.beginPath();
            wuCtx.moveTo(20, 200);
            wuCtx.lineTo(280, 200);
            wuCtx.stroke();
            wuCtx.restore();

            // Labels
            wuCtx.fillStyle = '#fff';
            wuCtx.font = '12px Arial';
            wuCtx.textAlign = 'center';
            wuCtx.fillText('现实世界 (Reality)', 150, 30);
            wuCtx.fillText('镜像世界 (Mirror)', 150, 230);

            // --- Particle Drawing Helper ---
            function drawParticle(ctx, x, y, isLeftHanded, isGhost) {
                ctx.save();
                ctx.translate(x, y);

                if (isGhost) {
                    ctx.globalAlpha = 0.3;
                }

                // Momentum Arrow (Direction of motion)
                // In vertical layout, let's say they move horizontally?
                // Or maybe they spin?
                // Let's keep horizontal motion for clarity.
                const dir = 1; // Always move right for simplicity in this view?
                // Or: Reality moves Right, Mirror moves Right (Reflection of motion parallel to mirror is same)
                // Wait, if mirror is horizontal (floor), and particle moves parallel to it (horizontal),
                // then reflection moves same direction.
                // Spin: If spin is horizontal (along momentum),
                // Left Handed (Spin opposite to Momentum).
                // Reflection: Momentum same. Spin?
                // Axial vector reflection in horizontal mirror:
                // Spin component parallel to mirror stays same?
                // No, let's stick to the standard Wu experiment diagram but rotated?
                // Standard: Mirror is vertical.
                // If I use horizontal mirror (floor):
                // Reality: Move Right. Spin Left (Backwards). -> Left Handed.
                // Mirror: Move Right. Spin Left (Backwards). -> Left Handed?
                // Wait.
                // Let's stick to the "Visual Result":
                // Reality: Left Handed.
                // Mirror: Right Handed.

                // Draw Particle Sphere
                const grad = ctx.createRadialGradient(0, 0, 5, 0, 0, 20);
                grad.addColorStop(0, '#fff');
                grad.addColorStop(0.5, '#3b82f6');
                grad.addColorStop(1, 'rgba(59, 130, 246, 0)');
                ctx.fillStyle = grad;
                ctx.beginPath();
                ctx.arc(0, 0, 15, 0, Math.PI * 2);
                ctx.fill();

                // Draw Momentum Vector (Thick Arrow)
                ctx.strokeStyle = '#fff';
                ctx.lineWidth = 4;
                ctx.beginPath();
                ctx.moveTo(-20, 0);
                ctx.lineTo(60, 0);
                ctx.stroke();

                // Arrow Head
                ctx.beginPath();
                ctx.moveTo(60, 0);
                ctx.lineTo(45, -8);
                ctx.lineTo(45, 8);
                ctx.fill();

                // Draw Spin (Helical Coil)
                ctx.lineWidth = 2;
                ctx.strokeStyle = '#fcd34d'; // Gold for spin

                // Draw "Back" part
                ctx.beginPath();
                const spiralLen = 60;
                const freq = 0.3;
                for (let i = 0; i < spiralLen; i++) {
                    const px = i - 20;
                    // isLeftHanded: Spin opposite to motion?
                    // Let's just visualize the chirality difference.
                    // Left: Counter-clockwise?
                    const phase = (t * 10) + (isLeftHanded ? i * freq : -i * freq);
                    const py = Math.sin(phase) * 15;
                    const pz = Math.cos(phase);

                    if (pz < 0) { // Behind
                        ctx.lineTo(px, py);
                    } else {
                        ctx.moveTo(px, py);
                    }
                }
                ctx.stroke();

                // Draw "Front" part
                ctx.beginPath();
                for (let i = 0; i < spiralLen; i++) {
                    const px = i - 20;
                    const phase = (t * 10) + (isLeftHanded ? i * freq : -i * freq);
                    const py = Math.sin(phase) * 15;
                    if (i === 0) ctx.moveTo(px, py);
                    else ctx.lineTo(px, py);
                }
                ctx.stroke();

                // Ghost/Error Overlay
                if (isGhost) {
                    // Draw Red X
                    ctx.strokeStyle = '#ef4444';
                    ctx.lineWidth = 5;
                    ctx.beginPath();
                    ctx.moveTo(-20, -20);
                    ctx.lineTo(20, 20);
                    ctx.moveTo(20, -20);
                    ctx.lineTo(-20, 20);
                    ctx.stroke();

                    // Error Text
                    ctx.fillStyle = '#ef4444';
                    ctx.font = 'bold 16px Arial';
                    ctx.fillText('404 Not Found', 0, 40);
                }

                ctx.restore();
            }

            // Reality: Always Left-Handed
            drawParticle(wuCtx, 130, 100, true, false);

            // Mirror:
            // If EM (Symmetric): Mirror is also Left Handed (Visual trick to show symmetry? No, Mirror of LH is RH).
            // Wait. In EM, Parity is conserved. So if nature allows LH, does it allow RH?
            // Yes, EM is symmetric.
            // But Wu experiment is about Weak force.
            // In Weak force (Broken):
            // Reality has LH.
            // Mirror has RH.
            // But RH neutrinos don't exist. -> Error.

            // So:
            // Reality: LH.
            // Mirror Reflection: RH.
            // If Weak (Broken): RH is "404".
            // If EM (Symmetric): RH is "OK" (Just a reflection).

            const isWeak = (currentForce === 'weak');
            drawParticle(wuCtx, 130, 300, false, isWeak); // False = Right-Handed
        }

        // --- CPT Machine Animation ---
        if (document.body.contains(cptCanvas)) {
            cptCtx.clearRect(0, 0, 300, 150); // Reduced height

            const cx = 150, cy = 75; // Adjusted Y
            cptCtx.save();
            cptCtx.translate(cx, cy);

            // Particle State based on CPT
            // Base: Left-handed Neutrino (Cyan)
            // P: Right-handed Neutrino (Cyan, flipped) -> Error
            // C: Right-handed Antineutrino (Orange, flipped) -> Antimatter
            // T: Right-handed Antineutrino moving backwards? -> CPT Conserved (Gold)

            let color = '#06b6d4'; // Cyan
            let scaleX = 1;
            let timeDir = 1;
            let glowColor = 'rgba(6, 182, 212, 0)';

            if (cptState.stage >= 1) { // P applied
                scaleX = -1; // Mirror flip
            }
            if (cptState.stage >= 2) { // C applied
                color = '#f97316'; // Orange (Antimatter)
                glowColor = 'rgba(249, 115, 22, 0.2)';
            }
            if (cptState.stage >= 3) { // T applied
                timeDir = -1; // Time reversal
                color = '#ffd700'; // Gold (Victory)
                glowColor = 'rgba(255, 215, 0, 0.5)';
            }

            // Draw Particle
            cptCtx.scale(scaleX, 1); // Apply Parity Flip

            // Glow
            const grad = cptCtx.createRadialGradient(0, 0, 10, 0, 0, 40);
            grad.addColorStop(0, color);
            grad.addColorStop(1, 'rgba(0,0,0,0)');
            cptCtx.fillStyle = grad;
            cptCtx.beginPath();
            cptCtx.arc(0, 0, 40, 0, Math.PI * 2);
            cptCtx.fill();

            // Core
            cptCtx.fillStyle = '#fff';
            cptCtx.beginPath();
            cptCtx.arc(0, 0, 10, 0, Math.PI * 2);
            cptCtx.fill();

            // Trail / Spin
            cptCtx.strokeStyle = color;
            cptCtx.lineWidth = 2;
            cptCtx.beginPath();
            for (let i = 0; i < 3; i++) {
                cptCtx.beginPath();
                // Time reversal affects animation direction
                const angle = (t * 5 * timeDir) + (i * (Math.PI * 2 / 3));
                cptCtx.ellipse(0, 0, 30, 10, angle, 0, Math.PI * 2);
                cptCtx.stroke();
            }

            cptCtx.restore();
        }

        safeRequestAnimationFrame(animateSymmetryBreaking);
    }

    // Initial Draw Call to ensure icon is visible immediately
    // We mock a time 0 for the initial frame
    if (document.body.contains(cptCanvas)) {
        // Force one render immediately
        const cx = 150, cy = 75; // Adjusted Y
        const cptCtx = cptCanvas.getContext('2d');
        cptCtx.clearRect(0, 0, 300, 150); // Adjusted height
        cptCtx.save();
        cptCtx.translate(cx, cy);

        // Default State (Left-handed Neutrino)
        const color = '#06b6d4';
        const grad = cptCtx.createRadialGradient(0, 0, 10, 0, 0, 40);
        grad.addColorStop(0, color);
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        cptCtx.fillStyle = grad;
        cptCtx.beginPath();
        cptCtx.arc(0, 0, 40, 0, Math.PI * 2);
        cptCtx.fill();
        cptCtx.fillStyle = '#fff';
        cptCtx.beginPath();
        cptCtx.arc(0, 0, 10, 0, Math.PI * 2);
        cptCtx.fill();
        cptCtx.strokeStyle = color;
        cptCtx.lineWidth = 2;
        cptCtx.beginPath();
        for (let i = 0; i < 3; i++) {
            cptCtx.beginPath();
            const angle = (i * (Math.PI * 2 / 3));
            cptCtx.ellipse(0, 0, 30, 10, angle, 0, Math.PI * 2);
            cptCtx.stroke();
        }
        cptCtx.restore();
    }

    safeRequestAnimationFrame(animateSymmetryBreaking);
}
