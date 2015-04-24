window.onload= function(){
//for(var i = 0;i< bs.length;i++){
//		
//		/*if( Math.random() > 0.8){
//			bs[i].textContent ='1';
//			}else{
//			bs[i].textContent ='0';
//			}*/
//			bs[i].textContent=(Math.random()>0.8)?'1':'0';
//			bs[i].onclick = function(){
//			this.style.background= 'red';
//			if( this.textContent== '1'){
//				alert('game over!!!');
//				}
//			}
//		}	
var lei=[
		 [0,0,1,0,0,0,0,0],
		 [0,0,0,0,0,0,1,0],
		 [0,0,0,0,1,0,0,0],
		 [0,0,0,0,0,1,0,0],
		 [0,0,0,1,0,0,0,0],
		 [0,0,0,0,0,0,0,1],
		 [0,1,0,0,0,0,0,0],
		 [1,0,0,0,0,0,0,0]
		 ];
var new_arr=[];
for(var i=0;i<8;i++){
	new_arr[i]=[];
	for(var j=0;j<8;j++){
		if(lei[i][j]==0){
		var d1=(j>0)?lei[i][j-1]:0;
		var d2=(j<7)?lei[i][j+1]:0;
		
		var d3=(i>0 && j>0)?lei[i-1][j-1]:0;
		var d4=(i>0)?lei[i-1][j]:0;
		var d5=(i>0 && j<7)?lei[i-1][j+1]:0;
		
		var d6=(i<7 && j>0)?lei[i+1][j-1]:0;
		var d7=(i<7)?lei[i+1][j]:0;
		var d8=(i<7 && j<7)?lei[i+1][j+1]:0;
		
		var tip =d1+d2+d3+d4+d5+d6+d7+d8;
	new_arr[i].push(tip);	
	}
	else{
		new_arr[i].push('lei');
		}
	}
}
var _lei=[];
for(var i=0;i<8;i++){
for(var j=0;j<8;j++){
	_lei.push(new_arr[i][j]);
	}	
}
	var els=document.getElementsByClassName('b');
	for(var i=0;i < els.length;i++){
		els[i].textContent=_lei[i];
		els[i].onclick = function(){
			this.style.background= 'red';
		if( this.textContent== 'lei'){
			alert('game over!!!');
			}
		}
	}
}