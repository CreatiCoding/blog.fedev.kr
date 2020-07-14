import Stackedit from "stackedit-js";

export default {
  install: (Vue) => {
    const self = {
      stackedit: new Stackedit(),
      openFile: ({ filename = "no-name.md", el }) => {
        self.stackedit.openFile({
          name: filename,
          content: {
            text: el.value,
          },
        });
        self.stackedit.on("fileChange", (file) => {
          el.value = file.content.text;
        });
      },
      onClose: (callback) => {
        self.stackedit.on("close", () => callback());
      },
    };
    Vue.prototype.$stackedit = Vue.stackedit = self;
  },
};
