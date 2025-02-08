var display=document.getElementById("display");
function perform(input)
{
    display.value += input;
}
function erase()
{
    display.value=" ";
}
function del()
{
    display.value = display.value.slice(0, -1);   
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