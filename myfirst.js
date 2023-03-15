function purchaseBook(title, author, price, discountPercentage, taxPercentage) {
    const TAX_RATE = 0.01;

    const discountAmount = price * (discountPercentage / 100);
  
    const priceAfterDiscount = price - discountAmount;
  
    const taxAmount = priceAfterDiscount * (taxPercentage / 100);
  
    const priceAfterTax = priceAfterDiscount + taxAmount;

    console.log("Title:", title);
    console.log("Author:", author);
    console.log("Price:", price);
    console.log("Discount Percentage:", discountPercentage);
    console.log("Tax Percentage:", taxPercentage);
    console.log("Amount of Discount:", discountAmount);
    console.log("Price After Discount:", priceAfterDiscount);
    console.log("Amount of Tax:", taxAmount);
    console.log("Price After Tax:", priceAfterTax);
  
    // Return the final price
    return priceAfterTax;
}

const finalPrice = purchaseBook("Marmut Merah Jambu", "Raditya Dika", 20, 10, 8);

  