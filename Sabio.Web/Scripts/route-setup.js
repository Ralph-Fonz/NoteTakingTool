﻿(function () {
    'use strict';

    angular.module(APPNAME)
        .config(configRoutes);

    configRoutes.$inject = ['$stateProvider'];

    function configRoutes($stateProvider) {
        // All route definitions go in this function here

        /*
        Example URLs for entities:

        /admin/entity/tags (view all tags screen)
        /admin/entity/tags/123 (edit a specific tag, the route is actually defined as /admin/entity/tags/{id})
        /admin/entity/tags/new (screen to create a new tag)
        */

        $stateProvider.state({
            name: 'edit-exampleentity',
            url: '/admin/entity/example',
            component: 'adminEditExample'
        });
    }
})();