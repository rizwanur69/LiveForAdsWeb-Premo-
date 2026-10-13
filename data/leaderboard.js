/* ==========================================================
   LEADERBOARD DATA — update every week
   ----------------------------------------------------------
   1. Copy the newest block inside "snapshots" and paste it
      ABOVE the old one (newest first).
   2. Change id / label / date and the users list.
   3. Optional per user:  avatar: "assets/avatars/name.jpg"
                          trend:  "up" | "down" | "same"
   Names can be shortened (e.g. "M...") exactly like the app.
   ========================================================== */
window.LFA_LEADERBOARD = {
  snapshots: [
    {
      id: "2026-10-12",
      label: "Week of Oct 12, 2026",
      date: "2026-10-12",
      season: "Testing Season",
      view: "All Time",
      users: [
        { name: "RIzwanUR", ap: 5765, up: 536, streak: 39, trend: "same" },
        { name: "RAI",      ap: 1665, up: 0,   streak: 1,  trend: "same" },
        { name: "Akhi",     ap: 1165, up: 464, streak: 1,  trend: "same" },
        { name: "M...",     ap: 1145, up: 92,  streak: 1 },
        { name: "N...",     ap: 965,  up: 89,  streak: 1 },
        { name: "S...",     ap: 965,  up: 109, streak: 1 },
        { name: "J...",     ap: 905,  up: 172, streak: 1 },
        { name: "Y...",     ap: 875,  up: 108, streak: 1 },
        { name: "A...",     ap: 865,  up: 101, streak: 1 },
        { name: "S...",     ap: 805,  up: 156, streak: 1 }
      ]
    }
  ]
};
