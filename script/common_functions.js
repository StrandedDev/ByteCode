function switch_preview_tabs(containerId, value) {
  let $container = $("#" + containerId);

  if (value === "preview") {
    $container.find(".preview_box").toggle();
    $container.find(".html_code_box, .svelte_code_box").hide();
  }
  if (value === "html_code") {
    $container.find(".html_code_box").toggle();
    $container.find(".preview_box, .svelte_code_box").hide();
  }
  if (value === "svelte_code") {
    $container.find(".svelte_code_box").toggle();
    $container.find(".preview_box, .html_code_box").hide();
  }
}
