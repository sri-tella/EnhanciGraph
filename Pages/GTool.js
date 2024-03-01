
console.log("Script loaded successfully!");

function showHomeContent() {
    var homeTab = document.getElementById('home-tab');
    var bengiTab = document.getElementById('bengi-tab');
    var abcTab = document.getElementById('abc-tab');
    var abcmaxTab = document.getElementById('abc-max-tab');

    homeTab.style.display = 'block';
    bengiTab.style.display = 'none';
    abcTab.style.display = 'none';
    abcmaxTab.style.display = 'none';

}

function showBengiContent() {
    var bengiTab = document.getElementById('bengi-tab');
    var abcTab = document.getElementById('abc-tab');
    var homeTab = document.getElementById('home-tab');
    var abcmaxTab = document.getElementById('abc-max-tab');

    bengiTab.style.display = 'block';
    abcTab.style.display = 'none';
    homeTab.style.display = 'none';
    abcmaxTab.style.display = 'none';
}

function showABCContent() {
    var bengiTab = document.getElementById('bengi-tab');
    var abcTab = document.getElementById('abc-tab');
    var homeTab = document.getElementById('home-tab');
    var abcmaxTab = document.getElementById('abc-max-tab');

    abcTab.style.display = 'block';
    bengiTab.style.display = 'none';
    homeTab.style.display = 'none';
    abcmaxTab.style.display = 'none';
}

function showABCMaxContent() {
    var bengiTab = document.getElementById('bengi-tab');
    var abcTab = document.getElementById('abc-tab');
    var homeTab = document.getElementById('home-tab');
    var abcmaxTab = document.getElementById('abc-max-tab');

    abcmaxTab.style.display = 'block';
    abcTab.style.display = 'none';
    bengiTab.style.display = 'none';
    homeTab.style.display = 'none';

}

