  // Function to check if the element is in the viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event and apply animations
function handleScroll() {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        if (isInViewport(content)) {
            content.style.animationName = content.getAttribute('data-animation');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);
// Run the function on page load as well
window.addEventListener('load', handleScroll);
 var mySong=document.getElementById("mysong");
 var icon = document.getElementById("icon");
 icon.onclick = function(){
    if(mySong.paused){
        mySong.play();                                       /* 1st*/
        icon.src="images/pausebutton.jpg";
    }
    else{
        mySong.pause();
        icon.src="images/playbutton.jpg";
    }
 }
 var mysongg=document.getElementById("mysongg");
 var png=document.getElementById("png");
 png.onclick =function(){                                  /* 2nd*/
    if(mysongg.paused){
        mysongg.play();
        png.src="images/pausebutton.jpg";
    }
    else{
        mysongg.pause();
        png.src="images/playbutton.jpg";
    }
 }
 
 var mysonggg=document.getElementById("mysonggg");    /* 3rd*/
 var pngg=document.getElementById("pngg");
 pngg.onclick =function(){
    if(mysonggg.paused){
        mysonggg.play();
        pngg.src="images/pausebutton.jpg";
    }
    else{
        mysonggg.pause();
        pngg.src="images/playbutton.jpg";
    }
 }
 

 var myvoice=document.getElementById("myvoice");    /* 4th*/
 var pnggg=document.getElementById("pnggg");
 pnggg.onclick =function(){
    if(myvoice.paused){
        myvoice.play();
        pnggg.src="images/pausebutton.jpg";
    }
    else{
        myvoice.pause();
        pnggg.src="images/playbutton.jpg";
    }
 }

 var myvoices=document.getElementById("myvoices");    /* 5th*/
 var pngggg=document.getElementById("pngggg");
 pngggg.onclick =function(){
    if(myvoices.paused){
        myvoices.play();
        pngggg.src="images/pausebutton.jpg";
    }
    else{
        myvoices.pause();
        pngggg.src="images/playbutton.jpg";
    }
 }

 var myvoicess=document.getElementById("myvoicess");    /* 6th*/
 var pnggggg=document.getElementById("pnggggg");
 pnggggg.onclick =function(){
    if(myvoicess.paused){
        myvoicess.play();
        pnggggg.src="images/pausebutton.jpg";
    }
    else{
        myvoicess.pause();
        pnggggg.src="images/playbutton.jpg";
    }
 }


 var myvoicesss=document.getElementById("myvoicesss");    /* 7th*/
 var pngggggg=document.getElementById("pngggggg");
 pngggggg.onclick =function(){
    if(myvoicesss.paused){
        myvoicesss.play();
        pngggggg.src="images/pausebutton.jpg";
    }
    else{
        myvoicesss.pause();
        pngggggg.src="images/playbutton.jpg";
    }
 }

 
 
 