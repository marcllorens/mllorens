/*
    document.addEventListener("deviceready",onDeviceReady,false);

   
    function onDeviceReady() {*/
        var pictureSource=navigator.camera.PictureSourceType;
        var destinationType=navigator.camera.DestinationType;
   /* }*/

   
    function onPhotoDataSuccess(imageData) {
    
      var smallImage = document.getElementById('smallImage');
      smallImage.style.display = 'block';
	  smallImage.src=imageData;
	  localStorage.setItem('photo', imageData);
	  $(document.getElementById('smallImage').src)=imageData;
	  
    }

  
    function capturePhoto() {
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50 });
    }

    
    function onFail(message) {
      alert('error: ' + message);
    }

  