(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{694:function(e,r,t){"use strict";t.r(r);var o=t(0),n=t.n(o),i=t(840),l=t.n(i),u=t(713);function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],o=!0,n=!1,i=void 0;try{for(var l,u=e[Symbol.iterator]();!(o=(l=u.next()).done)&&(t.push(l.value),!r||t.length!==r);o=!0);}catch(e){n=!0,i=e}finally{try{o||null==u.return||u.return()}finally{if(n)throw i}}return t}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,o=new Array(r);t<r;t++)o[t]=e[t];return o}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){d(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var f=function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;t.closeOnEdit?o():"TAGGING"===e?r(!0,"TAGGING","IMAGE_EDITOR"):r(!1)},g=function(e,r,t,o,n){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},l=arguments.length>6?arguments[6]:void 0,a=arguments.length>7?arguments[7]:void 0,c=[p(p({},t),{},{public_link:Object(u.c)(t)})];if(a(c,{stage:"edit"}),i.closeOnEdit)l();else if("TAGGING"===e){var s=[p(p({},t),{},{public_link:Object(u.c)(t)})];o(s),n(!0,"TAGGING")}else n(!1)},b=function(e){var r=e.appState,t=e.files,o=a(t=void 0===t?{}:t,1)[0],i=void 0===o?{}:o,c=e.path,s=e.saveUploadedFiles,d=e.setPostUpload,b=e.options,_=e.closeModal,m=r.prevTab,O=r.config,y=r.modifyURL,j=O.uploadKey,v=O.baseAPI,A=O.container,E=O.uploadParams,h=O.cloudimageToken,T=O.uploadHandler,w=O.language,P=O.imageEditorConfig,k=void 0===P?{}:P,I="gif"===Object(u.c)(i).slice(-3).toLowerCase(),R=Object(u.a)(i);return n.a.createElement(l.a,{show:!0,config:p(p({isLowQualityPreview:!0,colorScheme:"dark",language:w,processWithCloudimage:I||y,uploadWithCloudimageLink:y?!y:I},k),{},{filerobot:p({baseAPI:v,token:A,uploadKey:j,container:A,uploadParams:p(p({},E),{},{dir:c||E.dir},k.filerobot&&k.filerobot.uploadParams)},k.filerobot),cloudimage:p({token:h},k.cloudimage),showGoBackBtn:!0}),closeOnLoad:!1,src:R,onComplete:function(e){if(y){var r=[p(p({},i),{},{modified_url:e,public_link:Object(u.c)(i)})];T(r,{stage:"modify"}),_()}else g(m,e,i,s,d,b,_,T)},onClose:function(){f(m,d,b,_)},showInModal:!1})};r.default=b;"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(f,"goBack","/Users/dmitrystremous/Scaleflex/plugins/filerobot-uploader/projects/react-plugin/components/imageEditor/ImageEditorWrapper.js"),__REACT_HOT_LOADER__.register(g,"uploadFiles","/Users/dmitrystremous/Scaleflex/plugins/filerobot-uploader/projects/react-plugin/components/imageEditor/ImageEditorWrapper.js"),__REACT_HOT_LOADER__.register(b,"default","/Users/dmitrystremous/Scaleflex/plugins/filerobot-uploader/projects/react-plugin/components/imageEditor/ImageEditorWrapper.js"))},713:function(e,r,t){"use strict";t.d(r,"b",(function(){return o})),t.d(r,"c",(function(){return n})),t.d(r,"a",(function(){return i}));var o=function(e){return e.url&&e.url.permalink?e.url.permalink:e.url_permalink?e.url_permalink:""},n=function(e){return e.url&&e.url.public?e.url.public:e.url_public?e.url_public:""},i=function(e){return e.url&&e.url.cdn?e.url.cdn:""};"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(o,"getPermalink","/Users/dmitrystremous/Scaleflex/plugins/filerobot-uploader/projects/react-plugin/utils/adjustAPI.utils.js"),__REACT_HOT_LOADER__.register(n,"getPubliclink","/Users/dmitrystremous/Scaleflex/plugins/filerobot-uploader/projects/react-plugin/utils/adjustAPI.utils.js"),__REACT_HOT_LOADER__.register(i,"getCDNlink","/Users/dmitrystremous/Scaleflex/plugins/filerobot-uploader/projects/react-plugin/utils/adjustAPI.utils.js"))}}]);