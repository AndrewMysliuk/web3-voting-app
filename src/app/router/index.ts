import React from "react"
import { MainPage } from "@/pages"

export interface IRoute {
  path: string
  element: React.ComponentType
}

export enum RouteNames {
  MAIN = "/",
}

export const publicRoutes: IRoute[] = [
  {
    path: RouteNames.MAIN,
    element: MainPage,
  },
]
