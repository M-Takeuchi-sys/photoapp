import $ from 'jquery'
import axios from 'axios'

document.addEventListener('DOMContentLoaded', () => {
  $('#formHeaderPost').on('click', () => {
    $('#submitBtn').trigger("click");
  });

  $("#imagesBtn").on("change", function (e) {
    var files = e.target.files;
    var d = new $.Deferred().resolve();
    $.each(files, function (i, file) {
      d = d.then(function () {
        return previewImage(file);
      });
    });
  });

  var previewImage = function (imageFile) {
    var reader = new FileReader();
    var img = new Image();
    var def = $.Deferred();
    reader.onload = function (e) {
      $("#imagesPreview").append(img);
      img.src = e.target.result;
      def.resolve(img);
    };
    reader.readAsDataURL(imageFile);
    return def.promise();
  };

  $('#imageInputBtn').on('click', () => {
    $('#imagesBtn').trigger("click");
  });
});
