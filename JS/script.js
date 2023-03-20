var $ = jQuery;
$(document).ready(function () {
  slider2Input();
});

function slider2Input() {
  $(document).ready(function () {
    $('.js-example-basic-multiple').select2({
      placeholder: 'Select a month',
      allowClear: true,
      theme: 'classic',
    });
  });
}
