import React from 'react';
import { memo, FC } from "react";
import { Route, Routes } from "react-router-dom"
import { Layout } from "../components/templates/Layout";

import { RoutesSetting } from "./RoutesSetting";

export const Router: FC = memo(() => {
  return (
    <Routes>
      {RoutesSetting.map((route) => (
        <Route key={route.path} path={route.path}
          element={
            <Layout>{route.children}</Layout>
          }
        />
      ))}
    </Routes>
  )
})