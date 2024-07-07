const model2 = new Proxy({"src":"/_astro/model2.BgyVDA0d.png","width":2047,"height":363,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/@media/webprojects/MCM/mcmeddon.com/src/images/model2.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("C:/@media/webprojects/MCM/mcmeddon.com/src/images/model2.png");
							return target[name];
						}
					});

export { model2 as default };
