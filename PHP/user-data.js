<?php
// Start session
session_start();

// Database connection
$host = 'localhost';
$user = 'root'; // Your database username
$password = ''; // Your database password
$dbname = 'test_db'; // Your database name

// Create a connection
$conn = new mysqli($host, $user, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle form submission
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['name'], $_POST['email'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    
    // Insert data into the database
    $stmt = $conn->prepare("INSERT INTO users (name, email) VALUES (?, ?)");
    $stmt->bind_param("ss", $name, $email);
    $stmt->execute();
    $stmt->close();
    
    // Set session variable for login (simulating authentication)
    $_SESSION['loggedin'] = true;
    $_SESSION['username'] = $name;
    header("Location: " . $_SERVER['PHP_SELF']); // Refresh the page
    exit;
}

// Handle logout
if (isset($_GET['logout'])) {
    session_destroy();
    header("Location: " . $_SERVER['PHP_SELF']);
    exit;
}

// Check if user is logged in
$isLoggedIn = isset($_SESSION['loggedin']) && $_SESSION['loggedin'] === true;

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP All-in-One Example</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #333;
        }
        input[type="text"], input[type="email"], button {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            box-sizing: border-box;
            border: 1px solid #ddd;
        }
        button {
            background-color: #4CAF50;
            color: white;
            border: none;
        }
        button:hover {
            background-color: #45a049;
        }
        .message {
            margin: 10px 0;
            color: green;
        }
        .logout {
            margin-top: 20px;
            text-align: center;
        }
    </style>
</head>
<body>

<div class="container">

    <?php if ($isLoggedIn): ?>
        <h1>Welcome, <?php echo htmlspecialchars($_SESSION['username']); ?>!</h1>
        <div class="logout">
            <a href="?logout=true">Logout</a>
        </div>
    <?php else: ?>
        <h1>User Registration</h1>
        <form method="POST" action="">
            <input type="text" name="name" placeholder="Enter your name" required>
            <input type="email" name="email" placeholder="Enter your email" required>
            <button type="submit">Register</button>
        </form>
    <?php endif; ?>

    <?php
    // Check if form submission was successful and show a message
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        echo '<div class="message">Thank you for registering!</div>';
    }

    // Display users from database if logged in
    if ($isLoggedIn) {
        $result = $conn->query("SELECT * FROM users");
        echo "<h2>Registered Users</h2><ul>";
        while ($row = $result->fetch_assoc()) {
            echo "<li>" . htmlspecialchars($row['name']) . " (" . htmlspecialchars($row['email']) . ")</li>";
        }
        echo "</ul>";
    }
    ?>

</div>

</body>
</html>

<?php
// Close the database connection
$conn->close();
?>
