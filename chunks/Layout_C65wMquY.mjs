import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, s as spreadAttributes, a as renderComponent, e as renderSlot, g as renderTransition, h as renderHead } from './astro/server_B43g0whN.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { l as lookup, A as AstroError, E as ExpectedImageOptions, f as ExpectedImage, r as resolveSrc, i as isRemoteImage, F as FailedToFetchRemoteImageDimensions, g as isESMImportedImage, h as isLocalService, D as DEFAULT_HASH_PROPS, j as InvalidImageService, k as ImageMissingAlt } from './astro/assets-service_DS14CAVm.mjs';
import 'clsx';
/* empty css                         */

async function probe(url) {
  const response = await fetch(url);
  if (!response.body || !response.ok) {
    throw new Error("Failed to fetch image");
  }
  const reader = response.body.getReader();
  let done, value;
  let accumulatedChunks = new Uint8Array();
  while (!done) {
    const readResult = await reader.read();
    done = readResult.done;
    if (done) break;
    if (readResult.value) {
      value = readResult.value;
      let tmp = new Uint8Array(accumulatedChunks.length + value.length);
      tmp.set(accumulatedChunks, 0);
      tmp.set(value, accumulatedChunks.length);
      accumulatedChunks = tmp;
      try {
        const dimensions = lookup(accumulatedChunks);
        if (dimensions) {
          await reader.cancel();
          return dimensions;
        }
      } catch (error) {
      }
    }
  }
  throw new Error("Failed to parse the size");
}

async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      './astro/assets-service_DS14CAVm.mjs'
    ).then(n => n.s).catch((e) => {
      const error = new AstroError(InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset) globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  if (typeof options.src === "undefined") {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        options.src,
        "undefined",
        JSON.stringify(options)
      )
    });
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: await resolveSrc(options.src)
  };
  if (options.inferSize && isRemoteImage(resolvedOptions.src)) {
    try {
      const result = await probe(resolvedOptions.src);
      resolvedOptions.width ??= result.width;
      resolvedOptions.height ??= result.height;
      delete resolvedOptions.inferSize;
    } catch {
      throw new AstroError({
        ...FailedToFetchRemoteImageDimensions,
        message: FailedToFetchRemoteImageDimensions.message(resolvedOptions.src)
      });
    }
  }
  const originalFilePath = isESMImportedImage(resolvedOptions.src) ? resolvedOptions.src.fsPath : void 0;
  const clonedSrc = isESMImportedImage(resolvedOptions.src) ? (
    // @ts-expect-error - clone is a private, hidden prop
    resolvedOptions.src.clone ?? resolvedOptions.src
  ) : resolvedOptions.src;
  resolvedOptions.src = clonedSrc;
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
  const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig) : [];
  let imageURL = await service.getURL(validatedOptions, imageConfig);
  let srcSets = await Promise.all(
    srcSetTransforms.map(async (srcSet) => ({
      transform: srcSet.transform,
      url: await service.getURL(srcSet.transform, imageConfig),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }))
  );
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
    imageURL = globalThis.astroAsset.addStaticImage(
      validatedOptions,
      propsToHash,
      originalFilePath
    );
    srcSets = srcSetTransforms.map((srcSet) => ({
      transform: srcSet.transform,
      url: globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash, originalFilePath),
      descriptor: srcSet.descriptor,
      attributes: srcSet.attributes
    }));
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    srcSet: {
      values: srcSets,
      attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
    },
    attributes: service.getHTMLAttributes !== void 0 ? await service.getHTMLAttributes(validatedOptions, imageConfig) : {}
  };
}

const $$Astro$7 = createAstro("https://mcmeddon.com");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "C:/@media/webprojects/MCM/mcmeddon.com/node_modules/astro/components/Image.astro", void 0);

const $$Astro$6 = createAstro("https://mcmeddon.com");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const scopedStyleClass = props.class?.match(/\bastro-\w{8}\b/)?.[0];
  if (scopedStyleClass) {
    if (pictureAttributes.class) {
      pictureAttributes.class = `${pictureAttributes.class} ${scopedStyleClass}`;
    } else {
      pictureAttributes.class = scopedStyleClass;
    }
  }
  for (const key in props) {
    if (key.startsWith("data-astro-cid")) {
      pictureAttributes[key] = props[key];
    }
  }
  const originalSrc = await resolveSrc(props.src);
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({
        ...props,
        src: originalSrc,
        format,
        widths: props.widths,
        densities: props.densities
      })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(originalSrc) && specialFormatsFallback.includes(originalSrc.format)) {
    resultFallbackFormat = originalSrc.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionalAttributes = {};
  if (props.sizes) {
    sourceAdditionalAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionalAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "C:/@media/webprojects/MCM/mcmeddon.com/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/squoosh","config":{}},"domains":[],"remotePatterns":[]};
					const getImage = async (options) => await getImage$1(options, imageConfig);

const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<menu class="menubar" data-astro-cid-ssfzsv2f> <ul data-astro-cid-ssfzsv2f> <li data-astro-cid-ssfzsv2f> <a target="" href="/index.html" data-astro-cid-ssfzsv2f> ${renderComponent($$result, "Image", $$Image, { "class": "menubar-img", "src": import('./favicon-32x32_DxoSIWJe.mjs'), "alt": "logo", "height": 32, "width": 32, "quality": "low", "decoding": "async", "loading": "eager", "data-astro-cid-ssfzsv2f": true })}</a> </li> <!--         <li> 
            <a target="" href="/maps/index.html">
                <img class="menubar-img" src="/ui/dices.svg" alt="list icon"> All Maps
             </a>
            </li> --> <li data-astro-cid-ssfzsv2f> <a target="_blank" href="https://www.planetminecraft.com/blog/mcmeddons-roadmap/" data-astro-cid-ssfzsv2f> <img class="menubar-img" src="/ui/path.svg" alt="Roadmap Icon" data-astro-cid-ssfzsv2f> Roadmap
<!-- <img class="menubar-img" src="https://www.svgrepo.com/show/355872/path.svg" alt="Roadmap Icon"> Roadmap --> </a> </li> <li data-astro-cid-ssfzsv2f> <a href="/request" data-astro-cid-ssfzsv2f> <img class="menubar-img" src="/ui/bulb.svg" alt="Roadmap Icon" data-astro-cid-ssfzsv2f> Feature <br data-astro-cid-ssfzsv2f> Request
<!-- <img class="menubar-img" src="https://www.svgrepo.com/show/507962/bulb-on.svg" alt="Roadmap Icon"> Roadmap --> </a> </li> <li data-astro-cid-ssfzsv2f> <a target="_blank" href="https://www.planetminecraft.com/blog/mcmeddons-map-update-history/" data-astro-cid-ssfzsv2f> <img class="menubar-img" src="/ui/history.svg" alt="history icon" data-astro-cid-ssfzsv2f> Update<br data-astro-cid-ssfzsv2f>History
<!-- <img class="menubar-img" src="https://www.svgrepo.com/show/509998/history.svg" alt="history icon"> Update<br>History --> </a> </li> <li data-astro-cid-ssfzsv2f> <a href="/smp/" data-astro-cid-ssfzsv2f> <img style="filter:grayscale(1);padding-bottom: 3px;" class="menubar-img" src="/logos/server-icon.png" alt="SMP icon" data-astro-cid-ssfzsv2f> SMP
<!-- <img class="menubar-img" src="https://www.svgrepo.com/show/509998/history.svg" alt="history icon"> Update<br>History --> </a> </li> <li data-astro-cid-ssfzsv2f> <a href="/world-dynmaps/" data-astro-cid-ssfzsv2f> <img class="menubar-img" src="/ui/road-map-and-pin.svg" alt="Dynmap Icon" data-astro-cid-ssfzsv2f> <!-- <img class="menubar-img" src="https://www.svgrepo.com/show/92704/road-map-and-pin.svg" alt="Dynmap Icon"> --> <center data-astro-cid-ssfzsv2f>World <br data-astro-cid-ssfzsv2f> Dynmaps </center> </a> </li> <!-- <li> 
            <a href="/smp-dynmap/">
                <img class="menubar-img" src="/ui/map-location.svg"  alt="Dynmap Icon"> <center>SMP <br> Dynmap</center> 
                
            </a>
        </li> --> <li data-astro-cid-ssfzsv2f> <button type="btn button-dark" style="font-size:7px; margin:0; align-items: center; justify-content: center; " class="btn btn-link" data-cc="c-settings" data-astro-cid-ssfzsv2f> <center data-astro-cid-ssfzsv2f> 🔘 🔘 🔘</center> </button> </li> </ul> </menu> `;
}, "C:/@media/webprojects/MCM/mcmeddon.com/src/components/Sidebar.astro", void 0);

const $$Astro$5 = createAstro("https://mcmeddon.com");
const $$McPing = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$McPing;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> MCS SMP <span id="status"></span> <!-- <span id="player-count" class=""> --></div> `;
}, "C:/@media/webprojects/MCM/mcmeddon.com/src/components/McPing.astro", void 0);

const $$Sidebartop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="menuwrapper" data-astro-cid-rku3fjfp> <menu class="menubar" data-astro-cid-rku3fjfp> <ul data-astro-cid-rku3fjfp> <li data-astro-cid-rku3fjfp> <!-- src={import(\`/public/favicon/favicon-32x32.png\`)}  --> <a target="" href="/index.html" data-astro-cid-rku3fjfp> <img src="/public/ui/McMeddon-waving-mini.gif" data-astro-cid-rku3fjfp> <!-- <Image 
                    class="menubar-img" 
                    src={import(\`/public/ui/McMeddon-waving-mini.gif\`)} 
                    alt="logo" 
                    height={32} 
                    width={32}
                    quality="low"
                    decoding="async"
                    loading="eager"
                    > --> </a> </li> <!--         <li> 
                <a target="" href="/map/index.html">
                <img class="menubar-img" src="/ui/dices.svg" alt="list icon"> All map
                </a>
                </li> --> <li data-astro-cid-rku3fjfp> <a target="_blank" href="http://suggestionbox.mcmeddon.com" data-astro-cid-rku3fjfp> <!-- <img class="menubar-img" src="/ui/path.svg" alt="Roadmap Icon">  --> Suggestion Box
<!-- <img class="menubar-img" src="https://www.svgrepo.com/show/355872/path.svg" alt="Roadmap Icon"> Roadmap --> </a> </li> <li data-astro-cid-rku3fjfp> <a target="_blank" href="https://www.planetminecraft.com/blog/mcmeddons-roadmap/" data-astro-cid-rku3fjfp> <!-- <img class="menubar-img" src="/ui/path.svg" alt="Roadmap Icon">  --> Roadmap
<!-- <img class="menubar-img" src="https://www.svgrepo.com/show/355872/path.svg" alt="Roadmap Icon"> Roadmap --> </a> </li> <li data-astro-cid-rku3fjfp> <a target="_blank" href="https://www.planetminecraft.com/blog/mcmeddons-map-update-history/" data-astro-cid-rku3fjfp> <!-- <img class="menubar-img" src="/ui/history.svg" alt="history icon">  -->Update History
<!-- <img class="menubar-img" src="https://www.svgrepo.com/show/509998/history.svg" alt="history icon"> Update<br>History --> </a> </li> <li data-astro-cid-rku3fjfp> <a href="/world-dynmap/" data-astro-cid-rku3fjfp> <!-- <img class="menubar-img" src="/ui/road-map-and-pin.svg" alt="Dynmap Icon"> --> <!-- <img class="menubar-img" src="https://www.svgrepo.com/show/92704/road-map-and-pin.svg" alt="Dynmap Icon"> --> <center data-astro-cid-rku3fjfp>World Dynmap </center> </a> </li> <!-- <li> 
            <a href="/smp-dynmap/">
                <img class="menubar-img" src="/ui/map-location.svg"  alt="Dynmap Icon"> <center>SMP <br> Dynmap</center> 
                
            </a>
        </li> --> <li data-astro-cid-rku3fjfp> <!-- <button type="btn button-dark" style="font-size:7px; margin:0; align-items: center; justify-content: center; "class="btn btn-link" data-cc="c-settings"> 
                <center> 🔘 🔘 🔘</center>
            </button> --> <a href="#" type="btn button-dark" "class="btn btn-link" data-cc="c-settings" data-astro-cid-rku3fjfp> <center data-astro-cid-rku3fjfp> Settings</center> </a> </li> <li data-astro-cid-rku3fjfp> <button style="" class="btn btn-pmc menulast-button" data-astro-cid-rku3fjfp><a href="https://www.patreon.com/mcmeddon/" target="_blank" data-astro-cid-rku3fjfp>❤ Support McMeddon</a></button> <button style="" class="btn btn-outline menulast-button" data-astro-cid-rku3fjfp><a href="https://www.planetminecraft.com/" target="_blank" data-astro-cid-rku3fjfp>${renderComponent($$result, "McPing", $$McPing, { "data-astro-cid-rku3fjfp": true })}</a> </button> </li> </ul> </menu> </div> `;
}, "C:/@media/webprojects/MCM/mcmeddon.com/src/components/Sidebartop.astro", void 0);

const $$Astro$4 = createAstro("https://mcmeddon.com");
const $$Pill = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Pill;
  const { title, link, icon, target } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="fullpill" data-astro-cid-2qeywk4b> <div class="pill" data-astro-cid-2qeywk4b> <a icon${addAttribute(link, "href")}${addAttribute(target, "target")} " data-astro-cid-2qeywk4b> <img${addAttribute(icon, "src")} alt="pill icon" loading="lazy" decoding="async" data-astro-cid-2qeywk4b> <h2 data-astro-cid-2qeywk4b> ${title} </h2> ${renderSlot($$result, $$slots["default"])} </a> </div> </div> `;
}, "C:/@media/webprojects/MCM/mcmeddon.com/src/components/Pill.astro", void 0);

const $$Astro$3 = createAstro("https://mcmeddon.com");
const $$McPingPill = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$McPingPill;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="pillcontainer" data-astro-cid-empf64la> <div class="pill" data-astro-cid-empf64la> <span id="status" class="" data-astro-cid-empf64la></span>
Online: <span id="player-count" class="" data-astro-cid-empf64la></span> </div> </div>  `;
}, "C:/@media/webprojects/MCM/mcmeddon.com/src/components/McPingPill.astro", void 0);

const $$Astro$2 = createAstro("https://mcmeddon.com");
const $$Pillcollection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Pillcollection;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="Pillcollection" data-astro-cid-4vvdcggc> ${renderComponent($$result, "Pill", $$Pill, { "link": "https://www.patreon.com/mcmeddon", "title": "Patreon", "icon": "../../logos/PATREON_WHITE_RGB.png", "target": "_blank", "data-astro-cid-4vvdcggc": true })} ${renderComponent($$result, "Pill", $$Pill, { "link": "https://www.planetminecraft.com/member/mcmeddon/", "title": "PMC", "icon": "../../logos/pmc.webp", "target": "_blank", "data-astro-cid-4vvdcggc": true })} ${renderComponent($$result, "Pill", $$Pill, { "link": "http://youtube.mcmeddon.com", "title": "Youtube", "icon": "../../logos/youtube.svg", "target": "_blank", "data-astro-cid-4vvdcggc": true })} ${renderComponent($$result, "Pill", $$Pill, { "link": "http://discord.mcmeddon.com", "title": "Discord", "icon": "../../logos/discord.png", "target": "_blank", "data-astro-cid-4vvdcggc": true })} ${renderComponent($$result, "Pill", $$Pill, { "link": "http://pinterest.mcmeddon.com", "title": "Pinterest", "icon": "../../logos/pinterest.png", "target": "_blank", "data-astro-cid-4vvdcggc": true })} ${renderComponent($$result, "Pill", $$Pill, { "link": "https://www.planetminecraft.com/server/play-mcmeddon-com/", "title": "play.mcmeddon.com", "icon": "../../logos/server-icon.png", "target": "_blank", "data-astro-cid-4vvdcggc": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "McPingPill", $$McPingPill, { "data-astro-cid-4vvdcggc": true })} ` })} <div data-astro-cid-4vvdcggc></div> <!-- <div><input type="search" placeholder="Search..."></div> --> </div>  `;
}, "C:/@media/webprojects/MCM/mcmeddon.com/src/components/Pillcollection.astro", void 0);

const $$BGAnimation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="area" data-astro-cid-qwxlf6hg> <ul class="circles" data-astro-cid-qwxlf6hg> <li data-astro-cid-qwxlf6hg>.</li> <li data-astro-cid-qwxlf6hg></li> <li data-astro-cid-qwxlf6hg></li> <li data-astro-cid-qwxlf6hg></li> <li data-astro-cid-qwxlf6hg></li> <li data-astro-cid-qwxlf6hg></li> <li data-astro-cid-qwxlf6hg></li> <li data-astro-cid-qwxlf6hg></li> <li data-astro-cid-qwxlf6hg></li> <li data-astro-cid-qwxlf6hg></li> </ul> </div> `;
}, "C:/@media/webprojects/MCM/mcmeddon.com/src/components/BG-animation.astro", void 0);

const $$BGAnimation2 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="area" data-astro-cid-od32l6rh> <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" data-astro-cid-od32l6rh> <defs data-astro-cid-od32l6rh> <radialGradient id="Gradient1" cx="50%" cy="50%" fx="0.441602%" fy="50%" r=".5" data-astro-cid-od32l6rh><animate attributeName="fx" dur="134s" values="0%;3%;0%" repeatCount="indefinite" data-astro-cid-od32l6rh></animate><stop offset="0%" stop-color="rgba(255, 0, 255, 1)" data-astro-cid-od32l6rh></stop><stop offset="100%" stop-color="rgba(255, 0, 255, 0)" data-astro-cid-od32l6rh></stop></radialGradient> <radialGradient id="Gradient2" cx="50%" cy="50%" fx="2.68147%" fy="50%" r=".5" data-astro-cid-od32l6rh><animate attributeName="fx" dur="123.5s" values="0%;3%;0%" repeatCount="indefinite" data-astro-cid-od32l6rh></animate><stop offset="0%" stop-color="rgba(255, 255, 0, 1)" data-astro-cid-od32l6rh></stop><stop offset="100%" stop-color="rgba(255, 255, 0, 0)" data-astro-cid-od32l6rh></stop></radialGradient> <radialGradient id="Gradient3" cx="50%" cy="50%" fx="0.836536%" fy="50%" r=".5" data-astro-cid-od32l6rh><animate attributeName="fx" dur="121.5s" values="0%;3%;0%" repeatCount="indefinite" data-astro-cid-od32l6rh></animate><stop offset="0%" stop-color="rgba(0, 255, 255, 1)" data-astro-cid-od32l6rh></stop><stop offset="100%" stop-color="rgba(0, 255, 255, 0)" data-astro-cid-od32l6rh></stop></radialGradient> <radialGradient id="Gradient4" cx="50%" cy="50%" fx="4.56417%" fy="50%" r=".5" data-astro-cid-od32l6rh><animate attributeName="fx" dur="123s" values="0%;5%;0%" repeatCount="indefinite" data-astro-cid-od32l6rh></animate><stop offset="0%" stop-color="rgba(0, 255, 0, 1)" data-astro-cid-od32l6rh></stop><stop offset="100%" stop-color="rgba(0, 255, 0, 0)" data-astro-cid-od32l6rh></stop></radialGradient> <radialGradient id="Gradient5" cx="50%" cy="50%" fx="2.65405%" fy="50%" r=".5" data-astro-cid-od32l6rh><animate attributeName="fx" dur="124.5s" values="0%;5%;0%" repeatCount="indefinite" data-astro-cid-od32l6rh></animate><stop offset="0%" stop-color="rgba(0,0,255, 1)" data-astro-cid-od32l6rh></stop><stop offset="100%" stop-color="rgba(0,0,255, 0)" data-astro-cid-od32l6rh></stop></radialGradient> <radialGradient id="Gradient6" cx="50%" cy="50%" fx="0.981338%" fy="50%" r=".5" data-astro-cid-od32l6rh><animate attributeName="fx" dur="125.5s" values="0%;5%;0%" repeatCount="indefinite" data-astro-cid-od32l6rh></animate><stop offset="0%" stop-color="rgba(255,0,0, 1)" data-astro-cid-od32l6rh></stop><stop offset="100%" stop-color="rgba(255,0,0, 0)" data-astro-cid-od32l6rh></stop></radialGradient> </defs> <!-- 
  <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient4)">
  <animate attributeName="x" dur="120s" values="25%;0%;25%" repeatCount="indefinite" />
  <animate attributeName="y" dur="121s" values="0%;25%;0%" repeatCount="indefinite" />
  <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="147s" repeatCount="indefinite"/>
  </rect>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient5)">
  <animate attributeName="x" dur="123s" values="0%;-25%;0%" repeatCount="indefinite" />
  <animate attributeName="y" dur="124s" values="25%;-25%;25%" repeatCount="indefinite" />
  <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="148s" repeatCount="indefinite"/>
  </rect>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient6)">
  <animate attributeName="x" dur="125s" values="-25%;0%;-25%" repeatCount="indefinite" />
  <animate attributeName="y" dur="126s" values="0%;-25%;0%" repeatCount="indefinite" />
  <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="149s" repeatCount="indefinite"/>
  </rect> --> <rect x="13.744%" y="1.18473%" width="100%" height="100%" fill="url(#Gradient1)" transform="rotate(334.41 50 50)" data-astro-cid-od32l6rh><animate attributeName="x" dur="140s" values="25%;0%;25%" repeatCount="indefinite" data-astro-cid-od32l6rh></animate><animate attributeName="y" dur="21s" values="0%;25%;0%" repeatCount="indefinite" data-astro-cid-od32l6rh></animate><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="17s" repeatCount="indefinite" data-astro-cid-od32l6rh></animateTransform></rect> <rect x="-2.17916%" y="35.4267%" width="100%" height="100%" fill="url(#Gradient2)" transform="rotate(255.072 50 50)" data-astro-cid-od32l6rh><animate attributeName="x" dur="143s" values="-25%;0%;-25%" repeatCount="indefinite" data-astro-cid-od32l6rh></animate><animate attributeName="y" dur="24s" values="0%;50%;0%" repeatCount="indefinite" data-astro-cid-od32l6rh></animate><animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="112s" repeatCount="indefinite" data-astro-cid-od32l6rh></animateTransform> </rect> <rect x="9.00483%" y="14.5733%" width="100%" height="100%" fill="url(#Gradient3)" transform="rotate(139.903 50 50)" data-astro-cid-od32l6rh><animate attributeName="x" dur="145s" values="0%;25%;0%" repeatCount="indefinite" data-astro-cid-od32l6rh></animate><animate attributeName="y" dur="12s" values="0%;25%;0%" repeatCount="indefinite" data-astro-cid-od32l6rh></animate><animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="119s" repeatCount="indefinite" data-astro-cid-od32l6rh></animateTransform> </rect> </svg> </div> `;
}, "C:/@media/webprojects/MCM/mcmeddon.com/src/components/BG-animation2.astro", void 0);

const $$Astro$1 = createAstro("https://mcmeddon.com");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/@media/webprojects/MCM/mcmeddon.com/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://mcmeddon.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <!--\n	"Sometimes all it takes, is one person that cares.."\n	\n--> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="generator"', '><meta name="description" content="The home for Advanced Survival Friendly Vanilla Minecraft Landscapes, map and Worlds by McMeddon"><title>', '</title><!-- Load stylesheet --><!-- <link rel="stylesheet" href="./node_modules/vanilla-cookieconsent/dist/cookieconsent.css"> --><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.9.1/dist/cookieconsent.css"><!-- Load stylesheet --><link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"><link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-chrome-192x192.png">', "", '</head> <body> <wrapper> <sidebar class="desktop">', '</sidebar> <sidebar class="mobile">', "</sidebar> <content", '> <img src="/ui/achievement.png" style="border-radius:0; height:auto; width:250px; position:fixed; left:0; bottom:0px; margin:25px; opacity:70%;"> <background> ', " ", " </background> <div> ", " </div> <div></div> ", ` </content> <!-- <rightsidebar style="background-color: rgba(0,0,0,0.1);">
				<div>i am the right sidebar</div>
				</rightsidebar> --> </wrapper> <!-- Load cookie consent --> <!-- Google tag (gtag.js) --> <script async src="https://www.googletagmanager.com/gtag/js?id=G-3145204CFM" type="text/plain" data-cookiecategory="analytics">
		console.log('"analyticstag" category accepted');
		<\/script> <script defer type="text/plain" data-cookiecategory="analytics">

			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', 'G-3145204CFM');		
			console.log('"analytics" category accepted');
		<\/script> <!-- Load cookie consent --> <script defer src="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.9.1/dist/cookieconsent.js"><\/script> <script defer src=".././js/cookieconsent-init.js"><\/script> </body> </html> `])), addAttribute(Astro2.generator, "content"), title, renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderComponent($$result, "Sidebartop", $$Sidebartop, {}), renderComponent($$result, "Sidebar", $$Sidebar, {}), addAttribute(renderTransition($$result, "7bco3xic"), "data-astro-transition-scope"), renderComponent($$result, "BGani", $$BGAnimation, {}), renderComponent($$result, "BGani2", $$BGAnimation2, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Pilcollection", $$Pillcollection, {}));
}, "C:/@media/webprojects/MCM/mcmeddon.com/src/layouts/Layout.astro", "self");

export { $$Image as $, $$Layout as a, $$Picture as b };
