// var acc=faq.html("accordian);
// var i;
// for (i=0; i < acc.length; i++) {
//     this.classList.toggle("active);
//     var panel=this.nextElementSibling;
//     if (panel.style.display === "block) {
//         panel.style.display = "none";
//     } else {
//         panel.style.display = "block";
//     }
// }};
// }

window.addEventListener('DOMContentLoaded', () => {

  
  var coll = document.getElementsByClassName("collapsible");
  // refers to all elements with class collapsible - wherever script is included
  var i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      console.log(coll[i])
      debugger
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      } 
    });
  }
})