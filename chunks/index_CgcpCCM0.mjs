import { c as createComponent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from './astro/server_B43g0whN.mjs';
import 'kleur/colors';
import { $ as $$Mapz } from './Mapz_CYhcsDhk.mjs';

const html = "<h2 id=\"welcome-to-matabergon\">Welcome to Matabergon,</h2>\n<p>an astounding 25km² custom Minecraft map created by McMeddon. This world combines newly created Canyons, Mesas and freshly created Mega Oak forests into a dynamic explorable world.</p>\n<p>Embark on thrilling adventures by plundering forests and balloons, battling through deserts, or constructing your dream home on cliffs or mountains. Discover custom thriving diverse island to explore.</p>\n<hr>";

				const frontmatter = {"layout":"../../../layouts/Mapz.astro","title":"Matabergon","date":"2024-01-01 00:00","cover":"../pages/map/matabergon/o.jpg","coverRelative":"/matabergon/Matabergonthumb1.jpg","alt":"post picture","video":null,"dynmap":null,"bluemap":"https://mcmeddon.github.io/matabergon","images":["../../src/pages/map/matabergon/j.jpg","../../src/pages/map/matabergon/k.jpg","../../src/pages/map/matabergon/l.jpg","../../src/pages/map/matabergon/m.jpg","../../src/pages/map/matabergon/n.jpg","../../src/pages/map/matabergon/o.jpg"],"description":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et","draft":false,"category":"Map 2023","downloadlink":null,"pmcpage":"https://www.planetminecraft.com/project/matabergon/","patreonpage":"https://www.patreon.com/mcmeddon/"};
				const file = "C:/@media/webprojects/MCM/mcmeddon.com/src/pages/map/matabergon/index.md";
				const url = "/map/matabergon";
				function rawContent() {
					return "\r\n## Welcome to Matabergon,\r\nan astounding 25km² custom Minecraft map created by McMeddon. This world combines newly created Canyons, Mesas and freshly created Mega Oak forests into a dynamic explorable world.\r\n\r\nEmbark on thrilling adventures by plundering forests and balloons, battling through deserts, or constructing your dream home on cliffs or mountains. Discover custom thriving diverse island to explore.\r\n\r\n---------------------\r\n\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"welcome-to-matabergon","text":"Welcome to Matabergon,"}];
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
