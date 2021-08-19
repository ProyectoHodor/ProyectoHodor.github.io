
function setColor(id,color){
	document.getElementById(id).style.backgroundColor= color;
}		

function Salir()
{
	if(confirm("Esta ud. seguro que desea salir del sistema?")) 
	{
		window.top.location='logout.asp';
	}
	return false;
}

function Cancelar()
{
	if(confirm("Esta ud. seguro que desea cancelar el ASISTENTE 98? Se perderán todos los cambios."))
	{
		//window.location="main.asp";
		close();
	}
	return false;
}
function CbActivarDisabled()
{
	for(i=1;i<form_asistente_98.length;i++)
	{
		if((form_asistente_98.elements[i].getAttribute('tipo')=="FK_OPC" || form_asistente_98.elements[i].getAttribute('tipo')=="FK_LARGE") && form_asistente_98.elements[i].disabled==true){
			form_asistente_98.elements[i].disabled=false;
		}
	}
}

// Validaciones en JavaScript para los distintos tipos de Datos
function Grabar(bt)
{
	bt.disabled=true;
	var i;
	
	for(i=1;i<form_asistente_98.length;i++)
	{
	  if(form_asistente_98.elements[i].getAttribute('readOnly')==null){
		if(form_asistente_98.elements[i].getAttribute('tipo')=="FK_OPC" && form_asistente_98.elements[i].disabled==false){

			if(form_asistente_98.elements[i].value==-1 && form_asistente_98.elements[i].getAttribute('requerido')=="True")
			{
				form_asistente_98.elements[i].focus();
				alert("Debe completar la Pregunta "+form_asistente_98.elements[i].getAttribute('orden'));
				bt.disabled=false;return false;
			}
			
		}
		if(form_asistente_98.elements[i].getAttribute('tipo')=="FK_LARGE"){

			if(form_asistente_98.elements[i].value==-1 && form_asistente_98.elements[i].getAttribute('requerido')=="True")
			{	
				i=i+3;
				form_asistente_98.elements[i].focus();
				alert("Debe completar la Pregunta "+form_asistente_98.elements[i].getAttribute('orden'));
				bt.disabled=false;return false;
			}
			
		}
		if(form_asistente_98.elements[i].getAttribute('tipo')=="TIME")
		{
			if(form_asistente_98.elements[i].value=="" && form_asistente_98.elements[i].getAttribute('requerido')=="True")
			{
				form_asistente_98.elements[i].focus();
				alert("Debe completar la Pregunta "+ form_asistente_98.elements[i].getAttribute('orden'));
				bt.disabled=false;return false;
			}else {
				if (!isTime(form_asistente_98.elements[i].value)) {
					form_asistente_98.elements[i].focus();
					alert("La Hora de la Pregunta "+ form_asistente_98.elements[i].getAttribute('orden') + " debe tener el formato hh:mm.");
					bt.disabled=false;return false;
				}
			}
		}
		if(form_asistente_98.elements[i].getAttribute('tipo')=="DATE" )
		{
			if(form_asistente_98.elements[i].value=="" && form_asistente_98.elements[i].getAttribute('requerido')=="True")
			{
				form_asistente_98.elements[i].focus();
				alert("Debe completar la Pregunta "+ form_asistente_98.elements[i].getAttribute('orden'));
				bt.disabled=false;return false;
			}else {
				if (!isDate(form_asistente_98.elements[i].value)) {
					form_asistente_98.elements[i].focus();
					alert("La Fecha de la Pregunta "+ form_asistente_98.elements[i].getAttribute('orden') + " debe tener el formato DD-MM-AAAA.");
					bt.disabled=false;return false;
				}
			}
		}
		if(form_asistente_98.elements[i].getAttribute('tipo')=="FLOAT" )
		{
			if(form_asistente_98.elements[i].value=="" && form_asistente_98.elements[i].getAttribute('requerido')=="True")
			{
				form_asistente_98.elements[i].focus();
				alert("Debe completar la Pregunta "+ form_asistente_98.elements[i].getAttribute('orden'));
				bt.disabled=false;return false;
			}
			if (!isFloat(form_asistente_98.elements[i].value)) {
				
				form_asistente_98.elements[i].focus();
				alert("Debe ingresar un valor numérico en la Pregunta "+ form_asistente_98.elements[i].getAttribute('orden') );
				bt.disabled=false;return false;
			}
			
		}
		if(form_asistente_98.elements[i].getAttribute('tipo')=="INT" )
		{
			if(form_asistente_98.elements[i].value=="" && form_asistente_98.elements[i].getAttribute('requerido')=="True")
			{
				form_asistente_98.elements[i].focus();
				alert("Debe completar la Pregunta "+ form_asistente_98.elements[i].getAttribute('orden'));
				bt.disabled=false;return false;
			}
			if (!isInteger(form_asistente_98.elements[i].value)) {
				
				form_asistente_98.elements[i].focus();
				alert("Debe ingresar un número entero en la Pregunta "+ form_asistente_98.elements[i].getAttribute('orden') );
				bt.disabled=false;return false;
			}
			
		}
		if(form_asistente_98.elements[i].getAttribute('tipo')=="NAT" )
		{
			if(form_asistente_98.elements[i].value=="" && form_asistente_98.elements[i].getAttribute('requerido')=="True")
			{
				form_asistente_98.elements[i].focus();
				alert("Debe completar la Pregunta "+ form_asistente_98.elements[i].getAttribute('orden'));
				bt.disabled=false;return false;
			}
			if (!isPositive(form_asistente_98.elements[i].value)) {
				form_asistente_98.elements[i].focus();
				alert("Debe ingresar un número entero positivo en la Pregunta "+ form_asistente_98.elements[i].getAttribute('orden') );
				bt.disabled=false;return false;
			}
		}
		if(form_asistente_98.elements[i].getAttribute('tipo')=="TEXT")
		{
			if(form_asistente_98.elements[i].value=="" && form_asistente_98.elements[i].getAttribute('requerido')=="True")
			{
				form_asistente_98.elements[i].focus();
				alert("Debe completar la Pregunta "+ form_asistente_98.elements[i].getAttribute('orden'));
				bt.disabled=false;return false;
			}
		}
		if(form_asistente_98.elements[i].getAttribute('tipo')=="LARGETEXT" && form_asistente_98.elements[i].disabled==false)
		{
			if(form_asistente_98.elements[i].value=="" && form_asistente_98.elements[i].getAttribute('requerido')=="True")
			{
				form_asistente_98.elements[i].focus();
				alert("Debe completar la Pregunta "+ form_asistente_98.elements[i].getAttribute('orden'));
				bt.disabled=false;return false;
			}
		}
		
	  }				
	}
	CbActivarDisabled();
	form_asistente_98.submit();
}

function AbrirPopUp(id_pregunta,inIndex)
{
	iIndex="";
	if(isInteger(inIndex) && inIndex!="" && inIndex!="0"){
		inIndex="_"+inIndex;
		alert(inIndex);
	}
	//alert('alumnos_option_search.asp?id_pregunta='+id_pregunta+'&numero='+document.getElementById(id_pregunta+'_numero'+inIndex).value+'&opcion='+document.getElementById(id_pregunta+'_opcion'+inIndex).value+'&index='+inIndex);
	window.open('alumnos_option_search.asp?id_pregunta='+id_pregunta+'&numero='+document.getElementById(id_pregunta+'_numero'+inIndex).value+'&opcion='+document.getElementById(id_pregunta+'_opcion'+inIndex).value+'&index='+inIndex,'popup','scrollbars=1,resizable=1,width=620,height=450');
	return false;
}

function resetGrupo(inObj,inCounter){
	var oCellNro,oCellOpc,oCellEmpty;
	
	var myTablaGrupo= document.getElementById(inObj);

	for(i=0;i<myTablaGrupo.rows.length;i++)
	{
		oCellNro = myTablaGrupo.rows[i].cells[0];
		oCellOpc = myTablaGrupo.rows[i].cells[2];
		oCellEmpty = myTablaGrupo.rows[i].cells[3];
		oCellNro.innerText = inCounter;
		//***** SECCION o COMENTARIO ***********
		while(oCellOpc.childNodes.item(1).getAttribute('tipo')=="SECCION" || oCellOpc.childNodes.item(1).getAttribute('tipo')=="COMENTARIO")
		{
			i=i+1;
			oCellNro = myTablaGrupo.rows[i].cells[0];
			oCellOpc = myTablaGrupo.rows[i].cells[2];
			oCellEmpty = myTablaGrupo.rows[i].cells[3];
			oCellNro.innerText = inCounter;
		}
		//***** FK_OPC ***********
		if(oCellOpc.childNodes.item(1).getAttribute('tipo')=="FK_OPC")
		{
			if (oCellOpc.childNodes.item(1).getAttribute('observacion')=="True")
			{
				oCellOpc.childNodes.item(4).name=oCellOpc.childNodes.item(4).name+"_"+inCounter;
				oCellOpc.childNodes.item(4).id=oCellOpc.childNodes.item(4).id+"_"+inCounter;
				oCellOpc.childNodes.item(4).value="";
			}
			oCellOpc.childNodes.item(1).name= oCellOpc.childNodes.item(1).name+"_"+inCounter;
			oCellOpc.childNodes.item(1).id= oCellOpc.childNodes.item(1).id+"_"+inCounter;
		}
		//***** TIME,DATE,FLOAT,INT,NAT,TEXT ***********
		if(oCellOpc.childNodes.item(1).getAttribute('tipo')=="TIME" ||
		oCellOpc.childNodes.item(1).getAttribute('tipo')=="DATE" ||
		oCellOpc.childNodes.item(1).getAttribute('tipo')=="FLOAT" ||
		oCellOpc.childNodes.item(1).getAttribute('tipo')=="INT" ||
		oCellOpc.childNodes.item(1).getAttribute('tipo')=="NAT" ||
		oCellOpc.childNodes.item(1).getAttribute('tipo')=="TEXT")
		{
			if (oCellOpc.childNodes.item(1).getAttribute('observacion')=="True")
			{
				oCellOpc.childNodes.item(4).name=oCellOpc.childNodes.item(4).name+"_"+inCounter;
				oCellOpc.childNodes.item(4).id=oCellOpc.childNodes.item(4).id+"_"+inCounter;
				oCellOpc.childNodes.item(4).value="";
			}
			oCellOpc.childNodes.item(1).name= oCellOpc.childNodes.item(1).name+"_"+inCounter;
			oCellOpc.childNodes.item(1).id= oCellOpc.childNodes.item(1).id+"_"+inCounter;
			oCellOpc.childNodes.item(1).value="";
			oCellOpc.childNodes.item(1).requerido="True";
		}
		//***** FK_LARGE ***********
		if(oCellOpc.childNodes.item(1).getAttribute('tipo')=="FK_LARGE")
		{
			alert(oCellOpc.childNodes.item(8).id);
			if (oCellOpc.childNodes.item(1).getAttribute('observacion')=="True")
			{
				oCellOpc.childNodes.item(12).name=oCellOpc.childNodes.item(12).name+"_"+inCounter;
				oCellOpc.childNodes.item(12).id=oCellOpc.childNodes.item(12).id+"_"+inCounter;
				oCellOpc.childNodes.item(12).value="eee";
				
			}
			var idPregFk=oCellOpc.childNodes.item(1).name;

			oCellOpc.childNodes.item(7).name= oCellOpc.childNodes.item(7).name+"_"+inCounter;
			oCellOpc.childNodes.item(7).id= oCellOpc.childNodes.item(7).name;
			alert(inCounter);
			oCellOpc.childNodes.item(7).onclick=function(){AbrirPopUp(idPregFk,inCounter);};
				
			oCellOpc.childNodes.item(1).name= oCellOpc.childNodes.item(1).name+"_"+inCounter;
			oCellOpc.childNodes.item(1).id= oCellOpc.childNodes.item(1).name;
			oCellOpc.childNodes.item(1).value= "-1";
			oCellOpc.childNodes.item(1).requerido= "True";					
			
			oCellOpc.childNodes.item(3).name= oCellOpc.childNodes.item(3).name+"_"+inCounter;
			oCellOpc.childNodes.item(3).id = oCellOpc.childNodes.item(3).id+"_"+inCounter;
			oCellOpc.childNodes.item(3).value= "";
			
								
			oCellOpc.childNodes.item(5).name= oCellOpc.childNodes.item(5).name+"_"+inCounter;
			oCellOpc.childNodes.item(5).id = oCellOpc.childNodes.item(5).id+"_"+inCounter;
			oCellOpc.childNodes.item(5).value= "";
								
			oCellOpc.childNodes.item(9).name= oCellOpc.childNodes.item(9).name+"_"+inCounter;
			oCellOpc.childNodes.item(9).id = oCellOpc.childNodes.item(9).name;
			oCellOpc.childNodes.item(9).value=". - No Respondió";
		}
	}
	return false;
}		

function addVal(idElem,inVal){
	var tmpHIDD=document.getElementById(idElem);
	tmpHIDD.value=parseInt(tmpHIDD.value)+parseInt(inVal);
	if(tmpHIDD.value<0) tmpHIDD.value=0;
	return tmpHIDD.value;
}

function cloneGrupo(inIdGr){
	var newIdGr=addVal('HIDD_btgrupo_'+inIdGr,1);
	$("#grupo_"+inIdGr).clone(true)
	.attr("id", "grupo_"+inIdGr+"_"+newIdGr)
	.attr("name", "grupo_"+inIdGr+"_"+newIdGr)
	.hide()
	.insertBefore("#btgrupo_"+inIdGr)
	.fadeIn();
	$("#addbtgrupo_"+inIdGr).focus();
	resetGrupo("grupo_"+inIdGr+"_"+newIdGr,newIdGr);
	return false;
}

function removeGrupo(inIdGr){
	$("#grupo_"+ inIdGr+"_"+document.getElementById('HIDD_btgrupo_'+inIdGr).value).remove();
	$("#grupo_"+inIdGr+"_"+addVal('HIDD_btgrupo_'+inIdGr,-1)).focus();
	//$("input[@type=radio][@checked]")
	//$("//a[@ref='nofollow']");
	return false;
}

function parse_query_string(query) {
	var tmpquery = query.substring(1,query.length)
	var vars = tmpquery.split("&");
	var query_string = {};
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		var key = decodeURIComponent(pair[0]);
		var value = decodeURIComponent(pair[1]);
		// If first entry with this name
		if (typeof query_string[key] === "undefined") {
			query_string[key] = decodeURIComponent(value);
			// If second entry with this name
		} else if (typeof query_string[key] === "string") {
			var arr = [query_string[key], decodeURIComponent(value)];
			query_string[key] = arr;
		  // If third or later entry with this name
		} else {
			query_string[key].push(decodeURIComponent(value));
		}
	}
	return query_string;
}		
