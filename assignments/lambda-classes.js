// CODE here for your Lambda Classes

class Person {
    constructor(base){
        this.name = base.name;
        this.age = base.age;
        this.location = base.location;
        this.gender = base.gender;
        
    }
    speak(){
        return `Hello! My name is ${this.name}, I am from ${this.location}.` 
    }
}

class Instructor extends Person {
    constructor(teacher) {
        super (teacher);
        this.specialty = teacher.specialty;
        this.favLanguage = teacher.favLanguage;
        this.catchPhrase = teacher.catchPhrase;
    }
    demo (subject) {
        return `Today we are learning about ${subject}!`
    }
}

class Student extends Person {
    constructor(stu) {
        super (stu);
        this.previousBackground = stu.previousBackground;
        this.className = stu.className;
        this.favSubjects = stu.favSubjects;
    }
    listsSubjects () { 
        return this.favSubjects.join("\n");
    }
    PRAssignment (subject) {
        return `${this.name} has submitted a PR for ${subject}.`
    }
    sprintChallange (subject) {
        return `${this.name} has submitted a PR for ${subject}.`
    }
}

class ProjectManager extends Instructor {
    constructor(ProjectManager){
        super (ProjectManager); 
        this.gradClassName = ProjectManager.gradClassName;
        this.favInstructor = ProjectManager.favInstructor;
    }
    standUp (channel) {
        return `${this.name} announces to ${channel} , @channel standy times!` 
    }
    debugsCode (student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
    }
}

const joe = new Instructor({
    name: 'joe',
    location: 'Duluth, MI',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies.`
});

const jane = new Instructor({
    name: 'Jane',
    location: 'Queens, NY',
    age: 32,
    gender: 'female',
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `OMG starbucks is open!`
});

const karen = new Instructor({
    name: 'Karen',
    location: 'Madison, WI',
    age: 28, 
    gender: 'female',
    favLanguage: 'CSS',
    specialty: 'Front-end',
    catchPhrase: `Who wants cookies?`
});

const sam = new Student({
    name: 'Sam',
    location: 'Tipp City, OH',
    age: 21, 
    gender: 'male',
    previousBackground: 'AppleBee\'s',
    className: 'WEB17',
    favSubjects: ['HTML', 'CSS', 'Preprocessing']
});

const vanessa = new Student({
    name: 'Vanessa',
    location: 'Orlando, FL',
    age: 20, 
    gender: 'female',
    previousBackground: 'Geek Squad',
    className: 'IOS18',
    favSubjects: ['Swift', 'CocoaTouch', 'UI and UX design']
});

const tyler = new Student({
    name: 'Tyler',
    location: 'Myrtle Beach, SC',
    age: 18, 
    gender: 'male',
    previousBackground: 'High School',
    className: 'WEB18',
    favSubjects: ['React', 'Data Science', 'Java']
});

console.log(joe.demo("Python"));
console.log(jane.catchPhrase);
console.log(karen.speak());
console.log(sam.PRAssignment('JavaScript-III'));
console.log(vanessa.sprintChallange('Swift'));
console.log(tyler.listsSubjects());