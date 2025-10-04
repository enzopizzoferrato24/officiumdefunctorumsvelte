export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","caligraphy/.DS_Store","caligraphy/EBGaramond-Bold.woff2","caligraphy/EBGaramond-BoldItalic.woff2","caligraphy/EBGaramond-ExtraBold.woff2","caligraphy/EBGaramond-ExtraBoldItalic.woff2","caligraphy/EBGaramond-Italic-VariableFont_wght.woff2","caligraphy/EBGaramond-Italic.woff2","caligraphy/EBGaramond-Medium.woff2","caligraphy/EBGaramond-MediumItalic.woff2","caligraphy/EBGaramond-Regular.woff2","caligraphy/EBGaramond-SemiBold.woff2","caligraphy/EBGaramond-SemiBoldItalic.woff2","caligraphy/EBGaramond-VariableFont_wght.woff2","caligraphy/LasanceInitials.woff2","caligraphy/LibreBaskerville-Bold.woff2","caligraphy/LibreBaskerville-Italic.woff2","caligraphy/LibreBaskerville-Regular.woff2","visuals/CS_LOGO_Full_black.png","visuals/CS_LOGO_Full_white.png","visuals/CS_LOGO_Full_white.tif","visuals/Entombment.jpg","visuals/ODcover.png","visuals/README.txt","visuals/Reqiuemliturgy.jpg","visuals/alphaomega.jpeg","visuals/animeinpurgatorio.jpeg","visuals/ave.jpeg","visuals/burial.jpeg","visuals/churchburial.jpg","visuals/crucifixion.png","visuals/fleuron11.png","visuals/fleuron12.png","visuals/fleuron15.png","visuals/fleuron16.png","visuals/fleuron9.png","visuals/funeral.jpeg","visuals/lamb.png","visuals/lys.png","visuals/miseremini.png","visuals/nunsinchoir.jpg","visuals/oratefratres.jpg","visuals/pax.png","visuals/postrequiemburial.jpg","visuals/requiem.jpeg","visuals/skull.png","visuals/souls.jpeg","visuals/suffragesdead.jpeg","visuals/vespers.jpeg"]),
	mimeTypes: {".woff2":"font/woff2",".png":"image/png",".tif":"image/tiff",".jpg":"image/jpeg",".txt":"text/plain",".jpeg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.BgjJhgnv.js",app:"_app/immutable/entry/app.CATE6an3.js",imports:["_app/immutable/entry/start.BgjJhgnv.js","_app/immutable/chunks/CGaY6NpR.js","_app/immutable/chunks/CX4xIAx8.js","_app/immutable/chunks/DPan8l9y.js","_app/immutable/chunks/DNOXIF8d.js","_app/immutable/entry/app.CATE6an3.js","_app/immutable/chunks/DPan8l9y.js","_app/immutable/chunks/DNOXIF8d.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/CX4xIAx8.js","_app/immutable/chunks/CsyNhoaJ.js","_app/immutable/chunks/CJJJG8JK.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/lauds",
				pattern: /^\/lauds\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/matins",
				pattern: /^\/matins\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/preparation",
				pattern: /^\/preparation\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/purchase",
				pattern: /^\/purchase\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/vespers",
				pattern: /^\/vespers\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
