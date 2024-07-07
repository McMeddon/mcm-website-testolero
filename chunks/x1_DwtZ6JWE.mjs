const x1 = new Proxy({"src":"/_astro/x1.CfzJE9xa.jpg","width":1920,"height":1080,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/@media/webprojects/MCM/mcmeddon.com/src/pages/map/2024/vurotorm/x1.jpg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("C:/@media/webprojects/MCM/mcmeddon.com/src/pages/map/2024/vurotorm/x1.jpg");
							return target[name];
						}
					});

export { x1 as default };
