function createMarkUp(teams){
return
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team info</title>
</head>
<body>
    <h1 id ="Header"> Welcome to team builder application</h1>
    ${
        teams.array.forEach(element => {
          "test"  
        })
    
    }
</body>
</html>
`
}
module.exports=createMarkUp;