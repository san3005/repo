$(document).ready(function ($) {
  //ajax row data

  var random_id = function () {
    var id_num = Math.random().toString(9).substr(2, 3);
    var id_str = Math.random().toString(36).substr(2);

    return id_num + id_str;
  };

  
  var tbl = "";

  tbl += '<div class= "row">';

  
  $.each(card_data, function (index, val) {
    var key = Object.keys(card_data[index]);
    var row_id = random_id();
    tbl += '<div class= "col-md-4">';
    tbl += '<div class= "card mt-3">';
    tbl += '<div class= "card-body">';
    tbl +=
      '<p><img class=" d-block img-fluid" src="images/mplaceolder.jfif" alt="Person Image"></p>';
    tbl +=
      '<p><div class ="row_data" edit_type="click" col_name="name"><b class="text-capitalize">' +
      key[0] +
      ": </b>" +
      val["Name"] +
      "</div></p>";
    tbl +=
      '<p><div class ="row_data" edit_type="click" col_name="ID"><b class="text-uppercase">' +
      key[1] +
      ": </b>" +
      val["id"] +
      "</div></p>";
      
    tbl +=
      '<p><div class ="row_data" edit_type="click" col_name="skills"><b class="text-capitalize">' +
      key[2] +
      ": </b>" +
      val["skills"] +
      "</div></p>";
    tbl +=
      '<p><div class ="row_data" edit_type="click" col_name="Project"><b class="text-capitalize">' +
      key[3] +
      ": </b>" +
      val["Project"] +
      "</div></p>";
    tbl +=
      '<p><div class ="row_data" edit_type="click" col_name="HCM"><b class="text-uppercase">' +
      key[4] +
      ": </b>" +
      val["HCM"] +
      "</div></p>";
    tbl +=
      '<p><div class ="row_data" edit_type="click" col_name="Gender"><b class="text-uppercase">' +
      key[5] +
      ": </b>" +
      val["Gender"] +
      "</div></p>";
   
    tbl += '<p class="editbtn">';
    tbl +=
      '<span class="btn_edit"><a href="#" class="btn btn-link" row_id="' +
      row_id +
      '"><span class="iconify" data-icon="akar-icons:edit" style="color:black" data-width="25" data-height="25"></span></a></span>';
    
    tbl +=
      '<span class="btn_save"><a href="#" class="btn btn-link" row_id="' +
      row_id +
      '"><span class="iconify" data-icon="fluent:save-20-regular" style="color: darkblue;" data-width="25" data-height="25"></span></a></span>';
    tbl +=
      '<span class="btn_delete"><a href="#" class="btn btn-link" row_id="' +
      row_id +
      '"><span class="iconify" data-icon="bi:trash" style="color: red;" data-width="25" data-height="25"></span></a></span>';
    tbl += "</p>";
    
    tbl += "</p>";
    tbl += "</div>";
    tbl += "</div>";
    tbl += "</div>";
  });
  
  tbl += "</div>";
  tbl += "<br><br>";
 
  $(document).find(".tbl_data").html(tbl);

  $(document).find(".btn_save").hide();

  $(document).find(".tbl1_user_data1").hide();
 
  $(document).on("focusout", ".row_data", function (event) {
    event.preventDefault();
    if ($(this).attr("edit_type") == "button") {
      return false;
    }
    var row_id = $(this).closest(".col-md-4").attr("row_id");

    var row_div = $(this)
      .removeClass("bg-warning") //add bg css
      .css("padding", "");

    var col_name = row_div.attr("col_name");
    var col_val = row_div.html();
    var arr = {};
    arr[col_name] = col_val;

   
    $.extend(arr, {
      row_id: row_id,
    });

   
    $(".post_msg").html(
      '<pre class="bg-success">' + JSON.stringify(arr, null, 2) + "</pre>"
    );
  });
  
  $(document).on("click", ".btn_edit", function (event) {
    event.preventDefault();
    var tbl_row = $(this).closest(".col-md-4");
    var row_id = tbl_row.attr("row_id");
    tbl_row.find(".btn_save").show();
    tbl_row.find(".btn_delete").show();
   
    tbl_row.find(".btn_edit").hide();
    
    tbl_row
      .find(".row_data")
      .attr("contenteditable", "true")
      .attr("edit_type", "button")
      // .addClass('bg-warning')
      .css("padding", "");
    
    tbl_row.find(".row_data").each(function (index, val) {
     
      $(this).attr("original_entry", $(this).html());
    });
  });
  
  $(document).on("click", ".btn_delete", function (event) {
    event.preventDefault();
    var tbl_row = $(this).closest(".col-md-4").remove();
  });
 
  $(document).on("click", ".btn_save", function (event) {
    event.preventDefault();
    var tbl_row = $(this).closest(".col-md-4");
    var row_id = tbl_row.attr("row_id");

   
    tbl_row.find(".btn_save").hide();
   

  
    tbl_row.find(".btn_edit").show();

  
    tbl_row
      .find(".row_data")
      .attr("edit_type", "click")
      .removeClass("bg-warning")
      .css("padding", "");
   
    var arr = {};
    tbl_row.find(".row_data").each(function (index, val) {
      var col_name = $(this).attr("col_name");
      var col_val = $(this).html();
      arr[col_name] = col_val;
    });
    
    $.extend(arr, {
      row_id: row_id,
    });
   

    $(".post_msg").html(
      '<pre class="bg-success">' + JSON.stringify(arr, null, 2) + "</pre>"
    );
  });
});

