/* 广告 */
(function(win,doc){
  var s = doc.createElement("script"), h = doc.getElementsByTagName("head")[0];
  if (!win.alimamatk_show) {
    s.charset = "gbk";
    s.async = true;
    s.src = "https://alimama.alicdn.com/tkapi.js";
    h.insertBefore(s, h.firstChild);
  }
  var o = {
    pid: "mm_96052862_26536335_104462258",/*推广单元ID，用于区分不同的推广渠道*/
    appkey: "",/*通过TOP平台申请的appkey，设置后引导成交会关联appkey*/
    unid: "",/*自定义统计字段*/
    type: "click" /* click 组件的入口标志 （使用click组件必设）*/
  };
  win.alimamatk_onload = win.alimamatk_onload || [];
  win.alimamatk_onload.push(o);
})(window,document);

(function(){
    /* 更改标题 */
    if(location.hostname !== 'cqupt.congm.in') { document.title = '【内网外入】 ' + document.title; }
    if(location.port == '88') {
        var route = document.querySelector("#_cqupt-route");
        route.innerHTML = '您正在使用<br>内网外入备用路线';
        route.style.display = 'inline-block';
        route.addEventListener('click', function(){
            route.style.display = 'none';
        });
    }
    /* 多说 */
    duoshuoQuery = { short_name: "cqupt-inner" };
    /* side-box */
    var title_btn = document.querySelector("#_cqupt-title"),
        discuss_btn = document.querySelector("[data-target='#_cqupt-duosuo']"),
        duosuo = document.querySelector("#_cqupt-duosuo"),
        side = document.querySelector("#_cqupt-side-box");
    var sideTabs = document.querySelectorAll("[data-toggle='sideTab']"),
        sideTabLen = sideTabs.length,
        contentList = document.querySelectorAll("._cqupt-content-item"),
        contentLen = contentList.length;
    side.addEventListener('click', function(e){
        if(!e.target){ return; }
        var eTarget = e.target.getAttribute('data-toggle') == 'sideTab' ? e.target : e.target.parentNode;
        if(eTarget.getAttribute('data-toggle') == 'sideTab'){
            for(var i = 0; i < sideTabLen; i++){
                sideTabs[i].classList.remove('_cqupt-active');
            }
            for(var j = 0; j < contentLen; j++){
                contentList[j].classList.add('_cqupt-hidden');
            }
            var tabTarget = eTarget.getAttribute('data-target');
            if(tabTarget != 'close'){
                eTarget.classList.add('_cqupt-active');
                side.classList.add('_cqupt-active');
                document.querySelector(tabTarget).classList.remove('_cqupt-hidden');
            }else{
                side.classList.remove('_cqupt-active');
            }
        }
    });
    title_btn.onclick = function(){
        document.body.classList.remove('_cqupt-body');
        side.classList.remove('_cqupt-active');
        side.classList.add('_cqupt-close');
    };
    discuss_btn.addEventListener('click', function(){
        var el = document.createElement('div');
        el.setAttribute('data-thread-key', '1');
        el.setAttribute('data-title', '内网外入');
        el.setAttribute('data-url', 'https://cqupt.congm.in');
        DUOSHUO.EmbedThread(el);
        var duosuo_content = duosuo.querySelector("._cqupt-content-bd");
        duosuo_content.replaceChild(el, duosuo_content.lastElementChild);
    });
    // donate.json
    (function(data){
        var html = '<tbody>';
        for(var i = 0; i < data.length; i++){
            html += '<tr>';
            html += '<td>' + data[i].user_id +'</td>';
            html += '<td>' + data[i].user_name +'</td>';
            html += '<td>' + data[i].time +'</td>';
            html += '<td>' + data[i].money +'</td>';
            html += '</tr>';
        }
        html += '</tbody>';
        document.querySelector("._cqupt-donate-list").insertAdjacentHTML("afterbegin", html);
    })(require('../../json/donate'));
})();