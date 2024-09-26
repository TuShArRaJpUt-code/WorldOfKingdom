function navigationToSecond() {
    const username = document.getElementById("username").value;
    if (username) {
        window.location.href = `pop.html?name=${encodeURIComponent(username)}`;
    } else {
        alert("Please enter your name.");
    }
}