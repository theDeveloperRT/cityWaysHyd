let listLEN3 = getId('listLEN3');
let listLEN4 = getId('listLEN4');

let routesArrayLEN3 = []
let routesArrayLEN4 = []
let newRoutesSHRT = ['24E', '217D', '231KN', '282K', '6IW/252', '16/10YF', '224/47D']

routesArray.forEach(element => {
    if (element.length <= 3 && !(newRoutesSHRT.includes(element))) {
        routesArrayLEN3.push(element);
    } else if (element.length == 4 && !(newRoutesSHRT.includes(element))) {
        routesArrayLEN4.push(element);
    }
});

function getRandomRoutes(array, count) {
    return array
        .sort(() => Math.random() - 0.5)
        .slice(0, count);
}

let randomRoutes3 = getRandomRoutes(routesArrayLEN3, 5);
let randomRoutes4 = getRandomRoutes(routesArrayLEN4, 4);

listLEN3.innerHTML = "";
listLEN4.innerHTML = "";

createHomeRoutes(randomRoutes3, listLEN3);
createHomeRoutes(randomRoutes4, listLEN4);

function createHomeRoutes(array, list) {
    array.forEach(element => {
        let li = document.createElement("li");
        li.setAttribute('onclick', 'viewRoute(this)');
        li.textContent = element;
        list.appendChild(li);
    });
}

// console.log(randomRoutes3);
// console.log(randomRoutes4);