import HtmlWebpackPlugin from "html-webpack-plugin";
import { WebpackPluginInstance, ProgressPlugin, DefinePlugin, HotModuleReplacementPlugin } from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildPlugins({paths, isDev}: BuildOptions): WebpackPluginInstance[] {

	return [
		new HtmlWebpackPlugin({
			template: paths.html,
		}),
		new ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash:5].css",
			chunkFilename: "css/[name].[contenthash:5].css"
		}),
		new DefinePlugin({
			__IS__DEV__: JSON.stringify(isDev)
		}),
		new HotModuleReplacementPlugin(),
	];
}