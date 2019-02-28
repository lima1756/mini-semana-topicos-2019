function createDomElement(position, elementName, attributes){
    let element = document.createElement(elementName);
    for(var key in attributes){
        let att = document.createAttribute(key);      
        att.value = attributes[key];
        element.setAttributeNode(att)
    }
    position.appendChild(element);
    return element;
}


function loadCharts(querySnapshot){
    const chartsDiv = document.getElementById("charts");

    let chartCont = 0;
    let charts = []
    querySnapshot.forEach(function(doc) {
        chartsDiv.innerHTML = chartsDiv.innerHTML + `<canvas id=chart`+chartCont+`></canvas>`;
        let ctx = document.getElementById("chart"+chartCont).getContext('2d');

        let data = doc.data();
        let chartData = {
            datasets: [{
                data: [],
                backgroundColor: []
            }],
            labels: [ ]
        }
        for(var key in data){
            chartData.labels.push(key)
            chartData.datasets[0].data.push(data[key])
            chartData.datasets[0].backgroundColor.push('rgb('+Math.ceil(Math.random()*255)+', '+Math.ceil(Math.random()*255)+', '+Math.ceil(Math.random()*255)+')')
        }

        charts.push(
            new Chart(ctx,{
                type: 'pie',
                data: chartData,
                options: {
                    title: {
                      display: true,
                      text: doc.id
                    }
                  }
            })
        ); 
        chartCont++;
    });
}

read(loadCharts);