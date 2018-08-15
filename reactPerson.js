let person = {
  name: 'Joan',
  age: 24,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
  sayHello: () => {
    return 'Hello, there!';
  }    
};

console.log(person.sayHello());
console.log(person['name']);
console.log(person['age']);

let day = 'Tuesday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person[alarm]);
person.hobbies = ['Hiking', 'Biking'];
console.log(person.hobbies);
