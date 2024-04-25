let pro = fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json');
pro.then((response) => {
    return response.json();
})
.then((data) => {
    let menid = document.getElementById("men");
    let womenid = document.getElementById("women");
    let childrenid = document.getElementById("children");
    let categories = data.categories;
    let men = categories[0].category_products;
    let women = categories[1].category_products;
    let children = categories[2].category_products;

    // styling the buttons
    document.querySelector('.menclass').style.backgroundColor = "black";
    document.querySelector('.menclass').style.color = "white";
    document.querySelector('.womenclass').style.backgroundColor = "white";
    document.querySelector('.womenclass').style.color = "black";
    document.querySelector('.childrenclass').style.backgroundColor = "white";
    document.querySelector('.childrenclass').style.color = "black";

    // Loading the men products
    for (let i = 0; i < men.length; i++) {
        let menDiv = document.createElement('div');
        menDiv.className = "insidecontainer";
        menid.append(menDiv);
        let m = men[i];
        let id = m.id;
        menDiv.id = id;
        let title = m.title;
        let price = m.price;
        let compare_at_price = m.compare_at_price;
        let vendor = m.vendor;
        let badge_text = m.badge_text;
        let image = m.image;
        let second_image = m.second_image;

        // function to calculate the discount
        let discount = Math.floor(((compare_at_price - price) / compare_at_price) * 100);
        let discountDiv = document.createElement('div');
        discountDiv.innerHTML = discount + "% off";
        discountDiv.style.color = "red";
        discountDiv.style.padding = "10px";

        // Image
        // Image container
        let imageContainer = document.createElement('div');
        imageContainer.className = "image-container";
        menDiv.append(imageContainer);

        // Image
        let menimg = document.createElement('img');
        menimg.src = image;
        imageContainer.append(menimg);

        // Badge Text
        let badgeSpan = document.createElement('span');
        badgeSpan.className = "badge-text";
        badgeSpan.innerHTML = badge_text;
        imageContainer.append(badgeSpan);

        if(badge_text === "") {
            badgeSpan.style.display = "none";
        }

        // Div for title and vendor
        let indiv1 = document.createElement('div');
        indiv1.className = "insidediv1";
        menDiv.append(indiv1);

        let menTitle = document.createElement('div');
        menTitle.innerHTML = title;
        menTitle.style.fontWeight = "bold";
        menTitle.style.padding = "10px";
        menTitle.style.fontSize = "20px";
        indiv1.append(menTitle);

        let menVendor = document.createElement('div');
        menVendor.innerHTML = "&#x2022 " + vendor;
        menVendor.style.padding = "10px";
        indiv1.append(menVendor);

        // Div for price and compare at price
        let indiv2 = document.createElement('div');
        indiv2.className = "insidediv2";
        menDiv.append(indiv2);

        let menPrice = document.createElement('div');
        menPrice.style.padding = "10px";
        menPrice.innerHTML = "Rs"+price;
        indiv2.append(menPrice);

        let menCompare = document.createElement('div');
        menCompare.innerHTML = "Rs"+compare_at_price;
        menCompare.style.padding = "10px";
        menCompare.style.textDecoration = "line-through";
        indiv2.append(menCompare);

        // Discount
        indiv2.append(discountDiv);


        // add to cart button
        let menButton = document.createElement('button');
        menButton.innerHTML = "Add to Cart";
        menButton.style.backgroundColor = "black";
        menButton.style.color = "white";
        menButton.style.padding = "5px";
        menButton.style.border = "none";
        menButton.style.cursor = "pointer";
        menButton.style.margintop = "15px";
        menButton.style.borderRadius = "2px";
        menButton.style.fontWeight = "bold";
        menDiv.append(menButton);

    }

    // Loading the women products
    for (let i = 0; i < women.length; i++) {
        let womenDiv = document.createElement('div');
        womenDiv.className = "insidecontainer";
        womenid.append(womenDiv);
        let w = women[i];
        let id = w.id;
        womenDiv.id = id;
        let title = w.title;
        let price = w.price;
        let compare_at_price = w.compare_at_price;
        let vendor = w.vendor;
        let badge_text = w.badge_text;
        let image = w.image;
        let second_image = w.second_image;
    
        // function to calculate the discount
        let discount = Math.floor(((compare_at_price - price) / compare_at_price) * 100);
        let discountDiv = document.createElement('div');
        discountDiv.innerHTML = discount + "% off";
        discountDiv.style.color = "red";
        discountDiv.style.padding = "10px";
    
        // Image container
        let imageContainer = document.createElement('div');
        imageContainer.className = "image-container";
        womenDiv.append(imageContainer);

        // Image
        let womenimg = document.createElement('img');
        womenimg.src = image;
        imageContainer.append(womenimg);

        // Badge Text
        let badgeSpan = document.createElement('span');
        badgeSpan.className = "badge-text";
        badgeSpan.innerHTML = badge_text;
        imageContainer.append(badgeSpan);
    
        // Div for title and vendor
        let indiv1 = document.createElement('div');
        indiv1.className = "insidediv1";
        womenDiv.append(indiv1);
    
        let womenTitle = document.createElement('div');
        womenTitle.innerHTML = title;
        womenTitle.style.fontWeight = "bold";
        womenTitle.style.padding = "10px";
        womenTitle.style.fontSize = "20px";
        indiv1.append(womenTitle);
    
        let womenVendor = document.createElement('div');
        womenVendor.innerHTML = "&#x2022 " + vendor;
        womenVendor.style.padding = "10px";
        indiv1.append(womenVendor);
    
        // Div for price and compare at price
        let indiv2 = document.createElement('div');
        indiv2.className = "insidediv2";
        womenDiv.append(indiv2);
    
        let womenPrice = document.createElement('div');
        womenPrice.style.padding = "10px";
        womenPrice.innerHTML = "Rs"+price;
        indiv2.append(womenPrice);
    
        let womenCompare = document.createElement('div');
        womenCompare.innerHTML = "Rs"+compare_at_price;
        womenCompare.style.padding = "10px";
        womenCompare.style.textDecoration = "line-through";
        indiv2.append(womenCompare);
    
        // Discount
        indiv2.append(discountDiv);
    
    
        // add to cart button
        let womenButton = document.createElement('button');
        womenButton.innerHTML = "Add to Cart";
        womenButton.style.backgroundColor = "black";
        womenButton.style.color = "white";
        womenButton.style.padding = "5px";
        womenButton.style.border = "none";
        womenButton.style.cursor = "pointer";
        womenButton.style.margintop = "15px";
        womenButton.style.borderRadius = "2px";
        womenButton.style.fontWeight = "bold";
        womenDiv.append(womenButton);
    }
    

    // Loading the children products
    for (let i = 0; i < children.length; i++) {
        let childrenDiv = document.createElement('div');
        childrenDiv.className = "insidecontainer";
        childrenid.append(childrenDiv);
        let c = children[i];
        let id = c.id;
        childrenDiv.id = id;
        let title = c.title;
        let price = c.price;
        let compare_at_price = c.compare_at_price;
        let vendor = c.vendor;
        let badge_text = c.badge_text;
        let image = c.image;
        let second_image = c.second_image;
    
        // function to calculate the discount
        let discount = Math.floor(((compare_at_price - price) / compare_at_price) * 100);
        let discountDiv = document.createElement('div');
        discountDiv.innerHTML = discount + "% off";
        discountDiv.style.color = "red";
        discountDiv.style.padding = "10px";
    
        // Image container
        let imageContainer = document.createElement('div');
        imageContainer.className = "image-container";
        childrenDiv.append(imageContainer);

        // Image
        let childrenimg = document.createElement('img');
        childrenimg.src = image;
        imageContainer.append(childrenimg);

        // Badge Text
        let badgeSpan = document.createElement('span');
        badgeSpan.className = "badge-text";
        badgeSpan.innerHTML = badge_text;
        imageContainer.append(badgeSpan);
    
        // Div for title and vendor
        let indiv1 = document.createElement('div');
        indiv1.className = "insidediv1";
        childrenDiv.append(indiv1);
    
        let childrenTitle = document.createElement('div');
        childrenTitle.innerHTML = title;
        childrenTitle.style.fontWeight = "bold";
        childrenTitle.style.padding = "10px";
        childrenTitle.style.fontSize = "20px";
        indiv1.append(childrenTitle);
    
        let childrenVendor = document.createElement('div');
        childrenVendor.innerHTML = "&#x2022 " + vendor;
        childrenVendor.style.padding = "10px";
        indiv1.append(childrenVendor);
    
        // Div for price and compare at price
        let indiv2 = document.createElement('div');
        indiv2.className = "insidediv2";
        childrenDiv.append(indiv2);
    
        let childrenPrice = document.createElement('div');
        childrenPrice.style.padding = "10px";
        childrenPrice.innerHTML = "Rs"+price;
        indiv2.append(childrenPrice);
    
        let childrenCompare = document.createElement('div');
        childrenCompare.innerHTML = "Rs"+compare_at_price;
        childrenCompare.style.padding = "10px";
        childrenCompare.style.textDecoration = "line-through";
        indiv2.append(childrenCompare);
    
        // Discount
        indiv2.append(discountDiv);
    
    
        // add to cart button
        let childrenButton = document.createElement('button');
        childrenButton.innerHTML = "Add to Cart";
        childrenButton.style.backgroundColor = "black";
        childrenButton.style.color = "white";
        childrenButton.style.padding = "5px";
        childrenButton.style.border = "none";
        childrenButton.style.cursor = "pointer";
        childrenButton.style.margintop = "15px";
        childrenButton.style.borderRadius = "2px";
        childrenButton.style.fontWeight = "bold";
        childrenDiv.append(childrenButton);
    }
    


    menid.style.display = "flex";
    womenid.style.display = "none";
    childrenid.style.display = "none";

    function changetab(getclass) {
        if (getclass === "men-class") {
            menid.style.display = "flex";
            womenid.style.display = "none";
            childrenid.style.display = "none";
            document.querySelector('.menclass').style.backgroundColor = "black";
            document.querySelector('.menclass').style.color = "white";
            document.querySelector('.womenclass').style.backgroundColor = "white";
            document.querySelector('.womenclass').style.color = "black";
            document.querySelector('.childrenclass').style.backgroundColor = "white";
            document.querySelector('.childrenclass').style.color = "black";
        } else if (getclass === "women-class") {
            menid.style.display = "none";
            womenid.style.display = "flex";
            childrenid.style.display = "none";
            document.querySelector('.menclass').style.backgroundColor = "white";
            document.querySelector('.menclass').style.color = "black";
            document.querySelector('.womenclass').style.backgroundColor = "black";
            document.querySelector('.womenclass').style.color = "white";
            document.querySelector('.childrenclass').style.backgroundColor = "white";
            document.querySelector('.childrenclass').style.color = "black";
        } else if (getclass === "children-class") {
            menid.style.display = "none";
            womenid.style.display = "none";
            childrenid.style.display = "flex";
            document.querySelector('.menclass').style.backgroundColor = "white";
            document.querySelector('.menclass').style.color = "black";
            document.querySelector('.womenclass').style.backgroundColor = "white";
            document.querySelector('.womenclass').style.color = "black";
            document.querySelector('.childrenclass').style.backgroundColor = "black";
            document.querySelector('.childrenclass').style.color = "white";
        }
    }

    window.changetab = changetab;
});
