import { c as createComponent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from './astro/server_B43g0whN.mjs';
import 'kleur/colors';
import { $ as $$Mapz } from './Mapz_CYhcsDhk.mjs';

const html = "<h2 id=\"welcome-to-edoximos\">Welcome to Edoximos</h2>\n<p>a stunning 64km² Minecraft custom map created by McMeddon. This world features a three continental huge environment, with plateaus, multiple mountain regiones, seperating the world into multiple areas of adventure and opportunities, with a variarity of new mountains, new plateaus, terrains, cliffs, rivers, and biome types..</p>\n<hr>";

				const frontmatter = {"layout":"../../../layouts/Mapz.astro","title":"Edoximos","date":"2024-01-01 00:00","cover":"../pages/map/edoximos/c.jpg","coverRelative":"/edoximos/c.jpg","alt":"post picture","video":null,"dynmap":null,"bluemap":"https://mcmeddon.github.io/edoximos/","images":["../../src/pages/map/edoximos/c.jpg","../../src/pages/map/edoximos/L.jpg","../../src/pages/map/edoximos/thumb.jpg","../../src/pages/map/edoximos/x2.jpg","../../src/pages/map/edoximos/x15.jpg","../../src/pages/map/edoximos/x18.jpg"],"description":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et","draft":false,"category":"Map 2023","downloadlink":null,"pmcpage":"https://www.planetminecraft.com/project/edoximos/","patreonpage":"https://www.patreon.com/posts/edoximos-8k-and-105483257"};
				const file = "C:/@media/webprojects/MCM/mcmeddon.com/src/pages/map/edoximos/index.md";
				const url = "/map/edoximos";
				function rawContent() {
					return "## Welcome to Edoximos\r\n\r\na stunning 64km² Minecraft custom map created by McMeddon. This world features a three continental huge environment, with plateaus, multiple mountain regiones, seperating the world into multiple areas of adventure and opportunities, with a variarity of new mountains, new plateaus, terrains, cliffs, rivers, and biome types..\r\n\r\n-----\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"welcome-to-edoximos","text":"Welcome to Edoximos"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$Mapz, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
