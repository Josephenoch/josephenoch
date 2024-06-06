import { AppProps } from "next/app";
import { Component } from "react";
import { Page } from "../types/page";

export interface INewAppProps extends AppProps{
    Component: typeof Component & Page
}