
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/about" | "/lauds" | "/matins" | "/preparation" | "/purchase" | "/vespers";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/about": Record<string, never>;
			"/lauds": Record<string, never>;
			"/matins": Record<string, never>;
			"/preparation": Record<string, never>;
			"/purchase": Record<string, never>;
			"/vespers": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/about/" | "/lauds" | "/lauds/" | "/matins" | "/matins/" | "/preparation" | "/preparation/" | "/purchase" | "/purchase/" | "/vespers" | "/vespers/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/caligraphy/.DS_Store" | "/caligraphy/EBGaramond-Bold.woff2" | "/caligraphy/EBGaramond-BoldItalic.woff2" | "/caligraphy/EBGaramond-ExtraBold.woff2" | "/caligraphy/EBGaramond-ExtraBoldItalic.woff2" | "/caligraphy/EBGaramond-Italic-VariableFont_wght.woff2" | "/caligraphy/EBGaramond-Italic.woff2" | "/caligraphy/EBGaramond-Medium.woff2" | "/caligraphy/EBGaramond-MediumItalic.woff2" | "/caligraphy/EBGaramond-Regular.woff2" | "/caligraphy/EBGaramond-SemiBold.woff2" | "/caligraphy/EBGaramond-SemiBoldItalic.woff2" | "/caligraphy/EBGaramond-VariableFont_wght.woff2" | "/caligraphy/LasanceInitials.woff2" | "/caligraphy/LibreBaskerville-Bold.woff2" | "/caligraphy/LibreBaskerville-Italic.woff2" | "/caligraphy/LibreBaskerville-Regular.woff2" | "/visuals/CS_LOGO_Full_black.png" | "/visuals/CS_LOGO_Full_white.png" | "/visuals/CS_LOGO_Full_white.tif" | "/visuals/Entombment.jpg" | "/visuals/ODcover.png" | "/visuals/README.txt" | "/visuals/Reqiuemliturgy.jpg" | "/visuals/alphaomega.jpeg" | "/visuals/animeinpurgatorio.jpeg" | "/visuals/ave.jpeg" | "/visuals/burial.jpeg" | "/visuals/churchburial.jpg" | "/visuals/crucifixion.png" | "/visuals/fleuron11.png" | "/visuals/fleuron12.png" | "/visuals/fleuron15.png" | "/visuals/fleuron16.png" | "/visuals/fleuron9.png" | "/visuals/funeral.jpeg" | "/visuals/lamb.png" | "/visuals/lys.png" | "/visuals/miseremini.png" | "/visuals/nunsinchoir.jpg" | "/visuals/oratefratres.jpg" | "/visuals/pax.png" | "/visuals/postrequiemburial.jpg" | "/visuals/requiem.jpeg" | "/visuals/skull.png" | "/visuals/souls.jpeg" | "/visuals/suffragesdead.jpeg" | "/visuals/vespers.jpeg" | string & {};
	}
}