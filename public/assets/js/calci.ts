(
  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      const model = {
        result: 0,
      };
      const view = {
        render: () => {

        },
        init: () => {
          view.render();
        },
      };
      const controller = {
        init: () => {

        },
      };
      controller.init();
    }
  }
)();
