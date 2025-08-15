<?php
// Creating a variable
$variablename = 'name';


// Printing something to the frontend
echo 'Theo';

// PHP function
function greet($name, $colour){
    echo "<p>Hi, my name is $name and my favorite colour is $colour</p>";
}
// Calling the function
greet('John', 'blue');
greet('Jane', 'green');	

// A php array
$names = array('Theo','Maxine','Mewsalot');

// Accessing array items
echo $names[0];

// A simple while loop
$count = 0;
while ($count < count($names)) {
    echo "<li>$names[$count]</li>";
    $count++;
}

// A simple for each loop
foreach ($names as $name) {
    echo "<li>$name</li>";
}

?>