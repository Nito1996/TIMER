let idKey = 0;
function timer() {
    let h = document.getElementById("editHours").value;
    let m = document.getElementById("editMinutes").value;
    let s = document.getElementById("editSeconds").value;
    let hours = parseInt(h);
    let minutes = parseInt(m);
    let seconds = parseInt(s);
    loadSeconds();
    intervalId = setInterval(loadSeconds, 1000);
    addAtStart();
    //Definir y ejecutar los segundos haciendo que se reanude la cuenta al <0.
    function loadSeconds() {
        let txtSeconds;
        //Validar el reinicio del conteo.
        if (seconds < 0) {
            seconds = 59;
        }
        //Cuando los segundos sean <10 agragarle un 0 para brindar una mejor experiencia visual.
        if (seconds < 10) {
            txtSeconds = `0${seconds}`;
            //Se toman los segundos actuales y se almacenan en una variable para mostrarla y no cambie la variable principal de los segundos.
        } else {
            txtSeconds = seconds;
        }
        //Mostrar los segundos en pantalla.
        document.getElementById('seconds').innerHTML = txtSeconds;
        //Restar un seg para el siguiente intervalo.
        seconds--;
        //Exportar el parametro necesario actualizado para el siguiente intervalo.
        loadMinutes(seconds);
    }

    //Definir y ejecutar los minutos.
    function loadMinutes(seconds) {
        //Crear la variable donde almacenaremos el valor que se va a mostrar en pantalla.
        let txtMinutes;
        //Validar el reinicio del conteo.
        if (seconds == -1 && minutes !== 0) {
            setTimeout(() => {
                minutes--;
            }, 500)
            //Cuando el contador de segundos termine, comenzar el contador de los minutos en 0.5seg.
        } else if (seconds == -1 && minutes == 0) {
            setTimeout(() => {
                minutes = 59;
            }, 500)
        }
        //Cuando los minutos sean <10 agragarle un 0 para brindar una mejor experiencia visual.
        if (minutes < 10) {
            txtMinutes = `0${minutes}`;
            //Se toman los minutos actuales y se almacenan en una variable para mostrarla y no cambie la variable principal de los minutos.
        } else {
            txtMinutes = minutes;
        }
        //Mostrar los minutos en pantalla.
        document.getElementById('minutes').innerHTML = txtMinutes;
        //Exportar el parametro necesario actualizado para el siguiente intervalo.
        loadHours(seconds, minutes);
    }

    //Definir y ejecutar las horas.
    function loadHours(seconds, minutes) {
        //Crear la variable donde almacenaremos el valor que se va a mostrar en pantalla.
        let txtHours;
        //Validar el reinicio del conteo.
        if (seconds == -1 && minutes == 0 && hours !== 0) {
            setTimeout(() => {
                hours--;
            }, 500)
            //Cuando el contador de minutos termine, comenzar el contador de las horas en 0.5seg.
        } else if (seconds == -1 && minutes == 0 && hours == 0) {
            stop();
        }
        //Cuando las horas sean <10 agragarle un 0 para brindar una mejor experiencia visual.
        if (hours < 10) {
            txtHours = `0${hours}`;
            //Se toman las horas actuales y se almacenan en una variable para mostrarla y no cambie la variable principal de las horas.
        } else {
            txtHours = hours;
        }
        //Mostrar las horas en pantalla.
        document.getElementById('hours').innerHTML = txtHours;
    }

    //Detener la cuenta.
    function stop() {
        clearInterval(intervalId);
    }
}
/////////////////////////////////////////////////////////////
function pause() {
    clearInterval(intervalId);
    let hoursContent = document.getElementById("hours").textContent;
    let minutesContent = document.getElementById("minutes").textContent;
    let secondsContent = document.getElementById("seconds").textContent;
    document.getElementById("editHours").value = hoursContent;
    document.getElementById("editMinutes").value = minutesContent;
    document.getElementById("editSeconds").value = secondsContent;
    addAtPause();
}

function addAtPause() {
    let hoursContent = document.getElementById("hours").textContent;
    let minutesContent = document.getElementById("minutes").textContent;
    let secondsContent = document.getElementById("seconds").textContent;
    document.getElementById("editHours").value = hoursContent;
    document.getElementById("editMinutes").value = minutesContent;
    document.getElementById("editSeconds").value = secondsContent;
    let timeSavedAtPause = {
        hoursContent, minutesContent, secondsContent
    };
    let value = JSON.stringify({ timeSavedAtPause });
    idKeyFunction();
    localStorage.setItem(idKey, value);
}

function idKeyFunction() {
    idKey++;
}

function restart() {
    addAtRestart();
}

function addAtRestart() {
    let hoursContent = document.getElementById("hours").textContent;
    let minutesContent = document.getElementById("minutes").textContent;
    let secondsContent = document.getElementById("seconds").textContent;
    document.getElementById("editHours").value = hoursContent;
    document.getElementById("editMinutes").value = minutesContent;
    document.getElementById("editSeconds").value = secondsContent;
    let timeSavedAtRestart = {
        hoursContent, minutesContent, secondsContent
    };
    let value = JSON.stringify({ timeSavedAtRestart });
    idKeyFunction();
    localStorage.setItem(idKey, value);
}

//function addAtStart() {
//  let hoursContent = document.getElementById("hours").textContent;
//    let minutesContent = document.getElementById("minutes").textContent;
//    let secondsContent = document.getElementById("seconds").textContent;
//    document.getElementById("editHours").value = hoursContent;
//    document.getElementById("editMinutes").value = minutesContent;
//    document.getElementById("editSeconds").value = secondsContent;
//    let timeSavedAtStart = {
//        hoursContent, minutesContent, secondsContent
//   };
//    let value = JSON.stringify({ timeSavedAtStart });
//    idKeyFunction();
//    localStorage.setItem(idKey, value);
// }

