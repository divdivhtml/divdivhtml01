jQuery(function($) {
	//iframeの大きさを最大化（開閉なし）
	$(document).ready(function(){
		$('.js-iframePreOpen').load(function(){
			$(this).height(this.contentWindow.document.documentElement.scrollHeight);
		});
		$('.js-iframePreOpen').triggerHandler('load');
	});
	
	//開閉リンクでiframeのheightを調整する
	$('.js-iframeOpen').each(function(){
		$('.js-iframeOpen iframe').load(function(){
			//iframeのオブジェクトを作成しておく
			var $iframe = this;
			var iframeOpenHeight = $iframe.contentWindow.document.documentElement.scrollHeight;		//開いたときのheight値
			var iframeCloseHeight = $($iframe).contents().find('.js-markUp-sample:eq(0)').height() + 20;	//閉じたときのheight値
			//ロード時の初期値は閉じたときの値をセット
			$($iframe).height(iframeCloseHeight);
			//操作系（.js-iframeBtn）クリック時対応
			$($iframe).next('p').children('.js-iframeBtn').click(function(e){
				//a要素の動きを止める
				e.preventDefault();
				
				if($(this).hasClass('js-iframeOpenBtn')){			//「この作例のコードを見る」をクリック
					//高さを広げる（アニメーション）
					$($iframe).animate({
						'height': iframeOpenHeight + 'px'
					},'slow');
					//「この作例のコードを見る」→「この作例のコードを隠す」に切り替え
					$(this).hide();
					$(this).next().show();
				}else if($(this).hasClass('js-iframeCloseBtn')){	//「この作例のコードを隠す」をクリック
					//高さを狭める（アニメーション）
					$($iframe).animate({
						'height': iframeCloseHeight + 'px'
					},'slow');
					//「この作例のコードを隠す」→「この作例のコードを見る」に切り替え
					$(this).hide();
					$(this).prev().show();
				}
			});
		});
		//操作系を追加
		$(this).append('<p class="wp-iframeOpen_link"><a class="js-iframeOpenBtn js-iframeBtn" href="#">この作例のコードを見る</a><a class="js-iframeCloseBtn js-iframeBtn" href="#" style="display:none;">この作例のコードを隠す</a></p>');
	});
});