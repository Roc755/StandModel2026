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
    const mSpin = document.getElementById('modal-spin');
    const mDecay = document.getElementById('modal-decay-container');
    const mLifetime = document.querySelector('.modal-lifetime');
    const mForces = document.querySelector('.modal-forces');
    const mRelation = document.querySelector('.modal-relation');

    if (!modal || !closeBtn) {
        console.error('Modal elements not found');
        return;
    }

    // Decay Relationships
    const decayMap = {
        'top': ['bottom', 'w-boson'],
        'higgs': ['bottom', 'w-boson', 'z-boson', 'photon'], // Added bottom (bb)
        'neutron': ['proton', 'electron', 'electron-neutrino'],
        'charm': ['strange', 'w-boson'],
        'bottom': ['charm', 'w-boson'],
        'strange': ['up', 'w-boson'],
        'muon': ['muon-neutrino', 'w-boson'], // Updated to match text (νμ + W*)
        'tau': ['tau-neutrino', 'w-boson'], // Updated to match text (ντ + W*)
        'w-boson': ['electron', 'muon', 'tau', 'up', 'down'],
        'z-boson': ['electron', 'muon', 'tau']
    };

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
                        <div style="margin-top: 1rem; padding: 1rem; background: rgba(255,255,255,0.05); border-radius: 8px;">
                            <div style="font-size: 0.9rem; color: rgba(255,255,255,0.6); margin-bottom: 0.5rem;">衰变模式 (Decay Mode)</div>
                            <div style="font-size: 1.1rem; color: ${isStable ? '#4ade80' : '#fbbf24'}; font-weight: bold;">
                                ${decayText}
                            </div>
                            <div style="font-size: 0.8rem; color: rgba(255,255,255,0.4); margin-top: 0.5rem;">
                                寿命: ${data.lifetime}
                            </div>
                        </div>
                    `;
                }

                if (mMass) mMass.textContent = data.mass;
                if (mCharge) mCharge.textContent = data.charge;
                if (mSpin) mSpin.textContent = data.spin;
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

        // Decay Chain Highlighting
        card.addEventListener('mouseenter', () => {
            const id = card.getAttribute('data-id');
            const targets = decayMap[id];

            if (targets) {
                cards.forEach(c => {
                    const cId = c.getAttribute('data-id');
                    if (cId === id) {
                        // Do nothing for self (let :hover handle it)
                    } else if (targets.includes(cId)) {
                        c.classList.add('highlight'); // Highlight targets
                    } else {
                        c.classList.add('dim'); // Dim others
                    }
                });
            }
        });

        card.addEventListener('mouseleave', () => {
            cards.forEach(c => {
                c.classList.remove('highlight');
                c.classList.remove('dim');
            });
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

    // Hide/show navigation and toggle detail mode based on view
    const nav = document.getElementById('main-nav');
    const body = document.body;

    if (viewId === 'home') {
        nav.classList.add('hidden');
        body.classList.remove('detail-mode');
    } else {
        nav.classList.remove('hidden');
        body.classList.add('detail-mode');
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
        section.removeAttribute('style'); // Clear any inline styles (like display: flex) that might override CSS
    });

    // Map viewId to DOM ID and Render Function
    let sectionId = '';
    let renderFn = null;

    switch (viewId) {
        case 'home': sectionId = 'view-home'; renderFn = renderHomeTriangle; break;
        case 'tribute': sectionId = 'view-tribute'; renderFn = renderTribute; break;
        case 'grid': sectionId = 'view-matter-grid'; renderFn = renderQFTVisualization; break;
        case 'structure': sectionId = 'view-matter-structure'; renderFn = renderStructure; break;
        case 'higgs': sectionId = 'view-matter-higgs'; renderFn = renderHiggs; break;
        case 'em': sectionId = 'view-matter-em'; renderFn = renderEM; break;

        case 'strong': sectionId = 'view-energy-strong'; renderFn = renderStrongForce; break;
        case 'weak': sectionId = 'view-energy-weak'; renderFn = renderWeakForce; break;
        case 'gravity': sectionId = 'view-energy-gravity'; renderFn = renderGravityV2; break;
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

// --- Home View: The Cosmic Forge (Animated Nebulae) ---
function renderHomeTriangle() {
    const stage = document.getElementById('home-triangle-stage');
    stage.innerHTML = '';
    stage.style.cssText = 'position: relative; width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center;';

    // ========== MAIN TITLE (Above the circles) ==========
    const titleContainer = document.createElement('div');
    titleContainer.style.cssText = 'text-align: center; margin-bottom: 5rem; z-index: 10; transform: translateY(-20px); opacity: 0; animation: fadeSlideDown 1s ease-out forwards;';

    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fadeSlideDown {
            from { opacity: 0; transform: translateY(-40px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);

    const mainTitle = document.createElement('h2');
    mainTitle.textContent = '万物归一';
    mainTitle.style.cssText = `
        font-size: 5rem;
        font-weight: 800;
        background: linear-gradient(to right, #fbbf24, #f59e0b, #ef4444);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-shadow: 0 0 50px rgba(245, 158, 11, 0.4);
        margin: 0;
        letter-spacing: 16px;
        line-height: 1.1;
        padding-bottom: 15px;
    `;
    titleContainer.appendChild(mainTitle);

    const englishTitle = document.createElement('p');
    englishTitle.textContent = 'THE GRAND UNIFICATION';
    englishTitle.style.cssText = 'font-size: 1.25rem; color: rgba(255,255,255,0.5); margin: 0 0 0 0; letter-spacing: 8px; font-weight: 300; text-transform: uppercase;';
    titleContainer.appendChild(englishTitle);

    const subtitle = document.createElement('p');
    subtitle.textContent = '探索物质、能量与信息的统一框架';
    subtitle.style.cssText = 'font-size: 1rem; color: rgba(255,255,255,0.4); margin: 2rem 0 0 0; letter-spacing: 4px; font-weight: 300;';
    titleContainer.appendChild(subtitle);

    stage.appendChild(titleContainer);

    // ========== CANVAS CONTAINER ==========
    const canvasContainer = document.createElement('div');
    canvasContainer.style.cssText = 'position: relative; width: 550px; height: 450px;';

    const canvas = document.createElement('canvas');
    canvas.width = 550;
    canvas.height = 450;
    canvas.style.cssText = 'display: block;';
    canvasContainer.appendChild(canvas);

    stage.appendChild(canvasContainer);

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Circle centers
    const cx = width / 2;
    const cy = height / 2 + 20;
    const r = 110;
    const offset = 85;

    const nodes = [
        { id: 'grid', x: cx, y: cy - offset, color: '#ff4444', label: '物质', sub: 'Matter' },
        { id: 'forces', x: cx - offset * 0.866, y: cy + offset * 0.5, color: '#44ff44', label: '能量', sub: 'Energy' },
        { id: 'symmetry', x: cx + offset * 0.866, y: cy + offset * 0.5, color: '#4488ff', label: '信息', sub: 'Info' }
    ];

    // Particle systems
    const particles = []; // Matter particles
    const waves = []; // Energy waves
    const geometries = []; // Info geometries

    // Initialize Matter particles (red nebula)
    for (let i = 0; i < 80; i++) {
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * r * 0.9;
        particles.push({
            x: nodes[0].x + Math.cos(angle) * dist,
            y: nodes[0].y + Math.sin(angle) * dist,
            baseX: Math.cos(angle) * dist,
            baseY: Math.sin(angle) * dist,
            size: Math.random() * 3 + 1,
            speed: Math.random() * 0.02 + 0.01
        });
    }

    // Initialize Energy waves (green flowing)
    for (let i = 0; i < 12; i++) {
        waves.push({
            angle: (i / 12) * Math.PI * 2,
            phase: Math.random() * Math.PI * 2,
            amplitude: Math.random() * 30 + 20
        });
    }

    // Initialize Info geometries (blue lines)
    for (let i = 0; i < 8; i++) {
        geometries.push({
            angle: (i / 8) * Math.PI * 2,
            length: Math.random() * 40 + 40,
            rotation: 0
        });
    }

    let animTime = 0;
    let animId;

    function animate() {
        if (!document.body.contains(canvas)) {
            cancelAnimationFrame(animId);
            return;
        }
        animTime += 0.016;

        // Clear
        ctx.fillStyle = 'rgba(5, 5, 15, 0.15)';
        ctx.fillRect(0, 0, width, height);

        // ========== DRAW MATTER NEBULA (Particles) ==========
        ctx.save();
        ctx.globalAlpha = 0.6;
        particles.forEach((p, i) => {
            const wobble = Math.sin(animTime * p.speed * 100 + i) * 5;
            p.x = nodes[0].x + p.baseX + wobble;
            p.y = nodes[0].y + p.baseY + Math.cos(animTime * p.speed * 80 + i) * 3;

            const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2);
            gradient.addColorStop(0, 'rgba(255, 100, 100, 0.9)');
            gradient.addColorStop(1, 'rgba(255, 50, 50, 0)');
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
            ctx.fill();
        });
        ctx.restore();

        // ========== DRAW ENERGY NEBULA (Flowing waves) ==========
        ctx.save();
        ctx.globalAlpha = 0.5;
        waves.forEach((w, i) => {
            const cx2 = nodes[1].x;
            const cy2 = nodes[1].y;
            ctx.strokeStyle = `rgba(100, 255, 150, ${0.4 + Math.sin(animTime * 2 + i) * 0.2})`;
            ctx.lineWidth = 2;
            ctx.shadowColor = '#44ff88';
            ctx.shadowBlur = 10;
            ctx.beginPath();
            for (let t = 0; t < 1; t += 0.02) {
                const baseAngle = w.angle + animTime * 0.5;
                const dist = t * r * 0.9;
                const wave = Math.sin(t * 8 + animTime * 3 + w.phase) * w.amplitude * (1 - t);
                const x = cx2 + Math.cos(baseAngle) * dist + Math.cos(baseAngle + Math.PI / 2) * wave * 0.3;
                const y = cy2 + Math.sin(baseAngle) * dist + Math.sin(baseAngle + Math.PI / 2) * wave * 0.3;
                if (t === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
            ctx.shadowBlur = 0;
        });
        ctx.restore();

        // ========== DRAW INFO NEBULA (Geometric lines) ==========
        ctx.save();
        ctx.globalAlpha = 0.5;
        const cx3 = nodes[2].x;
        const cy3 = nodes[2].y;
        geometries.forEach((g, i) => {
            g.rotation += 0.005;
            const angle = g.angle + g.rotation;
            const innerR = 20;
            const outerR = g.length;

            ctx.strokeStyle = `rgba(100, 150, 255, ${0.3 + Math.sin(animTime + i) * 0.2})`;
            ctx.lineWidth = 1.5;
            ctx.shadowColor = '#4488ff';
            ctx.shadowBlur = 8;

            // Draw rotating lines
            ctx.beginPath();
            ctx.moveTo(cx3 + Math.cos(angle) * innerR, cy3 + Math.sin(angle) * innerR);
            ctx.lineTo(cx3 + Math.cos(angle) * outerR, cy3 + Math.sin(angle) * outerR);
            ctx.stroke();

            // Draw connecting arcs
            if (i % 2 === 0) {
                ctx.beginPath();
                ctx.arc(cx3, cy3, 30 + i * 8, angle, angle + Math.PI / 4);
                ctx.stroke();
            }
            ctx.shadowBlur = 0;
        });
        // Binary code feel
        ctx.fillStyle = 'rgba(100, 150, 255, 0.15)';
        ctx.font = '8px monospace';
        for (let i = 0; i < 5; i++) {
            const a = animTime * 0.2 + i * 0.8;
            const d = 50 + i * 12;
            ctx.fillText(Math.random() > 0.5 ? '1' : '0', cx3 + Math.cos(a) * d, cy3 + Math.sin(a) * d);
        }
        ctx.restore();

        // ========== DRAW CIRCLE OUTLINES ==========
        nodes.forEach(node => {
            ctx.strokeStyle = node.color + '40';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
            ctx.stroke();
        });

        // ========== DRAW SINGULARITY (Blinding White Burst with God Rays) ==========
        const singularityPulse = 1 + Math.sin(animTime * 2) * 0.2;

        // God Rays (radiating lines)
        ctx.save();
        ctx.globalAlpha = 0.3 + Math.sin(animTime * 3) * 0.1;
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        for (let i = 0; i < 12; i++) {
            const angle = (i / 12) * Math.PI * 2 + animTime * 0.3;
            const innerR = 15;
            const outerR = 60 + Math.sin(animTime * 4 + i) * 15;
            ctx.beginPath();
            ctx.moveTo(cx + Math.cos(angle) * innerR, cy + Math.sin(angle) * innerR);
            ctx.lineTo(cx + Math.cos(angle) * outerR, cy + Math.sin(angle) * outerR);
            ctx.stroke();
        }
        ctx.restore();

        // Outer glow (large, soft)
        const outerGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 70 * singularityPulse);
        outerGlow.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
        outerGlow.addColorStop(0.3, 'rgba(255, 255, 200, 0.2)');
        outerGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = outerGlow;
        ctx.beginPath();
        ctx.arc(cx, cy, 70 * singularityPulse, 0, Math.PI * 2);
        ctx.fill();

        // Core glow (bright white)
        const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 25 * singularityPulse);
        coreGrad.addColorStop(0, 'rgba(255, 255, 255, 1)');
        coreGrad.addColorStop(0.4, 'rgba(255, 255, 255, 0.9)');
        coreGrad.addColorStop(0.7, 'rgba(255, 255, 220, 0.5)');
        coreGrad.addColorStop(1, 'rgba(255, 255, 200, 0)');
        ctx.fillStyle = coreGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, 25 * singularityPulse, 0, Math.PI * 2);
        ctx.fill();

        // Singularity core (blinding white)
        ctx.fillStyle = '#fff';
        ctx.shadowColor = '#fff';
        ctx.shadowBlur = 30;
        ctx.beginPath();
        ctx.arc(cx, cy, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // NO center label - removed per user request

        // ========== DRAW LABELS ==========
        nodes.forEach(node => {
            ctx.fillStyle = '#fff';
            ctx.font = 'bold 20px Arial';
            ctx.textAlign = 'center';
            ctx.shadowColor = node.color;
            ctx.shadowBlur = 10;
            ctx.fillText(node.label, node.x, node.y - 5);
            ctx.shadowBlur = 0;
            ctx.font = '12px Arial';
            ctx.fillStyle = 'rgba(255,255,255,0.7)';
            ctx.fillText(node.sub, node.x, node.y + 15);
        });

        animId = requestAnimationFrame(animate);
    }

    // Click handlers for navigation
    canvas.addEventListener('click', (e) => {
        const rect = canvas.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;

        nodes.forEach(node => {
            const dx = mx - node.x;
            const dy = my - node.y;
            if (dx * dx + dy * dy < r * r) {
                switchView(node.id);
            }
        });

        // Center click
        const dcx = mx - cx;
        const dcy = my - cy;
        if (dcx * dcx + dcy * dcy < 40 * 40) {
            // Could open a "Grand Unification" modal
        }
    });

    canvas.style.cursor = 'pointer';
    animate();

    // ========== YANG TRIBUTE BADGE (Bottom Right) ==========
    const tributeBadge = document.createElement('div');
    tributeBadge.innerHTML = `
        <span style="font-size: 1.2rem;">🏅</span>
        <span>致敬杨振宁</span>
    `;
    tributeBadge.style.cssText = `
        position: absolute;
        bottom: 10px;
        right: 10px;
        background: linear-gradient(to right, rgba(251, 191, 36, 0.1), rgba(245, 158, 11, 0.05));
        border: 1px solid rgba(251, 191, 36, 0.3);
        border-radius: 20px;
        padding: 6px 14px;
        color: rgba(251, 191, 36, 0.9);
        font-size: 0.8rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 6px;
        transition: all 0.3s;
        z-index: 10;
        opacity: 0;
        animation: fadeSlideDown 0.8s ease-out 0.5s forwards; /* Reuse existing keyframe */
    `;
    tributeBadge.addEventListener('mouseenter', () => {
        tributeBadge.style.background = 'linear-gradient(135deg, rgba(251, 191, 36, 0.3), rgba(245, 158, 11, 0.15))';
        tributeBadge.style.transform = 'translateY(-2px)';
        tributeBadge.style.boxShadow = '0 4px 12px rgba(251, 191, 36, 0.2)';
    });
    tributeBadge.addEventListener('mouseleave', () => {
        tributeBadge.style.background = 'linear-gradient(to right, rgba(251, 191, 36, 0.1), rgba(245, 158, 11, 0.05))';
        tributeBadge.style.transform = 'translateY(0)';
        tributeBadge.style.boxShadow = 'none';
    });
    tributeBadge.addEventListener('click', () => switchView('tribute'));
    canvasContainer.appendChild(tributeBadge);
}

// --- Weak Force View Logic (B2FH) ---
function renderWeakForce() {
    const stage = document.getElementById('weak-stage');
    stage.innerHTML = '';
    // Removed padding to allow full width, added overflow hidden
    stage.style.cssText = 'display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; height: 100%; overflow: hidden;';

    // Title Removed as per user request

    const container = document.createElement('div');
    // Full width and height
    container.style.cssText = 'position: relative; width: 80%; height: 100%; display: flex; justify-content: center; align-items: center; margin: 0 auto;';

    const canvas = document.createElement('canvas');
    // Canvas will be resized by observer
    container.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    // State
    const elements = [
        { symbol: 'Fe', name: '铁', p: 26, n: 30, color: '#94a3b8' }, // Iron (Greyish)
        { symbol: 'Co', name: '钴', p: 27, n: 32, color: '#60a5fa' }, // Cobalt (Blueish)
        { symbol: 'Ni', name: '镍', p: 28, n: 30, color: '#a78bfa' }, // Nickel (Purpleish)
        { symbol: 'Cu', name: '铜', p: 29, n: 34, color: '#fbbf24' }  // Copper (Goldish)
    ];

    let currentElIndex = 0;
    let nucleons = [];
    let incomingNeutron = { x: -250, y: 0, z: 0, active: true }; // Relative to center
    let emittedParticles = []; // {x, y, vx, vy, type, life} relative to center
    let step = 0;
    let timer = 0;
    let shake = 0;

    // Timeline Elements
    const timelineItems = {
        mechanism: document.getElementById('text-mechanism'),
        scene: document.getElementById('text-scene'),
        product: document.getElementById('text-product')
    };

    function updateTimeline(activeKey) {
        Object.keys(timelineItems).forEach(key => {
            if (timelineItems[key]) {
                if (key === activeKey) timelineItems[key].classList.add('active');
                else timelineItems[key].classList.remove('active');
            }
        });
    }

    // Initialize Nucleus (Cluster) - Relative to (0,0)
    function initNucleus(pCount, nCount) {
        nucleons = [];
        const total = pCount + nCount;
        // Use Fibonacci Sphere for even distribution
        const phi = Math.PI * (3 - Math.sqrt(5));

        for (let i = 0; i < total; i++) {
            const isProton = i < pCount;
            const y = 1 - (i / (total - 1)) * 2; // y goes from 1 to -1
            const radius = Math.sqrt(1 - y * y);
            const theta = phi * i;

            const rScale = 55; // Increased scale
            // Add some random jitter for "organic" look
            const jitter = 5;

            const x = Math.cos(theta) * radius * rScale + (Math.random() - 0.5) * jitter;
            const z = Math.sin(theta) * radius * rScale + (Math.random() - 0.5) * jitter;
            const yPos = y * rScale + (Math.random() - 0.5) * jitter;

            nucleons.push({
                x: x, // Relative to center 0,0
                y: yPos,
                z: z,
                type: isProton ? 'p' : 'n',
                baseX: x,
                baseY: yPos,
                baseZ: z
            });
        }
        nucleons.sort((a, b) => a.z - b.z);
    }

    initNucleus(elements[0].p, elements[0].n);

    function drawSphere(ctx, x, y, r, color) {
        const grad = ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, r * 0.1, x, y, r);
        grad.addColorStop(0, '#fff');
        grad.addColorStop(0.3, color);
        grad.addColorStop(1, '#000');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
    }

    function drawFloatingTag(ctx, text, x, y, color) {
        ctx.font = 'bold 12px Arial';
        const width = ctx.measureText(text).width + 20;
        const height = 24;

        ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
        ctx.strokeStyle = color;
        ctx.lineWidth = 1;

        // Pill shape
        ctx.beginPath();
        ctx.roundRect(x - width / 2, y - height / 2, width, height, 12);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = color;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, x, y);
    }

    function resize() {
        const rect = container.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;
        canvas.width = rect.width;
        canvas.height = rect.height;
    }

    // Initial resize
    resize();

    // Observer for resize
    const observer = new ResizeObserver(resize);
    observer.observe(container);

    function animateAlchemy() {
        if (currentView !== 'weak') return;
        if (!document.body.contains(canvas)) return;

        const cx = canvas.width / 2;
        const cy = canvas.height / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const t = Date.now() / 1000;
        const currentEl = elements[currentElIndex];

        // Sync Timeline
        if (step <= 1) updateTimeline('mechanism');
        else if (step === 2) updateTimeline('scene');
        else updateTimeline('product');

        // 1. Draw Nucleus
        nucleons.sort((a, b) => a.z - b.z);

        nucleons.forEach(n => {
            let x_draw = cx + n.x + (Math.random() - 0.5) * shake;
            let y_draw = cy + n.y + (Math.random() - 0.5) * shake;
            // Depth scale
            let scale = (n.z + 100) / 100;
            let r = 10 * scale;
            let color = n.type === 'p' ? '#ff6b6b' : '#94a3b8';

            if (step === 2 && n.isDecaying) color = '#fff';

            drawSphere(ctx, x_draw, y_draw, r, color);
        });

        // Element Label (Floating Tag at Bottom)
        drawFloatingTag(ctx, `${currentEl.symbol} - ${currentEl.name}`, cx, cy + 100, currentEl.color);

        // 2. Animation Logic
        if (step === 0) {
            // Neutron Approach
            if (incomingNeutron.active) {
                incomingNeutron.x += 1.5; // Slower speed
                // Draw relative to center
                drawSphere(ctx, cx + incomingNeutron.x, cy + incomingNeutron.y, 10, '#94a3b8');

                // Label for Neutron
                ctx.fillStyle = '#fff';
                ctx.font = 'bold 14px Arial';
                ctx.textAlign = 'center';
                ctx.fillText('n', cx + incomingNeutron.x, cy + incomingNeutron.y - 15);

                if (incomingNeutron.x >= -50) {
                    step = 1;
                    incomingNeutron.active = false;

                    // Reshape Nucleus: Re-distribute all particles to accommodate the new neutron
                    // This creates a visible "shape change" as requested
                    initNucleus(currentEl.p, currentEl.n + 1);

                    // Mark a random neutron for decay
                    const neutrons = nucleons.filter(n => n.type === 'n');
                    if (neutrons.length > 0) {
                        // Pick a random one, preferably towards the outside (higher z or radius)
                        // Simple random is fine for visual
                        const target = neutrons[Math.floor(Math.random() * neutrons.length)];
                        target.isDecaying = true;
                    }

                    timer = 0;
                }
            }
        } else if (step === 1) {
            // Unstable Jitter
            timer++;
            shake = 3; // Less violent
            drawFloatingTag(ctx, '不稳定 (Unstable)', cx, cy - 80, '#fbbf24');

            if (timer > 100) { // Slower duration
                step = 2;
                timer = 0;
            }
        } else if (step === 2) {
            // Beta Decay Flash
            timer++;
            shake = 2;
            drawFloatingTag(ctx, 'β 衰变 (Beta Decay)', cx, cy - 80, '#4ecdc4');

            // Find the decaying neutron
            const target = nucleons.find(n => n.isDecaying);
            if (target && timer === 1) {
                // Emit particles (relative to nucleus center)
                emittedParticles.push({ x: target.x, y: target.y, vx: 2.5, vy: -1, type: 'e', color: '#3b82f6' });
                emittedParticles.push({ x: target.x, y: target.y, vx: 2.5, vy: 1, type: 'v', color: 'rgba(255,255,255,0.5)' });
            }

            if (timer > 60) { // Slower flash
                if (target) {
                    target.type = 'p';
                    target.isDecaying = false;
                }
                step = 3;
                timer = 0;
                // Update Element
                if (currentElIndex < elements.length - 1) {
                    currentElIndex++;
                } else {
                    currentElIndex = 0;
                    initNucleus(elements[0].p, elements[0].n); // Reset
                }
            }
        } else if (step === 3) {
            // Cooldown / Next Element
            timer++;
            shake = 0;

            if (timer > 200) { // Longer cooldown
                // Reset for next cycle
                step = 0;
                incomingNeutron.x = -cx - 50; // Reset off-screen left
                incomingNeutron.active = true;
                emittedParticles = [];

                if (currentElIndex === 0) {
                    // Already reset
                }
            }
        }

        // 3. Draw Emitted Particles
        emittedParticles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            drawSphere(ctx, cx + p.x, cy + p.y, p.type === 'e' ? 5 : 3, p.color);
            if (p.type === 'e') {
                ctx.fillStyle = '#3b82f6';
                ctx.fillText('e-', cx + p.x, cy + p.y - 10);
            } else {
                ctx.fillStyle = '#fff';
                ctx.fillText('v', cx + p.x, cy + p.y - 10);
            }
        });

        safeRequestAnimationFrame(animateAlchemy);
    }
    safeRequestAnimationFrame(animateAlchemy);

    stage.appendChild(container);
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
    stage.style.cssText = 'width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; padding: 1rem;';

    // Main container with left-right layout
    const container = document.createElement('div');
    container.style.cssText = `
        display: flex;
        width: 100%;
        max-width: 1200px;
        height: calc(100vh - 200px);
        max-height: 700px;
        background: rgba(10, 10, 20, 0.8);
        border: 1px solid rgba(255, 193, 7, 0.2);
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    `;

    // ========== LEFT SIDE: Portrait Area (40%) ==========
    const leftPanel = document.createElement('div');
    leftPanel.style.cssText = `
        flex: 0 0 38%;
        background: linear-gradient(135deg, rgba(20, 20, 30, 0.95), rgba(30, 25, 15, 0.9));
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        position: relative;
        border-right: 1px solid rgba(255, 193, 7, 0.15);
    `;

    // Yang-Mills formula background watermark
    const formulaBg = document.createElement('div');
    formulaBg.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity: 0.05;
        font-family: 'Times New Roman', serif;
        font-size: 1.2rem;
        color: #fcd34d;
        pointer-events: none;
        line-height: 2.5;
    `;
    formulaBg.innerHTML = `
        F<sub>μν</sub> = ∂<sub>μ</sub>A<sub>ν</sub> - ∂<sub>ν</sub>A<sub>μ</sub><br>
        + g[A<sub>μ</sub>, A<sub>ν</sub>]<br><br>
        𝓛<sub>YM</sub> = -¼F<sub>μν</sub>F<sup>μν</sup><br><br>
        Yang-Mills 1954
    `;
    leftPanel.appendChild(formulaBg);

    // Portrait placeholder (stylized silhouette)
    const portrait = document.createElement('div');
    portrait.style.cssText = `
        width: 180px;
        height: 180px;
        border-radius: 50%;
        background: linear-gradient(135deg, rgba(255, 193, 7, 0.1), rgba(255, 193, 7, 0.05));
        border: 2px solid rgba(255, 193, 7, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 4rem;
        color: rgba(255, 193, 7, 0.6);
        margin-bottom: 1.5rem;
        box-shadow: 0 0 40px rgba(255, 193, 7, 0.1);
        position: relative;
        z-index: 1;
    `;
    portrait.innerHTML = '<span style="font-family: serif; font-weight: 300;">杨</span>';
    leftPanel.appendChild(portrait);

    // Name and title
    const nameSection = document.createElement('div');
    nameSection.style.cssText = 'text-align: center; position: relative; z-index: 1;';
    nameSection.innerHTML = `
        <h1 style="font-size: 2.5rem; color: #fcd34d; margin: 0; letter-spacing: 4px; text-shadow: 0 0 30px rgba(255, 193, 7, 0.4); font-weight: 700;">
            杨振宁
        </h1>
        <p style="font-size: 0.85rem; color: rgba(255, 193, 7, 0.7); margin: 0.5rem 0; letter-spacing: 2px;">
            Chen-Ning Yang · 1922—
        </p>
        <div style="width: 80px; height: 1px; background: linear-gradient(90deg, transparent, #fcd34d, transparent); margin: 1rem auto;"></div>
        <p style="font-size: 1.1rem; color: #fcd34d; margin: 0; font-style: italic;">
            物理学的"立法者"
        </p>
        <p style="font-size: 0.75rem; color: rgba(255, 255, 255, 0.4); margin: 0.3rem 0 0 0; letter-spacing: 1px;">
            The Legislator of Physics
        </p>
    `;
    leftPanel.appendChild(nameSection);

    container.appendChild(leftPanel);

    // ========== RIGHT SIDE: Content Area (60%) ==========
    const rightPanel = document.createElement('div');
    rightPanel.style.cssText = `
        flex: 1;
        padding: 2rem 2.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1.8rem;
        overflow-y: auto;
    `;

    // Section header
    const sectionHeader = document.createElement('div');
    sectionHeader.style.cssText = 'margin-bottom: 0.5rem;';
    sectionHeader.innerHTML = `
        <p style="font-size: 0.8rem; color: rgba(255, 255, 255, 0.5); margin: 0; letter-spacing: 2px;">
            以"立言、立功、立德"致敬杨振宁
        </p>
    `;
    rightPanel.appendChild(sectionHeader);

    // Three sections data
    const sections = [
        {
            title: '立言',
            subtitle: 'The Theorist',
            icon: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#fcd34d" stroke-width="1.5"><circle cx="16" cy="16" r="10"/><path d="M16 6 L16 2"/><path d="M16 26 L16 30"/><path d="M6 16 L2 16"/><path d="M26 16 L30 16"/><path d="M9 9 L6 6"/><path d="M23 9 L26 6"/><path d="M9 23 L6 26"/><path d="M23 23 L26 26"/></svg>',
            heading: '为造物主制定"语法"',
            content: '杨-米尔斯理论 (Yang-Mills) 是现代物理学的"大宪章"。他颠覆了认知——指出<strong style="color:#fcd34d">「对称性支配相互作用」</strong>。从此，强力、弱力与电磁力被统一在同一套几何语言之下。这是物理学真正的源代码。'
        },
        {
            title: '立功',
            subtitle: 'The Patriot',
            icon: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#fcd34d" stroke-width="1.5"><path d="M16 4 L16 28"/><path d="M8 8 L16 12 L24 8"/><path d="M4 16 L16 20 L28 16"/><circle cx="16" cy="4" r="2"/></svg>',
            heading: '为大国科学"校准航向"',
            content: '从破冰中美交流，到创建清华高研院；从引进图灵奖得主，到在关键时刻为千亿对撞机按下<strong style="color:#fcd34d">「暂停键」</strong>。他不仅是象牙塔里的大师，更是国家科学资源配置的理性"守护者"。'
        },
        {
            title: '立德',
            subtitle: 'The Mentor',
            icon: '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#fcd34d" stroke-width="1.5"><path d="M16 4 L16 18"/><path d="M10 10 L16 4 L22 10"/><circle cx="16" cy="24" r="4"/><path d="M12 28 L16 24 L20 28"/></svg>',
            heading: '为后学垂范"科学品味"',
            content: '他重塑了中华民族的智力自信。他一生坚持<strong style="color:#fcd34d">「Taste（品味）」</strong>至上，反对学术投机。这种对科学美学的极致追求，如灯塔般指引着下一代科学家走出模仿，走向创造。'
        }
    ];

    sections.forEach(section => {
        const sectionEl = document.createElement('div');
        sectionEl.style.cssText = `
            display: flex;
            gap: 1.2rem;
            padding: 1.2rem;
            background: rgba(255, 255, 255, 0.02);
            border-left: 2px solid rgba(255, 193, 7, 0.4);
            border-radius: 0 8px 8px 0;
            transition: all 0.3s;
        `;

        sectionEl.innerHTML = `
            <div style="flex-shrink: 0; display: flex; align-items: flex-start; padding-top: 0.3rem;">
                ${section.icon}
            </div>
            <div style="flex: 1;">
                <div style="display: flex; align-items: baseline; gap: 0.8rem; margin-bottom: 0.5rem;">
                    <span style="font-size: 1.3rem; color: #fcd34d; font-weight: 700;">${section.title}</span>
                    <span style="font-size: 0.7rem; color: rgba(255, 193, 7, 0.5); letter-spacing: 1px; text-transform: uppercase;">${section.subtitle}</span>
                </div>
                <h4 style="font-size: 1rem; color: #fff; margin: 0 0 0.6rem 0; font-weight: 600;">
                    ${section.heading}
                </h4>
                <p style="font-size: 0.85rem; line-height: 1.8; color: #b0bec5; margin: 0;">
                    ${section.content}
                </p>
            </div>
        `;

        // Hover effect
        sectionEl.addEventListener('mouseenter', () => {
            sectionEl.style.background = 'rgba(255, 193, 7, 0.05)';
            sectionEl.style.borderLeftColor = '#fcd34d';
        });
        sectionEl.addEventListener('mouseleave', () => {
            sectionEl.style.background = 'rgba(255, 255, 255, 0.02)';
            sectionEl.style.borderLeftColor = 'rgba(255, 193, 7, 0.4)';
        });

        rightPanel.appendChild(sectionEl);
    });

    // Footer quote
    const footer = document.createElement('div');
    footer.style.cssText = 'margin-top: auto; padding-top: 1rem; border-top: 1px solid rgba(255, 255, 255, 0.05);';
    footer.innerHTML = `
        <p style="font-size: 0.8rem; color: rgba(255, 255, 255, 0.4); margin: 0; font-style: italic; text-align: center;">
            "Symmetry dictates interaction." — Yang-Mills Theory, 1954
        </p>
    `;
    rightPanel.appendChild(footer);

    container.appendChild(rightPanel);
    stage.appendChild(container);
}

// --- Group Theory View Logic ---


// --- Spacetime Visualization (Newton vs Leibniz) ---
function renderSpacetime() {
    const stage = document.getElementById('spacetime-stage');
    stage.innerHTML = '';
    stage.removeAttribute('style');

    // Wrapper (Transparent, Full Screen, Hidden Overflow)
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; flex-direction: column; align-items: center; padding: 0.5rem; height: 100%; width: 100%; box-sizing: border-box; background: transparent; overflow: hidden;';

    // Main Title (Compact)
    const mainTitle = document.createElement('div');
    mainTitle.style.cssText = 'text-align: center; margin-bottom: 0.3rem; flex-shrink: 0; width: 100%;';
    mainTitle.innerHTML = `
        <h2 style="font-size: 1.5rem; margin-bottom: 0; background: linear-gradient(to right, #4ecdc4, #ff6b6b); -webkit-background-clip: text; -webkit-text-fill-color: transparent; letter-spacing: 2px;">
            时空观的演化与危机
        </h2>
        <p style="font-size: 0.75rem; color: rgba(255,255,255,0.6); font-style: italic; margin: 0;">
            Space, Time, and the Quantum Abyss
        </p>
    `;
    wrapper.appendChild(mainTitle);

    // UNIFIED BIG BOX (Glassmorphism Dashboard)
    const unifiedBox = document.createElement('div');
    unifiedBox.style.cssText = `
        border: 1px solid rgba(255,255,255,0.15); 
        background: rgba(15, 15, 20, 0.6); 
        border-radius: 12px; 
        padding: 0.5rem; 
        width: 100%; 
        max-width: 1600px; 
        flex-grow: 1; 
        display: flex; 
        flex-direction: column; 
        gap: 0.5rem; 
        box-shadow: 0 0 50px rgba(0,0,0,0.4);
        backdrop-filter: blur(12px);
        min-height: 0;
    `;

    // Content Grid
    const contentGrid = document.createElement('div');
    contentGrid.style.cssText = 'display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; width: 100%; flex-grow: 1; min-height: 0;';

    // ==========================================
    // LEFT COLUMN: SPACE
    // ==========================================
    const leftCol = document.createElement('div');
    leftCol.style.cssText = 'display: flex; flex-direction: column; gap: 0.5rem; padding-right: 0.5rem; border-right: 1px dashed rgba(78, 205, 196, 0.1); min-height: 0;';

    const leftHeader = document.createElement('h3');
    leftHeader.innerHTML = '🌌 空间的演化 (Evolution of Space)';
    leftHeader.style.cssText = 'color: #4ecdc4; border-bottom: 1px solid #4ecdc4; padding-bottom: 0.2rem; margin-bottom: 0.2rem; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px;';
    leftCol.appendChild(leftHeader);

    // 1. Newton
    const newtonCard = createCard('1. 绝对时空 (Newton)', '刚性容器，永恒不变。', '#4ecdc4');
    const newtonCanvas = createCanvas(300, 70);
    newtonCard.appendChild(newtonCanvas);
    leftCol.appendChild(newtonCard);

    // 2. Einstein
    const einsteinCard = createCard('2. 动态时空 (Einstein)', '引力是<strong>时空的几何形状</strong>。', '#4ecdc4');
    const einsteinCanvas = createCanvas(300, 70);
    einsteinCard.appendChild(einsteinCanvas);
    leftCol.appendChild(einsteinCard);

    // 3. Quantum Crisis
    const quantumCard = createCard('3. 量子泡沫 (Quantum Foam)', '<strong>危机！</strong> 普朗克尺度，时空崩解为泡沫。', '#a855f7');
    const quantumCanvas = createCanvas(300, 70);
    quantumCard.appendChild(quantumCanvas);
    leftCol.appendChild(quantumCard);


    // ==========================================
    // RIGHT COLUMN: TIME
    // ==========================================
    const rightCol = document.createElement('div');
    rightCol.style.cssText = 'display: flex; flex-direction: column; gap: 0.5rem; padding-left: 0.5rem; border-left: 1px dashed rgba(249, 115, 22, 0.1); min-height: 0;';

    const rightHeader = document.createElement('h3');
    rightHeader.innerHTML = '⏳ 时间的本质 (Nature of Time)';
    rightHeader.style.cssText = 'color: #f97316; border-bottom: 1px solid #f97316; padding-bottom: 0.2rem; margin-bottom: 0.2rem; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px;';
    rightCol.appendChild(rightHeader);

    // 1. Micro Time
    const microCard = createCard('1. 微观：时间可逆 (Reversible)', '粒子碰撞录像倒放，依然符合物理定律。', '#f97316');
    const microCanvas = createCanvas(300, 70);
    microCard.appendChild(microCanvas);
    rightCol.appendChild(microCard);

    // 2. Macro Time
    const macroCard = createCard('2. 宏观：熵增不可逆 (Irreversible)', '墨水扩散录像倒放？<strong>绝不可能！</strong>', '#ea580c');
    const macroCanvas = createCanvas(300, 70);
    macroCard.appendChild(macroCanvas);
    rightCol.appendChild(macroCard);

    // 3. The End of Time
    const endCard = createCard('3. 时间的终结 (End of Time)', '<strong>危机！</strong> 量子引力中，变量 <span style="font-family: \'Times New Roman\', serif; font-style: italic;">t</span> 消失了。', '#dc2626');
    const endCanvas = createCanvas(300, 70);
    endCard.appendChild(endCanvas);
    rightCol.appendChild(endCard);

    contentGrid.appendChild(leftCol);
    contentGrid.appendChild(rightCol);
    unifiedBox.appendChild(contentGrid);

    // ==========================================
    // FOOTER: IT FROM QUBIT (Pop!)
    // ==========================================
    const deepCard = document.createElement('div');
    deepCard.style.cssText = 'width: 100%; background: rgba(255,255,255,0.08); border-top: 1px solid rgba(255,255,255,0.15); padding: 0.6rem; text-align: center; flex-shrink: 0; position: relative; border-radius: 0 0 8px 8px; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: inset 0 0 20px rgba(255,255,255,0.02);';

    // Internal Roots
    const rootLeft = document.createElement('div');
    rootLeft.style.cssText = 'position: absolute; top: -10px; left: 25%; width: 1px; height: 10px; background: linear-gradient(to bottom, #4ecdc4, rgba(255,255,255,0.1));';
    const rootRight = document.createElement('div');
    rootRight.style.cssText = 'position: absolute; top: -10px; right: 25%; width: 1px; height: 10px; background: linear-gradient(to bottom, #f97316, rgba(255,255,255,0.1));';
    deepCard.appendChild(rootLeft);
    deepCard.appendChild(rootRight);

    // Custom Icons & Arrow
    const footerIcons = document.createElement('div');
    footerIcons.style.cssText = 'display: flex; align-items: center; justify-content: center; gap: 1.5rem; margin-bottom: 0.3rem; opacity: 1;';

    // Left Icon: Quantum Network
    const iconNet = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#4ecdc4" stroke-width="1.5"><circle cx="20" cy="10" r="3"/><circle cx="10" cy="30" r="3"/><circle cx="30" cy="30" r="3"/><path d="M20 10 L10 30 M20 10 L30 30 M10 30 L30 30" opacity="0.6"/></svg>`;

    // Right Icon: Smooth Geometry
    const iconGeo = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#f97316" stroke-width="1.5"><path d="M5 20 Q 20 5, 35 20 T 35 30" opacity="0.8"/><path d="M5 25 Q 20 10, 35 25" opacity="0.5"/></svg>`;

    // Center Arrow
    const arrow = `<div style="display: flex; flex-direction: column; align-items: center; color: #ccc;"><span style="font-size: 0.7rem; letter-spacing: 1px; margin-bottom: -5px; color: #fff; font-weight: bold;">EMERGENCE</span><span style="font-size: 1.2rem;">⟶</span></div>`;

    footerIcons.innerHTML = `${iconNet} ${arrow} ${iconGeo}`;
    deepCard.appendChild(footerIcons);

    deepCard.innerHTML += `
        <p style="color: #fff; font-size: 0.9rem; font-style: italic; font-family: serif; margin: 0; text-shadow: 0 0 10px rgba(0,0,0,0.5);">
            "也许时空并不是舞台，而是量子比特纠缠产生的<strong>信息几何</strong>。"
            <span style="font-size: 0.75rem; color: #aaa; font-family: sans-serif; margin-left: 0.5rem;">—— It from Qubit</span>
        </p>
    `;
    unifiedBox.appendChild(deepCard);

    wrapper.appendChild(unifiedBox);
    stage.appendChild(wrapper);

    // Helper functions
    function createCard(title, desc, color) {
        const card = document.createElement('div');
        // Ultra Compact
        card.style.cssText = `background: rgba(255,255,255,0.03); border-left: 2px solid ${color}; border-radius: 4px; padding: 0.4rem; display: flex; flex-direction: column; align-items: center; flex: 1; min-height: 0; justify-content: center;`;

        card.innerHTML = `
            <h4 style="color: ${color}; margin-bottom: 0.1rem; font-size: 0.85rem; width: 100%; text-align: left; font-weight: bold; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${title}</h4>
            <p style="color: #aaa; font-size: 0.75rem; margin-bottom: 0.2rem; width: 100%; text-align: left; line-height: 1.2; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">${desc}</p>
        `;
        return card;
    }

    function createCanvas(w, h) {
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        c.style.cssText = 'background: #0f172a; border-radius: 4px; width: 100%; height: auto; border: 1px solid rgba(255,255,255,0.05);';
        return c;
    }

    // ==========================================
    // ANIMATION LOGIC
    // ==========================================
    const ctxN = newtonCanvas.getContext('2d');
    const ctxE = einsteinCanvas.getContext('2d');
    const ctxQ = quantumCanvas.getContext('2d');
    const ctxMicro = microCanvas.getContext('2d');
    const ctxMacro = macroCanvas.getContext('2d');
    const ctxEnd = endCanvas.getContext('2d');

    let time = 0;

    // Macro Simulation Data
    const inkParticles = Array.from({ length: 80 }, () => ({
        x: 150, y: 35,
        vx: (Math.random() - 0.5) * 2.5,
        vy: (Math.random() - 0.5) * 2.5,
        hist: []
    }));
    let macroPhase = 'forward';
    let macroTimer = 0;

    // Micro Simulation Data
    let p1 = { x: 50, y: 35, vx: 3.5 };
    let p2 = { x: 250, y: 35, vx: -3.5 };
    let microPhase = 'forward';

    // Dissolving Hourglass Data
    const sandParticles = [];
    const glassSegments = [];
    // Init Glass Segments (Hourglass Shape)
    // Top Triangle
    glassSegments.push({ x1: 130, y1: 10, x2: 170, y2: 10 });
    glassSegments.push({ x1: 130, y1: 10, x2: 150, y2: 35 });
    glassSegments.push({ x1: 170, y1: 10, x2: 150, y2: 35 });
    // Bottom Triangle
    glassSegments.push({ x1: 150, y1: 35, x2: 130, y2: 60 });
    glassSegments.push({ x1: 150, y1: 35, x2: 170, y2: 60 });
    glassSegments.push({ x1: 130, y1: 60, x2: 170, y2: 60 });

    // Add drift properties to segments
    glassSegments.forEach(s => {
        s.ox1 = s.x1; s.oy1 = s.y1; s.ox2 = s.x2; s.oy2 = s.y2;
        s.dx = (Math.random() - 0.5) * 0.5; s.dy = (Math.random() - 0.5) * 0.5;
        s.alpha = 1;
    });

    function animate() {
        if (currentView !== 'spacetime') return;
        time += 0.05;

        // 1. Newton (Static Grid)
        ctxN.clearRect(0, 0, 300, 70);
        ctxN.strokeStyle = 'rgba(78, 205, 196, 0.3)';
        ctxN.lineWidth = 1;
        for (let x = 0; x <= 300; x += 30) { ctxN.beginPath(); ctxN.moveTo(x, 0); ctxN.lineTo(x, 70); ctxN.stroke(); }
        for (let y = 0; y <= 70; y += 17.5) { ctxN.beginPath(); ctxN.moveTo(0, y); ctxN.lineTo(300, y); ctxN.stroke(); }
        ctxN.fillStyle = '#fff'; ctxN.beginPath(); ctxN.arc(150, 35, 6, 0, Math.PI * 2); ctxN.fill();

        // 2. Einstein (Gravity Well)
        ctxE.clearRect(0, 0, 300, 70);
        ctxE.strokeStyle = 'rgba(78, 205, 196, 0.4)';
        const mx = 150 + Math.sin(time) * 50;
        const my = 35 + Math.cos(time * 0.7) * 10;

        for (let x = 0; x <= 300; x += 20) {
            for (let y = 0; y <= 70; y += 17.5) {
                if (x < 300) {
                    const p1 = distort(x, y, mx, my);
                    const p2 = distort(x + 20, y, mx, my);
                    ctxE.beginPath(); ctxE.moveTo(p1.x, p1.y); ctxE.lineTo(p2.x, p2.y); ctxE.stroke();
                }
                if (y < 70) {
                    const p1 = distort(x, y, mx, my);
                    const p2 = distort(x, y + 17.5, mx, my);
                    ctxE.beginPath(); ctxE.moveTo(p1.x, p1.y); ctxE.lineTo(p2.x, p2.y); ctxE.stroke();
                }
            }
        }
        ctxE.fillStyle = '#4ecdc4'; ctxE.beginPath(); ctxE.arc(mx, my, 8, 0, Math.PI * 2); ctxE.fill();

        // 3. Quantum Foam
        ctxQ.clearRect(0, 0, 300, 70);
        const zoom = 1 + (Math.sin(time * 0.5) + 1) * 2;
        const noiseLevel = Math.max(0, zoom - 2) * 2;

        ctxQ.save();
        ctxQ.translate(150, 35);
        ctxQ.scale(zoom, zoom);
        ctxQ.translate(-150, -35);

        ctxQ.strokeStyle = '#a855f7';
        ctxQ.lineWidth = 1 / zoom;

        const qStep = 20;
        for (let x = 0; x <= 300; x += qStep) {
            for (let y = 0; y <= 70; y += qStep) {
                const nx = (Math.random() - 0.5) * noiseLevel;
                const ny = (Math.random() - 0.5) * noiseLevel;
                if (x < 300) { ctxQ.beginPath(); ctxQ.moveTo(x + nx, y + ny); ctxQ.lineTo(x + qStep + nx, y + ny); ctxQ.stroke(); }
                if (y < 70) { ctxQ.beginPath(); ctxQ.moveTo(x + nx, y + ny); ctxQ.lineTo(x + nx, y + qStep + ny); ctxQ.stroke(); }
            }
        }
        ctxQ.restore();
        // FIXED: Physics Logic - Scale: Planck
        drawLabel(ctxQ, 'SCALE: PLANCK', noiseLevel > 1 ? '⚠️ FOAM' : '', '#a855f7');


        // 4. Micro Time (Glow)
        ctxMicro.clearRect(0, 0, 300, 70);
        if (microPhase === 'forward') {
            p1.x += p1.vx; p2.x += p2.vx;
            if (p1.x >= p2.x - 10) { p1.vx *= -1; p2.vx *= -1; }
            if (p1.x < 20) microPhase = 'reset';
        } else if (microPhase === 'reset') {
            p1 = { x: 50, y: 35, vx: 3.5 }; p2 = { x: 250, y: 35, vx: -3.5 }; microPhase = 'forward';
        }
        ctxMicro.shadowBlur = 15; ctxMicro.shadowColor = '#f97316'; // GLOW
        ctxMicro.fillStyle = '#f97316';
        ctxMicro.beginPath(); ctxMicro.arc(p1.x, p1.y, 6, 0, Math.PI * 2); ctxMicro.fill();
        ctxMicro.beginPath(); ctxMicro.arc(p2.x, p2.y, 6, 0, Math.PI * 2); ctxMicro.fill();
        ctxMicro.shadowBlur = 0; // Reset
        drawLabel(ctxMicro, 'COLLISION', 'REVERSIBLE', '#f97316');


        // 5. Macro Time (Glow)
        ctxMacro.clearRect(0, 0, 300, 70);
        if (macroPhase === 'forward') {
            inkParticles.forEach(p => {
                p.x += p.vx; p.y += p.vy;
                p.hist.push({ x: p.x, y: p.y });
                if (p.x < 0 || p.x > 300) p.vx *= -1; if (p.y < 0 || p.y > 70) p.vy *= -1;
            });
            macroTimer++;
            if (macroTimer > 120) { macroPhase = 'reverse'; macroTimer = 0; }
        } else if (macroPhase === 'reverse') {
            inkParticles.forEach(p => {
                if (p.hist.length > 0) { const prev = p.hist.pop(); p.x = prev.x; p.y = prev.y; }
            });
            if (inkParticles[0].hist.length === 0) { macroPhase = 'forward'; }
        }
        ctxMacro.shadowBlur = 8; ctxMacro.shadowColor = '#ea580c'; // GLOW
        ctxMacro.fillStyle = '#ea580c';
        inkParticles.forEach(p => { ctxMacro.beginPath(); ctxMacro.arc(p.x, p.y, 2, 0, Math.PI * 2); ctxMacro.fill(); });
        ctxMacro.shadowBlur = 0; // Reset
        drawLabel(ctxMacro, macroPhase === 'forward' ? 'DIFFUSION' : 'REWIND', macroPhase === 'forward' ? 'NORMAL' : 'ABSURD', '#ea580c');


        // 6. The End of Time (Dissolving Hourglass)
        ctxEnd.clearRect(0, 0, 300, 70);

        // FIXED: Visual Visibility - Red Glow
        ctxEnd.shadowBlur = 15;
        ctxEnd.shadowColor = '#dc2626';

        // Draw Glass Segments (Dissolving)
        ctxEnd.strokeStyle = '#dc2626';
        ctxEnd.lineWidth = 2; // Thicker lines
        glassSegments.forEach(s => {
            s.x1 += s.dx * 0.1; s.y1 += s.dy * 0.1;
            s.x2 += s.dx * 0.1; s.y2 += s.dy * 0.1;
            s.alpha -= 0.002;
            if (s.alpha < 0) { // Reset
                s.x1 = s.ox1; s.y1 = s.oy1; s.x2 = s.ox2; s.y2 = s.oy2; s.alpha = 1;
            }
            ctxEnd.globalAlpha = Math.max(0, s.alpha);
            ctxEnd.beginPath(); ctxEnd.moveTo(s.x1, s.y1); ctxEnd.lineTo(s.x2, s.y2); ctxEnd.stroke();
        });
        ctxEnd.globalAlpha = 1;

        // Sand Falling & Dissolving
        if (Math.random() > 0.5) {
            sandParticles.push({ x: 150, y: 35, vx: (Math.random() - 0.5) * 0.5, vy: 1 + Math.random(), alpha: 1 });
        }
        ctxEnd.fillStyle = '#dc2626';
        for (let i = sandParticles.length - 1; i >= 0; i--) {
            const p = sandParticles[i];
            p.x += p.vx; p.y += p.vy;

            // Dissolve Logic: If below hourglass, drift and fade
            if (p.y > 60) {
                p.vx += (Math.random() - 0.5) * 0.2; // Random drift
                p.vy += 0.1;
                p.alpha -= 0.05; // Fade out
            } else {
                p.alpha -= 0.005; // Slow fade inside
            }

            ctxEnd.globalAlpha = Math.max(0, p.alpha);
            ctxEnd.fillRect(p.x, p.y, 2, 2); // Slightly larger particles
            if (p.alpha <= 0) sandParticles.splice(i, 1);
        }
        ctxEnd.globalAlpha = 1;
        ctxEnd.shadowBlur = 0; // Reset

        drawLabel(ctxEnd, 't = ?', 'DISSOLVING', '#dc2626');

        safeRequestAnimationFrame(animate);
    }

    function distort(x, y, mx, my) {
        const dx = x - mx;
        const dy = y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const pull = 500 / (dist * dist + 200);
        return { x: x - dx * pull, y: y - dy * pull };
    }

    function drawLabel(ctx, text1, text2, color) {
        ctx.font = 'bold 10px sans-serif'; // Modern Font
        ctx.fillStyle = color;
        ctx.fillText(text1, 5, 12);
        if (text2) {
            const text2Width = ctx.measureText(text2).width;
            ctx.fillStyle = 'rgba(255,255,255,0.1)'; // Subtle Background (No Border)
            ctx.fillRect(5, 16, text2Width + 8, 16);
            // No Stroke
            ctx.fillStyle = color;
            ctx.fillText(text2, 9, 27);
        }
    }

    animate();
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
function renderStructure(step = 'quark') {
    const stage = document.getElementById('structure-stage');
    const rulerProgress = document.querySelector('.ruler-progress');
    const rulerLabels = document.querySelectorAll('.ruler-label');
    const timelineItems = document.querySelectorAll('.timeline-item');

    // Update Ruler
    rulerLabels.forEach(label => {
        label.classList.remove('active');
        if (label.dataset.level === step) label.classList.add('active');
    });

    // Calculate Progress Height
    const levels = ['quark', 'nucleon', 'nucleus', 'atom', 'matter'];
    const index = levels.indexOf(step);
    const progress = (index / (levels.length - 1)) * 100; // 0% to 100%
    if (rulerProgress) rulerProgress.style.height = `${progress}%`;

    // Update Timeline
    timelineItems.forEach(item => {
        item.classList.remove('active');
        if (item.dataset.step === step) item.classList.add('active');

        // Add click listener if not already added (simple check)
        if (!item.onclick) {
            item.onclick = () => renderStructure(item.dataset.step);
        }
    });

    // Clear Stage
    stage.innerHTML = '';

    // Render Content based on Step
    if (step === 'quark') {
        renderQuarkSoup(stage);
    } else if (step === 'nucleon') {
        renderNucleon(stage);
    } else if (step === 'nucleus') {
        renderNucleusCluster(stage);
    } else if (step === 'atom') {
        renderElectronCloud(stage);
    } else if (step === 'matter') {
        renderMatter(stage);
    }
}

function renderQuarkSoup(stage, type = 'proton', scale = 1) {
    const container = document.createElement('div');
    container.style.cssText = `position: relative; width: 300px; height: 300px; transform: scale(${scale});`;

    // Label
    const label = document.createElement('div');
    label.textContent = type === 'proton' ? '质子 (Proton)' : '中子 (Neutron)';
    label.style.cssText = 'position: absolute; bottom: -40px; width: 100%; text-align: center; color: #fff; font-weight: bold; font-size: 1.2rem; text-shadow: 0 0 10px rgba(255,255,255,0.5);';
    container.appendChild(label);

    // Canvas for Gluons
    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 300;
    canvas.style.cssText = 'position: absolute; top: 0; left: 0; z-index: 1;';
    container.appendChild(canvas);

    // Quarks
    const quarks = type === 'proton' ? ['u', 'u', 'd'] : ['u', 'd', 'd'];
    const colors = ['#ff6b6b', '#22c55e', '#3b82f6']; // RGB
    const quarkEls = [];

    quarks.forEach((q, i) => {
        const el = document.createElement('div');
        el.textContent = q;
        el.style.cssText = `
            position: absolute; width: 50px; height: 50px; 
            background: radial-gradient(circle at 30% 30%, ${colors[i]}, #000);
            border-radius: 50%; display: flex; justify-content: center; align-items: center;
            color: #fff; font-weight: bold; font-size: 1.2rem; z-index: 2;
            box-shadow: 0 0 20px ${colors[i]};
        `;
        container.appendChild(el);
        quarkEls.push({ el, x: 150, y: 150, vx: 0, vy: 0, color: colors[i] });
    });

    stage.appendChild(container);

    // Animation Loop
    const ctx = canvas.getContext('2d');
    let t = 0;

    function animate() {
        if (!document.body.contains(canvas)) return;
        ctx.clearRect(0, 0, 300, 300);
        t += 0.05;

        // Update Quark Positions (Brownian-like constraint)
        const center = { x: 150, y: 150 };
        quarkEls.forEach((q, i) => {
            // Target position (Triangle)
            const angle = (i * 2 * Math.PI / 3) + t * 0.5;
            const targetX = center.x + Math.cos(angle) * 60;
            const targetY = center.y + Math.sin(angle) * 60;

            // Ease towards target
            q.x += (targetX - q.x) * 0.1;
            q.y += (targetY - q.y) * 0.1;

            // Apply to DOM
            q.el.style.left = `${q.x - 25}px`;
            q.el.style.top = `${q.y - 25}px`;
        });

        // Draw Flux Tubes (Elastic Gluons)
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';

        for (let i = 0; i < quarkEls.length; i++) {
            for (let j = i + 1; j < quarkEls.length; j++) {
                const p1 = quarkEls[i];
                const p2 = quarkEls[j];

                // Dynamic Gradient
                const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
                grad.addColorStop(0, p1.color);
                grad.addColorStop(1, p2.color);
                ctx.strokeStyle = grad;

                // Draw Curve (Spring effect)
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);

                const midX = (p1.x + p2.x) / 2;
                const midY = (p1.y + p2.y) / 2;
                // Control point oscillates to simulate tension
                const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y);
                const offset = Math.sin(t * 2 + dist * 0.1) * 20;

                // Perpendicular vector
                const nx = -(p2.y - p1.y) / dist;
                const ny = (p2.x - p1.x) / dist;

                ctx.quadraticCurveTo(midX + nx * offset, midY + ny * offset, p2.x, p2.y);
                ctx.stroke();

                // Draw Gluon Particles
                const particles = 3;
                for (let k = 0; k < particles; k++) {
                    const progress = (t * 0.5 + k / particles) % 1;
                    const px = (1 - progress) * (1 - progress) * p1.x + 2 * (1 - progress) * progress * (midX + nx * offset) + progress * progress * p2.x;
                    const py = (1 - progress) * (1 - progress) * p1.y + 2 * (1 - progress) * progress * (midY + ny * offset) + progress * progress * p2.y;

                    ctx.beginPath();
                    ctx.fillStyle = '#fff';
                    ctx.arc(px, py, 3, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        }

        safeRequestAnimationFrame(animate);
    }
    animate();
}

function renderNucleon(stage) {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex; gap: 4rem; align-items: center;';
    stage.appendChild(wrapper);

    // Render Proton and Neutron side-by-side
    // We need to wrap renderQuarkSoup to append to wrapper instead of stage
    // But renderQuarkSoup appends to 'stage'. Let's modify it to accept container.
    // Actually, I passed 'stage' as argument, so I can pass 'wrapper'.
    renderQuarkSoup(wrapper, 'proton', 0.8);
    renderQuarkSoup(wrapper, 'neutron', 0.8);
}
function renderNucleusCluster(stage) {
    const container = document.createElement('div');
    container.style.cssText = 'position: relative; width: 300px; height: 300px; animation: scaleIn 0.5s ease forwards;';

    // Label
    const label = document.createElement('div');
    label.textContent = '氦核 (Helium Nucleus / α-particle)';
    label.style.cssText = 'position: absolute; bottom: -40px; width: 100%; text-align: center; color: #fff; font-weight: bold; font-size: 1.2rem; text-shadow: 0 0 10px rgba(255,255,255,0.5);';
    container.appendChild(label);

    // Cluster of 4 Nucleons (2p + 2n)
    // Positions for a tetrahedron-like cluster
    const nucleons = [
        { type: 'p', x: 130, y: 130, z: 0 },
        { type: 'n', x: 170, y: 130, z: 0 },
        { type: 'n', x: 130, y: 170, z: 1 },
        { type: 'p', x: 170, y: 170, z: 1 }
    ];

    nucleons.forEach(n => {
        const el = document.createElement('div');
        el.textContent = n.type === 'p' ? 'p' : 'n';
        el.style.cssText = `
            position: absolute; left: ${n.x}px; top: ${n.y}px;
            width: 60px; height: 60px;
            background: radial-gradient(circle at 30% 30%, ${n.type === 'p' ? '#ff6b6b' : '#3b82f6'}, #000);
            border-radius: 50%; display: flex; justify-content: center; align-items: center;
            color: #fff; font-weight: bold; font-size: 1.5rem;
            box-shadow: 0 0 20px ${n.type === 'p' ? 'rgba(255,107,107,0.5)' : 'rgba(59,130,246,0.5)'};
            transform: translate(-50%, -50%) scale(${n.z ? 1.1 : 0.9}); /* Fake depth */
            z-index: ${n.z ? 2 : 1};
            animation: breathe 3s infinite ease-in-out;
        `;
        container.appendChild(el);
    });

    stage.appendChild(container);
}

function renderElectronCloud(stage) {
    const container = document.createElement('div');
    container.style.cssText = 'position: relative; width: 400px; height: 400px;';

    // Label
    const label = document.createElement('div');
    label.textContent = '氦原子 (Helium Atom)';
    label.style.cssText = 'position: absolute; bottom: -40px; width: 100%; text-align: center; color: #fff; font-weight: bold; font-size: 1.2rem; text-shadow: 0 0 10px rgba(255,255,255,0.5);';
    container.appendChild(label);

    // Canvas for Cloud
    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 400;
    canvas.style.cssText = 'position: absolute; top: 0; left: 0; z-index: 1;';
    container.appendChild(canvas);

    // Bright Nucleus in Center (Star-like)
    const nucleus = document.createElement('div');
    nucleus.style.cssText = `
        position: absolute; top: 50%; left: 50%; width: 6px; height: 6px;
        background: #fff; border-radius: 50%; transform: translate(-50%, -50%);
        box-shadow: 0 0 15px #fff, 0 0 30px #6366f1; z-index: 2;
        animation: pulseNucleus 2s infinite ease-in-out;
    `;
    container.appendChild(nucleus);

    stage.appendChild(container);

    // Cloud Animation
    const ctx = canvas.getContext('2d');
    const particles = [];
    const particleCount = 3000; // Increased density

    for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        // Probability distribution: denser near center, fading out
        // Use a gaussian-like distribution
        const u = Math.random() + Math.random() + Math.random() + Math.random();
        const r = (u / 4) * 180; // Max radius 180

        particles.push({
            x: 200 + Math.cos(angle) * r,
            y: 200 + Math.sin(angle) * r,
            alpha: (1 - (r / 180)) * 0.5 + 0.1, // Fades out at edges
            speed: Math.random() * 0.05
        });
    }

    function animate() {
        if (!document.body.contains(canvas)) return;
        ctx.clearRect(0, 0, 400, 400);

        // Draw Cloud (Mist)
        // Use composite operation for glowing effect
        ctx.globalCompositeOperation = 'lighter';

        particles.forEach(p => {
            // Jitter
            p.x += (Math.random() - 0.5) * 2;
            p.y += (Math.random() - 0.5) * 2;

            // Draw diffuse particle
            ctx.fillStyle = `rgba(99, 102, 241, ${p.alpha * (0.5 + Math.random() * 0.5)})`; // Flickering
            ctx.fillRect(p.x, p.y, 1.5, 1.5);
        });

        // Occasional Electron Flash (Quantum Leap)
        if (Math.random() > 0.92) {
            const p = particles[Math.floor(Math.random() * particles.length)];
            ctx.globalAlpha = 0.8;
            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 15;
            ctx.shadowColor = '#fff';
            ctx.stroke();
            ctx.shadowBlur = 0;
        }

        ctx.globalCompositeOperation = 'source-over';
        safeRequestAnimationFrame(animate);
    }
    animate();
}

function renderMatter(stage) {
    const container = document.createElement('div');
    container.style.cssText = 'position: relative; width: 100%; height: 100%; overflow: hidden; display: flex; justify-content: center; align-items: center; perspective: 1000px;';

    // Wrapper for Zoom Effect
    const zoomWrapper = document.createElement('div');
    zoomWrapper.style.cssText = `
        position: relative; width: 400px; height: 400px; 
        transform-style: preserve-3d;
        transition: transform 4s cubic-bezier(0.25, 1, 0.5, 1), opacity 4s ease;
    `;
    container.appendChild(zoomWrapper);

    // Label for Lattice (Initially Visible)
    const latticeLabel = document.createElement('div');
    latticeLabel.innerHTML = '物质晶格<br><span style="font-size: 0.8em; opacity: 0.7;">(Crystal Lattice)</span>';
    latticeLabel.style.cssText = `
        position: absolute; bottom: -60px; width: 100%; text-align: center;
        color: #fff; font-weight: bold; font-size: 1.2rem;
        text-shadow: 0 0 10px rgba(168, 85, 247, 0.5);
        transition: opacity 2s ease;
    `;
    zoomWrapper.appendChild(latticeLabel);

    // 1. Crystal Lattice (Micro) - Increased Density
    const lattice = document.createElement('div');
    lattice.style.cssText = 'width: 100%; height: 100%; transform-style: preserve-3d; animation: rotateLattice 20s infinite linear;';

    // Create 4x4x4 grid (64 atoms) for denser look
    const gridSize = 4;
    const spacing = 60;
    const offset = (gridSize - 1) * spacing / 2;

    for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
            for (let z = 0; z < gridSize; z++) {
                const atom = document.createElement('div');
                atom.style.cssText = `
                    position: absolute; width: 12px; height: 12px;
                    background: radial-gradient(circle at 30% 30%, #a855f7, #000);
                    border-radius: 50%;
                    transform: translate3d(${x * spacing - offset + 200}px, ${y * spacing - offset + 200}px, ${z * spacing - offset}px);
                    box-shadow: 0 0 10px rgba(168, 85, 247, 0.6);
                `;
                lattice.appendChild(atom);

                // Connections (Glowing Bonds) - Only draw if neighbor exists
                if (x < gridSize - 1) createBond(lattice, x * spacing - offset + 200, y * spacing - offset + 200, z * spacing - offset, (x + 1) * spacing - offset + 200, y * spacing - offset + 200, z * spacing - offset);
                if (y < gridSize - 1) createBond(lattice, x * spacing - offset + 200, y * spacing - offset + 200, z * spacing - offset, x * spacing - offset + 200, (y + 1) * spacing - offset + 200, z * spacing - offset);
                if (z < gridSize - 1) createBond(lattice, x * spacing - offset + 200, y * spacing - offset + 200, z * spacing - offset, x * spacing - offset + 200, y * spacing - offset + 200, (z + 1) * spacing - offset);
            }
        }
    }
    zoomWrapper.appendChild(lattice);

    // 2. Macro Object (Planet) - Initially Hidden
    const macroObject = document.createElement('div');
    macroObject.textContent = '🪐';
    macroObject.style.cssText = `
        position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(0.1);
        font-size: 200px; opacity: 0; transition: all 3s ease;
        filter: drop-shadow(0 0 50px rgba(168, 85, 247, 0.8));
        z-index: 10;
    `;
    container.appendChild(macroObject);

    // 3. Text Overlay
    const textOverlay = document.createElement('div');
    textOverlay.innerHTML = '当无数个广场折叠压缩<br>便涌现出了我们眼中的宏观世界';
    textOverlay.style.cssText = `
        position: absolute; bottom: 15%; width: 100%; text-align: center;
        color: #fff; font-size: 1.5rem; font-weight: bold; opacity: 0;
        text-shadow: 0 0 10px rgba(0,0,0,0.8); transition: opacity 2s ease;
        z-index: 20; pointer-events: none;
    `;
    container.appendChild(textOverlay);

    stage.appendChild(container);

    // Trigger Animation Sequence
    setTimeout(() => {
        // Zoom Out Lattice (Become dots)
        // Scale down significantly to simulate "Zoom Out"
        zoomWrapper.style.transform = 'scale(0.05) rotateZ(720deg)';
        zoomWrapper.style.opacity = '0'; // Fade out eventually
        latticeLabel.style.opacity = '0'; // Fade out lattice label

        // Fade In Planet
        setTimeout(() => {
            macroObject.style.opacity = '1';
            macroObject.style.transform = 'translate(-50%, -50%) scale(1)';
            textOverlay.style.opacity = '1';
        }, 1500); // Start fading in while zooming out
    }, 2000); // Wait 2s before starting
}

function createBond(parent, x1, y1, z1, x2, y2, z2) {
    const bond = document.createElement('div');
    const length = Math.hypot(x2 - x1, y2 - y1, z2 - z1);
    bond.style.cssText = `
        position: absolute; width: ${length}px; height: 1px; 
        background: linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.6), transparent);
        box-shadow: 0 0 8px rgba(168, 85, 247, 0.3);
        transform-origin: 0 50%;
        transform: translate3d(${x1}px, ${y1}px, ${z1}px) rotateY(${Math.atan2(z2 - z1, x2 - x1)}rad) rotateZ(${Math.atan2(y2 - y1, x2 - x1)}rad);
    `;
    parent.appendChild(bond);
}
function createNucleus(stage, type) { // type: 'proton' or 'neutron'
    const container = document.createElement('div');
    container.style.cssText = 'position: relative; width: 200px; height: 200px; animation: scaleIn 0.5s ease forwards;';

    // Quarks
    const quarks = type === 'proton'
        ? ['u', 'u', 'd']
        : ['u', 'd', 'd'];

    // RGB Colors: Red, Green, Blue
    // Proton (uud): Red(u), Green(u), Blue(d) - Wait, u and u must be different colors?
    // Actually, QCD says the *combination* must be white.
    // So one u is Red, one u is Green, one d is Blue.
    // Neutron (udd): One u is Red, one d is Green, one d is Blue.
    // The specific assignment doesn't matter as long as it's RGB.
    const colors = ['#ff6b6b', '#22c55e', '#3b82f6']; // Red, Green, Blue

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
            color: #fff; font-weight: bold; box-shadow: 0 0 15px ${colors[i]};
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
        if (currentView !== 'structure') return;
        if (!document.body.contains(canvas)) return;
        ctx.clearRect(0, 0, 200, 200);

        const t = Date.now() / 1000;

        // Draw connecting spirals (Flux Tubes)
        const points = [
            { x: 100, y: 40 },  // Top
            { x: 60, y: 140 },  // Left
            { x: 140, y: 140 }  // Right
        ];

        ctx.lineWidth = 3;

        // Connect each pair
        for (let i = 0; i < points.length; i++) {
            for (let j = i + 1; j < points.length; j++) {
                const p1 = points[i];
                const p2 = points[j];

                // Dynamic Spiral
                const dx = p2.x - p1.x;
                const dy = p2.y - p1.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const angle = Math.atan2(dy, dx);

                ctx.save();
                ctx.translate(p1.x, p1.y);
                ctx.rotate(angle);

                ctx.beginPath();
                ctx.strokeStyle = `rgba(255, 255, 255, ${0.3 + 0.2 * Math.sin(t * 5)})`; // Pulsing opacity

                // Draw spiral path
                const loops = 4;
                const amp = 8;
                for (let k = 0; k <= dist; k += 2) {
                    const phase = (k / 10) - (t * 10); // Moving wave
                    const yOffset = Math.sin(phase) * amp * Math.sin(Math.PI * k / dist); // Envelope
                    if (k === 0) ctx.moveTo(k, yOffset);
                    else ctx.lineTo(k, yOffset);
                }
                ctx.stroke();
                ctx.restore();
            }
        }

        // Central Junction (Gluon Knot)
        ctx.beginPath();
        ctx.arc(100, 100, 10 + 2 * Math.sin(t * 8), 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.fill();

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

    // Canvas for Visuals
    const canvas = document.createElement('canvas');
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.display = 'block'; // Fix for infinite scroll/growth
    stage.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    // Holographic UI Container
    const uiLayer = document.createElement('div');
    uiLayer.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; opacity: 0; transition: opacity 1s ease 1.5s;';

    // Scanner Brackets (Corners)
    const bracketSize = '20px';
    const bracketColor = 'rgba(78, 205, 196, 0.5)';
    const corners = [
        { top: 0, left: 0, borderTop: `2px solid ${bracketColor}`, borderLeft: `2px solid ${bracketColor}` },
        { top: 0, right: 0, borderTop: `2px solid ${bracketColor}`, borderRight: `2px solid ${bracketColor}` },
        { bottom: 0, left: 0, borderBottom: `2px solid ${bracketColor}`, borderLeft: `2px solid ${bracketColor}` },
        { bottom: 0, right: 0, borderBottom: `2px solid ${bracketColor}`, borderRight: `2px solid ${bracketColor}` }
    ];
    corners.forEach(style => {
        const el = document.createElement('div');
        el.style.position = 'absolute';
        el.style.width = bracketSize;
        el.style.height = bracketSize;
        Object.assign(el.style, style);
        uiLayer.appendChild(el);
    });

    stage.appendChild(uiLayer);

    // Trigger Fade In
    requestAnimationFrame(() => {
        uiLayer.style.opacity = '1';
    });

    // Create Labels with HUD-style formatting
    const labelQuark = createHoloLabel(uiLayer, '<1%', '夸克本征质量', 'right');
    const labelField = createHoloLabel(uiLayer, '>99%', '胶子场势能 (质量来源)', 'left');

    let width, height, cx, cy;
    let particles = [];
    let animationFrameId;

    function resize() {
        const rect = stage.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;

        const newW = Math.floor(rect.width);
        const newH = Math.floor(rect.height);

        if (canvas.width === newW && canvas.height === newH) return;

        canvas.width = newW;
        canvas.height = newH;
        width = canvas.width;
        height = canvas.height;
        cx = width / 2;
        cy = height / 2;

        // Initialize Quarks (Asymmetrical Triangle)
        const size = Math.min(width, height) * 0.25;
        particles = [
            { baseAngle: -Math.PI / 2 + (Math.random() - 0.5) * 0.2, color: '#ff6b6b', label: 'u', x: 0, y: 0, jx: 0, jy: 0 }, // Top
            { baseAngle: Math.PI / 6 + (Math.random() - 0.5) * 0.2, color: '#ff6b6b', label: 'u', x: 0, y: 0, jx: 0, jy: 0 },  // Bottom Right
            { baseAngle: 5 * Math.PI / 6 + (Math.random() - 0.5) * 0.2, color: '#4ecdc4', label: 'd', x: 0, y: 0, jx: 0, jy: 0 } // Bottom Left
        ];

        particles.forEach(p => {
            // Add slight distance variation
            const dist = size * (0.9 + Math.random() * 0.2);
            p.baseX = cx + Math.cos(p.baseAngle) * dist;
            p.baseY = cy + Math.sin(p.baseAngle) * dist;
        });
    }

    function createHoloLabel(container, value, description, align) {
        const el = document.createElement('div');
        el.className = 'holo-label';
        el.innerHTML = `
            <div class="target-dot"></div>
            <div class="line"></div>
            <div class="text-box">
                <span class="highlight-value">${value}</span>
                <span class="label-text">${description}</span>
            </div>
        `;
        container.appendChild(el);
        return { el, align };
    }

    function updateLabel(labelObj, targetX, targetY) {
        const { el, align } = labelObj;
        const line = el.querySelector('.line');
        const textBox = el.querySelector('.text-box');
        const dot = el.querySelector('.target-dot');

        // Position label away from target
        // Dynamic offset based on alignment
        // Adjusted offsets to avoid overlap
        const offsetX = align === 'right' ? 100 : -280;
        const offsetY = align === 'right' ? -60 : 120; // Move left label further down

        // The 'el' is positioned at the TARGET
        el.style.left = targetX + 'px';
        el.style.top = targetY + 'px';

        // Dot is at 0,0 (target)
        if (dot) {
            dot.style.position = 'absolute';
            dot.style.left = '-3px';
            dot.style.top = '-3px';
            dot.style.width = '6px';
            dot.style.height = '6px';
            dot.style.background = '#fff';
            dot.style.borderRadius = '50%';
            dot.style.boxShadow = '0 0 5px #fff';
        }

        // Text Box Position
        textBox.style.position = 'absolute';
        textBox.style.left = offsetX + 'px';
        textBox.style.top = offsetY + 'px';
        textBox.style.whiteSpace = 'nowrap';

        // Line from 0,0 to Text Box
        // Calculate length and angle
        const dx = offsetX;
        const dy = offsetY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx);

        line.style.position = 'absolute';
        line.style.top = '0';
        line.style.left = '0';
        line.style.width = dist + 'px';
        line.style.height = '1px';
        line.style.background = 'rgba(255, 255, 255, 0.5)';
        line.style.transformOrigin = '0 0';
        line.style.transform = `rotate(${angle}rad)`;
    }

    function animate() {
        if (currentView !== 'strong') return;
        if (!document.body.contains(canvas)) {
            cancelAnimationFrame(animationFrameId);
            return;
        }
        if (canvas.width === 0 || canvas.height === 0) resize();

        // Background: Deep Space with Color Charge Perturbation
        ctx.fillStyle = '#020205'; // Very dark blue-black, not dead black
        ctx.fillRect(0, 0, width, height);

        // Faint Color Fog
        const time = Date.now() * 0.0005;
        const fogColors = ['rgba(255, 107, 107, 0.03)', 'rgba(78, 205, 196, 0.03)', 'rgba(167, 139, 250, 0.03)'];

        fogColors.forEach((color, i) => {
            const fx = cx + Math.sin(time + i * 2) * (width * 0.3);
            const fy = cy + Math.cos(time * 0.7 + i) * (height * 0.3);
            const grad = ctx.createRadialGradient(fx, fy, 0, fx, fy, width * 0.6);
            grad.addColorStop(0, color);
            grad.addColorStop(1, 'transparent');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, width, height);
        });

        const t = Date.now() / 1000;

        // 1. Update Particles (Jitter)
        particles.forEach((p, i) => {
            // More chaotic jitter
            p.jx = (Math.random() - 0.5) * 5;
            p.jy = (Math.random() - 0.5) * 5;

            p.x = p.baseX + p.jx;
            p.y = p.baseY + p.jy;
        });

        // 2. Draw Flux Tubes (Plasma/Lightning Effect)
        ctx.globalCompositeOperation = 'screen';

        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const p1 = particles[i];
                const p2 = particles[j];

                const dx = p2.x - p1.x;
                const dy = p2.y - p1.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                // Tension: Curve towards center
                // Calculate midpoint
                const midX = (p1.x + p2.x) / 2;
                const midY = (p1.y + p2.y) / 2;

                // Vector from midpoint to center
                const toCenterX = cx - midX;
                const toCenterY = cy - midY;

                // Curve amount depends on distance (more stretch = more straight? or more curved?)
                // Let's make them curve INWARD (like stretched rubber bands)
                const curveAmount = 0.3;
                const cpX = midX + toCenterX * curveAmount + Math.sin(t * 15 + i * j) * 5; // Add vibration to curve
                const cpY = midY + toCenterY * curveAmount + Math.cos(t * 15 + i * j) * 5;

                // Gradient
                const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
                grad.addColorStop(0, p1.color);
                grad.addColorStop(1, p2.color);

                // Layer 1: Glow (Wide, Stable)
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.quadraticCurveTo(cpX, cpY, p2.x, p2.y);
                ctx.strokeStyle = grad;
                ctx.lineWidth = 8;
                ctx.globalAlpha = 0.3;
                ctx.shadowBlur = 20;
                ctx.shadowColor = p1.color;
                ctx.stroke();

                // Layer 2: Core (Medium, Pulsing)
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.quadraticCurveTo(cpX, cpY, p2.x, p2.y);
                ctx.lineWidth = 3 + Math.sin(t * 20) * 1;
                ctx.globalAlpha = 0.8;
                ctx.shadowBlur = 10;
                ctx.stroke();

                // Layer 3: Lightning (Thin, Jagged, White)
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                // Jitter the control point for lightning effect
                const boltCpX = cpX + (Math.random() - 0.5) * 15;
                const boltCpY = cpY + (Math.random() - 0.5) * 15;
                ctx.quadraticCurveTo(boltCpX, boltCpY, p2.x, p2.y);
                ctx.strokeStyle = '#fff';
                ctx.lineWidth = 1.5;
                ctx.globalAlpha = 0.9;
                ctx.shadowBlur = 5;
                ctx.stroke();
            }
        }
        ctx.globalAlpha = 1.0;
        ctx.globalCompositeOperation = 'source-over';
        ctx.shadowBlur = 0;

        // 3. Draw Quarks
        particles.forEach(p => {
            // Glow
            ctx.shadowBlur = 25;
            ctx.shadowColor = p.color;
            ctx.fillStyle = p.color;

            ctx.beginPath();
            ctx.arc(p.x, p.y, 12, 0, Math.PI * 2);
            ctx.fill();

            // Label with inner glow effect - looks like energy core inside quark
            ctx.shadowColor = '#fff';
            ctx.shadowBlur = 6;
            ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
            ctx.font = 'bold 11px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(p.label, p.x, p.y);
            // Double stroke for glow
            ctx.shadowBlur = 3;
            ctx.fillText(p.label, p.x, p.y);
            ctx.shadowBlur = 0;
        });

        // 4. Update Holographic Labels
        updateLabel(labelQuark, particles[0].x, particles[0].y);
        updateLabel(labelField, cx, cy);

        animationFrameId = requestAnimationFrame(animate);
    }

    // Use ResizeObserver
    const observer = new ResizeObserver(() => {
        resize();
    });
    observer.observe(stage);

    resize();
    animate();
}

// --- Group Theory View Logic ---
function renderGroupTheory() {
    const stage = document.getElementById('group-stage');
    if (!stage) return;
    stage.innerHTML = '';

    // Main Container
    const wrapper = document.createElement('div');
    wrapper.style.cssText = `
        display: flex; flex-direction: column; align-items: center; justify-content: flex-start;
        padding: 2rem; width: 100%; height: 100%; overflow-y: auto;
    `;

    // 1. Fiber Bundle Header
    const headerContainer = document.createElement('div');
    headerContainer.style.cssText = 'width: 100%; max-width: 800px; margin-bottom: 1rem; text-align: left;';
    headerContainer.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
            <span style="font-size: 1.5rem;">🌐</span>
            <h3 style="color: #a78bfa; margin: 0; font-size: 1.3rem;">纤维丛：时空 × 内禀空间</h3>
        </div>
        <p style="color: #cfd8dc; opacity: 0.8; font-size: 0.9rem; margin: 0;">
            每个时空点上都"长"着一个内禀空间 (圆/球/流形)。局部变换这些空间需要规范场来"缝合"。
        </p>
    `;
    wrapper.appendChild(headerContainer);

    // 2. Fiber Bundle Canvas (The Good Version)
    const bundleCanvas = document.createElement('canvas');
    bundleCanvas.width = 800;
    bundleCanvas.height = 350;
    bundleCanvas.style.cssText = 'width: 100%; height: 350px; margin-bottom: 2rem; background: rgba(0,0,0,0.2); border-radius: 12px; border: 1px solid rgba(167, 139, 250, 0.2);';
    wrapper.appendChild(bundleCanvas);

    // 3. Maxwell vs Yang-Mills Title (Restored)
    const comparisonTitle = document.createElement('h3');
    comparisonTitle.innerHTML = '⚡ Maxwell vs Yang-Mills：自相互作用的革命';
    comparisonTitle.style.cssText = 'margin-bottom: 0.4rem; color: #a5b4fc; font-size: 1.1rem; margin-top: 0;';
    wrapper.appendChild(comparisonTitle);

    const comparisonSubtitle = document.createElement('p');
    comparisonSubtitle.innerHTML = '线性传播 vs 非线性纠缠 (Linear Propagation vs Nonlinear Entanglement)';
    comparisonSubtitle.style.cssText = 'margin-bottom: 1rem; color: rgba(255,255,255,0.6); font-size: 0.8rem; font-style: italic; text-align: center;';
    wrapper.appendChild(comparisonSubtitle);

    // 4. Comparison Visuals Container
    const comparisonContainer = document.createElement('div');
    comparisonContainer.style.cssText = 'display: flex; gap: 1rem; width: 100%; height: 180px; margin-bottom: 2rem;';
    wrapper.appendChild(comparisonContainer);

    // LEFT: U(1) Photons
    const photonPanel = document.createElement('div');
    photonPanel.style.cssText = 'flex: 1; background: rgba(252, 211, 77, 0.05); border: 1px solid rgba(252, 211, 77, 0.3); border-radius: 12px; padding: 1rem; position: relative; display: flex; flex-direction: column; justify-content: space-between;';
    photonPanel.innerHTML = `
        <h4 style="color: #fcd34d; margin: 0 0 0.5rem 0; font-size: 0.95rem;">📡 U(1): 光子互不理睬</h4>
        <canvas id="photon-demo" style="width: 100%; height: 80px; background: rgba(0,0,0,0.2); border-radius: 8px;"></canvas>
        <p style="margin: 0.5rem 0 0 0; font-size: 0.75rem; opacity: 0.8; color: #fcd34d;">光子不带电荷 → 穿过彼此</p>
    `;
    comparisonContainer.appendChild(photonPanel);

    // RIGHT: SU(3) Gluons
    const gluonPanel = document.createElement('div');
    gluonPanel.style.cssText = 'flex: 1; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 12px; padding: 1rem; position: relative; display: flex; flex-direction: column; justify-content: space-between;';
    gluonPanel.innerHTML = `
        <h4 style="color: #ef4444; margin: 0 0 0.5rem 0; font-size: 0.95rem;">✴️ SU(3): 胶子互相纠缠</h4>
        <canvas id="gluon-demo" style="width: 100%; height: 80px; background: rgba(0,0,0,0.2); border-radius: 8px;"></canvas>
        <p style="margin: 0.5rem 0 0 0; font-size: 0.75rem; opacity: 0.8; color: #ef4444;">胶子带荷 → 纠缠打结</p>
    `;
    comparisonContainer.appendChild(gluonPanel);

    stage.appendChild(wrapper);

    // --- Animation Logic (Restored from previous version) ---

    // 1. Fiber Bundle Animation (The Logic of Gauge Fields)
    const ctx = bundleCanvas.getContext('2d');

    // Fiber Objects
    const fibers = [
        { id: 'u1', label: 'U(1) 电磁', color: '#fcd34d', type: 'U1', x: 200, phase: 0, speed: Math.random() * 2 + 1 },
        { id: 'su2', label: 'SU(2) 弱力', color: '#4ecdc4', type: 'SU2', x: 400, phase: 0, speed: Math.random() * 2 + 1 },
        { id: 'su3', label: 'SU(3) 强力', color: '#ff6b6b', type: 'SU3', x: 600, phase: 0, speed: Math.random() * 2 + 1 }
    ];

    function animateFiberBundle() {
        if (!document.getElementById('group-stage')) return;

        const rect = bundleCanvas.getBoundingClientRect();
        bundleCanvas.width = rect.width;
        bundleCanvas.height = rect.height; // Match CSS height 1:1 to prevent distortion

        const ctx = bundleCanvas.getContext('2d');
        // Use a start time reference so animation always begins at SLIDE phase
        if (!window.fiberBundleStartTime) window.fiberBundleStartTime = performance.now() / 1000;
        const time = performance.now() / 1000 - window.fiberBundleStartTime;
        const cycleDuration = 15;
        const t = time % cycleDuration;

        // --- PHASES ---
        // 0-5s:  SLIDE (Transport X -> X+dx, accumulating error)
        // 5-8s:  MISMATCH (Alarm! Ghost != Real)
        // 8-12s: CORRECTION (Force Field activates, pushes Real -> Ghost)
        // 12-15s: ORDER (Aligned, peaceful)

        let phase, progress;
        let correctionFactor = 0; // 0 = broken, 1 = fixed
        let mismatchAlarm = 0;    // 0 = off, 1 = max alarm

        if (t < 5) {
            phase = 'SLIDE';
            progress = t / 5; // 0 -> 1 (Travel)
        } else if (t < 8) {
            phase = 'MISMATCH';
            progress = 1;
            mismatchAlarm = Math.sin((t - 5) * 10) * 0.5 + 0.5; // Flash
        } else if (t < 12) {
            phase = 'CORRECTION';
            progress = 1;
            // Smooth ease out for correction
            const ct = (t - 8) / 4;
            correctionFactor = 1 - Math.pow(1 - ct, 3); // Ease out cubic
        } else {
            phase = 'ORDER';
            progress = 1;
            correctionFactor = 1;
        }

        ctx.clearRect(0, 0, bundleCanvas.width, bundleCanvas.height);

        // --- GLOBAL TEXT ---
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const cx = bundleCanvas.width / 2;

        if (phase === 'SLIDE') {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            ctx.font = 'bold 24px "Inter", sans-serif';
            ctx.fillText('1. Parallel Transport (平移)', cx, 40);
            ctx.font = '16px "Inter", sans-serif';
            ctx.fillText('Particle moving to neighbor point...', cx, 70);
        } else if (phase === 'MISMATCH') {
            ctx.fillStyle = `rgba(239, 68, 68, ${0.6 + mismatchAlarm * 0.4})`;
            ctx.font = 'bold 24px "Inter", sans-serif';
            ctx.fillText('2. Phase Mismatch (相位错位)', cx, 40);
            ctx.font = '16px "Inter", sans-serif';
            ctx.fillText('⚠️ Local Symmetry Broken! Need Force!', cx, 70);
        } else if (phase === 'CORRECTION') {
            ctx.fillStyle = 'rgba(252, 211, 77, 1)';
            ctx.font = 'bold 24px "Inter", sans-serif';
            ctx.fillText('3. Gauge Force Correction (规范场修复)', cx, 40);
            ctx.font = '16px "Inter", sans-serif';
            ctx.fillText('Force = Curvature Compensation', cx, 70);
        } else {
            ctx.fillStyle = 'rgba(74, 222, 128, 1)';
            ctx.font = 'bold 24px "Inter", sans-serif';
            ctx.fillText('4. Symmetry Restored (对称性恢复)', cx, 40);
            ctx.font = '16px "Inter", sans-serif';
            ctx.fillText('Local Gauge Invariance maintained.', cx, 70);
        }

        // LAYOUT & SCALE VARIABLES
        // Safe limits to prevent clipping on smaller screens
        const r = 45; // reduced
        const ghostOffset = 140; // Extended for longer tube
        const spacing = bundleCanvas.width / 3.0;

        const centerY = bundleCanvas.height * 0.45;
        const axisY = bundleCanvas.height * 0.75;

        // HELPERS
        function drawArrow(x1, y1, x2, y2, color) {
            const headlen = 12;
            const dx = x2 - x1;
            const dy = y2 - y1;
            const angle = Math.atan2(dy, dx);
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.lineTo(x2 - headlen * Math.cos(angle - Math.PI / 6), y2 - headlen * Math.sin(angle - Math.PI / 6));
            ctx.moveTo(x2, y2);
            ctx.lineTo(x2 - headlen * Math.cos(angle + Math.PI / 6), y2 - headlen * Math.sin(angle + Math.PI / 6));
            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            ctx.stroke();
        }

        // Draw Axis Line
        ctx.beginPath();
        ctx.moveTo(50, axisY);
        ctx.lineTo(bundleCanvas.width - 50, axisY);
        ctx.strokeStyle = 'rgba(255,255,255,0.3)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Axis Label (Moved to Left Top of Axis to avoid overlap)
        ctx.fillStyle = '#94a3b8';
        ctx.textAlign = 'left';
        ctx.font = 'italic 14px "Inter", sans-serif';
        ctx.fillText('Spacetime Coordinates (M)', 50, axisY - 15);
        ctx.textAlign = 'center'; // Reset

        // --- LOCK FLASH EFFECT (Global Check per fiber) ---
        const showLockFlash = (x, y) => {
            const localT = t % cycleDuration;
            if (phase === 'ORDER' && localT < 12.3) {
                ctx.save();
                ctx.globalCompositeOperation = 'lighter';
                ctx.beginPath(); ctx.arc(x, y, 90, 0, Math.PI * 2); // Bigger flash
                const grad = ctx.createRadialGradient(x, y, 10, x, y, 90);
                grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
                grad.addColorStop(1, 'rgba(255, 215, 0, 0)');
                ctx.fillStyle = grad;
                ctx.fill();
                ctx.restore();
            }
        };

        // --- RENDER FIBERS ---
        fibers.forEach((f, i) => {
            // Position Calculation: Account for ghostOffset and flash effects
            const margin = 90; // Extra margin for flash effect visibility
            const halfOffset = ghostOffset / 2; // 70
            const leftBound = margin + halfOffset; // Start point for first bx
            const rightBound = bundleCanvas.width - margin - halfOffset; // End point for last bx
            const span = rightBound - leftBound;
            const bx = leftBound + span * (i / 2); // Evenly distributed centers
            const baseX = bx - halfOffset;
            const targetX = baseX + ghostOffset;

            // Labels - position below the phase title text
            ctx.fillStyle = f.color;
            ctx.font = 'bold 16px "Inter", sans-serif';
            ctx.fillText(f.label, baseX + ghostOffset / 2, 100);

            // Draw X and X+dx points on axis
            ctx.fillStyle = f.color; // Match fiber color
            ctx.globalAlpha = 0.8;
            ctx.beginPath(); ctx.arc(baseX, axisY, 5, 0, Math.PI * 2); ctx.fill();
            ctx.beginPath(); ctx.arc(targetX, axisY, 5, 0, Math.PI * 2); ctx.fill();
            ctx.globalAlpha = 1;

            // Labels
            ctx.fillStyle = f.color;
            ctx.font = 'bold 12px "Inter", sans-serif';
            ctx.fillText('x', baseX, axisY + 20);
            ctx.fillText('x+dx', targetX, axisY + 20);

            // Logic:
            let pX, pY;
            if (phase === 'SLIDE') {
                pX = baseX + (targetX - baseX) * progress;
            } else {
                pX = targetX;
            }
            pY = centerY;


            // --- U(1) RING ---
            if (f.type === 'U1') {
                // 1. Draw Rings
                // Base
                ctx.beginPath(); ctx.arc(baseX, centerY, r, 0, Math.PI * 2);
                ctx.strokeStyle = 'rgba(255,255,255,0.15)'; ctx.lineWidth = 1.5; ctx.stroke();
                // Target
                ctx.beginPath(); ctx.arc(targetX, centerY, r, 0, Math.PI * 2);
                ctx.strokeStyle = f.color; ctx.lineWidth = 3; ctx.stroke();

                // Mismatch Alarm Ring
                if (phase === 'MISMATCH') {
                    ctx.strokeStyle = 'rgba(239, 68, 68, 0.8)'; ctx.shadowBlur = 15; ctx.shadowColor = '#ef4444';
                    ctx.stroke(); ctx.shadowBlur = 0;
                }

                // 2. Logic
                const startAngle = -Math.PI / 2; // 12 o'clock
                const drift = Math.PI / 2;       // To 3 o'clock

                let currentAngle = startAngle;
                if (phase === 'SLIDE') currentAngle += drift * progress;
                else if (phase === 'MISMATCH') currentAngle += drift;
                else if (phase === 'CORRECTION') currentAngle += drift * (1 - correctionFactor);
                else currentAngle = startAngle;

                // 3. Ghost Pointer (The "Should Be")
                if (phase === 'SLIDE' || phase === 'MISMATCH') {
                    const gx = targetX + r * Math.cos(startAngle);
                    const gy = centerY + r * Math.sin(startAngle);

                    ctx.save();
                    ctx.setLineDash([5, 5]);
                    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
                    ctx.lineWidth = 2;
                    // Draw Phantom Circle Outline
                    ctx.beginPath(); ctx.arc(targetX, centerY, r, 0, Math.PI * 2); ctx.stroke();
                    // Draw Phantom Pointer
                    ctx.beginPath(); ctx.moveTo(targetX, centerY); ctx.lineTo(gx, gy); ctx.stroke();
                    ctx.beginPath(); ctx.arc(gx, gy, 6, 0, Math.PI * 2); ctx.stroke();
                    ctx.restore();
                }

                // 4. Force "Swipe" (Energy Beam)
                if (phase === 'CORRECTION') {
                    const startSwipe = currentAngle;
                    const endSwipe = startAngle;

                    ctx.save();
                    ctx.beginPath();
                    ctx.arc(targetX, centerY, r + 15, startSwipe, endSwipe, true); // Counter-clockwise push

                    const grad = ctx.createLinearGradient(targetX, centerY - r, targetX + r, centerY);
                    grad.addColorStop(0, 'rgba(252, 211, 77, 0)');
                    grad.addColorStop(0.5, 'rgba(252, 211, 77, 1)'); // Bright Gold
                    grad.addColorStop(1, 'rgba(252, 211, 77, 0)');

                    ctx.strokeStyle = grad;
                    ctx.lineWidth = 8;
                    ctx.shadowBlur = 20; ctx.shadowColor = '#fcd34d';
                    ctx.lineCap = 'round';
                    ctx.stroke();
                    ctx.restore();
                }

                // 5. Real Particle
                const px = pX + r * Math.cos(currentAngle);
                const py = pY + r * Math.sin(currentAngle);

                // Connector
                if (phase !== 'ORDER') {
                    ctx.beginPath(); ctx.moveTo(pX, pY); ctx.lineTo(px, py);
                    ctx.strokeStyle = 'rgba(255,255,255,0.2)'; ctx.lineWidth = 2; ctx.stroke();
                }

                ctx.beginPath(); ctx.arc(px, py, 10, 0, Math.PI * 2);
                ctx.fillStyle = f.color;
                ctx.shadowColor = f.color; ctx.shadowBlur = 20;
                ctx.fill(); ctx.shadowBlur = 0;

                showLockFlash(px, py);
            }

            // --- SU(2) SPHERE ---
            else if (f.type === 'SU2') {
                // Sphere Helper
                const drawSphere = (cx, cy, radius, col) => {
                    ctx.beginPath(); ctx.arc(cx, cy, radius, 0, Math.PI * 2);
                    ctx.strokeStyle = col; ctx.lineWidth = 1.5; ctx.stroke();
                    ctx.beginPath(); ctx.ellipse(cx, cy, radius, radius * 0.35, 0, 0, Math.PI * 2); ctx.stroke();
                    ctx.beginPath(); ctx.ellipse(cx, cy, radius * 0.4, radius, 0, 0, Math.PI * 2); ctx.stroke();
                };

                drawSphere(baseX, centerY, r, 'rgba(255,255,255,0.15)');
                drawSphere(targetX, centerY, r, phase === 'MISMATCH' ? 'rgba(239, 68, 68, 0.5)' : f.color);

                // Logic
                const startTilt = 0;
                const endTilt = Math.PI / 2;
                let tilt = 0;
                if (phase === 'SLIDE') tilt = endTilt * progress;
                else if (phase === 'MISMATCH') tilt = endTilt;
                else if (phase === 'CORRECTION') tilt = endTilt * (1 - correctionFactor);

                // Ghost (Target position at equator - where particle should end up)
                if (phase === 'SLIDE' || phase === 'MISMATCH') {
                    const gx = targetX;
                    const gy = centerY; // At equator, same as final particle position
                    ctx.save();
                    ctx.setLineDash([3, 5]);
                    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
                    ctx.lineWidth = 2;
                    // Ghost Dumbbell frame - vertical orientation (target)
                    ctx.beginPath(); ctx.moveTo(gx, gy - 15); ctx.lineTo(gx, gy + 15); ctx.stroke();
                    ctx.restore();
                }

                // Real Dumbbell
                // Reuse simplified tumble
                const slideP = phase === 'SLIDE' ? progress : 1;
                // Particle slides from pole to equator during SLIDE, stays at equator after
                let dy = 0; // Final position is at equator (center)
                if (phase === 'SLIDE') {
                    dy = -r * (1 - slideP); // Start at pole (-r), slide to equator (0)
                }

                ctx.save();
                ctx.translate(pX, pY + dy); // Move to surface position
                ctx.rotate(tilt);           // Tumble

                // Draw Dumbbell (Scaled Up)
                ctx.beginPath(); ctx.moveTo(0, -12); ctx.lineTo(0, 12);
                ctx.strokeStyle = '#fff'; ctx.lineWidth = 4; ctx.stroke();
                ctx.beginPath(); ctx.arc(0, -12, 6, 0, Math.PI * 2); ctx.fillStyle = '#4ecdc4'; ctx.fill();
                ctx.beginPath(); ctx.arc(0, 12, 6, 0, Math.PI * 2); ctx.fillStyle = '#fff'; ctx.fill();

                // Force Twist (Wrench/Swipe)
                if (phase === 'CORRECTION') {
                    ctx.rotate(-tilt);
                    ctx.beginPath();
                    ctx.arc(0, 0, 25, -Math.PI / 2, 0, false);
                    ctx.strokeStyle = 'rgba(78, 205, 196, 0.9)';
                    ctx.lineWidth = 6;
                    ctx.stroke();
                    // Arrowhead
                    ctx.beginPath(); ctx.moveTo(0, -28); ctx.lineTo(-6, -20); ctx.lineTo(6, -20); ctx.fillStyle = '#4ecdc4'; ctx.fill();
                }

                ctx.restore();

                if (phase === 'ORDER') showLockFlash(pX, pY - r);
            }

            // --- SU(3) TWISTED TUBE (The Main Event) ---
            else if (f.type === 'SU3') {
                // 1. Draw Tube Background (Gradient)
                const tubeW = 50; // Tall enough for triangle vertices
                const tubeExtendLeft = 30; // Extend left to contain triangle at baseX
                const tubeExtendRight = 35; // Extend right to contain triangle at targetX
                const tubeLeft = baseX - tubeExtendLeft;
                const tubeRight = targetX + tubeExtendRight;
                ctx.beginPath();
                ctx.moveTo(tubeLeft, centerY - tubeW);
                ctx.bezierCurveTo(tubeLeft + 80, centerY - tubeW - 25, tubeRight - 80, centerY - tubeW + 25, tubeRight, centerY - tubeW);
                ctx.lineTo(tubeRight, centerY + tubeW);
                ctx.bezierCurveTo(tubeRight - 80, centerY + tubeW + 25, tubeLeft + 80, centerY + tubeW - 25, tubeLeft, centerY + tubeW);
                ctx.closePath();

                const grad = ctx.createLinearGradient(tubeLeft, 0, tubeRight, 0);
                grad.addColorStop(0, 'rgba(255, 0, 0, 0.15)');
                grad.addColorStop(1, 'rgba(0, 255, 0, 0.15)');
                ctx.fillStyle = grad; ctx.fill();
                ctx.strokeStyle = 'rgba(255,255,255,0.1)'; ctx.stroke();

                // Logic
                const startRot = -Math.PI / 2; // Red Up
                const twist = Math.PI * 2 / 3; // 120 deg

                let currentRot = startRot;
                if (phase === 'SLIDE') currentRot += twist * progress;
                else if (phase === 'MISMATCH') currentRot += twist;
                else if (phase === 'CORRECTION') currentRot += twist * (1 - correctionFactor);

                // Helper: Draw Triangle
                const drawTri = (cx, cy, rot, scale, alpha, dashed = false) => {
                    const colors = ['#ff0000', '#00ff00', '#0000ff'];
                    const size = 25 * scale; // Bigger Triangle

                    if (dashed) {
                        ctx.save();
                        ctx.setLineDash([4, 4]);
                        ctx.strokeStyle = 'rgba(255, 80, 80, 0.6)';
                        ctx.lineWidth = 3;
                        ctx.beginPath();
                        for (let k = 0; k <= 3; k++) {
                            const ang = rot + k * (Math.PI * 2 / 3);
                            const tx = cx + Math.cos(ang) * size;
                            const ty = cy + Math.sin(ang) * size;
                            if (k === 0) ctx.moveTo(tx, ty); else ctx.lineTo(tx, ty);
                        }
                        ctx.stroke();
                        // Draw Red Up Dot
                        const ang0 = rot;
                        ctx.beginPath(); ctx.arc(cx + Math.cos(ang0) * size, cy + Math.sin(ang0) * size, 5, 0, Math.PI * 2);
                        ctx.fillStyle = '#ff0000'; ctx.fill();
                        ctx.restore();
                        return;
                    }

                    // Solid Draw
                    for (let k = 0; k < 3; k++) {
                        const ang = rot + k * (Math.PI * 2 / 3);
                        const tx = cx + Math.cos(ang) * size;
                        const ty = cy + Math.sin(ang) * size;
                        // Vertices
                        ctx.beginPath(); ctx.arc(tx, ty, 6 * scale, 0, Math.PI * 2);
                        ctx.fillStyle = colors[k];
                        ctx.globalAlpha = alpha; ctx.fill(); ctx.globalAlpha = 1;
                    }
                    // Frame
                    ctx.beginPath();
                    for (let k = 0; k <= 3; k++) {
                        const ang = rot + k * (Math.PI * 2 / 3);
                        const tx = cx + Math.cos(ang) * size;
                        const ty = cy + Math.sin(ang) * size;
                        if (k === 0) ctx.moveTo(tx, ty); else ctx.lineTo(tx, ty);
                    }
                    ctx.strokeStyle = `rgba(255,255,255,${alpha * 0.8})`; ctx.lineWidth = 2; ctx.stroke();
                };

                // 2. Draw Ghost (Red Up) at Target
                if (phase === 'SLIDE' || phase === 'MISMATCH') {
                    drawTri(targetX, centerY, startRot, 1, 0.4, true);
                }

                // 3. Draw Real Particle
                let tubeY = centerY;
                if (phase === 'SLIDE') tubeY += Math.sin(progress * Math.PI) * 15;

                drawTri(pX, tubeY, currentRot, 1, 1);

                if (phase === 'CORRECTION' && correctionFactor < 0.9) {
                    // Glue Swirl
                    ctx.save();
                    ctx.translate(targetX, centerY);
                    ctx.rotate(t * 2);
                    ctx.beginPath();
                    // Draw a semi-transparent goo blob
                    ctx.arc(0, 0, 45, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(255, 100, 100, 0.15)'; ctx.fill();

                    ctx.beginPath(); ctx.arc(30, 0, 10, 0, Math.PI * 2); ctx.fillStyle = 'rgba(255,255,255,0.2)'; ctx.fill();

                    ctx.rotate(-t * 2);
                    ctx.fillStyle = '#fca5a5'; ctx.font = 'bold 16px Arial';
                    ctx.fillText('GLUE', 0, 60);
                    ctx.restore();
                }

                if (phase === 'ORDER') showLockFlash(pX, centerY);
            }
        });

        safeRequestAnimationFrame(animateFiberBundle);
    }
    // Start Animation Loop
    animateFiberBundle();


    // 2. Comparison Animation (Photon vs Gluon)
    function animateComparisonLogic() {
        if (!document.getElementById('group-stage')) return;

        const t = Date.now() / 1000;

        // Photon (Pass Through WITHOUT bouncing)
        const pCanvas = wrapper.querySelector('#photon-demo');
        if (pCanvas) {
            pCanvas.width = pCanvas.clientWidth; pCanvas.height = pCanvas.clientHeight;
            const ctx = pCanvas.getContext('2d');
            ctx.clearRect(0, 0, pCanvas.width, pCanvas.height);

            // Linear Fly-By Logic
            const speed = 0.6;
            const loop = (t * speed) % 1; // 0 -> 1
            const dist = pCanvas.width + 100;

            // Two particles: Left->Right, Right->Left
            const p1x = -50 + loop * dist;
            const p2x = pCanvas.width + 50 - loop * dist;

            const cy = pCanvas.height / 2;

            // Encounter Check
            const separation = Math.abs(p1x - p2x);
            const overlap = Math.max(0, 1 - separation / 30);

            ctx.globalCompositeOperation = 'lighter';

            // Particle 1
            ctx.beginPath(); ctx.arc(p1x, cy, 10, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(252, 211, 77, ${0.8 + overlap})`;
            ctx.shadowBlur = 10 + overlap * 40; ctx.shadowColor = '#fcd34d';
            ctx.fill();

            // Particle 2
            ctx.beginPath(); ctx.arc(p2x, cy, 10, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(252, 211, 77, ${0.8 + overlap})`;
            ctx.shadowBlur = 10 + overlap * 40; ctx.shadowColor = '#fcd34d';
            ctx.fill();

            ctx.globalCompositeOperation = 'source-over'; ctx.shadowBlur = 0;
        }

        // Gluon (Plasma Strings + Self-Interaction + Third Gluon Spawn)
        const gCanvas = wrapper.querySelector('#gluon-demo');
        if (gCanvas) {
            gCanvas.width = gCanvas.clientWidth; gCanvas.height = gCanvas.clientHeight;
            const ctx = gCanvas.getContext('2d');
            ctx.clearRect(0, 0, gCanvas.width, gCanvas.height);

            const cx = gCanvas.width / 2;
            const cy = gCanvas.height / 2;
            const maxDist = gCanvas.width * 0.35;

            // Animation cycle: approach -> stick permanently (no separation!)
            const cycleDuration = 3; // seconds for approach
            const cycle = t % (cycleDuration + 10); // Long stuck phase
            const approachPhase = Math.min(1, cycle / cycleDuration); // 0 -> 1 (approach)

            let g1x, g2x, stickFactor, stringCount;

            if (approachPhase < 1) {
                // Phase 1: Approach
                g1x = cx - maxDist + (maxDist - 12) * approachPhase;
                g2x = cx + maxDist - (maxDist - 12) * approachPhase;
                stickFactor = approachPhase * 0.5; // Strings start appearing as they get close
                stringCount = Math.floor(approachPhase * 4);
            } else {
                // Phase 2: PERMANENTLY STUCK - never separate!
                const wobbleT = t * 3;
                g1x = cx - 12 + Math.sin(wobbleT) * 3; // Small wobble
                g2x = cx + 12 - Math.sin(wobbleT) * 3;
                stickFactor = 1;
                stringCount = 8; // Full entanglement
            }

            // ============ DRAW PLASMA STRINGS ============
            if (stringCount > 0 && stickFactor > 0) {
                ctx.globalCompositeOperation = 'lighter';

                // Strings from G1 to G2
                for (let i = 0; i < stringCount; i++) {
                    const chaos = t * 8 + i * 1.5;
                    const amp = 15 * stickFactor * (1 + Math.sin(i));

                    ctx.beginPath();
                    ctx.moveTo(g1x + 8, cy);

                    // Chaotic bezier control points (plasma/lightning feel)
                    const cp1x = g1x + (g2x - g1x) * 0.33;
                    const cp1y = cy + Math.sin(chaos) * amp + Math.cos(chaos * 0.7) * amp * 0.5;
                    const cp2x = g1x + (g2x - g1x) * 0.66;
                    const cp2y = cy + Math.cos(chaos) * amp - Math.sin(chaos * 1.3) * amp * 0.5;

                    ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, g2x - 8, cy);

                    // Glow layer
                    ctx.lineWidth = 5;
                    ctx.strokeStyle = i % 3 === 0 ? 'rgba(255, 50, 50, 0.3)' :
                        i % 3 === 1 ? 'rgba(50, 255, 50, 0.3)' : 'rgba(50, 100, 255, 0.3)';
                    ctx.shadowBlur = 10;
                    ctx.shadowColor = i % 2 === 0 ? '#ff4444' : '#44ff44';
                    ctx.stroke();

                    // Core layer (bright)
                    ctx.lineWidth = 1.5;
                    ctx.strokeStyle = i % 3 === 0 ? 'rgba(255, 150, 150, 0.9)' :
                        i % 3 === 1 ? 'rgba(150, 255, 150, 0.9)' : 'rgba(150, 180, 255, 0.9)';
                    ctx.stroke();
                }

                ctx.shadowBlur = 0;
                ctx.globalCompositeOperation = 'source-over';
            }

            // ============ DRAW GLUON BLOBS ============
            function drawGluonBlob(x, y, color1, color2, rotation, alpha = 1) {
                ctx.save();
                ctx.translate(x, y);
                ctx.rotate(rotation);
                ctx.globalAlpha = alpha;

                // Wobbly blob shape
                ctx.beginPath();
                for (let a = 0; a <= Math.PI * 2; a += 0.15) {
                    const wobble = 1 + Math.sin(a * 4 + t * 12) * 0.2 * stickFactor;
                    const r = 10 * wobble;
                    const px = Math.cos(a) * r;
                    const py = Math.sin(a) * r;
                    if (a === 0) ctx.moveTo(px, py);
                    else ctx.lineTo(px, py);
                }
                ctx.closePath();

                // Gradient fill
                const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, 12);
                grad.addColorStop(0, color1);
                grad.addColorStop(1, color2);
                ctx.fillStyle = grad;
                ctx.fill();

                // Inner glow
                ctx.shadowBlur = 15;
                ctx.shadowColor = color1;
                ctx.fill();
                ctx.shadowBlur = 0;

                // Color charge indicator (RGB triangle for SU(3))
                ctx.strokeStyle = 'rgba(255,255,255,0.6)';
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                for (let i = 0; i < 3; i++) {
                    const angle = (i * Math.PI * 2 / 3) - Math.PI / 2;
                    const px = Math.cos(angle) * 5;
                    const py = Math.sin(angle) * 5;
                    if (i === 0) ctx.moveTo(px, py);
                    else ctx.lineTo(px, py);
                }
                ctx.closePath();
                ctx.stroke();

                ctx.globalAlpha = 1;
                ctx.restore();
            }

            // Draw the two main gluons (permanently stuck together)
            drawGluonBlob(g1x, cy, '#ff6b6b', '#cc3333', t * 5);
            drawGluonBlob(g2x, cy, '#4ade80', '#22c55e', -t * 5);
        }

        safeRequestAnimationFrame(animateComparisonLogic);
    }
    safeRequestAnimationFrame(animateComparisonLogic);
}

// --- Forces View Logic ---
// 2.1 Forces Web (The Central Hub)
function renderForcesWeb() {
    // 1. Electromagnetism (Photon Exchange)
    const stageEM = document.getElementById('hub-stage-em');
    if (stageEM) {
        initHubCanvas(stageEM, (ctx, w, h, t) => {
            // Two Electrons
            const p1 = { x: w * 0.3, y: h * 0.5 };
            const p2 = { x: w * 0.7, y: h * 0.5 };

            // Draw Electrons
            drawParticle(ctx, p1.x, p1.y, '#fcd34d', 8);
            ctx.fillStyle = '#fff'; ctx.font = '10px Arial'; ctx.fillText('e-', p1.x - 5, p1.y - 12);

            drawParticle(ctx, p2.x, p2.y, '#fcd34d', 8);
            ctx.fillStyle = '#fff'; ctx.fillText('e-', p2.x - 5, p2.y - 12);

            // Photon Exchange (Fast: Speed factor 3.0)
            const cycle = (t * 3.0) % 2;
            let px, py;
            if (cycle < 1) {
                // p1 -> p2
                const progress = cycle;
                px = p1.x + (p2.x - p1.x) * progress;
                py = p1.y + (p2.y - p1.y) * progress - Math.sin(progress * Math.PI) * 20;
            } else {
                // p2 -> p1
                const progress = cycle - 1;
                px = p2.x + (p1.x - p2.x) * progress;
                py = p2.y + (p1.y - p2.y) * progress + Math.sin(progress * Math.PI) * 20;
            }

            // Draw Photon
            ctx.beginPath();
            ctx.arc(px, py, 3, 0, Math.PI * 2);
            ctx.fillStyle = '#fff';
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#fcd34d';
            ctx.fill();
            ctx.shadowBlur = 0;
            ctx.fillStyle = '#fff'; ctx.fillText('γ', px + 5, py - 5);
        });
    }

    // 2. Strong Force (Gluon Exchange)
    const stageStrong = document.getElementById('hub-stage-strong');
    if (stageStrong) {
        initHubCanvas(stageStrong, (ctx, w, h, t) => {
            // Two Quarks
            const p1 = { x: w * 0.3, y: h * 0.5 };
            const p2 = { x: w * 0.7, y: h * 0.5 };

            // Draw Quarks
            drawParticle(ctx, p1.x, p1.y, '#ff6b6b', 10); // Red
            ctx.fillStyle = '#fff'; ctx.font = '10px Arial'; ctx.fillText('u', p1.x - 4, p1.y - 14);

            drawParticle(ctx, p2.x, p2.y, '#60a5fa', 10); // Blue
            ctx.fillStyle = '#fff'; ctx.fillText('d', p2.x - 4, p2.y - 14);

            // Gluon Exchange (Slow: Speed factor 1.0)
            const progress = (t * 1.0) % 1;
            const gx = p1.x + (p2.x - p1.x) * progress;
            const gy = p1.y + Math.sin(progress * Math.PI * 4) * 10;

            // Draw Gluon
            ctx.beginPath();
            ctx.arc(gx, gy, 4, 0, Math.PI * 2);
            ctx.fillStyle = '#a855f7'; // Purple
            ctx.fill();
            ctx.fillStyle = '#a855f7'; ctx.fillText('g', gx + 6, gy - 6);
        });
    }

    // 3. Weak Force (W Boson Decay)
    const stageWeak = document.getElementById('hub-stage-weak');
    if (stageWeak) {
        initHubCanvas(stageWeak, (ctx, w, h, t) => {
            const center = { x: w * 0.4, y: h * 0.5 };

            // Neutron
            drawParticle(ctx, center.x, center.y, '#4ecdc4', 12);
            ctx.fillStyle = '#fff'; ctx.font = '10px Arial'; ctx.fillText('n', center.x - 4, center.y - 16);

            // Emission Cycle
            const cycle = (t * 1.5) % 2;
            if (cycle < 1) {
                // W Boson flying out
                const wx = center.x + cycle * 60;
                const wy = center.y - cycle * 30;

                ctx.beginPath();
                ctx.arc(wx, wy, 5, 0, Math.PI * 2);
                ctx.fillStyle = '#fff';
                ctx.shadowBlur = 5;
                ctx.shadowColor = '#4ecdc4';
                ctx.fill();
                ctx.shadowBlur = 0;

                // Label W-
                ctx.fillStyle = '#fff';
                ctx.font = '10px Arial';
                ctx.fillText('W-', wx + 8, wy);
            }
        });
    }

    // 4. Gravity (Attraction)
    const stageGravity = document.getElementById('hub-stage-gravity');
    if (stageGravity) {
        initHubCanvas(stageGravity, (ctx, w, h, t) => {
            // Two Masses orbiting/attracting
            const cx = w * 0.5;
            const cy = h * 0.5;
            const radius = 40;

            const angle = t * 0.5; // Slow orbit
            const p1 = { x: cx + Math.cos(angle) * radius, y: cy + Math.sin(angle) * radius };
            const p2 = { x: cx + Math.cos(angle + Math.PI) * radius, y: cy + Math.sin(angle + Math.PI) * radius };

            drawParticle(ctx, p1.x, p1.y, '#60a5fa', 10);
            ctx.fillStyle = '#fff'; ctx.font = '10px Arial'; ctx.fillText('M', p1.x - 5, p1.y - 14);

            drawParticle(ctx, p2.x, p2.y, '#60a5fa', 10);
            ctx.fillStyle = '#fff'; ctx.fillText('M', p2.x - 5, p2.y - 14);

            // Faint connection line
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = 'rgba(96, 165, 250, 0.2)';
            ctx.setLineDash([5, 5]);
            ctx.stroke();
            ctx.setLineDash([]);
        });
    }
}

// Helper for Hub Canvases (Robust Initialization)
function initHubCanvas(container, drawFn) {
    container.innerHTML = '';
    const canvas = document.createElement('canvas');
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    container.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    let animationFrameId;

    function resize() {
        const rect = container.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;

        canvas.width = rect.width;
        canvas.height = rect.height;
    }

    function animate() {
        if (!document.body.contains(canvas)) {
            cancelAnimationFrame(animationFrameId);
            return;
        }

        // Ensure dimensions are correct
        if (canvas.width === 0 || canvas.height === 0) resize();

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const t = Date.now() / 1000;
        drawFn(ctx, canvas.width, canvas.height, t);
        animationFrameId = requestAnimationFrame(animate);
    }

    // Use ResizeObserver to handle size changes and initial visibility
    const observer = new ResizeObserver(() => {
        resize();
    });
    observer.observe(container);

    // Initial resize attempt
    resize();
    animate();
}

function drawParticle(ctx, x, y, color, size) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.shadowBlur = 10;
    ctx.shadowColor = color;
    ctx.fill();
    ctx.shadowBlur = 0;
}

// --- New Views ---

// 1. Higgs Mechanism
function renderHiggs() {
    const stage = document.getElementById('higgs-stage');
    stage.innerHTML = '';
    stage.style.cssText = 'position: relative; width: 100%; height: 100%; overflow: hidden; background: #000; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);';

    const canvas = document.createElement('canvas');
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    stage.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    let particles = [];
    let gridPoints = [];
    let animationFrameId;

    function resize() {
        const rect = stage.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;

        canvas.width = rect.width;
        canvas.height = rect.height;

        // Re-init Particles (maintain relative Y)
        const h = canvas.height;
        particles = [
            { x: 50, y: h * 0.16, mass: 0, color: '#fcd34d', label: '光子', speed: 12, trail: true },
            { x: 50, y: h * 0.50, mass: 1, color: '#4ecdc4', label: '电子', speed: 4, trail: false },
            { x: 50, y: h * 0.84, mass: 10, color: '#ff6b6b', label: '顶夸克', speed: 0.5, trail: false }
        ];

        // Re-init Grid
        gridPoints = [];
        const spacing = 20;
        for (let x = 0; x < canvas.width + 50; x += spacing) {
            for (let y = 0; y < canvas.height; y += spacing) {
                gridPoints.push({
                    x, y,
                    ox: x, oy: y,
                    vx: 0, vy: 0
                });
            }
        }
    }

    function animate() {
        if (!document.body.contains(canvas)) {
            cancelAnimationFrame(animationFrameId);
            return;
        }

        // Ensure dimensions are correct
        if (canvas.width === 0 || canvas.height === 0) resize();

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const t = Date.now() / 1000;

        // Update Particles
        particles.forEach(p => {
            p.x += p.speed;
            if (p.x > canvas.width + 50) p.x = -50;
        });

        // Draw Higgs Field (Fluid & Interaction)
        gridPoints.forEach(p => {
            // 1. Fluid Motion (Ocean-like)
            const waveX = Math.sin(p.oy * 0.05 + t) * 2;
            const waveY = Math.cos(p.ox * 0.05 + t) * 2;
            let targetX = p.ox + waveX;
            let targetY = p.oy + waveY;

            let active = false;
            let clustering = false;

            // 2. Interaction with Particles
            particles.forEach(part => {
                const dx = targetX - part.x;
                const dy = targetY - part.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (part.mass > 0) {
                    // Drag / Clustering Effect
                    const range = part.mass > 5 ? 150 : 60;
                    if (dist < range) {
                        const force = (part.mass * 1200) / (dist * dist + 100);
                        const angle = Math.atan2(dy, dx);
                        targetX -= Math.cos(angle) * force;
                        targetY -= Math.sin(angle) * force;
                        active = true;
                        if (part.mass > 5) clustering = true;
                    }
                }
            });

            // Smooth transition to target
            p.x += (targetX - p.x) * 0.1;
            p.y += (targetY - p.y) * 0.1;

            // Draw Point
            ctx.fillStyle = active ? `rgba(168, 85, 247, ${clustering ? 0.9 : 0.4})` : `rgba(59, 130, 246, 0.15)`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, active ? (clustering ? 3 : 2) : 1, 0, Math.PI * 2);
            ctx.fill();

            // Draw Clustering Lines (Entanglement)
            if (clustering) {
                particles.forEach(part => {
                    if (part.mass > 5) {
                        const dx = p.x - part.x;
                        const dy = p.y - part.y;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        if (dist < 100) {
                            ctx.beginPath();
                            ctx.moveTo(p.x, p.y);
                            ctx.lineTo(part.x, part.y);
                            ctx.strokeStyle = `rgba(255, 107, 107, ${0.3 * (1 - dist / 100)})`;
                            ctx.lineWidth = 1;
                            ctx.stroke();
                        }
                    }
                });
            }
        });

        // Draw Particles
        particles.forEach(p => {
            // 1. Photon Trail
            if (p.mass === 0) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x - 150, p.y);
                const grad = ctx.createLinearGradient(p.x, p.y, p.x - 150, p.y);
                grad.addColorStop(0, p.color);
                grad.addColorStop(1, 'rgba(0,0,0,0)');
                ctx.strokeStyle = grad;
                ctx.lineWidth = 2;
                ctx.stroke();
            }

            // 2. Mass Halo
            if (p.mass > 0) {
                const haloSize = p.mass * 3;
                ctx.beginPath();
                ctx.arc(p.x, p.y, haloSize, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, 0.1)`;
                ctx.fill();
            }

            // 3. Particle Core
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.mass > 5 ? 8 : 5, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.shadowBlur = 15;
            ctx.shadowColor = p.color;
            ctx.fill();
            ctx.shadowBlur = 0;
        });

        animationFrameId = requestAnimationFrame(animate);
    }

    // Use ResizeObserver
    const observer = new ResizeObserver(() => {
        resize();
    });
    observer.observe(stage);

    // Initial resize
    resize();
    animate();
}

function drawParticle(ctx, x, y, color, size) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.shadowBlur = 10;
    ctx.shadowColor = color;
    ctx.fill();
    ctx.shadowBlur = 0;
}

// 2. Gravity (General Relativity -> Quantum -> Entropic)
function renderGravityV2() {
    const stage = document.getElementById('gravity-stage');
    if (!stage) return;

    // Fix Layout: Remove Sidebar
    const container = stage.parentElement;
    if (container && container.classList.contains('deep-dive-container')) {
        container.style.display = 'block';
        container.style.padding = '0';
        const controls = container.querySelector('.controls-panel');
        if (controls) controls.style.display = 'none';
    }

    stage.innerHTML = '';
    stage.style.cssText = 'width: 100%; height: 100%; overflow: hidden; background: #000; display: flex; justify-content: center; align-items: center; padding: 20px;';

    // Container
    const grid = document.createElement('div');
    grid.className = 'gravity-trinity-grid';
    stage.appendChild(grid);

    // --- Helper to create card ---
    function createGravityCard(className, title, subtitle, contentHtml) {
        const card = document.createElement('div');
        card.className = `gravity-card ${className}`;

        const content = document.createElement('div');
        content.className = 'gravity-content';
        content.innerHTML = `
            <h3>${title}</h3>
            <p>${subtitle}</p>
            ${contentHtml || ''}
        `;
        card.appendChild(content);

        const canvas = document.createElement('canvas');
        canvas.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;';
        card.appendChild(canvas);

        return { card, canvas };
    }

    // 1. Geometry (Top Left)
    const geo = createGravityCard('gravity-geometry',
        '几何的主宰 (Geometry)',
        '物质告诉时空如何弯曲。<br><span style="font-family: serif; font-style: italic; color: #a78bfa;">G<sub>μν</sub> = 8πT<sub>μν</sub></span>',
        '<div class="singularity-warning">⚠ SINGULARITY WARNING</div>'
    );
    grid.appendChild(geo.card);

    // 2. Quantum (Top Right)
    const quant = createGravityCard('gravity-quantum',
        '寻找幽灵 (The Ghost)',
        '标准模型的缺失拼图。引力子在哪里？<br><span class="glitch-text" data-text="SEARCHING..." style="color: #ef4444; font-weight: bold; margin-top: 5px; font-family: monospace;">STATUS: SEARCHING...</span>'
    );
    grid.appendChild(quant.card);

    // 3. Entropy (Bottom)
    const entropy = createGravityCard('gravity-entropy',
        '引力的幻觉 (Entropic Gravity)',
        '时空不是背景，而是信息的涌现。<br><span style="color: #34d399; font-family: monospace;">Discrete Bits &rarr; Smooth Geometry</span>'
    );
    grid.appendChild(entropy.card);

    // --- Animation Logic ---
    const ctxGeo = geo.canvas.getContext('2d');
    const ctxQuant = quant.canvas.getContext('2d');
    const ctxEnt = entropy.canvas.getContext('2d');

    let animationFrameId;

    function resize() {
        [geo, quant, entropy].forEach(obj => {
            const rect = obj.card.getBoundingClientRect();
            if (rect.width > 0 && rect.height > 0) {
                obj.canvas.width = rect.width;
                obj.canvas.height = rect.height;
            }
        });
    }

    // Initial resize
    setTimeout(resize, 50); // Delay for layout
    window.addEventListener('resize', resize);

    // Quantum Scanner State
    let scanState = {
        x: 0, y: 0,
        targetX: 0, targetY: 0,
        phase: 'searching', // searching, locking, lost
        timer: 0
    };

    function animate() {
        if (!document.body.contains(grid)) {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resize);
            return;
        }

        const time = Date.now() / 1000;

        // --- 1. Geometry Animation (Rotating Black Hole) ---
        if (geo.canvas.width > 0) {
            const w = geo.canvas.width, h = geo.canvas.height;
            const cx = w / 2, cy = h / 2;
            ctxGeo.clearRect(0, 0, w, h);

            // Grid
            ctxGeo.strokeStyle = 'rgba(167, 139, 250, 0.2)';
            ctxGeo.lineWidth = 1;

            const gridSize = 30; // Denser grid
            for (let x = 0; x <= w; x += gridSize) {
                ctxGeo.beginPath();
                for (let y = 0; y <= h; y += 5) {
                    const dx = x - cx;
                    const dy = y - cy;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    // Stronger Twist & Pinch near center
                    const twist = (300 / (dist + 20)) * Math.sin(time * 0.5 + dist * 0.01);
                    const angle = Math.atan2(dy, dx) + twist;

                    // Extreme pinch near event horizon
                    let r = dist;
                    if (dist < 100) {
                        r = dist * (dist / 100); // Quadratic pinch
                    }

                    const px = cx + Math.cos(angle) * r;
                    const py = cy + Math.sin(angle) * r;

                    if (y === 0) ctxGeo.moveTo(px, py); else ctxGeo.lineTo(px, py);
                }
                // Make lines thinner/fainter near center to simulate "breaking"
                ctxGeo.stroke();
            }

            // Accretion Disk Glow
            const g = ctxGeo.createRadialGradient(cx, cy, 25, cx, cy, 70);
            g.addColorStop(0, '#000'); // Inner dark
            g.addColorStop(0.4, 'rgba(167, 139, 250, 1)'); // Bright ring
            g.addColorStop(0.6, 'rgba(139, 92, 246, 0.5)');
            g.addColorStop(1, 'rgba(0,0,0,0)');
            ctxGeo.fillStyle = g;
            ctxGeo.beginPath(); ctxGeo.arc(cx, cy, 70, 0, Math.PI * 2); ctxGeo.fill();

            // Event Horizon (Pitch Black)
            ctxGeo.beginPath();
            ctxGeo.arc(cx, cy, 28, 0, Math.PI * 2);
            ctxGeo.fillStyle = '#000';
            ctxGeo.fill();
            ctxGeo.strokeStyle = 'rgba(167, 139, 250, 0.8)';
            ctxGeo.lineWidth = 2;
            ctxGeo.stroke();
        }

        // --- 2. Quantum Animation (Anxious Scanner) ---
        if (quant.canvas.width > 0) {
            const w = quant.canvas.width, h = quant.canvas.height;
            const cx = w / 2, cy = h / 2;
            ctxQuant.clearRect(0, 0, w, h);

            // Noise Background
            for (let i = 0; i < 80; i++) {
                ctxQuant.fillStyle = `rgba(255,255,255,${Math.random() * 0.08})`;
                ctxQuant.fillRect(Math.random() * w, Math.random() * h, 2, 2);
            }

            // Particles (Significant widen: 160px offset)
            const pOffset = 160;
            const p1x = cx - pOffset, p1y = cy + Math.sin(time) * 10;
            const p2x = cx + pOffset, p2y = cy - Math.sin(time) * 10;

            // Draw Red Particles
            ctxQuant.fillStyle = '#f87171';
            ctxQuant.beginPath(); ctxQuant.arc(p1x, p1y, 6, 0, Math.PI * 2); ctxQuant.fill();
            ctxQuant.beginPath(); ctxQuant.arc(p2x, p2y, 6, 0, Math.PI * 2); ctxQuant.fill();

            // --- State Machine for Anxious Scanner ---
            // States: 'moving' -> 'locking' -> 'flashing' -> 'reset'

            // Initialization
            if (!scanState.phase || scanState.phase === 'searching') scanState.phase = 'moving';

            // State Logic
            if (scanState.phase === 'moving') {
                // Pick a new target if we don't have one
                if (!scanState.targetX) {
                    // FIX: Low probability of re-roll? No, just stick to target.
                    // Target strictly in the CENTRAL VOID to guarantee no overlap
                    // Particles are at +/- 160. 
                    // Limit scanner to +/- 60 from center.
                    // This leaves 100px buffer on each side.
                    const range = 60;
                    scanState.targetX = cx + (Math.random() - 0.5) * (range * 2);
                    scanState.targetY = cy + (Math.random() - 0.5) * 80;
                    scanState.moveSpeed = 0.1 + Math.random() * 0.1; // FAST move
                }

                // Move towards target
                scanState.x += (scanState.targetX - scanState.x) * 0.4; // Faster snap (0.3 -> 0.4)
                scanState.y += (scanState.targetY - scanState.y) * 0.4;

                // Transition to locking when close
                if (Math.abs(scanState.x - scanState.targetX) < 2 && Math.abs(scanState.y - scanState.targetY) < 2) {
                    scanState.phase = 'locking';
                    scanState.timer = 0;
                }
            } else if (scanState.phase === 'locking') {
                // Shrinking animation (simulating focus)
                scanState.timer += 0.05;
                if (scanState.timer > 1.2) { // Locked for 1.2s (was 0.5) - dramatic pause
                    scanState.phase = 'flashing';
                    scanState.timer = 0;
                }
            } else if (scanState.phase === 'flashing') {
                scanState.timer += 0.05;
                if (scanState.timer > 1.5) { // Flash for 1.5s (was 0.8) - clear negative result
                    scanState.phase = 'moving'; // Reset
                    scanState.targetX = null; // Force new target
                }
            }

            // --- Draw Scanner ---
            let chSize = 30; // Default large
            let color = '#fff';
            let showText = false;

            if (scanState.phase === 'locking') {
                // Shrink from 30 to 10 over 1.2s
                const progress = scanState.timer / 1.2;
                chSize = 30 - (20 * progress);
                color = '#fff';
            } else if (scanState.phase === 'flashing') {
                chSize = 10;
                // Flash Red
                if (Math.floor(scanState.timer * 10) % 2 === 0) {
                    color = '#ef4444';
                    showText = true;
                } else {
                    color = '#fff';
                }
            }

            ctxQuant.strokeStyle = color;
            ctxQuant.lineWidth = 2;
            ctxQuant.beginPath();

            // Crosshair Corners
            const gap = chSize / 3;
            // Top Left
            ctxQuant.moveTo(scanState.x - chSize, scanState.y - gap);
            ctxQuant.lineTo(scanState.x - chSize, scanState.y - chSize);
            ctxQuant.lineTo(scanState.x - gap, scanState.y - chSize);
            // Top Right
            ctxQuant.moveTo(scanState.x + chSize, scanState.y - gap);
            ctxQuant.lineTo(scanState.x + chSize, scanState.y - chSize);
            ctxQuant.lineTo(scanState.x + gap, scanState.y - chSize);
            // Bottom Left
            ctxQuant.moveTo(scanState.x + chSize, scanState.y + gap);
            ctxQuant.lineTo(scanState.x + chSize, scanState.y + chSize);
            ctxQuant.lineTo(scanState.x + gap, scanState.y + chSize);
            // Bottom Right
            ctxQuant.moveTo(scanState.x - chSize, scanState.y + gap);
            ctxQuant.lineTo(scanState.x - chSize, scanState.y + chSize);
            ctxQuant.lineTo(scanState.x - gap, scanState.y + chSize);
            ctxQuant.stroke();

            // Center Dot
            ctxQuant.fillStyle = color;
            ctxQuant.beginPath(); ctxQuant.arc(scanState.x, scanState.y, 2, 0, Math.PI * 2); ctxQuant.fill();

            // Text
            if (showText) {
                ctxQuant.fillStyle = 'rgba(239, 68, 68, 1)';
                ctxQuant.font = 'bold 12px monospace';
                ctxQuant.fillText('NO SIGNAL', scanState.x + 15, scanState.y - 15);
            }
        }

        // --- 3. Entropy Animation (Matrix Weave) ---
        if (entropy.canvas.width > 0) {
            const w = entropy.canvas.width, h = entropy.canvas.height;
            ctxEnt.clearRect(0, 0, w, h);

            const cols = Math.floor(w / 12);
            const rows = Math.floor(h / 12);

            ctxEnt.font = '10px monospace';

            for (let i = 0; i < cols; i++) {
                const progress = i / cols; // 0 (Left) to 1 (Right)

                // Left: Dense Matrix Rain
                if (progress < 0.5) {
                    for (let j = 0; j < rows; j++) {
                        if (Math.random() > 0.92) { // Dense
                            const char = Math.random() > 0.5 ? '1' : '0';
                            const alpha = 1 - (progress * 2); // Fade out
                            ctxEnt.fillStyle = `rgba(52, 211, 153, ${alpha})`;
                            // Falling rain effect
                            const yOffset = (Date.now() / 50 + i * 10) % h;
                            // Draw at fixed grid points but highlight based on rain
                            if (Math.abs(j * 12 - yOffset) < 50 || Math.random() > 0.9) {
                                ctxEnt.fillText(char, i * 12, j * 12);
                            }
                        }
                    }
                }

                // Transition Zone: Weaving
                if (progress > 0.3 && progress < 0.7) {
                    const weaveAlpha = (progress - 0.3) / 0.4;
                    ctxEnt.strokeStyle = `rgba(52, 211, 153, ${weaveAlpha * 0.5})`;
                    ctxEnt.lineWidth = 1;
                    ctxEnt.beginPath();
                    const x = i * 12;
                    // Vertical lines emerging
                    ctxEnt.moveTo(x, 0); ctxEnt.lineTo(x, h);
                    ctxEnt.stroke();
                }
            }

            // Right: Smooth Geometry Surface
            // Draw a curved mesh
            ctxEnt.strokeStyle = '#34d399';
            ctxEnt.lineWidth = 1.5;

            // Horizontal curves
            for (let y = 0; y <= h; y += 20) {
                ctxEnt.beginPath();
                for (let x = w * 0.4; x <= w; x += 10) {
                    const progress = (x - w * 0.4) / (w * 0.6); // 0 to 1 in right section
                    const alpha = Math.min(1, progress * 2);

                    // Wave
                    const yWave = y + Math.sin(x * 0.03 + time + y * 0.05) * 15 * progress;

                    if (x === w * 0.4) ctxEnt.moveTo(x, yWave);
                    else ctxEnt.lineTo(x, yWave);

                    // Set alpha for this segment (simplified)
                }
                // Gradient stroke
                const grad = ctxEnt.createLinearGradient(w * 0.4, 0, w, 0);
                grad.addColorStop(0, 'rgba(52, 211, 153, 0)');
                grad.addColorStop(0.5, 'rgba(52, 211, 153, 0.8)');
                grad.addColorStop(1, 'rgba(52, 211, 153, 1)');
                ctxEnt.strokeStyle = grad;
                ctxEnt.stroke();
            }

            // Vertical curves (Cross weave)
            for (let x = w * 0.4; x <= w; x += 20) {
                ctxEnt.beginPath();
                const progress = (x - w * 0.4) / (w * 0.6);
                const grad = ctxEnt.createLinearGradient(0, 0, 0, h);
                grad.addColorStop(0, `rgba(52, 211, 153, ${progress})`);
                grad.addColorStop(1, `rgba(52, 211, 153, ${progress})`);
                ctxEnt.strokeStyle = grad;

                for (let y = 0; y <= h; y += 10) {
                    const yWave = y + Math.sin(x * 0.03 + time + y * 0.05) * 15 * progress;
                    if (y === 0) ctxEnt.moveTo(x, yWave); else ctxEnt.lineTo(x, yWave);
                }
                ctxEnt.stroke();
            }
        }

        animationFrameId = requestAnimationFrame(animate);
    }
    animationFrameId = requestAnimationFrame(animate);
}

// --- Renamed Views ---

function renderEM() {
    const stage = document.getElementById('em-stage');

    // Fix Layout
    const container = stage.parentElement;
    if (container && container.classList.contains('deep-dive-container')) {
        container.style.display = 'block';
        container.style.padding = '0';
        const controls = container.querySelector('.controls-panel');
        if (controls) controls.style.display = 'none';
    }

    stage.innerHTML = '';
    stage.style.cssText = 'display: flex; flex-direction: column; align-items: center; padding: 2rem; width: 100%; height: 100%; overflow-y: auto;';

    // Title Section (HUD Style)
    const titleSection = document.createElement('div');
    titleSection.style.cssText = 'text-align: center; margin-bottom: 2rem; max-width: 900px; position: relative;';
    titleSection.innerHTML = `
    <div style="display: flex; align-items: baseline; justify-content: center; gap: 10px; margin-bottom: 1rem; flex-wrap: wrap;">
        <div class="em-title-decor"></div>
        <h2 style="font-size: 2.2rem; margin: 0; background: linear-gradient(135deg, #fcd34d, #f59e0b); -webkit-background-clip: text; -webkit-text-fill-color: transparent; text-shadow: 0 0 20px rgba(252, 211, 77, 0.3); letter-spacing: 2px;">
            ⚡ 电磁力
        </h2>
        <span style="font-size: 1.5rem; color: #94a3b8; font-weight: 300; letter-spacing: 1px;">：我们世界的</span>
        <span style="font-size: 1.8rem; color: #fbbf24; font-weight: bold; text-shadow: 0 0 15px rgba(251, 191, 36, 0.4); letter-spacing: 1px;">隐秘引擎</span>
        <div class="em-title-decor"></div>
    </div>
    <div class="em-subtitle-capsule">
        <span style="color: #fbbf24; font-weight: bold; margin-right: 8px;">SCOPE:</span>
        你能<strong>看到</strong>、<strong>摸到</strong>、<strong>听到</strong>的一切，几乎都由电磁力主宰。
    </div>
`;
    stage.appendChild(titleSection);

    // Three Columns Container
    const columnsContainer = document.createElement('div');
    columnsContainer.style.cssText = `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    max-width: 1000px;
    width: 100%;
    margin-bottom: 2rem;
`;

    // Bottom Section: Interactive Simulation Stage
    const animContainer = document.createElement('div');
    animContainer.style.cssText = `
        width: 100%; max-width: 1000px; height: 300px; 
        background: rgba(0,0,0,0.3); border-radius: 16px; 
        position: relative; overflow: hidden; 
        border: 2px solid rgba(167, 139, 250, 0.5);
        box-shadow: 0 0 20px rgba(167, 139, 250, 0.1);
        transition: all 0.3s ease;
    `;

    const canvas = document.createElement('canvas');
    canvas.width = 1000;
    canvas.height = 300;
    animContainer.appendChild(canvas);

    // Label for Animation
    const animLabel = document.createElement('div');
    animLabel.style.cssText = 'position: absolute; bottom: 20px; width: 100%; text-align: center; color: rgba(255,255,255,0.8); font-size: 1rem; font-weight: bold; text-shadow: 0 0 10px rgba(0,0,0,0.5); transition: all 0.3s ease;';
    animContainer.appendChild(animLabel);

    // State
    let currentEMMode = 'chemistry';
    const cards = [];

    // Helper to create card
    function createCard(id, colorClass, borderColor, iconHtml, title, desc) {
        const el = document.createElement('div');
        el.className = `em-glass-card ${colorClass}`;
        if (id === 'chemistry') el.classList.add('active'); // Default active
        el.style.cursor = 'pointer';
        el.innerHTML = `
            <div class="em-icon-container">${iconHtml}</div>
            <h3 style="color: ${borderColor}; margin-bottom: 1rem;">${title}</h3>
            <p style="font-size: 0.95rem; line-height: 1.6; opacity: 0.9; color: #e2e8f0;">${desc}</p>
        `;

        el.onmouseenter = () => {
            currentEMMode = id;
            cards.forEach(c => c.classList.remove('active'));
            el.classList.add('active');

            // Sync Bottom Border
            animContainer.style.borderColor = borderColor;
            animContainer.style.boxShadow = `0 0 20px ${borderColor}40`;
        };

        cards.push(el);
        return el;
    }

    // Card 1: Chemistry
    const col1 = createCard('chemistry', 'em-card-purple', '#a78bfa',
        `<div class="icon-dna"><div class="dna-strand"></div></div>`,
        '化学与生命',
        '化学反应的本质是<strong>电子的重新排布</strong>。生命现象归根结底源于电磁力对分子的精妙编织。'
    );

    // Card 2: Everyday Forces (Repulsion - Vertical Arrows)
    const col2 = createCard('repulsion', 'em-card-gold', '#fbbf24',
        `<div class="icon-repulsion">
            <div class="repulsion-layer repulsion-top"></div>
            <div class="repulsion-arrows-vertical">
                <span style="color:#fbbf24; font-weight:bold;">↓</span>
                <span style="color:#fbbf24; font-weight:bold;">↑</span>
            </div>
            <div class="repulsion-layer repulsion-bottom"></div>
        </div>`,
        '日常作用力',
        '你感受到的支持力、摩擦力，本质上都是<strong>原子外层电子云之间的静电排斥</strong>。你从未真正“接触”过任何物体。'
    );

    // Card 3: Light (Prism)
    const col3 = createCard('light', 'em-card-red', '#f87171',
        `<div class="icon-prism">
            <div class="prism-triangle"></div>
            <div class="prism-beam"></div>
            <div class="prism-rainbow"></div>
        </div>`,
        '光与信息',
        '光是电磁波。色彩、WiFi信号、甚至神经元传递的思维，本质都是<strong>电磁场的变化</strong>。'
    );

    columnsContainer.appendChild(col1);
    columnsContainer.appendChild(col2);
    columnsContainer.appendChild(col3);
    stage.appendChild(columnsContainer);
    stage.appendChild(animContainer);

    // --- Animation Logic ---
    const ctx = canvas.getContext('2d');
    let t = 0;

    function drawElectronCloud(x, y, radius, color, intensity) {
        const grad = ctx.createRadialGradient(x, y, radius * 0.2, x, y, radius);
        grad.addColorStop(0, 'rgba(255,255,255,0.8)');
        grad.addColorStop(0.4, color);
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grad;
        ctx.globalAlpha = intensity;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
    }

    function animateEMStage() {
        if (!document.body.contains(canvas)) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        t += 0.01;
        const cx = canvas.width / 2;
        const cy = canvas.height / 2;

        if (currentEMMode === 'chemistry') {
            animLabel.innerHTML = '电子重排，创造万物 (Electron Rearrangement)';

            // Chemistry: Electron Handshake
            const loopTime = 400;
            const localT = Math.floor(t * 60) % loopTime;
            let separation = 200;
            let phase = 'approach';

            if (localT < 100) {
                separation = 300 - (localT / 100) * 200;
            } else if (localT < 300) {
                separation = 100;
                phase = 'bonded';
            } else {
                separation = 100 + ((localT - 300) / 100) * 200;
            }

            const atom1X = cx - separation / 2;
            const atom2X = cx + separation / 2;

            // Bond
            if (separation < 150) {
                ctx.beginPath();
                ctx.moveTo(atom1X, cy);
                ctx.lineTo(atom2X, cy);
                ctx.strokeStyle = `rgba(167, 139, 250, ${1 - separation / 150})`;
                ctx.lineWidth = 40 * (1 - separation / 150);
                ctx.lineCap = 'round';
                ctx.globalCompositeOperation = 'screen';
                ctx.stroke();
                ctx.globalCompositeOperation = 'source-over';
            }

            drawElectronCloud(atom1X, cy, 60, 'rgba(167, 139, 250, 0.5)', 0.8);
            drawElectronCloud(atom2X, cy, 60, 'rgba(167, 139, 250, 0.5)', 0.8);

            // Flash
            if (phase === 'bonded' && localT >= 100 && localT < 120) {
                ctx.fillStyle = `rgba(255, 255, 255, ${1 - (localT - 100) / 20})`;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

        } else if (currentEMMode === 'repulsion') {
            animLabel.innerHTML = '你从未真正触碰过任何物体，是电子在排斥 (Electrostatic Repulsion)';

            // Repulsion: Vertical Compression & Bounce
            const loopTime = 200;
            const localT = Math.floor(t * 60) % loopTime;

            // Bottom layer is fixed (Table)
            const bottomY = cy + 50;

            // Top layer moves (Hand)
            let topY = cy - 50; // Default pos
            let gap = 100;

            if (localT < 100) {
                // Press down
                const progress = localT / 100;
                // Ease in out
                const ease = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
                topY = (cy - 80) + ease * 80; // Move from -80 to 0 (relative to center) -> Gap closes
                gap = bottomY - topY;
            } else {
                // Bounce back
                const progress = (localT - 100) / 100;
                const ease = 1 - Math.pow(1 - progress, 3); // Cubic ease out
                topY = cy + (bottomY - cy) - gap - (ease * 80); // Move back up
                // Actually simpler:
                // 100-200: Move from close to far
                topY = bottomY - (20 + ease * 110); // 20 is min gap
            }

            // Ensure min gap
            if (bottomY - topY < 30) topY = bottomY - 30;
            gap = bottomY - topY;

            // Draw Layers
            for (let i = -4; i <= 4; i++) {
                const x = cx + i * 60;
                // Top Atoms
                drawElectronCloud(x, topY, 25, 'rgba(251, 191, 36, 0.4)', 0.6);
                // Bottom Atoms
                drawElectronCloud(x, bottomY, 25, 'rgba(251, 191, 36, 0.4)', 0.6);
            }

            // Repulsion Glow (in the gap)
            if (gap < 60) {
                const intensity = Math.pow(1 - (gap - 30) / 30, 2); // Non-linear intensity

                // Glow Rect
                const glowH = gap;
                const glowY = topY + gap / 2;

                const grad = ctx.createLinearGradient(0, topY, 0, bottomY);
                grad.addColorStop(0, `rgba(251, 191, 36, 0)`);
                grad.addColorStop(0.5, `rgba(255, 255, 255, ${intensity})`);
                grad.addColorStop(1, `rgba(251, 191, 36, 0)`);

                ctx.fillStyle = grad;
                ctx.fillRect(0, topY, canvas.width, gap);

                // Force Field Lines (Horizontal shockwaves)
                ctx.strokeStyle = `rgba(255, 255, 255, ${intensity})`;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(cx - 300, glowY); ctx.lineTo(cx + 300, glowY);
                ctx.stroke();
            }

        } else if (currentEMMode === 'light') {
            animLabel.innerHTML = '电子颤动，光芒诞生 (Electron Vibration Creates Light)';

            // Light: Electron Transition & Organic Ripples
            const loopTime = 180;
            const localT = Math.floor(t * 60) % loopTime;

            // Jittery Center Atom
            const jx = cx + (Math.random() - 0.5) * 2;
            const jy = cy + (Math.random() - 0.5) * 2;
            drawElectronCloud(jx, jy, 50, 'rgba(248, 113, 113, 0.6)', 0.8);

            // Orbit
            ctx.strokeStyle = 'rgba(255,255,255,0.1)';
            ctx.beginPath(); ctx.arc(cx, cy, 80, 0, Math.PI * 2); ctx.stroke();

            // Electron
            let electronR = 80;
            let electronAngle = t * 5; // Fast spin
            const ex = cx + Math.cos(electronAngle) * electronR;
            const ey = cy + Math.sin(electronAngle) * electronR;

            ctx.fillStyle = '#fff';
            ctx.shadowBlur = 10; ctx.shadowColor = '#fff';
            ctx.beginPath(); ctx.arc(ex, ey, 4, 0, Math.PI * 2); ctx.fill();
            ctx.shadowBlur = 0;

            // Organic Ripples
            const numWaves = 5;
            for (let i = 0; i < numWaves; i++) {
                const waveOffset = (t * 60 + i * (200 / numWaves)) % 200;
                const alpha = 1 - waveOffset / 200;

                if (waveOffset > 20) {
                    ctx.beginPath();
                    for (let a = 0; a < Math.PI * 2; a += 0.1) {
                        const r = waveOffset + Math.sin(a * 10 + t * 5) * 5;
                        const wx = cx + Math.cos(a) * r;
                        const wy = cy + Math.sin(a) * r;
                        if (a === 0) ctx.moveTo(wx, wy);
                        else ctx.lineTo(wx, wy);
                    }
                    ctx.closePath();
                    ctx.strokeStyle = `rgba(248, 113, 113, ${alpha})`;
                    ctx.lineWidth = 2;
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animateEMStage);
    }
    animateEMStage();
}

// --- Symmetry View Logic (Noether's Theorem - Cosmic Loom Interactive) ---
let noetherCurrentSym = 0; // Global state for symmetry selection
let noetherControlValue = 0; // Slider/control value
let noetherSymmetryBroken = false; // NEW: Toggle for breaking symmetry

function renderSymmetry() {
    // Target the specific view section for Symmetry
    const stage = document.getElementById('view-symmetry');
    stage.innerHTML = ''; // Clear the old static HTML (right-side text, etc.)
    stage.style.cssText = 'display: flex; flex-direction: column; align-items: center; padding: 1.5rem; width: 100%; height: 100%; overflow-y: auto; background: transparent;';

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

    // ========== UNIFIED MACHINE CONTAINER ==========
    const machineContainer = document.createElement('div');
    machineContainer.style.cssText = `
        background: rgba(10, 15, 30, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        padding: 1.5rem;
        box-shadow: 0 0 40px rgba(129, 140, 248, 0.1), inset 0 0 30px rgba(0,0,0,0.3);
        ${noetherSymmetryBroken ? 'border-color: rgba(239, 68, 68, 0.3); box-shadow: 0 0 40px rgba(239, 68, 68, 0.15);' : ''}
    `;

    // Machine label
    const machineLabel = document.createElement('div');
    machineLabel.textContent = '⚙️ 诺特织布机 · Noether Theorem Demonstrator';
    machineLabel.style.cssText = `
        text-align: center; 
        color: rgba(255,255,255,0.5); 
        font-size: 0.75rem; 
        letter-spacing: 2px;
        text-transform: uppercase;
        margin-bottom: 1rem;
    `;
    machineContainer.appendChild(machineLabel);

    // Main 3-panel layout
    const mainContainer = document.createElement('div');
    mainContainer.style.cssText = 'display: flex; gap: 1.5rem; width: 100%; max-width: 1100px; align-items: stretch;';

    const currentSym = symmetries[noetherCurrentSym];

    // === LEFT PANEL: Symmetry Control ===
    const controlPanel = document.createElement('div');
    controlPanel.style.cssText = `
    flex: 1;
    background: rgba(15, 20, 40, 0.5);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-radius: 16px;
    padding: 1.5rem;
    border: 1px solid ${noetherSymmetryBroken ? 'rgba(239, 68, 68, 0.5)' : currentSym.color + '40'};
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3), inset 0 0 20px rgba(255,255,255,0.02);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    ${noetherSymmetryBroken ? 'animation: pulse-border 1.5s ease-in-out infinite;' : ''}
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
    breakLabel.style.cssText = 'display: flex; align-items: center; gap: 0.5rem; cursor: pointer; white-space: nowrap;';

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
    background: rgba(10, 15, 30, 0.6);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-radius: 16px;
    padding: 1.5rem;
    border: 1px solid ${noetherSymmetryBroken ? 'rgba(239, 68, 68, 0.5)' : 'rgba(255,255,255,0.1)'};
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    ${noetherSymmetryBroken ? 'animation: pulse-border 1.5s ease-in-out infinite;' : ''}
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
    background: rgba(15, 20, 40, 0.5);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-radius: 16px;
    padding: 1.5rem;
    border: 1px solid ${noetherSymmetryBroken ? 'rgba(239, 68, 68, 0.5)' : currentSym.conservationColor + '40'};
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3), inset 0 0 20px rgba(255,255,255,0.02);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    ${noetherSymmetryBroken ? 'animation: pulse-border 1.5s ease-in-out infinite;' : ''}
`;

    // Create infinity symbol container
    const infinityContainer = document.createElement('div');
    infinityContainer.style.cssText = 'text-align: center;';

    // Infinity symbol canvas
    const infinityCanvas = document.createElement('canvas');
    infinityCanvas.width = 80;
    infinityCanvas.height = 50;
    infinityCanvas.style.cssText = 'margin-bottom: 0.5rem;';
    infinityCanvas.id = 'infinity-canvas';
    infinityContainer.appendChild(infinityCanvas);

    const conserveTitle = document.createElement('h3');
    conserveTitle.style.cssText = `color: ${noetherSymmetryBroken ? '#ef4444' : currentSym.conservationColor}; margin: 0 0 0.5rem 0; font-size: 1.2rem;`;
    conserveTitle.textContent = `${currentSym.conservation}守恒`;
    infinityContainer.appendChild(conserveTitle);

    const conserveDesc = document.createElement('p');
    conserveDesc.style.cssText = 'font-size: 0.85rem; opacity: 0.7; margin: 0;';
    conserveDesc.textContent = noetherSymmetryBroken ? '守恒律被破坏!' : '对称性确保守恒';
    infinityContainer.appendChild(conserveDesc);

    conservationPanel.appendChild(infinityContainer);

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
    machineContainer.appendChild(mainContainer);
    stage.appendChild(machineContainer);

    // Add pulse-border animation CSS
    if (!document.getElementById('noether-animations')) {
        const styleEl = document.createElement('style');
        styleEl.id = 'noether-animations';
        styleEl.textContent = `
            @keyframes pulse-border {
                0%, 100% { border-color: rgba(239, 68, 68, 0.3); box-shadow: 0 0 20px rgba(239, 68, 68, 0.2); }
                50% { border-color: rgba(239, 68, 68, 0.8); box-shadow: 0 0 30px rgba(239, 68, 68, 0.5); }
            }
        `;
        document.head.appendChild(styleEl);
    }

    // ========== INFINITY SYMBOL DRAWING ==========
    function drawInfinitySymbol(infCtx, w, h, color, broken) {
        infCtx.clearRect(0, 0, w, h);
        const cx = w / 2;
        const cy = h / 2;
        const a = 18; // horizontal radius
        const b = 12; // vertical radius

        infCtx.lineWidth = 3;
        infCtx.lineCap = 'round';

        if (broken) {
            // Broken/glitching infinity
            infCtx.strokeStyle = '#ef4444';
            infCtx.shadowColor = '#ff0000';
            infCtx.shadowBlur = 10;

            // Draw fragmented pieces with random offsets
            const offset = Math.sin(animT * 10) * 3;

            // Left loop (broken)
            infCtx.beginPath();
            for (let t = 0; t < Math.PI * 0.8; t += 0.1) {
                const x = cx - a + a * Math.cos(t);
                const y = cy + b * Math.sin(t) + (Math.random() - 0.5) * 4;
                if (t === 0) infCtx.moveTo(x + offset, y);
                else infCtx.lineTo(x + offset, y);
            }
            infCtx.stroke();

            // Right loop (broken)
            infCtx.beginPath();
            for (let t = Math.PI; t < Math.PI * 2 * 0.9; t += 0.1) {
                const x = cx + a + a * Math.cos(t);
                const y = cy + b * Math.sin(t) + (Math.random() - 0.5) * 4;
                if (t === Math.PI) infCtx.moveTo(x - offset, y);
                else infCtx.lineTo(x - offset, y);
            }
            infCtx.stroke();
        } else {
            // Beautiful golden infinity
            infCtx.strokeStyle = color;
            infCtx.shadowColor = color;
            infCtx.shadowBlur = 8;

            // Smooth figure-8 (infinity)
            infCtx.beginPath();
            for (let t = 0; t <= Math.PI * 2; t += 0.05) {
                // Parametric lemniscate
                const scale = 1 / (1 + Math.sin(t) * Math.sin(t) * 0.5);
                const x = cx + a * 1.5 * Math.cos(t) * scale;
                const y = cy + b * Math.sin(t) * Math.cos(t) * scale * 2;
                if (t === 0) infCtx.moveTo(x, y);
                else infCtx.lineTo(x, y);
            }
            infCtx.closePath();
            infCtx.stroke();

            // Inner glow
            infCtx.strokeStyle = 'rgba(255,255,255,0.3)';
            infCtx.lineWidth = 1;
            infCtx.stroke();
        }
        infCtx.shadowBlur = 0;
    }

    // ========== ENERGY BARS (for Time Translation) ==========
    // Fixed rectangle: Ek (blue) from bottom + Ep (green) from top = always fills completely
    function drawEnergyBars(container, Ek, Ep, totalHeight, color, broken) {
        container.innerHTML = '';

        const wrapper = document.createElement('div');
        wrapper.style.cssText = 'display: flex; flex-direction: column; align-items: center; gap: 0.3rem;';

        // Fixed height container (the "thermometer")
        const barContainer = document.createElement('div');
        barContainer.style.cssText = `
            width: 50px; 
            height: ${totalHeight}px; 
            border: 2px solid ${broken ? '#ef4444' : color};
            border-radius: 6px;
            overflow: hidden;
            position: relative;
            background: transparent;
        `;

        // Normalize: Ek + Ep must equal totalHeight (no gaps!)
        const ekNorm = Math.max(0, Math.min(totalHeight, Ek));
        const epNorm = totalHeight - ekNorm; // Ep fills the rest - NO GAP!

        // Ek (kinetic - BLUE, from BOTTOM, grows upward)
        const ekBar = document.createElement('div');
        ekBar.style.cssText = `
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: ${ekNorm}px; 
            background: linear-gradient(to top, #3b82f6, #60a5fa);
            transition: height 0.05s ease-out;
        `;
        barContainer.appendChild(ekBar);

        // Ep (potential - GREEN, from TOP, fills the remaining space)
        const epBar = document.createElement('div');
        epBar.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: ${epNorm}px; 
            background: linear-gradient(to bottom, #22c55e, #4ade80);
            transition: height 0.05s ease-out;
        `;
        barContainer.appendChild(epBar);

        wrapper.appendChild(barContainer);

        // Labels on both sides
        const labelsRow = document.createElement('div');
        labelsRow.style.cssText = 'display: flex; gap: 0.8rem; font-size: 0.65rem;';

        const epLabel = document.createElement('span');
        epLabel.innerHTML = `<span style="color:#4ade80">Eₚ</span>=${Math.round(epNorm)}`;
        epLabel.style.color = '#fff';

        const ekLabel = document.createElement('span');
        ekLabel.innerHTML = `<span style="color:#60a5fa">Eₖ</span>=${Math.round(ekNorm)}`;
        ekLabel.style.color = '#fff';

        labelsRow.appendChild(epLabel);
        labelsRow.appendChild(ekLabel);
        wrapper.appendChild(labelsRow);

        // Total energy display
        const totalDisplay = document.createElement('div');
        totalDisplay.style.cssText = `
            font-size: 0.75rem; 
            font-weight: bold;
            color: ${broken ? '#ef4444' : color};
            ${broken ? 'animation: flicker 0.15s infinite;' : ''}
        `;
        totalDisplay.textContent = broken ? `E = ${Math.round(Ek + Ep)} (变!)` : `E = ${totalHeight} ✓`;
        wrapper.appendChild(totalDisplay);

        container.appendChild(wrapper);
    }

    // ========== SPEEDOMETER (for Space Translation - Momentum) ==========
    function drawSpeedometer(container, v1, v2, color, broken) {
        container.innerHTML = '';

        const wrapper = document.createElement('div');
        wrapper.style.cssText = 'display: flex; flex-direction: column; align-items: center;';

        const speedCanvas = document.createElement('canvas');
        speedCanvas.width = 100;
        speedCanvas.height = 70;
        wrapper.appendChild(speedCanvas);

        const ctx = speedCanvas.getContext('2d');
        const cx = 50, cy = 55;
        const radius = 40;

        // Draw gauge arc
        ctx.strokeStyle = 'rgba(255,255,255,0.2)';
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, Math.PI, 0, false);
        ctx.stroke();

        // Draw tick marks
        ctx.strokeStyle = 'rgba(255,255,255,0.4)';
        ctx.lineWidth = 2;
        for (let i = 0; i <= 6; i++) {
            const angle = Math.PI - (i / 6) * Math.PI;
            const x1 = cx + Math.cos(angle) * (radius - 5);
            const y1 = cy + Math.sin(angle) * (radius - 5);
            const x2 = cx + Math.cos(angle) * (radius + 5);
            const y2 = cy + Math.sin(angle) * (radius + 5);
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        }

        // Total momentum (should be 0 if conserved)
        const totalP = v1 + v2;

        // Pointer angle: 0 momentum = pointing up (90°), varies with broken
        let pointerAngle;
        if (broken) {
            // Jittering pointer when broken
            pointerAngle = Math.PI / 2 + (totalP / 100) * (Math.PI / 2) + Math.sin(Date.now() / 50) * 0.3;
        } else {
            // Locked at center when conserved
            pointerAngle = Math.PI / 2;
        }

        // Draw pointer
        ctx.strokeStyle = broken ? '#ef4444' : color;
        ctx.fillStyle = broken ? '#ef4444' : color;
        ctx.lineWidth = 3;
        ctx.shadowColor = broken ? '#ef4444' : color;
        ctx.shadowBlur = 5;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(pointerAngle) * (radius - 10), cy - Math.sin(pointerAngle) * (radius - 10));
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Center dot
        ctx.beginPath();
        ctx.arc(cx, cy, 5, 0, Math.PI * 2);
        ctx.fill();

        // Label
        const label = document.createElement('div');
        label.innerHTML = broken ?
            '<span style="color:#ef4444">Σp ≠ 0</span> 动量不守恒!' :
            '<span style="color:#fbbf24">Σp = 0</span> 动量守恒';
        label.style.cssText = 'font-size: 0.7rem; text-align: center; margin-top: 0.3rem;';
        wrapper.appendChild(label);

        container.appendChild(wrapper);
    }

    // ========== SWEPT AREA (for Rotation - Kepler's 2nd Law) ==========
    function drawSweptArea(container, planetAngle, color, broken) {
        container.innerHTML = '';

        const sweptCanvas = document.createElement('canvas');
        sweptCanvas.width = 100;
        sweptCanvas.height = 100;
        sweptCanvas.style.cssText = 'margin-top: 0.5rem;';
        container.appendChild(sweptCanvas);

        const ctx = sweptCanvas.getContext('2d');
        const cx = 50, cy = 50;

        // Draw orbit (ellipse)
        ctx.strokeStyle = 'rgba(255,255,255,0.2)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.ellipse(cx + 10, cy, 35, 25, 0, 0, Math.PI * 2);
        ctx.stroke();

        // Draw sun at focus
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(cx, cy, 5, 0, Math.PI * 2);
        ctx.fill();

        // Draw swept sector (shows equal area in equal time)
        const sectorAngle = Math.PI / 6; // 30 degree sweep
        ctx.fillStyle = broken ? 'rgba(239, 68, 68, 0.3)' : `${color}40`;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, 35, planetAngle - sectorAngle, planetAngle, false);
        ctx.closePath();
        ctx.fill();

        // Draw planet
        const px = cx + 10 + Math.cos(planetAngle) * 35;
        const py = cy + Math.sin(planetAngle) * 25;
        ctx.fillStyle = broken ? '#ef4444' : '#a78bfa';
        ctx.beginPath();
        ctx.arc(px, py, 4, 0, Math.PI * 2);
        ctx.fill();

        // Label
        const label = document.createElement('div');
        label.textContent = broken ? '面积不等!' : 'dA/dt = 常数';
        label.style.cssText = `font-size: 0.7rem; color: ${broken ? '#ef4444' : color}; text-align: center; margin-top: 0.3rem;`;
        container.appendChild(label);
    }

    // Animation logic
    let animT = 0;
    function animate() {
        if (currentView !== 'symmetry') return;
        if (!document.body.contains(canvas)) return;

        ctx.clearRect(0, 0, 450, 280);
        animT += 0.02;

        // Draw infinity symbol
        const infCanvas = document.getElementById('infinity-canvas');
        if (infCanvas) {
            const infCtx = infCanvas.getContext('2d');
            drawInfinitySymbol(infCtx, 80, 50, currentSym.conservationColor, noetherSymmetryBroken);
        }

        const controlOffset = noetherControlValue; // -100 to 100

        if (noetherCurrentSym === 0) {
            // Space Translation: "The Sliding Lab"
            // KEY INSIGHT: Grid moves, but physics experiment stays FIXED at screen center
            // This demonstrates "changing coordinate system doesn't change physics"

            const centerX = 225; // Physics ALWAYS centered here
            const tableY = 200;
            const gridOffset = -controlOffset * 1.5; // Grid moves OPPOSITE to slider

            // MOVING Grid Background (shows coordinate system shifting)
            ctx.strokeStyle = noetherSymmetryBroken ? 'rgba(239, 68, 68, 0.15)' : 'rgba(129, 140, 248, 0.12)';
            ctx.lineWidth = 1;
            // Vertical grid lines (move with slider)
            for (let x = gridOffset % 40; x < 450; x += 40) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, 280);
                ctx.stroke();
            }
            // Horizontal grid lines
            for (let y = 40; y < 280; y += 40) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(450, y);
                ctx.stroke();
            }

            // Draw Floor/Rail (FIXED at center)
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(50, tableY + 20);
            ctx.lineTo(400, tableY + 20);
            ctx.stroke();

            // Draw "Lab Table" (FIXED at center)
            ctx.fillStyle = noetherSymmetryBroken ? 'rgba(239, 68, 68, 0.1)' : 'rgba(129, 140, 248, 0.1)';
            ctx.strokeStyle = noetherSymmetryBroken ? '#ef4444' : '#818cf8';
            ctx.lineWidth = 2;
            ctx.fillRect(centerX - 100, tableY, 200, 10);
            ctx.strokeRect(centerX - 100, tableY, 200, 10);

            // Physics: Two pucks colliding (ALWAYS at centerX)
            const period = 3;
            const phase = (animT % period) / period; // 0 to 1

            let p1x, p2x, v1 = 0, v2 = 0;
            // Simple elastic collision logic
            if (phase < 0.4) {
                // Approaching
                const t = phase / 0.4;
                p1x = -80 + t * 80; // -80 to 0
                p2x = 80 - t * 80;  // 80 to 0
                v1 = 50; v2 = -50; // Moving toward each other
            } else if (phase < 0.6) {
                // Impact
                p1x = 0;
                p2x = 0;
                v1 = 0; v2 = 0;
            } else {
                // Departing
                const t = (phase - 0.6) / 0.4;
                p1x = -t * 80;      // 0 to -80
                p2x = t * 80;       // 0 to 80
                v1 = -50; v2 = 50; // Moving apart

                // Broken symmetry - forces vary with position (but position is now fixed!)
                if (noetherSymmetryBroken) {
                    // In broken case, external force pushes both pucks in same direction
                    const driftFactor = Math.sin(animT) * 20;
                    p1x += t * driftFactor;
                    p2x += t * driftFactor;
                    v1 += driftFactor; v2 += driftFactor; // Momentum not conserved!
                }
            }

            // ========== STROBOSCOPIC TRAILS ==========
            // Draw past positions as fading dots
            const trailCount = 5;
            for (let i = trailCount; i >= 1; i--) {
                const trailPhase = ((animT - i * 0.08) % period) / period;
                let trail1x, trail2x;

                if (trailPhase < 0.4) {
                    trail1x = -80 + (trailPhase / 0.4) * 80;
                    trail2x = 80 - (trailPhase / 0.4) * 80;
                } else if (trailPhase < 0.6) {
                    trail1x = 0; trail2x = 0;
                } else {
                    const dt = (trailPhase - 0.6) / 0.4;
                    trail1x = -dt * 80;
                    trail2x = dt * 80;
                    if (noetherSymmetryBroken) {
                        const drift = Math.sin(animT - i * 0.08) * 20;
                        trail1x += dt * drift;
                        trail2x += dt * drift;
                    }
                }

                const alpha = (1 - i / trailCount) * 0.4;
                // Trail for puck 1
                ctx.fillStyle = `rgba(129, 140, 248, ${alpha})`;
                ctx.beginPath();
                ctx.arc(centerX + trail1x - 12, tableY - 12, 6, 0, Math.PI * 2);
                ctx.fill();
                // Trail for puck 2
                ctx.fillStyle = `rgba(251, 191, 36, ${alpha})`;
                ctx.beginPath();
                ctx.arc(centerX + trail2x + 12, tableY - 12, 6, 0, Math.PI * 2);
                ctx.fill();
            }

            // Render Pucks (at FIXED centerX + relative position)
            // Puck 1
            ctx.fillStyle = noetherSymmetryBroken ? '#ef4444' : '#818cf8';
            ctx.beginPath();
            ctx.arc(centerX + p1x - 12, tableY - 12, 12, 0, Math.PI * 2);
            ctx.fill();

            // Puck 2
            ctx.fillStyle = '#fbbf24';
            ctx.beginPath();
            ctx.arc(centerX + p2x + 12, tableY - 12, 12, 0, Math.PI * 2);
            ctx.fill();

            // Impact Flash
            if (phase >= 0.4 && phase < 0.6) {
                ctx.fillStyle = `rgba(255, 255, 255, ${Math.random()})`;
                ctx.beginPath();
                ctx.arc(centerX, tableY - 12, 15, 0, Math.PI * 2);
                ctx.fill();
            }

            // Caption
            ctx.fillStyle = '#fff';
            ctx.font = '14px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(noetherSymmetryBroken ? '力场不均匀，动量不守恒' : '坐标系移动，但碰撞规律不变', 225, 265);

            // Indicator: Speedometer (momentum visualization)
            drawSpeedometer(indicatorContainer, v1, v2, currentSym.conservationColor, noetherSymmetryBroken);

        } else if (noetherCurrentSym === 1) {
            // Rotation: "The Rotating Frame"
            // Concept: A planet orbits a star. Rotating the coordinate system (grid)
            // doesn't change the orbit's shape or speed.

            const centerX = 225;
            const centerY = 140;
            const rotationAngle = (controlOffset / 100) * Math.PI; // -PI to PI

            ctx.save();
            ctx.translate(centerX, centerY);

            // 1. Draw Polar Coordinate Grid (The "Viewer" reference frame) - BRIGHTER!
            ctx.save();
            ctx.rotate(rotationAngle);

            // 8 radial spokes (thin lines)
            ctx.strokeStyle = noetherSymmetryBroken ? 'rgba(239, 68, 68, 0.25)' : 'rgba(167, 139, 250, 0.35)';
            ctx.lineWidth = 1;
            for (let i = 0; i < 8; i++) {
                const angle = (i / 8) * Math.PI * 2;
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.lineTo(Math.cos(angle) * 130, Math.sin(angle) * 130);
                ctx.stroke();
            }

            // Main axes (BRIGHTER - 4 cardinal directions)
            ctx.strokeStyle = noetherSymmetryBroken ? 'rgba(239, 68, 68, 0.6)' : 'rgba(167, 139, 250, 0.6)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(-130, 0); ctx.lineTo(130, 0); // X-axis
            ctx.moveTo(0, -130); ctx.lineTo(0, 130); // Y-axis
            ctx.stroke();

            // Concentric circles (brighter)
            ctx.strokeStyle = noetherSymmetryBroken ? 'rgba(239, 68, 68, 0.3)' : 'rgba(167, 139, 250, 0.4)';
            ctx.lineWidth = 1;
            if (noetherSymmetryBroken) {
                for (let r = 30; r <= 120; r += 30) {
                    ctx.beginPath();
                    ctx.ellipse(0, 0, r, r * 0.7, Math.PI / 4, 0, Math.PI * 2);
                    ctx.stroke();
                }
            } else {
                for (let r = 30; r <= 120; r += 30) {
                    ctx.beginPath();
                    ctx.arc(0, 0, r, 0, Math.PI * 2);
                    ctx.stroke();
                }
            }

            // Angle markers (0°, 90°, 180°, 270°) - These rotate WITH the grid!
            ctx.fillStyle = noetherSymmetryBroken ? '#ef4444' : '#a78bfa';
            ctx.font = 'bold 10px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            const markerRadius = 120;
            ctx.fillText('0°', markerRadius + 12, 0);
            ctx.fillText('90°', 0, -markerRadius - 10);
            ctx.fillText('180°', -markerRadius - 15, 0);
            ctx.fillText('270°', 0, markerRadius + 12);

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

            // Indicator: Swept Area (Kepler's 2nd Law - Angular Momentum)
            drawSweptArea(indicatorContainer, planetAngle, currentSym.conservationColor, noetherSymmetryBroken);

        } else {
            // Time Translation: "The Eternal Pendulum"
            // Concept: Physics laws are constant regardless of when you run the experiment

            const centerX = 225;
            const pivotY = 60;
            const stringLen = 140;

            // Time Control maps to starting time, but clock keeps running!
            const baseTime = (controlOffset + 100) / 200 * 60; // 0-60 base seconds
            const runningTime = baseTime + (animT % 60); // Continuously incrementing
            const minutes = Math.floor(runningTime / 60) % 60;
            const seconds = (runningTime % 60).toFixed(1);
            const clockDisplay = `${String(minutes).padStart(2, '0')}:${seconds.padStart(4, '0')}`;

            // Temporal Grid Background (scrolling with time)
            ctx.strokeStyle = noetherSymmetryBroken ? 'rgba(239, 68, 68, 0.1)' : 'rgba(99, 102, 241, 0.08)';
            ctx.lineWidth = 1;
            const gridOffset = (animT * 30) % 40;
            for (let y = gridOffset; y < 280; y += 40) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(450, y);
                ctx.stroke();
            }
            // Vertical time markers (move with slider)
            for (let x = (controlOffset * 0.5) % 50; x < 450; x += 50) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, 280);
                ctx.stroke();
            }

            // Subtle gradient background
            const grad = ctx.createLinearGradient(0, 0, 0, 280);
            grad.addColorStop(0, 'rgba(10, 15, 35, 0.8)');
            grad.addColorStop(1, 'rgba(20, 25, 50, 0.6)');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, 450, 280);

            // ========== ATOMIC CLOCK DISPLAY (Top Right) ==========
            ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
            ctx.strokeStyle = noetherSymmetryBroken ? '#ef4444' : '#3b82f6';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.roundRect(330, 12, 110, 45, 6);
            ctx.fill();
            ctx.stroke();

            // Clock label
            ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
            ctx.font = '8px monospace';
            ctx.textAlign = 'left';
            ctx.fillText('⏱ ATOMIC CLOCK', 338, 24);

            // Clock time display (ANIMATED!)
            ctx.fillStyle = noetherSymmetryBroken ? '#ef4444' : '#4ade80';
            ctx.font = 'bold 18px monospace';
            ctx.shadowColor = noetherSymmetryBroken ? '#ef4444' : '#4ade80';
            ctx.shadowBlur = 8;
            ctx.fillText(`T=${clockDisplay}`, 338, 47);
            ctx.shadowBlur = 0;

            // Pendulum Physics (Invariant, unless broken)
            let swingAmp = 0.5;
            let totalEnergy = 80; // constant when not broken
            if (noetherSymmetryBroken) {
                // Time-varying gravity causes chaotic amplitude changes
                swingAmp = 0.5 + Math.sin(animT * 0.7) * 0.4;
                totalEnergy = 80 + Math.sin(animT * 2) * 30; // Energy fluctuates!
            }
            const swingAngle = Math.sin(animT * 2) * swingAmp;
            const bobX = centerX + Math.sin(swingAngle) * stringLen;
            const bobY = 80 + Math.cos(swingAngle) * stringLen;

            // Calculate Ek and Ep from pendulum position
            const velocity = Math.cos(animT * 2) * swingAmp * 2; // Angular velocity
            const height = 1 - Math.cos(swingAngle); // Height from lowest point
            const Ek = Math.abs(velocity) * 40; // Kinetic energy (scaled)
            const Ep = height * 80; // Potential energy (scaled)

            // Pivot point
            ctx.fillStyle = '#ddd';
            ctx.beginPath();
            ctx.arc(centerX, 80, 6, 0, Math.PI * 2);
            ctx.fill();

            // String
            ctx.strokeStyle = noetherSymmetryBroken ? '#ef4444' : '#fff';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(centerX, 80);
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

            // Caption
            ctx.fillStyle = '#fff';
            ctx.font = '14px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(noetherSymmetryBroken ? 'g(t) 变化，能量不守恒' : '无论何时做实验，摆动规律相同', 225, 265);

            // Indicator: Energy Bars (Ek + Ep)
            drawEnergyBars(indicatorContainer, Ek, Ep, noetherSymmetryBroken ? totalEnergy : 80, currentSym.conservationColor, noetherSymmetryBroken);
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
    wrapper.className = 'deep-dive-container'; // Add this class
    wrapper.style.cssText = 'display: flex; flex-direction: column; align-items: center;'; // Keep only these flex properties

    // Title Section
    const titleBox = document.createElement('div');
    titleBox.style.cssText = 'text-align: center; margin-bottom: 1rem;';
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
    // SECTION 1: The Broken Mirror (Wu Experiment)
    // ==========================================
    const section1 = document.createElement('div');
    section1.style.cssText = 'width: 100%; max-width: 1200px; margin-bottom: 1.5rem;'; // Match bottom grid width

    const s1Header = document.createElement('div');
    s1Header.innerHTML = `
    <h3 style="color: #fff; border-left: 4px solid #2dd4bf; padding-left: 1rem; margin-bottom: 1rem;">
        1. 镜中世界崩塌 (The Broken Mirror)
    </h3>
    <p style="color: #aaa; margin-bottom: 1.5rem; font-size: 1rem; line-height: 1.6;">
        1956年，吴健雄的实验震惊了物理学界：在<strong style="color: #2dd4bf; font-weight: 900;">弱相互作用</strong>下，物理定律不再<strong style="color: #2dd4bf; font-weight: 900;">左右对称</strong>。
    </p>
`;
    section1.appendChild(s1Header);

    const experimentContainer = document.createElement('div');
    experimentContainer.style.cssText = `
    background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px;
    padding: 1rem; display: flex; flex-direction: column; align-items: center;
`; // Reduced padding

    // Controls
    const toggleContainer = document.createElement('div');
    toggleContainer.style.cssText = 'display: flex; gap: 1rem; margin-bottom: 0.8rem; background: rgba(255,255,255,0.05); padding: 0.5rem; border-radius: 30px;'; // Reduced margin

    let currentForce = 'em'; // 'em' or 'weak'

    const btnEm = document.createElement('button');
    btnEm.textContent = '电磁力 (对称)';
    btnEm.className = 'nav-btn active';
    btnEm.style.cssText = 'padding: 0.5rem 1.5rem; border-radius: 20px; border: none; cursor: pointer; background: #3b82f6; color: white; transition: all 0.3s;';

    const btnWeak = document.createElement('button');
    btnWeak.textContent = '弱相互作用 (破缺)';
    btnWeak.className = 'nav-btn';
    btnWeak.style.cssText = 'padding: 0.5rem 1.5rem; border-radius: 20px; border: none; cursor: pointer; background: transparent; color: rgba(255,255,255,0.6); transition: all 0.3s;';

    btnEm.onclick = () => {
        console.log('Clicked EM');
        currentForce = 'em';
        btnEm.style.background = '#3b82f6'; btnEm.style.color = 'white';
        btnWeak.style.background = 'transparent'; btnWeak.style.color = 'rgba(255,255,255,0.6)';
        // updateWuExperiment(); // No longer needed, animation loop handles state
    };

    btnWeak.onclick = () => {
        console.log('Clicked Weak');
        currentForce = 'weak';
        btnWeak.style.background = '#0d9488'; btnWeak.style.color = 'white';
        btnEm.style.background = 'transparent'; btnEm.style.color = 'rgba(255,255,255,0.6)';
        // updateWuExperiment(); // No longer needed, animation loop handles state
    };

    toggleContainer.appendChild(btnEm);
    toggleContainer.appendChild(btnWeak);
    experimentContainer.appendChild(toggleContainer);

    // Canvas
    const wuCanvas = document.createElement('canvas');
    wuCanvas.width = 600;
    wuCanvas.height = 180; // Height for Co-60 spin + electron visualization
    wuCanvas.style.cssText = 'width: 100%; max-width: 600px; height: 180px; background: radial-gradient(circle at center, rgba(20,20,30,1), rgba(0,0,0,0)); border-radius: 8px;';
    experimentContainer.appendChild(wuCanvas);

    const wuCtx = wuCanvas.getContext('2d');

    // Quote
    const quote = document.createElement('div');
    quote.innerHTML = '“上帝是左撇子。在弱相互作用的底层代码中，镜像世界并不存在。”';
    quote.style.cssText = 'margin-top: 1rem; font-style: italic; color: rgba(255,255,255,0.5); font-size: 0.85rem; text-align: center;';
    experimentContainer.appendChild(quote);

    section1.appendChild(experimentContainer);
    wrapper.appendChild(section1);

    // Wu Experiment Animation Logic
    function updateWuExperiment() {
        // State update handled in loop
    }

    // ==========================================
    // COMPACT LAYOUT CONTAINER (Bottom Grid)
    // ==========================================
    const bottomGrid = document.createElement('div');
    bottomGrid.style.cssText = 'display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; width: 100%; max-width: 1200px; align-items: stretch;'; // Align items stretch for equal height

    // ==========================================
    // SECTION 2: The Domino Effect (C, P, T) - LEFT COLUMN
    // ==========================================
    const section2 = document.createElement('div');
    section2.style.cssText = 'width: 100%; display: flex; flex-direction: column;'; // Flex column

    const s2Header = document.createElement('div');
    s2Header.innerHTML = `
    <h3 style="color: #fff; border-left: 4px solid #f59e0b; padding-left: 1rem; margin-bottom: 0.5rem; font-size: 1.1rem;">
        2. 摇摇欲坠的对称性 (The Tottering Symmetries)
    </h3>
    <p style="color: #aaa; margin-bottom: 1rem; font-size: 0.8rem;">
        点击图标查看破缺。
    </p>
`;
    section2.appendChild(s2Header);

    // WRAPPED CONTAINER FOR ALIGNMENT
    const dominoContainer = document.createElement('div');
    dominoContainer.style.cssText = `
    background: linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.8));
    border: 1px solid #f59e0b; border-radius: 16px; padding: 1rem;
    display: flex; flex-direction: column; justify-content: center; flex-grow: 1;
    box-shadow: 0 0 20px rgba(245, 158, 11, 0.1);
`;

    const iconsContainer = document.createElement('div');
    iconsContainer.style.cssText = 'display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.8rem; width: 100%;'; // Tighter gap

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
        padding: 0.8rem; text-align: center; cursor: pointer; transition: all 0.5s; position: relative; overflow: hidden; height: 100%;
    `;

        card.innerHTML = `
        <div class="sym-icon-container" style="height: 3rem; margin-bottom: 0.5rem; display: flex; align-items: center; justify-content: center; position: relative;">
            <div class="sym-icon" style="font-size: 2rem; transition: all 0.5s;">${sym.icon}</div>
            <canvas class="crack-overlay" width="80" height="80" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); pointer-events: none; opacity: 0; transition: opacity 0.3s;"></canvas>
        </div>
        <h4 style="color: #fff; margin-bottom: 0.2rem; font-size: 0.9rem; transition: transform 0.5s;">${sym.label}</h4>
        <div class="sym-status" style="color: #4ade80; font-size: 0.7rem; font-weight: bold; letter-spacing: 1px;">SYMMETRIC</div>
    `;

        let broken = false;
        card.onclick = () => {
            if (broken) return;
            broken = true;

            // Border flash and change
            card.style.borderColor = '#ef4444';
            card.style.background = 'rgba(239, 68, 68, 0.1)';
            card.style.transform = 'rotate(' + (Math.random() * 4 - 2) + 'deg)'; // Slight tilt

            // Get icon and tilt it
            const icon = card.querySelector('.sym-icon');
            icon.style.transform = 'rotate(-15deg) scale(0.9)';
            icon.style.opacity = '0.6';
            icon.style.filter = 'grayscale(50%)';

            // Show cracks overlay
            const crackCanvas = card.querySelector('.crack-overlay');
            crackCanvas.style.opacity = '1';
            const ctx = crackCanvas.getContext('2d');

            // Draw shattered glass cracks
            ctx.strokeStyle = '#ef4444';
            ctx.lineWidth = 2;
            ctx.shadowColor = '#ff0000';
            ctx.shadowBlur = 5;

            // Central impact point
            const cx = 40, cy = 40;

            // Main radial cracks
            for (let i = 0; i < 6; i++) {
                const angle = (i / 6) * Math.PI * 2 + Math.random() * 0.3;
                const len = 25 + Math.random() * 15;
                ctx.beginPath();
                ctx.moveTo(cx, cy);

                // Jagged line
                let x = cx, y = cy;
                for (let j = 0; j < 4; j++) {
                    x += Math.cos(angle) * (len / 4) + (Math.random() - 0.5) * 8;
                    y += Math.sin(angle) * (len / 4) + (Math.random() - 0.5) * 8;
                    ctx.lineTo(x, y);
                }
                ctx.stroke();
            }

            // Ring cracks
            ctx.beginPath();
            ctx.arc(cx, cy, 15 + Math.random() * 5, 0, Math.PI * 1.5);
            ctx.stroke();

            // Update status text
            const status = card.querySelector('.sym-status');
            status.textContent = 'VIOLATED';
            status.style.color = '#ef4444';
            status.style.fontWeight = '900';
            status.style.letterSpacing = '2px';
            status.style.fontSize = '0.8rem';

            // Description
            const desc = document.createElement('div');
            desc.innerHTML = `
            <p style="color: #fca5a5; margin-top: 0.5rem; font-weight: 500; font-size: 0.75rem;">${sym.desc}</p>
        `;
            card.appendChild(desc);
        };

        iconsContainer.appendChild(card);
    });

    dominoContainer.appendChild(iconsContainer);
    section2.appendChild(dominoContainer);
    bottomGrid.appendChild(section2);

    // ==========================================
    // SECTION 3: The Ultimate Crystal (CPT) - RIGHT COLUMN
    // ==========================================
    const section3 = document.createElement('div');
    section3.style.cssText = 'width: 100%; display: flex; flex-direction: column;'; // Flex column

    const s3Header = document.createElement('div');
    s3Header.innerHTML = `
    <h3 style="color: #fff; border-left: 4px solid #3b82f6; padding-left: 1rem; margin-bottom: 0.5rem; font-size: 1.1rem;">
        3. 终极秩序 (CPT Theorem)
    </h3>
    <p style="color: #aaa; margin-bottom: 1rem; font-size: 0.8rem;">
        C、P、T 联合变换，物理定律依然完美。
    </p>
`;
    section3.appendChild(s3Header);

    const cptContainer = document.createElement('div');
    cptContainer.style.cssText = `
        background: linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.8));
        border: 1px solid #3b82f6; border-radius: 16px; padding: 0.8rem;
        display: flex; flex-direction: column; align-items: center; justify-content: center; flex-grow: 1;
        box-shadow: 0 0 20px rgba(59, 130, 246, 0.1);
    `;

    // CPT Machine UI
    const machineDisplay = document.createElement('div');
    machineDisplay.style.cssText = 'width: 100%; height: 100px; display: flex; align-items: center; justify-content: center; margin-bottom: 0.5rem; position: relative;'; // Reduced height

    // Canvas for Particle
    const cptCanvas = document.createElement('canvas');
    cptCanvas.width = 300;
    cptCanvas.height = 100; // Further Reduced height
    machineDisplay.appendChild(cptCanvas);

    const cptCtx = cptCanvas.getContext('2d');

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
    stepsContainer.style.cssText = 'display: flex; gap: 0.8rem; margin-bottom: 0.5rem;';

    const steps = ['P', 'C', 'T'];
    const stepEls = {};

    steps.forEach(step => {
        const el = document.createElement('div');
        el.style.cssText = `
            width: 36px; height: 36px; border - radius: 50 %; border: 2px solid rgba(255, 255, 255, 0.2);
            display: flex; align - items: center; justify - content: center; font - weight: bold; color: rgba(255, 255, 255, 0.5);
            transition: all 0.3s; font - size: 0.9rem;
            `;
        el.textContent = step;
        stepEls[step] = el;
        stepsContainer.appendChild(el);
    });
    cptContainer.appendChild(stepsContainer);

    // Controls
    const controlsDiv = document.createElement('div');
    controlsDiv.style.cssText = 'display: flex; gap: 0.5rem;';

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

    section3.appendChild(cptContainer);
    bottomGrid.appendChild(section3);

    wrapper.appendChild(bottomGrid);

    stage.appendChild(wrapper);

    // --- Cobalt-60 Spin + Electron Emission Visualization ---
    // isMirror: is this the mirror-world particle?
    // isWeakForce: is weak force selected? (determines if P is violated)
    function drawParticle(ctx, x, y, isMirror, isWeakForce, t) {
        ctx.save();
        ctx.translate(x, y);

        const isViolation = isMirror && isWeakForce;

        if (isViolation) {
            ctx.globalAlpha = 0.5;
        }

        // === NUCLEUS (Cobalt-60) ===
        const nucleusRadius = 18;

        // Nucleus glow
        const glowGrad = ctx.createRadialGradient(0, -5, 3, 0, -5, nucleusRadius + 8);
        glowGrad.addColorStop(0, 'rgba(59, 130, 246, 0.8)');
        glowGrad.addColorStop(0.6, 'rgba(59, 130, 246, 0.2)');
        glowGrad.addColorStop(1, 'rgba(59, 130, 246, 0)');
        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(0, -5, nucleusRadius + 8, 0, Math.PI * 2);
        ctx.fill();

        // Nucleus core
        ctx.fillStyle = '#3b82f6';
        ctx.beginPath();
        ctx.arc(0, -5, nucleusRadius, 0, Math.PI * 2);
        ctx.fill();

        // Inner shine
        ctx.fillStyle = 'rgba(255,255,255,0.3)';
        ctx.beginPath();
        ctx.arc(-4, -9, 6, 0, Math.PI * 2);
        ctx.fill();

        // Label
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 9px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('Co-60', 0, -5);

        // === SPIN ARROW ===
        // Reality: spin UP, Mirror: spin DOWN (always correct reflection)
        const spinDir = isMirror ? -1 : 1;

        ctx.strokeStyle = '#fcd34d';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(0, -5);
        ctx.lineTo(0, -40 * spinDir);
        ctx.stroke();

        // Arrow head
        ctx.beginPath();
        const arrowY = -40 * spinDir;
        ctx.moveTo(0, arrowY);
        ctx.lineTo(-5, arrowY + 8 * spinDir);
        ctx.lineTo(5, arrowY + 8 * spinDir);
        ctx.closePath();
        ctx.fillStyle = '#fcd34d';
        ctx.fill();

        // Spin label
        ctx.font = '8px Arial';
        ctx.fillStyle = '#fcd34d';
        ctx.fillText(spinDir > 0 ? '自旋↑' : '自旋↓', 0, spinDir > 0 ? -50 : 50);

        // === ELECTRON EMISSION ===
        // Reality: electrons go DOWN (opposite to spin UP)
        // Mirror + EM: electrons go UP (proper reflection - spin DOWN → electrons UP)
        // Mirror + Weak: electrons go DOWN (VIOLATION! - spin DOWN but electrons still DOWN)
        const electronDir = (isMirror && !isWeakForce) ? -1 : 1; // Only flip in EM mode
        const eOffset = Math.sin(t * 4) * 3;

        // Electron positions
        const e1Y = 25 * electronDir + eOffset;
        const e2Y = 30 * electronDir + eOffset;

        // Electron 1
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.arc(-6, e1Y, 4, 0, Math.PI * 2);
        ctx.fill();

        // Electron 2
        ctx.beginPath();
        ctx.arc(6, e2Y, 4, 0, Math.PI * 2);
        ctx.fill();

        // Emission arrows
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, 10 * electronDir);
        ctx.lineTo(0, 38 * electronDir);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, 40 * electronDir);
        ctx.lineTo(-4, 34 * electronDir);
        ctx.moveTo(0, 40 * electronDir);
        ctx.lineTo(4, 34 * electronDir);
        ctx.stroke();

        // e- label
        ctx.fillStyle = '#fff';
        ctx.font = '8px Arial';
        ctx.fillText(electronDir > 0 ? 'e⁻↓' : 'e⁻↑', 0, 48 * electronDir);

        // === VIOLATION OVERLAY (only in Weak force mirror) ===
        if (isViolation) {
            // Red warning frame
            ctx.strokeStyle = '#ef4444';
            ctx.lineWidth = 2;
            ctx.setLineDash([4, 4]);
            ctx.strokeRect(-45, -55, 90, 115);
            ctx.setLineDash([]);

            // "P VIOLATED" warning
            ctx.fillStyle = '#ef4444';
            ctx.font = 'bold 11px Arial';
            ctx.shadowColor = '#ff0000';
            ctx.shadowBlur = 8;
            ctx.fillText('⚠ 宇称破缺!', 0, -52);
            ctx.shadowBlur = 0;

            // Explanation
            ctx.font = '7px Arial';
            ctx.fillStyle = 'rgba(255,100,100,0.9)';
            ctx.fillText('自旋反向 但电子仍向下', 0, 60);
        }

        ctx.restore();
    }

    // Animation Loop for Wu Experiment & CPT Machine
    function animateSymmetryBreaking() {
        if (currentView !== 'symmetry-breaking') return;

        const t = Date.now() / 1000;

        // --- Wu Experiment Animation ---
        if (document.body.contains(wuCanvas)) {
            wuCtx.clearRect(0, 0, 600, 180); // Updated height

            // Draw Mirror (Centered at 300)
            wuCtx.save();
            wuCtx.strokeStyle = 'rgba(255,255,255,0.2)';
            wuCtx.lineWidth = 2;
            wuCtx.beginPath();
            wuCtx.moveTo(300, 20);
            wuCtx.lineTo(300, 160); // Updated height
            wuCtx.stroke();

            // Mirror Glass Effect
            wuCtx.fillStyle = 'rgba(255,255,255,0.05)';
            wuCtx.fillRect(290, 20, 20, 140); // Updated height
            wuCtx.restore();

            // Draw Labels
            wuCtx.fillStyle = '#fff';
            wuCtx.font = '12px Arial';
            wuCtx.textAlign = 'center';
            wuCtx.fillText('现实世界 (Reality)', 150, 30);
            wuCtx.fillText('镜像世界 (Mirror)', 450, 30);

            const isWeak = (currentForce === 'weak');

            // Reality: Spin UP, electrons DOWN (always the same)
            drawParticle(wuCtx, 150, 90, false, isWeak, t);

            // Mirror: 
            // EM mode: Spin DOWN, electrons UP (proper reflection - symmetry preserved!)
            // Weak mode: Spin DOWN, electrons still DOWN (VIOLATION!)
            drawParticle(wuCtx, 450, 90, true, isWeak, t);
        }

        // --- CPT Machine Animation ---
        if (document.body.contains(cptCanvas)) {
            cptCtx.clearRect(0, 0, 300, 120); // Reduced height

            const cx = 150, cy = 60; // Adjusted Y
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
                glowColor = 'rgba(249, 115, 22, 0.6)'; // Stronger glow
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
        const cx = 150, cy = 60; // Adjusted Y
        const cptCtx = cptCanvas.getContext('2d');
        cptCtx.clearRect(0, 0, 300, 120); // Adjusted height
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

// --- QFT Visualization Logic ---
function renderQFTVisualization() {
    const canvas = document.getElementById('qft-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const parent = canvas.parentElement;
    canvas.width = parent.clientWidth;
    canvas.height = 200; // Fixed height

    let mode = 'field'; // 'field' or 'particle'
    let time = 0;

    // Toggle Logic
    const toggleSwitch = document.getElementById('qft-toggle-switch');
    const btnField = document.getElementById('view-field-btn');
    const btnParticle = document.getElementById('view-particle-btn');
    const toggleContainer = document.querySelector('.qft-toggle');

    function setMode(newMode) {
        mode = newMode;
        if (mode === 'particle') {
            toggleContainer.classList.add('particle-mode');
            btnParticle.classList.add('active');
            btnField.classList.remove('active');
        } else {
            toggleContainer.classList.remove('particle-mode');
            btnField.classList.add('active');
            btnParticle.classList.remove('active');
        }
    }

    if (toggleSwitch) {
        toggleSwitch.onclick = () => setMode(mode === 'field' ? 'particle' : 'field');
        btnField.onclick = () => setMode('field');
        btnParticle.onclick = () => setMode('particle');
    }

    // Fluid Grid Data (High Density for Silk look)
    const cols = 50;
    const rows = 25;
    const spacingX = canvas.width / cols;
    const spacingY = canvas.height / rows;

    function animate() {
        if (currentView !== 'grid') return;
        if (!document.body.contains(canvas)) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Aurora Gradient (Cyan -> Purple)
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, '#4ecdc4'); // Cyan
        gradient.addColorStop(1, '#a855f7'); // Purple

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 0.5; // Fine lines
        ctx.globalAlpha = 0.6; // Semi-transparent for silk effect

        time += 0.02; // Slower, smoother motion

        // Draw Horizontal Flow Lines (Silk)
        for (let y = 0; y <= rows; y++) {
            ctx.beginPath();
            for (let x = 0; x <= cols; x++) {
                const px = x * spacingX;
                const py = y * spacingY;

                // Height calculation (Organic Fluid)
                let h = 0;

                // Layer 1: Base Swell
                h += Math.sin(x * 0.2 + time) * Math.cos(y * 0.2 + time * 0.8) * 8;
                // Layer 2: Fine Ripples
                h += Math.sin(x * 0.5 - time * 1.5) * 3;

                // Particle Excitation (Gaussian Pulse - High Energy)
                if (mode === 'particle') {
                    const cx = cols / 2;
                    const cy = rows / 2;
                    const dx = x - cx;
                    const dy = y - cy;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    // Sharper, higher peak
                    const pulse = 80 * Math.exp(-dist * dist / 8);
                    h -= pulse;
                }

                const drawX = px;
                const drawY = py + h;

                if (x === 0) ctx.moveTo(drawX, drawY);
                else ctx.lineTo(drawX, drawY);
            }
            ctx.stroke();
        }

        // Vertical lines (Optional: Fainter to emphasize flow)
        ctx.globalAlpha = 0.2;
        for (let x = 0; x <= cols; x += 2) { // Skip every other line
            ctx.beginPath();
            for (let y = 0; y <= rows; y++) {
                const px = x * spacingX;
                const py = y * spacingY;

                let h = 0;
                h += Math.sin(x * 0.2 + time) * Math.cos(y * 0.2 + time * 0.8) * 8;
                h += Math.sin(x * 0.5 - time * 1.5) * 3;

                if (mode === 'particle') {
                    const cx = cols / 2;
                    const cy = rows / 2;
                    const dx = x - cx;
                    const dy = y - cy;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const pulse = 80 * Math.exp(-dist * dist / 8);
                    h -= pulse;
                }

                const drawX = px;
                const drawY = py + h;

                if (y === 0) ctx.moveTo(drawX, drawY);
                else ctx.lineTo(drawX, drawY);
            }
            ctx.stroke();
        }
        ctx.globalAlpha = 1; // Reset

        // Particle Glow (High Energy Core)
        if (mode === 'particle') {
            const cx = canvas.width / 2;
            const cy = canvas.height / 2 - 50; // Peak position

            // Outer Glow (Aurora)
            const glow = ctx.createRadialGradient(cx, cy, 5, cx, cy, 60);
            glow.addColorStop(0, 'rgba(255, 255, 255, 1)'); // Core White
            glow.addColorStop(0.2, 'rgba(78, 205, 196, 0.8)'); // Cyan Inner
            glow.addColorStop(0.5, 'rgba(168, 85, 247, 0.4)'); // Purple Mid
            glow.addColorStop(1, 'rgba(0, 0, 0, 0)');

            ctx.fillStyle = glow;
            ctx.globalCompositeOperation = 'screen'; // Additive blending
            ctx.beginPath();
            ctx.arc(cx, cy, 60, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalCompositeOperation = 'source-over'; // Reset
        }

        safeRequestAnimationFrame(animate);
    }

    animate();
}
