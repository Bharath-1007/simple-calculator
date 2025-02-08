var display=document.getElementById("display");
function perform(input)
{
    display.value += input;
}
function erase()
{
    display.value=" ";
}
function result()
{
    try{
    display.value=eval(display.value);
    }catch(error)
    {
        display.value="Error";
    }
}