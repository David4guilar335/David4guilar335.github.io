function funcionControles() {
    let varCadena = "Detalle de los controles:";
    // Acceso al Formulario
    let varForm = document.forms["frmControles"];
    // Acceso a los controles
    let varRadio = varForm.elements["groupRadio"];
    varCadena += "\n - Radio: " + varRadio.value;

    let varCheck = varForm.elements["groupCheck"];
    varCadena += "\n - Check: " + varCheck.value;

    let varBasic = varForm.elements["selectBasic"];
    varCadena += "\n - Basic: " + varBasic.value;

    let varMultiple = varForm.elements["selectMultiple"];
    varCadena += "\n - Multiple: " + varMultiple.value;

    // Otros controles
    let varFile = varForm.elements["varFile"];
    varCadena += "\n - Archivo: " + varFile.value;

    let varColor = varForm.elements["varColor"];
    varCadena += "\n - Color: " + varColor.value;

    let varDate = varForm.elements["varDate"];
    varCadena += "\n - Fecha: " + varDate.value;

    let varTime = varForm.elements["varTime"];
    varCadena += "\n - Hora: " + varTime.value;

    let varWeek = varForm.elements["varWeek"];
    varCadena += "\n - Semana: " + varWeek.value;

    let varMonth = varForm.elements["varMonth"];
    varCadena += "\n - Mes: " + varMonth.value;

    let number = varForm.elements["number"];
    varCadena += "\n - Número: " + number.value;

    alert(varCadena);
}