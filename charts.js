function loadCharts(querySnapshot){
    // Obtenemos el elemento donde pondremos las gráficas
    const chartsDiv = document.getElementById("charts");
    // Usamos un contador para saber en que grafica vamos
    let chartCont = 0;

    // Para cada documento
    querySnapshot.forEach(function(doc) {
        // Creamos el contenedor de la gráfica individual
        chartsDiv.innerHTML = chartsDiv.innerHTML + `<canvas id=chart`+chartCont+`></canvas>`;
        // Obtenemos el canvas del mismo, que es donde se dibuja
        let ctx = document.getElementById("chart"+chartCont).getContext('2d');

        // Obtenemos la información individual del documento
        let data = doc.data();

        // Esto es para organizar la información para la gráfica
        let chartData = {
            datasets: [{
                data: [],
                backgroundColor: []
            }],
            labels: [ ]
        }

        // Para cada llave en la información
        for(var key in data){
            // guardamos la llave como label
            chartData.labels.push(key)
            // guardamos el valor que tiene la llave como data
            chartData.datasets[0].data.push(data[key])
            // generamos aleatoriamente un conjunto de colores para la gráfica
            chartData.datasets[0].backgroundColor.push('rgb('+Math.ceil(Math.random()*255)+', '+Math.ceil(Math.random()*255)+', '+Math.ceil(Math.random()*255)+')')
        }

        // Creamos la gráfica
        new Chart(ctx,{
            type: 'pie',
            data: chartData,
            options: {
                title: {
                  display: true,
                  // mostramos el nombre de la encruzijada
                  text: doc.id
                }
              }
        })
        chartCont++;
    });
}

// Mandamos a llamar la función read de database con el callback
read(loadCharts);