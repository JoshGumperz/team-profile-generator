const generateHtml = (data) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="../assets/style.css">
    <title>Test</title>
</head>
<body>
  <header class="jumbotron d-flex flex-column align-items-center">
    <h1 class="display-3">My Team</h1>
  </header>
  <main class="main-content d-flex">
  ${data}
  </main>
  <script src="../assets/managerHtml.js"></script>
</body>
</html>`

module.exports = generateHtml;
