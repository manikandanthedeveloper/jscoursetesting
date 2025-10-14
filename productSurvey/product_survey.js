const submitBtnDom = document.getElementById('submitBtn');

submitBtnDom.addEventListener('click', submitForm);

function submitForm() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedbackText = document.getElementById('feedbackText').value
    const experinceText = document.getElementById('experince').value

    const userNameEle = document.getElementById('userName');
    const userAgeEle = document.getElementById('userAge');
    const userEmailEle = document.getElementById('userEmail');
    const userJobEle = document.getElementById('userJob');
    const userDesignationEle = document.getElementById('userDesignation');
    const userProductChoiceEle = document.getElementById('userProductChoice');
    const userFeedbackEle = document.getElementById('userFeedback');
    const userInfoEle = document.getElementById('userInfo');
    const userExperinceEle = document.getElementById('userExperince');

    userNameEle.innerHTML = name;
    userAgeEle.innerHTML = age;
    userEmailEle.innerHTML = email;
    userJobEle.innerHTML = job;
    userDesignationEle.innerHTML = designation;
    userProductChoiceEle.innerHTML = productType;
    userFeedbackEle.innerHTML = feedbackText;
    userExperinceEle.innerHTML = experinceText;

    userInfoEle.style.display = 'block';

}