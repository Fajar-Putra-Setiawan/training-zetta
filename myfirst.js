function purchaseBook(title, author, price, discountPercentage, taxPercentage, stock, amountToPurchase) {
    // Constants
    const TAX_RATE = 0.01;
  
    // Check if the amount of books to be purchased is available in stock
    if (amountToPurchase > stock) {
      console.log("Sorry, this book is out of stock.");
      return;
    }
  
    let totalPrice = 0;
    let remainingStock = stock;
    
    for (let i = 0; i < amountToPurchase; i++) {
      if (remainingStock === 0) {
        console.log("Sorry, the remaining stock is not enough to fulfill your order.");
        break;
      }
  
      const discountAmount = price * (discountPercentage / 100);
  
      const priceAfterDiscount = price - discountAmount;

      const taxAmount = priceAfterDiscount * (taxPercentage / 100);
  
      const priceAfterTax = priceAfterDiscount + taxAmount;
  
      totalPrice += priceAfterTax;
  
      remainingStock -= 1;
    }
  
    console.log("Title:", title);
    console.log("Author:", author);
    console.log("Price:", price);
    console.log("Discount Percentage:", discountPercentage);
    console.log("Tax Percentage:", taxPercentage);
    console.log("Amount to Purchase:", amountToPurchase);
    console.log("Total Price:", totalPrice.toFixed(2));
  
    if (remainingStock > 0) {
      console.log(`There are ${remainingStock} book(s) left in stock.`);
    } else {
      console.log("This book is now out of stock.");
    }
  
    return totalPrice;
  }
  

const finalPrice = purchaseBook("Marmut Merah Jambu", "Raditya Dika", 20, 10, 8, 5, 4);

  