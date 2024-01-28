function sendSms(smsText){
    let smsCount = Math.ceil(smsText.length / 60);
    console.log(`You need ${smsCount} ${smsCount > 1 ? 'sms' : 'sms'} to send text - ${smsText}`);
}

sendSms("This package is native ESM and no longer provides a CommonJS export.")