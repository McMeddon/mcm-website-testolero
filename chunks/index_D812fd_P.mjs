import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, f as addAttribute } from './astro/server_B43g0whN.mjs';
import 'kleur/colors';
import { a as $$Layout } from './Layout_C65wMquY.mjs';
/* empty css                         */

const $$Astro = createAstro("https://mcmeddon.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./akonlyx/index.md": () => import('./index_BIVfZ9fr.mjs'),"./edoximos/index.md": () => import('./index_PdqdvTdf.mjs'),"./jarmusto/index.md": () => import('./index_BP5YiWA_.mjs'),"./matabergon/index.md": () => import('./index_CgcpCCM0.mjs')}), () => "../map/**/*.md");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "map Index", "data-astro-cid-6ed6q7wg": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<mapindexlayout data-astro-cid-6ed6q7wg> <section class="container about" aria-label="About the Worlds" data-astro-cid-6ed6q7wg> <h1 data-astro-cid-6ed6q7wg> map Overview</h1> <h2 class="title" data-astro-cid-6ed6q7wg>About the Worlds</h2> <p class="text" data-astro-cid-6ed6q7wg>These are diverse Minecraft Landscape for survival, creative, coop, and server adventures made by McMeddon.
<br data-astro-cid-6ed6q7wg><br data-astro-cid-6ed6q7wg>Adventure, explore, survive or create, at the most beautiful places in Minecraft and explore all the unique places and structures around the world.
<br data-astro-cid-6ed6q7wg><br data-astro-cid-6ed6q7wg>Loot ships, balloons, and conquer dungeons. Build a house on Volcanos, or within huge mountains or survive along the rivers and the woods. Find custom caves, mineshafts, coral reefs, advanced biomes, supporter villages, and more.
</p> </section> <!-- //display all map in a list of the folder /map/  --> <!-- {allPosts.map((post) => <li class="posttitles"> <a  href={post.url}> {post.frontmatter.title}</a> </li>)} --> <!-- ----------------------------------------------------------- --> <!-- Working------------------------ -->
const allPosts = await Astro.glob('../map/2023/**/*.md');
<!-- ----------------------------------------------------------- --> <ul data-astro-cid-6ed6q7wg> ${allPosts.map((post) => renderTemplate`<li class="posttitles" data-astro-cid-6ed6q7wg> <a${addAttribute(post.url, "href")} data-astro-cid-6ed6q7wg> ${post.frontmatter.title}  </a> </li>`)} </ul> <!-- ----------------------------------------------------------- --> <!-- <ul>
				{allPosts.map((post) => <li class="posttitles"><a href={post.url}><img src={post.frontmatter.cover} alt={post.frontmatter.imagealt}></a></li>)}
			</ul>
			 --> <map data-astro-cid-6ed6q7wg> <ul data-astro-cid-6ed6q7wg></ul> </map> </mapindexlayout> ` })} `;
}, "C:/@media/webprojects/MCM/mcmeddon.com/src/pages/map/index.astro", void 0);

const $$file = "C:/@media/webprojects/MCM/mcmeddon.com/src/pages/map/index.astro";
const $$url = "/map";

export { $$Index as default, $$file as file, $$url as url };
