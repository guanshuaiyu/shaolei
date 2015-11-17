window.onload= function(){
	
    
var row=8;
    var da=document.getElementById('a');
    da.style.width=88*row+'px';
    da.style.height=88*row+'px';
	var zhezhao=document.getElementById('zhezhao');
	var zhezhao1=document.getElementById('zhezhao1');
	var zai=document.getElementById('zai');
	var zai1=document.getElementById('zai1');
	var lei=[];
 for(var i=0 ;i<row; i++){
	lei[i]=[];
	for(var j=0;j<row;j++){
		var a=(Math.random()>0.8)?1:0;
	lei[i].push(a);
		}
 	}
var new_arr=[];
 for(var i=0;i<row;i++){
 	new_arr[i]=[];
 	for(var j=0;j<row;j++){
		if(lei[i][j]==0){
		var d1=(j>0)?lei[i][j-1]:0;
		var d2=(j<row-1)?lei[i][j+1]:0;
		
		var d3=(i>0 && j>0)?lei[i-1][j-1]:0;
		var d4=(i>0)?lei[i-1][j]:0;
		var d5=(i>0 && j<row-1)?lei[i-1][j+1]:0;
		
 		var d6=(i<row-1 && j>0)?lei[i+1][j-1]:0;
		var d7=(i<row-1)?lei[i+1][j]:0;
 		var d8=(i<row-1 && j<row-1)?lei[i+1][j+1]:0;
		
		var tip =d1+d2+d3+d4+d5+d6+d7+d8;
 	new_arr[i].push(tip);	
 	}
	else{
	new_arr[i].push('lei');
		}
 	}
 }
var _lei=[];
 	for(i=0;i<row;i++){
		 for(j=0;j<row;j++){
			_lei.push(new_arr[i][j]);
		}	
 	}
    var _k=0;
   var interId =setInterval(function(){
       var el=document.createElement('div');
	   if(_lei[_k]=='lei'){
		   el.setAttribute('class','b lei');
		   				}
		else{
        el.setAttribute('class','b');
		 	}
		el.textContent=_lei[_k];
      	da.appendChild(el);
				setTimeout(function(){
				el.style.webkitTransform='rotateZ(360deg)';
				},20);
		 
		 _k++;
		 
		 if( _k >  row*row-1){
			 clearInterval(interId);
			 var els=document.getElementsByClassName('b'); 
			 for(var i=0;i<els.length;i++){
			els[i].textContent=_lei[i];
			  els[i].onmousedown =dianji;
			 }
		}
},30);
	
	
	
	dianji= function (e){
				this.style.fontSize = '24px';
				 this.style.backgroundImage="url('./image/h.jpg')";
				 if(e.which==1){
				 if( this.textContent== 'lei'){
                     this.style.webkitTransform='rotateZ(720deg)';
                            var leis = document.getElementsByClassName('lei');
                     for(var i=0;i<leis.length;i++){
			leis[i].style.fontSize = '24px';
                         leis[i].style.webkitTransform='rotateZ(720deg)';
                         leis[i].style.backgroundImage="url('./image/h.jpg')";
                     }
                     setTimeout(function(){
					 zhezhao.style.display='block';
					 zhezhao.style.lineHeight=88*row+'px';
					 zai.onclick=function(){
						window.location.reload();
						 }
					 } ,700);
					 }
			}	
			 if(e.which == 3){
				 if( this.textContent != 'lei'){
                             zhezhao.style.display='block';
					 		zhezhao.style.lineHeight=88*row+'px';
					 		zai.onclick=function(){
							window.location.reload();
                        }
						
				}
				else{
                           
                            this.textContent = '雷';
                            this.setAttribute('class','b');
                            var leis = document.getElementsByClassName('lei');
                            if( leis.length ==0){
                                 zhezhao1.style.display='block';
								 zhezhao1.style.lineHeight=88*row+'px';
								zai1.onclick=function(){
								window.location.reload();
                                
                            }
                        }
				}
	}
	}
			
 
document.oncontextmenu=function(){
	return false;
	}
 }
