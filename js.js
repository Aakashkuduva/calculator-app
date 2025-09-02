const input = document.querySelector("input")

function changenum (evalnum)

{
    input.value += evalnum
}

function delnum()
{
    input.value = ""
}

function clearnum ()
{
    input.value = input.value.slice(0,input.value.length-1)
}

function equalto()
{
    input.value = eval(input.value)
}

