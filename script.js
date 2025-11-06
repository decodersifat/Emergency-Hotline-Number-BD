var callCredit = 100;
var deduductCallCredit = 20;
var copyCount = 0;
var heartCount = 0;

// Cache DOM elements to avoid repeated queries
var heartbtnList = document.querySelectorAll('#card-heart-icon');
var heartCountElement = document.getElementById('heart-count');
var copyBtnTextElement = document.getElementById('copy-btn-text');
var callCreditElement = document.getElementById('callCredit');
var historyField = document.getElementById('historyItem');
var titleElements = document.querySelectorAll('#title');
var numberElements = document.querySelectorAll('#number');

// Initialize copy count display
copyBtnTextElement.innerText = copyCount;

heartbtnList.forEach(function (heartbtn) {
    heartbtn.addEventListener('click', function () {
        heartCount++;
        heartCountElement.innerText = heartCount;
    });
});

var copybtnList = document.querySelectorAll('#card-copy-btn');
copybtnList.forEach(function (copybtn, index) {
    copybtn.addEventListener('click', function () {
        copyCount++;
        copyBtnTextElement.innerText = copyCount;
        var copyHotline = numberElements[index].innerText;
        var copyHotlineTitle = titleElements[index].innerText;
        var copyString = `✅ Copied ${copyHotlineTitle} : ${copyHotline} Hotline number`;
        navigator.clipboard.writeText(copyHotline);
        alert(copyString);
    });
});

callCreditElement.innerText = callCredit;
var frontend_call_credit = callCredit;

var callbtn = document.querySelectorAll('#card-call-btn');
callbtn.forEach(function (singlebtn, index) {
    singlebtn.addEventListener('click', function () {
        if (frontend_call_credit >= deduductCallCredit) {
            frontend_call_credit -= deduductCallCredit;
            callCredit = frontend_call_credit;
            callCreditElement.innerText = frontend_call_credit;

            var title = titleElements[index].innerText;
            var Contactnumber = numberElements[index].innerText;

            alert(`Calling ${title} : ${Contactnumber}`);
            historys(title, Contactnumber);
        } else {
            alert('❌ You don\'t have enough credit left! Please buy credit to use this feature.');
        }
    });
});

function historys(title, number) {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });

    const historydiv = document.createElement('div');
    historydiv.className = 'flex mt-2 rounded-lg items-center py-3 px-3 justify-between bg-gray-100';
    
    const leftDiv = document.createElement('div');
    const titleElement = document.createElement('h1');
    titleElement.className = 'font-bold text-sm';
    titleElement.textContent = title;
    const numberElement = document.createElement('p');
    numberElement.className = 'text-sm';
    numberElement.textContent = number;
    leftDiv.appendChild(titleElement);
    leftDiv.appendChild(numberElement);
    
    const rightDiv = document.createElement('div');
    const timeElement = document.createElement('p');
    timeElement.className = 'text-sm';
    timeElement.textContent = time;
    rightDiv.appendChild(timeElement);
    
    historydiv.appendChild(leftDiv);
    historydiv.appendChild(rightDiv);

    historyField.appendChild(historydiv);
}

document.getElementById('clearbtn').addEventListener('click', function () {
    historyField.innerHTML = '';
    if (Number(callCreditElement.innerText) === 0) {
        alert('🪙 You got 40 Credit as a bonus for Clearing the history !!!');
        callCredit += 40;
        frontend_call_credit = callCredit;
        callCreditElement.innerText = callCredit;
    }
});