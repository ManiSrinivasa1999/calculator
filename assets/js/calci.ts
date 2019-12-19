(
  document.onreadystatechange = () => {
    if(document.readyState === "complete") {
      const model = {

      };
      const view = {
        render: () => {

        },
        init: () => {

        }
      };
      const controller = {
        init: () => {
          view.init();
        }
      };
      controller.init();
    }
  }
)();
