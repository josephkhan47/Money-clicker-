<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Click to Earn</title>
    <script src="https://www.paypal.com/sdk/js?client-id=ActBvohs5C_m5NEthZcxKdza1UpVpH3FNNyq6xb1976nS7EMTZRsae-2hsONhVoPgTuROB4lDTUh00j4"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: #f4f4f4;
        }
        #earnings {
            font-size: 24px;
            margin: 20px 0;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Click to Earn</h1>
    <div id="earnings">£0.00</div>
    <button id="click-button">Click to earn 50p!</button>
    <div id="paypal-button-container"></div>
    <script src="index.js"></script>
</body>
</html
