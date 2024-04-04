document.getElementById('tipCalculatorForm').onchange = function(){
    if(Number(document.getElementById('billTotalInput').value) >= 0)
    {
    var bill = Number(document.getElementById('billTotalInput').value);
    var tip = document.getElementById('tipRangeInput').value;
    document.getElementById('tipOutputText').innerHTML = `${tip}%`;
    var tipValue = bill * (tip/100);
    var finalBill = bill + tipValue;
    var tipAmount = document.getElementById('tipAmountOutput');
    var totalBillWithTip = document.getElementById('totalBillWithTipOutput');
    tipAmount.value = tipValue.toFixed(2);
    totalBillWithTip.value = finalBill.toFixed(2);
    }
    else
    {
    alert("Please enter valid amount");
    }
}
