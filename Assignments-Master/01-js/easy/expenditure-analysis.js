/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // Initialize an empty object to store totals by category
  var totalsByCategory = {};

  // Loop through each transaction
  for (var i = 0; i < transactions.length; i++) {
      var transaction = transactions[i];
      var category = transaction.category;
      var price = transaction.price;

      // If the category is already in the totals object, add to the total
      if (totalsByCategory[category]) {
          totalsByCategory[category] += price;
      } else {
          // Otherwise, set the total to the price of the current transaction
          totalsByCategory[category] = price;
      }
  }

  // Convert the totals object to an array of objects
  var result = [];
  for (var category in totalsByCategory) {
      result.push({
          category: category,
          totalSpent: totalsByCategory[category]
      });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;

