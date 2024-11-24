import { CodeTabs } from "D:/vscode_code/vueblog/my-docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/vscode_code/vueblog/my-docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/vscode_code/vueblog/my-docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
