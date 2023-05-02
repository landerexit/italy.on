const popularListElem = document.getElementsByClassName("popular__list")[0]
const catalogListElem = document.getElementsByClassName("catalog__list")[0]
const bestListElem = document.getElementsByClassName("best__list")[0]
const footerListElem = document.getElementsByClassName("footer__list")[0]

const popularListData = [
    "Ватикан", "Пантеон", "Замок Святого Ангела", "Римский Форум",
    "Академия изящных искусств", "Замок Сфорца", "Фонтан Треви",
    "Галерея Уффици", "Мост Понте-Веккьо", "Сикстинская капелла"
]

const catalogListData = [
    {
        img: "./img/catalog/ct0.png",
        name: "История",
    },
    {
        img: "./img/catalog/ct1.png",
        name: "Курорты",
    },
    {
        img: "./img/catalog/ct2.png",
        name: "Высокая кухня",
    },
    {
        img: "./img/catalog/ct3.png",
        name: "Мероприятия",
    },
    {
        img: "./img/catalog/ct4.png",
        name: "Экстрим",
    },
    {
        img: "./img/catalog/ct0.png",
        name: "История",
    },
    {
        img: "./img/catalog/ct1.png",
        name: "Курорты",
    },
    {
        img: "./img/catalog/ct2.png",
        name: "Высокая кухня",
    },
    {
        img: "./img/catalog/ct3.png",
        name: "Мероприятия",
    },
    {
        img: "./img/catalog/ct4.png",
        name: "Экстрим",
    },
]

const bestListData = [
    {
        img: "./img/best/b1.png",
        name: "Доломитовые Альпы",
        text: "Здесь можно увидеть самый красивые закаты и рассветы, а пешие прогулки по горам заставят затаить дыхание."
    },
    {
        img: "./img/best/b2.png",
        name: "Сан-Квирико-д’Орча",
        text: "Средневековый крохотный город относят к замечательным примерам градостроительства."
    },
    {
        img: "./img/best/b3.png",
        name: "Портофино",
        text: "Город, погруженный в растительность, его окрестности, уютные бухты, невероятно красивое море."
    },
    {
        img: "./img/best/b4.png",
        name: "Манарола",
        text: "Яркий и красочный город выстроенный на скале, расположенной на севере страны."
    },
    {
        img: "./img/best/b5.png",
        name: "Капри",
        text: "На протяжении двух тысяч лет остров посещали императоры, известные мыслители, великие военачальники."
    },
    {
        img: "./img/best/b6.png",
        name: "Венеция",
        text: "Самый романтичный уголок Европы. Величественная архитектура и неповторимая атмосфера свободы."
    },
]

const footerListData = [
    {
        title: "Предложения",
        content: ["Акции", "Общий список", "Возврат денег"]
    },

    {
        title: "О компании",
        content: ["Сотрудники", "Отзывы", "Контакты"]
    },

    {
        title: "Сотрудничество",
        content: ["Вакансии", "Франшиза", "Реклама"]
    }
]

function createElement(tag, className, content) {
    const newElement = document.createElement(tag)
    newElement.classList.add(className)
    newElement.innerHTML = content

    return newElement
}


function generatePopular() {
    popularListData.map(item => {
        popularListElem.insertAdjacentElement(
            "beforeend", 
            createElement(
                "p", 
                "popular__list__item", 
                item
            )
        )
    })
}

function generateCatalog() {
    catalogListData.map(item => {
    const mainTag = "catalog"

    const img = createElement(
        "img",
        mainTag +"__img",
        ""
    )

    img.setAttribute("src", item.img)

    const title = createElement(
        "h3",
        mainTag + "__name",
        item.name
    )

    const card = createElement("div", mainTag + "__item", "")
    
    card.insertAdjacentElement(
        "beforeend",
        img
    )
    
    card.insertAdjacentElement(
        "beforeend",
        title
    )

    catalogListElem.insertAdjacentElement("beforeend", card)
})
}

function generateBest() {
    bestListData.map(item => {
        const mainTag = "best__item"

        const img = createElement(
            "img",
            mainTag + "__img",
            ""
        )

        img.setAttribute("src", item.img)

        const title = createElement(
            "h3",
            mainTag + "__title",
            item.name
        )

        const text = createElement(
            "p",
            mainTag + "__text",
            item.text
        )

        const description = createElement(
            "div",
            mainTag + "__description",
            ""
        )

        description.insertAdjacentElement(
            "beforeend",
            title
        )

        description.insertAdjacentElement(
            "beforeend",
            text
        )

        const card = createElement("div", mainTag, "")
        
        card.insertAdjacentElement(
            "beforeend",
            img
        )
        
        card.insertAdjacentElement(
            "beforeend",
            description
        )

        bestListElem.insertAdjacentElement("beforeend", card)
    })
}

function generateFooter() {
    footerListData.map(column => {
        const mainTag = "footer__column"

        const title = createElement(
            "h3",
            mainTag + "__title",
            column.title
        )

        const columnElem = createElement(
            "div",
            mainTag,
            ""
        )

        columnElem.insertAdjacentElement("beforeend", title)

        column.content.map(line => {
            const lineElem = createElement(
                "a",
                mainTag + "__line",
                line
            )

            lineElem.setAttribute("href", "#")

            columnElem.insertAdjacentElement("beforeend", lineElem)
        })

        footerListElem.insertAdjacentElement("beforeend", columnElem)
    })
}

generatePopular()
generateCatalog()
generateBest()
generateFooter()

let scrollRight = false;

document.getElementsByClassName("catalog__buttons__left")[0].addEventListener("mousedown", () => {
    catalogListElem.scrollBy({top: 0, left: -400, behavior: 'smooth' })
})

document.getElementsByClassName("catalog__buttons__right")[0].addEventListener("mousedown", (e) => {
    catalogListElem.scrollBy({top: 0, left: 400, behavior: 'smooth' })
})

document.getElementsByClassName("drop__button")[0].addEventListener("mousedown", (e) => {
    document.getElementsByClassName("drop")[0].style.display = "none"
})

document.getElementsByClassName("drop__open")[0].addEventListener("mousedown", (e) => {
    document.getElementsByClassName("drop")[0].style.display = "initial"
})

