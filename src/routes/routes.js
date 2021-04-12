import { Redirect } from "react-router";
import { Activities } from "../pages/activities/Activities";
import { Members } from "../pages/members/Members";
import { Production } from "../pages/production/Production";
import { TheProject } from "../pages/theProject/TheProject";
import { WorkShop } from "../pages/workShop/WorkShop";

export const routes = [
  {
    path: "/project",
    exact: true,
    component: TheProject,
  },
  {
    path: "/members",
    exact: true,
    component: Members,
  },
  {
    path: "/activities",
    exact: true,
    component: Activities,
  },
  {
    path: "/production",
    exact: true,
    component: Production,
  },
  {
    path: "/work-shop",
    exact: true,
    component: WorkShop,
  },
  {
    component: () => <Redirect to="/project" />,
  },
];
