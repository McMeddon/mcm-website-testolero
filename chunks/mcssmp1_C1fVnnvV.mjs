const mcssmp1 = new Proxy({"src":"/_astro/mcssmp1.CDmzeu_C.png","width":2047,"height":443,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/@media/webprojects/MCM/mcmeddon.com/src/images/mcssmp1.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("C:/@media/webprojects/MCM/mcmeddon.com/src/images/mcssmp1.png");
							return target[name];
						}
					});

export { mcssmp1 as default };
