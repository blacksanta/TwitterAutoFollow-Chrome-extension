


	//何人フォローするか確認
	count = window.prompt("何人フォローするか数字を入力してください", 10);
	count = parseInt(count);

	//乱数生成
		function random(){
		var rand = Math.floor(Math.random() * 20) + 1;
		var r = rand;
		return r;
	}

	//フォローする時間間隔
	function interval(){
		var rand = random();
		var intervalId = setInterval(function(){
			rand--;
			second(rand);
			if(rand <= 0){
				clearInterval(intervalId);
				intervalNum++;
				manager();
			}
		}, 1000);
	}



	//結果を出力するViewの挿入
	$('body').append('<div id="follow_status" style="position: fixed; width: 200px; height: 72px; padding: 14px; left: 14px; bottom: 14px; background-color:rgba(0,0,0,0.8); color:#fefefe; line-height: 28px; font-size: 12px; border-radius: 5px; z-index: 999999;"><div id="follow_status_second"></div><div id="follow_status_Count"></div></div>');
	//初期表示用
	var input = count;
	$('#follow_status_second').html('フォロー間隔：'+'0秒</br>');
	$('#follow_status_Count').html('フォロー数：'+'0/'+input+'<div id="follow_status_copy" style="text-align: right;"><a href="http://kei.b-u-d.info/" target="_blank" style="color: #efefef; text-decoration: none;">powerd by けい</a></div>');
	//フォローする時間間隔を表示
	var second = function(s){
		$('#follow_status_second').html('フォロー間隔：'+s+'秒</br>');
	}
	//途中経過を表示するメソッド（目標,実際のフォロー
	var log = function(c, f) {
		$('#follow_status_Count').html('フォロー数：'+f+'/'+c+'<div id="follow_status_copy" style="text-align: right;"><a href="http://kei.b-u-d.info/" target="_blank" style="color: #efefef; text-decoration: none;">powerd by けい</a></div>');
	}

	// （旧）↓ フォローボタンに指定されているclassが無くなっている
	// var $followElem = $('js-action-unfollow');
	// （新）↓最新のclassを指定しなおす。あと".js-follow-btn"だけだと一度フォローした方も対象になるため親のclassも指定

	var $followElem = $('.not-following .js-follow-btn');
//	var followElemCount = $followElem.length;

	var currentNum = 0;
	var followCount= 0;
	var intervalNum=0;

	interval();

	var manager = function() {
//		if (currentNum < followElemCount) {
		if (currentNum < count) {
			performer($followElem.eq(currentNum));
			currentNum += 1;
			if(intervalNum < count){
				interval();
			}else{
				alert(followCount + '件フォロー完了しました！');
			}
		}
	};

	var performer = function($elem) {
		$elem.trigger('click');
		followCount++;
		log(count, followCount);
	};






