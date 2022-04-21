
class Benefit {
    constructor(benefitDescription, state) {
        this.benefitDescription = benefitDescription;
        this.state = state;
    }
}

class PayDesignersPlan {
    constructor(name, price, maxMembers, maxProjects, benefits) {
        this.name = name;
        this.price = price;
        this.maxMembers = maxMembers;
        this.maxProjects = maxProjects;
        this.benefits = [...[new Benefit(`Includes ${this.maxProjects} Projects`, true), new Benefit(`Includes ${this.maxMembers} Members`, true)], ...benefits];
    }
    // benefits.unshift(`Includes ${this.maxProjects} Projects`, true);
}
class PayBuyersPlan {
    constructor(name, price, benefits) {
        this.name = name;
        this.price = price;
        this.benefits = benefits;
    }
}


function main() {

    const freePlanDesigner = {
        name: "Free",
        price: 0,
        maxProjects: 3,
        maxMembers: 4,
        benefits: [
            new Benefit(`Includes ${this.maxProjects} Projects`, true),
            new Benefit(`Includes ${this.maxMembers} Members`, true),
            new Benefit("Visualize public posts", true),
            new Benefit("Make private designs", false),
            new Benefit("See who checks your profile", false),
            new Benefit("Download high definition pictures", false),
            new Benefit("Promotion Multiplier", false)
        ]
    }

    const freePlanBuyer = {
        name: "Free",
        price: 0,
        benefits: [
            new Benefit("Visualize public posts", true),
            new Benefit("Use all designs", false),
            new Benefit("Contact with designers", true),
            new Benefit("Download high definition pictures", false)
        ]
    }
    benefitsDesignerAllTrue = [
        new Benefit("Visualize public posts", true),
        new Benefit("Make private designs", true),
        new Benefit("See who checks your profile", true),
        new Benefit("Download high definition pictures", true),
        new Benefit("Promotion Multiplier", true)
    ]
    benefitsBuyerAllTrue = [
        new Benefit("Visualize public posts", true),
        new Benefit("Use all designs", true),
        new Benefit("Contact with designers", true),
        new Benefit("Download high definition pictures", true)
    ]


    var cardsFree = document.getElementsByClassName("card")

    var Pro = new PayDesignersPlan("Pro", 19, 10, 12, benefitsDesignerAllTrue);
    var Gigachad = new PayDesignersPlan("Gigachad", 29, 30, 24, benefitsDesignerAllTrue);
    var Picasso = new PayDesignersPlan("Picaso", 49, "Unlimited", "Unlimited", benefitsDesignerAllTrue);
    var Collector = new PayBuyersPlan("Collector", 19, benefitsBuyerAllTrue);
    const plans = [
        freePlanDesigner,
        Pro,
        Gigachad,
        Picasso,
        freePlanBuyer,
        Collector
    ];
    console.log(plans);
    var eliminate = undefined;
    for (let i = 0; i < plans.length; i++) {
        cardsFree[i].getElementsByTagName("h3")[0].innerText = plans[i].name;
        cardsFree[i].getElementsByClassName("price")[0].innerText = `$ ${plans[i].price} / month`
        for (let j = 0; j < plans[i].benefits.length; j++) {
            if (!plans[i].benefits[j].state) {
                cardsFree[i].getElementsByTagName("li")[j].style.color = "#A5ADBB";
                eliminate = 0;
            }
            else {
                eliminate = 1;
            }
            cardsFree[i].getElementsByTagName("li")[j].getElementsByTagName("img")[eliminate].style.display = "none";
        }
    }

}

main();