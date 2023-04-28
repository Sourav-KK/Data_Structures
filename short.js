function getDiscount(price, discountCode) {

    if (discountCode === "SUMMER20") {
        return price * 0.2
    }

    else if (discountCode === "WINTER15") {
        return price * 0.15
    }

    else if (discountCode === "SPRING10") {
        return price * 0.1
    }

    else {
        return price * 0
    }
}

// refractoed code 

const discounts = {
    SUMMER20: 0.2,
    WINTER15: 0.15,
    SPRING10: 0.1
}

function getDiscount(price, discountCode) {
    return discounts[discountCode]
        ? price * discounts[discountCode]
        : 0
}