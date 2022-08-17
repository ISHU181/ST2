function loadXMLDoc() {
	var xhttp = new XMLHttpRequest();
	var data;
	xhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
		data = JSON.parse(this.responseText);
		console.log(data);
		console.log(data[0].address);
		var html = '<table>';
		  html += '<tr>';
		  for( var j in data[0] ) {
		  	html += '<th>' + j + '</th>';
		  }
		  html += '</tr>';
		  for( var i = 0; i < data.length; i++) {
			  html += '<tr>';
			  for( var j in data[i] ) {
				  console.log((j));
				  if(j==="address"){html += '<td>' + data[i][j].city + '</td>';}
				  else if(j==="company"){html += '<td>' + data[i][j].name + '</td>';}
				  else{
					  html += '<td>' + data[i][j] + 						'</td>';
					  }
			  }
			  html += '</tr>';
		  }
		  html += '</table>';
		  document.getElementById("card_table").innerHTML = html;
	   }
	  
	};
	const api = "https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09";
	xhttp.open("GET", api, true);
	xhttp.send();
  }
