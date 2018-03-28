var submit = document.getElementById("submit");
var inputs = document.querySelectorAll("input");
var p = document.getElementById('total');
var js = document.getElementById('js');
var java = document.getElementById('java');
var py = document.getElementById('py');
var csh = document.getElementById('c#');
var cpl = document.getElementById('c++');
var sql = document.getElementById('sql');
var php = document.getElementById('php');
var rubi = document.getElementById('rubi');
var perl = document.getElementById('perl');

var sjs = document.getElementById('sjs');
var sjava = document.getElementById('sjava');
var spy = document.getElementById('spy');
var scsh = document.getElementById('sc#');
var scpl = document.getElementById('sc++');
var ssql = document.getElementById('ssql');
var sphp = document.getElementById('sphp');
var srubi = document.getElementById('srubi');
var sperl = document.getElementById('sperl');


var language = '';
var javascriptCounter = 0;
var javaCounter = 0;
var pythonCounter = 0;
var csharpCounter = 0;
var cplusplusCounter = 0;
var sqlCounter = 0;
var phpCounter = 0;
var rubiCounter = 0;
var perlCounter = 0;
var value = '';


function onJavascriptSelect(value) {
	if (value === 'javascript'){
		javascriptCounter++
		js.innerHTML = `Javascript: ${javascriptCounter}`
		document.getElementById('inputjs').checked = false;
	}
}

function onJavaSelect(value) {
	if (value === 'java'){
		javaCounter++
		java.innerHTML = `Java: ${javaCounter}`
		document.getElementById('inputjava').checked = false;
	}
}

function onPythonSelect(value) {
	if (value === 'python'){
		pythonCounter++
		py.innerHTML = `Python: ${pythonCounter}`
		document.getElementById('inputpy').checked = false;
	}
}

function onCsharpSelect(value) {
	if (value === 'c#'){
		csharpCounter++
		csh.innerHTML = `C#: ${csharpCounter}`
		document.getElementById('inputc#').checked = false;
	}
}

function onCplusplusSelect(value) {
	if (value === 'c++'){
		cplusplusCounter++
		cpl.innerHTML = `C++: ${cplusplusCounter}`
		document.getElementById('inputc++').checked = false;
	}
}

function onSQLSelect(value) {
	if (value === 'sql'){
		sqlCounter++
		sql.innerHTML = `SQL: ${sqlCounter}`
		document.getElementById('inputsql').checked = false;
	}
}

function onPHPSelect(value) {
	if (value === 'php'){
		phpCounter++
		php.innerHTML = `PHP: ${phpCounter}`
		document.getElementById('inputphp').checked = false;
	}
}

function onRubiSelect(value) {
	if (value === 'rubi'){
		rubiCounter++
		rubi.innerHTML = `Rubi: ${rubiCounter}`
		document.getElementById('inputrubi').checked = false;
	}
}

function onPerlSelect(value) {
	if (value === 'perl'){
		perlCounter++
		perl.innerHTML = `Perl: ${perlCounter}`
		document.getElementById('inputperl').checked = false;
	}
}

function percentage(respondentsCounter) {
	console.log(respondentsCounter)
	sjs.innerHTML = `(${(javascriptCounter*100/respondentsCounter).toFixed(2)}%)`
	sjava.innerHTML = `(${(javaCounter*100/respondentsCounter).toFixed(2)}%)`
	spy.innerHTML = `(${(pythonCounter*100/respondentsCounter).toFixed(2)}%)`
	scsh.innerHTML = `(${(csharpCounter*100/respondentsCounter).toFixed(2)}%)`
	scpl.innerHTML = `(${(cplusplusCounter*100/respondentsCounter).toFixed(2)}%)`
	ssql.innerHTML = `(${(sqlCounter*100/respondentsCounter).toFixed(2)}%)`
	sphp.innerHTML = `(${(phpCounter*100/respondentsCounter).toFixed(2)}%)`
	srubi.innerHTML = `(${(rubiCounter*100/respondentsCounter).toFixed(2)}%)`
	sperl.innerHTML = `(${(perlCounter*100/respondentsCounter).toFixed(2)}%)`

}

inputs.forEach(input => {
	input.addEventListener("click", function () {
		value = this.getAttribute("value");
		onSubmit(value)
	})
})

function entrySubmitted() {
	//
}


function onSubmit(value) {
	submit.addEventListener("click", function() {

		onJavascriptSelect(value);
		onJavaSelect(value);
		onPythonSelect(value);
		onCsharpSelect(value);
		onCplusplusSelect(value);
		onSQLSelect(value);
		onPHPSelect(value);
		onRubiSelect(value);
		onPerlSelect(value);
		value = ''
		
		var respondentsCounter = 
			javascriptCounter +
			javaCounter + 
			pythonCounter + 
			csharpCounter +
			cplusplusCounter +
			sqlCounter +
			phpCounter +
			rubiCounter +
			perlCounter;

		percentage(respondentsCounter);

		p.innerHTML = `Total Respondents: ${respondentsCounter}`

		entrySubmitted();
	})
}

