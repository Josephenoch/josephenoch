import { AppProps } from "next/app";
import { Component } from "react";
import { Page } from "../Types/page";

export interface INewAppProps extends AppProps{
    Component: typeof Component & Page
}