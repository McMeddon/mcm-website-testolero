import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, d as defineScriptVars, e as renderSlot, f as addAttribute, m as maybeRenderHead } from './astro/server_B43g0whN.mjs';
import 'kleur/colors';
import { $ as $$Image, a as $$Layout } from './Layout_C65wMquY.mjs';
/* empty css                         */
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DS14CAVm.mjs';
import { $ as $$Herovideo } from './Herovideo_fJSrTFUI.mjs';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://mcmeddon.com");
const $$Mapz = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Mapz;
  const { title, description, date, img, tags, cover, pmcpage, patreonpage, downloadlink, video, bluemap, author, dynmap } = await Astro2.props;
  const { frontmatter } = await Astro2.props;
  const dynmapUrl = frontmatter.dynmap;
  const bluemapUrl = frontmatter.bluemap;
  const images = frontmatter.images;
  const heroimage = frontmatter.cover;
  const herovideo = frontmatter.video;
  console.log(frontmatter.dynmap);
  console.log(frontmatter.bluemap);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "data-astro-cid-sy6uvqjv": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", " ", '<br data-astro-cid-sy6uvqjv> <main class="mapLayout" data-astro-cid-sy6uvqjv>  <div class="spacer60" data-astro-cid-sy6uvqjv></div> <!-- ................ --> <div class="grid" data-astro-cid-sy6uvqjv> <!-- ................ --> <div data-astro-cid-sy6uvqjv></div> <!-- ................ --> </div> <!-- ................ --> <div class="introbannerdiv" data-astro-cid-sy6uvqjv> <!--     <img class="introbanner" src="../../src/images/model2.png" alt=""> --> <a href="/" data-astro-cid-sy6uvqjv> ', " </a> </div>  <!-- ................ --> ", '  <!-- ................ --> <!-- <a href="#dynmap">dynmap</a> --> <div class="slotty" data-astro-cid-sy6uvqjv> <filler data-astro-cid-sy6uvqjv> <div data-astro-cid-sy6uvqjv> <h1 data-astro-cid-sy6uvqjv>', '</h1> <br data-astro-cid-sy6uvqjv> <button class="btn button btn-pmc" data-astro-cid-sy6uvqjv><a', ' data-astro-cid-sy6uvqjv>See Planet Minecraft</a></button> <!-- <button class="btn button btn-pmc"><a href={ (https://www.planetminecraft.com/project/\'${title})|| frontmatter.pmcpage} >See Planet Minecraft</a></button> --> <button class="btn button btn-primary" data-astro-cid-sy6uvqjv><a', ' target="_blank" data-astro-cid-sy6uvqjv>World Download</a></button> <!-- <button class="btn button btn-blue"><a href="/world-dynmap/" target="">Dynmap</a></button> -->  </div> </filler> <div data-astro-cid-sy6uvqjv> ', ` </div> </div> <!-- ................ --> <!-- dynmap examples
bluemap https://bluemap.mcmeddon.com/?worldname=Jesankor&mapname=surface&zoom=0&x=4662&y=64&z=3745
dynmap https://mcmeddonworlds.my.pebble.host/?worldname=Jesankor&mapname=surface&zoom=0&x=4662&y=64&z=3745 
--> <!-- <iframe  src={frontmatter.dynmap || 'https://bluemap.mcmeddon.com/?worldname=Jesankor&mapname=surface&zoom=0&x=4662&y=64&z=3745'}  decoding="async" loading="lazy" ></iframe> --> <dynmap id="dynmap" data-astro-cid-sy6uvqjv> <h3 data-astro-cid-sy6uvqjv>Dynmap, Bluemap, Worldmap</h3> <div id="dynmap-container" class="" style="margin:0;display:grid; border-radius:20px; align-content: center; border:1px solid; background-color:transparent; color:rgba(255, 255, 255, 0.219);" data-astro-cid-sy6uvqjv> <div class="spacer10" style="display:grid; border-radius:20px; justify-content: center;" data-astro-cid-sy6uvqjv> <center data-astro-cid-sy6uvqjv>Here can be a world map be loaded <br data-astro-cid-sy6uvqjv><br data-astro-cid-sy6uvqjv> (Note, if the correct map hasnt been created, <br data-astro-cid-sy6uvqjv>a fallback example map is loaded)</center></div> <div class="spacer10" " data-astro-cid-sy6uvqjv></div> </div> <button id="load-dynmap-button" class="btn button" style="scroll-behavior: smooth;" data-astro-cid-sy6uvqjv><a href="#dynmap" data-astro-cid-sy6uvqjv>Open Dynmap</a> </button> <script>(function(){`, `
            const container = document.getElementById('dynmap-container');
            const button = document.getElementById('load-dynmap-button');
            
            button.addEventListener('click', () => {
                const iframe = document.createElement('iframe');
                iframe.src = dynmapUrl || bluemapUrl || 'https://mcmeddonworlds.my.pebble.host/?worldname=Jesankor&mapname=surface&zoom=0&x=4662&y=64&z=3745';  
                iframe.decoding = 'async';
                iframe.loading = 'lazy';
                iframe.style='margin:0;';
                
                container.innerHTML = ''; 
                container.appendChild(iframe);
                button.style.display = 'block';
            });
            })();<\/script> </dynmap> <div class="spacer10" data-astro-cid-sy6uvqjv></div> <!-- -----------------------------------------------
<div>
    {images.map(imageSrc => (
        <img src={imageSrc} alt="Image" />
      ))}
  </div>

   --> <!-- imported alle images aus dem ordner 
works with <img>  --> <div class="griddo" data-astro-cid-sy6uvqjv> `, " </div>  </main> "], [" ", " ", '<br data-astro-cid-sy6uvqjv> <main class="mapLayout" data-astro-cid-sy6uvqjv>  <div class="spacer60" data-astro-cid-sy6uvqjv></div> <!-- ................ --> <div class="grid" data-astro-cid-sy6uvqjv> <!-- ................ --> <div data-astro-cid-sy6uvqjv></div> <!-- ................ --> </div> <!-- ................ --> <div class="introbannerdiv" data-astro-cid-sy6uvqjv> <!--     <img class="introbanner" src="../../src/images/model2.png" alt=""> --> <a href="/" data-astro-cid-sy6uvqjv> ', " </a> </div>  <!-- ................ --> ", '  <!-- ................ --> <!-- <a href="#dynmap">dynmap</a> --> <div class="slotty" data-astro-cid-sy6uvqjv> <filler data-astro-cid-sy6uvqjv> <div data-astro-cid-sy6uvqjv> <h1 data-astro-cid-sy6uvqjv>', '</h1> <br data-astro-cid-sy6uvqjv> <button class="btn button btn-pmc" data-astro-cid-sy6uvqjv><a', ' data-astro-cid-sy6uvqjv>See Planet Minecraft</a></button> <!-- <button class="btn button btn-pmc"><a href={ (https://www.planetminecraft.com/project/\'\\${title})|| frontmatter.pmcpage} >See Planet Minecraft</a></button> --> <button class="btn button btn-primary" data-astro-cid-sy6uvqjv><a', ' target="_blank" data-astro-cid-sy6uvqjv>World Download</a></button> <!-- <button class="btn button btn-blue"><a href="/world-dynmap/" target="">Dynmap</a></button> -->  </div> </filler> <div data-astro-cid-sy6uvqjv> ', ` </div> </div> <!-- ................ --> <!-- dynmap examples
bluemap https://bluemap.mcmeddon.com/?worldname=Jesankor&mapname=surface&zoom=0&x=4662&y=64&z=3745
dynmap https://mcmeddonworlds.my.pebble.host/?worldname=Jesankor&mapname=surface&zoom=0&x=4662&y=64&z=3745 
--> <!-- <iframe  src={frontmatter.dynmap || 'https://bluemap.mcmeddon.com/?worldname=Jesankor&mapname=surface&zoom=0&x=4662&y=64&z=3745'}  decoding="async" loading="lazy" ></iframe> --> <dynmap id="dynmap" data-astro-cid-sy6uvqjv> <h3 data-astro-cid-sy6uvqjv>Dynmap, Bluemap, Worldmap</h3> <div id="dynmap-container" class="" style="margin:0;display:grid; border-radius:20px; align-content: center; border:1px solid; background-color:transparent; color:rgba(255, 255, 255, 0.219);" data-astro-cid-sy6uvqjv> <div class="spacer10" style="display:grid; border-radius:20px; justify-content: center;" data-astro-cid-sy6uvqjv> <center data-astro-cid-sy6uvqjv>Here can be a world map be loaded <br data-astro-cid-sy6uvqjv><br data-astro-cid-sy6uvqjv> (Note, if the correct map hasnt been created, <br data-astro-cid-sy6uvqjv>a fallback example map is loaded)</center></div> <div class="spacer10" " data-astro-cid-sy6uvqjv></div> </div> <button id="load-dynmap-button" class="btn button" style="scroll-behavior: smooth;" data-astro-cid-sy6uvqjv><a href="#dynmap" data-astro-cid-sy6uvqjv>Open Dynmap</a> </button> <script>(function(){`, `
            const container = document.getElementById('dynmap-container');
            const button = document.getElementById('load-dynmap-button');
            
            button.addEventListener('click', () => {
                const iframe = document.createElement('iframe');
                iframe.src = dynmapUrl || bluemapUrl || 'https://mcmeddonworlds.my.pebble.host/?worldname=Jesankor&mapname=surface&zoom=0&x=4662&y=64&z=3745';  
                iframe.decoding = 'async';
                iframe.loading = 'lazy';
                iframe.style='margin:0;';
                
                container.innerHTML = ''; 
                container.appendChild(iframe);
                button.style.display = 'block';
            });
            })();<\/script> </dynmap> <div class="spacer10" data-astro-cid-sy6uvqjv></div> <!-- -----------------------------------------------
<div>
    {images.map(imageSrc => (
        <img src={imageSrc} alt="Image" />
      ))}
  </div>

   --> <!-- imported alle images aus dem ordner 
works with <img>  --> <div class="griddo" data-astro-cid-sy6uvqjv> `, " </div>  </main> "])), renderComponent($$result2, "Herovideo", $$Herovideo, { "src": herovideo || "/videos/g7.mp4", "data-astro-cid-sy6uvqjv": true }), maybeRenderHead(), renderComponent($$result2, "Image", $$Image, { "class": "introbanner", "src": import('./model2_DDUJxq9P.mjs'), "height": 100, "alt": "", "loading": "eager", "decoding": "async", "data-astro-cid-sy6uvqjv": true }), renderComponent($$result2, "Image", $$Image, { "src": import(`${heroimage}`), "alt": "Dynamic Image", "class": "coverArt", "quality": 20, "format": "webp", "loading": "lazy", "decoding": "async", "data-astro-cid-sy6uvqjv": true }), frontmatter.title, addAttribute(`https://www.planetminecraft.com/project/${frontmatter.title}`, "href"), addAttribute(frontmatter.patreonpage, "href"), renderSlot($$result2, $$slots["default"]), defineScriptVars({ dynmapUrl, bluemapUrl }), images.map((imageSrc) => renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": import(`${imageSrc}`), "alt": "Image", "loading": "lazy", "height": 440, "quality": 50, "format": "avif", "class": "hover", "data-astro-cid-sy6uvqjv": true })}`)) })} `;
}, "C:/@media/webprojects/MCM/mcmeddon.com/src/layouts/Mapz.astro", void 0);

export { $$Mapz as $ };
