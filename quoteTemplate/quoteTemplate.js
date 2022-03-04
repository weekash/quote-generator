export const getQuoteTemplate = (color = 'red', quote='Nothing is there')=> `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quote-image-download</title>
    
<style>
    @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .container{
        width:1000px;
        height: 500px;
        background-color: #222;
        display: flex;
        justify-content: center;
        align-items: center;
        padding:20px;
    }
    .quote{
        font-family: 'Lato', sans-serif;
        font-size:50px;
        line-height:65px;
        color:${color};
        text-align:center;
    }

</style>
</head>
<body>
    <div class="container">
        <h1 class="quote">${quote}</h1>
    </div>
</body>
</html>
`