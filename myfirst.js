function purchaseBook(title, author, price, discountPercentage, taxPercentage, stock, amountToPurchase, creditTerm) {
    const TAX_RATE = 0.01;
  
    if (amountToPurchase > stock) {
      console.log("Sorry, this book is out of stock.");
      return;
    }
  
    let totalPrice = 0;
    let remainingStock = stock;
    const creditPrice = totalPrice / creditTerm;

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
    const creditPricePerTerm = totalPrice / creditTerm;
  
    const creditDetails = [];
  
    for (let i = 1; i <= creditTerm; i++) {
      const termPrice = creditPricePerTerm * i;
      const dueDate = new Date();
      dueDate.setMonth(dueDate.getMonth() + i);
      creditDetails.push({ term: i, price: termPrice.toFixed(2), dueDate: dueDate.toLocaleDateString() });
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
  
    console.log("Credit Details:");
    console.log(creditDetails);
  
    return totalPrice;
  }
  
  

const finalPrice = purchaseBook("Marmut Merah Jambu", "Raditya Dika", 20, 10, 8, 5, 3, 6);

  