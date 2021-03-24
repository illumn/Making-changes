// 1.
// შექმენით ობიექტი aboutMe: შიგნით ჩაწერეთ key-ები: name, surname, age, isStudent,
const aboutMe = {
    name: 'Anton',
    surname: 'Takashvili',
    age: 20,
    isStudent: true,
}
// 2.
// aboutMe - ობიექტში ჩაამატეთ isAdult - შეადარეთ ასაკი 18ს
// aboutMe[isAdult] = true;
// 3.
// aboutMe - ში ჩაამატეთ ახალი ქვეობიექტი address, მოცემული ობიექტი უნდა შეიცავდეს: city, country, state
aboutMe.address = {
    city: "Tbilisi",
    country: "Georgia",
    state: "Wereteli"
}
// 4.
// წაშალეთ isAdult aboutMe-დან
delete aboutMe.isAdult;
// 5.
// aboutMe-ში ჩაამატეთ array - favouriteMovies -> სადაც იქნება ჩამოთვლილი ფილმები

// 6.
// შექმენით ფუნქცია: getCreditCardInfo -> 
// გააკეთეთ 3 prompt-ი მონაცემებისთვის: ბარათის ნომერი, ვადა, კოდი
// მოცემული მონაცემებით შექმენით ახალი ობიექტი creditCardInfo -> {number, expiration, cvv} და-დაარეთურნეთ

// 7.
// გამოიაძეთ getCreditCardInfo-ორჯერ და ორივე ბარათის ობიექტი შეინახეთ ცვლადებში 
// მაგ: let cardOne = getCreditCardInfo(), let cardTwo = getCreditCardInfo()
// შექმენით ფუნქცია compareCards(card1, card2) - გადმოწოდებული ორი ობიექტი შეადარეთ ერთმანეთს შემდეგ ნაირად
// თუ card1-number-ის ბოლო 4 ციფრი უდრის card2-ის number-ის ბოლო 4 ციფრს და ორივეს cvv იდენტურია:
// დაა-return-ეთ true თუ არა დაა-return-ეთ false


// 8. Challenge 1 (ბონუსი არაა, მაგრამ შეიძლება რთული იყოს, ცადეთ ყველამ)
// შექმენით ფუნქცია printCreditInfo(card) -> 
// დაბეჭდეთ card.number-ის ბოლო 4 ციფრის გარდა ფიფქები(*), ხოლო ბოლო 4 ციფრი გამოიტანეთ.
// მაგალითად number-თუ არის 11112222333344445555 -> გამოიტანეთ ****************5555 


let library = [];
// 9.
// დაწერეთ ფუნქცია addBookToLibrary() -> ფუნქციაში:
// მოითხოვეთ 3 prompt-ი Name? Author? Year?
// მოცემული 3 prompt-ით შექმენით ახალი object key-ებით: name, author, releaseYear
// შექმნილი ობიექტი დაფუშეთ library-ში

// 10.
// დაწერეთ ფუნქცია printLibrary
// დაბეჭდეთ ყველა წიგნი library-array-იდან შემდეგი ფორმატით
/*
    თუ წიგნია:
    {
        name: 'Harry Potter',
        author: 'J.K Rowling',
        releaseYear: 1999,
    }

    გამოვიტანთ Harry Potter by J.K Rowling released: 1999
*/


// 11. Challenge 2 (ბონუსი არაა, მაგრამ შეიძლება რთული იყოს, ცადეთ ყველამ)
// გამოიტანეთ Object.values()-ის გამოყენებით aboutMe-ს ყველა მნიშვნელობა
// გამოიტანეთ Object.keys()-ის გამოყენებით aboutMe-ს ყველა გასაღები
// გამოიტანეთ aboutMe-ს ყველა key და value შემდეგი ფორმატით: "key->value" მაგალითად: "name->Giorgi"


// Bonus დავალება 1:
// დაწერეთ ფუნქცია reverseArray(arrayToReverse) - რომლითაც:
// Array.reverse()-ის გამოიყენების გარეშე შემოატრიალეთ array. მაგალითად: [1, 2, 3, 4, 5] უნდა გახდეს [5, 4, 3, 2, 1]
// დაა-return-ეთ შემოტრიალებული array
function reverseArray(arrayToReverse){
    let newArray = [];
    for (let i = arrayToReverse.length; i >= 0; i--) {
        newArray += arrayToReverse[i];
    }
}
reverseArray([1, 2, 3, 4, 5]);
// Bonus დავალება 2:
// დაწერეთ ფუნქცია reverseString(stringToReverse) -> რომელიც შემოატრიალებს და დაარეთურნებს string-ს მაგალითად: Hello -> olleH
function reverseString(stringToReverse){
    let newStr = "";
    for (let i = stringToReverse.length - 1; i >= 0; i--) {
        newStr += stringToReverse[i];
    }
    return newStr;
}
reverseString('hello');
// Bonus დავალება 2:
// https://www.hackerrank.com/challenges/staircase/problem
// თუ გინდათ ამავე საიტზე ამოხსენით და ჩამიგდეთ solution-ის ლინკი.
function stairCase(n) {
   
      for(let i = 0; i < n; i++){
          let out = '';
          for(let j = 0; j < n; j++){
            j < (n -1 -i) ? out += ' ': out += '#';
          }
          console.log(out);
      }
  }

stairCase(6);  