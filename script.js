const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
const langBtn = document.getElementById("langToggle");

burger.addEventListener("click", () => {
    nav.classList.toggle("active");
});
const translations = {
    en: {
        "nav.home": "Home",
        "nav.about": "About Us",
        "nav.service": "Service",
        "nav.contact": "Contact",
        "about.title": "About Us",
        "about.p1": "English Learning Center 'Know How' was founded in 2010. Our main goal is to help students of all ages develop practical English skills, communication, and confidence through modern inclusive methods.",
        "about.p2": "Over the years, 'Know How' has become a reliable, result-oriented center. Our experienced teachers create an environment where every student gets individual attention.",
        "about.p3": "Today, we continue to improve our programs in accordance with international standards and best educational practices.",
        "about.focus_title": "Our Focus:",
        "about.f1": "Structured Learning - Clear system & progress",
        "about.f2": "Individual Approach - Small groups & feedback",
        "about.f3": "Modern Resources - Interactive teaching methods",
        "about.values_title": "Our Values:",
        "about.v1": "Quality Education",
        "about.v2": "Continuous Development",
        "about.v3": "Respect & Inclusivity",
        "about.v4": "Student-Oriented Environment",
        "price.title": "English Language Courses",
        "price.beg": "Beginner",
        "price.elem": "Elementary",
        "price.int": "Intermediate",
        "price.high": "Upper-Intermediate",
        "price.prep": "Abiturient Course",
        "price.speak": "Speaking English"
    },
    ka: {
        "nav.home": "მთავარი",
        "nav.about": "ჩვენ შესახებ",
        "nav.service": "სერვისები",
        "nav.contact": "კონტაქტი",
        "about.title": "ჩვენ შესახებ",
        "about.p1": "ინგლისური ენის სასწავლო ცენტრი „ნოუ ჰაუ“ დაარსდა 2010 წელს. დაარსების დღიდან ცენტრის მთავარი მიზანია ნებისმიერი ასაკის მსურველს დაეხმაროს ინგლისური ენის პრაქტიკული ცოდნის, კომუნიკაციისა და თავდაჯერებულობის განვითარებაში.",
        "about.p2": "წლების განმავლობაში „ნოუ ჰაუ“ ჩამოყალიბდა სანდო და შედეგზე ორიენტირებულ სასწავლო ცენტრად. ჩვენი გამოცდილი პედაგოგები ქმნიან გარემოს, სადაც თითოეულ მოსწავლეს ექცევა ინდივიდუალური ყურადღება.",
        "about.p3": "დღეს ცენტრი აგრძელებს განვითარებას საერთაშორისო სტანდარტებისა და საუკეთესო საგანმანათლებლო პრაქტიკების შესაბამისად.",
        "about.focus_title": "რაზე ვამახვილებთ ყურადღებას:",
        "about.f1": "სტრუქტურირებული სწავლება - მკაფიო სისტემა და პროგრესი",
        "about.f2": "ინდივიდუალური მიდგომა - მცირე ჯგუფები და უკუკავშირი",
        "about.f3": "თანამედროვე რესურსები - ინტერაქტიული მეთოდები",
        "about.values_title": "ჩვენი ღირებულებები:",
        "about.v1": "ხარისხიანი განათლება",
        "about.v2": "მუდმივი განვითარება",
        "about.v3": "პატივისცემა და ინკლუზიურობა",
        "about.v4": "მოსწავლეზე ორიენტირებული გარემო",
        "price.title": "ინგლისური ენის კურსები",
        "price.beg": "დამწყები",
        "price.elem": "საწყისი",
        "price.int": "შუალედური",
        "price.high": "მაღალი შუალედური",
        "price.prep": "სააბიტურიენტო კურსი",
        "price.speak": "სასაუბრო ინგლისური"
    }
};


let currentLang = "ka"; 
langBtn.textContent = "Ka"; 

langBtn.addEventListener("click", () => {
    if (currentLang === "ka") { 
        currentLang = "en";
        langBtn.textContent = "En";
    } else {
        currentLang = "ka";
        langBtn.textContent = "Ka";
    }
    translate();
});

function translate() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
}

translate();

const ebaySwiper = new Swiper(".ebaySwiper", {
    loop: true,
    speed: 800,
    grabCursor: true,
    
    effect: 'slide', 

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});