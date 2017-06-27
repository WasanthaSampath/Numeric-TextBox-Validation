function Numeric (element,a,b){
	
  if(element.length == undefined){
    element.addEventListener('input', function (prev) {
      return function (evt) {

          var reg = new RegExp('^\\d{0,'+a+'}(?:\\.\\d{0,'+b+'})?$','ig')
          if (!reg.test(this.value)) {
            this.value = prev;
          }
          else {
            if (b == 0) {
                  var reg0 = new RegExp('^\\d+$');
                  if (!reg0.test(this.value)) {
                      this.value = prev;
                  } else {
                      prev = this.value;
                  }
                  
              } else {
                  prev = this.value;
              }
          }
      };
    }(element.value), false);    
  }else{
  	for (var i = 0; i < element.length; i++) {

      element[i].addEventListener('input', function (prev) {
        return function (evt) {

            var reg = new RegExp('^\\d{0,'+a+'}(?:\\.\\d{0,'+b+'})?$','ig')
            if (!reg.test(this.value)) {
              this.value = prev;
            }
            else {
              if (b == 0) {
                  var reg0 = new RegExp('^\\d+$');
                  if (!reg0.test(this.value)) {
                      this.value = prev;
                  } else {
                      prev = this.value;
                  }
                  
              } else {
                  prev = this.value;
              }
            }
        };
      }(element[i].value), false);

    }
  }
	

}
