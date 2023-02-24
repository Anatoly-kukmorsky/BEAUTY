 // элементы взаимодействия
const elements = {
    // якоря
    anhcors: document.querySelectorAll('a[href*="#"]'),

    // top-line-menu
    navMenuLinks: document.querySelectorAll(".nav-menu--link"),
    navMenu: document.querySelector(".nav-desctop"),
    activeMenu: `active`,

    // элементы взаимодействия при экране меньше 738px
    headerImageDesctop: `../img/header/header-image-desctop.svg`,
    headerImageMobail: `../img/header/header-image-mobail.svg`,
    headerImage: document.querySelector("#header-image"),
    screen: window.matchMedia("(max-width:768px)"),

    // меню-бургер
    menuMobailLinks: document.querySelectorAll(".menu-mobail--link"),
    menuMobail: document.querySelector(".nav-mobail--menu"),
    menuBurger: document.querySelector(".menu-burger"),
    body: document.querySelector("body"),
    menuAccordions: document.querySelectorAll(".menu-accordion"),

}

// плавный скролл до якоря
{
    for (let anchor of elements.anhcors) {
        anchor.addEventListener('click', (e) => {
            e.preventDefault()
            const blockID = anchor.getAttribute('href')
            document.querySelector('' + blockID).scrollIntoView({
                behavior: 'smooth', block: 'start'
            })
        })
    }
}

// активный элемент
{
    const activeLink = (links, menu, className) => {
        links.forEach(link => 
            link.addEventListener('click', () => 
                menu.querySelector(`.${className}`)
                    ?.classList.remove(className)
                    & link.classList.add(className)
            ))
    }
    activeLink(elements.navMenuLinks, elements.navMenu, elements.activeMenu)
}

// Смена картинки после изменения ширины экрана меньше 
{
    if (matchMedia) {
        elements.screen.addListener(changes)
        changes(elements.screen)
    }

    function changes(screen) {
        screen.matches
            ? elements.headerImage.src = elements.headerImageMobail
            : elements.headerImage.src = elements.headerImageDesctop
    }
}

// меню-бургер
{
    // открытие-закрытие меню-бургер
    elements.menuBurger.addEventListener('click', () => 
        elements.menuMobail.classList.toggle('active') &
        elements.menuBurger.classList.toggle('active') &
        elements.body.classList.toggle("scroll-hidden")   
    )

    // закрытие меню-бургер после выбора ссылки
    elements.menuMobailLinks.forEach(link => 
        link.addEventListener('click', () => 
            elements.menuMobail.classList.remove("active") &
            elements.menuBurger.classList.remove("active") &
            elements.body.classList.remove("scroll-hidden")
        )
    )

    // открытие-закрытие меню-аккордеон
    elements.menuAccordions.forEach(box =>    
        box.addEventListener("click", () => 
            box.nextElementSibling.classList.toggle('none')
        )
    )
}
