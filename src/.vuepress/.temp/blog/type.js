export const typesMap = {"article":{"/":{"path":"/article/","indexes":[13,0,8,7,6,14,15,9,10,11,12,16,17,36,1,2,3,4,5]},"/zh/":{"path":"/zh/article/","indexes":[25,26,20,19,18,34,35,21,22,23,24,32,33,37,27,28,31,29,30]}},"star":{"/":{"path":"/star/","indexes":[9,13,16,0]},"/zh/":{"path":"/zh/star/","indexes":[21,25,32,26]}},"timeline":{"/":{"path":"/timeline/","indexes":[13,8,7,6,14,15,9,10,11,12,16,17,0]},"/zh/":{"path":"/zh/timeline/","indexes":[25,20,19,18,34,35,21,22,23,24,32,33,26]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

