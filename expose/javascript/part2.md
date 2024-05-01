Part 2:
1. "3", i is incrimented up to 3 and since it is a var it can be called outside of its code block
2. "150", it prints the last value that discountprice was set to in the for loop, which was 150. No scope errors bc it is declared as a var
3. "150", same explanation as 2, but for finalPrice var
4. "[50,100,150]", this is the list of prices that were pushed into the array during the for loop
5. Error. There is a scope error as i is a let and cannot be accessed outside its for code block
6. Error. Score error as discountedPrice cannot be accessed outside of the for loop code block as it is a let
7. "150", as the let is declared outside the for loop code block, and then modified inside it, so when it is called outside the block it is the value it was modified into in the code block
8. "[50,100,150]", this is the list of prices that were pushed into the array during the for loop, and the array was created as a let outside the loop and is thus had no scope errors
9. Error. Scope error, as line 11 is outside of the code block i is declared in (as a let)
10. "3", this is the number length is set to, not scope errors, and no 'breaking const' errors
11. "[50,100,150]", this is the list of prices pushed into the array in the for loop. There are no errors in that process 
12.  
    * a. student.name
    * b. student['Grad Year']
    * c. student.greeting()
    * d. student['Favorite Teacher'].name
    * e. student.courseLoad[0]
13.   
    * a. "32", since a string is a operand string concatenation is used, and thus the int 2 is treated as a string
    * b. 1, subtraction is always treated as interger subtraction, so the 3 string is turned into an integer
    * c. 3, integer addition treats null as 0
    * d. "3null", same reasoning for part a
    * e. 4, integer addition treats the true boolean as 1 
    * f. 0, the addition treats boolean false as 0 and null as 0 
    * g. "3undefined", same reasoning as part a 
    * h. "NaN", This is the result of a failed number conversion, as noted in part 2 javascript uses integer subtraction, but cannot assign a numerical value to undefined. 
14.      
    * a. True, javascript will attempt to convert the string to a number for comparisons, and in this case it is possible and 2 is greater than 1 
    * b. False, for two string javascript will compare based on the chars. 2 has a higher char ASCII value than 1, and is thus greater 
    * c. True, == does an implicit type cast, meaning it will typecast the variables to be of the same type and them compare them
    * d. False, === does value and type comparisons, and the two are of different types
    * e. False, true is typecast to 1, and 1 does not equal 2
    * f. True, Boolean() evalutes to true for any non 0 number, and true does equal true (and becuase of the evaluation they are of same types)
15. === does value and type comparisons, while == does a type cast and compares the values. In essence === type matter, but == it doesn't
16. see part2-question16.js file
17. "[2,4,6]". When the function is first called a new array is made, *newArr*, a for loop is then called for each item in the passed array, in this case 3 items. Then item at index i is passed into *doSomething* that doubles the numbers, and adds them to *newArr*. This results in 1,2,3 being doubled then returned. 
18. See part2-question18.js file
19. 1 4 3 2       
