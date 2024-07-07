import { c as createComponent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from './astro/server_B43g0whN.mjs';
import 'kleur/colors';
import { $ as $$Mapz } from './Mapz_CYhcsDhk.mjs';

const html = "<h2 id=\"this-is-akonlyx\">This is Akonlyx,</h2>\n<p>a big 16km² Adventure Skyblock World. A diverse Minecraft Landscape for survival, creative, coop, and server adventures made by McMeddon.</p>\n<p>Adventure, explore, survive or create, at the most beautiful places in Minecraft and explore all the unique places and structures around the world.</p>\n<p>Loot ships, balloons, and conquer dungeons. Build a house on Volcanos, or within huge mountains or survive along the rivers and the woods. Find custom caves, mineshafts, coral reefs, advanced biomes, supporter villages, and more.</p>\n<hr>";

				const frontmatter = {"layout":"../../../layouts/Mapz.astro","title":"Akonlyx","date":"2024-01-01 00:00","cover":"../pages/map/2023/gelazkor/1.jpg","coverRelative":"/2023/gelazkor/1b.jpg","alt":"post picture","video":null,"dynmap":null,"bluemap":"https://mcmeddon.github.io/zekotorm/#20240514_zekotorm:838:0:768:656:2.35:0.67:0:0:perspective","images":["../../src/pages/map/akonlyx/1.png","../../src/pages/map/akonlyx/e.jpg","../../src/pages/map/akonlyx/f.jpg","../../src/pages/map/akonlyx/2.png","../../src/pages/map/akonlyx/3.jpg","../../src/pages/map/akonlyx/12.jpg"],"description":"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et","draft":false,"category":"Map 2023","downloadlink":null,"pmcpage":"https://www.planetminecraft.com/project/akonlyx/","patreonpage":"https://www.patreon.com/posts/akonlyx-4k-77880423"};
				const file = "C:/@media/webprojects/MCM/mcmeddon.com/src/pages/map/akonlyx/index.md";
				const url = "/map/akonlyx";
				function rawContent() {
					return "\r\n## This is Akonlyx,\r\n\r\na big 16km² Adventure Skyblock World. A diverse Minecraft Landscape for survival, creative, coop, and server adventures made by McMeddon.\r\n\r\nAdventure, explore, survive or create, at the most beautiful places in Minecraft and explore all the unique places and structures around the world.\r\n\r\nLoot ships, balloons, and conquer dungeons. Build a house on Volcanos, or within huge mountains or survive along the rivers and the woods. Find custom caves, mineshafts, coral reefs, advanced biomes, supporter villages, and more.\r\n\r\n---------------------\r\n\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"this-is-akonlyx","text":"This is Akonlyx,"}];
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
