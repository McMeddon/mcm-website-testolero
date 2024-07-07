import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, a as renderComponent, e as renderSlot } from './astro/server_B43g0whN.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import './astro/assets-service_DS14CAVm.mjs';
import { b as $$Picture } from './Layout_C65wMquY.mjs';
/* empty css                         */

const $$Astro = createAstro("https://mcmeddon.com");
const $$Shelfitem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Shelfitem;
  const { url } = Astro2.props;
  const { src } = Astro2.props;
  const { img } = Astro2.props;
  Astro2.props;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="preview-container" data-astro-cid-assrkcgm> <a${addAttribute(url, "href")} target="" data-astro-cid-assrkcgm> ${renderComponent($$result, "Picture", $$Picture, { "width": 0, "height": 380, "class": "shelfi preview-image", "src": img || src, "quality": 50, "format": "avif", "alt": "", "loading": "lazy", "data-astro-cid-assrkcgm": true })} <div class="slotcontent" data-astro-cid-assrkcgm> ${renderSlot($$result, $$slots["default"])} </div> </a> </div> `;
}, "C:/@media/webprojects/MCM/mcmeddon.com/src/components/Shelfitem.astro", void 0);

export { $$Shelfitem as $ };
