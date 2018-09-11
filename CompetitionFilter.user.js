// ==UserScript==
// @name         Competition Filter
// @namespace    Heasleys4hemp.CompetitionFilter
// @version      1.0
// @description  Remove players in Hospital/Travel from competition page
// @author       Heasleys4hemp [1468764]
// @include     *.torn.com/competition.php*
// ==/UserScript==

var arrList = ['Hospital', 'Traveling', 'Federal'];


const observer = new MutationObserver(() => {
    //observing team list div for li's that contain 'hospital' or 'traveling'
    var i=0;
for (; i<arrList.length; i++) {
const remover = $("div.team-list-wrap > ul.competition-list.bottom-round > li:contains('"+arrList[i]+"')");
    remover.hide();
}
});
//set observer to monitor changes in .content-wrapper div on page
const wrapper = document.querySelector('.content-wrapper');
observer.observe(wrapper, { subtree: true, childList: true });
