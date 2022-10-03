import { Answer } from "../components/pages/Answer";
import { NotFound404 } from "../components/pages/NotFount404";
import { QAList } from "../components/pages/QAList";
import { Question } from "../components/pages/Question";
import { UserProfile } from "../components/pages/UserProfile";

export const RoutesSetting = [
  {
    path: "/",
    children: <QAList/>
  },
  {
    path: "/question",
    children: <Question/>
  },
  {
    path: "/answer",
    children: <Answer/>
  },
  {
    path: "/user",
    children: <UserProfile/>
  },
  {
    path: "/*",
    children: <NotFound404/>
  }
]