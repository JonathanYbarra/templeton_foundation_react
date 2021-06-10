export const navbarItems = [
  {
    name: "The project",
    pathToLink: "/project",
  },
  {
    name: "Members",
    pathToLink: "/members",
  },
  {
    name: "Activities",
    pathToLink: "/activities",
  },
  {
    name: "Production",
    items: [
      { to: "/refered-publications", name: "Refereed publications" },
      { to: "/presentations-academic", name: "Presentations to academic events" },
    ],
  },
];
