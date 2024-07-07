const mcmThoughts = new Proxy({"src":"/_astro/mcm-thoughts.CcwpAYnU.jpg","width":1200,"height":650,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/@media/webprojects/MCM/mcmeddon.com/src/images/mcm-thoughts.jpg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("C:/@media/webprojects/MCM/mcmeddon.com/src/images/mcm-thoughts.jpg");
							return target[name];
						}
					});

export { mcmThoughts as default };
