let count = 0;

function increaseCount() {
    count++;

    displayCount();
}

function displayCount() {
    const countDom = document.getElementById('countDisplay');

    countDom.innerHTML = count;
    checkCountValue();
}

function checkCountValue() {
    const messageDom = document.getElementById('message');

    if(count === 10) {
        messageDom.innerHTML = "Your Instagram post gained 10 followers! Congratulations!";
    } else if(count === 20) {
        messageDom.innerHTML = "Your Instagram post gained 20 followers! Keep it up!";
    }
}

function resetCount() {
    const countDom = document.getElementById('countDisplay');
    const messageDom = document.getElementById('message');
    count = 0;

    countDom.innerHTML = count;
    messageDom.innerHTML = "";
    alert("The Followers count has been reset!!!")
}