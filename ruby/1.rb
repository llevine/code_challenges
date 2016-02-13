# Multiples of 3 and 5
# Problem 1
# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
# Find the sum of all the multiples of 3 or 5 below 1000.
require "pry"

def sum_number(input)
	# need to find the multiples of 3 and 5 in the range of 0 to 10
	# populates the array
	my_array = Array (0...input)

	# selects items that modulo 5 or 3
	multiple = my_array.select{|item| item % 5 == 0 || item % 3 == 0}

	# reduce adds all the items in the array
	sum = multiple.reduce(:+)

	# functions should return something not print or puts them
	return sum

end


# RUNNING THE FUNCTION BELOW
sum_number(10)
puts ('////////////////////////////////////')
sum_number(1000)

binding.pry