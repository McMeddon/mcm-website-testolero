const _2 = new Proxy({"src":"/_astro/2.PEg9eiry.jpg","width":1920,"height":1027,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/@media/webprojects/MCM/mcmeddon.com/src/pages/map/2023/smpS4/2.jpg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("C:/@media/webprojects/MCM/mcmeddon.com/src/pages/map/2023/smpS4/2.jpg");
							return target[name];
						}
					});

export { _2 as default };
