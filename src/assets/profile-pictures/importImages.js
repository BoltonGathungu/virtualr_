
function importAll(r){
    let prof_images = {};
    r.keys().map((item, index)=> 
    {pimages[item.replace('./','')]= r(item);});
     return prof_images; }  
   
      const prof_images= importAll(require.context('/profile-pictures', false,/\.(png|jpe?g|svg)$/));
    
    export default images;

