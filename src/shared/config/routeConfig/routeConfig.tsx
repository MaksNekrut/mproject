import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {NotFoundPage} from "pages/NotFoundPage";

export enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
	NOT_FOUND = "not found"
}

export const RoutrePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "/",
	[AppRoutes.ABOUT]: "/about",
	[AppRoutes.NOT_FOUND]: "*"
};

export const routeConfig: Record<AppRoutes,RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutrePath[AppRoutes.MAIN],
		element: <MainPage />
	},
	[AppRoutes.ABOUT]: {
		path: RoutrePath[AppRoutes.ABOUT],
		element: <AboutPage  />
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutrePath[AppRoutes.NOT_FOUND],
		element: <NotFoundPage  />
	}
};