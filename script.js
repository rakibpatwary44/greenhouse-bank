// login button evan handler
const loginBtn = document.getElementById ("Login");
loginBtn.addEventListener ("click",function(){
    // console.log("amk click marche")
    const logMin = document.getElementById ('login-area');
    logMin.style.display = "none";
    const TransactionArea = document.getElementById("Transactioon-area");
    TransactionArea.style.display = "block";
});


// withdrew button rvan handler
const dipositBtn = document.getElementById("addDeposit");
 dipositBtn.addEventListener("click",function(){
   // console.log('deposit button click');
   const depositAmount = document.getElementById("depositAmount").value;
   const depositArea = parseFloat(depositAmount);

   //   const currantDeposit = document.getElementById("currantDeposit").innerText;
   //   const currantDepositNumber = parseFloat(currantDeposit);
   //   const totalDopasit = depositArea + currantDepositNumber;
   //  //  console.log(totalDopasit);
   //  document.getElementById('currantDeposit').innerText = totalDopasit ;

   updateSpanText("currantDeposit", depositArea);


  //  const currantBalance = document.getElementById("currantbalance").innerText;
  //  const currantBalanceNumber = parseFloat(currantBalance);
  //  const totalBalance = totalDopasit + currantBalanceNumber;
  //  document.getElementById("currantbalance").innerText = totalBalance;

   updateSpanText("currantbalance", depositArea);

   document.getElementById("depositAmount").value = "";
 })
// withdrew button evan handler
 const withdrawBtn = document.getElementById("addWithdrew");
 withdrawBtn.addEventListener("click",function(){
  const withdrewArea = getInputNumber("withdrewAmount");
  

    updateSpanText("motWhithdrew", withdrewArea);
    updateSpanText("currantbalance", -1 * withdrewArea);

    document.getElementById("withdrewAmount").value="";
 
 })

 function getInputNumber (id){
     const withdrewAmount = document.getElementById(id).value;

     const withdrewArea = parseFloat(withdrewAmount);
      return withdrewArea;


 }
 

 function updateSpanText(id, addDepositt,) {
   const currant = document.getElementById(id).innerText;
   const currantNumber = parseFloat(currant);
   const totalBalance = addDepositt + currantNumber;
   document.getElementById(id).innerText = totalBalance;
 }

 


