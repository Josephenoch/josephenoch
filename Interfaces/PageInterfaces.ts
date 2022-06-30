import { AppProps } from "next/app";
import { Page } from "../Types/page";

export interface NewAppProps extends AppProps{
    Component:Page
}