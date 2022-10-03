import { FC, memo } from "react";
import {Route, Routes} from "react-router-dom"
import { HeaderLayout } from "../components/templates/HeaderLayout";

import { RoutesSetting } from "./RoutesSetting";

export const Router: FC = memo(() => {
  return (
    <Routes>
      {RoutesSetting.map((route) => (
        <Route key={route.path} path={route.path}
          element={
            <HeaderLayout>{route.children}</HeaderLayout>
          }
        />
      ))}
    </Routes>
  )
})