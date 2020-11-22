function addRow()
{
    const numeriukas = document.getElementById('numeriukas').value;
    const table = document.getElementsByTagName('table')[0];
    const newRow = table.insertRow(table.rows.length/2+1);
    const cel1 = newRow.insertCell(0);
    const cel2 = newRow.insertCell(1);


    cel1.innerHTML = numeriukas;
    cel2.innerHTML = '<input type="text" placeholder="">';
}


function random()
{
    document.getElementById("number").innerHTML = Math.floor(Math.random() * 20);

}