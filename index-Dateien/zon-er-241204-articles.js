(function() {
    //render promo banners into articles

    const bannerRulesWJDW = {
        'zeit-magazin': ['DS','DUV'],
        'campus': ['DS','DUV'],
        'zett': ['DS','DUV'],
        'arbeit': ['DS','DUV'],
        'kultur': ['DS','DUV'],
        'gesellschaft': ['DS','AT'],
        'politik': ['DS','AT'],
        'wirtschaft': ['DS','AT'],
        'sport': ['DS','DUV'],
        'wissen': ['DS','DUV'],
        'gesundheit': ['DS','DUV']
    };

    const bannerRules = {
        'zeit-magazin': ['DS','DUV'],
        'campus': ['DS','DUV'],
        'zett': ['DS','DUV'],
        'arbeit': ['DS','DUV'],
        'kultur': ['DS','DUV'],
        'gesellschaft': ['DS','AT'],
        'politik': ['DS','AT'],
        'wirtschaft': ['DS','AT'],
        'sport': ['DS','DUV'],
        'wissen': ['DS','DUV'],
        'gesundheit': ['DS','DUV']
    };

    let bannerInjection;

    if (
        window.Zeit.view.type &&
        window.Zeit.view.type === "article" &&
        window.location.href.indexOf("zeit.de/angebote") === -1 &&
        window.location.href.indexOf("zeit.de/campus/angebote") === -1 &&
        window.location.href.indexOf("zeit.de/zett/angebote") === -1 &&
        window.location.href.indexOf("zeit.de/arbeit/angebote") === -1 &&
        !document.querySelector(".article--visualarticle")
    ) {
        const executeIndividualArticleHacks = () => {

            //START mama article hack
            if ((window.location.href.indexOf("angriff-israel-hamas-kibbuz-reim-kinder") !== -1 || window.location.href.indexOf("attack-israel-hamas-kibbutz-reim-children-english") !== -1) && document.querySelector("#paywall")){
                function styleMamaArticle(){
                    let css = '.paragraph--faded:before{background-image: linear-gradient(0deg, rgba(169, 168, 132, 1) 0%, rgba(169, 168, 132, 0) 100%);}@media (prefers-color-scheme:light){html:not(.color-scheme-dark) article.article{--z-color-link:#252525;--z-color-20:#252525;--z-color-30:#252525;--z-color-35:#252525;--z-color-45:#252525;--z-color-45--rgb:37,37,37;--z-color-60--beyond:#252525;--z-color-60:#252525;--z-color-70:#252525;--z-color-80:#252525;--z-color-90:#252525;--z-color-100:#fff;--z-color-link:#252525;--z-color-primary:#252525;--z-border-primary:#252525}html.color-scheme-light article.article .akzE:before,html.color-scheme-light article.article .akzN:before{color:#252525}}html.color-scheme-light article.article{--z-color-link:#252525;--z-color-20:#252525;--z-color-30:#252525;--z-color-35:#252525;--z-color-45:#252525;--z-color-45--rgb:37,37,37;--z-color-60--beyond:#252525;--z-color-60:#252525;--z-color-70:#252525;--z-color-80:#252525;--z-color-90:#252525;--z-color-100:#fff;--z-color-link:#252525;--z-color-primary:#252525;--z-border-primary:#252525}body.fullwidth-page .page__content{background-color:#A9A884}picture.header-fullwidth__media-container{display:none}.header-fullwidth__header{background-color:#A9A884}.header-fullwidth__header .header-fullwidth__overlay{color:#252525;text-shadow:none}.header-fullwidth__header .headline__supertitle,.header-fullwidth--classic .header-fullwidth__header:after,.header-fullwidth__overlay .header-fullwidth__arrow{display:none}.header-fullwidth__overlay .headline__title{font-size:16rem;line-height:100%;letter-spacing:0;font-family:"ZeitTiemannSchmal",Georgia,Palatino,"Palatino Linotype",FreeSerif,serif;font-weight:400;color:#fff}.header-fullwidth__overlay .zplus-logo{color:#fff!important}.header-fullwidth__copyright{display:none}.comment-section{background-color:#fff}@media screen and (max-width:768px){.header-fullwidth__overlay .headline__title{font-size:6rem;line-height:280%;letter-spacing:-2px}}';
                    let styleTag = document.createElement('style');
                    styleTag.innerHTML = css;
            
                    document.querySelector('head').appendChild(styleTag);
                }
    
                styleMamaArticle();
            }
            //END mama article hack
    
            //START family headline hack
            if ((window.location.href.indexOf("familienpolitik-ampelkoalition-kindergrundsicherung-kinderrechte-familienstartzeit") !== -1 || window.location.href.indexOf("attack-israel-hamas-kibbutz-reim-children-english") !== -1) && document.querySelector("#paywall")){
                const restyleHeadline =()=>{
                    let hackStyleTag = document.createElement('style');
                    hackStyleTag.innerHTML = '.article-header .article-heading__title {text-decoration: line-through;}';
            
                    document.querySelector('head').appendChild(hackStyleTag);
                }
    
                restyleHeadline();
            }
            //END family headline hack
        }

        executeIndividualArticleHacks();

        var pageElements = document.querySelectorAll(".article-page");

        if (
            window.Zeit.isMobileApp ||
            pageElements[0].getAttribute("data-page-number") == "1"
        ) {
            if (
                document.querySelectorAll(".article-body .paragraph").length > 3
            ) {
                checkBlacklistAndRender(
                    "https://static.zeit.de/embed/global-blacklist"
                );
            }
        }
    }

    function checkBlacklistAndRender(blacklistUrl) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var data = JSON.parse(httpRequest.responseText);
                var currentURL = window.location.href;
                var onBlacklist = data.urls.some(function(url) {
                    return currentURL.indexOf(url) !== -1;
                });

                if (!onBlacklist && !hasEmbedAlready()) {
                    const wjwConfig = "https://static.zeit.de/pembeds/json/was-jetzt-config";
                    async function getWJDWConfig(url) {
                        let response = await fetch(url);
                        let configData = await response.json();  
                        if (configData.hideWidget == 'nein') {
                            whichBanner(bannerRulesWJDW);
                        } else {
                            whichBanner(bannerRules);
                        }
                    }
                    getWJDWConfig(wjwConfig); 
                }
            }
        };
        httpRequest.open("GET", blacklistUrl);
        httpRequest.send();
    }

    function buildContainerWJDW(elem){
        if (elem) {
            var embedContainerSpeech = document.createElement("div"),
            embedContainerPush = document.createElement("div"),
            linkSpeech = "https://static.zeit.de/pembeds/was-jetzt-die-woche/wjw-sprachnachrichten-embed",
            linkPush = "https://static.zeit.de/pembeds/was-jetzt-die-woche/wjw-push-embed";
            embedContainerSpeech.style.clear = "both";
            embedContainerPush.style.clear = "both";

            elem.after(embedContainerSpeech);
            embedContainerSpeech.after(embedContainerPush);

            renderDoubleWJDW(embedContainerSpeech, linkSpeech);
            renderDoubleWJDW(embedContainerPush, linkPush);        
        }
    }    

    function renderDoubleWJDW(container, url){
        if (container) {
            async function getWJDWEmbed(url) {
                let response = await fetch(url);
                let embedHTML = await response.text();  

                if (embedHTML) {
                    container.innerHTML = embedHTML;

                    var scriptTag = container.querySelector('script'),
                    scriptContent = scriptTag.innerHTML;
                    scriptTag.remove();
    
                    var newTag = document.createElement('script');
                    newTag.innerHTML = scriptContent;
    
                    document.querySelector('body').appendChild(newTag);
                }
            }
            getWJDWEmbed(url); 
        }    
    } 
            
    function renderBanner(elem, url) {
        if (elem) {
            var embedContainer = document.createElement("div");
            embedContainer.style.clear = "both";
            embedContainer.classList.add('zoner-injection-' + bannerInjection);

            elem.after(embedContainer);

            async function getEmbed(url) {
                let response = await fetch(url);
                let embedHTML = await response.text();  

                if (embedHTML) {
                    embedContainer.innerHTML = embedHTML;

                    let scriptTag = embedContainer.querySelector('script');
                    if (scriptTag) {
                        scriptContent = scriptTag.innerHTML;
                        scriptTag.remove();
        
                        var newTag = document.createElement('script');
                        newTag.innerHTML = scriptContent;
        
                        document.querySelector('body').appendChild(newTag);
                    }

                    let styles = embedContainer.querySelector('style');
                    if (styles){
                        document.querySelector('head').appendChild(styles);
                    }
                }
            }
            getEmbed(url); 
        }
    }

    function whichBanner(rules){
        //find the banner types for this section
        for (const [section, banners] of Object.entries(rules)) {
            if (section == window.Zeit.view.ressort && banners) {
                let banner;
                //use probability to set which banner will be shown in the case that two are selected for this section
                if (banners.length > 1) {
                    var diceThrow = Math.random();
                    if (diceThrow < 0.5){
                        banner = banners[0];  
                    } else {
                        banner = banners[1];  
                    }    
                } else {
                    banner = banners[0]; 
                }

                bannerInjection = banner;

                console.log('render ' + banner + ' banner into ' + section);
                
                //render the chosen banner
                switch (banner) {
                    case 'Z2X':
                        renderBanner(findGapForEmbed(), "https://static.zeit.de/embed/z2x-einschuss-2024"); 
                        break;
                    case 'PG':
                        renderBanner(findGapForEmbed(), "https://static.zeit.de/embed/plan-d-form-einschuss"); 
                        break;
                    case 'WJDW':
                        buildContainerWJDW(findGapForEmbed());
                        break;
                    case 'AT':
                        renderBanner(findGapForEmbed(), "https://static.zeit.de/embed/ampeltelefon-einschuss");
                        break;
                    case 'DUV':
                        if (!document.querySelector("#paywall")) {
                            renderBanner(findGapForEmbed(), "https://static.zeit.de/embed/duv-content-slider");
                        } else {
                            renderBanner(findGapForEmbed(), "https://static.zeit.de/embed/mycountrytalks/ds-embed-2024-iframe"); 
                        }
                        break;
                    case 'DS':
                        renderBanner(findGapForEmbed(), "https://static.zeit.de/embed/mycountrytalks/ds-embed-2024-iframe"); 
                        break;
                }
            }
        }
    }

    //leaving the old embed classes in in case they are manually included somewhere
    function hasEmbedAlready() {
        if (
            document.querySelector(
                'iframe[src^="https://app.mycountrytalks.org/"]'
            ) ||
            document.querySelector(".ard-container") ||
            document.querySelector(".podfest-signup-wrapper") ||
            document.querySelector(".zoner-wjw-speech-wrapper") ||
            document.querySelector(".zoner-pland-survey") ||
            document.querySelector(".zoner-z2x24-einschuss-banner")  
        ) {
            return true;
        } else {
            return false;
        }
    }

    function findGapForEmbed() {
        var articleWrapper = document.querySelector(
            ".article-page[data-page-number='1']"
        );

        if (articleWrapper) {
            var articleElems = document.querySelectorAll(".article-page > *");
            var lengthCalc = 0;
            for (var i = 0, len = articleElems.length; i < len; i++) {
                if (articleElems[i].classList.contains("paragraph")) {
                    lengthCalc += articleElems[i].innerText.length;

                    if (
                        articleElems[i + 1] !== undefined &&
                        (articleElems[i + 1].classList.contains("paragraph") ||
                            articleElems[i + 1].classList.contains(
                                "article__subheading"
                            )) &&
                        lengthCalc > 1500
                    ) {
                        //if we place before the last para, it must be at least 200 characters long
                        if (
                            i === len - 2 &&
                            articleElems[len - 1].innerText.length >= 200
                        ) {
                            return articleElems[i];
                        }
                        //if the paragraph is long enough and has a paragraph in front of it, it is viable
                        if (
                            articleElems[i].innerText.length >= 200 &&
                            articleElems[i - 1] !== undefined &&
                            articleElems[i - 1].classList.contains("paragraph")
                        ) {
                            //if the paragraph after is long enough or has a para after it, it is viable
                            if (
                                articleElems[i + 1] !== undefined &&
                                (articleElems[i + 1].innerText.length >= 200 ||
                                    (articleElems[i + 2] !== undefined &&
                                        articleElems[i + 2].classList.contains(
                                            "paragraph"
                                        )))
                            ) {
                                return articleElems[i];
                            }
                        }
                    }
                }
            }
        }
    }
    //END generic banner einschuss logic

    //START App Actions einschuss logic
    const insertArticleActionBanner = () => {
        const articleActionsContainer = document.querySelector('.article-actions');
        var isApp = function() {
            return document.body.dataset.isApp;
        };
    
        var appIsEligable = function() {
            var client = window.Zeit.wrapped.client;

            // if client is ios or not set the app is not eligable
            if (client === 'ios') {
                return false;
            } else if (client === 'android') {
                var patchVersion = 0;
                var version = window.Zeit.wrapped.version;

                if (Number(version.major) > 2) {
                    return true;
                } else if (Number(version.major) < 2) {
                    return false;
                }
                if (Number(version.minor) < 5) {
                    return false;
                } else if (Number(version.minor) > 5) {
                    return true;
                }
        
                if (Number(version.patch) < patchVersion) {
                    return false;
                }
                return true;
            }
        };

        // hide comment button for apps with article menu
        if(appIsEligable() && isApp()) {
            let commentButton = articleActionsContainer.querySelector('a[title="Kommentare anzeigen"]');
            if (commentButton) {
                commentButton.style.display = 'none';
            }
        };
    
        if ((!appIsEligable() || !isApp())) {
            console.log('cannot render article actions info');
            return;
        } else if (!localStorage.getItem('zoner-aa-closed')) {
            
            let articleActionInfo = document.createElement('div');
            // make the article action info element which is located in a flex container fullwidth 
    
            articleActionInfo.innerHTML = '<div class="zoner-aa-container"><div class="zoner-aa-header"><div class="zoner-aa-badge-text-container"><div class="zoner-aa-badge-container"><div class="zoner-aa-badge-text">NEU</div></div><div class="zoner-aa-text-block"><span> </span><span class="zoner-aa-highlight-text">Fehlt Ihnen etwas?</span></div></div><div class="zoner-aa-icon-container"><div class="zoner-aa-icon"><div class="zoner-aa-icon-line-1"></div><div class="zoner-aa-icon-line-2"></div></div></div></div><div class="zoner-aa-text-block">Der Kommentar-Link und weitere (neue) Artikelaktionen befinden sich nun im individualisierbaren Artikelmen&#252; am unteren Bildschirmrand.</div></div>';
    
            if (articleActionsContainer) {
                articleActionsContainer.insertAdjacentElement('afterend', articleActionInfo);
            }
    
            let aaStyles = '.zoner-aa-badge-text,.zoner-aa-text-block{font-family:TabletGothic,"Helvetica Neue",Helvetica,Arial,FreeSans,sans-serif;word-wrap:break-word}:root{--zoner-aa-badge-container:#252525;--zoner-aa-badge-text-color:#fff}.zoner-aa-container{width:100%;height:100%;padding:16px;border-radius:4px;border:1px solid #e4e4e4;margin:0 auto;max-width:41.25rem}.zoner-aa-header{display:flex;justify-content:space-between;align-items:center}.zoner-aa-hidden{display:none}.zoner-aa-icon-container{padding:8px;justify-content:center;align-items:center;gap:10px;display:inline-flex;cursor:pointer}.zoner-aa-icon{width:16px;height:16px;position:relative}.zoner-aa-icon-line-1,.zoner-aa-icon-line-2{width:22.63px;height:0;position:absolute;border:1.33px solid #999;top:50%;left:50%;transform-origin:center}.zoner-aa-icon-line-1{transform:translate(-50%,-50%) rotate(45deg)}.zoner-aa-icon-line-2{transform:translate(-50%,-50%) rotate(-45deg)}.zoner-aa-text-block{color:var(--z-color-primary);font-size:16px;font-weight:400;line-height:24px;cursor:pointer}.zoner-aa-highlight-text{font-weight:700}.zoner-aa-badge-container{height:22px;padding-left:8px;padding-right:8px;background:#252525;border-radius:99px;justify-content:center;align-items:center;display:inline-flex}.zoner-aa-badge-text{color:#fff;font-size:12px;font-weight:600;line-height:12px}.zoner-aa-badge-text-container{display:flex;gap:5px;align-items:center;cursor:pointer}@media (prefers-color-scheme:dark){html.color-scheme-dark,html:not(.color-scheme-light){--zoner-aa-badge-container:#fff;--zoner-aa-badge-text-color:#252525}}';
            let styleTagAa = document.createElement('style');
            styleTagAa.innerHTML = aaStyles;
            document.querySelector('head').appendChild(styleTagAa);
    
            // function to close element through click on x
            document.querySelector('.zoner-aa-icon-container').addEventListener('click', function() {
                document.querySelector('.zoner-aa-container').classList.add('zoner-aa-hidden');
                localStorage.setItem('zoner-aa-closed', true);
            });
        }
    };

    insertArticleActionBanner();
    //END App Actions einschuss logic
})();