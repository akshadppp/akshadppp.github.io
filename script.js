
document.addEventListener('DOMContentLoaded', function () {
    // Fetch the CSV file using Fetch API
    fetch('Frontend Developer Assignment Data - Sheet3.csv')
      .then(response => response.text())
      .then(data => {
        // Parse CSV data
        const rows = data.split('\n');
        const labels = [];
        const values = [];
        console.log(rows);
        //for labesl

        let labelsArr = rows[0].split(',');
        for(let i = labelsArr.length-1;i>=3;i--){
            labels.push(labelsArr[i]);
        }
        // Extract labels and values from CSV
        for (let i = 1; i < rows.length; i++) {
          const valArray = rows[i].split(',');

          for(let j = 3;j<valArray.length;j++){
            values.push(parseFloat(valArray[j]));
           
          }

        
          
          
        }
  
        // Create a horizontal bar chart using Chart.js
        createHorizontalBarChart(labels, values);
      })
      .catch(error => console.error('Error fetching CSV:', error));
  });
  
  function createHorizontalBarChart(labels, values) {
    // Get the canvas element
    const ctx = document.getElementById('myChart').getContext('2d');
  
    // Create a horizontal bar chart
    const myChart = new Chart(ctx, {
        type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Horizontal Bar Chart from CSV',
          data: values,
          backgroundColor: 'rgba(75, 192, 192, 0.2)', // Bar color
          borderColor: 'rgba(75, 192, 192, 1)', // Border color
          borderWidth: 1,
          barThickness:10, // Border width
        }]
      },
      options: {
        indexAxis: 'y',
        scales: {
          x: {
            beginAtZero: true
          },
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }


  //Graph

  document.addEventListener('DOMContentLoaded', function () {
    // Fetch the CSV file using Fetch API
    fetch('Frontend Developer Assignment Data - Sheet3.csv')
      .then(response => response.text())
      .then(data => {
        // Parse CSV data
        const rows = data.split('\n');
        const labels = [];
        const values = [];
  
        // Extract labels and values from CSV
        for (let i = 1; i < rows.length; i++) {
          const label = rows[i].split(',');
            labels.push(label[0]);

          
         const valArray = rows[i].split(',');
            for(let j=3;j<valArray.length;j++){
                values.push(parseFloat(valArray[j]));
            }
           
           
        
        }
  
        // Create a line chart using Chart.js
        createLineChart(labels, values);
      })
      .catch(error => console.error('Error fetching CSV:', error));
  });
  
  function createLineChart(labels, values) {
    // Get the canvas element
    const ctx = document.getElementById('myChart2').getContext('2d');
  
    // Create a line chart
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Line Chart from CSV',
          data: values,
          fill: false,
          borderColor: 'rgba(75, 192, 192, 1)', // Line color
          borderWidth: 2 // Line width
        }]
      },
      options: {
        scales: {
          x: {
            beginAtZero: true
          },
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  


  