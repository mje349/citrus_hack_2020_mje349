chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendresponse)
{
    console.log(message.txt);
    let input = document.getElementsByTagName("input");
    for (elt of input)
    {
        elt.style['background-color'] = '#616f39';
    }
}