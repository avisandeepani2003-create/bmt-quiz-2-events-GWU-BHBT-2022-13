/* ...existing code... */
const events = [
    // --- Day 1: Nov 20, 2025 ---
    {
        title: "Opening Keynote: The Future of AI",
        type: "Keynote",
        date: "2025-11-20T09:00:00",
        description: "Join industry visionary Dr. Evelyn Reed as she unveils the next decade of AI innovation.",
        image: "OIP (1).jpg"
    },
    {
        title: "Advanced JavaScript Workshop",
        type: "Workshop",
        date: "2025-11-20T10:30:00",
        description: "A 3-hour, hands-on deep-dive into asynchronous JavaScript, Promises, and modern ES6+ features.",
        image: "OIP.jpg"
    },
    {
        title: "Cybersecurity in the Cloud Era",
        type: "Talk",
        date: "2025-11-20T11:00:00",
        description: "Explore the evolving landscape of cloud security threats and proactive defense strategies.",
        image: "OIP (2).jpg"
    },
    {
        title: "Introduction to Quantum Computing",
        type: "Talk",
        date: "2025-11-20T14:00:00",
        description: "A beginner-friendly overview of quantum mechanics and its potential to revolutionize computing.",
        image: "OIP (3).jpg"
    },
    {
        title: "Networking Mixer & Welcome Reception",
        type: "Social",
        date: "2025-11-20T17:00:00",
        description: "Connect with fellow attendees, speakers, and sponsors over drinks and appetizers.",
        image: "OIP (4).jpg"
    },

    // --- Day 2: Nov 21, 2025 ---
    {
        title: "The Ethics of Machine Learning",
        type: "Talk",
        date: "2025-11-21T09:30:00",
        description: "A critical discussion on the societal impact and ethical responsibilities in ML development.",
        image: "OIP (5).jpg"
    },
    {
        title: "Building Scalable Web Apps with Microservices",
        type: "Talk",
        date: "2025-11-21T10:30:00",
        description: "Learn the principles of microservices from lead engineers at a top tech company.",
        image: "OIP (6).jpg"
    },
    {
        title: "Mastering React Performance",
        type: "Workshop",
        date: "2025-11-21T13:00:00",
        description: "Optimize your React applications by learning memoization, code splitting, and bundle analysis.",
        image: "download.WEBP"
    },
    {
        title: "The Psychology of User Experience (UX)",
        type: "Talk",
        date: "2025-11-21T14:00:00",
        description: "Understand the cognitive biases and psychological principles that drive effective UX design.",
        image: "OIP (3).WEBP"
    },
    {
        title: "Panel: The Future of Remote Work in Tech",
        type: "Panel",
        date: "2025-11-21T16:00:00",
        description: "Industry leaders discuss the challenges, tools, and culture of building successful remote-first teams.",
        image: "OIP (4).WEBP"
    },

    // --- Day 3: Nov 22, 2025 ---
    {
        title: "UI/UX Design Fundamentals for Developers",
        type: "Workshop",
        date: "2025-11-22T09:00:00",
        description: "A practical workshop on visual hierarchy, color theory, and typography that every developer should know.",
        image: "OIP (5).WEBP"
    },
    {
        title: "From Monolith to Serverless",
        type: "Talk",
        date: "2025-11-22T10:00:00",
        description: "A case study on migrating a large-scale legacy application to a modern serverless architecture.",
        image: "OIP (6).WEBP"
    },
    {
        title: "State of Web Assembly in 2025",
        type: "Talk",
        date: "2025-11-22T11:30:00",
        description: "Discover how WebAssembly is enabling near-native performance for web applications.",
        image: "OIP (7).WEBP"
    },
    {
        title: "Data Visualization with D3.js",
        type: "Workshop",
        date: "2025-11-22T13:30:00",
        description: "Learn to create stunning, interactive data visualizations for the web from scratch.",
        image: "OIP (8).WEBP"
    },
    {
        title: "Closing Panel: Ask Me Anything with Speakers",
        type: "Panel",
        date: "2025-11-22T16:00:00",
        description: "An open Q&A session with a panel of the conference's top speakers. No topic is off-limits!",
        image: "OIP (9).WEBP"
    },

    // --- Bonus / Past Events for testing ---
    {
        title: "Pre-Conference Hackathon",
        type: "Social",
        date: "2025-11-19T09:00:00",
        description: "A 24-hour coding challenge with prizes for the most innovative projects. Kicks off before the main event.",
        image: "OIP (10).WEBP"
    },
    {
        title: "API Design Best Practices",
        type: "Talk",
        date: "2025-11-21T15:00:00",
        description: "Learn how to design, document, and maintain clean, consistent, and easy-to-use RESTful APIs.",
        image: "OIP (11).WEBP"
    },
    {
        title: "DevOps Culture and Tooling",
        type: "Talk",
        date: "2025-11-20T15:30:00",
        description: "An introduction to the principles of DevOps and the tools that enable continuous integration and deployment.",
        image: "R.JEGFP"
    },
    {
        title: "Mobile-First Design in Practice",
        type: "Workshop",
        date: "2025-11-20T13:00:00",
        description: "A hands-on session focusing on practical techniques for designing and building mobile-first responsive websites.",
        image: "OIP (11).WEBP"
    },
    {
        title: "Closing Ceremony & Awards",
        type: "Social",
        date: "2025-11-22T17:30:00",
        description: "Join us as we celebrate the best of the conference and announce the hackathon winners.",
        image: "OIP (12).WEBP"
    }
];

const eventContainer = document.getElementById('event-container');

function formatDate(iso){
  const d = new Date(iso);
  return d.toLocaleString(undefined,{weekday:'short', month:'short', day:'numeric', hour:'2-digit', minute:'2-digit'});
}

function createEventCard(ev){
  const card = document.createElement('article');
  card.className = 'event-card';
  card.dataset.date = ev.date;

  const media = document.createElement('div');
  media.className = 'event-media';
  const img = document.createElement('img');
  img.src = ev.image;
  img.alt = ev.title;
  media.appendChild(img);

  const body = document.createElement('div');
  body.className = 'event-body';

  const meta = document.createElement('div');
  meta.className = 'event-meta';
  const badge = document.createElement('span');
  badge.className = 'badge';
  badge.textContent = ev.type;
  const date = document.createElement('div');
  date.className = 'event-date';
  date.textContent = formatDate(ev.date);
  meta.appendChild(badge);
  meta.appendChild(date);

  const title = document.createElement('h3');
  title.className = 'event-title';
  title.textContent = ev.title;

  const desc = document.createElement('p');
  desc.className = 'event-desc';
  desc.textContent = ev.description;

  // countdown
  const countdown = document.createElement('div');
  countdown.className = 'countdown';
  countdown.dataset.target = ev.date;
  countdown.textContent = '';

  // actions
  const actions = document.createElement('div');
  actions.className = 'card-actions';
  const addBtn = document.createElement('button');
  addBtn.className = 'btn btn-primary';
  addBtn.textContent = 'Add to Calendar';
  addBtn.addEventListener('click', () => {
    downloadICS(ev);
  });

  const gcal = document.createElement('a');
  gcal.className = 'btn btn-ghost';
  gcal.textContent = 'Open in Google Calendar';
  gcal.href = generateGCalUrl(ev);
  gcal.target = '_blank';
  gcal.rel = 'noopener noreferrer';

  actions.appendChild(addBtn);
  actions.appendChild(gcal);

  body.appendChild(meta);
  body.appendChild(title);
  body.appendChild(desc);
  body.appendChild(countdown);
  body.appendChild(actions);

  card.appendChild(media);
  card.appendChild(body);

  return card;
}

function renderEvents(filter = 'All'){
  eventContainer.innerHTML = '';
  const normalized = (s) => s && s.toLowerCase();
  const list = events.filter(ev => {
    if(filter === 'All') return true;
    return normalized(ev.type) === normalized(filter);
  });
  list.sort((a,b)=> new Date(a.date) - new Date(b.date));
  list.forEach(ev => eventContainer.appendChild(createEventCard(ev)));
  // start countdown loop (idempotent)
  startCountdownLoop();
}

/* countdown loop updates all .countdown elements */
let countdownTimerId = null;
function startCountdownLoop(){
  if(countdownTimerId) return;
  function tick(){
    const nodes = document.querySelectorAll('.countdown');
    const now = Date.now();
    nodes.forEach(n=>{
      const target = new Date(n.dataset.target).getTime();
      if(isNaN(target)){ n.textContent = ''; return; }
      const diff = target - now;
      if(diff <= 0){
        n.textContent = 'Event has ended';
        return;
      }
      const days = Math.floor(diff / (1000*60*60*24));
      const hrs = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
      const mins = Math.floor((diff % (1000*60*60)) / (1000*60));
      const secs = Math.floor((diff % (1000*60)) / 1000);
      n.textContent = `${days}d ${hrs}h ${mins}m ${secs}s`;
    });
  }
  tick();
  countdownTimerId = setInterval(tick,1000);
}

/* generate .ics content and trigger download */
function createICS(ev){
  const pad = (n)=> (n<10? '0'+n : n);
  const start = new Date(ev.date);
  const end = new Date(start.getTime() + 60*60*1000); // default 1 hour
  const toICS = (d) => `${d.getUTCFullYear()}${pad(d.getUTCMonth()+1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}00Z`;
  const uid = `${Date.now()}@techcon.local`;
  const ics =
`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//techcon//EN
BEGIN:VEVENT
UID:${uid}
DTSTAMP:${toICS(new Date())}
DTSTART:${toICS(start)}
DTEND:${toICS(end)}
SUMMARY:${escapeICSText(ev.title)}
DESCRIPTION:${escapeICSText(ev.description)}
END:VEVENT
END:VCALENDAR`;
  return ics;
}
function escapeICSText(s){
  return (s || '').replace(/\\n/g,'\\n').replace(/,/g,'\\,').replace(/;/g,'\\;');
}
function downloadICS(ev){
  const blob = new Blob([createICS(ev)], {type:'text/calendar;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${ev.title.replace(/\s+/g,'_')}.ics`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(()=>URL.revokeObjectURL(url), 5000);
}

/* Google Calendar link */
function generateGCalUrl(ev){
  const start = new Date(ev.date).toISOString().replace(/[-:]/g,'').split('.')[0]+'Z';
  const end = new Date(new Date(ev.date).getTime() + 60*60*1000).toISOString().replace(/[-:]/g,'').split('.')[0]+'Z';
  const params = new URLSearchParams({
    action:'TEMPLATE',
    text: ev.title,
    details: ev.description,
    dates: `${start}/${end}`
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/* filters */
function initFilters(){
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      buttons.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.dataset.filter || 'All';
      renderEvents(target);
    });
  });
}

/* theme: detect, toggle, persist and apply before paint */
const THEME_KEY = 'techcon_theme';
function applyTheme(dark){
  document.body.classList.toggle('dark-mode', !!dark);
  const toggle = document.getElementById('toggle-theme');
  if(toggle) toggle.setAttribute('aria-pressed', !!dark);
}
function detectAndApplyTheme(){
  const saved = localStorage.getItem(THEME_KEY);
  if(saved !== null){
    applyTheme(saved === 'dark');
    return;
  }
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(prefersDark);
}
function toggleTheme(){
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
  const toggle = document.getElementById('toggle-theme');
  if(toggle) toggle.setAttribute('aria-pressed', isDark);
}

/* init */
document.addEventListener('DOMContentLoaded', ()=>{
  // set year
  const yearNode = document.getElementById('year');
  if(yearNode) yearNode.textContent = new Date().getFullYear();

  detectAndApplyTheme();

  const themeBtn = document.getElementById('toggle-theme');
  if(themeBtn) themeBtn.addEventListener('click', toggleTheme);

  initFilters();
  renderEvents('All');
});
/* ...existing code... */