Part 2:
1. "3", i is incrimented up to 3 and since it is a var it can be called outside of its code block
2. "150", it prints the last value that discountprice was set to in the for loop, which was 150. No scope errors bc it is declared as a var
3. "150", same explanation as 2, but for finalPrice var
4. "[50,100,150]", this is the list of prices that were pushed into the array during the for loop
5. Error. There is a scope error as i is a let and cannot be accessed outside its for code block
6. Error. Score error as discountedPrice cannot be accessed outside of the for loop code block as it is a let
7. "150", as the let is declared outside the for loop code block, and then modified inside it, so when it is called outside the block it is the value it was modified into in the code block
8. "[50,100,150]", this is the list of prices that were pushed into the array during the for loop, and the array was created as a let outside the loop and is thus had no scope errors
9. 