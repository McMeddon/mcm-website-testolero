const favicon32x32 = new Proxy({"src":"/_astro/favicon-32x32.BkG8wt9a.png","width":32,"height":32,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/@media/webprojects/MCM/mcmeddon.com/public/favicon/favicon-32x32.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("C:/@media/webprojects/MCM/mcmeddon.com/public/favicon/favicon-32x32.png");
							return target[name];
						}
					});

export { favicon32x32 as default };
