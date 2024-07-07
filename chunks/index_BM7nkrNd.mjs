import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, f as addAttribute } from './astro/server_B43g0whN.mjs';
import 'kleur/colors';
import { $ as $$Image, a as $$Layout } from './Layout_C65wMquY.mjs';
import { $ as $$Herovideo } from './Herovideo_fJSrTFUI.mjs';
import { $ as $$Shelfitem } from './Shelfitem_Ce69YeFo.mjs';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DS14CAVm.mjs';
/* empty css                         */

const $$Astro = createAstro("https://mcmeddon.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./map/akonlyx/index.md": () => import('./index_BIVfZ9fr.mjs'),"./map/edoximos/index.md": () => import('./index_PdqdvTdf.mjs'),"./map/jarmusto/index.md": () => import('./index_BP5YiWA_.mjs'),"./map/matabergon/index.md": () => import('./index_CgcpCCM0.mjs')}), () => "../../src/pages/map/**/*.md");
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  shuffleArray(allPosts);
  const postsWithImagesv1 = await Promise.all(allPosts.map(async (post) => {
    const coverImage = post.frontmatter.coverRelative ? (await import(`/src/pages/map${post.frontmatter.coverRelative}`)).default : null;
    return {
      url: post.url,
      title: post.frontmatter?.title || null,
      coverImage: coverImage || null,
      // Store the imported image
      alt: post.frontmatter?.alt || "Post image"
    };
  }));
  Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Homepage", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Herovideo", $$Herovideo, { "src": "/videos/g7.mp4", "data-astro-cid-j7pv25f6": true })} <!---------------------------------
		<Herotext
		h1="Advanced Survival Friendly Vanilla Minecraft Landscapes"
		p="">
		</Herotext>--> <div class="spacer60" data-astro-cid-j7pv25f6></div> <div class="introbannerdiv" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "class": "introbanner", "src": import('./model_1sXKyUBR.mjs'), "height": 100, "alt": "", "loading": "eager", "decoding": "async", "data-astro-cid-j7pv25f6": true })} </div>  <!-- all featured worlds------------------------------------------------------- --> <h4 data-astro-cid-j7pv25f6>All Featured Worlds</h4> <div class="shelf" data-astro-cid-j7pv25f6> ${postsWithImagesv1.map((post) => renderTemplate`<div data-astro-cid-j7pv25f6> <a${addAttribute(post.url, "key")}${addAttribute(post.url, "href")} data-astro-cid-j7pv25f6> ${post.coverImage ? renderTemplate`${renderComponent($$result2, "Shelfitem", $$Shelfitem, { "img": post.coverImage, "Resolve": true, "the": true, "import": true, "promise": true, "url": post.url, "alt": "", "loading": "lazy", "width": "0", "height": "250", "aspectRatio": "16/9", "formats": ["avif"], "data-astro-cid-j7pv25f6": true })}
		  <p data-astro-cid-j7pv25f6>${post.title}</p>` : renderTemplate`<p data-astro-cid-j7pv25f6>oop Image not found</p> 
		  <img src="./fallbackimage" data-astro-cid-j7pv25f6>`} </a> </div>`)} </div> <!-- end --> <!--------------------- <h4>Featured Projects</h4> --> <h4 data-astro-cid-j7pv25f6>Featured Projects</h4> <div class="shelf" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Shelfitem", $$Shelfitem, { "img": import('./x3_BsPKIjUj.mjs'), "url": "./maps/akonlyx", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Shelfitem", $$Shelfitem, { "img": import('./x1_DwtZ6JWE.mjs'), "url": "./maps/akonlyx", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Shelfitem", $$Shelfitem, { "img": import('./x3_CbsjJroV.mjs'), "url": "./maps/akonlyx", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Shelfitem", $$Shelfitem, { "img": import('./a_CBLnKMAP.mjs'), "url": "./maps/akonlyx", "data-astro-cid-j7pv25f6": true })} <!-- <Shelfitem img ={import(\`../pages/maps/2023/uramaxos/1.jpg\`)}  url="./maps/2023/akonlyx"></Shelfitem> --> </div> <h4 data-astro-cid-j7pv25f6>Featured Stories</h4> <div class="shelf" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Shelfitem", $$Shelfitem, { "img": import('./x3_BsPKIjUj.mjs'), "url": "#", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` <h5 data-astro-cid-j7pv25f6>Server S6 Update</h5>` })} ${renderComponent($$result2, "Shelfitem", $$Shelfitem, { "img": import('./x1_DwtZ6JWE.mjs'), "url": "https://www.planetminecraft.com/forums/communities/mapping/mcmeddons-mapmaking-suggestion-sunday-680467/", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`<h5 data-astro-cid-j7pv25f6>Send your Ideas</h5>` })} ${renderComponent($$result2, "Shelfitem", $$Shelfitem, { "img": import('./mcm-thoughts_vHAemKxO.mjs') || null, "url": "https://www.planetminecraft.com/member/mcmeddon/wall/", "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate`<h5 data-astro-cid-j7pv25f6>Latest Thoughts</h5>` })} </div> <div class="announcements" data-astro-cid-j7pv25f6> <h4 class="" data-astro-cid-j7pv25f6>This looks important ⬇</h4> <a href="" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": import('./3_CUCS0oit.mjs'), "height": (1600), "alt": "", "loading": "eager", "decoding": "async", "style": "", "class": "shelfi", "data-astro-cid-j7pv25f6": true })}  <button class="btn btn-link" data-astro-cid-j7pv25f6>Server Updates</button> </a> </div> <br data-astro-cid-j7pv25f6> </main> ` })} `;
}, "C:/@media/webprojects/MCM/mcmeddon.com/src/pages/index.astro", void 0);

const $$file = "C:/@media/webprojects/MCM/mcmeddon.com/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
