import { NextPage } from "next";
import { Fragment, ReactFragment, ReactNode } from "react";

export type  Page<P={}> = NextPage<P> & {
  Layout : ReactNode
}