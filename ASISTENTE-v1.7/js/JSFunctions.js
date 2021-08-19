var proyectName = "Proyecto Hodor v1.7";
var autores = "Autores: German Degano y Mariano Méstola"
var desarrollador = "Software desarrollado por Guillermo Picardi"
var msgPsw = "Debe contener al menos un número, una letra mayúscula, una letra  minúscula y 8 caracteres como mínimo"

//Devuelve un str completado con cero para meses. 
//Ej: 10 -> 10
//Ej: 2 -> 02
function completarConCero(inValue) {
	if (inValue > 9) return "" + inValue;
	return "0" + inValue;
}

//Devuelve TRUE si el numero pasado es un entero
function isFloat(stValue) {
	if (isNaN(stValue) || stValue.indexOf(" ") != -1) {
		return false;
	}
	else {
		return true;
	}
	return false;
}

//Devuelve TRUE si el numero pasado es un entero
function isInteger(stValue) {
	if (isNaN(stValue) || stValue.indexOf(" ") != -1) {
		return false;
	}
	else {
		if ((stValue % 1) != 0) {
			return false;
		} else { return true; }
	}
	return false;
}



//Devuelve TRUE si el numero pasado es positivo o vac�o
function isPositive(stValue) {
	if (stValue == "") {
		return true;
	}
	var num = Number(stValue);

	if (isNaN(num) || stValue.indexOf(" ") != -1) {
		return false;
	} else if (num.valueOf() < 0) {
		return false;
	}
	if ((num.valueOf() % 1) != 0) {
		return false;
	}
	return true;
}

//Devuelve TRUE si el texto pasado es una hora v�lida
function isTime(stValue) {
	var dtHora;
	if (stValue == "") {
		return true;
	} else if (stValue.length != 5 || stValue.substr(2, 1) != ":") {
		return false;
	} else {
		dtHora = new Date();
		dtHora.setHours(stValue.substr(0, 2))
		dtHora.setMinutes(stValue.substr(3, 2))
		//alert(dtHora.getHours()+":"+dtHora.getMinutes()+"---"+stValue.substr(0,2)+":"+stValue.substr(3,2));
		if (dtHora == null) {
			return false;
		} else if (dtHora.getHours() != stValue.substr(0, 2)) {
			return false;
		} else if (dtHora.getMinutes() != stValue.substr(3, 2)) {
			return false;
		} else if (!(0 <= dtHora.getHours() && dtHora.getHours() <= 23)) {
			return false;
		} else if (!(0 <= dtHora.getMinutes() && dtHora.getMinutes() <= 59)) {
			return false;
		} else {
			return true;
		}
	}
}

//Devuelve TRUE si el texto pasado es una fecha v�lida
function isDate(stValue) {
	var dtFecha;
	if (stValue == "") {
		return true;
	} else if (stValue.length != 10 || stValue.substr(2, 1) != "-" || stValue.substr(5, 1) != "-") {
		return false;
	} else {
		dtFecha = new Date(stValue.substr(6, 4), stValue.substr(3, 2) - 1, stValue.substr(0, 2), 0, 0, 0);
		if (dtFecha == null) {
			return false;
		} else if (dtFecha.getDate() != stValue.substr(0, 2)) {
			return false;
		} else if (dtFecha.getMonth() != stValue.substr(3, 2) - 1) {
			return false;
		} else if (!(dtFecha.getFullYear() > 1900 && dtFecha.getFullYear() < 2050)) {
			return false;
		} else if (Number(stValue.substr(6, 4)) <= 1900) {
			return false;
		} else {
			return true;
		}
	}

	/*	var dtFecha;
	
		if (stValue=="") {
			return true;
		} else if (stValue.length!=10) {
			return false;
		} else {
			dtFecha=new Date(stValue.substr(6,4),stValue.substr(3,2)-1,stValue.substr(0,2));
			if (dtFecha==null) {
				return false;
			} else if (dtFecha.getDate()!=stValue.substr(0,2)) {
				return false;
			} else if (dtFecha.getMonth()!=stValue.substr(3,2)-1) {
				return false;
			} else {
				return true;
			}
		}*/
}

//Devuelve la fecha en formato yyyymmdd
function DBDate(stValue) {
	if (stValue == "") {
		return stValue;
	} else {
		return stValue.substr(6, 4) + stValue.substr(3, 2) + stValue.substr(0, 2)
	}
}

//Devuelve true si no hay comillas simples
function validTextDB(stValue) {
	return stValue.search("\'") == -1;
}

function RTrim(strPala) {
	var tot = strPala.length;
	var j;
	var strReto = "", strReto2 = "";
	var blnYaPaso;

	blnYaPaso = false;
	for (j = tot - 1; j >= 0; j--) {
		if (strPala.substr(j, 1) == " " || strPala.substr(j, 1).charCodeAt(0) == 13 || strPala.substr(j, 1).charCodeAt(0) == 10) {
			if (!blnYaPaso) {
				continue;
			}
		}
		else
			blnYaPaso = true;

		strReto = strReto + strPala.substr(j, 1);
	}


	for (j = tot - 1; j >= 0; j--)
		strReto2 = strReto2 + strReto.substr(j, 1);
	return strReto2;
}
function LTrim(strPala) {
	var tot = strPala.length;
	var j;
	var strReto = "";
	var blnYaPaso;

	blnYaPaso = false;
	for (j = 0; j < tot; j++) {
		if (strPala.substr(j, 1) == " " || strPala.substr(j, 1).charCodeAt(0) == 13 || strPala.substr(j, 1).charCodeAt(0) == 10) {
			if (!blnYaPaso) {
				continue;
			}
		}
		else
			blnYaPaso = true;

		strReto = strReto + strPala.substr(j, 1);
	}
	return strReto;
}

function Trim(strPala) {
	return RTrim(LTrim(strPala));
}

//Toma un string dd-mm-aaaa y devuelve un objeto fecha
function stringAFecha(stValue) {
	var daValue = new Date(stValue.substr(6, 4), stValue.substr(3, 2) - 1, stValue.substr(0, 2));
	//alert(daValue.valueOf());
	return daValue;
}

//Toma un string dd-mm-aaaa y un string mm y devuelve True si los meses coinciden
function esMismoMes(stDate, stMonth) {
	var vaFecha, vaMonth;
	vaFecha = new Number(stDate.substr(3, 2));
	vaMonth = new Number(stMonth);
	//alert("Debug - " + vaFecha + " , " + vaMonth);
	return vaFecha.valueOf() == vaMonth.valueOf()
}

function stringANumero(stValue) {
	var vaValue;
	vaValue = new Number(stValue);
	return vaValue.valueOf();
}

function esMesIgualMenor(stDate, stMonth) {
	var vaFecha, vaMonth;
	vaFecha = new Number(stDate.substr(3, 2));
	vaMonth = new Number(stMonth);
	//alert("Debug - " + vaFecha + " , " + vaMonth);
	return vaFecha.valueOf() <= vaMonth.valueOf()
}

function randomPassword(length) {
	chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
	pass = "";
	for (x = 0; x < length; x++) {
		i = Math.floor(Math.random() * 62);
		pass += chars.charAt(i);
	}
	return pass;
}


function Cancelar(path) {
	window.top.location = path;
}

function CbActivarDisabled(cform) {
	for (i = 1; i < cform.length; i++) {
		if ((cform.item(i).tipo == "FK_OPC" || cform.item(i).tipo == "FK_LARGE") && cform.item(i).disabled == true) {
			cform.item(i).disabled = false;
		}
	}
}

// Validaciones en JavaScript para los distintos tipos de Datos
function Grabar(cform) {
	var i;

	for (i = 1; i < cform.length; i++) {
		if (!cform.item(i).readOnly) {
			if (cform.item(i).tipo == "FK_OPC" && cform.item(i).disabled == false) {

				if (cform.item(i).value == -1 && cform.item(i).requerido == "True") {
					cform.item(i).focus();
					alert("Debe completar la Pregunta " + cform.item(i).orden);
					return;
				}

			}
			if (cform.item(i).tipo == "TIME") {
				if (cform.item(i).value == "" && cform.item(i).requerido == "True") {
					cform.item(i).focus();
					alert("Debe completar la Pregunta " + cform.item(i).orden);
					return;
				} else {
					if (!isTime(cform.item(i).value)) {
						cform.item(i).focus();
						alert("La Hora de la Pregunta " + cform.item(i).orden + " debe tener el formato hh:mm.");
						return;
					}
				}
			}
			if (cform.item(i).tipo == "DATE") {
				if (cform.item(i).value == "" && cform.item(i).requerido == "True") {
					cform.item(i).focus();
					alert("Debe completar la Pregunta " + cform.item(i).orden);
					return;
				} else {
					if (!isDate(cform.item(i).value)) {
						cform.item(i).focus();
						alert("La Fecha de la Pregunta " + cform.item(i).orden + " debe tener el formato DD-MM-AAAA.");
						return;
					}
				}
			}
			if (cform.item(i).tipo == "FLOAT") {
				if (cform.item(i).value == "" && cform.item(i).requerido == "True") {
					cform.item(i).focus();
					alert("Debe completar la Pregunta " + cform.item(i).orden);
					return;
				}
				if (!isFloat(cform.item(i).value)) {

					cform.item(i).focus();
					alert("Debe ingresar un valor num�rico en la Pregunta " + cform.item(i).orden);
					return;
				}

			}
			if (cform.item(i).tipo == "INT") {
				if (cform.item(i).value == "" && cform.item(i).requerido == "True") {
					cform.item(i).focus();
					alert("Debe completar la Pregunta " + cform.item(i).orden);
					return;
				}
				if (!isInteger(cform.item(i).value)) {

					cform.item(i).focus();
					alert("Debe ingresar un n�mero entero en la Pregunta " + cform.item(i).orden);
					return;
				}

			}
			if (cform.item(i).tipo == "NAT") {
				if (cform.item(i).value == "" && cform.item(i).requerido == "True") {
					cform.item(i).focus();
					alert("Debe completar la Pregunta " + cform.item(i).orden);
					return;
				}
				if (!isPositive(cform.item(i).value)) {
					cform.item(i).focus();
					alert("Debe ingresar un n�mero entero positivo en la Pregunta " + cform.item(i).orden);
					return;
				}
			}
			if (cform.item(i).tipo == "TEXT" || cform.item(i).tipo == "LARGETEXT" || cform.item(i).tipo == "FK_LARGE") {
				if (cform.item(i).value == "" && cform.item(i).requerido == "True") {
					if (cform.item(i).tipo == "FK_LARGE") {
						i++;
					}
					cform.item(i).focus();
					alert("Debe completar la Pregunta " + cform.item(i).orden);
					return;
				}
			}
		}
	}
	CbActivarDisabled(cform);
	cform.submit();
}
