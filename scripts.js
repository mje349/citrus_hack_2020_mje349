chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendresponse)
{
    console.log(message.txt);
    let input = document.getElementsByTagName("input");
    for (elt of input)
    {
        elt.style['background-color'] = '#7BCC70';
    }
    let inject = document.getElementsByTagName("sql-injection");
    for (elt of inject)
    {
        elt.style['background-color'] = '#7BCC70';
    }

}