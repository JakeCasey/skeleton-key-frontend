const waitForIframeScrollPosition = (document, callback) => {
  let element = document
    .getElementById("iframe")
    .contentWindow.document.getElementById("iframeScrollPosition");

  console.log(element);

  if (typeof element === "undefined" || element === null) {
    let interval = setInterval(() => {
      console.log("interval hit");
      //get element again
      try {
        element = document
          .getElementById("iframe")
          .contentWindow.document.getElementById("iframeScrollPosition");
      } catch (error) {
        if (error) console.log(error);
      }
      //check if it exists yet.
      if (typeof element !== "undefined" && typeof element !== "null") {
        //if it does kill the interval and run callback
        clearInterval(interval);
        console.log("Interval cleared");
        callback();
      }
      //if it doesn't keep checking.
    }, 500);
  } else {
    callback();
  }
};
export { waitForIframeScrollPosition };
