<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Laravel: A Framework For Web Artisans</title>
    <meta name="viewport" content="width=device-width">
    {{ HTML::style('laravel/css/style.css') }}
</head>
<body>
    <div class="wrapper">
        <header>
        <h1> Notte </h1>
        </header>
        <div role="main" class="main">
                <div class="home">
                        <h2>some parameters</h2>
                        <h3>{{ $name }}</h3>
                </div>
        </div>
    </div>
</body>
</html>
