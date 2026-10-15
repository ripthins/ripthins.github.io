/*
  ============================================================
  TURTLE CTRL WEBSITE CONTENT
  ============================================================
  This is the ONE file to edit when something changes during the
  season: sponsors, events, season updates, roster, outreach, contact.

  Rules for editing (see CLAUDE.md for step-by-step guides):
  - Text goes inside "double quotes". If your text needs a double
    quote inside it, use 'single quotes' or the word instead.
  - Every item in a list ends with a comma: { ... },
  - Leave a field as "" (empty quotes) if you don't have it yet.
    The site shows a labeled placeholder or simply hides it.
  - Students: FIRST NAMES ONLY, never last names. Every student on the
    team has a signed media release, so team photos are OK. Adults who
    are not on the team (volunteers, the public) should not be in photos.
  - draft: true  marks text as a draft. Draft tags only SHOW on the site
    when showDraftMarkers (below) is true, so you can review them.
  - Anything left empty ("") is simply hidden on the site. Visitors
    never see "coming soon" notes or instructions.
  - Save the file, then refresh the page in your browser to check.
  ============================================================
*/

window.SITE = {

  /* ---------- Draft review switch ----------
     true  = show yellow DRAFT tags on every draft paragraph (for reviewing copy)
     false = hide them (what visitors should see) */
  showDraftMarkers: false,

  /* ---------- Contact (shows in the footer of every page) ---------- */
  contact: {
    email: "",          // e.g. "team@example.org"  NEEDED: every Contact Us / Sponsor Us button uses this
    instagram: "",      // full link, e.g. "https://instagram.com/yourhandle"
    youtube: "",        // full link
  },

  /* ---------- Links used by buttons ---------- */
  links: {
    // Where "Join the team" sends students. A Google Form link works well.
    joinForm: "",       // PLACEHOLDER: Reif to provide
    // Sponsor packet PDF. Put the file in the /files folder, then write its path here.
    sponsorPacket: "",  // e.g. "files/turtle-ctrl-sponsor-packet.pdf"
    // YouTube video ID for the "What is FRC?" video on the Robot page.
    // From https://www.youtube.com/watch?v=ABC123xyz the ID is ABC123xyz.
    firstVideo: "",     // PLACEHOLDER: pick an official FIRST video
  },

  /* ---------- Team numbers (Home page stat row) ---------- */
  stats: [
    { value: "12", label: "students" },
    { value: "11", label: "first-year members" },
    { value: "2",  label: "regionals in 2027" },
  ],

  /* ---------- Competition events, in order ---------- */
  events: [
    {
      name: "Pikes Peak Regional",
      city: "Colorado Springs, Colorado",
      week: "Week 1",
      dates: "",        // fill in when FIRST posts dates, e.g. "Mar 4-7, 2027"
      note: "Our learning event",
    },
    {
      name: "Hawaii Regional",
      city: "Honolulu, Hawaiʻi",
      week: "Week 3",
      dates: "",
      note: "Competing at home",
      draft: true,
    },
  ],

  /* ---------- Season updates (newest FIRST, at the top) ---------- */
  updates: [
    {
      date: "",         // e.g. "2026-10-20"
      title: "Preseason: Building a Swerve Bot",
      text: "Before the 2027 game is revealed, we’re building a practice robot on SDS MK5n swerve modules so our rookies learn the build, wiring, and code.",
      photo: "images/photos/cad.jpg",
      photoAlt: "A team member working in CAD software at a desktop computer",
      draft: true,
    },
  ],

  /* ---------- Sponsors (logos go in /images/sponsors) ---------- */
  sponsors: [
    { name: "Big Idea Designs LLC",         logo: "", url: "" },
    { name: "Scada and Control Systems LLC", logo: "", url: "" },
  ],

  /* ---------- Roster: FIRST NAMES ONLY ---------- */
  // headshot: a 4:5 photo in images/headshots, e.g. "images/headshots/reif.jpg"
  // Until this list has names, the Team page shows 12 headshot placeholders.
  roster: [
    // { name: "Reif", role: "Founder", headshot: "" },
  ],

  /* ---------- Mentors (shown on the Team page once added) ---------- */
  mentors: [
    // { name: "Ms. Example", role: "Lead Mentor" },
  ],

  /* ---------- Outreach ---------- */
  // status: "Done", "Planned", or "" (blank hides it)
  // photos: up to 4, first one is shown large
  outreach: [
    {
      title: "Volunteering at the IRONMAN World Championship",
      place: "Kona",
      when: "October 2026",
      status: "Done",
      text: "We helped run ice and aid stations for athletes on the course in Kona.",
      draft: true,
      photos: [
        { src: "images/photos/ironman-sunset.jpg", alt: "Four team members in yellow volunteer shirts at an ice station at sunset" },
        { src: "images/photos/ironman-ice.jpg", alt: "Three team members smiling next to a bin of ice" },
        { src: "images/photos/ironman-smiles.jpg", alt: "Two team members laughing at the aid station" },
        { src: "images/photos/ironman-night.jpg", alt: "Team members posing with an ice pile after dark" },
      ],
    },
    {
      title: "Robot Demo at the Keiki Museum",
      place: "Keiki Museum",
      when: "About February 2027",
      status: "Planned",
      text: "We’re bringing a robot to the Keiki Museum so keiki can see it up close.",
      draft: true,
      photos: [],
    },
    {
      title: "Lemonade-Stand Fundraiser",
      place: "",
      when: "",
      status: "",
      text: "A lemonade stand run by the team to help fund our season.",
      draft: true,
      photos: [],
    },
  ],
};
