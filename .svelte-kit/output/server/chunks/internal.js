import { c as create_ssr_component, a as setContext, v as validate_component, m as missing_component } from "./ssr.js";
let base = "";
let assets = base;
const initial = { base, assets };
function reset() {
  base = initial.base;
  assets = initial.assets;
}
function set_assets(path) {
  assets = initial.assets = path;
}
let public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function afterUpdate() {
}
function set_building() {
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      stores.page.set(page);
    }
    $$rendered = `  ${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`} ${``}`;
  } while (!$$settled);
  return $$rendered;
});
const options = {
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  track_server_fetches: false,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8" />\n\n    <!-- Favicons -->\n    <link rel="icon" href="' + assets2 + '/favicon.ico" />\n    <link\n      rel="apple-touch-icon"\n      sizes="180x180"\n      href="' + assets2 + '/apple-touch-icon.png"\n    />\n    <link\n      rel="icon"\n      type="image/png"\n      sizes="32x32"\n      href="' + assets2 + '/favicon-32x32.png"\n    />\n    <link\n      rel="icon"\n      type="image/png"\n      sizes="16x16"\n      href="' + assets2 + '/favicon-16x16.png"\n    />\n    <link rel="manifest" href="' + assets2 + '/site.webmanifest" />\n    <link\n      rel="mask-icon"\n      href="' + assets2 + '/safari-pinned-tab.svg"\n      color="#2f65e5"\n    />\n    <meta name="msapplication-TileColor" content="#ffffff" />\n    <meta name="theme-color" content="#ffffff" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n\n    <!-- Google Fonts -->\n    <link rel="preconnect" href="https://fonts.googleapis.com" />\n    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n    <link\n      href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"\n      rel="stylesheet"\n    />\n    ' + head + '\n\n    <script type="text/javascript">\n      var _iub = _iub || [];\n      _iub.csConfiguration = {\n        askConsentAtCookiePolicyUpdate: true,\n        cookiePolicyInOtherWindow: true,\n        countryDetection: true,\n        enableFadp: true,\n        enableLgpd: true,\n        enableTcf: true,\n        enableUspr: true,\n        floatingPreferencesButtonCaptionColor: "#4D4D4D",\n        floatingPreferencesButtonColor: "#FFFFFF",\n        floatingPreferencesButtonDisplay: "bottom-left",\n        googleAdditionalConsentMode: true,\n        lang: "en",\n        lgpdAppliesGlobally: false,\n        perPurposeConsent: true,\n        siteId: 1934321,\n        usPreferencesWidgetDisplay: "inline-left",\n        cookiePolicyId: 89796861,\n        banner: {\n          acceptButtonCaptionColor: "#FFFFFF",\n          acceptButtonColor: "#0A513C",\n          acceptButtonDisplay: true,\n          backgroundColor: "#F5FEFB",\n          brandBackgroundColor: "#F5FEFB",\n          brandTextColor: "#262626",\n          closeButtonRejects: true,\n          customizeButtonCaptionColor: "#0A513C",\n          customizeButtonColor: "#DDEDE8",\n          customizeButtonDisplay: true,\n          explicitWithdrawal: true,\n          listPurposes: true,\n          logo: "https://uploads-ssl.webflow.com/6548b5c60bff4c77b477bdcc/6548cb395acf29c03ecc75b5_Logo-Only.svg",\n          ownerName: "Dove Design Ltd",\n          position: "float-bottom-center",\n          rejectButtonCaptionColor: "#FFFFFF",\n          rejectButtonColor: "#0A513C",\n          rejectButtonDisplay: true,\n          showPurposesToggles: true,\n          showTotalNumberOfProviders: true,\n          theme: "mint-neutral",\n          textColor: "#262626",\n        },\n      };\n    <\/script>\n    <script\n      type="text/javascript"\n      src="//cs.iubenda.com/sync/1934321.js"\n    ><\/script>\n    <script\n      type="text/javascript"\n      src="//cdn.iubenda.com/cs/tcf/stub-v2.js"\n    ><\/script>\n    <script\n      type="text/javascript"\n      src="//cdn.iubenda.com/cs/tcf/safe-tcf-v2.js"\n    ><\/script>\n    <script\n      type="text/javascript"\n      src="//cdn.iubenda.com/cs/gpp/stub.js"\n    ><\/script>\n    <script\n      type="text/javascript"\n      src="//cdn.iubenda.com/cs/iubenda_cs.js"\n      charset="UTF-8"\n      async\n    ><\/script>\n  </head>\n\n  <body data-sveltekit-preload-data="hover">\n    <div style="display: contents">' + body + "</div>\n  </body>\n</html>\n",
    error: ({ status, message }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "4y3zne"
};
function get_hooks() {
  return {};
}
export {
  assets as a,
  base as b,
  set_public_env as c,
  set_assets as d,
  set_building as e,
  get_hooks as g,
  options as o,
  public_env as p,
  reset as r,
  set_private_env as s
};
