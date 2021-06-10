import { Redirect } from "react-router";
import { ViewPDF } from "../components/common/ViewPDF";
import { Activities } from "../pages/activities/Activities";
import { Members } from "../pages/members/Members";
import { PresentationsAcademic } from "../pages/production/PresentationsAcademic";
import { Production } from "../pages/production/Production";
import { ReferedPublications } from "../pages/production/ReferedPublications";
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
    path: "/refered-publications",
    exact: true,
    component: ReferedPublications,
  },
  {
    path: "/presentations-academic",
    exact: true,
    component: PresentationsAcademic,
  },
  {
    path: "/view-pdf/:pdfpath",
    exact: true,
    component: ViewPDF,
  },
  {
    component: () => <Redirect to="/project" />,
  },
];
