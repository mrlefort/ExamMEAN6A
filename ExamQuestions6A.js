/**
 * Created by mrlef on 1/9/2017.
 */


// Question 1 - Name some of the attributes of the HTTP protocol which makes it difficult to use for ------------------
//real time systems.

// Store response headers.
// Response kan være "gammelt" når det bliver sendt tilbage til clienten.
//Half duplex - kan kun sende en vej ad gangen. (tænkt på en walkie talkie, kun 1 kan snakke ad gangen).









// Question 2 - Explain polling and long-polling strategies, their pros and cons. -------------------------------------
    /*
    Ved polling sender browseren http requests på regulære intervaller og modtager med det samme et response.
    Denne teknik var det første forsøg for at få browseren til at give "real-time" information.
    Åbenlyst er dette en god løsning hvis man kender det eksakte interval for hver aflevering af en besked, for så kan
    man synkronisere klient request til kun at ske når der er information klar på severen.
    Real time information sker dog ofte hurtigt og er ikke forudsigeligt, hvilket betyder der kommer mange unødvendige
    requests og som et resultat kan der være mange forbindelser som bliver åbnet og lukket - unødvendigt.

    Ved long polling sender browseren et request til serveren som holder request åben i et stykke tid.
    Hvis der er noget information klar sender den så et response til klienten.
    Er der ikke info klar indenfor den tid så sender severen en besked om at terminere den åbne request.
    Dette er ikke nødvendigvis en bedre løsning end "polling" da man kan ende op med en masse loops af øjeblikkelige
    polls.
     */






// Question 3 - What is the WebSocket protocol, how is it different from HTTP communication, what ---------------------
// advantages it has over HTTP?

//Den er full duplex - kan kommunikere begge veje samtidigt.
//Der er små headers.








// Question 4 - Explain what the WebSocket Protocol brings to the Web-world. ------------------------------------------
    //Socket er en forbindelse. Dvs serveren har en port den lytter til, når der kommer en request som bliver accepteret
    //så laver serveren en forbindelse og kender addressen på klienten som den skal sende info tilbage til.
    // så laver den en ny socket til den samme port, så der kan komme nye forbindelser.

    //På klient siden, hvis dens connection er accepteret, laver den en socket og den kan klienten bruge til at
    //kommunikere med serveren.

    //Socket er et talerør. En tube.


/*
Det bringer en full-duplex, 2-vejs kommunikations kanal der opererer på en enkelt socket på web.
- Den har små headers.

eksempel på web-socket request:


Når der er en connection, kan WebSocket data frames sendes frem og tilbage mellen klient og server i full-duplex
og disse fylder kun få bytes.

 */












// Question 5 - Explain and demonstrate, using a package like Socket.io (on the Server), the --------------------------
// process of WebSocket communication - From connecting client to server, through
// sending messages, to closing connection:
// On the client
// On the server

/*
På index.js og app.js kører vi henholdsvis klient og server. Der kan man se serveren lytter til port 3000
og klienten laver en connection til den port.

Så kører vi sendNumber() som sender et tal indtil den når 5, hvorefter vi lukker connection.
 */






// Question 6 - What's the advantage of using libraries like Socket.IO, Sock.JS, WS, over pure ------------------------
// WebSocket libraries in the backend and standard APIs on frontend? Which problems
// do they solve?

/*
Vi har brugt middleware som hedder websocket til at lave eksemplet ovenfor.

De giver en masse ekstra muligheder som ren websocket ikke giver. Såsom "heartbeats / keep alive calls" (dette er små
beskeder som bliver sendt på pre-defineret intervaller. De sikrer at den anden side er responsive og forhindrer feks
firewalls fra at "cutte" ens connection grundet in-aktivitet), "reconnecting" (som re-etablerer connection
 hvis ens connection dropper) og "http fallback" (hvis websocket ikke er tilgængeligt "falder den tilbage" på
 http long polling feks).
 */