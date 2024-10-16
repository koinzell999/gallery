/*Name this external file gallery.js*/

function upDate(previewPic){
    console.log("upDate event triggered");
        var x = document.getElementById("image");
            x.style.backgroundImage = "url('" + previewPic.src + "')";
            x.innerHTML = previewPic.alt;
    
    
   
    
   
    
      }
  
function unDo(){
    console.log("unDo event triggered");
        var x = document.getElementById("image");
            x.style.backgroundImage = "url('')";
            x.innerHTML = "Hover over an image below to display here.";
       
          
      }