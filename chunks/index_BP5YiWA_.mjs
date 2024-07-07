import { c as createComponent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from './astro/server_B43g0whN.mjs';
import 'kleur/colors';
import { $ as $$Mapz } from './Mapz_CYhcsDhk.mjs';

const html = "<p>Welcome to Jarmusto,\r\na amazing 36km² custom Minecraft map created by McMeddon. This world is the expandsion of Ikalyx. Surrounding it with a huge crest island and a gigantic mountain half ring. Featuring dozens of islands, badlands, volcanos and more.</p>\n<p>Embark on thrilling adventures by plundering forests and balloons, battling through deserts, or constructing your dream home on cliffs or mountains. Discover custom thriving diverse island to explore.</p>\n<hr>";

				const frontmatter = {"layout":"../../../layouts/Mapz.astro","title":"Jarmusto","date":"2024-01-01 00:00","cover":"../pages/map/jarmusto/world.jpg","coverRelative":"/jarmusto/d.jpg","alt":"post picture","video":null,"dynmap":null,"bluemap":"https://mcmeddon.github.io/jarmusto/","images":["../../src/pages/map/jarmusto/b.jpg","../../src/pages/map/jarmusto/d.jpg","../../src/pages/map/jarmusto/e.jpg","../../src/pages/map/jarmusto/h.jpg","../../src/pages/map/jarmusto/k.jpg","../../src/pages/map/jarmusto/world.jpg","../../src/pages/map/jarmusto/Jarmusto-thumbnail.jpg"],"description":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et","draft":false,"category":"Map 2023","downloadlink":null,"pmcpage":"https://www.planetminecraft.com/project/jarmusto/","patreonpage":"https://www.patreon.com/posts/jarmusto-6k-2k-106914889"};
				const file = "C:/@media/webprojects/MCM/mcmeddon.com/src/pages/map/jarmusto/index.md";
				const url = "/map/jarmusto";
				function rawContent() {
					return "\r\nWelcome to Jarmusto,\r\na amazing 36km² custom Minecraft map created by McMeddon. This world is the expandsion of Ikalyx. Surrounding it with a huge crest island and a gigantic mountain half ring. Featuring dozens of islands, badlands, volcanos and more.\r\n\r\nEmbark on thrilling adventures by plundering forests and balloons, battling through deserts, or constructing your dream home on cliffs or mountains. Discover custom thriving diverse island to explore.\r\n\r\n-----\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
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
