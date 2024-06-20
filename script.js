let oldValue="stronaGlowna"
function category(value)
{
    if(oldValue!=null) document.getElementById(oldValue).style.display = "none";
    let container = document.getElementById("worksContainer")
    document.getElementById(value).style.display = "block";
    
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