
console.log("Script loaded successfully!");

function showHomeContent() {
    var homeTab = document.getElementById('home-tab');
    var bengiTab = document.getElementById('bengi-tab');
    var abcTab = document.getElementById('abc-tab');

    homeTab.style.display = 'block';
    bengiTab.style.display = 'none'; // Show the content
    abcTab.style.display = 'none';  // Hide the other content

}

function showBengiContent() {
    var bengiTab = document.getElementById('bengi-tab');
    var abcTab = document.getElementById('abc-tab');
    var homeTab = document.getElementById('home-tab');

    bengiTab.style.display = 'block'; // Show the content
    abcTab.style.display = 'none';  // Hide the other content
    homeTab.style.display = 'none';
}

function showABCContent() {
    var bengiTab = document.getElementById('bengi-tab');
    var abcTab = document.getElementById('abc-tab');
    var homeTab = document.getElementById('home-tab');

    abcTab.style.display = 'block';
    bengiTab.style.display = 'none';
    homeTab.style.display = 'none';
}

