# Basic Usage with Silex 1.x

If you are using Silex 1.x, we recommend making use of the AssetServiceProvider
provided by
[`lightster/lstr-silex-asset`](https://github.com/lightster/lstr-silex-asset).


## Using lstr-silex-asset

### Installation via Composer

Installing lst-silex-app is simple. Add `lightster/lstr-silex-asset` to your
composer.json and run `composer update lightster/lstr-silex-asset`.

### Enable the Service Provider

In your `index.php` or wherever you register service providers, register
the AssetServiceProvider:

    $app->register(new \Lstr\Silex\Asset\AssetServiceProvider(
        'path'       => array(
            'app' => __DIR__ . '/src/assets/app',
        ),
        'url_prefix' => '/asset',
    ));

### Add a `get` Route to Your Application

In your `index.php` or wherever you register your controllers, register
an `/asset/{name}` route:

    $controllers->get('/asset/{name}', function ($name, Application $app, Request $request) {
        return $app['lstr.asset.responder']->getResponse(
            $name,
            array(
                'request' => $request,
            )
        );
    })->assert('name', '.*');

The `assert('name', '.*')` on the route tells Silex to pass everything after
`/asset/` to the controller as a single parameter, `$name`. Without the `assert`,
Silex will treat the next slash after `/asset/` as a separate parameter
and report that no route matches the given request.

Assetrinc needs the entire asset path in order to locate the asset.

### Adding CSS and JS Includes to Your Templates

In your `php` and `phtml` template files, you may now create `<link>` and `<script>`
tags to include your CSS and JS, respectively, using the `lstr-silex-asset`
display helpers:

    <?php echo $app['lstr.asset']->cssTag('app/bundle/application.css'); ?>
    <?php echo $app['lstr.asset']->jsTag('app/bundle/application.js'); ?>