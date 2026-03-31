// ============================================
// BACKLOG DATA
// ============================================

const backlogs = [
    {
        id: 1,
        name: "Maths (Sem 1)",
        emoji: "🧮",
        semester: "Semester 1",
        status: "pending",
        statusLabel: "Forms Open",
        cost: "₹800",
        timeline: "Register Now",
        notes: "Forms are open right now. Need ₹800 to register and clear it.",
        progress: 20,
        color: "#f59e0b"
    },
    {
        id: 2,
        name: "EVS",
        emoji: "🌿",
        semester: "—",
        status: "pending",
        statusLabel: "Not Signed Up",
        cost: "₹1,000 (NPTEL)",
        timeline: "Detained — Need to sign up",
        notes: "Got detained in this subject. Haven't signed up yet. Will need ₹1,000 for the NPTEL course.",
        progress: 5,
        color: "#f59e0b"
    },
    {
        id: 3,
        name: "Soft Skills",
        emoji: "🗣️",
        semester: "—",
        status: "done",
        statusLabel: "Already Given ✅",
        cost: "—",
        timeline: "Done",
        notes: "Already given this exam. One down! ✅",
        progress: 100,
        color: "#10b981"
    },
    {
        id: 4,
        name: "Maths (Sem 2)",
        emoji: "📐",
        semester: "Semester 2",
        status: "giving",
        statusLabel: "Giving in April",
        cost: "Already Registered",
        timeline: "April 2026",
        notes: "Already registered for this one. Giving the exam in April.",
        progress: 60,
        color: "#10b981"
    },
    {
        id: 5,
        name: "Modern Physics",
        emoji: "⚛️",
        semester: "—",
        status: "planned",
        statusLabel: "June (Summer)",
        cost: "₹15,000",
        timeline: "June 2026 — Summer School",
        notes: "Did sign up but found it too difficult to do online. Planning to do it in June during summer school. Costs ₹15K.",
        progress: 15,
        color: "#3b82f6"
    },
    {
        id: 6,
        name: "Experimental Physics",
        emoji: "🔬",
        semester: "—",
        status: "planned",
        statusLabel: "June (Summer)",
        cost: "₹7,000",
        timeline: "June 2026 — Summer School",
        notes: "Lab subject — can't do online. Will attend summer school in June. Costs ₹7K.",
        progress: 10,
        color: "#3b82f6"
    },
    {
        id: 7,
        name: "PS Theory",
        emoji: "📊",
        semester: "—",
        status: "planned",
        statusLabel: "June (Planned)",
        cost: "₹15,000",
        timeline: "June 2026",
        notes: "Couldn't find an NPTEL course for this. Will give it in June. Costs ₹15K.",
        progress: 10,
        color: "#3b82f6"
    },
    {
        id: 8,
        name: "Modern C++",
        emoji: "💻",
        semester: "—",
        status: "planned",
        statusLabel: "Difficult Online",
        cost: "TBD",
        timeline: "Planning",
        notes: "Finding this really hard in the online format — harder than physics. Working on figuring out the best way to tackle it.",
        progress: 10,
        color: "#3b82f6"
    },
    {
        id: 9,
        name: "C++ Lab",
        emoji: "🖥️",
        semester: "—",
        status: "planned",
        statusLabel: "June (Summer)",
        cost: "₹7,000",
        timeline: "June 2026 — Summer School",
        notes: "Lab subject. Will do in June during summer school. Costs ₹7K.",
        progress: 10,
        color: "#3b82f6"
    },
    {
        id: 10,
        name: "BEEE",
        emoji: "⚡",
        semester: "Semester 2",
        status: "giving",
        statusLabel: "Giving in April",
        cost: "Already Registered",
        timeline: "April 2026",
        notes: "Electronics exam from Sem 2. Already registered and giving it in April.",
        progress: 60,
        color: "#10b981"
    },
    {
        id: 11,
        name: "Japanese (Elective)",
        emoji: "🇯🇵",
        semester: "Open Elective",
        status: "giving",
        statusLabel: "Giving in April",
        cost: "Already Registered",
        timeline: "April 2026",
        notes: "Open elective. Already giving this in April.",
        progress: 60,
        color: "#10b981"
    },
    {
        id: 12,
        name: "DSA",
        emoji: "🧩",
        semester: "Semester 2",
        status: "registered",
        statusLabel: "Registered",
        cost: "₹800",
        timeline: "Upcoming",
        notes: "Actual back exam from Sem 2. Registered for ₹800.",
        progress: 30,
        color: "#8b5cf6"
    }
];

// ============================================
// PARTICLE BACKGROUND
// ============================================

const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
let particles = [];
let mouseX = 0;
let mouseY = 0;

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.hue = Math.random() > 0.5 ? 260 : 220;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Mouse interaction
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
            this.x -= dx * 0.005;
            this.y -= dy * 0.005;
            this.opacity = Math.min(this.opacity + 0.02, 0.8);
        } else {
            this.opacity = Math.max(this.opacity - 0.005, 0.1);
        }

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 80%, 70%, ${this.opacity})`;
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    const count = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
    for (let i = 0; i < count; i++) {
        particles.push(new Particle());
    }
}

function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
                const opacity = (1 - dist / 120) * 0.15;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        }
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    drawConnections();
    requestAnimationFrame(animateParticles);
}

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
});

resizeCanvas();
initParticles();
animateParticles();

// ============================================
// MIND MAP
// ============================================

const container = document.getElementById('mindmapContainer');
const nodesContainer = document.getElementById('backlogNodes');
const svgLines = document.getElementById('connectionLines');
const centerNode = document.getElementById('centerNode');
const detailPanel = document.getElementById('detailPanel');

let nodeElements = [];
let activeNode = null;

function positionNodes() {
    nodesContainer.innerHTML = '';
    svgLines.innerHTML = '';
    nodeElements = [];

    const rect = container.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const isMobile = window.innerWidth <= 480;
    const isTablet = window.innerWidth <= 768;
    const radiusX = isMobile ? Math.min(cx - 40, 150) : isTablet ? Math.min(cx - 50, 200) : Math.min(cx - 70, 320);
    const radiusY = isMobile ? Math.min(cy - 40, 150) : isTablet ? Math.min(cy - 50, 180) : Math.min(cy - 50, 260);

    backlogs.forEach((item, i) => {
        const angle = (i / backlogs.length) * Math.PI * 2 - Math.PI / 2;
        const x = cx + Math.cos(angle) * radiusX;
        const y = cy + Math.sin(angle) * radiusY;

        // Create SVG line
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', cx);
        line.setAttribute('y1', cy);
        line.setAttribute('x2', x);
        line.setAttribute('y2', y);
        line.setAttribute('data-id', item.id);
        svgLines.appendChild(line);

        // Create node
        const node = document.createElement('div');
        node.className = `backlog-node status-${item.status}`;
        node.style.left = `${x}px`;
        node.style.top = `${y}px`;
        node.style.animation = `nodeAppear 0.5s ease-out ${i * 0.08}s both`;
        node.innerHTML = `
            <span class="node-number">${item.id}</span>
            <span class="node-emoji">${item.emoji}</span>
            <span class="node-label">${item.name}</span>
        `;

        node.addEventListener('mouseenter', (e) => showDetail(item, e, i));
        node.addEventListener('mouseleave', hideDetail);
        node.addEventListener('click', (e) => toggleDetail(item, e, i));

        nodesContainer.appendChild(node);
        nodeElements.push({ el: node, line, x, y });
    });

    // Also draw interconnection lines between adjacent nodes
    for (let i = 0; i < backlogs.length; i++) {
        const next = (i + 1) % backlogs.length;
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        const curr = nodeElements[i];
        const nxt = nodeElements[next];
        line.setAttribute('x1', curr.x);
        line.setAttribute('y1', curr.y);
        line.setAttribute('x2', nxt.x);
        line.setAttribute('y2', nxt.y);
        line.style.stroke = 'rgba(139, 92, 246, 0.06)';
        line.style.strokeWidth = '1';
        line.setAttribute('data-ring', 'true');
        svgLines.appendChild(line);
    }
}

function showDetail(item, e, index) {
    activeNode = index;

    // Highlight the connection line
    svgLines.querySelectorAll('line').forEach(l => l.classList.remove('active'));
    svgLines.querySelector(`line[data-id="${item.id}"]`)?.classList.add('active');

    // Highlight adjacent ring lines
    svgLines.querySelectorAll('line[data-ring]').forEach((l, i) => {
        if (i === index || i === (index - 1 + backlogs.length) % backlogs.length) {
            l.style.stroke = 'rgba(139, 92, 246, 0.25)';
        }
    });

    // Populate detail panel
    document.getElementById('detailEmoji').textContent = item.emoji;
    document.getElementById('detailTitle').textContent = item.name;

    const statusEl = document.getElementById('detailStatus');
    statusEl.textContent = item.statusLabel;
    statusEl.className = `detail-status status-${item.status}`;

    document.getElementById('detailSemester').innerHTML = item.semester !== '—'
        ? `<span class="label">Semester</span><span class="value">${item.semester}</span>` : '';

    document.getElementById('detailCost').innerHTML =
        `<span class="label">Cost</span><span class="value">${item.cost}</span>`;

    document.getElementById('detailTimeline').innerHTML =
        `<span class="label">Timeline</span><span class="value">${item.timeline}</span>`;

    document.getElementById('detailNotes').innerHTML =
        `<span class="label">Details</span><span class="value">${item.notes}</span>`;

    const progressContainer = document.getElementById('detailProgress');
    const progressColor = item.status === 'done' ? '#10b981' :
        item.status === 'giving' ? '#10b981' :
            item.status === 'registered' ? '#8b5cf6' :
                item.status === 'planned' ? '#3b82f6' : '#f59e0b';

    progressContainer.innerHTML = `
        <span class="progress-label">Progress: ${item.progress}%</span>
        <div class="progress-bar-container">
            <div class="progress-bar-fill" style="width: ${item.progress}%; background: ${progressColor}"></div>
        </div>
    `;

    // Position the detail panel
    const panel = detailPanel;
    const panelWidth = 340;
    const panelHeight = 320;

    let left = e.clientX + 20;
    let top = e.clientY - 40;

    if (left + panelWidth > window.innerWidth - 20) {
        left = e.clientX - panelWidth - 20;
    }
    if (top + panelHeight > window.innerHeight - 20) {
        top = window.innerHeight - panelHeight - 20;
    }
    if (top < 20) top = 20;

    panel.style.left = `${left}px`;
    panel.style.top = `${top}px`;
    panel.classList.add('visible');
}

function hideDetail() {
    activeNode = null;
    detailPanel.classList.remove('visible');
    svgLines.querySelectorAll('line').forEach(l => {
        l.classList.remove('active');
        if (l.hasAttribute('data-ring')) {
            l.style.stroke = 'rgba(139, 92, 246, 0.06)';
        }
    });
}

let touchActiveNode = null;
function toggleDetail(item, e, index) {
    if (touchActiveNode === index) {
        hideDetail();
        touchActiveNode = null;
    } else {
        showDetail(item, e, index);
        touchActiveNode = index;
    }
}

// ============================================
// BACKLOG CARDS (below mind map)
// ============================================

function renderBacklogList() {
    const listContainer = document.getElementById('backlogList');
    listContainer.innerHTML = '';

    backlogs.forEach((item, i) => {
        const card = document.createElement('div');
        card.className = 'backlog-card';
        card.style.animationDelay = `${0.6 + i * 0.05}s`;

        card.innerHTML = `
            <div class="card-header">
                <span class="card-number">${item.id}</span>
                <span class="card-emoji">${item.emoji}</span>
                <span class="card-title">${item.name}</span>
                <span class="card-status-badge status-${item.status}">${item.statusLabel}</span>
            </div>
            <div class="card-details">${item.notes}</div>
            ${item.cost !== '—' && item.cost !== 'Already Registered' && item.cost !== 'TBD'
                ? `<span class="card-cost">💰 ${item.cost}</span>` : ''}
        `;

        card.addEventListener('mouseenter', () => {
            // Highlight corresponding mind map node
            const nodeEl = nodeElements[i];
            if (nodeEl) {
                nodeEl.el.style.transform = 'translate(-50%, -50%) scale(1.2)';
                nodeEl.el.style.zIndex = '10';
                svgLines.querySelector(`line[data-id="${item.id}"]`)?.classList.add('active');
            }
        });

        card.addEventListener('mouseleave', () => {
            const nodeEl = nodeElements[i];
            if (nodeEl) {
                nodeEl.el.style.transform = '';
                nodeEl.el.style.zIndex = '';
                svgLines.querySelector(`line[data-id="${item.id}"]`)?.classList.remove('active');
            }
        });

        listContainer.appendChild(card);
    });
}

// ============================================
// MODAL
// ============================================

function openModal() {
    document.getElementById('modalOverlay').classList.add('visible');
    document.body.style.overflow = 'hidden';
}

function closeModal(event, force = false) {
    if (force || event.target === document.getElementById('modalOverlay')) {
        document.getElementById('modalOverlay').classList.remove('visible');
        document.body.style.overflow = '';
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal({ target: document.getElementById('modalOverlay') });
    }
});

// ============================================
// LEGEND (insert after important button)
// ============================================

function renderLegend() {
    const wrapper = document.querySelector('.important-btn-wrapper');
    const legend = document.createElement('div');
    legend.className = 'legend';
    legend.innerHTML = `
        <div class="legend-item"><span class="legend-dot status-done"></span>Cleared</div>
        <div class="legend-item"><span class="legend-dot status-giving"></span>Giving Now</div>
        <div class="legend-item"><span class="legend-dot status-registered"></span>Registered</div>
        <div class="legend-item"><span class="legend-dot status-planned"></span>Planned</div>
        <div class="legend-item"><span class="legend-dot status-pending"></span>Action Needed</div>
    `;
    wrapper.after(legend);
}

// ============================================
// INIT
// ============================================

function init() {
    positionNodes();
    renderBacklogList();
    renderLegend();
}

window.addEventListener('resize', () => {
    positionNodes();
});

init();
