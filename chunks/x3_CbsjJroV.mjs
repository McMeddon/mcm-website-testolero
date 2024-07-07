const x3 = new Proxy({"src":"/_astro/x3.D-PG6kWH.jpg","width":1920,"height":1080,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/@media/webprojects/MCM/mcmeddon.com/src/pages/map/2024/wokokor/x3.jpg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("C:/@media/webprojects/MCM/mcmeddon.com/src/pages/map/2024/wokokor/x3.jpg");
							return target[name];
						}
					});

export { x3 as default };
