$("#btn").click(function(){
    window.location.href="https://www.balenciaga.com/en-us"
})
// var id = generateID();
// function makeSomthing(price,name,images,category){
//   return{
//     price:price,
//     name:name,
//     images:images,
//     category:category,
//     date:new Date(),
//     id:id(),
//   }

//  var sneakers=makeSomthing(600,"air force",["https://image-prod.iol.co.za/resize/960x960/Travis-Scott-x-Jordan-1-Low-Image-Instagram-zsneakerheadz?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/f77a6e15-9e54-5dcd-a731-191f4decf4f9&operation=CROP&offset=0x132&resize=1080x1080&webp=true","https://external-preview.redd.it/fgk1mcUTQUX9qZWK6yGjz4fGNJ0hCP10AuwFfNj1fG4.jpg?width=640&crop=smart&auto=webp&s=deda5fd6ce94feb179def77ca59904cb0191fc58")
// console.log(sneakers)
// $('#shop').append(`<h5>${sneakers.name}</h5>
// <img src=${sneakers.images[0]} id="img1">
// <p>Price : ${sneakers.price}</p>
// `)
$("#squad").click(function(){
    window.location.href= 'https://open.spotify.com/intl-fr/album/1Sf8GsXG32t0jNrX11xqWx'; 
})
$(document).ready(function() {
    // Attach a hover event handler to the image
    $("#price1").hover(
      function() {
        // Mouse over - Change the source to the new image
        $(this).attr("src", "https://jskhsnews.org/wp-content/uploads/2022/12/kaicenat2415621896629972550879502319303174464903829n-1-9313038cb34a74282e060a50fb1b3a23-721x900.jpg"); // Replace with the path to your other image
      },
      function() {
        // Mouse out - Change the source back to the original image
        $(this).attr("src", "images/flex1 (1).png");
      }
    );
  });