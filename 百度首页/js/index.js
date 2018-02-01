$(function(){
	//login
	$('#login').click(function(){
		$('.login').show();
		$('.mask').show();
		$('.login').bg_move({
			move:'.login-nav'	/*drag插件的使用方法*/
		});
		
		
	})


	$('.login-nav span').click(function(){
		$('.login').hide();
		$('.userLogin').hide();
		$('.messageLogin').hide();
		$('.login').css({
			left:'36%',
			top:'26%'
		})
		$('.mask').hide();
	})

	
	$('.QR').hover(function(){
		$('.erweima').animate({
			left:'0px',
		})
		$('.inphonePicture').animate({
			left:'156px'
		})
	},function(){
		$('.erweima').animate({
			left:'50px',
		})
		$('.inphonePicture').animate({
			left:'256px'
		})
	})


	/*userLoginit*/
	$('#txt').focusout(function(){
		$('.vertificationCode').css({
			display:'block'
		})
		
		var verifyCode = new GVerify("vertifyContainer"); //初始化图形验证码
		/*
		 * 只传一个id的时候，默认类型为数字和字母混合：“blend”
		 * 也可传多个参数：number：纯数字类型，letter：纯字母类型
		 * var verifyCode = new GVerify({
		        id:"container",
		        type:"number"
		   });
		 * verifyCode.refresh();刷新图形验证码
		   verifyCode.validate(code);验证图形验证码，参数code为用户输入的验证码，返回值：正确：true,错误：false
		 */
		$("#changeAnother").click(function(){	//刷新图形验证码
			verifyCode.refresh();
			$('#vertify').val('')
		})
		
		
		$('#vertify').focusout(function(){
			var code = $('#vertify').val();
			if (!verifyCode.validate(code)) {
				$('#vertify').css({
					border:'none',
					border:'1px solid red'
				})
				$('.error').css({
					display:'block'
				})
				$('.reminder').css({
					display:'block'
				})
			}else{
				$('#vertify').css({
					border:'none',
					border:'1px solid #a9a9a9'
				})
				$('.error').css({
					display:'none'
				})
				$('.reminder').css({
					display:'none'
				})
			}
		})
		
		
		$('.error').click(function(){
			$('#vertify').val('');
		})
	})
	

	
	
	$('.userLoginit').click(function(){
		$('.userLogin').show();
		$('.login').hide();
		$('.messageLogin').hide();
		$('.userLogin').bg_move({
			move:'.login-nav'
		});
	})
	

	$('.qrLoginit').click(function(){
		$('.userLogin').hide();
		$('.messageLogin').hide();
		$('.login').show();
		$('.login').bg_move({
			move:'.login-nav'
		});
	})




	$('#cleartxt').click(function(){	/*cleartxt*/
		$('#txt').val('');	
	})

	$('#clearpsw').click(function(){	/*clearpsw*/
		$('#psw').val('');	
	})
	
	/*messageLogin*/
	$('#messageLogin').click(function(){
		$('.messageLogin').show();
		$('.userLogin').hide();
		$('.messageLogin').bg_move({
			move:'.login-nav'
		});
	})

	$('#iphoneNumber').focusout(function(){
		var vertifyNumber = $("#iphoneNumber").val();
		var reg = /^[1]{1}[3-9]{1}[0-9]{9}$/;
		//console.log(vertifyNumber);
		//console.log(reg.test(vertifyNumber));
		if (vertifyNumber){
			if(!reg.test(vertifyNumber)){
				$('.errorFormat').css({
					visibility:'visible'
				})
			}else{
				$('.errorFormat').css({
					visibility:'hidden'
				})
			}
		}
	})
	
	//setting
	$('#setting').hover(function(){
		$('.setting').css({
			display:'block'
		})
	},function(){
		$('.setting').css({
			display:'none'
		})
	})
	




	//moreproduct
	$("#moreproduct").hover(function(){
		$('.moreproduct').css({
			display:'block'
		})
		$('.moreproduct').hover(function(){
			$('.moreproduct').css({
			    display:'block'
		    })
		},function(){
			$('.moreproduct').css({
			    display:'none'
		    })
		})
	})
	
	//postPhoto
	$('.icon1').click(function(){
		$('.searchk').css({
			borderTopColor:'#3385ff',
			borderLeftColor:'#3385ff'
		})
		$('.icon1').hide();
		$('#searchBtn').val('');
		$('.icon2').show();
		$('.postPhoto').show();
		$('.icon2').click(function(){
			$('.errorReminder').show();
		})
		$('#searchK').attr("placeholder","在此处黏贴图片地址");
	})
	
	$('.close').click(function(){
		$('.searchk').css({
			borderTopColor:'#DCDCDC',
			borderLeftColor:'#DCDCDC'
		})
		$('.icon1').show();
		$('#searchBtn').val('百度一下');
		$('.icon2').hide();
		$('.postPhoto').hide();
		$('.errorReminder').hide();
		$('#searchK').attr("placeholder","");
	})
	
	$('.postPhoto>input').hover(function(){
		$('.postPhoto>button').css('borderColor','#0066FF');
	},function(){
		$('.postPhoto>button').css('borderColor','#CCCCCC');
	})
	
	
});


