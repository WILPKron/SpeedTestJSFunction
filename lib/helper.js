"use strict";
export const checkCode = (callback, selector = "default", title = "", iterationNumber = 50) => {
    const timeWork = [];
    const memoryBefore = getMemoryKbChrome()
    for(let i = 0; i < iterationNumber; i++) {
        // timeWork.push(Math.round(timeChecker(callback)))
        timeWork.push(timeChecker(callback))
    }
    const memoryAfter = getMemoryKbChrome()
    const average = timeWork.reduce( ( p, c ) => p + c, 0 ) / timeWork.length;
    const container = document.querySelector("#app")
    const div = document.createElement("div")
    div.innerHTML = `
        <canvas id="${selector}"></canvas>
        <div>Среднее количество времени: ${average}</div>
        <!--div>Затрачено памяти в КБ: ${memoryBefore - memoryAfter}</div-->
    `

    title = title ? title : selector

    const divInfo = document.createElement("div")
    divInfo.innerHTML = ` ${title}:  ${average}`
    document.querySelector(".info").appendChild(divInfo)

    let work = false;
    container.addEventListener('DOMNodeInserted', () => {
        if(!work) {
            renderChart(`#${selector}`, timeWork, title)
            work = true
        }
    }, false)
    container.appendChild(div)

}

export function mixarr (arr){
    return arr.map(i=>[Math.random(), i]).sort().map(i=>i[1])
}

export const getMemoryKbChrome = () => {
    if(!window.performance) {
        throw new Error("No 'performance' property")
    }
    return Math.round(window.performance.memory.usedJSHeapSize * 100 / 1024) / 100
}

export const timeChecker = (callback) => {
    const start = window.performance.now()
        callback.call()
    return window.performance.now() - start
}

export const renderChart = (selector, data = [], title = "") => {
    const cavas = document.querySelector(selector);
    let ctx = cavas.getContext('2d');
    let chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Object.keys(data),
            datasets: [{
                label: title,
                backgroundColor: 'rgb(255, 99, 132, 0)',
                borderColor: 'rgb(255, 99, 132)',
                data
            }]
        },
        options: {}
    });
}