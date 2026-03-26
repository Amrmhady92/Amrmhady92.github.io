/*
 * PROJECTS DATA
 * ─────────────────────────────────────────────────────────────
 * Edit this file to add, remove, or update portfolio projects.
 * Each entry maps directly to a project card + detail modal.
 *
 * MEDIA TYPES:
 *   { type: 'youtube', id: 'VIDEO_ID' }               ← YouTube embed
 *   { type: 'youtube', id: 'VIDEO_ID', label: 'x' }   ← with caption
 *   { type: 'image',   url: 'images/name.jpg' }        ← local image
 *
 * TAG CLASSES (for colour coding):
 *   'vr'  |  'tools'  |  'ai'  |  'mobile'  |  'award'  |  ''
 * ─────────────────────────────────────────────────────────────
 */

window.PROJECTS_DATA = [

  /* ── 01 ── Highstreet Calamity ──────────────────────────── */
  {
    id:       'highstreet',
    category: 'vr',
    gradient: 'linear-gradient(135deg,#667eea,#764ba2)',
    title:    'Highstreet Calamity',
    tags:     [{ label:'VR', cls:'vr' }, { label:'MULTIPLAYER', cls:'' }],
    cardDesc: 'Multiplayer VR experience with 10+ locomotion modes and real-time Netcode for Entities.',
    period:   '07/2023 — 04/2026',
    role:     'Senior Unity Developer · Highstreet',
    desc:     'A multiplayer VR experience featuring a scalable locomotion system with over 10 movement modes — grounded movement, crouch, crawl, climbing, jumping, sliding, wall running, gliding, grappling hook, and VR swimming. Led the tech team, managed server infrastructure, and built real-time gameplay using Netcode for Entities.',
    tech:     ['Unity3D','C#','Netcode for Entities','DOTS','AWS GameLift','Multiplay','VR','Node.js'],
    highlights: [
      'Scalable Locomotion system (Strategy pattern) with 10+ movement modes',
      'Led tech team — codebase ownership and pull request reviews',
      'Managed Multiplay → AWS GameLift server migration',
      'Backend server maintenance with Node.js',
      'Coordinated workflow across designers, artists, and developers'
    ],
    media: [
      /* Add screenshots / trailer when available:               */
      /* { type: 'image',   url: 'images/highstreet-1.jpg' }     */
      /* { type: 'youtube', id: 'YOUR_TRAILER_ID' }              */
    ],
    links: [
      { label:'META STORE', icon:'fas fa-vr-cardboard',
        url:'https://www.meta.com/en-gb/experiences/highstreet-calamity/9352017631510878/' }
    ]
  },

  /* ── 02 ── Hex Grid Builder ─────────────────────────────── */
  {
    id:       'hexgrid',
    category: 'tools',
    gradient: 'linear-gradient(135deg,#f093fb,#f5576c)',
    title:    'Hex Grid Builder',
    tags:     [{ label:'TOOLS', cls:'tools' }, { label:'UNITY3D', cls:'' }],
    cardDesc: 'Flexible square / hex / 3D grid tool with full neighbour detection for Unity.',
    period:   '2022',
    role:     'Personal Project',
    desc:     'A flexible Unity3D grid-building tool that supports square, 3D square, and hexagonal grids with full neighbour detection. Designed as a reusable developer utility for strategy games, board games, and any grid-based system in Unity.',
    tech:     ['Unity3D','C#','Algorithms','Editor Tooling'],
    highlights: [
      'Square, 3D-square, and hexagonal grid types in one unified API',
      'Full neighbour detection for all grid types',
      'Designed for strategy, RPG, and board game prototyping'
    ],
    media: [
      { type:'youtube', id:'KrpTfoSQn4E' }
    ],
    links: [
      { label:'VIEW ON GITHUB', icon:'fab fa-github',
        url:'https://github.com/Amrmhady92/GridBuilder_Sq_Hex_3DSq' }
    ]
  },

  /* ── 03 ── Lord of the Nerds ────────────────────────────── */
  {
    id:       'lotn',
    category: 'vr',
    gradient: 'linear-gradient(135deg,#4facfe,#00f2fe)',
    title:    'Lord of the Nerds',
    tags:     [{ label:'VR', cls:'vr' }, { label:'AWARD', cls:'award' }],
    cardDesc: 'VR graduation project — Microsoft Imagine Cup 5th place nationally, 2017.',
    period:   '2017',
    role:     'Lead Developer · ITI Graduation Project',
    desc:     'A VR game for Oculus Rift and HTC VIVE built with Unity3D and C# as the ITI Game Development track graduation project. Won 5th place nationally at Microsoft Imagine Cup 2017 and 3rd place at Global Game Jam 2017.',
    tech:     ['Unity3D','C#','Oculus SDK','HTC VIVE','VR'],
    highlights: [
      'Microsoft Imagine Cup 2017 — 5th place nationally',
      'Global Game Jam 2017 — Voted 3rd place',
      'ITI Game Development track graduation project'
    ],
    media: [],
    links: []
  },

  /* ── 04 ── Gomoku AI ────────────────────────────────────── */
  {
    id:       'gomoku',
    category: 'ai',
    gradient: 'linear-gradient(135deg,#43e97b,#38f9d7)',
    title:    'Gomoku AI',
    tags:     [{ label:'AI', cls:'ai' }, { label:'UNITY3D', cls:'' }],
    cardDesc: '3D Gomoku board game with an AI opponent built in Unity3D — Uppsala University.',
    period:   '2020',
    role:     'University Project · Uppsala University',
    desc:     'A 3D Gomoku (Five in a Row) implementation in Unity3D featuring an AI opponent using game-tree search. Developed as part of the AI Programming for Games courses (15 credits) at Uppsala University, Visby.',
    tech:     ['Unity3D','C#','Game AI','Minimax','Alpha-Beta Pruning'],
    highlights: [
      '3D board game environment in Unity',
      'AI opponent using game-tree search (Minimax + Alpha-Beta pruning)',
      'Part of AI Programming for Games at Uppsala University (15 credits)'
    ],
    media: [
      { type:'youtube', id:'_1bDRFL7DJc' }
    ],
    links: [
      { label:'VIEW ON GITHUB', icon:'fab fa-github',
        url:'https://github.com/Amrmhady92/GomokuAIProject' }
    ]
  },

  /* ── 05 ── Habtic Content Builder ───────────────────────── */
  {
    id:       'habtic',
    category: 'mobile',
    gradient: 'linear-gradient(135deg,#fa709a,#fee140)',
    title:    'Habtic Content Builder',
    tags:     [{ label:'MOBILE', cls:'mobile' }, { label:'TOOLS', cls:'tools' }],
    cardDesc: 'Unity-based content builder and mobile app for the Habtic platform (Dephion B.V.).',
    period:   '11/2021 — 05/2023',
    role:     'Unity Developer · Dephion B.V.',
    desc:     "A Unity-based content authoring tool used to create and publish content for the Habtic mobile app. Took full ownership of the application, implemented its UI using Unity's new UI Toolkit, maintained the Habtic mobile app, created mini-games to increase user engagement, and conducted thorough app testing.",
    tech:     ['Unity3D','C#','Unity UI Toolkit','Mobile'],
    highlights: [
      'Full ownership of the Unity Content Builder application',
      "UI implementation using Unity's new UI Toolkit",
      'Mini-game creation to increase user engagement',
      'Bug fixing and feature delivery for the Habtic mobile app'
    ],
    media: [],
    links: [
      { label:'DEPHION B.V.', icon:'fas fa-external-link-alt', url:'https://www.dephion.nl' }
    ]
  },

  /* ── 06 ── Game of Life 3D ──────────────────────────────── */
  {
    id:       'gol',
    category: 'ai',
    gradient: 'linear-gradient(135deg,#a18cd1,#fbc2eb)',
    title:    'Game of Life 3D',
    tags:     [{ label:'AI', cls:'ai' }, { label:'SIMULATION', cls:'' }],
    cardDesc: "Conway's Game of Life in full 3D using Unity3D and C# — Uppsala University.",
    period:   '2020',
    role:     'University Project · Uppsala University',
    desc:     "Conway's Game of Life rendered in full 3D using Unity3D — each cell is a 3D object, creating a spatially rich cellular automata simulation. A 2D version is also included. Both developed as part of the AI Programming for Games coursework at Uppsala University.",
    tech:     ['Unity3D','C#','Cellular Automata','Simulation'],
    highlights: [
      '3D spatial visualisation of cellular automata',
      '2D version also included',
      'Configurable rules and grid size',
      'Part of AI Programming for Games coursework at Uppsala University'
    ],
    media: [
      { type:'youtube', id:'oVgrRbunUWo', label:'3D VERSION' },
      { type:'youtube', id:'nGlz1a0buaA', label:'2D VERSION' }
    ],
    links: [
      { label:'VIEW ON GITHUB', icon:'fab fa-github',
        url:'https://github.com/Amrmhady92/GameOfLife3D' }
    ]
  },

  /* ── 07 ── Portals (Game Jam 2018) ──────────────────────── */
  {
    id:       'portals',
    category: 'vr',
    gradient: 'linear-gradient(135deg,#f7971e,#ffd200)',
    title:    'Portals',
    tags:     [{ label:'VR', cls:'vr' }, { label:'GAME JAM', cls:'' }],
    cardDesc: 'Global Game Jam 2018 VR prototype — throwable portal disc to grab items remotely.',
    period:   'Global Game Jam 2018',
    role:     'Game Jam Project',
    desc:     'A VR game jam prototype built during Global Game Jam 2018. Features a throwable portal disc mechanic that lets the player create a portal on any surface and remotely grab items through it — no teleportation, just reach. Designed to explore novel object-interaction mechanics unique to virtual reality.',
    tech:     ['Unity3D','C#','VR','Oculus SDK'],
    highlights: [
      'Throwable portal disc — create a portal on any surface',
      'Grab items remotely through the portal without moving',
      'Novel VR interaction design built within a jam time constraint'
    ],
    media: [
      { type:'youtube', id:'JgVDXFhDKUk' }
    ],
    links: []
  },

  /* ── 08 ── Project Lily ─────────────────────────────────── */
  {
    id:       'lily',
    category: 'vr',
    gradient: 'linear-gradient(135deg,#89f7fe,#66a6ff)',
    title:    'Project Lily',
    tags:     [{ label:'VR', cls:'vr' }, { label:'AI', cls:'ai' }],
    cardDesc: 'VR puzzle game — command Lily to solve puzzles. Alchemy Station + AI Commands system.',
    period:   '03/2018 — 09/2020',
    role:     'Lead Gameplay Developer · KandooZ Studio',
    desc:     'A VR puzzle-solving game where the player issues commands to Lily — the main character — to perform tasks and solve puzzles. Features a custom AI Commands system for player–character interaction and an Alchemy Station mechanic for crafting puzzle solutions. Developed during employment at KandooZ Studio as lead gameplay developer.',
    tech:     ['Unity3D','C#','VR','Game AI','Game Design'],
    highlights: [
      'AI Commands system — player orders Lily to perform specific actions',
      'Alchemy Station mechanic for crafting puzzle solutions',
      'VR-first spatial puzzle environments',
      'Led gameplay development at KandooZ Studio'
    ],
    media: [
      { type:'youtube', id:'JtrK4ujC30M' }
    ],
    links: []
  }

];
