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
let num1 = 12345;
let num2 = 98765;
let result = num1 * num2;
console.log(result.toString()[5]);
console.log(String(result)[5]);

// Task-16
// Əməliyyatların nəticəsini müəyyənləşdirin.

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

// Task-18
// İstifadəçinin soyadını və adını almaq üçün proqram tərtib edin.
// Proqram bir mesajla istifadəçinin soyadını və adını daxil etməsini istəyir və
// konsola «Salam, <ad>!» mesajını çıxarır.

// Task-19
// Qiyməti mətn halına salan proqram tərtib edin.
// İstifadəçidən «530.90» formatında qiymət daxil etməyi xahiş edən və
// qiyməti «530 manat 90 qəpik» formatında konsola çıxaran proqram tərtib edin.

// Task-20
// Vergi nəzərə alınmadan əmək haqqı məbləğini hesablayan proqram tərtib edin.
// Proqram istifadəçidən əmək haqqı məbləğin soruşur və
// 13% vergi istisna olmaqla məbləği konsola çıxarır.
