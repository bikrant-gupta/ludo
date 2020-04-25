$(document).ready(function(){
	$('.cont1,.cont2,.home,.win').hide()
// 	$('.cont3,.win').hide();
	var time = 0;
	var timeDice="";
	var timerSet = 0;
	function timer(){
		setTimeout(()=>{
			time++;

			if(time==60){
				li=[];
				var id = $('.current').attr('id')
				ni=parseInt(id.substr(1,1));
				$('.get-num').hide();
				
				changeUser();
			}
			if(time>50 && timerSet==1 && time%2==0){
				timeDice = $(`.disp-num`).html();
				$(`.disp-num`).html(`
					<div class="square timer-dice">
						<div class="timer">TIMER</div>
						${60-time}
					</div>
					`)

			}
			else if(time>50 && timerSet==1 && time%2==1){
				$(`.disp-num`).html(timeDice);
			}
			else if(time%10==0 || timerSet==0){
				timeDice = $(`.disp-num`).html();
				$(`.disp-num`).html(`
					<div class="square timer-dice">
						<div class="timer">TIMER</div>
						${60-time}
					</div>
					`)
			}
			else if(time%11==0 && timerSet==1){
				$(`.disp-num`).html(timeDice);
			}
			
			// console.log(time)
			timer();
		},1000)
	}
	timer();

	var notPlaying=[2,3];
	var first = -1;
	first=0;
	$(`#p${first+1}`).addClass('current')
		$(`.b${first+1}`).show();
	$('.continue').click(function(){
		notPlaying=[]
		var count=0;
		for(var i=0;i<4;i++){
			var name = $(`.name${i+1}`).val();
			// console.log(name)
			if(name=="" || name==undefined){
				notPlaying.push(i);
			}
			else{
				if(first==-1){
					first=i;
				}
				$(`#p${i+1}`).html(name);
				count++;
			}
		}
		$(`#p${first+1}`).addClass('current')
		$(`.b${first+1}`).show();
		if(count>0){
			console.log(notPlaying)
			$('.cont3').slideUp({durartion:3000,queue:false})
			$('.cont1,.cont2,.home').slideDown({durartion:3000,queue:false})
			timer();
		}
		else{
			alert('please enter name of atleast 2 players')
			// console.log(`alert('please enter name of atleast 2 players')`)
		}
	})
	var color,num;
	$('.coin').click(function(){
		color=$(this).attr('color')
		num=$(this).attr('no')
		// console.log("coin clicked",color,num)
	})
	var n=18;
	for(var i=0;i<n;i++){
	$('.rb1').append(`<div class="road-each-box" id="rb1${i}"><div class="coin-visibility"></div></div>`)
	$('.rb2').append(`<div class="road-each-box" id="rb2${i}"><div class="coin-visibility"></div></div>`)	
	$('.rb3').append(`<div class="road-each-box" id="rb3${i}"><div class="coin-visibility"></div></div>`)
	$('.rb4').append(`<div class="road-each-box" id="rb4${i}"><div class="coin-visibility"></div></div>`)
	}

	// $('.rb1 .coin-visibility').css('margin-top','15px')
	// $('.rb3 .coin-visibility').css('margin-top','15px')
	$('.rb1 #rb11').css('background-color','red')
	$('.rb2 #rb25').css('background-color','#03a9f4')
	$('.rb3 #rb316').css('background-color','rgba(255,250,0,1)')
	$('.rb4 #rb412').css('background-color','#98e021')

	$('.rb1 #rb114').css('background-color','red')
	$('.rb2 #rb26').css('background-color','#03a9f4')
	$('.rb3 #rb33').css('background-color','rgba(255,250,0,1)')
	$('.rb4 #rb411').css('background-color','#98e021')

	var stamps = ['rb11','rb114','rb25','rb26','rb316','rb33','rb412','rb411','home'];


	$('.rb1 #rb15').css('border-top','0px');
	$('.rb1 #rb15').css('border-right','0px');
	$('.rb1 #rb117').css('border-right','0px');
	$('.rb1 #rb117').css('border-bottom','0px');

	$('.rb2 #rb215').css('border-bottom','0px');
	$('.rb2 #rb215').css('border-left','0px');
	$('.rb2 #rb217').css('border-right','0px');
	$('.rb2 #rb217').css('border-bottom','0px');

	$('.rb3 #rb30').css('border-top','0px');
	$('.rb3 #rb30').css('border-left','0px');
	$('.rb3 #rb312').css('border-left','0px');
	$('.rb3 #rb312').css('border-bottom','0px');

	$('.rb4 #rb40').css('border-top','0px');
	$('.rb4 #rb40').css('border-left','0px');
	$('.rb4 #rb42').css('border-right','0px');
	$('.rb4 #rb42').css('border-top','0px');


	var i=1;
	while(i<=15){
		$(`.rb4 #rb4${i}`).css('background-color','#98e021')
		i+=3;
	}
	i=7;
	while(i<=11){
		$(`.rb1 #rb1${i}`).css('background-color','red')
		i+=1;
	}
	i=4;
	while(i<=18){
		$(`.rb2 #rb2${i}`).css('background-color','#03a9f4')
		i+=3;
	}
	i=6;
	while(i<=10){
		$(`.rb3 #rb3${i}`).css('background-color','yellow')
		i+=1;
	}


	var queue=[
	'rb11','rb12','rb13','rb14','rb15','rb215',
	'rb212','rb29','rb26','rb23','rb20','rb21',
	'rb22','rb25','rb28','rb211','rb214','rb217',
	'rb30','rb31','rb32','rb33','rb34','rb35',
	'rb311','rb317','rb316','rb315','rb314','rb313',
	'rb312','rb42','rb45','rb48','rb411','rb414',
	'rb417','rb416','rb415','rb412','rb49','rb46',
	'rb43','rb40','rb117','rb116','rb115','rb114',
	'rb113','rb112','rb16','rb10','rb11'
	];
	var homeQueue = [
		['rb11','rb12','rb13','rb14','rb15','rb215',
		'rb212','rb29','rb26','rb23','rb20','rb21',
		'rb22','rb25','rb28','rb211','rb214','rb217',
		'rb30','rb31','rb32','rb33','rb34','rb35',
		'rb311','rb317','rb316','rb315','rb314','rb313',
		'rb312','rb42','rb45','rb48','rb411','rb414',
		'rb417','rb416','rb415','rb412','rb49','rb46',
		'rb43','rb40','rb117','rb116','rb115','rb114',
		'rb113','rb112','rb16','rb17','rb18','rb19','rb110','rb111','home'],

		['rb25','rb28','rb211','rb214','rb217',
		'rb30','rb31','rb32','rb33','rb34','rb35',
		'rb311','rb317','rb316','rb315','rb314','rb313',
		'rb312','rb42','rb45','rb48','rb411','rb414',
		'rb417','rb416','rb415','rb412','rb49','rb46',
		'rb43','rb40','rb117','rb116','rb115','rb114',
		'rb113','rb112','rb16','rb10','rb11',
		'rb12','rb13','rb14','rb15','rb215',
		'rb212','rb29','rb26','rb23','rb20',
		'rb21','rb24','rb27','rb210','rb213','rb216','home'],

		['rb316','rb315','rb314','rb313',
		'rb312','rb42','rb45','rb48','rb411','rb414',
		'rb417','rb416','rb415','rb412','rb49','rb46',
		'rb43','rb40','rb117','rb116','rb115','rb114',
		'rb113','rb112','rb16','rb10','rb11',
		'rb12','rb13','rb14','rb15','rb215',
		'rb212','rb29','rb26','rb23','rb20','rb21',
		'rb22','rb25','rb28','rb211','rb214','rb217',
		'rb30','rb31','rb32','rb33','rb34','rb35',
		'rb311','rb310','rb39','rb38','rb37','rb36','home'],


		['rb412','rb49','rb46',
		'rb43','rb40','rb117','rb116','rb115','rb114',
		'rb113','rb112','rb16','rb10','rb11'
		,'rb12','rb13','rb14','rb15','rb215',
		'rb212','rb29','rb26','rb23','rb20','rb21',
		'rb22','rb25','rb28','rb211','rb214','rb217',
		'rb30','rb31','rb32','rb33','rb34','rb35',
		'rb311','rb317','rb316','rb315','rb314','rb313',
		'rb312','rb42','rb45','rb48','rb411','rb414',
		'rb417','rb416','rb413','rb410','rb47','rb44','rb41','home']
	]

	var lenQueue=homeQueue[0].length;


	// var ii=0;
	// var ir=0;
	// for(i=0;i<homeQueue[3].length;i++){
	// 	setTimeout(function(i){
	// 		// console.log("helo",ii)
	// 		$(`#${homeQueue[3][ii]} .coin-visibility`).addClass('test-color')
	// 		ii++;
	// 	},i*100);
	// 	setTimeout(function(i){
	// 		// console.log("helo",ir)
	// 		$(`#${homeQueue[3][ir]} .coin-visibility`).removeClass('test-color')
	// 		ir++;
	// 	},(i+1)*100);
	// }

	var dice = [

	`<div class="one square">
		<div class="w-1 h-1"><div class="point"></div></div>
	</div>`,

	`<div class="two square">
		<div class="w-2 h-1"><div class="point"></div></div>
		<div class="w-2 h-1"><div class="point"></div></div>
	</div>`,

	`<div class="three square">
		<div class="w-1 h-2"><div class="point"></div></div>
		<div class="w-2 h-2"><div class="point"></div></div>
		<div class="w-2 h-2"><div class="point"></div></div>
	</div>`,

	`<div class="four square">
		<div class="w-2 h-2"><div class="point"></div></div>
		<div class="w-2 h-2"><div class="point"></div></div>
		<div class="w-2 h-2"><div class="point"></div></div>
		<div class="w-2 h-2"><div class="point"></div></div>
	</div>`,

	`<div class="five square">
		<div class="w-2 h-3"><div class="point"></div></div>
		<div class="w-2 h-3"><div class="point"></div></div>
		<div class="w-1 h-3"><div class="point"></div></div>
		<div class="w-2 h-3"><div class="point"></div></div>
		<div class="w-2 h-3"><div class="point"></div></div>
	</div>`,

	`<div class="six square">
		<div class="w-2 h-3"><div class="point"></div></div>
		<div class="w-2 h-3"><div class="point"></div></div>
		<div class="w-2 h-3"><div class="point"></div></div>
		<div class="w-2 h-3"><div class="point"></div></div>
		<div class="w-2 h-3"><div class="point"></div></div>
		<div class="w-2 h-3"><div class="point"></div></div>
	</div>`
	]

	// $('#rb17 .coin-visibility').append(`<div class="coin red-coin" id="rb17" color="red" no="4"></div>`)

	var allP=[];
	var insideHome = [4,4,4,4];
	var onHome= [0,0,0,0];
	var outsideHome = [0,0,0,0];
	var ran,ni,li=[],nii,currColor,full=false;
	function any(){
			for(i in li){
				if(li[i]==6)return true;
			}
		}

	function getPoints(lis,color){
		var s="";
		for(i in lis){
			s+=`${dice[lis[i]-1]}`
		}
		s=s.substr(0,s.length-1);
		$('.disp-num').html(s);
		$('.square').addClass(`${color}-dice`)
	}
	function canRun(n,color){
		var li2=[];
		for(i in li){
			li2.push(li[i])
		}
		if(insideHome[n]==4)return true;
		// li2.sort();
		var p=0;
		for(var i=1;i<=4 && li2.length;i++){
			p=0;
			var coin = $(`.coin-visibility div[color='${color}']div[no='${i}']`);
			if(coin!==undefined){
				var id = $(coin).attr('id');
				var pos = homeQueue[n].indexOf(id);
				if(pos<0)continue;
				console.log(i,li2,pos)
				// console.log(li2)
				// console.log(pos)
				while(p<li2.length){
					var f = li2[p];
					console.log(f)
					while(pos+f<lenQueue){
						li2 = remove(li2,f);
						pos = pos+f;
						f = li2[p];
					}
					p++;
				}
				

			}
		}
		console.log('last')
		console.log(li2);
		if(li2.length==0)return true;
		console.log('nope')
		return false;
		
	}

	$('.get-num').click(function(){
		time = 0;
		timerSet = 1;
		var id = $('.current').attr('id')
		ni=parseInt(id.substr(1,1));
		var coin=['red','blue','yellow','green'];
		currColor=coin[ni-1]
		ran = Math.floor(Math.random()*6+1);
		// ran=6;
		// ran = $(`.dicevalue`).val();
		// var s = ""
		// for(i=0;i<ran.length;i++){
		// 	if(ran[i]===' '){
		// 		li.push(parseInt(s))
		// 		s="";
		// 	}
		// 	else{
		// 		s=s+ran[i];
		// 	}
		// }
		// console.log(li)
		// ran = parseInt(ran);
		li.push(ran);
		if(ran==6){
			getPoints(li,currColor);
			if(li.length==3) li=[];
			return;
		}
		full = true;
		// li=[6,4]
		// console.log(li)
		$(this).hide();
		getPoints(li,currColor);

		
		
		var currCoin = `${currColor}-coin`
		if(any()){
			$(`.${currColor}-block .${currColor}-coin`).addClass('allowed-coin');
		}
		$(`.coin-visibility .${currColor}-coin`).addClass('allowed-coin');

		
		if(ni==4){
			ni=0;
		}
		nii=ni;
		if(nii==0){
			nii=4;
		}
		if((onHome[nii-1]==0 && !any())|| !canRun(nii-1,currColor)){
			if(insideHome[nii-1]>0 && any()){
				
			}
			else{
				li=[];
				setTimeout(function(){
					changeUser();
				},400);
			}
			
			
		}
	})
	function isNotPlaying(num){
		for(i in notPlaying){
			if(notPlaying[i]==num){
				return true;
			}
		}
		return false;
	}
	var set = 0;
	function changeUser(){
		if(notPlaying.length==3){
			console.log("winn 3");
			winner();
			return;
		}
		time=0;
		timerSet = 0;
		if(set===1 && li.length==0){
			ni--;
			if(ni<0){
				ni=3;
			}
			set=0;
		}
		$('.allowed-coin').removeClass('allowed-coin');
		if(li.length!=0){
			// console.log(ni)
			if(onHome[ni-1]!=0){
				getPoints(li,currColor);
				// console.log(li)
				if(any()){
					$(`.${currColor}-block .${currColor}-coin`).addClass('allowed-coin');
				}
				$(`.coin-visibility .${currColor}-coin`).addClass('allowed-coin');
				return;

			}
			
		}
		window.scrollTo(0,0);
		// console.log(insideHome)
		getPoints();
		ran=0;
		li=[6]
		var nextId = `p${ni+1}`;
		// console.log(nextId);
		$('.current').removeClass('current');

		$(`#${nextId}`).addClass('current');
		if(isNotPlaying(ni)){
			li=[]
			var id = $('.current').attr('id')
			ni=parseInt(id.substr(1,1));
			if(ni==4){
				ni=0;
			}
			changeUser();
		}
		$(`.b${ni+1}`).show();
		full = false;
		// $('.get-num').show();

		// setTimeout(function(){
		// 	console.log("he")
		// 	$('.next-coin').removeClass('next-coin');
		// },5000);

	}

	function getExtraChance(){
		set = 1;
	}
	function remove(lis,num){
		var index = lis.indexOf(num);
		if(index>-1) lis.splice(index,1);
		return lis;
	}


	function checkList(lis,num){
		return new Promise((resolve,reject)=>{
			if(num==0)return false;
			for(i in lis){
				if(lis[i]==num)resolve(false);
			}
			resolve(true);
		})
		
	}
	function findAllPositions(next,last,sum){
		// console.log('in findAllPositions..')
		return new Promise((resolve,reject)=>{
			if(next==last){
				resolve(true);
				return;
			}
			var a=sum+li[next];
			var b=sum
			checkList(allP,a)
			.then(ans=> {
				if(ans) allP.push(a)
				checkList(allP,b)
				.then(ans=> {
					if(ans) allP.push(b)
				})
				.catch(err=>console.log(err));
				findAllPositions(next+1,last,a)
				.then(ans=> {
					// console.log(allP);
					findAllPositions(next+1,last,b)
					.then(ans=> {
						// console.log(allP);
						resolve(true)
						return;
					})
					.catch(err=>console.log(err))
				})
				.catch(err=>console.log(err))
				})
			.catch(err=>console.log(err));
			// findAllPositions(next+1,last,b);
		})
		
	}
	function allPositions(){
		// console.log('in allPositions..')
		return new Promise((resolve,reject)=>{
			allP=[]
			findAllPositions(0,li.length,0)
			.then(ans=> {
				// console.log(allP);
				resolve(true)
				
			})
			.catch(err=>console.log(err))
			
		})
		
	}
	var rank=1
	function winner(nii,color){
		console.log("winner called")
		var name = $(`.name${nii+1}`).val();
		$('.win').append(`
			<div class="winner" style = "background-color:${color}">
				<div class="rank">Rank ${rank}</div>
				<div  class="winnerName"> ${name}</div>
			</div>
			`);
		rank++;
		console.log(notPlaying);
		if(notPlaying.length==3){
			console.log("in winner 3")
			$('.cont1,.cont2,.home').hide()
			$('.cont3').hide();
			$('.win').show();
		}

	}
	function nextPositions(currPosition,color,num){
		// console.log('in nextPositions..')
		return new Promise((resolve,reject)=>{
			// console.log(currPosition,color,num);
			$(`.next-coin`).attr('id','')
			$('.next-coin').removeClass('next-coin');
			allPositions()
			.then(ans=>{
				// console.log('all P closed');
				var nii;
				var colors=['red','blue','yellow','green'];
				nii=colors.indexOf(color)
				for(i in allP){
					function equal(e,index,array){
						return (e==currPosition);
					}
					ind = homeQueue[nii].findIndex(equal);
					var ni = ind+allP[i];
					// console.log(ni,lenQueue)
					if(ni<lenQueue){
						var cut=$(`#${homeQueue[nii][ni]} .coin-visibility .coin`)
						var cutColor = $(cut).attr('color');
						var cutId = $(cut).attr('no');
						var isStamp=false;
						for(i in stamps){
							if(stamps[i]==`${homeQueue[nii][ni]}`){
								isStamp=true;
								break;
							}
						}
						// console.log(cutColor,cutId,isStamp)
						if(!isStamp && cutColor!=undefined ){
							if(cutColor!=color)$(`#${homeQueue[nii][ni]} .coin-visibility`).append(`<div class="next-coin cut-border" id='${homeQueue[nii][ni]}' color='${cutColor}' no='${cutId}'></div>`);
						}
						else{
							$(`#${homeQueue[nii][ni]} .coin-visibility`).append(`<div class="next-coin" id='${homeQueue[nii][ni]}'></div>`);
						}
					}
					// console.log(ni)
					// console.log(queue[ni])
					
				}
				$(`.next-coin`).click(function(){
					
					// console.log("next coin clicked")
					var id=$(this).attr('id');

					var rm=$(`.coin-visibility div[color='${color}']div[no='${num}']`)
					$(rm).removeClass(`allowed-coin`);
					$(rm).removeClass(`coin`);
					$(rm).removeClass(`${color}-coin`);
					$(rm).attr('id','');
					$(rm).attr('color','')
					$(rm).attr('no','');
					var cutId = $(this).attr('no');
					var cutColor = $(this).attr('color');
					// console.log(cutId,cutColor);
					if(cutId  && cutColor!=color){

						var cutCoin=$(`#${id} .coin-visibility div[no='${cutId}']`)
						console.log('inside cutting',cutCoin);
						$(cutCoin).removeClass('coin');
						$(cutCoin).removeClass(`${cutColor}-coin`);
						$(cutCoin).attr('no','');
						$(cutCoin).attr('color','');
						var coinColor = ['red','blue','yellow','green'];
						var index = coinColor.indexOf(cutColor);
						insideHome[index]++;
						onHome[index]--;
						$(`.${cutColor}-block div[no='${cutId}']`).addClass(`${cutColor}-coin`)
						getExtraChance();
					}
					// $(this).removeClass('next-coin');
					if(id){
						$(`#${id} .coin-visibility`).append(`<div class="coin ${color}-coin" id="${id}" color="${color}" no="${num}"></div>`)
					}
					var walked=0;
					while(currPosition!=id){
						var index = homeQueue[nii].indexOf(currPosition);
						currPosition=homeQueue[nii][index+1];
						walked++;
					}
					if(currPosition==homeQueue[nii][lenQueue-1]){
						outsideHome[nii]++;
						setTimeout(()=>{
							$(`.home .coin-visibility`).html('');
						},2000);
						onHome[nii]--;
						if(outsideHome[nii]==4){
							notPlaying.push(nii);
							winner(nii,color);
						}
						else
						getExtraChance();
					}
					while(walked>6){
						li=remove(li,6);
						walked-=6;
					}
					li=remove(li,walked);
					changeUser();
					setTimeout(function(){
						resolve(true);
					},1000);
					$(`.next-coin`).attr('id','');
					$('.next-coin').removeClass('next-coin');
					
				})
			})
			.catch(err=>console.log(err))
		})
	}


	


	function callCoin(color,num){
		return new Promise((resolve,reject)=>{
			$(`.coin-visibility .${color}-coin`).click(function(){
				var no = $(this).attr('no');
				var curr = $('.allowed-coin').attr('color');
				if(no==num && color==curr){
					var id;
					var last = $(this).attr('id');
					function equal(e,index,array){
						return (e==last);
					}
					var nii;
					var colors=['red','blue','yellow','green'];
					nii=colors.indexOf(color)
					// console.log(nii,homeQueue[nii],last)
					var ind = homeQueue[nii].findIndex(equal);
					if((onHome[nii]==1 && !any() && insideHome[nii]>0) || (insideHome[nii]==0 && onHome[nii]==1 && !any())){
					// if(false){
						var sum=0;
						for(i in li){
							sum+=li[i];
						}
						sum = ind+sum;
						if(sum<lenQueue){
							if(sum==lenQueue-1){
								
								outsideHome[nii]++;
								setTimeout(()=>{
									$(`.home .coin-visibility`).html('');
								},2000);
								onHome[nii]--;
								if(outsideHome[nii]==4){
									notPlaying.push(nii);
								}
								else{
									getExtraChance();
								}
							}	
							var ds = $(`.coin-visibility .${color}-coin`);
							ds.removeClass('coin')
							ds.removeClass(`${color}-coin`);
							ds.removeClass(`allowed-coin`);
							ds.attr('color','')
							ds.attr('id','')
							ds.attr('no','')
							nextIndexPosition  = homeQueue[nii][sum];
							var cut = $(`#${nextIndexPosition} .coin-visibility .coin`);
							var cutId = $(cut).attr('no');
							var cutColor = $(cut).attr('color');
							if(cutId && cutColor && cutColor!=color){
								var cutCoin=$(`#${id} .coin-visibility div[no='${cutId}']`)
								console.log('inside cutting',cutCoin);
								$(cutCoin).removeClass('coin');
								$(cutCoin).removeClass(`${cutColor}-coin`);
								$(cutCoin).attr('no','');
								$(cutCoin).attr('color','');
								var coinColor = ['red','blue','yellow','green'];
								var index = coinColor.indexOf(cutColor);
								insideHome[index]++;
								onHome[index]--;
								$(`.${cutColor}-block div[no='${cutId}']`).addClass(`${cutColor}-coin`)
								getExtraChance();
							}
							$(`#${nextIndexPosition} .coin-visibility`).append(`<div class="coin ${color}-coin" color="${color}" no="${num}" id="${nextIndexPosition}"></div>`);
						}
						li=[];
						changeUser();
						resolve(true);
						return;
					}
					nextPositions(homeQueue[nii][ind],color,num)
					.then(ans=>{
						// console.log("end 2")
						resolve(true)
					})
					.catch(err=>console.log(err))
					
				}
			})
			// console.log("end 5")
		})
		// console.log("end 3")
	}

	function func(color,num){
		// console.log('hei')
		callCoin(color,num)
		.then(a=>{
			func(color,num)
		})
		.catch(err=>console.log(err));
		// console.log("end 4")
	}
	$(`.coin`).click(function(){
		if(!full){
			alert(`please complete your turn.. click on die again...`)
		}
	})
	$('.red-block .red-coin').click(function(){
		var inn='rb11';

		if(any() && ni==1 && full){
			insideHome[0]--;
			onHome[0]++;
			li=remove(li,6);
			$(this).removeClass('allowed-coin');
			$(this).removeClass('red-coin');
			var num = $(this).attr('no');
			$('.next-coin').removeClass('next-coin');
			$(`#${inn} .coin-visibility`).append(`<div class="coin red-coin" id="${inn}" color="red" no="${num}"></div>`);
			changeUser();
			func("red",num);

		}
	})
	
	$('.blue-block .blue-coin').click(function(){
		var inn='rb25';
		if(any() && ni==2 && full){
			insideHome[1]--;
			onHome[1]++;
			li=remove(li,6);
			$(this).removeClass('allowed-coin');
			$(this).removeClass('blue-coin');
			var num = $(this).attr('no');
			$('.next-coin').removeClass('next-coin');
			$(`#${inn} .coin-visibility`).append(`<div class="coin blue-coin" id="${inn}" color="blue" no="${num}"></div>`)
			changeUser();
			func("blue",num)
		}
	})

	$('.yellow-block .yellow-coin').click(function(){
		var inn='rb316';
		if(any() && ni==3 && full){
			insideHome[2]--;
			onHome[2]++;
			li=remove(li,6);
			$(this).removeClass('allowed-coin');
			$(this).removeClass('yellow-coin');
			var num = $(this).attr('no');
			$('.next-coin').removeClass('next-coin');
			$(`#${inn} .coin-visibility`).append(`<div class="coin yellow-coin" id="${inn}" color="yellow" no="${num}"></div>`)
			changeUser();
			func("yellow",num)
		}
		
	})
	$('.green-block .green-coin').click(function(){
		var inn='rb412';
		// console.log(ni);
		if(any() && ni==0 && full){
			insideHome[3]--;
			onHome[3]++;
			li=remove(li,6);
			$(this).removeClass('allowed-coin');
			$(this).removeClass('green-coin');
			$('.next-coin').removeClass('next-coin');
			var num = $(this).attr('no');
			$(`#${inn} .coin-visibility`).append(`<div class="coin green-coin" id="${inn}" color="green" no="${num}"></div>`)
			changeUser();
			func("green",num)
		}
	})

	
})
