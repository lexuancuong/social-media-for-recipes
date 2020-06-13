//Tạo dropdown mới
let loadDataForOneDropdown = (name, array) =>{
  let newCategory = $('<div/>');
  $(newCategory).addClass('category');
  let newDropDownCategory = $('<div/>');
  $(newDropDownCategory).addClass('dropdown-category');

  let newDrName = $('<div/>');
  $(newDrName).addClass('dropdown-category-name');
  $(newDrName).text(`${name}`);
  $(newDropDownCategory).append(newDrName);

  $(newDropDownCategory).append('<span class = "icon-category"> <img src="./svg/arrow.svg" /></span>');

  let newList = $('<div class="list"/>'); 
  let n=array.length; 
  let i = 0; 
  for(i ; i < n; i++){
    console.log(array[i]);
    let tmp = $('<div class="item"></div>').text(`${array[i]}`);
    $(newList).append(tmp);
  }
  $(newDropDownCategory).append(newList);  
  $(newCategory).append(newDropDownCategory);
  $('div.show-list-category').append(newCategory);
} 

//loadDataForOneDropdown("nenád",["asdasd","asdasdasd","11212"]);
let loadDropDownOnBegining = () =>{
  let json = {"Nguyên liệu":["< 5 nguyên liệu","5-10 nguyên liệu",">10 nguyên liệu"],
    "Năng lượng":["Cao", "Trung Bình", "Thấp"], 
    "Thời gian": ["1h", "30p đến 1h", "dưới 30p"],
    "Loại món ăn":["Bữa sáng", "Bữa trưa", "Bữa chiều", "Khác"],
    "Quốc gia":["Việt Nam", "Trung Quốc", "Thái Lan","Khác"]}
  let keys = [];
  for(let k in json) keys.push(k);
  for(let i=0; i < keys.length; i++){
    console.log(keys[i]);
    loadDataForOneDropdown(keys[i], json[keys[i]]);
  }
}
loadDropDownOnBegining();

//Cấu hình cho drop down list
let configDropDown = () =>{
  //Khi bấm vào nút category-name 
    $('.dropdown-category > .dropdown-category-name').on('click', function() {
      $(this).parent().children('div.list').toggle();
      $(this).parent().toggleClass('open');
      $(this).parent().children('.icon-category').toggleClass('rotate');
    });
    
    $('.dropdown-category > .list > .item').on('click', function() {
      $(this).removeClass('selected');
      $(this).addClass('selected').parent().parent().removeClass('open').children('.dropdown-category-name').text( $(this).text() );
    });
    
    $(document).on('keyup', function(evt) {
      if ( (evt.keyCode || evt.which) === 27 ) {
        $('.dropdown-category').removeClass('open');
        $('.dropdown-category > .list').toggle();

      }
    });
    
    $(document).on('click', function(evt) {
      if ( $(evt.target).closest(".dropdown-category > .dropdown-category-name").length === 0 ) {
        $('.dropdown-category > .list').hide();
        $('.dropdown-category').removeClass('open');
        $('.icon-category').removeClass('rotate');
      }
    }); 
}
configDropDown();



// Cấu hình cho Dropdown category
$(function(){
  $('.dropdown-profile > .dropdown-profile-name').on('click', function() {
    $(this).parent().toggleClass('open');
    $('.icon-group').toggleClass('rotate');
  });
  
  $('.dropdown-profile > .list > .item').on('click', function() {
    $('.dropdown-profile > .list > .item').removeClass('selected');
    // $(this).addClass('selected').parent().parent().removeClass('open').children('.dropdown-profile-name').text( $(this).text() );
  });
  
  $(document).on('keyup', function(evt) {
    if ( (evt.keyCode || evt.which) === 27 ) {
      $('.dropdown-profile').removeClass('open');
    }
  });
  
  $(document).on('click', function(evt) {
    if ( $(evt.target).closest(".dropdown-profile > .dropdown-profile-name").length === 0 ) {
      $('.dropdown-profile').removeClass('open');
      $('.icon-group').removeClass('rotate');

    }
  }); 


  //Đặt sự kiện truy vấn website
  $('.card-container').attr('onclick',"window.location.href='/item'");
});