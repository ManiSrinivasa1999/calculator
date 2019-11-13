(
  document.onreadystatechange = () => {
    if(document.readyState === "complete") {
      const model = {

      };
      const view = {
        init :() => {

        },
        
      };
      const controller ={
        init : () => {
          view.init();
        },
      };
      controller.init();
    }
  }
)();