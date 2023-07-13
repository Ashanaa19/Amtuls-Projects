// Fetch the CSV file
fetch(https://raw.githubusercontent.com/Ashanaa19/Amtuls-Projects/main/Table_Input.csv)
  .then(response => response.text())
  .then(data => {
    var parsedData = parseCSVData(data);

    // Check the parsed data
    console.log(parsedData);
  })
  .catch(error => {
    console.error('Error reading CSV file:', error);
  });
    // Process the CSV data
    var csvRows = data.split('\n');

    // Table 1
    var tableBody1 = document.querySelector('#csvTable1 tbody');
    csvRows.forEach(row => {
      var csvColumns = row.split(',');
      var tr = document.createElement('tr');
      csvColumns.forEach(column => {
        var td = document.createElement('td');
        td.textContent = column.trim();
        tr.appendChild(td);
      });
      tableBody1.appendChild(tr);
    });

    // Table 2
    var alphaValue = calculateExpression("A5 + A20");
    document.getElementById('alphaValue').textContent = alphaValue;

    var betaValue = calculateExpression("A15 / A7");
    document.getElementById('betaValue').textContent = betaValue;

    var charlieValue = calculateExpression("A13 * A12");
    document.getElementById('charlieValue').textContent = charlieValue;
  })
  .catch(error => console.error(error));

// Function to calculate expressions
function calculateExpression(expression) {
  var values = {
    "A5": 10,
    "A20": 5,
    "A15": 30,
    "A7": 6,
    "A13": 8,
    "A12": 4
  };
  for (var key in values) {
    if (expression.includes(key)) {
      expression = expression.replace(key, values[key]);
    }
  }
  return eval(expression);
}
