

                var formElement = document.querySelector('.form');
                var inputElement = formElement.querySelector('.password');
                var changeHref = document.querySelector('.change');
                var PASSWORD_API_KEY = '19042022';

                var eye = formElement.querySelector('.eye');
                var flag = true;
                eye.onclick = function(){
                        if(flag){
                                inputElement.setAttribute("type" , "text");
                                eye.setAttribute("name" , "eye-off-outline");
                                flag = false;
                        }
                        else{
                                inputElement.setAttribute("type" , "password");
                                eye.setAttribute("name" , "eye-outline");
                                flag = true;
                        }
                        
                }


                changeHref.onclick = function(){
                        isConfirmed(inputElement.value)
                }     

                inputElement.addEventListener("keydown", function(event) {
                        if (event.key === "Enter") {
                            event.preventDefault();
                            isConfirmed(inputElement.value)
                        
                        }
                    });
                    

                    function isConfirmed(value){    
                        if(value === PASSWORD_API_KEY){
                                swal("Good job!","Bạn Đoán Đúng Rồi" , "success");
                                setTimeout(() => {
                                        window.location.assign("https://devtran2002.github.io/mainPage/");
                                } , 1000);
                        }
                        else{
                                swal("Sai Rồi >.<","Mật Khẩu Chưa Chính Xác!" , "error");
                        }
                    }
