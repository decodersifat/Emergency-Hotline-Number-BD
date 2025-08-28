var callCredit = 100;
var deduductCallCredit = 20;
var copyCount = 0;
var heartCount = 0;
var title ='hi';
var Contactnumber = '';
var heartbtnList = document.querySelectorAll('#card-heart-icon');
var heartText = Number(document.getElementById('heart-count').innerText);
var currentDate = Date.now();


var copyCountText = Number(document.getElementById('copy-btn-text').innerText);
document.getElementById('copy-btn-text').innerText = copyCount;


heartbtnList.forEach(function (heartbtn) {
    heartbtn.addEventListener('click', function () {
        heartCount++;

        document.getElementById('heart-count').innerText = heartCount;
    });
});

var copybtnList = document.querySelectorAll('#card-copy-btn');
copybtnList.forEach(function (copybtn, index) {
    copybtn.addEventListener('click', function () {
        copyCount++;
        document.getElementById('copy-btn-text').innerText = copyCount;
        
    });
});


document.getElementById('callCredit').innerText = callCredit;
var frontend_call_credit = callCredit;


var callbtn = document.querySelectorAll('#card-call-btn');

callbtn.forEach(function (singlebtn, index) {

    singlebtn.addEventListener('click', function () {

        if (frontend_call_credit >= deduductCallCredit) {

            frontend_call_credit -= deduductCallCredit;
            document.getElementById('callCredit').innerText = frontend_call_credit;


            title = document.querySelectorAll('#title')[index].innerText;
            Contactnumber = document.querySelectorAll('#number')[index].innerText;

            // document.querySelectorAll('#title').forEach(function(singletitle){
            //    title =  singletitle.innerText;
            //    console.log( singletitle.innerText);
            //    console.log(title)
            // });

            // document.querySelectorAll('#number').forEach(function(signlenumber){
            //    Contactnumber =  signlenumber.innerText;
            // });

            console.log(title);
            console.log(Contactnumber);

            historys(title, Contactnumber);


        } else {
            alert('You don\'t have enough credit left!');
        }
    });
});








var historyField = document.getElementById('historyItem');


function historys(title, number){

    const now = new Date();

    const time = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
});

    
    const historydiv = document.createElement('div');
    historydiv.innerHTML = `
    <div class="flex mt-2 rounded-lg items-center py-3 px-3 justify-between bg-gray-100">
                    <div>
                        <h1 class="font-bold text-sm">${ title }</h1>
                        <p class="text-sm">${ number }</p>
                    </div>
                    <div>
                        <p class="text-sm">${ time }</p>
                    </div>
    `

    historyField.appendChild(historydiv);

}


document.getElementById('clearbtn').addEventListener('click', function(){
    document.getElementById('historyItem').innerHTML = '';
})




