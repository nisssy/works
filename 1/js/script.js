$(function(){
/*全サイズ共通
/*==================================================================*/
/*==================================================================*/
/*==================================================================*/
/*==================================================================*/
    /*共通のオブジェクト*/
        /*Header*/
        /*============================*/
            /*=ナビゲーショントグル=*/
            //クリックイベント
                $('#BtnToggle-Nav').on('click', function(){
                    //スライド
                    $('.c-navbar__list').stop().slideToggle(500);
                });
        //Top
            let $Top = $('.p-Top'),
                $Banner = $Top.find('.p-Banner'),
                $Top_Text = $Top.find('.p-top__text');
        //Service
        let $Service = $('.p-Service');
        //Purchase
        let $Purchase = $('.p-Purchase'),
            $Bar_left = $Purchase.find('.p-purchase__bar.u-left'),
            $Bar_right = $Purchase.find('.p-purchase__bar.u-right');
        //Identity
        let $Identity = $('.p-Identity');
        //Access
        let $Access = $('.p-Access');
        //Contact
        let $Contact = $('.p-Contact');

    /*共通の変数*/
        let distanceTop;

    /*共通の関数*/
        /*
        //フロートイン
        */

            /*
            //フロートイン
            */
            function floatIn(obj) {
                obj.addClass('is-visible');
            }

            /*
            //スクロールを計測する関数
            */
            function scrollDis() {
                distanceTop = $(window).scrollTop();
            }
            scrollDis();
            
            /*
            //イベント設定
            */
            $(window).scroll(function(){
                scrollDis();
                //Topに紐付け
                    if(distanceTop >= 0){
                        floatIn($Banner);
                        $Banner.animate({'left':'0'});
                    //テキスト
                        setTimeout(function(){
                            floatIn($Top_Text);
                        },1000)
                    }
                //Service
                    if(distanceTop >= $Service.offset().top -200){
                        floatIn($Service);
                    }
                //Purchase
                    if(distanceTop >= $Purchase.offset().top -200){
                        floatIn($Purchase);
                    }
                //Identity
                    if(distanceTop >= $Identity.offset().top -200){
                        floatIn($Identity);
                    }
                //Access
                    if(distanceTop >= $Access.offset().top -200){
                        floatIn($Access);
                    }
                //Contact
                    if(distanceTop >= $Contact.offset().top -200){
                        floatIn($Contact);
                    }
            });

    /*Top*/
    /*============================*/
        /*スライドイン*/
        //バナー
            $Banner.css("left","-100%");
    /*Service*/
    /*============================*/
    $Service.each(function(){
        /*タブ*/
            //オブジェクト
            $Slides = $Service.find('.c-tab__slide');
            $Buttons = $Service.find('.c-tab__buttons');

            //関数
                /*
                // 
                */


            //初期化
                //スライドを全て消す
                    $Slides.hide();
                //一つ目だけを表示
                    $Slides.eq(0).show();
                //ボタンにcurrentクラスを
                    $Buttons.find('a').eq(0).addClass('current');

            //クリックイベント
                $Buttons.on('click','a', function(e){
                    e.preventDefault();
                    let $this = $(this);
                    if(!($this.hasClass('current'))){
                    //全てのスライドを消す
                        $Slides.fadeOut(1000);
                    //クリックされたボタンのスライドを表示
                        $($this.attr('href')).fadeIn(1000);
                    //currentを付け替える
                        $Buttons.find('a').removeClass('current');
                        $this.addClass('current');
                    }
                    });
    });
    

/*スマホサイズ
/*==================================================================*/
/*==================================================================*/
/*==================================================================*/
/*==================================================================*/
////////////////////////////////メディアクエリstart
var mql = window.matchMedia('screen and (max-width: 720px)');
function checkBreakPoint(mql) {
    if (mql.matches) {
////////////////////////////////メディアクエリ前半

    /*Purchase*/
    /*============================*/
        /*=繋ぐ線=*///ペンド
        //クリックイベント
        

    /*Purchase*/
    /*============================*/
    $Purchase.each(function(){
        /* バー */

        //オブジェクト
            let $rightBar = $Purchase.find('.p-purchase__bar.u-right'),
                $leftBar = $Purchase.find('.p-purchase__bar.u-left');

        //関数
            /*
            //スライドイン
            */

        //初期化
            $rightBar.css("right","-100%");
            $leftBar.css("left","-100%");

        //タイミング
        $(window).scroll(function(){
            scrollDis();
            if(distanceTop >= $Purchase.offset().top -200){
                $rightBar.stop().animate({"right":"-10%"}, 'linear');
                $leftBar.stop().animate({"left":"-10%"}, 'linear');
            }
        });
    });


/*PCサイズ
/*==================================================================*/
/*==================================================================*/
/*==================================================================*/
/*==================================================================*/
    /*Purchase*/
        /*============================*/
        $Purchase.each(function(){
            /* バー */

            //オブジェクト
                let $rightBar = $Purchase.find('.p-purchase__bar.u-right'),
                    $leftBar = $Purchase.find('.p-purchase__bar.u-left');

            //関数
                /*
                //スライドイン
                */

            //初期化
                $rightBar.css("right","-100%");
                $leftBar.css("left","-100%");

            //タイミング
            $(window).scroll(function(){
                scrollDis();
                if(distanceTop >= $Purchase.offset().top -300){
                    $rightBar.stop().animate({"right":"-30%"}, 1000, 'linear');
                    $leftBar.stop().animate({"left":"-30%"}, 1000, 'linear');
                }
            });
        });


////////////////////////////////メディアクエリ後半
}}
// ブレイクポイントの瞬間に発火
mql.addEventListener('change',checkBreakPoint);

// 初回チェック
checkBreakPoint(mql);
////////////////////////////////メディアクエリ終わり

});