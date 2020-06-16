(
  document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      const CLEAR = document.getElementById(
          'clear') as HTMLTableColElement;
      const SOLUTION = document.getElementById(
          'solution') as HTMLInputElement;
      const MODEL = {};
      const VIEW = {
        render: (): void => {
          CLEAR.onclick = () => {
            CONTROLLER.clear();
          };
        },
        init: () => {
          VIEW.render();
        },
      };
      const CONTROLLER = {
        clear: () => {
          SOLUTION.innerHTML = '0';
        },
        init: () => {
          VIEW.init();
        },
      };
      CONTROLLER.init();
    }
  }
)();
