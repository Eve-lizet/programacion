function loguear()
{
    let user= document.getElementById("usuario").value;
    let pass= document.getElementById("clave").value;

    if (user=="HP" && pass=="12345")
        {
            window.location="FORMULARIO3.HTML";
        }
        else 
        {
            alert("datos incorrectos")
        }

}