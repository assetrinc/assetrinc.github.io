# Usage with Pure PHP

    <?php

    require 'vendor/autoload.php';

    use Assetrinc\AssetService;

    $asset_service = new AssetService(
        // the category paths to use when loading manifest files
        array(
            'core' => __DIR__ . '/assets',
            'bower' => __DIR__ . '/bower_components',
        ),
        // the base route assets are served from
        '/assets',
        array('debug' => false)
    );

    // in the controller that serves your /assets/{name} route
    header("Content-Type: " . $asset_service->getContentType($name));
    echo $asset_service->getContent($name);

    // in your templates, generate JS/CSS tags using
    echo $asset_service->jsTag("core/application.js");
    echo $asset_service->cssTag("core/application.css");
