$(document).ready(function(){

    var d="rgb(213, 0, 0)";
    $('#btnEntrar').attr('disabled', true);


	 $(".vb1").mouseover(function(){
    console.log("ON");
        $(this).toggleClass("rubberBand animated");
    });
    $(".vb1").mouseout(function(){
        $(this).removeClass("rubberBand animated");
    });
    $(".vb2").mouseover(function(){
    console.log("ON");
        $(this).toggleClass("jello animated");
    });
    $(".vb2").mouseout(function(){
        $(this).removeClass("jello animated");
    });
    $("#clickForm2").click(function(){
        $("#infoMenReg1").text("Registrarme");
        $("#resCon2").css("display","inline-block");
        $("#resCon1").css("display","none");
    });
    $("#clickForm1").click(function(){
        $("#infoMenReg1").text("Iniciar Sesión");   
        $("#resCon1").css("display","inline-block");
        $("#resCon2").css("display","none");
    });
    $("input[name=email]").focusout(function(){
        if($(this).val().length<=0){
            $("#msjError1").html("<p style='color: red; text-align: left;' id='msjError1-p'>*Campo correo vacio</p>");;
            //console.log("dfd:   "+$(this).val().length);
            $('#btnEntrar').attr('disabled', true);
        }
        else{            
            $("#msjError1").empty();
            $('#btnEntrar').attr('disabled', false);
           // validaEm();
        }
        if($(this).css("border-color")==d){
            $("#msjError1").html("<p style='color: red; text-align: left;' id='msjError1-p'>*Correo invalido</p>");
            $('#btnEntrar').attr('disabled', true);
       }else{   
                $("#msjError1").empty();
                $('#btnEntrar').attr('disabled', false);
       }
    });
   /* $("input[name=email]").keypress(function(){
      validacionDecomapsdoofigjfogijfgoifnodfngfoin("fd")
    });*/

    $("input[name=pass]").focusout(function(){
        if($(this).val().length<=0){
            $("#msjError1").html("<p style='color: red; text-align: left;' id='msjError1-p'>*Campo contraseña vacio</p>");;
            //console.log("dfd:   "+$(this).val().length);
            $('#btnEntrar').attr('disabled', true);
        }
        else{
            $("#msjError1").empty();
            $('#btnEntrar').attr('disabled', false);
        }
    });
       /* function validacionDecomapsdoofigjfogijfgoifnodfngfoin(fh){
        //console.log("dsdfdsfdd");
         if($(this).css("border-color")==d){
            $("#msjError1").html("<p style='color: red; text-align: left;' id='msjError1-p'>*Correo invalido</p>");
            $('#btnEntrar').attr('disabled', true);
       }else{   
                $("#msjError1").empty();
                $('#btnEntrar').attr('disabled', false);
       }
    }    
    */
   /* function validaEm(){
        console.log("kdmfdfmddf´´´´");
        if ($("input[name=pass]").val().length>0) { $('#btnEntrar').attr('disabled', true);}
        else{ $('#btnEntrar').attr('disabled', false);}

    }*/

    /*$("#sesion").click(function(){
        $("#registro").css("display":"none");
        $("#sesion").css("display":"block");
    });
    $("#registro").click(function(){
        $("#sesion").css("display":"none");
        $("#registro").css("display":"block");
    });*/


});//Fin del archivo
		
	//reack native
		
	