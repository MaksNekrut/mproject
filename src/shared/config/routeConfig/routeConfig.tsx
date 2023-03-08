import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";


export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
}

export const RoutrePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "/",
	[AppRoutes.ABOUT]: "/about",
};

export const routeConfig: Record<AppRoutes,RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutrePath[AppRoutes.MAIN],
		element: <MainPage />
	},
	[AppRoutes.ABOUT]: {
		path: RoutrePath[AppRoutes.ABOUT],
		element: <AboutPage  />
	}
};