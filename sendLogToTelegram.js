function sendLogToTelegram()
{
  // Telegram bot details
  const telegramToken = "<Access Token>";
  const chatId = "<chip id>";               
  
      // to check chip ID of telegram bot
      // https://api.telegram.org/bot$Access Token$/getUpdates
  
  // Get the spreadsheet data
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();
  
  // Prepare the log message from the last row
  const lastRow = data[data.length - 1];
  const timestamp = lastRow[0];
  const username = lastRow[1];
  const content = lastRow[2];
  const link = lastRow[3];
  
  const message = `📋 របាយការណ៍បានពិនិត្យ / 审查报告:\n\n` +
                  `🕒 ម៉ោង/时间: ${timestamp}\n` +
                  `👤 ឈ្មោះ/名字: ${username}\n` +
                  `📄 ភេទ/性别: ${content}\n` +
                  `🔗 រូបភាព/照片: ${link}`;
  
  // Send the message to Telegram
  const url = `https://api.telegram.org/bot${telegramToken}/sendMessage`;
  const payload = {
    chat_id: chatId,
    text: message
  };
  
  const options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify(payload)
  };
  
  UrlFetchApp.fetch(url, options);
}
