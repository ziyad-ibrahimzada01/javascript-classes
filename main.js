// Person adlı bir sinif yaradın. Bu sinif ad (name) və yaş (age) xüsusiyyətlərinə sahib olsun.
// Person sinifindən bir obyekt yaradın və bu obyektin adını və yaşını konsola yazdırın.
// Person sinifinə bir greet metodu əlavə edin. Bu metod "Salam, mənim adım [name] və mən [age] yaşındayam" şəklində bir mesaj döndərsin.
// Bu metodu istifadə edərək Person sinifindən yaratdığınız obyektin salamlamasını konsola yazdırın.

class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    greet(){
        const greeting=`Salam menim adim ${this.name} ve men ${this.age} yasindayam`
        console.log(greeting);
    }
}

const  person= new Person('Faiq',23)
person.greet()



// Employee adlı bir sinif yaradın və bu sinif Person sinifindən törəsin.
// Employee sinifinə əlavə olaraq jobTitle (vəzifə adı) xüsusiyyəti əlavə edin.
// Employee sinifindən bir obyekt yaradın və bu obyektin bütün xüsusiyyətlərini və metodlarını istifadə edərək bir mesaj konsola yazdırın.


class Employee extends Person{
    constructor(name,age,jobtitle){
        super(name,age)
        this.jobtitle=jobtitle
    }
    lookingForJob(){
        const lfj=`Adim ${this.name}, ${this.age} yasindayam. ${this.jobtitle} uzre is axtariram`
        console.log(lfj);
    }
}
const employee= new Employee('Faiq',23,'Frontend dev')
employee.lookingForJob()




// BankAccount adlı bir sinif yaradın. Bu sinifin bir balance (balans) xüsusiyyəti və deposit və withdraw metodlarına sahib olsun.
// balance xüsusiyyətini özəl (private) edin və yalnız deposit və withdraw metodları vasitəsilə əlçatan edin.
// Bir BankAccount obyekti yaradın, balans əlavə edin və çıxarın, ardından balansı konsola yazdırın.


class BankAccount{
    #balance
    constructor(balance){
        this.#balance=balance
    }
    deposit(amount){
        const depo= this.#balance+=amount
        console.log(`${amount} depozit`);
    }

    withdraw(amount){
        const withd= this.#balance-=amount
        console.log(`${amount} cixarilan pul.`);
        console.log(`son balans: ${this.#balance}`);
    }
}
const bankAccount= new BankAccount(1000)
bankAccount.deposit(200)
bankAccount.withdraw(400)

