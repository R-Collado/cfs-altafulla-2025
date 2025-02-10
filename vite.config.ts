// vite.config.ts

/// <reference types="vitest" />
import type { ConfigEnv, PluginOption } from 'vite';

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import { compression } from 'vite-plugin-compression2';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv) => {
	const isProdBuild = command === 'build' && mode === 'production';

	return defineConfig({
		plugins: [
			i18nHotReload(),
			tsconfigPaths(), // Custom plugin to load markdown files
			react({ devTarget: 'es2022' }),
			svgr(),
			// TODO review in prod stage
			// checker({
			// 	typescript: true, // use TypeScript check
			// 	eslint: {
			// 		lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
			// 	},
			// 	// stylelint: {
			// 	// 	lintCommand: 'stylelint ./src/**/*.{css,scss}',
			// 	// },
			// 	terminal: true, // report errors in the terminal
			// 	overlay: {
			// 		initialIsOpen: false, // show errors overlay after starting Vite
			// 	},
			// }),
			// compression({
			// 	algorithm: 'gzip',
			// 	exclude: [/\.(br)$/, /\.(gz)$/],
			// }),
			// compression({
			// 	algorithm: 'brotliCompress',
			// 	exclude: [/\.(br)$/, /\.(gz)$/],
			// }),
		],
		define: {
			__APP_VERSION__: JSON.stringify(process.env.npm_package_version),
		},
		/* Server */
		server: {
			watch: {
				usePolling: true, // Remove this if you have bad performance.
			},
			open: true, // Open the browser when the server starts
			strictPort: true, // Close the server if the port is already in use
			port: 4500, // Port 4500 is mandatory for auth redirection
		},

		/* Server Build */
		preview: {
			open: true, // Open the browser when the server starts
			host: true, // needed for the Docker Container port mapping to work
			strictPort: true, // Close the server if the port is already in use
			port: 4500, // Port 4500 is mandatory for auth redirection
		},

		/* Environment */
		envDir: './env/', // The directory to load environment variables from (Default: project root)
		// envPrefix: 'VITE_', // Prefix at the beginning of environment variables (Cannot be empty or "", Default 'VITE_')

		css: {
			modules: {
				generateScopedName: isProdBuild ? undefined : '[local]__[path]___[hash:base64:2]', // The naming convention for CSS classes in modules
				localsConvention: 'camelCase', // The naming convention for CSS classes in modules (example: className:{styles["left-column"]} will be converted to className:{styles.leftColumn})
			},
			devSourcemap: !isProdBuild, // Enable source maps for CSS in development
		},

		build: {
			outDir: 'dist', // The output directory
			sourcemap: !isProdBuild, // Output source maps for build
			target: 'modules', // Browser compatibility target for the final bundle ('modules' is es2020|edge88|firefox78| chrome87|safari14)
			minify: true, // Best minification with terser
			cssMinify: true,
			cssCodeSplit: true,
			modulePreload: true,
			commonjsOptions: {
				transformMixedEsModules: true,
			},
			rollupOptions: {
				output: {
					manualChunks: {
						'vendor-react': ['react', 'react/jsx-runtime', 'react-dom'],
					},
					chunkFileNames: 'assets/js/[name]-[hash].js',
					entryFileNames: 'assets/js/[name]-[hash].js',
					assetFileNames: ({ name }) => {
						if (/\.(gif|jpe?g|png|svg|webp)$/.test(name ?? '')) {
							return 'assets/images/[name]-[hash][extname]';
						}

						if (/\.css$/.test(name ?? '')) {
							return 'assets/css/[name]-[hash][extname]';
						}

						// ref: https://rollupjs.org/guide/en/#outputassetfilenames
						return 'assets/[name]-[hash][extname]';
					},
				},
			},
		},

		/* Advanced Options */
		clearScreen: true, // Clear the terminal screen when Vite dev server starts (Default: true)
	});
};

/* Custom Plugins */
export function i18nHotReload(): PluginOption {
	return {
		name: 'i18n-hot-reload',
		handleHotUpdate({ file, server }) {
			if (file.includes('translations') && file.endsWith('.json')) {
				console.log('[vite-plugin-i18n-hot-reload] Locale file updated');
				server.ws.send({
					type: 'custom',
					event: 'locales-update',
				});
			}
		},
	};
}
