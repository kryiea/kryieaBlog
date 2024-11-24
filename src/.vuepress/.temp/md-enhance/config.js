import CodeDemo from "D:/vscode_code/vueblog/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "D:/vscode_code/vueblog/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "D:/vscode_code/vueblog/my-docs/node_modules/@mdit/plugin-spoiler/spoiler.css";
import "D:/vscode_code/vueblog/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
