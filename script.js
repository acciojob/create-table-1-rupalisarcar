function insert_Row() {
    //Write your code here
	console.log("test")
	const table = document.getElementById("sampleTable");
	
	const tr = table.insertRow(0);//document.createElement("tr");
	const firstCell = tr.insertCell(0)//document.createElement("td");
	firstCell.textContent = 'New Cell1';
	const secondCell = tr.insertCell(1)//document.createElement("td");
	secondCell.textContent = 'New Cell2';
	// tr.appendChild(firstCell);
	// tr.appendChild(secondCell);
	// table.appendChild(tr);  
}
