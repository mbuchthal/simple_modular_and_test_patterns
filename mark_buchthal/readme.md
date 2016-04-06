
April 6 -

Created gulpfile with tasks for mocha and eslint.  Created a watch task that will watch both all files and re run the mocha and eslint task.
Also, created package.json file.

April 5 -

Greet is being created as a constructor and is being exported to our test file.
In the Greet function, we are taking 'name' as a parameter and creating a 'hello' method.

In the tests, I am testing to ensure that the instance of greet with the parameter 'Mark' is equal to the object greet.name & the method greet.hello is equal to 'hello Mark'

For the bonus, I am passing in the process arguments as a parameter to the object and checking it as an array.  This is a contrived example as I am not passing in the CLI.
