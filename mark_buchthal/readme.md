
Greet is being created as a constructor and is beingexported to our test file.
In the Greet function, we are taking 'name' as a parameter and creating a 'hello' method.

In the tests, I am testing to ensure that the instance of greet with the parameter 'Mark' is equal to the object greet.name & the method greet.hello is equal to 'hello Mark'

For the bonus, I am passing in the process arguments as a parameter to the object and checking it as an array.  This is a contrived example as I am not passing in the CLI.
