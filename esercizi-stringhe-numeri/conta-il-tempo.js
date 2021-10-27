/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/

var time = 56000;
var secondperhour = 3600;
var secondperminute = 60;

var hour = Math.floor(time/secondperhour);
var hourinsecond = (hour*secondperhour);
var minute = Math.floor([time-hourinsecond]/60);
var minuteinsecond = minute*secondperminute;
var second = time - hourinsecond - minuteinsecond;


console.log(hour, minute, second);
