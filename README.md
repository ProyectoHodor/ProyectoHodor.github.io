# ProyectoHodor.github.io
Asistente automatizado para el despacho de expedientes
![hodor juez 2050](https://user-images.githubusercontent.com/89225058/130151337-b5a76b1b-4411-4de3-812d-49f14e6b8531.png)

<!doctype html>
<html lang="en">

<head>
	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="./css/bootstrap.min.css">
	<link rel="stylesheet" href="./css/style.css">
	<script type="text/javascript" src="./js/JSFunctions.js"></script>


	<script id="data" name="data" type="application/json">
		[
		{
		  "caseId": 1,
		  "decition": [
			0
		  ],
		  "isFinal": false,
		  "text": "¿En qué caracter compareció al proceso el peticionario?",
		  "level": 6,
		  "auditDate": "2021-05-31T01:01:28.621Z"
		},
		{
		  "caseId": 2,
		  "decition": [
			0,
			1
		  ],
		  "isFinal": false,
		  "text": "¿El ultimo domicilio que surge de la partida es en CABA?",
		  "level": 7,
		  "auditDate": "2021-05-31T01:01:28.623Z"
		},
		{
		  "caseId": 3,
		  "decition": [
			0,
			1,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Trajo las demás partidas para acreditar \"prima facie\" el vínculo invocado?",
		  "level": 8,
		  "auditDate": "2021-05-31T01:01:28.624Z"
		},
		{
		  "caseId": 4,
		  "decition": [
			0,
			1,
			1,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Hay que inscribir la partida de defunción (se trata del causante con domicilio en CABA pero partida emitida en una provincia)?",
		  "level": 9,
		  "auditDate": "2021-05-31T01:01:28.624Z"
		},
		{
		  "caseId": 5,
		  "decition": [
			0,
			1,
			1,
			1,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Se denuncia el domicilio real del heredero?",
		  "level": 10,
		  "auditDate": "2021-05-31T01:01:28.624Z"
		},
		{
		  "caseId": 6,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Se denuncian otros herederos?",
		  "level": 11,
		  "auditDate": "2021-05-31T01:01:28.624Z"
		},
		{
		  "caseId": 7,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Autorizó a alguien?",
		  "level": 12,
		  "auditDate": "2021-05-31T01:01:28.625Z"
		},
		{
		  "caseId": 8,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Trajo el bono profesional?",
		  "level": 13,
		  "auditDate": "2021-05-31T01:01:28.626Z"
		},
		{
		  "caseId": 9,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Pide que se designe administrador? (Si la designación es genérica, seguir el modelo, si es urgente, consultar)",
		  "level": 14,
		  "auditDate": "2021-05-31T01:01:28.626Z"
		},
		{
		  "caseId": 10,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.626Z"
		},
		{
		  "caseId": 11,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. \r\nAl día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia.\r\n6. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n7. En cuanto a la designación de administración, una vez cumplida la citación de los restantes herederos denunciados en el escrito a despacho, se proveerá lo que corresponda.\r\n8. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante.\r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso.\r\n9. Agréguese el bono profesional acompañado. \r\n10. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.626Z"
		},
		{
		  "caseId": 12,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. \r\nAl día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia.\r\n6. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n7. En cuanto a la designación de administración, una vez cumplida la citación de los restantes herederos denunciados en el escrito a despacho, se proveerá lo que corresponda.\r\n8. Agréguese el bono profesional acompañado. \r\n9. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.627Z"
		},
		{
		  "caseId": 13,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.627Z"
		},
		{
		  "caseId": 14,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			0,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n7. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n8. Agréguese el bono profesional acompañado. \r\n9. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.628Z"
		},
		{
		  "caseId": 15,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			0,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n7. Agréguese el bono profesional acompañado. \r\n8. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.628Z"
		},
		{
		  "caseId": 16,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide que se designe administrador?",
		  "level": 14,
		  "auditDate": "2021-05-31T01:01:28.629Z"
		},
		{
		  "caseId": 17,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			0,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.629Z"
		},
		{
		  "caseId": 18,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			0,
			1,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n7. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n8. En cuanto a la designación de administración, una vez cumplida la citación de los restantes herederos denunciados en el escrito a despacho, se proveerá lo que corresponda.\r\n9. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n10. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.629Z"
		},
		{
		  "caseId": 19,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			0,
			1,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n7. En cuanto a la designación de administración, una vez cumplida la citación de los restantes herederos denunciados en el escrito a despacho, se proveerá lo que corresponda.\r\n8. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n9. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.629Z"
		},
		{
		  "caseId": 20,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			0,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.630Z"
		},
		{
		  "caseId": 21,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			0,
			0,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n7. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n8. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n9. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.630Z"
		},
		{
		  "caseId": 22,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			1,
			0,
			0,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n7. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n8. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.630Z"
		},
		{
		  "caseId": 23,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Trajo el bono profesional?",
		  "level": 13,
		  "auditDate": "2021-05-31T01:01:28.631Z"
		},
		{
		  "caseId": 24,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			0,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Pide que se designe administrador?",
		  "level": 14,
		  "auditDate": "2021-05-31T01:01:28.631Z"
		},
		{
		  "caseId": 25,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			0,
			1,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.631Z"
		},
		{
		  "caseId": 26,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			0,
			1,
			1,
			1
		  ],
		  "isFinal": true,
		  "text": "Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. 1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. 2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. No obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. 3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. 4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. También líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. Hágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). 5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. Notifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. 6. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. 7. En cuanto a la designación de administración, una vez cumplida la citación de los restantes herederos denunciados en el escrito a despacho, se proveerá lo que corresponda. 8. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. De manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. 9. Agréguese el bono profesional acompañado.",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.631Z"
		},
		{
		  "caseId": 27,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			0,
			1,
			1,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. \r\nAl día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia.\r\n6. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n7. En cuanto a la designación de administración, una vez cumplida la citación de los restantes herederos denunciados en el escrito a despacho, se proveerá lo que corresponda.\r\n8. Agréguese el bono profesional acompañado. \r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.632Z"
		},
		{
		  "caseId": 28,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			0,
			1,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.632Z"
		},
		{
		  "caseId": 29,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			0,
			1,
			0,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n7. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n8. Agréguese el bono profesional acompañado. \r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.632Z"
		},
		{
		  "caseId": 30,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			0,
			1,
			0,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n7. Agréguese el bono profesional acompañado. \r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.632Z"
		},
		{
		  "caseId": 31,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			0,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide que se designe administrador?",
		  "level": 14,
		  "auditDate": "2021-05-31T01:01:28.633Z"
		},
		{
		  "caseId": 32,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			0,
			0,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.633Z"
		},
		{
		  "caseId": 33,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			0,
			0,
			1,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n7. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n8. En cuanto a la designación de administración, una vez cumplida la citación de los restantes herederos denunciados en el escrito a despacho, se proveerá lo que corresponda.\r\n9. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.633Z"
		},
		{
		  "caseId": 34,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			0,
			0,
			1,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n7. En cuanto a la designación de administración, una vez cumplida la citación de los restantes herederos denunciados en el escrito a despacho, se proveerá lo que corresponda.\r\n8. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.633Z"
		},
		{
		  "caseId": 35,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			0,
			0,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.634Z"
		},
		{
		  "caseId": 36,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			0,
			0,
			0,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n7. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n8. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.634Z"
		},
		{
		  "caseId": 37,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			1,
			0,
			0,
			0,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n7. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.634Z"
		},
		{
		  "caseId": 38,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Autorizó a alguien?",
		  "level": 12,
		  "auditDate": "2021-05-31T01:01:28.635Z"
		},
		{
		  "caseId": 39,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			0,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Trajo el bono profesional?",
		  "level": 13,
		  "auditDate": "2021-05-31T01:01:28.635Z"
		},
		{
		  "caseId": 40,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			0,
			1,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Pide que se designe administrador?",
		  "level": 14,
		  "auditDate": "2021-05-31T01:01:28.635Z"
		},
		{
		  "caseId": 41,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			0,
			1,
			1,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Cúal es el nombre del propuesto como administrador?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.635Z"
		},
		{
		  "caseId": 42,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			0,
			1,
			1,
			1,
			5555
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.635Z"
		},
		{
		  "caseId": 43,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			0,
			1,
			1,
			1,
			5555,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n6. En atención a lo solicitado, con las facultades comunes de ley y las especiales que se indican en el escrito a despacho, se designa como administrador/a provisional de los bienes del sucesorio a 5555, quien previa aceptación del cargo mediante escrito con su firma y en forma digital, procederá a cumplir su cometido, con cargo de oportuna rendición de cuentas. Hágasele saber que toda suma de dinero que corresponda al causante, deberá ser depositada en el Banco de la Nación Argentina, sucursal Tribunales, a la orden de este Tribunal y como perteneciente a estos autos.\r\nExpídase testimonio del presente y de la aceptación del cargo. En ese sentido y a fin del diligenciamiento, deberá la parte interesada remitir el proyecto de testimonio por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado.\r\n7. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n8. Agréguese el bono profesional de conformidad con el art. 51, inc. “d”, de la ley 23.187.\r\n9. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"\r",
		  "level": 17,
		  "auditDate": "2021-05-31T01:01:28.636Z"
		},
		{
		  "caseId": 44,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			0,
			1,
			1,
			1,
			5555,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n6. En atención a lo solicitado, con las facultades comunes de ley y las especiales que se indican en el escrito a despacho, se designa como administrador/a provisional de los bienes del sucesorio a 5555, quien previa aceptación del cargo mediante escrito con su firma y en forma digital, procederá a cumplir su cometido, con cargo de oportuna rendición de cuentas. Hágasele saber que toda suma de dinero que corresponda al causante, deberá ser depositada en el Banco de la Nación Argentina, sucursal Tribunales, a la orden de este Tribunal y como perteneciente a estos autos.\r\nExpídase testimonio del presente y de la aceptación del cargo. En ese sentido y a fin del diligenciamiento, deberá la parte interesada remitir el proyecto de testimonio por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado.\r\n7. Agréguese el bono profesional de conformidad con el art. 51, inc. “d”, de la ley 23.187.\r\n8. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"\r",
		  "level": 17,
		  "auditDate": "2021-05-31T01:01:28.636Z"
		},
		{
		  "caseId": 45,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			0,
			1,
			1,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.636Z"
		},
		{
		  "caseId": 46,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			0,
			1,
			1,
			0,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n6. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n7. Agréguese el bono profesional de conformidad con el art. 51, inc. “d”, de la ley 23.187.\r\n8. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.636Z"
		},
		{
		  "caseId": 47,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			0,
			1,
			1,
			0,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n6. Agréguese el bono profesional de conformidad con el art. 51, inc. “d”, de la ley 23.187.\r\n7. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.637Z"
		},
		{
		  "caseId": 48,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			0,
			1,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide que se designe administrador?",
		  "level": 14,
		  "auditDate": "2021-05-31T01:01:28.637Z"
		},
		{
		  "caseId": 49,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			0,
			1,
			0,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Cúal es el nombre del propuesto como administrador?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.637Z"
		},
		{
		  "caseId": 50,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			0,
			1,
			0,
			1,
			5555
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.637Z"
		},
		{
		  "caseId": 51,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			0,
			1,
			0,
			1,
			5555,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n6. En atención a lo solicitado, con las facultades comunes de ley y las especiales que se indican en el escrito a despacho, se designa como administrador/a provisional de los bienes del sucesorio a 5555, quien previa aceptación del cargo mediante escrito con su firma y en forma digital, procederá a cumplir su cometido, con cargo de oportuna rendición de cuentas. Hágasele saber que toda suma de dinero que corresponda al causante, deberá ser depositada en el Banco de la Nación Argentina, sucursal Tribunales, a la orden de este Tribunal y como perteneciente a estos autos.\r\nExpídase testimonio del presente y de la aceptación del cargo. En ese sentido y a fin del diligenciamiento, deberá la parte interesada remitir el proyecto de testimonio por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado.\r\n7. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n8. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n9. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"\r",
		  "level": 17,
		  "auditDate": "2021-05-31T01:01:28.638Z"
		},
		{
		  "caseId": 52,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			0,
			1,
			0,
			1,
			5555,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n6. En atención a lo solicitado, con las facultades comunes de ley y las especiales que se indican en el escrito a despacho, se designa como administrador/a provisional de los bienes del sucesorio a 5555, quien previa aceptación del cargo mediante escrito con su firma y en forma digital, procederá a cumplir su cometido, con cargo de oportuna rendición de cuentas. Hágasele saber que toda suma de dinero que corresponda al causante, deberá ser depositada en el Banco de la Nación Argentina, sucursal Tribunales, a la orden de este Tribunal y como perteneciente a estos autos.\r\nExpídase testimonio del presente y de la aceptación del cargo. En ese sentido y a fin del diligenciamiento, deberá la parte interesada remitir el proyecto de testimonio por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado.\r\n7. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n8. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"\r",
		  "level": 17,
		  "auditDate": "2021-05-31T01:01:28.638Z"
		},
		{
		  "caseId": 53,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			0,
			1,
			0,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.638Z"
		},
		{
		  "caseId": 54,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			0,
			1,
			0,
			0,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n6. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n7. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n8. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.639Z"
		},
		{
		  "caseId": 55,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			0,
			1,
			0,
			0,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n6. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n7. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.639Z"
		},
		{
		  "caseId": 56,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			0,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Trajo el bono profesional?",
		  "level": 13,
		  "auditDate": "2021-05-31T01:01:28.639Z"
		},
		{
		  "caseId": 57,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			0,
			0,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Pide que se designe administrador?",
		  "level": 14,
		  "auditDate": "2021-05-31T01:01:28.639Z"
		},
		{
		  "caseId": 58,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			0,
			0,
			1,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Cúal es el nombre del propuesto como administrador?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.640Z"
		},
		{
		  "caseId": 59,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			0,
			0,
			1,
			1,
			5555
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.640Z"
		},
		{
		  "caseId": 60,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			0,
			0,
			1,
			1,
			5555,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n6. En atención a lo solicitado, con las facultades comunes de ley y las especiales que se indican en el escrito a despacho, se designa como administrador/a provisional de los bienes del sucesorio a 5555, quien previa aceptación del cargo mediante escrito con su firma y en forma digital, procederá a cumplir su cometido, con cargo de oportuna rendición de cuentas. Hágasele saber que toda suma de dinero que corresponda al causante, deberá ser depositada en el Banco de la Nación Argentina, sucursal Tribunales, a la orden de este Tribunal y como perteneciente a estos autos.\r\nExpídase testimonio del presente y de la aceptación del cargo. En ese sentido y a fin del diligenciamiento, deberá la parte interesada remitir el proyecto de testimonio por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado.\r\n7. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n8. Agréguese el bono profesional de conformidad con el art. 51, inc. “d”, de la ley 23.187.\r\n\"\r",
		  "level": 17,
		  "auditDate": "2021-05-31T01:01:28.640Z"
		},
		{
		  "caseId": 61,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			0,
			0,
			1,
			1,
			5555,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n6. En atención a lo solicitado, con las facultades comunes de ley y las especiales que se indican en el escrito a despacho, se designa como administrador/a provisional de los bienes del sucesorio a 5555, quien previa aceptación del cargo mediante escrito con su firma y en forma digital, procederá a cumplir su cometido, con cargo de oportuna rendición de cuentas. Hágasele saber que toda suma de dinero que corresponda al causante, deberá ser depositada en el Banco de la Nación Argentina, sucursal Tribunales, a la orden de este Tribunal y como perteneciente a estos autos.\r\nExpídase testimonio del presente y de la aceptación del cargo. En ese sentido y a fin del diligenciamiento, deberá la parte interesada remitir el proyecto de testimonio por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado.\r\n7. Agréguese el bono profesional de conformidad con el art. 51, inc. “d”, de la ley 23.187.\r\n\r\n\"\r",
		  "level": 17,
		  "auditDate": "2021-05-31T01:01:28.640Z"
		},
		{
		  "caseId": 62,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			0,
			0,
			1,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.641Z"
		},
		{
		  "caseId": 63,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			0,
			0,
			1,
			0,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n6. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n7. Agréguese el bono profesional de conformidad con el art. 51, inc. “d”, de la ley 23.187.\r\n\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.641Z"
		},
		{
		  "caseId": 64,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			0,
			0,
			1,
			0,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n6. Agréguese el bono profesional de conformidad con el art. 51, inc. “d”, de la ley 23.187.\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.642Z"
		},
		{
		  "caseId": 65,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			0,
			0,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide que se designe administrador?",
		  "level": 14,
		  "auditDate": "2021-05-31T01:01:28.642Z"
		},
		{
		  "caseId": 66,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			0,
			0,
			0,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Cúal es el nombre del propuesto como administrador?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.642Z"
		},
		{
		  "caseId": 67,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			0,
			0,
			0,
			1,
			5555
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.642Z"
		},
		{
		  "caseId": 68,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			0,
			0,
			0,
			1,
			5555,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n6. En atención a lo solicitado, con las facultades comunes de ley y las especiales que se indican en el escrito a despacho, se designa como administrador/a provisional de los bienes del sucesorio a 5555, quien previa aceptación del cargo mediante escrito con su firma y en forma digital, procederá a cumplir su cometido, con cargo de oportuna rendición de cuentas. Hágasele saber que toda suma de dinero que corresponda al causante, deberá ser depositada en el Banco de la Nación Argentina, sucursal Tribunales, a la orden de este Tribunal y como perteneciente a estos autos.\r\nExpídase testimonio del presente y de la aceptación del cargo. En ese sentido y a fin del diligenciamiento, deberá la parte interesada remitir el proyecto de testimonio por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado.\r\n7. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n8. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n\r\n\"\r",
		  "level": 17,
		  "auditDate": "2021-05-31T01:01:28.643Z"
		},
		{
		  "caseId": 69,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			0,
			0,
			0,
			1,
			5555,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n6. En atención a lo solicitado, con las facultades comunes de ley y las especiales que se indican en el escrito a despacho, se designa como administrador/a provisional de los bienes del sucesorio a 5555, quien previa aceptación del cargo mediante escrito con su firma y en forma digital, procederá a cumplir su cometido, con cargo de oportuna rendición de cuentas. Hágasele saber que toda suma de dinero que corresponda al causante, deberá ser depositada en el Banco de la Nación Argentina, sucursal Tribunales, a la orden de este Tribunal y como perteneciente a estos autos.\r\nExpídase testimonio del presente y de la aceptación del cargo. En ese sentido y a fin del diligenciamiento, deberá la parte interesada remitir el proyecto de testimonio por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado.\r\n7. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n\"\r",
		  "level": 17,
		  "auditDate": "2021-05-31T01:01:28.643Z"
		},
		{
		  "caseId": 70,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			0,
			0,
			0,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.643Z"
		},
		{
		  "caseId": 71,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			0,
			0,
			0,
			0,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n6. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n\r\n\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.643Z"
		},
		{
		  "caseId": 72,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			1,
			0,
			0,
			0,
			0,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n6. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.644Z"
		},
		{
		  "caseId": 73,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Se denuncian otros herederos?",
		  "level": 11,
		  "auditDate": "2021-05-31T01:01:28.644Z"
		},
		{
		  "caseId": 74,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Autorizó a alguien?",
		  "level": 12,
		  "auditDate": "2021-05-31T01:01:28.644Z"
		},
		{
		  "caseId": 75,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			1,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Trajo el bono profesional?",
		  "level": 13,
		  "auditDate": "2021-05-31T01:01:28.644Z"
		},
		{
		  "caseId": 76,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			1,
			1,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Pide que se designe administrador?",
		  "level": 14,
		  "auditDate": "2021-05-31T01:01:28.645Z"
		},
		{
		  "caseId": 77,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			1,
			1,
			1,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.645Z"
		},
		{
		  "caseId": 78,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			1,
			1,
			1,
			1,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. \r\nAl día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia.\r\n6. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n7. En cuanto a la designación de administración, una vez cumplida la citación de los restantes herederos denunciados en el escrito a despacho, se proveerá lo que corresponda.\r\n8. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante.\r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso.\r\n9. Agréguese el bono profesional acompañado. \r\n10. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.645Z"
		},
		{
		  "caseId": 79,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			1,
			1,
			1,
			1,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. \r\nAl día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia.\r\n6. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n7. En cuanto a la designación de administración, una vez cumplida la citación de los restantes herederos denunciados en el escrito a despacho, se proveerá lo que corresponda.\r\n8. Agréguese el bono profesional acompañado. \r\n9. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.645Z"
		},
		{
		  "caseId": 80,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			1,
			1,
			1,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.646Z"
		},
		{
		  "caseId": 81,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			1,
			1,
			1,
			0,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido.\r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n7. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n8. Agréguese el bono profesional acompañado. \r\n9. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.646Z"
		},
		{
		  "caseId": 82,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			1,
			1,
			1,
			0,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n7. Agréguese el bono profesional acompañado. \r\n8. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.646Z"
		},
		{
		  "caseId": 83,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			1,
			1,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide que se designe administrador?",
		  "level": 14,
		  "auditDate": "2021-05-31T01:01:28.647Z"
		},
		{
		  "caseId": 84,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			1,
			1,
			0,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.647Z"
		},
		{
		  "caseId": 85,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			1,
			1,
			0,
			1,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n7. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n8. En cuanto a la designación de administración, una vez cumplida la citación de los restantes herederos denunciados en el escrito a despacho, se proveerá lo que corresponda.\r\n9. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n10. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.647Z"
		},
		{
		  "caseId": 86,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			1,
			1,
			0,
			1,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n7. En cuanto a la designación de administración, una vez cumplida la citación de los restantes herederos denunciados en el escrito a despacho, se proveerá lo que corresponda.\r\n8. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n9. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.647Z"
		},
		{
		  "caseId": 87,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			1,
			1,
			0,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.648Z"
		},
		{
		  "caseId": 88,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			1,
			1,
			0,
			0,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n7. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n8. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n9. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.648Z"
		},
		{
		  "caseId": 89,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			1,
			1,
			0,
			0,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n7. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n8. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.648Z"
		},
		{
		  "caseId": 90,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			1,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Trajo el bono profesional?",
		  "level": 13,
		  "auditDate": "2021-05-31T01:01:28.649Z"
		},
		{
		  "caseId": 91,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			1,
			0,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Pide que se designe administrador?",
		  "level": 14,
		  "auditDate": "2021-05-31T01:01:28.649Z"
		},
		{
		  "caseId": 92,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			1,
			0,
			1,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.649Z"
		},
		{
		  "caseId": 93,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			1,
			0,
			1,
			1,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido. 2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. No obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. 3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. 4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. También líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. Hágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). 5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. Notifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. 6. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. 7. En cuanto a la designación de administración, una vez cumplida la citación de los restantes herederos denunciados en el escrito a despacho, se proveerá lo que corresponda. 8. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. De manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. 9. Agréguese el bono profesional acompañado.\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.649Z"
		},
		{
		  "caseId": 94,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			1,
			0,
			1,
			1,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. \r\nAl día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia.\r\n6. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n7. En cuanto a la designación de administración, una vez cumplida la citación de los restantes herederos denunciados en el escrito a despacho, se proveerá lo que corresponda.\r\n8. Agréguese el bono profesional acompañado. \r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.649Z"
		},
		{
		  "caseId": 95,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			1,
			0,
			1,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.650Z"
		},
		{
		  "caseId": 96,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			1,
			0,
			1,
			0,
			1
		  ],
		  "isFinal": true,
		  "text": "\"\"\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido.\r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n7. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n8. En cuanto a la designación de administración, una vez cumplida la citación de los restantes herederos denunciados en el escrito a despacho, se proveerá lo que corresponda.\r\n9. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\"\"\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.650Z"
		},
		{
		  "caseId": 97,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			1,
			0,
			1,
			0,
			0
		  ],
		  "isFinal": true,
		  "text": "\"\"\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n7. Agréguese el bono profesional acompañado. \r\n\"\"\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.650Z"
		},
		{
		  "caseId": 98,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			1,
			0,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide que se designe administrador?",
		  "level": 14,
		  "auditDate": "2021-05-31T01:01:28.651Z"
		},
		{
		  "caseId": 99,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			1,
			0,
			0,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.651Z"
		},
		{
		  "caseId": 100,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			1,
			0,
			0,
			1,
			1
		  ],
		  "isFinal": true,
		  "text": "\"\"\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido.\r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n7. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n8. En cuanto a la designación de administración, una vez cumplida la citación de los restantes herederos denunciados en el escrito a despacho, se proveerá lo que corresponda.\r\n9. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\"\"\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.651Z"
		},
		{
		  "caseId": 101,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			1,
			0,
			0,
			1,
			0
		  ],
		  "isFinal": true,
		  "text": "\"\"\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido.\r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n7. En cuanto a la designación de administración, una vez cumplida la citación de los restantes herederos denunciados en el escrito a despacho, se proveerá lo que corresponda.\r\n8. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n\"\"\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.651Z"
		},
		{
		  "caseId": 102,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			1,
			0,
			0,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.652Z"
		},
		{
		  "caseId": 103,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			1,
			0,
			0,
			0,
			1
		  ],
		  "isFinal": true,
		  "text": "\"\"\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido.\r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n7. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n8. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n\"\"\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.652Z"
		},
		{
		  "caseId": 104,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			1,
			0,
			0,
			0,
			0
		  ],
		  "isFinal": true,
		  "text": "\"\"\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido.\r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n7. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n\"\"\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.652Z"
		},
		{
		  "caseId": 105,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Autorizó a alguien?",
		  "level": 12,
		  "auditDate": "2021-05-31T01:01:28.653Z"
		},
		{
		  "caseId": 106,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			0,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Trajo el bono profesional?",
		  "level": 13,
		  "auditDate": "2021-05-31T01:01:28.653Z"
		},
		{
		  "caseId": 107,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			0,
			1,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Pide que se designe administrador?",
		  "level": 14,
		  "auditDate": "2021-05-31T01:01:28.653Z"
		},
		{
		  "caseId": 108,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			0,
			1,
			1,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Cúal es el nombre del propuesto como administrador?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.654Z"
		},
		{
		  "caseId": 109,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			0,
			1,
			1,
			1,
			5555
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.654Z"
		},
		{
		  "caseId": 110,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			0,
			1,
			1,
			1,
			5555,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido.\r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n6. En atención a lo solicitado, con las facultades comunes de ley y las especiales que se indican en el escrito a despacho, se designa como administrador/a provisional de los bienes del sucesorio a 5555, quien previa aceptación del cargo mediante escrito con su firma y en forma digital, procederá a cumplir su cometido, con cargo de oportuna rendición de cuentas. Hágasele saber que toda suma de dinero que corresponda al causante, deberá ser depositada en el Banco de la Nación Argentina, sucursal Tribunales, a la orden de este Tribunal y como perteneciente a estos autos.\r\nExpídase testimonio del presente y de la aceptación del cargo. En ese sentido y a fin del diligenciamiento, deberá la parte interesada remitir el proyecto de testimonio por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado.\r\n7. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n8. Agréguese el bono profesional de conformidad con el art. 51, inc. “d”, de la ley 23.187.\r\n9. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"\r",
		  "level": 17,
		  "auditDate": "2021-05-31T01:01:28.654Z"
		},
		{
		  "caseId": 111,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			0,
			1,
			1,
			1,
			5555,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n6. En atención a lo solicitado, con las facultades comunes de ley y las especiales que se indican en el escrito a despacho, se designa como administrador/a provisional de los bienes del sucesorio a 5555, quien previa aceptación del cargo mediante escrito con su firma y en forma digital, procederá a cumplir su cometido, con cargo de oportuna rendición de cuentas. Hágasele saber que toda suma de dinero que corresponda al causante, deberá ser depositada en el Banco de la Nación Argentina, sucursal Tribunales, a la orden de este Tribunal y como perteneciente a estos autos.\r\nExpídase testimonio del presente y de la aceptación del cargo. En ese sentido y a fin del diligenciamiento, deberá la parte interesada remitir el proyecto de testimonio por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado.\r\n7. Agréguese el bono profesional de conformidad con el art. 51, inc. “d”, de la ley 23.187.\r\n8. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"\r",
		  "level": 17,
		  "auditDate": "2021-05-31T01:01:28.654Z"
		},
		{
		  "caseId": 112,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			0,
			1,
			1,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.655Z"
		},
		{
		  "caseId": 113,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			0,
			1,
			1,
			0,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido\r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n6. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n7. Agréguese el bono profesional de conformidad con el art. 51, inc. “d”, de la ley 23.187.\r\n8. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.655Z"
		},
		{
		  "caseId": 114,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			0,
			1,
			1,
			0,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido.\r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n6. Agréguese el bono profesional de conformidad con el art. 51, inc. “d”, de la ley 23.187.\r\n7. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.655Z"
		},
		{
		  "caseId": 115,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			0,
			1,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide que se designe administrador?",
		  "level": 14,
		  "auditDate": "2021-05-31T01:01:28.656Z"
		},
		{
		  "caseId": 116,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			0,
			1,
			0,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Cúal es el nombre del propuesto como administrador?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.656Z"
		},
		{
		  "caseId": 117,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			0,
			1,
			0,
			1,
			5555
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.657Z"
		},
		{
		  "caseId": 118,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			0,
			1,
			0,
			1,
			5555,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido.\r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n6. En atención a lo solicitado, con las facultades comunes de ley y las especiales que se indican en el escrito a despacho, se designa como administrador/a provisional de los bienes del sucesorio a 5555, quien previa aceptación del cargo mediante escrito con su firma y en forma digital, procederá a cumplir su cometido, con cargo de oportuna rendición de cuentas. Hágasele saber que toda suma de dinero que corresponda al causante, deberá ser depositada en el Banco de la Nación Argentina, sucursal Tribunales, a la orden de este Tribunal y como perteneciente a estos autos.\r\nExpídase testimonio del presente y de la aceptación del cargo. En ese sentido y a fin del diligenciamiento, deberá la parte interesada remitir el proyecto de testimonio por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado.\r\n7. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n8. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n9. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"\r",
		  "level": 17,
		  "auditDate": "2021-05-31T01:01:28.657Z"
		},
		{
		  "caseId": 119,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			0,
			1,
			0,
			1,
			5555,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido.\r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n6. En atención a lo solicitado, con las facultades comunes de ley y las especiales que se indican en el escrito a despacho, se designa como administrador/a provisional de los bienes del sucesorio a 5555, quien previa aceptación del cargo mediante escrito con su firma y en forma digital, procederá a cumplir su cometido, con cargo de oportuna rendición de cuentas. Hágasele saber que toda suma de dinero que corresponda al causante, deberá ser depositada en el Banco de la Nación Argentina, sucursal Tribunales, a la orden de este Tribunal y como perteneciente a estos autos.\r\nExpídase testimonio del presente y de la aceptación del cargo. En ese sentido y a fin del diligenciamiento, deberá la parte interesada remitir el proyecto de testimonio por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado.\r\n7. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n8. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"\r",
		  "level": 17,
		  "auditDate": "2021-05-31T01:01:28.658Z"
		},
		{
		  "caseId": 120,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			0,
			1,
			0,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.659Z"
		},
		{
		  "caseId": 121,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			0,
			1,
			0,
			0,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido.\r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n6. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n7. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n8. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.659Z"
		},
		{
		  "caseId": 122,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			0,
			1,
			0,
			0,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido.\r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n6. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n7. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.660Z"
		},
		{
		  "caseId": 123,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			0,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Trajo el bono profesional?",
		  "level": 13,
		  "auditDate": "2021-05-31T01:01:28.660Z"
		},
		{
		  "caseId": 124,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			0,
			0,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Pide que se designe administrador?",
		  "level": 14,
		  "auditDate": "2021-05-31T01:01:28.660Z"
		},
		{
		  "caseId": 125,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			0,
			0,
			1,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Cúal es el nombre del propuesto como administrador?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.661Z"
		},
		{
		  "caseId": 126,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			0,
			0,
			1,
			1,
			5555
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.661Z"
		},
		{
		  "caseId": 127,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			0,
			0,
			1,
			1,
			5555,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n6. En atención a lo solicitado, con las facultades comunes de ley y las especiales que se indican en el escrito a despacho, se designa como administrador/a provisional de los bienes del sucesorio a 5555, quien previa aceptación del cargo mediante escrito con su firma y en forma digital, procederá a cumplir su cometido, con cargo de oportuna rendición de cuentas. Hágasele saber que toda suma de dinero que corresponda al causante, deberá ser depositada en el Banco de la Nación Argentina, sucursal Tribunales, a la orden de este Tribunal y como perteneciente a estos autos.\r\nExpídase testimonio del presente y de la aceptación del cargo. En ese sentido y a fin del diligenciamiento, deberá la parte interesada remitir el proyecto de testimonio por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado.\r\n7. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n8. Agréguese el bono profesional de conformidad con el art. 51, inc. “d”, de la ley 23.187.\r\n\"\r",
		  "level": 17,
		  "auditDate": "2021-05-31T01:01:28.662Z"
		},
		{
		  "caseId": 128,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			0,
			0,
			1,
			1,
			5555,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido.\r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n6. En atención a lo solicitado, con las facultades comunes de ley y las especiales que se indican en el escrito a despacho, se designa como administrador/a provisional de los bienes del sucesorio a 5555, quien previa aceptación del cargo mediante escrito con su firma y en forma digital, procederá a cumplir su cometido, con cargo de oportuna rendición de cuentas. Hágasele saber que toda suma de dinero que corresponda al causante, deberá ser depositada en el Banco de la Nación Argentina, sucursal Tribunales, a la orden de este Tribunal y como perteneciente a estos autos.\r\nExpídase testimonio del presente y de la aceptación del cargo. En ese sentido y a fin del diligenciamiento, deberá la parte interesada remitir el proyecto de testimonio por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado.\r\n7. Agréguese el bono profesional de conformidad con el art. 51, inc. “d”, de la ley 23.187.\r\n\r\n\"\r",
		  "level": 17,
		  "auditDate": "2021-05-31T01:01:28.662Z"
		},
		{
		  "caseId": 129,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			0,
			0,
			1,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.663Z"
		},
		{
		  "caseId": 130,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			0,
			0,
			1,
			0,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido.\r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n6. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n7. Agréguese el bono profesional de conformidad con el art. 51, inc. “d”, de la ley 23.187.\r\n\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.664Z"
		},
		{
		  "caseId": 131,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			0,
			0,
			1,
			0,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n6. Agréguese el bono profesional de conformidad con el art. 51, inc. “d”, de la ley 23.187.\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.664Z"
		},
		{
		  "caseId": 132,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			0,
			0,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide que se designe administrador?",
		  "level": 14,
		  "auditDate": "2021-05-31T01:01:28.665Z"
		},
		{
		  "caseId": 133,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			0,
			0,
			0,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Cúal es el nombre del propuesto como administrador?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.665Z"
		},
		{
		  "caseId": 134,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			0,
			0,
			0,
			1,
			5555
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.665Z"
		},
		{
		  "caseId": 135,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			0,
			0,
			0,
			1,
			5555,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n6. En atención a lo solicitado, con las facultades comunes de ley y las especiales que se indican en el escrito a despacho, se designa como administrador/a provisional de los bienes del sucesorio a 5555, quien previa aceptación del cargo mediante escrito con su firma y en forma digital, procederá a cumplir su cometido, con cargo de oportuna rendición de cuentas. Hágasele saber que toda suma de dinero que corresponda al causante, deberá ser depositada en el Banco de la Nación Argentina, sucursal Tribunales, a la orden de este Tribunal y como perteneciente a estos autos.\r\nExpídase testimonio del presente y de la aceptación del cargo. En ese sentido y a fin del diligenciamiento, deberá la parte interesada remitir el proyecto de testimonio por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado.\r\n7. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n8. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n\r\n\"\r",
		  "level": 17,
		  "auditDate": "2021-05-31T01:01:28.665Z"
		},
		{
		  "caseId": 136,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			0,
			0,
			0,
			1,
			5555,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n6. En atención a lo solicitado, con las facultades comunes de ley y las especiales que se indican en el escrito a despacho, se designa como administrador/a provisional de los bienes del sucesorio a 5555, quien previa aceptación del cargo mediante escrito con su firma y en forma digital, procederá a cumplir su cometido, con cargo de oportuna rendición de cuentas. Hágasele saber que toda suma de dinero que corresponda al causante, deberá ser depositada en el Banco de la Nación Argentina, sucursal Tribunales, a la orden de este Tribunal y como perteneciente a estos autos.\r\nExpídase testimonio del presente y de la aceptación del cargo. En ese sentido y a fin del diligenciamiento, deberá la parte interesada remitir el proyecto de testimonio por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado.\r\n7. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n\"\r",
		  "level": 17,
		  "auditDate": "2021-05-31T01:01:28.666Z"
		},
		{
		  "caseId": 137,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			0,
			0,
			0,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.668Z"
		},
		{
		  "caseId": 138,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			0,
			0,
			0,
			0,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n6. En atención a lo solicitado, con las facultades comunes de ley y las especiales que se indican en el escrito a despacho, se designa como administrador/a provisional de los bienes del sucesorio a 5555, quien previa aceptación del cargo mediante escrito con su firma y en forma digital, procederá a cumplir su cometido, con cargo de oportuna rendición de cuentas. Hágasele saber que toda suma de dinero que corresponda al causante, deberá ser depositada en el Banco de la Nación Argentina, sucursal Tribunales, a la orden de este Tribunal y como perteneciente a estos autos.\r\nExpídase testimonio del presente y de la aceptación del cargo. En ese sentido y a fin del diligenciamiento, deberá la parte interesada remitir el proyecto de testimonio por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado.\r\n7. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n8. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.668Z"
		},
		{
		  "caseId": 139,
		  "decition": [
			0,
			1,
			1,
			1,
			1,
			0,
			0,
			0,
			0,
			0,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Inscríbase la partida de defunción del causante en el Registro del Estado Civil y Capacidad de las Personas de la Capital Federal. A cuyo fin, líbrese D.E.O. en el que se adjuntará la citada partida. \r\n6. En atención a lo solicitado, con las facultades comunes de ley y las especiales que se indican en el escrito a despacho, se designa como administrador/a provisional de los bienes del sucesorio a 5555, quien previa aceptación del cargo mediante escrito con su firma y en forma digital, procederá a cumplir su cometido, con cargo de oportuna rendición de cuentas. Hágasele saber que toda suma de dinero que corresponda al causante, deberá ser depositada en el Banco de la Nación Argentina, sucursal Tribunales, a la orden de este Tribunal y como perteneciente a estos autos.\r\nExpídase testimonio del presente y de la aceptación del cargo. En ese sentido y a fin del diligenciamiento, deberá la parte interesada remitir el proyecto de testimonio por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado.\r\n7. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.668Z"
		},
		{
		  "caseId": 140,
		  "decition": [
			0,
			1,
			1,
			1,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Se denuncia el domicilio real del heredero?",
		  "level": 10,
		  "auditDate": "2021-05-31T01:01:28.669Z"
		},
		{
		  "caseId": 141,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Se denuncian otros herederos?",
		  "level": 11,
		  "auditDate": "2021-05-31T01:01:28.669Z"
		},
		{
		  "caseId": 142,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Autorizó a alguien?",
		  "level": 12,
		  "auditDate": "2021-05-31T01:01:28.669Z"
		},
		{
		  "caseId": 143,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			1,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Trajo el bono profesional?",
		  "level": 13,
		  "auditDate": "2021-05-31T01:01:28.669Z"
		},
		{
		  "caseId": 144,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			1,
			1,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Pide que se designe administrador?",
		  "level": 14,
		  "auditDate": "2021-05-31T01:01:28.670Z"
		},
		{
		  "caseId": 145,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			1,
			1,
			1,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.670Z"
		},
		{
		  "caseId": 146,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			1,
			1,
			1,
			1,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. \r\nAl día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia.\r\n6. En cuanto a la designación de administración, una vez cumplida la citación de los restantes herederos denunciados en el escrito a despacho, se proveerá lo que corresponda.\r\n7. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante.\r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso.\r\n8. Agréguese el bono profesional acompañado. \r\n9. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.670Z"
		},
		{
		  "caseId": 147,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			1,
			1,
			1,
			1,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. \r\nAl día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia.\r\n6. En cuanto a la designación de administración, una vez cumplida la citación de los restantes herederos denunciados en el escrito a despacho, se proveerá lo que corresponda.\r\n7. Agréguese el bono profesional acompañado. \r\n8. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.670Z"
		},
		{
		  "caseId": 148,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			1,
			1,
			1,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.671Z"
		},
		{
		  "caseId": 149,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			1,
			1,
			1,
			0,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n7. Agréguese el bono profesional acompañado. \r\n8. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.671Z"
		},
		{
		  "caseId": 150,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			1,
			1,
			1,
			0,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Agréguese el bono profesional acompañado. \r\n7. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.671Z"
		},
		{
		  "caseId": 151,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			1,
			1,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide que se designe administrador?",
		  "level": 14,
		  "auditDate": "2021-05-31T01:01:28.672Z"
		},
		{
		  "caseId": 152,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			1,
			1,
			0,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.672Z"
		},
		{
		  "caseId": 153,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			1,
			1,
			0,
			1,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n7. En cuanto a la designación de administración, una vez cumplida la citación de los restantes herederos denunciados en el escrito a despacho, se proveerá lo que corresponda.\r\n8. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n9. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.673Z"
		},
		{
		  "caseId": 154,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			1,
			1,
			0,
			1,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. En cuanto a la designación de administración, una vez cumplida la citación de los restantes herederos denunciados en el escrito a despacho, se proveerá lo que corresponda.\r\n7. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n8. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.673Z"
		},
		{
		  "caseId": 155,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			1,
			1,
			0,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.674Z"
		},
		{
		  "caseId": 156,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			1,
			1,
			0,
			0,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n7. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n8. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.674Z"
		},
		{
		  "caseId": 157,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			1,
			1,
			0,
			0,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n7. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.675Z"
		},
		{
		  "caseId": 158,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			1,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Trajo el bono profesional?",
		  "level": 13,
		  "auditDate": "2021-05-31T01:01:28.675Z"
		},
		{
		  "caseId": 159,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			1,
			0,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Pide que se designe administrador?",
		  "level": 14,
		  "auditDate": "2021-05-31T01:01:28.675Z"
		},
		{
		  "caseId": 160,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			1,
			0,
			1,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.676Z"
		},
		{
		  "caseId": 161,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			1,
			0,
			1,
			1,
			1
		  ],
		  "isFinal": true,
		  "text": "Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. 1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. 2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. No obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. 3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. 4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. También líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. Hágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). 5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. Notifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. 6. En cuanto a la designación de administración, una vez cumplida la citación de los restantes herederos denunciados en el escrito a despacho, se proveerá lo que corresponda. 7. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. De manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. 8. Agréguese el bono profesional acompañado.",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.676Z"
		},
		{
		  "caseId": 162,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			1,
			0,
			1,
			1,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. \r\nAl día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia.\r\n6. En cuanto a la designación de administración, una vez cumplida la citación de los restantes herederos denunciados en el escrito a despacho, se proveerá lo que corresponda.\r\n7. Agréguese el bono profesional acompañado. \r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.676Z"
		},
		{
		  "caseId": 163,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			1,
			0,
			1,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.677Z"
		},
		{
		  "caseId": 164,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			1,
			0,
			1,
			0,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n7. Agréguese el bono profesional acompañado. \r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.677Z"
		},
		{
		  "caseId": 165,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			1,
			0,
			1,
			0,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Agréguese el bono profesional acompañado. \r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.678Z"
		},
		{
		  "caseId": 166,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			1,
			0,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide que se designe administrador?",
		  "level": 14,
		  "auditDate": "2021-05-31T01:01:28.678Z"
		},
		{
		  "caseId": 167,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			1,
			0,
			0,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.678Z"
		},
		{
		  "caseId": 168,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			1,
			0,
			0,
			1,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n7. En cuanto a la designación de administración, una vez cumplida la citación de los restantes herederos denunciados en el escrito a despacho, se proveerá lo que corresponda.\r\n8. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.679Z"
		},
		{
		  "caseId": 169,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			1,
			0,
			0,
			1,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. En cuanto a la designación de administración, una vez cumplida la citación de los restantes herederos denunciados en el escrito a despacho, se proveerá lo que corresponda.\r\n7. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.679Z"
		},
		{
		  "caseId": 170,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			1,
			0,
			0,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.679Z"
		},
		{
		  "caseId": 171,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			1,
			0,
			0,
			0,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n7. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.680Z"
		},
		{
		  "caseId": 172,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			1,
			0,
			0,
			0,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.681Z"
		},
		{
		  "caseId": 173,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Autorizó a alguien?",
		  "level": 12,
		  "auditDate": "2021-05-31T01:01:28.681Z"
		},
		{
		  "caseId": 174,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			0,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Trajo el bono profesional?",
		  "level": 13,
		  "auditDate": "2021-05-31T01:01:28.682Z"
		},
		{
		  "caseId": 175,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			0,
			1,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Pide que se designe administrador?",
		  "level": 14,
		  "auditDate": "2021-05-31T01:01:28.682Z"
		},
		{
		  "caseId": 176,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			0,
			1,
			1,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Cúal es el nombre del propuesto como administrador?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.682Z"
		},
		{
		  "caseId": 177,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			0,
			1,
			1,
			1,
			5555
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.683Z"
		},
		{
		  "caseId": 178,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			0,
			1,
			1,
			1,
			5555,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. En atención a lo solicitado, con las facultades comunes de ley y las especiales que se indican en el escrito a despacho, se designa como administrador/a provisional de los bienes del sucesorio a 5555, quien previa aceptación del cargo mediante escrito con su firma y en forma digital, procederá a cumplir su cometido, con cargo de oportuna rendición de cuentas. Hágasele saber que toda suma de dinero que corresponda al causante, deberá ser depositada en el Banco de la Nación Argentina, sucursal Tribunales, a la orden de este Tribunal y como perteneciente a estos autos.\r\nExpídase testimonio del presente y de la aceptación del cargo. En ese sentido y a fin del diligenciamiento, deberá la parte interesada remitir el proyecto de testimonio por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado.\r\n6. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n7. Agréguese el bono profesional de conformidad con el art. 51, inc. “d”, de la ley 23.187.\r\n8. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"\r",
		  "level": 17,
		  "auditDate": "2021-05-31T01:01:28.683Z"
		},
		{
		  "caseId": 179,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			0,
			1,
			1,
			1,
			5555,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. En atención a lo solicitado, con las facultades comunes de ley y las especiales que se indican en el escrito a despacho, se designa como administrador/a provisional de los bienes del sucesorio a 5555, quien previa aceptación del cargo mediante escrito con su firma y en forma digital, procederá a cumplir su cometido, con cargo de oportuna rendición de cuentas. Hágasele saber que toda suma de dinero que corresponda al causante, deberá ser depositada en el Banco de la Nación Argentina, sucursal Tribunales, a la orden de este Tribunal y como perteneciente a estos autos.\r\nExpídase testimonio del presente y de la aceptación del cargo. En ese sentido y a fin del diligenciamiento, deberá la parte interesada remitir el proyecto de testimonio por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado.\r\n6. Agréguese el bono profesional de conformidad con el art. 51, inc. “d”, de la ley 23.187.\r\n7. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"\r",
		  "level": 17,
		  "auditDate": "2021-05-31T01:01:28.684Z"
		},
		{
		  "caseId": 180,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			0,
			1,
			1,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.684Z"
		},
		{
		  "caseId": 181,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			0,
			1,
			1,
			0,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n6. Agréguese el bono profesional de conformidad con el art. 51, inc. “d”, de la ley 23.187.\r\n7. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.684Z"
		},
		{
		  "caseId": 182,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			0,
			1,
			1,
			0,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Agréguese el bono profesional de conformidad con el art. 51, inc. “d”, de la ley 23.187.\r\n6. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.685Z"
		},
		{
		  "caseId": 183,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			0,
			1,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide que se designe administrador?",
		  "level": 14,
		  "auditDate": "2021-05-31T01:01:28.685Z"
		},
		{
		  "caseId": 184,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			0,
			1,
			0,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Cúal es el nombre del propuesto como administrador?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.685Z"
		},
		{
		  "caseId": 185,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			0,
			1,
			0,
			1,
			5555
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.685Z"
		},
		{
		  "caseId": 186,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			0,
			1,
			0,
			1,
			5555,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. En atención a lo solicitado, con las facultades comunes de ley y las especiales que se indican en el escrito a despacho, se designa como administrador/a provisional de los bienes del sucesorio a 5555, quien previa aceptación del cargo mediante escrito con su firma y en forma digital, procederá a cumplir su cometido, con cargo de oportuna rendición de cuentas. Hágasele saber que toda suma de dinero que corresponda al causante, deberá ser depositada en el Banco de la Nación Argentina, sucursal Tribunales, a la orden de este Tribunal y como perteneciente a estos autos.\r\nExpídase testimonio del presente y de la aceptación del cargo. En ese sentido y a fin del diligenciamiento, deberá la parte interesada remitir el proyecto de testimonio por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado.\r\n6. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n7. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n8. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"\r",
		  "level": 17,
		  "auditDate": "2021-05-31T01:01:28.685Z"
		},
		{
		  "caseId": 187,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			0,
			1,
			0,
			1,
			5555,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. En atención a lo solicitado, con las facultades comunes de ley y las especiales que se indican en el escrito a despacho, se designa como administrador/a provisional de los bienes del sucesorio a 5555, quien previa aceptación del cargo mediante escrito con su firma y en forma digital, procederá a cumplir su cometido, con cargo de oportuna rendición de cuentas. Hágasele saber que toda suma de dinero que corresponda al causante, deberá ser depositada en el Banco de la Nación Argentina, sucursal Tribunales, a la orden de este Tribunal y como perteneciente a estos autos.\r\nExpídase testimonio del presente y de la aceptación del cargo. En ese sentido y a fin del diligenciamiento, deberá la parte interesada remitir el proyecto de testimonio por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado.\r\n6. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n7. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"\r",
		  "level": 17,
		  "auditDate": "2021-05-31T01:01:28.686Z"
		},
		{
		  "caseId": 188,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			0,
			1,
			0,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.686Z"
		},
		{
		  "caseId": 189,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			0,
			1,
			0,
			0,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n6. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n7. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.686Z"
		},
		{
		  "caseId": 190,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			0,
			1,
			0,
			0,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n6. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.687Z"
		},
		{
		  "caseId": 191,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			0,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Trajo el bono profesional?",
		  "level": 13,
		  "auditDate": "2021-05-31T01:01:28.687Z"
		},
		{
		  "caseId": 192,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			0,
			0,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Pide que se designe administrador?",
		  "level": 14,
		  "auditDate": "2021-05-31T01:01:28.687Z"
		},
		{
		  "caseId": 193,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			0,
			0,
			1,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Cúal es el nombre del propuesto como administrador?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.687Z"
		},
		{
		  "caseId": 194,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			0,
			0,
			1,
			1,
			5555
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.687Z"
		},
		{
		  "caseId": 195,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			0,
			0,
			1,
			1,
			5555,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. En atención a lo solicitado, con las facultades comunes de ley y las especiales que se indican en el escrito a despacho, se designa como administrador/a provisional de los bienes del sucesorio a 5555, quien previa aceptación del cargo mediante escrito con su firma y en forma digital, procederá a cumplir su cometido, con cargo de oportuna rendición de cuentas. Hágasele saber que toda suma de dinero que corresponda al causante, deberá ser depositada en el Banco de la Nación Argentina, sucursal Tribunales, a la orden de este Tribunal y como perteneciente a estos autos.\r\nExpídase testimonio del presente y de la aceptación del cargo. En ese sentido y a fin del diligenciamiento, deberá la parte interesada remitir el proyecto de testimonio por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado.\r\n6. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n7. Agréguese el bono profesional de conformidad con el art. 51, inc. “d”, de la ley 23.187.\r\n\"\r",
		  "level": 17,
		  "auditDate": "2021-05-31T01:01:28.688Z"
		},
		{
		  "caseId": 196,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			0,
			0,
			1,
			1,
			5555,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. En atención a lo solicitado, con las facultades comunes de ley y las especiales que se indican en el escrito a despacho, se designa como administrador/a provisional de los bienes del sucesorio a 5555, quien previa aceptación del cargo mediante escrito con su firma y en forma digital, procederá a cumplir su cometido, con cargo de oportuna rendición de cuentas. Hágasele saber que toda suma de dinero que corresponda al causante, deberá ser depositada en el Banco de la Nación Argentina, sucursal Tribunales, a la orden de este Tribunal y como perteneciente a estos autos.\r\nExpídase testimonio del presente y de la aceptación del cargo. En ese sentido y a fin del diligenciamiento, deberá la parte interesada remitir el proyecto de testimonio por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado.\r\n6. Agréguese el bono profesional de conformidad con el art. 51, inc. “d”, de la ley 23.187.\r\n\r\n\"\r",
		  "level": 17,
		  "auditDate": "2021-05-31T01:01:28.688Z"
		},
		{
		  "caseId": 197,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			0,
			0,
			1,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.689Z"
		},
		{
		  "caseId": 198,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			0,
			0,
			1,
			0,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n6. Agréguese el bono profesional de conformidad con el art. 51, inc. “d”, de la ley 23.187.\r\n\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.689Z"
		},
		{
		  "caseId": 199,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			0,
			0,
			1,
			0,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Agréguese el bono profesional de conformidad con el art. 51, inc. “d”, de la ley 23.187.\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.689Z"
		},
		{
		  "caseId": 200,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			0,
			0,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide que se designe administrador?",
		  "level": 14,
		  "auditDate": "2021-05-31T01:01:28.690Z"
		},
		{
		  "caseId": 201,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			0,
			0,
			0,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Cúal es el nombre del propuesto como administrador?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.690Z"
		},
		{
		  "caseId": 202,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			0,
			0,
			0,
			1,
			5555
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.691Z"
		},
		{
		  "caseId": 203,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			0,
			0,
			0,
			1,
			5555,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. En atención a lo solicitado, con las facultades comunes de ley y las especiales que se indican en el escrito a despacho, se designa como administrador/a provisional de los bienes del sucesorio a 5555, quien previa aceptación del cargo mediante escrito con su firma y en forma digital, procederá a cumplir su cometido, con cargo de oportuna rendición de cuentas. Hágasele saber que toda suma de dinero que corresponda al causante, deberá ser depositada en el Banco de la Nación Argentina, sucursal Tribunales, a la orden de este Tribunal y como perteneciente a estos autos.\r\nExpídase testimonio del presente y de la aceptación del cargo. En ese sentido y a fin del diligenciamiento, deberá la parte interesada remitir el proyecto de testimonio por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado.\r\n6. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n7. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n\r\n\"\r",
		  "level": 17,
		  "auditDate": "2021-05-31T01:01:28.691Z"
		},
		{
		  "caseId": 204,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			0,
			0,
			0,
			1,
			5555,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. En atención a lo solicitado, con las facultades comunes de ley y las especiales que se indican en el escrito a despacho, se designa como administrador/a provisional de los bienes del sucesorio a 5555, quien previa aceptación del cargo mediante escrito con su firma y en forma digital, procederá a cumplir su cometido, con cargo de oportuna rendición de cuentas. Hágasele saber que toda suma de dinero que corresponda al causante, deberá ser depositada en el Banco de la Nación Argentina, sucursal Tribunales, a la orden de este Tribunal y como perteneciente a estos autos.\r\nExpídase testimonio del presente y de la aceptación del cargo. En ese sentido y a fin del diligenciamiento, deberá la parte interesada remitir el proyecto de testimonio por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado.\r\n6. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n\"\r",
		  "level": 17,
		  "auditDate": "2021-05-31T01:01:28.692Z"
		},
		{
		  "caseId": 205,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			0,
			0,
			0,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.692Z"
		},
		{
		  "caseId": 206,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			0,
			0,
			0,
			0,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n\r\n\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.692Z"
		},
		{
		  "caseId": 207,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			1,
			0,
			0,
			0,
			0,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado, por denunciado el domicilio real y por constituido el electrónico. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.693Z"
		},
		{
		  "caseId": 208,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Se denuncian otros herederos?",
		  "level": 11,
		  "auditDate": "2021-05-31T01:01:28.693Z"
		},
		{
		  "caseId": 209,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Autorizó a alguien?",
		  "level": 12,
		  "auditDate": "2021-05-31T01:01:28.693Z"
		},
		{
		  "caseId": 210,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			1,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Trajo el bono profesional?",
		  "level": 13,
		  "auditDate": "2021-05-31T01:01:28.694Z"
		},
		{
		  "caseId": 211,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			1,
			1,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Pide que se designe administrador?",
		  "level": 14,
		  "auditDate": "2021-05-31T01:01:28.694Z"
		},
		{
		  "caseId": 212,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			1,
			1,
			1,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.694Z"
		},
		{
		  "caseId": 213,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			1,
			1,
			1,
			1,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. \r\nAl día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia.\r\n6. En cuanto a la designación de administración, una vez cumplida la citación de los restantes herederos denunciados en el escrito a despacho, se proveerá lo que corresponda.\r\n7. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante.\r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso.\r\n8. Agréguese el bono profesional acompañado. \r\n9. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.694Z"
		},
		{
		  "caseId": 214,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			1,
			1,
			1,
			1,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. \r\nAl día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia.\r\n6. En cuanto a la designación de administración, una vez cumplida la citación de los restantes herederos denunciados en el escrito a despacho, se proveerá lo que corresponda.\r\n7. Agréguese el bono profesional acompañado. \r\n8. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.695Z"
		},
		{
		  "caseId": 215,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			1,
			1,
			1,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.695Z"
		},
		{
		  "caseId": 216,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			1,
			1,
			1,
			0,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido.\r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n7. Agréguese el bono profesional acompañado. \r\n8. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.695Z"
		},
		{
		  "caseId": 217,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			1,
			1,
			1,
			0,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Agréguese el bono profesional acompañado. \r\n7. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.695Z"
		},
		{
		  "caseId": 218,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			1,
			1,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide que se designe administrador?",
		  "level": 14,
		  "auditDate": "2021-05-31T01:01:28.696Z"
		},
		{
		  "caseId": 219,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			1,
			1,
			0,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.696Z"
		},
		{
		  "caseId": 220,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			1,
			1,
			0,
			1,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n7. En cuanto a la designación de administración, una vez cumplida la citación de los restantes herederos denunciados en el escrito a despacho, se proveerá lo que corresponda.\r\n8. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n9. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.696Z"
		},
		{
		  "caseId": 221,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			1,
			1,
			0,
			1,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. En cuanto a la designación de administración, una vez cumplida la citación de los restantes herederos denunciados en el escrito a despacho, se proveerá lo que corresponda.\r\n7. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n8. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.697Z"
		},
		{
		  "caseId": 222,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			1,
			1,
			0,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.697Z"
		},
		{
		  "caseId": 223,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			1,
			1,
			0,
			0,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n7. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n8. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.698Z"
		},
		{
		  "caseId": 224,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			1,
			1,
			0,
			0,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n7. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.698Z"
		},
		{
		  "caseId": 225,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			1,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Trajo el bono profesional?",
		  "level": 13,
		  "auditDate": "2021-05-31T01:01:28.699Z"
		},
		{
		  "caseId": 226,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			1,
			0,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Pide que se designe administrador?",
		  "level": 14,
		  "auditDate": "2021-05-31T01:01:28.699Z"
		},
		{
		  "caseId": 227,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			1,
			0,
			1,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.699Z"
		},
		{
		  "caseId": 228,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			1,
			0,
			1,
			1,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido. 2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. No obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. 3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. 4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. También líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. Hágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). 5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. Notifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. 6. En cuanto a la designación de administración, una vez cumplida la citación de los restantes herederos denunciados en el escrito a despacho, se proveerá lo que corresponda. 7. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. De manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. 8. Agréguese el bono profesional acompañado.\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.700Z"
		},
		{
		  "caseId": 229,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			1,
			0,
			1,
			1,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. \r\nAl día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia.\r\n6. En cuanto a la designación de administración, una vez cumplida la citación de los restantes herederos denunciados en el escrito a despacho, se proveerá lo que corresponda.\r\n7. Agréguese el bono profesional acompañado. \r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.700Z"
		},
		{
		  "caseId": 230,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			1,
			0,
			1,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.700Z"
		},
		{
		  "caseId": 231,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			1,
			0,
			1,
			0,
			1
		  ],
		  "isFinal": true,
		  "text": "\"\"\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido.\r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n7. En cuanto a la designación de administración, una vez cumplida la citación de los restantes herederos denunciados en el escrito a despacho, se proveerá lo que corresponda.\r\n8. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\"\"\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.701Z"
		},
		{
		  "caseId": 232,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			1,
			0,
			1,
			0,
			0
		  ],
		  "isFinal": true,
		  "text": "\"\"\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Agréguese el bono profesional acompañado. \r\n\"\"\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.701Z"
		},
		{
		  "caseId": 233,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			1,
			0,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide que se designe administrador?",
		  "level": 14,
		  "auditDate": "2021-05-31T01:01:28.702Z"
		},
		{
		  "caseId": 234,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			1,
			0,
			0,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.702Z"
		},
		{
		  "caseId": 235,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			1,
			0,
			0,
			1,
			1
		  ],
		  "isFinal": true,
		  "text": "\"\"\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido.\r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n7. En cuanto a la designación de administración, una vez cumplida la citación de los restantes herederos denunciados en el escrito a despacho, se proveerá lo que corresponda.\r\n10. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\"\"\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.702Z"
		},
		{
		  "caseId": 236,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			1,
			0,
			0,
			1,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido.\r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. En cuanto a la designación de administración, una vez cumplida la citación de los restantes herederos denunciados en el escrito a despacho, se proveerá lo que corresponda.\r\n7. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.703Z"
		},
		{
		  "caseId": 237,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			1,
			0,
			0,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.703Z"
		},
		{
		  "caseId": 238,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			1,
			0,
			0,
			0,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido.\r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n7. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.703Z"
		},
		{
		  "caseId": 239,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			1,
			0,
			0,
			0,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito “1111” presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido.\r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a lo demás mencionado, cítese a los otros herederos que se denuncian por el plazo de treinta días de conformidad con el art. 699 del Código Procesal, a fin de que hagan valer los derechos que le corresponden. \r\nNotifíquese mediante cédula, quienes dentro del plazo referido deberán constituir domicilio electrónico, bajo apercibimiento de ser aplicable a su respecto lo dispuesto por el art. 41 del código citado. En ese sentido y a fin del diligenciamiento, deberá la parte peticionaria remitir el proyecto de cédula por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado y remitido a la Oficina de Notificaciones, siempre que se trate de diligencias a realizar en el ámbito de esta ciudad. Si se trata de diligencias a realizar en la Provincia de Buenos Aires, se exime a tal efecto de la colocación del “sello medalla” del juzgado en la diligencia. \r\n6. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.704Z"
		},
		{
		  "caseId": 240,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Autorizó a alguien?",
		  "level": 12,
		  "auditDate": "2021-05-31T01:01:28.704Z"
		},
		{
		  "caseId": 241,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			0,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Trajo el bono profesional?",
		  "level": 13,
		  "auditDate": "2021-05-31T01:01:28.704Z"
		},
		{
		  "caseId": 242,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			0,
			1,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Pide que se designe administrador?",
		  "level": 14,
		  "auditDate": "2021-05-31T01:01:28.704Z"
		},
		{
		  "caseId": 243,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			0,
			1,
			1,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Cúal es el nombre del propuesto como administrador?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.705Z"
		},
		{
		  "caseId": 244,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			0,
			1,
			1,
			1,
			5555
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.705Z"
		},
		{
		  "caseId": 245,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			0,
			1,
			1,
			1,
			5555,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido.\r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. En atención a lo solicitado, con las facultades comunes de ley y las especiales que se indican en el escrito a despacho, se designa como administrador/a provisional de los bienes del sucesorio a 5555, quien previa aceptación del cargo mediante escrito con su firma y en forma digital, procederá a cumplir su cometido, con cargo de oportuna rendición de cuentas. Hágasele saber que toda suma de dinero que corresponda al causante, deberá ser depositada en el Banco de la Nación Argentina, sucursal Tribunales, a la orden de este Tribunal y como perteneciente a estos autos.\r\nExpídase testimonio del presente y de la aceptación del cargo. En ese sentido y a fin del diligenciamiento, deberá la parte interesada remitir el proyecto de testimonio por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado.\r\n6. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n7. Agréguese el bono profesional de conformidad con el art. 51, inc. “d”, de la ley 23.187.\r\n8. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"\r",
		  "level": 17,
		  "auditDate": "2021-05-31T01:01:28.705Z"
		},
		{
		  "caseId": 246,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			0,
			1,
			1,
			1,
			5555,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. En atención a lo solicitado, con las facultades comunes de ley y las especiales que se indican en el escrito a despacho, se designa como administrador/a provisional de los bienes del sucesorio a 5555, quien previa aceptación del cargo mediante escrito con su firma y en forma digital, procederá a cumplir su cometido, con cargo de oportuna rendición de cuentas. Hágasele saber que toda suma de dinero que corresponda al causante, deberá ser depositada en el Banco de la Nación Argentina, sucursal Tribunales, a la orden de este Tribunal y como perteneciente a estos autos.\r\nExpídase testimonio del presente y de la aceptación del cargo. En ese sentido y a fin del diligenciamiento, deberá la parte interesada remitir el proyecto de testimonio por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado.\r\n6. Agréguese el bono profesional de conformidad con el art. 51, inc. “d”, de la ley 23.187.\r\n7. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"\r",
		  "level": 17,
		  "auditDate": "2021-05-31T01:01:28.705Z"
		},
		{
		  "caseId": 247,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			0,
			1,
			1,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.706Z"
		},
		{
		  "caseId": 248,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			0,
			1,
			1,
			0,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido\r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n6. Agréguese el bono profesional de conformidad con el art. 51, inc. “d”, de la ley 23.187.\r\n7. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.706Z"
		},
		{
		  "caseId": 249,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			0,
			1,
			1,
			0,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido.\r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Agréguese el bono profesional de conformidad con el art. 51, inc. “d”, de la ley 23.187.\r\n6. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.706Z"
		},
		{
		  "caseId": 250,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			0,
			1,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide que se designe administrador?",
		  "level": 14,
		  "auditDate": "2021-05-31T01:01:28.706Z"
		},
		{
		  "caseId": 251,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			0,
			1,
			0,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Cúal es el nombre del propuesto como administrador?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.707Z"
		},
		{
		  "caseId": 252,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			0,
			1,
			0,
			1,
			5555
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.707Z"
		},
		{
		  "caseId": 253,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			0,
			1,
			0,
			1,
			5555,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido.\r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. En atención a lo solicitado, con las facultades comunes de ley y las especiales que se indican en el escrito a despacho, se designa como administrador/a provisional de los bienes del sucesorio a 5555, quien previa aceptación del cargo mediante escrito con su firma y en forma digital, procederá a cumplir su cometido, con cargo de oportuna rendición de cuentas. Hágasele saber que toda suma de dinero que corresponda al causante, deberá ser depositada en el Banco de la Nación Argentina, sucursal Tribunales, a la orden de este Tribunal y como perteneciente a estos autos.\r\nExpídase testimonio del presente y de la aceptación del cargo. En ese sentido y a fin del diligenciamiento, deberá la parte interesada remitir el proyecto de testimonio por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado.\r\n6. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n7. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n8. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"\r",
		  "level": 17,
		  "auditDate": "2021-05-31T01:01:28.707Z"
		},
		{
		  "caseId": 254,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			0,
			1,
			0,
			1,
			5555,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido.\r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. En atención a lo solicitado, con las facultades comunes de ley y las especiales que se indican en el escrito a despacho, se designa como administrador/a provisional de los bienes del sucesorio a 5555, quien previa aceptación del cargo mediante escrito con su firma y en forma digital, procederá a cumplir su cometido, con cargo de oportuna rendición de cuentas. Hágasele saber que toda suma de dinero que corresponda al causante, deberá ser depositada en el Banco de la Nación Argentina, sucursal Tribunales, a la orden de este Tribunal y como perteneciente a estos autos.\r\nExpídase testimonio del presente y de la aceptación del cargo. En ese sentido y a fin del diligenciamiento, deberá la parte interesada remitir el proyecto de testimonio por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado.\r\n6. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n7. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"\r",
		  "level": 17,
		  "auditDate": "2021-05-31T01:01:28.708Z"
		},
		{
		  "caseId": 255,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			0,
			1,
			0,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.708Z"
		},
		{
		  "caseId": 256,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			0,
			1,
			0,
			0,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido.\r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n6. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n7. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.708Z"
		},
		{
		  "caseId": 257,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			0,
			1,
			0,
			0,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido.\r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n6. Por autorizados los indicados, dejándose constancia que su intervención importará la notificación del estado del proceso (art. 134 del Código Procesal).\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.709Z"
		},
		{
		  "caseId": 258,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			0,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Trajo el bono profesional?",
		  "level": 13,
		  "auditDate": "2021-05-31T01:01:28.709Z"
		},
		{
		  "caseId": 259,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			0,
			0,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Pide que se designe administrador?",
		  "level": 14,
		  "auditDate": "2021-05-31T01:01:28.710Z"
		},
		{
		  "caseId": 260,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			0,
			0,
			1,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Cúal es el nombre del propuesto como administrador?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.710Z"
		},
		{
		  "caseId": 261,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			0,
			0,
			1,
			1,
			5555
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.710Z"
		},
		{
		  "caseId": 262,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			0,
			0,
			1,
			1,
			5555,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. En atención a lo solicitado, con las facultades comunes de ley y las especiales que se indican en el escrito a despacho, se designa como administrador/a provisional de los bienes del sucesorio a 5555, quien previa aceptación del cargo mediante escrito con su firma y en forma digital, procederá a cumplir su cometido, con cargo de oportuna rendición de cuentas. Hágasele saber que toda suma de dinero que corresponda al causante, deberá ser depositada en el Banco de la Nación Argentina, sucursal Tribunales, a la orden de este Tribunal y como perteneciente a estos autos.\r\nExpídase testimonio del presente y de la aceptación del cargo. En ese sentido y a fin del diligenciamiento, deberá la parte interesada remitir el proyecto de testimonio por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado.\r\n6. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n7. Agréguese el bono profesional de conformidad con el art. 51, inc. “d”, de la ley 23.187.\r\n\"\r",
		  "level": 17,
		  "auditDate": "2021-05-31T01:01:28.711Z"
		},
		{
		  "caseId": 263,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			0,
			0,
			1,
			1,
			5555,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido.\r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. En atención a lo solicitado, con las facultades comunes de ley y las especiales que se indican en el escrito a despacho, se designa como administrador/a provisional de los bienes del sucesorio a 5555, quien previa aceptación del cargo mediante escrito con su firma y en forma digital, procederá a cumplir su cometido, con cargo de oportuna rendición de cuentas. Hágasele saber que toda suma de dinero que corresponda al causante, deberá ser depositada en el Banco de la Nación Argentina, sucursal Tribunales, a la orden de este Tribunal y como perteneciente a estos autos.\r\nExpídase testimonio del presente y de la aceptación del cargo. En ese sentido y a fin del diligenciamiento, deberá la parte interesada remitir el proyecto de testimonio por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado.\r\n6. Agréguese el bono profesional de conformidad con el art. 51, inc. “d”, de la ley 23.187.\r\n\r\n\"\r",
		  "level": 17,
		  "auditDate": "2021-05-31T01:01:28.711Z"
		},
		{
		  "caseId": 264,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			0,
			0,
			1,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.711Z"
		},
		{
		  "caseId": 265,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido.\r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n6. Agréguese el bono profesional de conformidad con el art. 51, inc. “d”, de la ley 23.187.\r\n\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.712Z"
		},
		{
		  "caseId": 266,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. Agréguese el bono profesional de conformidad con el art. 51, inc. “d”, de la ley 23.187.\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.712Z"
		},
		{
		  "caseId": 267,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			0,
			0,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide que se designe administrador?",
		  "level": 14,
		  "auditDate": "2021-05-31T01:01:28.712Z"
		},
		{
		  "caseId": 268,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			0,
			0,
			0,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Cúal es el nombre del propuesto como administrador?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.712Z"
		},
		{
		  "caseId": 269,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			0,
			0,
			0,
			1,
			5555
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.713Z"
		},
		{
		  "caseId": 270,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			0,
			0,
			0,
			1,
			5555,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. En atención a lo solicitado, con las facultades comunes de ley y las especiales que se indican en el escrito a despacho, se designa como administrador/a provisional de los bienes del sucesorio a 5555, quien previa aceptación del cargo mediante escrito con su firma y en forma digital, procederá a cumplir su cometido, con cargo de oportuna rendición de cuentas. Hágasele saber que toda suma de dinero que corresponda al causante, deberá ser depositada en el Banco de la Nación Argentina, sucursal Tribunales, a la orden de este Tribunal y como perteneciente a estos autos.\r\nExpídase testimonio del presente y de la aceptación del cargo. En ese sentido y a fin del diligenciamiento, deberá la parte interesada remitir el proyecto de testimonio por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado.\r\n6. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n7. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n\r\n\"\r",
		  "level": 17,
		  "auditDate": "2021-05-31T01:01:28.713Z"
		},
		{
		  "caseId": 271,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			0,
			0,
			0,
			1,
			5555,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. En atención a lo solicitado, con las facultades comunes de ley y las especiales que se indican en el escrito a despacho, se designa como administrador/a provisional de los bienes del sucesorio a 5555, quien previa aceptación del cargo mediante escrito con su firma y en forma digital, procederá a cumplir su cometido, con cargo de oportuna rendición de cuentas. Hágasele saber que toda suma de dinero que corresponda al causante, deberá ser depositada en el Banco de la Nación Argentina, sucursal Tribunales, a la orden de este Tribunal y como perteneciente a estos autos.\r\nExpídase testimonio del presente y de la aceptación del cargo. En ese sentido y a fin del diligenciamiento, deberá la parte interesada remitir el proyecto de testimonio por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado.\r\n6. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n\"\r",
		  "level": 17,
		  "auditDate": "2021-05-31T01:01:28.713Z"
		},
		{
		  "caseId": 272,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			0,
			0,
			0,
			0
		  ],
		  "isFinal": false,
		  "text": "¿Pide DEO a algún banco?",
		  "level": 15,
		  "auditDate": "2021-05-31T01:01:28.713Z"
		},
		{
		  "caseId": 273,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			0,
			0,
			0,
			0,
			1
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. En atención a lo solicitado, con las facultades comunes de ley y las especiales que se indican en el escrito a despacho, se designa como administrador/a provisional de los bienes del sucesorio a 5555, quien previa aceptación del cargo mediante escrito con su firma y en forma digital, procederá a cumplir su cometido, con cargo de oportuna rendición de cuentas. Hágasele saber que toda suma de dinero que corresponda al causante, deberá ser depositada en el Banco de la Nación Argentina, sucursal Tribunales, a la orden de este Tribunal y como perteneciente a estos autos.\r\nExpídase testimonio del presente y de la aceptación del cargo. En ese sentido y a fin del diligenciamiento, deberá la parte interesada remitir el proyecto de testimonio por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado.\r\n6. Atento a la denuncia de cuentas bancarias, líbrese D.E.O. por Secretaría a las entidades referidas para que en el plazo de diez días procedan a depositar en la cuenta abierta a nombre de la sucesión y a la orden del juzgado todas las sumas que correspondan al causante. \r\nDe manera previa, líbrese D.E.O. por Secretaría al Banco de la Nación Argentina a efectos de que proceda a abrir una cuenta en pesos a nombre de este proceso. \r\n7. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.714Z"
		},
		{
		  "caseId": 274,
		  "decition": [
			0,
			1,
			1,
			1,
			0,
			0,
			0,
			0,
			0,
			0,
			0
		  ],
		  "isFinal": true,
		  "text": "\"Proveyendo al escrito 1111 presentado por 2222 (letrado/a 3333): \r\nEn primer lugar, se aclara que este proceso tramitará de forma enteramente digital, de acuerdo con lo dispuesto por la acordada 31/20 de la Corte Suprema de Justicia de la Nación. Por ende, solo se admitirán presentaciones en formato electrónico y toda documentación deberá ser incorporada al proceso de igual manera, quedando los originales bajo custodia y responsabilidad del interesado hasta que el juzgado los solicite. A su vez, cuando la parte actúa con patrocinio letrado, las presentaciones deberán ser efectuadas también de forma digital, en las que deberá observarse la firma ológrafa del patrocinado (digitalizada por medios electrónicos) junto con la firma electrónica o digital del letrado. Todo aquél profesional que no denuncie su domicilio electrónico, quedará automáticamente intimado a denunciarlo, bajo apercibimiento de lo dispuesto en el art. 41 del Código Procesal. Aclarado ello, se provee en lo que corresponde al escrito de inicio. \r\n1. Por presentado en el carácter invocado y por constituido el electrónico. \r\nAtento a que no se denunció el domicilio real del presentante, de acuerdo a las previsiones contenidas en el artículo 40 del Código Procesal se lo intima a su cumplimiento en el plazo de cinco días, bajo el apercibimiento previsto en el artículo 41 segundo párrafo del ordenamiento referido. \r\n2. Al encontrarse “prima facie” acreditada la legitimación del presentante y comprobada la defunción de 4444, se declara abierto su proceso sucesorio “ab intestato”, debiendo publicarse edictos por un (1) día en el Boletín Oficial, citando a herederos, acreedores y a todos los que se consideren con derecho a los bienes de la persona fallecida por el plazo de treinta (30) días. \r\nNo obstante y como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56). A tal efecto, el interesado deberá adjuntar allí el formulario correspondiente, sin necesidad de sellado alguno o actuación por parte del juzgado. \r\n3. Una vez cumplido con lo anterior, hágase saber que el juzgado confeccionará los edictos y los enviará electrónicamente al Boletín Oficial, debiendo el interesado abonar el arancel que corresponda en dependencias de aquél. Al día siguiente de la publicación, el Boletín remitirá electrónicamente al juzgado las constancias respectivas las cuales se incorporarán al expediente. \r\n4. A su vez, una vez acreditado lo dispuesto en el punto 2, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Actos de Ultima Voluntad del Colegio de Escribanos a fin de que informe si existe testamento alguno a nombre del causante, debiendo en su caso remitir copia certificada de la escritura respectiva. \r\nTambién líbrese D.E.O. en los términos del art. 400 del Código Procesal al Colegio Público de Abogados a fin de que informe si existe testamento ológrafo alguno a nombre del causante, debiendo en su caso remitirlo al juzgado. \r\nHágase saber que en las referidas diligencias se deberá consignar la carátula y número de expediente, juzgado interviniente y los datos del causante (nombre y apellido, fecha de nacimiento, número de documento, nombre y apellido de los padres y estado civil, en caso de haber contraído nupcias se deberá informar el nombre y apellido del cónyuge o ex cónyuge, aún si hubiere fallecido). \r\n5. En atención a lo solicitado, con las facultades comunes de ley y las especiales que se indican en el escrito a despacho, se designa como administrador/a provisional de los bienes del sucesorio a 5555, quien previa aceptación del cargo mediante escrito con su firma y en forma digital, procederá a cumplir su cometido, con cargo de oportuna rendición de cuentas. Hágasele saber que toda suma de dinero que corresponda al causante, deberá ser depositada en el Banco de la Nación Argentina, sucursal Tribunales, a la orden de este Tribunal y como perteneciente a estos autos.\r\nExpídase testimonio del presente y de la aceptación del cargo. En ese sentido y a fin del diligenciamiento, deberá la parte interesada remitir el proyecto de testimonio por vía del sistema Lex-100, el cual después será suscripto por las autoridades del juzgado.\r\n6. No habiendo cumplido con lo dispuesto en el art. 51, inc. “d”, de la ley 23.187, se intima al profesional interviniente para que en el plazo de cinco días acompañe el bono correspondiente bajo apercibimiento de comunicar tal circunstancia al Colegio Público de Abogados.\r\n\"",
		  "level": 16,
		  "auditDate": "2021-05-31T01:01:28.714Z"
		},
		{
		  "caseId": 275,
		  "decition": [
			0,
			1,
			1,
			0
		  ],
		  "isFinal": true,
		  "text": "Proveyendo el escrito titulado “1111” presentado por \"2222\" (letrado/a \"3333\"): \r\nComo previo, una vez que se acompañen las partidas que permitan acreditar el vínculo invocado, se proveerá lo que en derecho corresponda.",
		  "level": 9,
		  "auditDate": "2021-05-31T01:01:28.714Z"
		},
		{
		  "caseId": 276,
		  "decition": [
			0,
			1,
			0
		  ],
		  "isFinal": true,
		  "text": "Proveyendo el escrito titulado “1111” presentado por \"2222\" (letrado/a \"3333\"): \r\nTeniendo en cuenta el último domicilio que surge de la partida de defunción, de la competencia vista al Fiscal en formato digital.-",
		  "level": 8,
		  "auditDate": "2021-05-31T01:01:28.714Z"
		},
		{
		  "caseId": 277,
		  "decition": [
			0,
			1,
			2
		  ],
		  "isFinal": true,
		  "text": "Proveyendo el escrito titulado “1111” presentado por \"2222\" (letrado/a \"3333\"): \r\nAtento a que no se acompañó la partida de defunción del causante, incorporado que sea el referido instrumento, se proveerá lo que en derecho corresponda.-",
		  "level": 8,
		  "auditDate": "2021-05-31T01:01:28.714Z"
		},
		{
		  "caseId": 278,
		  "decition": [
			0,
			2
		  ],
		  "isFinal": false,
		  "text": "¿El ultimo domicilio que surge de la partida es en CABA?",
		  "level": 7,
		  "auditDate": "2021-05-31T01:01:28.715Z"
		},
		{
		  "caseId": 279,
		  "decition": [
			0,
			2,
			1
		  ],
		  "isFinal": false,
		  "text": "¿Trajo las demás partidas para acreditar \"prima facie\" el vínculo invocado?",
		  "level": 8,
		  "auditDate": "2021-05-31T01:01:28.716Z"
		},
		{
		  "caseId": 280,
		  "decition": [
			0,
			2,
			1,
			1
		  ],
		  "isFinal": true,
		  "text": "Proveyendo el escrito titulado “1111” presentado por \"2222\" a través de su letrado apoderado \"3333\": \r\nEn atención a que en el poder acompañado no surge la facultad para aceptar herencias (art. 375, inc. “d”, del Código Civil y Comercial), acreditado ello se proveerá lo que en derecho corresponda.",
		  "level": 9,
		  "auditDate": "2021-05-31T01:01:28.716Z"
		},
		{
		  "caseId": 281,
		  "decition": [
			0,
			2,
			1,
			0
		  ],
		  "isFinal": true,
		  "text": "Proveyendo el escrito titulado “1111” presentado por \"2222\" a través de su letrado apoderado \"3333\": \r\nEn atención a que en el poder acompañado no surge la facultad para aceptar herencias (art. 375, inc. “d”, del Código Civil y Comercial) y que tampoco se acompañaron las partidas que permitan acreditar \"prima facie\" el vínculo invocado, cumplido con todo ello se proveerá lo que en derecho corresponda.",
		  "level": 9,
		  "auditDate": "2021-05-31T01:01:28.716Z"
		},
		{
		  "caseId": 282,
		  "decition": [
			0,
			2,
			0
		  ],
		  "isFinal": true,
		  "text": "Proveyendo el escrito titulado “1111” presentado por \"2222\" a través de su letrado apoderado \"3333\": \r\nEn primer lugar y en atención a que en el poder acompañado no surge la facultad para aceptar herencias (art. 375, inc. “d”, del Código Civil y Comercial), cumplido con tal recaudo se proveerá lo que corresponda. Oportunamente y acreditado lo anterior, teniendo en cuenta el último domicilio que surge de la partida de defunción, de la competencia vista al Fiscal en formato digital.-",
		  "level": 8,
		  "auditDate": "2021-05-31T01:01:28.716Z"
		},
		{
		  "caseId": 283,
		  "decition": [
			0,
			2,
			2
		  ],
		  "isFinal": true,
		  "text": "Proveyendo el escrito titulado “1111” presentado por \"2222\" a través de su letrado apoderado \"3333\": \r\nEn primer lugar y en atención a que en el poder acompañado no surge la facultad para aceptar herencias (art. 375, inc. “d”, del Código Civil y Comercial), cumplido con tal recaudo se proveerá lo que corresponda. Cumplido ello y acompañada la partida de defunción del causante, se proveerá lo que en derecho corresponda.-",
		  "level": 8,
		  "auditDate": "2021-05-31T01:01:28.716Z"
		},
		{
		  "caseId": 284,
		  "decition": [
			0,
			3
		  ],
		  "isFinal": false,
		  "text": "¿El ultimo domicilio que surge de la partida es en CABA?",
		  "level": 7,
		  "auditDate": "2021-05-31T01:01:28.717Z"
		},
		{
		  "caseId": 286,
		  "decition": [
			0,
			3,
			1
		  ],
		  "isFinal": true,
		  "text": "Proveyendo el escrito titulado “1111” presentado por \"2222\" (letrado/a \"3333\"): \r\nComo previo y teniendo en cuenta el último domicilio que surge de la partida de defunción, de la competencia vista al Fiscal en formato digital.-",
		  "level": 8,
		  "auditDate": "2021-05-31T01:01:28.717Z"
		},
		{
		  "caseId": 287,
		  "decition": [
			0,
			3,
			2
		  ],
		  "isFinal": true,
		  "text": "Proveyendo el escrito titulado “1111” presentado por \"2222\" (letrado/a \"3333\"): \r\nAtento a que no se acompañó la partida de defunción del causante, incorporado que sea el referido instrumento, se proveerá lo que en derecho corresponda.-",
		  "level": 8,
		  "auditDate": "2021-05-31T01:01:28.717Z"
		},
		{
		  "caseId": 288,
		  "decition": [
			1
		  ],
		  "isFinal": true,
		  "text": "REALIZAR INFORME RESPECTO DE LA CAUSA QUE SURGE DEL PEDIDO DE CONEXIDAD. SI SE ASUME, PEGAR INFORME Y LUEGO PROVEER PRIMERA PROVIDENCIA. CASO CONTRARIO, CONSULTAR CON FUNCIONARIO",
		  "level": 6,
		  "auditDate": "2021-05-31T01:01:28.717Z"
		},
		{
		  "caseId": null,
		  "decition": [],
		  "text": "REALIZAR INFORME RESPECTO DE LA CAUSA QUE SURGE DEL PEDIDO DE CONEXIDAD. SI SE ASUME, PEGAR INFORME Y LUEGO PROVEER PRIMERA PROVIDENCIA. CASO CONTRARIO, CONSULTAR CON FUNCIONARIO",
		  "level": 5,
		  "auditDate": "2021-05-31T01:01:28.717Z"
		}
	  ]
	</script>

	<title></title>
	<script>
		//**************************************************************************************
		//**************************************************************************************
		//**************************************************************************************
		function checkFrom() {
			let resultado = true
			'use strict'
			// Fetch all the forms we want to apply custom Bootstrap validation styles to
			let forms = document.querySelectorAll('.needs-validation')

			// Loop over them and prevent submission
			Array.prototype.slice.call(forms)
				.forEach(function (form) {
					if (!form.checkValidity()) {
						event.preventDefault()
						event.stopPropagation()
						resultado = false
					}
					form.classList.add('was-validated');
				})
			if (resultado) {
				document.getElementById("P1").readOnly = true;
				document.getElementById("P2").readOnly = true;
				document.getElementById("P3").readOnly = true;
				document.getElementById("P4").readOnly = true;
			}
			return resultado;
		}

		function getBackStep() {
			//Seteo el boton
			step.value = stringANumero(step.value) - 1;

			//Elimino la ultima pregunta
			if (deleteLastQuestion(level.value, step.value)) {
				btnNext.innerHTML = "Paso " + step.value + ". Siguiente..."
				if (step.value == 0)
					btnBack.style.visibility = 'hidden';
				return true
			}
		}

		function deleteLastQuestion(nivel, offset) {
			var result
			var question = document.getElementById("P" + nivel)
			var divQuestion = document.getElementById("P" + nivel + "row")

			divQuestion.parentNode.removeChild(divQuestion)

			level.value = stringANumero(level.value) - 1;
			//Desabilito las preguntas contestadas hasta ahora
			document.getElementById("P" + level.value).disabled = false

			var inputLabel555 = document.getElementById("P" + level.value + "_label")
			if (inputLabel555)
				inputLabel555.disabled = false
			return true
		}


		function getNextStep() {
			if (checkFrom()) {
				//Seteo el boton
				step.value = stringANumero(step.value) + 1;
				//Agrego la nueva pregunta
				console.log("STEP", step.value)
				if (addNextQuestion(level.value, step.value)) {
					btnNext.innerHTML = "Siguiente..."
					if (step.value > 0)
						btnBack.style.visibility = 'visible';
					return true
				}
				else {
					btnBack.style.visibility = 'hidden';
					btnNext.style.visibility = 'hidden';
					copyResultado("resultado");
					return false;
				}
			}
			else
				return false;
		}

		function addNextQuestion(nivel, offset) {
			var result
			var question = document.getElementById("P" + nivel)
			var divQuestion = document.getElementById("P" + nivel + "row")

			level.value = stringANumero(level.value) + 1;
			result = nextQuestion(divQuestion, level.value, offset, question.value)

			//Desabilito las preguntas contestadas hasta ahora
			question.disabled = true;
			return result
		}

		function nextQuestion(node, nivel, offset, opcResp) {
			offset = stringANumero(offset)
			//-------------------------------------------------
			//-- obtengo la proxima pregunta y sus opciones
			var optionSelected = getNextQuestion(nivel)
			if (opcResp == 5555) {
				P5555.value = document.getElementById("P" + (nivel - 1) + "_label").value
				document.getElementById("P" + (nivel - 1) + "_label").disabled = true
			}
			//***************
			if (optionSelected.isFinal) {
				resultadoRow.style.display = "block"
				resultadoHeader.innerHTML = "<span class='alert alert-success'>El despacho fue copiado al portapapeles.<span class='bg-dark text-white'>ID " + optionSelected.caseId + ".</span></span>"
				resultado.innerHTML = textFormat(optionSelected.text);
				return false
			} else {
				//-------------------------------------------------
				//-- Creo la nueva pregunta y la completo
				var newQuestion = node.cloneNode(true);
				newQuestion.setAttribute("id", "P" + nivel + "row");
				//seteo ID
				newQuestion.children[0].innerHTML = optionSelected.caseId + ". Nivel " + level.value;
				//seteo pregunta
				newQuestion.children[1].innerHTML = optionSelected.text;
				//-------------------------------------------------
				var divRespuesta = newQuestion.children[2]
				while (divRespuesta.firstChild)
					divRespuesta.removeChild(divRespuesta.firstChild)
				//obtengo las nuevas opciones
				var opcs = getOptions(optionSelected.decition, nivel, offset);
				var comboSelect

				if (opcs[0].value == 5555) {
					comboSelect = document.createElement("input");
					comboSelect.setAttribute("type", "hidden");
					comboSelect.setAttribute("id", "P" + nivel);
					comboSelect.setAttribute("value", 5555);
					btnNext.style.visibility = 'visible'

					var inputText = document.createElement("input");
					inputText.setAttribute("type", "text");
					inputText.setAttribute("id", "P" + nivel + "_label");
					inputText.setAttribute("class", "form-control");
					inputText.setAttribute("required", "");
					divRespuesta.appendChild(inputText)
				} else {
					btnNext.style.visibility = 'hidden'
					comboSelect = document.getElementById("P5").cloneNode(true)
					//comboSelect = document.createElement("select");
					//seteo ID combo 
					comboSelect.setAttribute("id", "P" + nivel);
					comboSelect.disabled = false
					comboSelect.innerHTML = "";
					//comboSelect.setAttribute("class", "form-select");
					//comboSelect.setAttribute("required", "");
					//agrego esas opciones
					var defaultOpc = new Option("Elija una opción...", "");
					defaultOpc.setAttribute("disabled", "");
					defaultOpc.setAttribute("selected", "");
					comboSelect.add(defaultOpc);
					opcs.map(op => {
						comboSelect.add(new Option(op.label, op.value));
					})
				}
				divRespuesta.appendChild(comboSelect)
				//comboSelect.focus()
				//Agrego el div con el mensaje
				divMsg = document.createElement("div");
				divMsg.setAttribute("class", "invalid-feedback");
				divMsg.innerHTML = "Debe elegir una opción"
				divRespuesta.appendChild(divMsg)
				//-------------------------------------------------
				//Adjunto el nuevo bloque a un div y luego lo inserto
				var tmpNode = document.createElement("div");
				tmpNode.appendChild(newQuestion);
				var str = tmpNode.innerHTML;
				node.insertAdjacentHTML('afterend', str);
				tmpNode = node = null; // prevent memory leaks in IE
				return true;
			}
		}
		function getNextQuestion(nivel) {
			var arr = []
			for (var i = 5; i < nivel; i++)
				arr.push(stringANumero(document.getElementById("P" + i).value))
			var options = getNextQuestionData(arr)
			return options
		}

		function getNextQuestionData(arr) {
			var options = data.filter(function (item) {
				if (JSON.stringify(item.decition) === JSON.stringify(arr))
					return true;
				else return false;
			});
			return options[0]
		}

		function getOptions(arr, nivel, offset) {
			var opt = {}
			var opcs = data.filter(function (item) {
				// Comparo item.decition - el ult. elemento con arr
				var tmpArr = item.decition.slice(0, offset)
				if (item.decition.length == offset + 1 && JSON.stringify(tmpArr) === JSON.stringify(arr)) {
					return true;
				}
				else return false;
			});
			var options = opcs.map(op => {
				return {
					"value": `${op.decition[offset]}`,
					"label": `${getOptionLabel(nivel, op.decition[offset])}`
				}
			})
			return options
		}
		function getOptionLabel(nivel, value) {
			nivel = stringANumero(nivel);
			var label = `FALTA DEFINIR ${nivel} - ${value}`
			if (value == 0)
				label = "No"
			if (value == 1)
				label = "Si"
			if (nivel === 6) {
				if (value == 1)
					label = "heredero con letrado patrocinante / heredero por apoderado CON facultad para aceptar herencias"
				if (value == 2)
					label = "heredero por apoderado SIN facultad para aceptar herencias"
				if (value == 3)
					label = "acreedor"
			}
			if (nivel === 7) {
				if (value == 0)
					label = "No"
				if (value == 1)
					label = "Si"
				if (value == 2)
					label = "NO TRAJO LA PARTIDA"
			}
			if (nivel === 15) {
				if (value == 5555)
					label = "Ingrese el nombre del administrador"
				if (value == 0)
					label = "No"
				if (value == 1)
					label = "Si"
			}
			return label
		}
		function textFormat(str) {

			let tab2 = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
			let tab = "<span style='mso-tab-count:2'>" + tab2 + tab2 + tab2 + "</span>"
			let interlineado = `<span style='font-size:14.0pt;line-height:24.0pt;font-family:"TimesNewRoman",serif;'>`
			let paragraph = "<p style='font-family:TimesNewRoman;font-size:14.0pt;line-height:24.0pt;text-align: justify;'>"

			let res = str.replace(/"/g, ""); //replaceAll
			res = res.replace(/(?:\\[rn]|[\r\n]+)+/g, "</span></p>" + paragraph + tab + interlineado);
			res = paragraph + tab + interlineado + "<u>" + res.replace("</span></p>" + paragraph, "</u></span></p>" + paragraph)
			//Reemplazo de variables
			res = variableFormat(res, "1111", P1.value);
			res = variableFormat(res, "2222", P2.value);
			res = variableFormat(res, "3333", P3.value);
			res = variableFormat(res, "4444", P4.value);
			res = variableFormat(res, "5555", P5555.value);
			//Reglas para negrita y subrayado
			var previoBold = 'como previo, líbrese D.E.O. en los términos del art. 400 del Código Procesal al Registro de Juicios Universales (Decreto-Ley 3003/56).'
			var previaU = 'De manera previa'
			res = res.replace(previoBold, "<b><u>" + previoBold.toUpperCase() + "</u></b>");
			res = res.replace("Como previo ", "<b>Como previo </b>");
			res = res.replace("se provee en lo que corresponde al escrito de inicio", "<b>se provee en lo que corresponde al escrito de inicio</b>");
			res = res.replace(previaU, "<u>" + previaU + "</u>");
			res = res + "</span></p>"

			return res;
		}

		function variableFormat(str, variable, respuesta) {
			return str.replace(variable, "<span class='bg-warning text-dark'>" + respuesta + "</span>");
		};

		function copyResultado(id) {
			var r = document.createRange();
			r.selectNode(document.getElementById(id));
			window.getSelection().removeAllRanges();
			window.getSelection().addRange(r);
			document.execCommand('copy');
			window.getSelection().removeAllRanges();
		}
	</script>
</head>

<body>
	<!-- Option 1: Bootstrap Bundle with Popper -->
	<script type="text/javascript" src="./js/bootstrap.bundle.min.js"></script>

	<form id="asistenteForm" class="row g-3 needs-validation" method="post" novalidate>
		<div class="container">
			<div class="row">
				<input id="level" type="hidden" value="5">
				<input id="step" type="hidden" value="0">
				<input id="P5555" type="hidden">
				<div class="alert alert-primary bg-secondary text-white w-100 mt-3 font-weight-bold" role="alert">
					<span id='version' data-toggle="tooltip" data-placement="top"></span>&nbsp;-&nbsp;
					<span id='autores' data-toggle="tooltip" data-placement="top"></span>
				</div>
			</div>
			<div class="row">
				<div class="col-md-2 col-2 py-2 modelo head">ID</div>
				<div class="col-md-5 col-10 py-2 modelo head">Pregunta</div>
				<div class="col-md-5 col-12 py-2 modelo head">Respuesta</div>
			</div>
			<div class="row">
				<div class="col-md-2 col-2 py-2 modelo nivel">I</div>
				<div class="col-md-5 col-10 py-2 modelo pregunta">Primera providencia de una sucesión
					ab-intestato,¿cuál es el título del escrito?
				</div>
				<div class="col-md-5 col-12 py-2 modelo respuesta">
					<input id="P1" type="text" class="form-control" required>
					<div class="valid-feedback">
						Ok!
					</div>
					<div class="invalid-feedback">
						Debe completar este campo!
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-2 col-2 py-2 modelo nivel">II</div>
				<div class="col-md-5 col-10 py-2 modelo pregunta">¿Cúal es el nombre o nombres de los peticionarios?
				</div>
				<div class="col-md-5 col-12 py-2 modelo respuesta">
					<input id="P2" type="text" class="form-control" required>
					<div class="valid-feedback">
						Ok!
					</div>
					<div class="invalid-feedback">
						Debe completar este campo!
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-2 col-2 py-2 modelo nivel">III</div>
				<div class="col-md-5 col-10 py-2 modelo pregunta">¿Cuál es el nombre o nombres de los abogados?</div>
				<div class="col-md-5 col-12 py-2 modelo respuesta">
					<input id="P3" type="text" class="form-control" required>
					<div class="valid-feedback">
						Ok!
					</div>
					<div class="invalid-feedback">
						Debe completar este campo!
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-2 col-2 py-2 modelo nivel">IV</div>
				<div class="col-md-5 col-10 py-2 modelo pregunta">¿Cúal es el nombre del causante?</div>
				<div class="col-md-5 col-12 py-2 modelo respuesta">
					<input id="P4" type="text" class="form-control" required>
					<div class="valid-feedback">
						Ok!
					</div>
					<div class="invalid-feedback">
						Debe completar este campo!
					</div>
				</div>
			</div>
			<div class="row" id="P5row">
				<div class="col-md-2 col-2 py-2 modelo nivel">V</div>
				<div class="col-md-5 col-10 py-2 modelo pregunta">¿Surge alguna conexidad de la caratula?</div>
				<div class="col-md-5 col-12 py-2 modelo respuesta">
					<select class="form-select" id="P5" required onchange="getNextStep();">
						<option selected disabled value="">Elija una opción...</option>
						<option value="1">Si</option>
						<option value="0">No</option>
					</select>
					<div class="invalid-feedback">
						Debe elegir una opción
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-6 py-2 modelo nivel text-left">
					<button id="btnBack" class="btn btn-secondary" type="button" style="visibility: hidden;"
						data-toggle="tooltip" data-placement="top" title="Vuelve a la pregunta anterior"
						onclick="getBackStep();">Deshacer</button>
				</div>
				<div class="col-6 py-2 modelo nivel text-right">
					<button id="btnNext" class="btn btn-primary" type="button" data-toggle="tooltip"
						data-placement="top" title="Se avanza a la siguiente pregunta" onclick="getNextStep();"
						style="visibility:hidden">Siguiente</button>
				</div>
			</div>
			<div id="resultadoRow" class="row" style="display:none">
				<hr>
				<div id="resultadoHeader" class="col-12 py-2" role="alert"></div>
				<div id="resultado" class="col-12 py-2" role="alert"
					style="font-family:TimesNewRoman;font-size:14.0pt;line-height:24.0pt;text-align: justify;">
				</div>
			</div>
			<div class="row">
				<div class="col-12 py-2 text-left">
					<hr>
					<button id="btnHome" class="btn btn-secondary" type="button" data-toggle="tooltip"
						data-placement="top" title="Este botón vuelve al inicio y pierde todos los cambios"
						onclick="if(confirm('¿Está ud. seguro que desea perder todos los cambios y volver al inicio?')){location.reload();}">Ir
						a
						inicio</button>
					<button id="btnLogoff" class="btn btn-secondary" type="button" data-toggle="tooltip"
						data-placement="top" title="Cerrar sesión"
						onclick="if(confirm('¿Está ud. seguro que desea salir del sistema?')){window.top.location='login.html';}">Salir</button>
				</div>
			</div>
		</div>
	</form>

	<script>
		// Example starter JavaScript for disabling form submissions if there are invalid fields
		(function () {
			'use strict'
			// Fetch all the forms we want to apply custom Bootstrap validation styles to
			var forms = document.querySelectorAll('.needs-validation')

			// Loop over them and prevent submission
			Array.prototype.slice.call(forms)
				.forEach(function (form) {
					form.addEventListener('submit', function (event) {
						if (!form.checkValidity()) {
							event.preventDefault()
							event.stopPropagation()
						}
						form.classList.add('was-validated')
					}, false)
				})
		})()
		var data = JSON.parse(document.getElementById('data').textContent);
		//******************************************
		document.title = proyectName;
		document.getElementById('version').innerHTML = proyectName;
		document.getElementById('version').title = desarrollador;
		document.getElementById('autores').innerHTML = autores;
		//******************************************
	</script>
</body>

</html>
