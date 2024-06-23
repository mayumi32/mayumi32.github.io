let oldValue="stronaGlowna"
function category(value)
{
    if(oldValue!=null) document.getElementById(oldValue).style.display = "none";
    document.getElementById(value).style.display = "block";

    if(window.innerWidth < 800)
        {
    document.getElementById('menu').style.animation="hideMenu 0.5s normal ";
        
        setTimeout(() => {
            document.getElementById('menu').style.display = 'none';
          }, 400);
          isVisible = !isVisible
        }
    oldValue = value;
    
}
function showImage(imagePath)
{
    document.getElementById('showImage').style.display = "flex";
    document.getElementById('imageToShow').src = imagePath;
    
}
function hideImage()
{
    document.getElementById('showImage').style.display = "none";
}

let isVisible = false;
function showMenu()
{
    
            isVisible= !isVisible
            if(isVisible)
            {
                document.getElementById('menu').style.display = 'block'
                document.getElementById('menu').style.animation="showMenu 0.5s normal ";
                
            }
            else
            {
                document.getElementById('menu').style.animation="hideMenu 0.5s normal ";
                
                setTimeout(() => {
                    document.getElementById('menu').style.display = 'none';
                }, 400);
            }
        
        
    
}