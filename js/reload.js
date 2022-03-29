const breakPoint = 599;
  let resizeFlag;

  window.addEventListener('load',()=>{
    if( breakPoint > window.innerWidth){
      resizeFlag = false;
    }else{
      resizeFlag = true;
    }
    resizeWindow();
  },false);

  const resizeWindow = () =>{
    window.addEventListener('resize',()=>{
      if( breakPoint > window.innerWidth && resizeFlag){
        window.location.reload();
        resizeFlag = true;
      } 
      else if ( breakPoint <= window.innerWidth && !(resizeFlag)) {
        resizeFlag = true;
      }
    },false);
  }