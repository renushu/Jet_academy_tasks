// Task-01
// Konsola mesaj verin: «My name is Murad».

// console.log("my name is Rena");

// Task-02
// Adı name və adınızın mənimsədildiyi sabit dəyişən təyin edin.
// Bu dəyişənin dəyərini konsolda göstərin.

// const userName = "Rena";
// const userLastName = "Umudova";
// console.log(userName, userLastName);

// Task-03
// Bu adlardan hansının dəyişən üçün istifadə oluna biləcəyini göstərin.
// Birdən çox variant seçin.

// 2user -------istifade oluna bilmez
// c@rt --------istifade oluna biler
// person -----istifade oluna biler
// title color--- istifade oluna bilmez
// console ------istifade oluna bilmez
// $add ------- istifade oluna bildi amma mentiqsizdi mence)))))))))))))

// Task-04
// Depodaki bütün kitabların ümumi dəyərini konsola çıxarın
// Kitab mağazasındaki kitabın qiyməti bookPrice dəyişənində
// və depodaki kitab sayı bookAmount dəyişənində saxlanılır.
// Depodaki bütün kitabların ümumi dəyərini konsola çıxarın.

// let bookPrice = 750;
// let bookAmount = 14;
// console.log(bookAmount * bookPrice);

// Task-05
// Dəyişən dəyərini saniyə metrə çevirin və onu konsola çıxarın.
// kmhSpeed ​​dəyişəni avtomobilin sürətinin «saatda kilometrlərlə»
// dəyərini saxlayır. msSpeed ​​dəyişəni təyin edin və
// ona eyni sürət dəyərini «saniyədə metrə» çevirərək yazın.
// msSpeed dəyişəninin dəyərini konsola çıxarın.

// let kmhSpeed = 75;
// let msSpeed = kmhSpeed * 1000 / 3600;
// console.log(msSpeed)

// Task-06
// İstifadəçinin doğum tarixini soruşan və bu günə qədər yaşadığı
// günlərin sayını göstərən proqram yazın.

// let dogumTarixi = +prompt('dogum tarixinizi daxil edin:')
// let buGun = new Date().getFullYear();
// console.log(dogumTarixi);
// console.log(buGun);
// console.log(buGun - dogumTarixi);

// Task-07
// Ədədlər üzərində əməliyyatları yerinə yetirin.
// num dəyişənində iki rəqəmli ədəd saxlanılır.
// Bele proqram yazın:
// - Bu ədədin beşinci dərəcə qüvvətə qaldırılmış vəziyyətini.
// - 3-ə bölünmədən qalan bu ədədin qalığını.

// let num = 33
// console.log(Math.pow(num, 5));
// console.log(num % 3);

// Task-08
// Konsola bu növ mesaj çıxarın “Sizin adınız [firstName] [lastName].
// Tanışlığımıza çox şadam!”
// firstName dəyişənində istifadəçinin adı,
// lastName — dəyişənində isə soyadı saxlanır.
// Konsola bu növ mesaj çıxarın “Sizin adınız [firstName] [lastName]. Tanışlığımıza çox şadam!”

// let firstName = 'Rena';
// let lastName = 'Umudova';
// console.log(`Sizin adınız ${firstName} ${lastName}. Tanışlığımıza çox şadam!`)

// Task-09
// Şablon mətnlərdən istifadə edərək,
// konsola “Sizi bir daha görməyimizə şadıq, [firstName] [lastName]”.
// firstName dəyişənində istifadəçinin adı, lastName — dəyişənində isə soyadı saxlanır.
// let firstName = 'Rena';
// let lastName = 'Umudova';
// console.log(' sizi bir daha gormeyimize sadiq ,${firstName} ${lastName}');

// Task-10
// Addaki hərflərin sayını konsola çıxarın.
// fullName dəyişənində istifadəçinin tam adı saxlanılır. Addaki hərflərin sayını konsola çıxarın.
// Probel hərf olaraq sayılmır.

// let fullName = "Rena Umudova"
// console.log(fullName.length - fullName.replace(/ /g, "").length);

// Task-11
// İstifadəçinin ad soyadının baş hərflərini konsola çıxaran proqram yazın.
// İstifadəçinin adını və soyadını boşluqlarla ayıraraq fullName dəyişəninə yazın.
// fullName dəyişəninin dəyərindən istifadə edərək istifadəçinin baş hərflərini
// konsola çıxaran proqram yazın.

// const userName = "Rena";
// const userLastName = "Umudova";
// let fullName = userName + " " + userLastName;
// console.log(userName[0].toUpperCase() + "." + userLastName[0].toUpperCase());

// Task-12
// İstifadəçidən tam adını daxil etməyini istəyin və soyadı ilə adının yerini dəyişin.
// İstifadəçidən tam adı «AD SOYAD» formatında daxil etməyi xahiş edin.
// Tam adını konsola fərqli qaydada yəni «SOYAD AD» formatında çıxarın,

// let name = prompt(` tam adi daxil edin: format: AD SOYAD`);
// let tempName = name.split(" ").reverse()
// console.log(tempName);

// Task-13
// Konsola "Salam, [ad]!" formatında salamlama mesajı çıxarın.
// İstifadəçidən adını daxil etməsini istəyin.
// Konsola "Salam, [ad]!" formatında salamlama mesajı çıxarın.

// let name = prompt("Adinizi daxil edin");
// console.log(`Salam, ${name}!`);

// Task-14
// İki ədədin toplama, çıxma, vurma və bölməsinin nəticələrin konsola alt-alta 4 sətir olaraq çıxarın.
// İstifadəçidən iki ayrı prompt əmri ilə iki ədəd daxil etməsini istəyin.
// Bu ədədlərin toplama, çıxma, vurma və bölməsinin nəticələrin konsola
// alt-alta 4 sətir olaraq çıxarın.
// let num1 = +prompt("Birinci ədədi daxil edin");
// let num2 = +prompt("İkinci ədədi daxil edin");
// console.log(num1 + num2);
// console.log(num1 * num2);
// console.log(num1 - num2);
// console.log(num1 / num2);

// Task-15
// 12345 və 98765 ədədlərinin hasilindən alınan nəticənin 6-cı rəqəmini tapan proqram yazın
// let num1 = 12345;
// let num2 = 98765;
// let result = num1 * num2;
// console.log(result.toString()[5]);
// console.log(String(result)[5]);

// Task-16
// Əməliyyatların nəticəsini müəyyənləşdirin.
//  let a= "true" - false
//  console.log('BA'+ a)

// let a=6;
// let b=8
// b=a-b
// a=a-b
// b=a+b
// console.log( a,b)
//   "" + 1 + 0 =

//   "" - 1 + 0 =

//   "true" - false =

//   6 / "3" = 2

//   4 + 5 + "px" =

//   "$" + 4 + 5 =

//   "4" - 2 =

//   NaN + "px" =

//   7 / 0 =

//   "-9" + 5 =

//   "-9" - 5 =

//   null + 1 = null

//   undefined + 1 =

// Task-17
// Rəqəmlərin cəmini göstərən proqram yazın.
// İstifadəçidən dörd rəqəmli ədəd daxil etməsini xahiş edən və
// sonra daxil edilmiş ədədlərin rəqəmlərinin cəmini konsola çıxaran proqram yazın.

// let num = +prompt(`Dörd rəqəmli ədəd daxil et`)
// let sum = 0
// for (let i = 0; i < num.toString().length; i++) {
//     sum += +num.toString()[i]
//     }

// let enter_num="1234"
// let str_num=enter_num.toString().split('').join('+')
// console.log(str_num)
// console.log(eval(str_num))

// Task-18
// İstifadəçinin soyadını və adını almaq üçün proqram tərtib edin.
// Proqram bir mesajla istifadəçinin soyadını və adını daxil etməsini istəyir və
// konsola «Salam, <ad>!» mesajını çıxarır.

// let fullName = prompt( `Soyadınızı və adınızı daxil edin: `);
// let c=fullName.slice(" ")
// console.log(`Salam, ${c}!`);

// Task-19
// Qiyməti mətn halına salan proqram tərtib edin.
// İstifadəçidən «530.90» formatında qiymət daxil etməyi xahiş edən və
// qiyməti «530 manat 90 qəpik» formatında konsola çıxaran proqram tərtib edin.

// let price = 530.90;
// let priceString = price.toString();
// console.log(priceString);

// Task-20
// Vergi nəzərə alınmadan əmək haqqı məbləğini hesablayan proqram tərtib edin.
// Proqram istifadəçidən əmək haqqı məbləğin soruşur və
// 13% vergi istisna olmaqla məbləği konsola çıxarır.

// let salary = 1000;
// let tax = 0.13;
// let salaryMinTax = salary - (salary * tax);

// Task-21
// İstifadəçidən soyad, ad və ata adını istəyən,
// soyadı və baş hərfləri konsola çıxaran proqram tərtib edin.
// Məsələn, «İvanov Pyotr Sergeevich» — «İvanov P.S.».

// let name = prompt( `Soyadınızı, adınızı və ata adınızı daxil edin`)
// let fullName=name.split(" ")
// let result =`${value[0] }.${value[1][0]}.${value[2][0]}`
// console.log(result)

// Task-22
// Depozitdən mənfəətin hesablanması üçün proqram yazın.
// Proqram istifadəçidən əmanətin məbləğini, müddətini və
// faiz dərəcəsini daxil etməsini istəyir və gözlənilən mənfəəti hesablayır.

// let deposit = 1000;
// let time = 5;
// let percent= 0.05;
// let profit = deposit * time * percent
// console.log(profit);

// Task-23
// Müxtəlif müqayisə operatorları ilə 5 ifadə yazın.
// value dəyişəni üçün müxtəlif müqayisə operatorları ilə 5 ifadə yazın,
// hansıki əməliyyat nəticəsi value = 10 üçün true və value = 20 üçün false olacaq.
// let value = 10;
// 1) value > 10
// 2) value >= 10
// 3) value < 10
// 4) value <= 10
// 5) value == 10

// Task-24
// İstifadəçidən yaşını soruşun.
// Əgər yaşı 18-dən azdırsa, o zaman brauzerdə «Access denied» bildirişi çıxarın.
// Əks halda «Access granted» bildirişini çıxarın.

// let age =+prompt(`yasinizi daxil edin`)
// if (age>18){
//     console.log(`Access granted`)
// }else{
//     console.log(`access denied`)
// }

// Task-25
// Üç ədədin ortancılını tapmaq üçün proqram yazın.
// İstifadəçidən bir bildirişlə üç ikirəqəmli ədəd daxil etməsini xahiş edin.
// Konsola orta ədədi, yəni nə ən böyüyü, nə də ən kiçiyini çıxarmayın.
// İstifadəçi bir neçə eyni nömrə daxil edibsə, xəta bildirişi çıxarın.
// "45 46 47"
// "47 46 45"
// "46 45 47"
// "46 47 45"

// let a = 45;
// let b = 46;
// let c = 47;
// if (a < b && b < c) {
//   console.log(b);
// } else if (a < c && c < b) {
//   console.log(c);
// } else if (b < a && a < c) {
//   console.log(a);
// } else if (b < c && c < a) {
//   console.log(c);
// } else if (c < a && a < b) {
//   console.log(a);
// } else if (c < b && b < a) {
//   console.log(b);
// }

// Task-26
// İstifadəçidən bir il daxil etməsini soruşun və ilin uzun il olub olmadığını yoxlayın.
// Uzun il 4-ə qalıqsız bölünən ildir.
// Daxil edilmiş il uzun ildirsə, konsola mesaj cıxarın.
// «İl uzun il deyil» və ya «İl uzun ildir»mesajını çıxarın.

// let year = +prompt(`ill daxil edin`)
// if (year % 4 == 0) {
//         console.log(`İl uzun ildir`)
//         } else{
//             console.log(`il uzun il deyilll `)
//         }

// Task-27
// if...else operatoru ilə yazllmış kodu switch operatoruna dəyişdirməklə kodu yenidən yazın.
// let id = prompt ('enter product id:');
// if (id === '1') {
//   alert ('Available 10 pcs.');
// }
// else if (id === '2') {
//   alert ('Available 256 pcs.');
//  }
// else if (id === '3') {
//   alert ('Available 53 pcs.');
//  }
//   else if (id === '4') {
//   alert ('There are 3 available.');
//  }
// else {
//   alert ('Out of stock');
// }

// Task-28
// İstifadəçidən onun cinsini (M və ya F hərfləri şəklində) sorğulayan və
// gender dəyişəninə male yaxud female sözlərindən birini yazdıran proqramı yazın
// let gender = prompt('Enter your gender (M/F): ')

// if (gender = M) {
//   console.log("male");
// } else if (gender = F) {
//   console.log("famele");
// } else {
//   console.log("invalid gender");
// }

// Task-29
// Ayın adını mətnlə konsola yazdıran bir program yazın.
// İstifadəçidən ayın nömrəsini soruşun və adını konsola çıxarın.
// let month = +prompt('Enter month number: ')
// switch (month) {
//   case 1:
//     month = "January";
//     break;
//   case 2:
//     month = "febuary";
//     break;
//   case 3:
//     month = "march";
//     break;
//   case 4:
//     month = "april";
//     break;
//   case 5:
//     month = "may";
//     break;
//   case 6:
//     month = "iyun";
//     break;
//   case 7:
//     month = "iyul";
//     break;
//   case 8:
//     month = "august";
//     break;
//   case 9:
//     month = "september";
//     break;
//   case 10:
//     month = "october";
//     break;
//   case 11:
//     month = "novamber";
//     break;
//   case 12:
//     month = "december";
//     break;
//   default:
//     month = "Unknown month";
// }
// console.log(month)

// Task-30
// İstifadəçi tərəfindən daxil edilmiş tarixin təsvirini çıxarın.
// İstifadəçidən tarixi «2009.12.19» formatında daxil etməyi xahiş edin.
// Tarixin təsvirini «19 Dekabr 2009-cu il» formatında çıxarın.
// Daxil edilmiş dəyərə validator əlavə edin.
// İstifadəçi səhv formatda dəyər daxil edərsə, «Yanlış dəyər daxil edilib» bildirişi göstərin.
// let date = prompt("Enter date in format 2009.12.19");
// let dateArray = date.split('.').map(Number);
// if (dateArray.length !== 3) {
//     console.log("Yanlış dəyər daxil edilib");

// let date = prompt('Enter date: ')
// let year=date[0]
// let month= +date[1]
// let day=date[2]
// switch (month) {
//   case 1:
//     month = "January";
//     break;
//   case 2:
//     month = "febuary";
//     break;
//   case 3:
//     month = "march";
//     break;
//   case 4:
//     month = "april";
//     break;
//   case 5:
//     month = "may";
//     break;
//   case 6:
//     month = "iyun";
//     break;
//   case 7:
//     month = "iyul";
//     break;
//   case 8:
//     month = "august";
//     break;
//   case 9:
//     month = "september";
//     break;
//   case 10:
//     month = "october";
//     break;
//   case 11:
//     month = "novamber";
//     break;
//   case 12:
//     month = "december";
//     break;
//   default:
//     month = "Unknown month";
// }
// console.log(`${day} ${month} ${year})

// swapeCase()
// task:31: boyuk herfleri kicik herflere ceviren while loop
// let str = "hello world";
// let i = 0;
// let result = "boyuk herf yoxdur";
// while (i < str.length) {
//   if (str[i] === str[i].toUpperCase()) {
//     console.log("boyuk herf var ");
//   } break;
// }

//  if(str[0].toUpperCase === str[0].toLowerCase){
//         console.log(str.)
//     }

////////////////////////////////// FOR AND WHILE TASKS
// Task-01-dən Task-06-ya qədər While ilə yazılmalıdır!

// Task-01
// İkirəqəmli ədədi üçrəqəmli olana qədər artırın.
// İstifadəçidən ikirəqəmli ədəd daxil etməsini xahiş edin.
// Bu rəqəmi üçrəqəmli olana kimi 7 vahid artırın.
// Son dəyəri konsola çıxarın.
// let num = +prompt("Enter a number");
// let i = 0;
// while (num + i <= 1000) {
//     num += 7;
//     i++;
// }
// console.log(num)

// Task-02
// Konsola N dəfə «I know how to use cycles» mesajı çıxaran proqram yazın.
// Proqram N ədədini istifadəçidən soruşur.
// let n= +prompt(`enter a number`)
// let i=0
// while(i<=n){
// console.log("I know how to use cycles")
//}

// Task-03
// Sonu 0 ilə bitən bütün üçrəqəmli ədədləri konsola çıxaran proqram yazın.
// let i=0
// while(i<1000){
//     if(i%10===0){
//         console.log(i)
//     }
// }

// Task-04
// Bütün ikirəqəmli tək ədədlərin cəmini konsola çıxaran proqram yazın.
// let i=10
// let sum=0
// while(i<100){
//     if(i%2==1){
//         sum+=i
//     }
// }

// Task-05
// İstifadəçinin daxil etdiyi ədədin bölünəni olan bütün üçrəqəmli ədədlərin cəmini hesablayan proqram yazın.
// let num=+prompt("enter a number")
// let sum=0
// for(let i=100; i<1000; i++){
//     if(i%num===0){
//         sum+=i}

// }
// console.log(sum)

// Task-06
// Sadə ədədləri çıxaran proqram yazın.
// İstifadəçidən n ədədini soruşan və n-dən 0-a kimi bütün sadə ədədləri azalan ardıcıllıqla çıxaran proqram yazın.
// «23» ədədi daxil edildikdə, konsola «23», «19», «17», «13», «11», «7», «5», «3», «2», «1» ardıcıllığı çıxarılmalıdır.
// let n=+prompt("enter a number")
// let k=n-1;
// let flag=false
// while(k>1){
//     flag=false
//     let z=2
//     while(z<k){
//         if(k%z===0){
//             flag=true
//             break
//         }
//         z++
//     }

//     if(flag==false){
//         console.log(k)
//     }

//     k--
// }

// let n=43
// for(let j=n; j>0 ; j--){
//     let cnt=0;
//     for( let i=j ;i>0; i--){
//         if(j%i===0){
//             cnt++
//             }
//             }
//             if(cnt==2){
//                 console.log(j)
//                 }
//  }

// Fibanochi

// Task-07-dən Task-10-a qədər for ilə yazılmalıdır!
// Task-07
// 10-a qədər bütün reqemlerin hasilin tapan proqram tərtib edin
// Alınan dəyəri konsola çıxarın.

// let sum=1
// for(let i=1; i<=10; i++){
//     sum*=i
// }
// console.log(sum)

// Task-08
// İstifadəçidən mətn daxil etməsini tələb edən və mətn elementlərini əks qaydada düzən proqram tərtib edin.

// taskkkkkkkk hello world sozunu tersine yaz

// let str = "hello world";
// let i=str.length-1
// let result= ""
// while(i>=0){
//         result +=str[i]
//     i--
// }
// console.log(result)
// let i=0
// while(i<str.length){
//     result += str[str.length-1-i]
//     i++
// }
// console.log(result)

// console.log(sum)

// Task-09
// Mətndə "." hərfinin ilk dəfə hansı indeksdə yerləşdiyini tapan proqram tərtib edin.

// let str = "hello.world";
// for(let i=0; i<str.length; i++){
//     if(str[i]="."){
//         console.log(i)
//     }
// }

// Task-10 (isNaN)
// İstifadəçidən mətn daxil etməsini tələb edən və mətndə rəqəmlərin
// olub-olmaması barədə konsola mesaj çıxaran proqram tərtib edin.
// let str= prompt(`metn daxil et`)
// for(let i=0; i<str.length; i++){
//     if(isNaN(str[i])){
//         console.log(' metnde reqem yoxduuu')
//     }else{
//         console.log('metnde reqem varrrrrrrrrrrrr')
//     }
// }

//// textdeki 35i ve bosluqlari silin isNaN ile

// let text="Hello World Fs35"
// let result=""
// for(let i=0; i<text.length; i++){
//     if(isNaN(text[i]) && text[i]!==" "){
//         result += text[i]
//         }
// }

//---------------FUNCTION-----------------------------------------------
// Task-01
// İstifadəçi adını parametr kimi qəbul edən funksiya yazın.
// İstifadəçi adını parametr kimi qəbul edən və konsola
// «[İstifadəçi adı] is active now» mesajı çıxaran funksiya tərtib edin.
// Funksiyanı 3 müxtəlif ad üçün çağırın.

// function activeUser(){
//     let userName= prompt(`adi daxil et:`)
//     console.log(` ${userName} is active now`)
// }

// activeUser()
// activeUser()
// activeUser()

// Task-02
// Üç ədəddən ən böyüyünü təyin edən funksiya tərtib edin.
// Parametr olaraq üç ədəd qəbul edən və konsolda ən böyüyünü göstərən bir funksiya tərtib edin.
// Fərqli arqumentlərlə funksiyanı üç dəfə çağırın.

// function numbers(a,b,c) {
//   if (a > b && b > c) {
//     console.log(a);
//   }
//   if (a > c && c > b) {
//     console.log(a);
//   }
//   if (b > a && a > c) {
//     console.log(b);
//   }
//   if (b > c && c > a) {
//     console.log(b);
//   }
//   if (c > a && a > b) {
//     console.log(c);
//   }
//   if (c > b && b > a) {
//     console.log(c);
//   }
// }

// numbers(5, 7, 9);
// numbers(10, 16, 8);

// Task-03
// Bütün hesabların cəmini rubl ilə mesaj çıxaran funksiya tərtib edin.
// Rubl və dollarla hesab qəbul edən və bütün hesablardakı məbləğin
// cəmin rublla göstərən funksiya yazın.
// Tutaq ki, müştərinin rubl hesabında 1200 rubl, dollar hesabında isə 20 dollar var.
// Bir dollar üçün məzənnə 75 rubl təşkil edir.
// Bu halda, funksiya belə mesaj göstərməlidir: Bütün depozitlər üzrə məbləğ: 2700 rubl.

// function allDeposits(rub, dol) {
//   let dollar = dol * 75;
//   let all = rub + dollar;
//   console.log(`Bütün depozitlər üzrə məbləg : ${all} rubl`)
// }
// allDeposits(100, 40)

// Task-04
// Klaviaturadan 1-dən 99-da daxil olmaqla daxil edilmiş ədədi mətnlə ​​yazan funksiya tərtib edin.
// İstifadəçidən 1 ilə 99 arasında rəqəm daxil etməsini tələb edən və
// onu mətn şəklində konsola çıxaran numberToText funksiyası tərtib edin.
// Birdən ona qədər rəqəmin daxil edilməsi zamanı boşluqsuz bir söz göstərilir.(bir ,iki, üç və.s)
// Hər hansı digər iki rəqəmli rəqəmi daxil edilməsi zamanı, boşluqla ayrılmış iki söz göstərilir,
// məsələn, "iyirmi bir".

// function numberToText(n) {
//   let text = "";
//   let units = ["", "bir", "iki", "üç", "dörd" ,"bes","alti","yeddi","sekkiz","doqquz"]
//   let tens = ["", "on", "iyirmi", "otuz", "qirx","elli","altmis","yetmis","seksen","doxsan"]
//   if (n < 10) {
//     text = units[n];
//   }
//    else if (n < 100) {
//     text = tens[Math.floor(n / 10)] + " " + units[n %10]
//   }
//   console.log(text)
//   }
//   numberToText(35)

// Task-05
// Parametr kimi iki ədəd qəbul edən və onlardan ən kiçiyini qaytaran min() funksiyası tərtib edin.
// min() funksiyası ən kiçik ədədi qay
//  function min(a, b) {
//     if (a>b){
//         console.log(b)
//     }
//     else if (b>a){
//        console.log(b)
//     }
//     else{
//         console.log(" ededler beraberdir")
//     }
//  }
//  min(7,9)

// Task-06
// Parametr kimi iki ədəd və riyazi əməliyyatın işarəsini qəbul edən və
// bu riyazi əməliyyatın nəticəsini qaytaran calc funksiyasını yazın.
// Məsələn, calc(4, 6, '+');  //  10 qaytaracaq

// function calc(a, b, op) {
//   if (op === "+") {
//     console.log(a + b);
//   }
//   if (op === "-") {
//     console.log(a - b);
//   }
//   else{
//     console.log("bu operator yoxdur")
//   }
// }
// calc(4, 6, '+')

// Task-07
// Biletin şanslı olub olmadığını yoxlayan funksiya yazın.
// Altı rəqəmli ədəd qəbul edən və ilk üç rəqəminin cəminin ikinci üç rəqəminin cəminə bərabər
// olduğunu yoxlayan isLucky funksiyasını yazın.
// Bilet uğurlu olarsa, funksiya true, uğursuz olarsa, false qaytarmalıdır.
// Məsələn, isLucky(234801);  // true qaytaracaq

// function isLucky(number) {
//     let first = number.toString().slice(0, 3);
//     firstSplit= first.split('').join('+');
//     let second = number.toString().slice(3, 6);
//     secondSplit = second.split('').join('+');
//     if(eval(firstSplit)===eval(secondSplit)){
//         console.log('true')
//     }
//     else{
//         console.log('false')
//     }
// }
// isLucky(123456)

// ((((((((((((((((((Task-08
// capitalizeWords funksiyasını yazın.
// Funksiya parametr kimi bir neçə sözdən ibarət mətn qəbul edir.
// Funksiya geriyə eyni mətni qaytarmalıdır, lakin içindəki hər söz böyük hərflə başlamalıdır.
// Məsələn, capitalizeWords('Hello my name is Harry'); // 'Hello My Name Is Harry' qaytaracaq.))))))))))))))))))

// function capitalizeWords(str) {
//     let words = str.split(' ');
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase
//     }
//console.log (words.join(' '))
// }
// capitalizeWords('Hello my name is Rena')

// Task-09
// Bir ədədi parametr kimi qəbul edən və cüt olduqda true,
// tək olduqda isə false qaytaran isEven () funksiyasını yazın.

//  function even(number){
//     if(number%2==0){
//         console.log(true)
//     }
//     else{
//         console.log(false)
//     }
//  }
// even(6)

// Task-10
// Telefon nömrəsini parametr kimi qəbul edən ısvalidnumber() funksiyasını yazın.
// Telefon nömrəsi 11 rəqəmdən ibarət olduqda və +7 ilə başladıqda, funksiya true qaytarır.
// +71234567890

// function isValidNumber(number) {
//   if (number.length === 11 && number.startsWith("+7")) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// isValidNumber(+71234567890)

// Task-11
// Mətni parametr kimi qəbul edən və bu mətndəki herflerin sayını qaytaran numCounter funksiyasını yazın.
// "15263538479359486()-="';:!@#$%^&*()"
// REGEX()

// Task-01
// Massiv elementinin dəyərini dəyişin.
// Üç addan ibarət massiv yaradın.
// Massivin ikinci elementinin dəyərini “Classified” ilə əvəz edin.
// Massivi konsola çıxarın.

// const arr = ["Rena", "Gunay", "Leman"];
// arr[1] = "Classified";
// console.log(arr);

// Task-02
// Massiv verilib. "Episode 4: New Hope" kimi mesajları ardıcıl olaraq konsola çıxarın.
// Massiv elementlərin düzün.
// let arr = ['New Hope', 'The Empire Strikes Back', 'Return of the Jdi'];
//Episode 4: New Hope
//Episode 5: Empire strikes back
//Episode 6: Return of the Jdi
// for (let i = 0; i < arr.length; i++) {
//     console.log(`Episode ${i + 4}: ${arr[i]}`);
// }

//ARR--------------------------------------------------

// Task-01
// Massiv elementinin dəyərini dəyişin.
// Üç addan ibarət massiv yaradın.
// Massivin ikinci elementinin dəyərini “Classified” ilə əvəz edin.
// Massivi konsola çıxarın.

// Task-02
// Massiv verilib. "Episode 4: New Hope" kimi mesajları ardıcıl olaraq konsola çıxarın.
// Massiv elementlərin düzün.

// let arr = ['New Hope', 'The Empire Strikes Back', 'Return of the Jdi'];
// //Episode 4: New Hope
// //Episode 5: Empire strikes back
// //Episode 6: Return of the Jdi

// Task-03
// let salary = [
//     [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
//     [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
//     [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 180],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
//     [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
//     [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
//     [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75]
// ];
// Şöbə işçilərinin əmək haqqını təhlil etmək üçün proqram tərtib edin.
// Şöbədə müxtəlif maaşlarla 10 nəfər çalışır. Şöbə işçilərinin əmək haqlarını təhlil etmək üçün proqram tərtib edin.
//  - Bütün bir departamentin bir il üçün ümumi maaşlarının cəmini qaytaran bir funksiya yazın.
// salary massivi əsasında il ərzində bütün işçilərin maaşlarının cəmini qaytaran getAnnualSalary() funksiyasını yazın.
// - Ay nömrəsinə görə işçilərin aylıq maaşlarını massiv halında almaq üçün funksiya yazın.
// Ayın nömrəsini parametr kimi qəbul edən və salary massivindən həmin ay üçün işçi maaşlarını massiv halında qaytaran getMonthlySalary() funksiyasını yazın.
// Ayın nömrəsi elementin indeks nömrəsi ilə eyni deyil.
// - Rüb ərzində maaşların ümumi cəmini qaytaran funksiya yazın.
// Parametr kimi rübün rəqəmini (1, 2, 3 və ya 4) qəbul edən və salary massivi əsasında həmin rüb üçün şöbənin bütün
// işçilərinin maaşlarının cəmini qaytaran getQuarterSalary() funksiyasını yazın.
// Rüb - 3 aylıq bir müddətdir.

// Task-04
// İstifadəçidən vergüllə ayrılmış beş ədədi daxil etməyi xahiş edin və onları massivdə saxlayın.
// İstifadəçidən beş ədəd elementi daxil etməyi tələb edən, onları massivə yazan və ən kiçik ədədi konsola çıxaran proqram yazın.

// Task-05
// Verilən mətn tip dəyərdəki vergülləri nöqtəli vergüllə əvəz edin.
// '32, 31, 34, 36, 31' mətni verilmişdir ,İçindəki vergülləri nöqtəli vergüllə əvəz edin.(Massivden sitifade ederek)(join)

//ARR- TASKSSS --------------------------------------------------------------

// Task-01
// Qrup yoldaşları massivi yaradın və onun üzərində əməliyyatlar aparın.
// Üç qrup yoldaşının adlarından ibarət massiv yaradın;
// Başqa bir qrup yoldaşının adını massivin sonuna əlavə edin;
// İlk adı silin;
// Massivi konsola çıxarın.

// let qrupYoldaslari = ["RENA", "GUNAY", "NERMIN"];
// qrupYoldaslari.push("SEVDA");
// qrupYoldaslari.shift();
// console.log(qrupYoldaslari);

// Task-02(rest-in istifadesi)
// Massiv üzərində əməliyyatlar aparın.
// 10 ədəddən ibarət massiv yaradın.
// İlk 2 ədədi dəyişənlərə yazın və qalanlardan yeni massiv yaradın.
// Yeni massivdəki ədədləri əks istiqaməyə çevirin.
// 10 ədəddən ibarət massiv yaradın

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const [first, second, ...rest] = numbers;
// const reversedRest = rest.reverse();
// console.log(`Birinci: ${first}, İkinci: ${second}`);
// console.log("Yeni massiv (əks istiqamət):", reversedRest);

// Task-03
// Massivin maksimal dəyərini tapın.
// 10 rəqəmdən ibarət massiv yaradın.
// Massiv deyil, arqumentlər qəbul edən Math.max funksiyasından istifadə edərək onların arasında maksimumu tapın.
// spread-operatorundan istifadə edərək massiv arqumentlərini funksiyaya ötürün.

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const max = Math.max(...numbers);
// console.log("maksimal dəyər:", max);

// Task-04
// Massivin bütün elementlərinin dəyərin ikiqat artırın.
// 5 rəqəmdən ibarət massiv yaradın.
// Orijinal massivin surətini çıxarın və yeni massivin bütün elementlərini ikiqat artırın.
// Orijinal massivin dəyişmədiyini yoxlayın.

// const numbers =[1,2,3,4,5]
// const doubled = [...numbers.map(x => x*2)]
// console.log(doubled);

// Task-05
// Proqramlaşma şöbəsinin işçilərini saxlayan massiv yaradın.
// Şirkətin 10 işçisi haqqında məlumat olan massiv verilib. development massivi yaradın,
// hansıki proqramlaşma şöbəsinin işçilərini özündə saxlayacaq,
// yəni department özəlliyinin dəyəri «development» olan işçiləri.
// let employees = [
//   [ 'Jaylee Macy', 'marketing' ],
//   [ 'John Smith', 'management' ],
//   [ 'Blossom Hartley', 'design' ],
//   [ 'Austin Carpenter', 'marketing' ],
//   [ 'Joan Knowles', 'development' ],
//   [ 'Sally Nunez', 'management' ],
//   [ 'Laurel Ward', 'development' ],
//   [ 'Lark Simon', 'marketing' ],
//   [ 'Jane Stone', 'management' ],
//   [ 'Courtney Olson', 'development' ],
// ];
// const development = employees.filter(employee => employee[1] === 'development');
// console.log(development);

// Task-06
// Elektron növbəni idarə etmək üçün proqram tərtib edin.
// İstifadəçidən məlumat tələb edən və növbəni yeniləyən proqram tərtib edin.
// - İstifadəçidən növbəni yeniləmək üçün məlumat tələb edin.
// - Əgər istifadəçi yeni müştərinin ad və soyadını daxil edibsə, proqram müştərini növbənin sonuna əlavə edir.
// - İstifadəçi boş bir dəyər daxil edərsə, proqram növbədə birincinin adını və soyadını göstərir və onu növbədən çıxarır.
// - İstifadəçi «=» işarəsini daxil edərsə, proqram dayanır və növbə massivini konsola çıxarır.

// let name = ['Rena Umudova', 'Gunay Huseynli', 'Sevda Agayeva '];
// let newName = prompt('ad ve soyad daxil et: ');
// if (newName === '') {
//   console.log(name[0]);
//   name.shift();
// } else if (newName === '=') {
//   console.log(name);
// } else {
//   name.push(newName);
// }
// console.log(name)

// Task-07
// Tam ədədlər massivini artan sırada düzən funksiya yazın.
// Tam ədədlər massivini qəbul edən, onu artan ardıcıllıqla sıralayan və sıralanmış massivi geri
// qaytaran sortArray funksiyasını yazın.

// let array = [1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22];
// function sortArray(arr) {
//   return arr.sort((a, b) => a - b);
// }
// console.log(sortArray(array));

// Task-08
// Rəqəmlər massivini parametr kimi qəbul edən və həmin massivdən konsola bütün mənfi ədədləri çıxaran funksiya yazın.
// let numbers = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
// function printNegativeNumbers(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       console.log(arr[i]);
//     }
//   }
// }
// printNegativeNumbers(numbers);

// Task-09
// Rəqəmlər massivini parametr kimi qəbuil edən və həmin massivdəki bütün müsbət ədədləri konsola çıxaran funksiya yazın.
// İterasiya üçün anonim funksiyadan istifadə edin.
// let numbers = [1, -2, 3, -4, 5, -6, 7 , -8, 9, -10];
// function printPositiveNumbers(arr) {
//   arr.forEach(function (item) {
//     if (item > 0) {
//       console.log(item);
//     }
//   });
// }
// printPositiveNumbers(numbers);

// Task-10
// Geri çağırış funksiyalarını yazın (callback) printWithDashes, printWithHearts, printWithIndex.
// Massiv verilmişdir. 3 geri çağırış funksiyası yazın (callback): printWithDashes, printWithHearts, printWithIndex, hansıki onlar belə çağırılan zamanı
// names.forEach(printWithDashes);
// names.forEach(printWithHearts);
// names.forEach(printWithIndex);
// -array- const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];
// function printWithDashes(arr) {
//   arr.forEach(function (item) {
//     console.log("-" + item + "-");
//   });
// }
// function printWithHearts(arr) {
//   arr.forEach(function (item) {
//     console.log("<3" + item + "<3");
//   });
// }
// function printWithIndex(arr) {
//   arr.forEach(function (item, index) {
//     console.log(index + ": " + item);
//   });
// }

// OUTPUT:
// kosnsolda çıxsın:
// -------------
// Michael
// -------------
// -------------
// Trevor
// -------------
// -------------
// Franklin
// -------------
// -------------
// Lamar
// -------------
// -------------
// Jimmy
// -------------
// <3<3<3<3 Michael <3<3<3<3
// <3<3<3<3 Trevor <3<3<3<3
// <3<3<3<3 Franklin <3<3<3<3
// <3<3<3<3 Lamar <3<3<3<3
// <3<3<3<3 Jimmy <3<3<3<3
// 0 - Michael
// 1 - Trevor
// 2 - Franklin
// 3 - Lamar
// 4 - Jimmy

// Task-11
// Kebab-case -də formatında olan mətni UPPER_CASE formatına çevirmək üçün funksiya yazın.
// Kebab-case formatında mətni parametr kimi qəbul edən və onu UPPER_CASE mətninə çevirən kebabToUpper funksiyasını yazın.
// INPUT: console.log(kebabToUpper('first-user'));
// OUTPUT:  FIRST_USER

// function kebabToUpper(str) {
//     return str.split('-').map(item => item.toUpperCase()).join('');
//     }
// console.log(kebabToUpper('first-user'));

// MAP,FILTER,FIND
// Task-12
// Orijinal massivin elementlərindən ibarət yeni massiv yaradın.
// Rəqəmlər massivi verilmişdir. Aşağıdakı kimi dəyişdirilən orijinal massivin elementlərindən ibarət yeni massiv yaradın:
// - mənfi ədədlər müsbət olublar;
// - müsbət ədədlər ikiqat artırılıb.

// let numbers = [1, 5, -7, 3, -9, 4, -6, 2];
// let result = numbers.map(item => {
//         if (item < 0) {
//             return Math.abs(item);
//         } else {
//             return item * 2;
//         }})
//         console.log(result)

// Task-13
// Massivin ilk üç simvoldan ibarət elementini qaytaran funksiya yazın
// Mətnlər massivini parametr kimi qəbul edən və massivin ilk üç simvoldan ibarət elementini qaytaran funksiya yazın.

//  let texts=["hello", "world ", "javascript", "python", "java"];
//  function getFirst(texts){
//     return texts.map(str=> str.slice(0,3))
//  }
//  console.log(getFirst(texts))

// Task-14
// A hərfi ilə başlayan orijinal massivdəki elementlərdən ibarət yeni massiv yaradın.
// Adlar massivi verilib. A hərfi ilə başlayan orijinal massivdəki elementlərdən ibarət yeni massiv yaradın.

// let names = ['Ayan ', 'Gunay', 'Rena', 'Aynisan', 'Eli ', 'Aysel' ];
// let result = names.filter(item => item.startsWith('A'))
// console.log(result);

// Task-15
// ƏDV xaric qiymətlər saxlayan massivini qəbul edən və ƏDV daxil olmaqla olan qiymətlərdən ibarət yeni massiv qaytaran funksiya yazın.
// addTax() funksiyası yaradın. Verilmiş ƏDV-siz qiymətlərlə olan price massivini ona ötürün. addTax() funksiyasının köməyi ilə ƏDV ilə
// qiymətlərin daxil olduğu massiv yaratın və onu konsola çıxarın. ƏDV 20% təşkil edir.
// let price = [100, 200, 300,400,500]
// function addTax(price) {
//     let tax = price.map(item => item * 0.2)
//     let result = price.map(item => item + item * 0.2)
//     return result
// }
// console.log(addTax(price))
//}
// Task-16
// Ədədlər massivindəki tək və cüt ədədləri saymaq üçün proqram yazın.
// Rəqəmlər massivini parametr kimi qəbul edən və massivdə neçə tək və cüt ədədin
// olması barədə məlumatıqaytaran countEvensAndOdds() funksiyasını yazın.
// Numune: Funksiya «Massivdə 4 cüt və 2 tək ədəd var» formasında mesaj qaytarır.

// function countEvensAndOdds(numbers) {
//     let evens = 0;
//     let odds = 0;

//     numbers.forEach(num => {
//         if (num % 2 === 0) {
//             evens++;
//         } else {
//             odds++;
//         }
//     });

//     return `Massivdə ${evens} cüt və ${odds} tək ədəd var`;
// }
// let numbers = [1, 2, 3, 4, 5, 6];
// let result = countEvensAndOdds(numbers);
// console.log(result);

//---------------------------------------
//task-1111111111111
// arrayi funksiya ile kitab-il-yazar olaraq sirala

// let arr= [['kitabs-2001', 'kitab-1999', 'kitab-1000'], [1990, 1993, 2004], ['Puskin', 'Viktor huqo', 'tolstoy']]
// arr[0].sort((a, b) => {
//     const yearA = parseInt(a.match(/\d+/)[0]);
//     const yearB = parseInt(b.match(/\d+/)[0]);
//     return yearA - yearB;
//   });

//   const combined = arr[0].map((book, index) => {
//     const year = arr[1][index];
//     const author = arr[2][index];
//     return `${book}-${year}-${author}`;
//   });

//   console.log("Kitablar sıralandıqdan sonra:", combined);

// function bookinfo(){
//     for(let i=0 ; i<=arr.length ; i++){
//         console.log(`Kitab: ${arr[0][i]} , nesr ili: ${arr[1][i]} , muellifi : ${arr[2][i]}`);
//     }
// }

// const obj={
//     name: 'Rena',
//     surname: 'Umudova',
//     gender: 'famale',
//     birtdayDate : '13.12.2004'
// }
// console.log(obj.birtdayDate)

// const obj={
//     name: 'Rena',
//     surname: 'Umudova',
//     gender: 'famale',
//     birtdayDate : '13.12.2004'
// }
//  obj.age='20'
//  delete obj.birtdayDate
//  console.log(obj)

// const obj={
//     name: 'Rena',
//     surname: 'Umudova',
//     gender: 'famale',
//     birtdayDate : '13.12.2004',
//     setAge(newAge){
//         this.age=newAge
//     },
//     getYearsBeforeRetirement(){
//         return 65-this.age
//     }

// }
// obj.setAge(23)
// console.log(obj)
// obj.getYearsBeforeRetirement()
// console.log(obj.getYearsBeforeRetirement())

// Kredit kartı müştərisi üçün aşağıdakı xüsusiyyətlərə malik obyekt yaradın:
// Tam adı müştərinin (fullName).
// Kredit limiti (creditLimit).
// Cari balans (balans).
// - Minimum ödənişin faizi (precentOfMinPayment).
// =>Cari balans əldə etmək üçün getBalance metodu əlavə edin.
// getBalance metodu, balans mənfi olarsa, müştərinin balansı və ya onun borcu haqqında bir mesaj qaytarır.
// Metodun çağırılma nümunəsi:
// console.log(client.getBalance()).
// Mesaj nümunələri:
// <<Balansınız 3000»,
// <<<<Borcunuz 2000».
// =>Minimum ödəniş məbləği üçün getMinPaymant metodunu əlavə edin.
// getMinPaymant metodu borc məbləği və minimum ödəniş faizinə əsasən formalaşan minimum
// ödəniş məbləği haqqında mesaj qaytarır.
// Əgər borc yoxdursa, metod müvafiq mesajı qaytarır.
// Metodun çağırılma nümunəsi:
// console.log(client.getMinPaymant()).
// Mesaj nümunələri:
// <<Minimum ödənişiniz 240»,
// <<<Sizin borcunuz yoxdur».
// =>Hesabdan pul silmək üçün withdraw metodu əlavə edin.
// withdraw metodu cari balansı parametr kimi ötürülən pul məbləği qədər azaldır.
// Mövcud vəsait kifayət deyilsə (cari balans və kredit limitinin cəmi), metod konsola müvafiq mesajı çıxarır.
// client.widthdraw(900)
// =>Hesaba pul əlavə etmək üçün refill metodu əlavə edin.
// refill metodu parametr kimi qəbul edilən məbləğ qədər balansı artırır.

// const obj = {
//   fullName: "Rena Umudova",
//   creditLimit: 5000,
//   balans: 3000,
//   precentOfMinPayment: 0.2,
//   dept: this.creditLimit - this.balans,
//   getBalance() {
//     if (this.balans < 0) {
//       return `Borcunuz ${this.dept}`;
//     } else {
//       return `Balansınız ${this.balans}`;
//     }
//   },
//   getMinPaymant() {
//     if (this.dept > 0) {
//       return `Minimum ödənişiniz ${this.dept * this.precentOfMinPayment}`;
//     } else {
//       return `Sizin borcunuz yoxdur`;
//     }
//   },
//   withdraw(amount) {
//     if (this.balans + this.creditLimit >= amount) {
//       this.balans -= amount;
//       return `Balansınız ${this.balans}`;
//     } else {
//       return `Mövcud vəsait kifayət deyil`;
//     }
//   },
//   refill(amount) {
//     this.balans += amount;
//     return `Balansınız ${this.balans}`;
//   },
// };
// const client = obj;
// console.log(client.getBalance());
// client.withdraw(1000);
// console.log(client.getBalance());
// client.refill(600);
// console.log(client.getBalance());

//---------object filter ------------

// const orders = [
//   {
//     id: 10271,
//     customerId: "SPLIR",
//     employeeId: 6,
//     orderDate: "1996-08-01 00:00:00.000",
//     requiredDate: "1996-08-29 00:00:00.000",
//     shippedDate: "1996-08-30 00:00:00.000",
//     shipVia: 2,
//     freight: 4.54,
//     shipName: "Split Rail Beer & Ale",
//     shipAddress: {
//       street: "P.O. Box 555",
//       city: "Lander",
//       region: "WY",
//       postalCode: 82520,
//       country: "USA",
//     },
//     details: [
//       {
//         productId: 33,
//         unitPrice: 2,
//         quantity: 24,
//         discount: 0,
//       },
//     ],
//   },
//   {
//     id: 10266,
//     customerId: "WARTH",
//     employeeId: 3,
//     orderDate: "1996-07-26 00:00:00.000",
//     requiredDate: "1996-09-06 00:00:00.000",
//     shippedDate: "1996-07-31 00:00:00.000",
//     shipVia: 3,
//     freight: 25.73,
//     shipName: "Wartian Herkku",
//     shipAddress: {
//       street: "Torikatu 38",
//       city: "Oulu",
//       region: "NULL",
//       postalCode: 90110,
//       country: "Finland",
//     },
//     details: [
//       {
//         productId: 12,
//         unitPrice: 30.4,
//         quantity: 12,
//         discount: 0.05,
//       },
//     ],
//   },
//   {
//     id: 10279,
//     customerId: "LEHMS",
//     employeeId: 8,
//     orderDate: "1996-08-13 00:00:00.000",
//     requiredDate: "1996-09-10 00:00:00.000",
//     shippedDate: "1996-08-16 00:00:00.000",
//     shipVia: 2,
//     freight: 25.83,
//     shipName: "Lehmanns Marktstand",
//     shipAddress: {
//       street: "Magazinweg 7",
//       city: "Frankfurt a.M.",
//       region: "NULL",
//       postalCode: 60528,
//       country: "Germany",
//     },
//     details: [
//       {
//         productId: 17,
//         unitPrice: 31.2,
//         quantity: 15,
//         discount: 0.25,
//       },
//     ],
//   },
//   {
//     id: 10292,
//     customerId: "TRADH",
//     employeeId: 1,
//     orderDate: "1996-08-28 00:00:00.000",
//     requiredDate: "1996-09-25 00:00:00.000",
//     shippedDate: "1996-09-02 00:00:00.000",
//     shipVia: 2,
//     freight: 1.35,
//     shipName: "Tradiçao Hipermercados",
//     shipAddress: {
//       street: "Av. Inês de Castro 414",
//       city: "Sao Paulo",
//       region: "SP",
//       postalCode: "05634-030",
//       country: "Brazil",
//     },
//     details: [
//       {
//         productId: 20,
//         unitPrice: 64.8,
//         quantity: 20,
//         discount: 0,
//       },
//     ],
//   },
//   {
//     id: 10295,
//     customerId: "VINET",
//     employeeId: 2,
//     orderDate: "1996-09-02 00:00:00.000",
//     requiredDate: "1996-09-30 00:00:00.000",
//     shippedDate: "1996-09-10 00:00:00.000",
//     shipVia: 2,
//     freight: 1.15,
//     shipName: "Vins et alcools Chevalier",
//     shipAddress: {
//       street: "59 rue de l'Abbaye",
//       city: "Reims",
//       region: "NULL",
//       postalCode: 51100,
//       country: "France",
//     },
//     details: [
//       {
//         productId: 56,
//         unitPrice: 30.4,
//         quantity: 4,
//         discount: 0,
//       },
//     ],
//   },
//   {
//     id: 10313,
//     customerId: "QUICK",
//     employeeId: 2,
//     orderDate: "1996-09-24 00:00:00.000",
//     requiredDate: "1996-10-22 00:00:00.000",
//     shippedDate: "1996-10-04 00:00:00.000",
//     shipVia: 2,
//     freight: 1.96,
//     shipName: "QUICK-Stop",
//     shipAddress: {
//       street: "Taucherstraße 10",
//       city: "Cunewalde",
//       region: "NULL",
//       postalCode: 1307,
//       country: "Germany",
//     },
//     details: [
//       {
//         productId: 36,
//         unitPrice: 15.2,
//         quantity: 12,
//         discount: 0,
//       },
//     ],
//   },
//   {
//     id: 10317,
//     customerId: "LONEP",
//     employeeId: 6,
//     orderDate: "1996-09-30 00:00:00.000",
//     requiredDate: "1996-10-28 00:00:00.000",
//     shippedDate: "1996-10-10 00:00:00.000",
//     shipVia: 1,
//     freight: 12.69,
//     shipName: "Lonesome Pine Restaurant",
//     shipAddress: {
//       street: "89 Chiaroscuro Rd.",
//       city: "Portland",
//       region: "OR",
//       postalCode: 97219,
//       country: "USA",
//     },
//     details: [
//       {
//         productId: 1,
//         unitPrice: 14.4,
//         quantity: 20,
//         discount: 0,
//       },
//     ],
//   },
//   {
//     id: 10322,
//     customerId: "PERIC",
//     employeeId: 7,
//     orderDate: "1996-10-04 00:00:00.000",
//     requiredDate: "1996-11-01 00:00:00.000",
//     shippedDate: "1996-10-23 00:00:00.000",
//     shipVia: 3,
//     freight: 0.4,
//     shipName: "Pericles Comidas clásicas",
//     shipAddress: {
//       street: "Calle Dr. Jorge Cash 321",
//       city: "México D.F.",
//       region: "NULL",
//       postalCode: 5033,
//       country: "Mexico",
//     },
//     details: [
//       {
//         productId: 52,
//         unitPrice: 5.6,
//         quantity: 20,
//         discount: 0,
//       },
//     ],
//   },
//   {
//     id: 10320,
//     customerId: "WARTH",
//     employeeId: 5,
//     orderDate: "1996-10-03 00:00:00.000",
//     requiredDate: "1996-10-17 00:00:00.000",
//     shippedDate: "1996-10-18 00:00:00.000",
//     shipVia: 3,
//     freight: 34.57,
//     shipName: "Wartian Herkku",
//     shipAddress: {
//       street: "Torikatu 38",
//       city: "Oulu",
//       region: "NULL",
//       postalCode: 90110,
//       country: "Finland",
//     },
//     details: [
//       {
//         productId: 71,
//         unitPrice: 17.2,
//         quantity: 30,
//         discount: 0,
//       },
//     ],
//   },
//   {
//     id: 10321,
//     customerId: "ISLAT",
//     employeeId: 3,
//     orderDate: "1996-10-03 00:00:00.000",
//     requiredDate: "1996-10-31 00:00:00.000",
//     shippedDate: "1996-10-11 00:00:00.000",
//     shipVia: 2,
//     freight: 3.43,
//     shipName: "Island Trading",
//     shipAddress: {
//       street: "Garden House Crowther Way",
//       city: "Cowes",
//       region: "Isle of Wight",
//       postalCode: "PO31 7PJ",
//       country: "UK",
//     },
//     details: [
//       {
//         productId: 35,
//         unitPrice: 14.4,
//         quantity: 10,
//         discount: 0,
//       },
//     ],
//   },
//   {
//     id: 10336,
//     customerId: "PRINI",
//     employeeId: 7,
//     orderDate: "1996-10-23 00:00:00.000",
//     requiredDate: "1996-11-20 00:00:00.000",
//     shippedDate: "1996-10-25 00:00:00.000",
//     shipVia: 2,
//     freight: 15.51,
//     shipName: "Princesa Isabel Vinhos",
//     shipAddress: {
//       street: "Estrada da saúde n. 58",
//       city: "Lisboa",
//       region: "NULL",
//       postalCode: 1756,
//       country: "Portugal",
//     },
//     details: [
//       {
//         productId: 4,
//         unitPrice: 17.6,
//         quantity: 18,
//         discount: 0.1,
//       },
//     ],
//   },
//   {
//     id: 10349,
//     customerId: "SPLIR",
//     employeeId: 7,
//     orderDate: "1996-11-08 00:00:00.000",
//     requiredDate: "1996-12-06 00:00:00.000",
//     shippedDate: "1996-11-15 00:00:00.000",
//     shipVia: 1,
//     freight: 8.63,
//     shipName: "Split Rail Beer & Ale",
//     shipAddress: {
//       street: "P.O. Box 555",
//       city: "Lander",
//       region: "WY",
//       postalCode: 82520,
//       country: "USA",
//     },
//     details: [
//       {
//         productId: 54,
//         unitPrice: 5.9,
//         quantity: 24,
//         discount: 0,
//       },
//     ],
//   },
// ];

// //bu objectde ki her bir id nin ozunu ve countunu tapmaq
// let formattedArr = [];
// orders.forEach((item) => {
//   let orderCount = orders.filter(
//     (order) => order.customerId === item.customerId).length;
//   let foundCustomer = formattedArr.find(
//     (customer) => customer.customerId === item.customerId);
//   if (!foundCustomer) {
//     formattedArr.push({
//       customerId: item.customerId,
//       count: orderCount,
//     });
//   }
// });
//  console.log(formattedArr)



// const data = [
//     { name: "Bitcoin", ticker: "BTC", value: "9685", change: "2.83%" },
//     { name: "Ethereum", ticker: "ETH", value: "210.5", change: "6.17%" },
//     { name: "Ripple", ticker: "XRP", value: "0.2812", change: "2.47%" },
//     { name: "Bitcoin Cash", ticker: "BCH", value: "441.4", change: "5.01%" },
//     { name: "Bitcoin SV", ticker: "BSV", value: "303.17", change: "5.53%" },
//     { name: "Litecoin", ticker: "LTC", value: "74.935", change: "4.25%" },
//     { name: "Tether", ticker: "USDT", value: "0.9994", change: "-1.7%" },
//     { name: "EOS", ticker: "EOS", value: "4.6161", change: "3.15%" },
//     { name: "Binance Coin", ticker: "BNB", value: "19.824", change: "-3.82%" },
//     { name: "Cardano", ticker: "ADA", value: "0.060389", change: "2.93%" },
//     { name: "Tezos", ticker: "XTZ", value: "2.1247", change: "6.12%" },
//     {
//       name: "Ethereum Classic",
//       ticker: "ETC",
//       value: "12.5988",
//       change: "4.09%",
//     },
//     { name: "Stellar", ticker: "XLM", value: "0.07034", change: "-4.10%" },
//     { name: "Monero", ticker: "XMR", value: "79.523", change: "3.45%" },
//     { name: "TRON", ticker: "TRX", value: "0.020881", change: "5.21%" },
//   ];
  
//ARAŞDIRILMALI OLAN MÖVZULAR: Array filter method( search üçün)Array sort method( sıralama üçün)Array
// forEach method( məlumatları table-a yığmaq üçün)
//faizlərin artan faizlərə görə sıralanması
// data.sort((a, b) => {
//     return parseFloat(b.change) - parseFloat(a.change);
//   })
//   .forEach((item) => {
//     console.log(item.name + " " + item.change);
//   });

// valuelerin artan qiymetlere gore siralmaasi

// data.sort((a, b) => {
//     console.log(a);
    
//   return parseFloat(b.change) - parseFloat(a.change);
//   })

// console.log(data);

// faiz derecesi 2.47 den yuxari olanlari sirala

// let arr = []
// let dataObj = data.forEach(item =>{
//     return arr.push(item.change)
// })

// let sortArr = arr.sort((b, a) =>{
    
//     return parseFloat(b) - parseFloat(a)
// })  

// let filterArr = sortArr.filter(x=>{
    
// })


/// 1den 50 ye qeder tek ededleri cixar
// let a=[]
// for(let i=0 ; i<50;i++){
//     if(i%2===1){
//         a.push(i)
//     }
// }
// console.log(a)

// 3 ve 5 e bolunenn
// let a=[]
// for(let i=1 ; i<50;i++){
//     if(i%3===0 && i%5===0){
//         a.push(i)
//     }
//     }
//     console.log(a)

