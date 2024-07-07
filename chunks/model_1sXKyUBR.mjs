const model = new Proxy({"src":"/_astro/model.C89rbJCJ.png","width":2047,"height":363,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/@media/webprojects/MCM/mcmeddon.com/src/images/model.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("C:/@media/webprojects/MCM/mcmeddon.com/src/images/model.png");
							return target[name];
						}
					});

export { model as default };
