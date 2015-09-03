describe("bk.angular.ui.navbar Tests", function () {

    var mockScope;
    var compileService;

    beforeEach(angular.mock.module('bk.angular.ui.navbar', 'bk.angular.ui.navbar.html',
        'bk.angular.ui.navbar.ul.html', 'bk.angular.ui.navbar.li.html',
        'bk.angular.ui.navbar.header.html', 'bk.angular.ui.navbar.searchfield.html'));

    beforeEach(angular.mock.inject(function ($rootScope, $compile) {

        mockScope = $rootScope.$new();
        compileService = $compile;
        mockScope.leftItems = [{
            'label': 'Item1',
            'icon': 'icon1',
            'url': 'url1',
            'childs': [{
                'label': 'Child1',
                'icon': 'iconChild1',
                'url': 'urlChild1'
            }, {
                'label': 'Child2',
                'icon': 'iconChild2',
                'url': 'urlChild2'
            }]
        }, {
            'label': 'Item2',
            'icon': 'icon2',
            'url': 'url2',
            'childs': []
        }];
        mockScope.rightItems = [{
            'label': 'Item1',
            'icon': 'icon1',
            'url': 'url1',
            'childs': [{
                'label': 'Child1',
                'icon': 'iconChild1',
                'url': 'urlChild1'
            }, {
                'label': 'Child2',
                'icon': 'iconChild2',
                'url': 'urlChild2'
            }]
        }, {
            'label': 'Item2',
            'icon': 'icon2',
            'url': 'url2',
            'childs': []
        }];
    }));


    it("Generate BkNavBar element", function () {
        var compileFn = compileService('<bk-nav-bar header-brand-name="Reporting" ' +
        'header-logo-class-name="navbar-header-logo" header-toggle-label="Menu" ' +
        'left-items="leftItems" right-items="rightItems" search-field-enabled="true" ' +
        'search-field-submit-fn="test(query)"/>');
        var element = compileFn(mockScope);
        mockScope.$digest();
        expect(element.children('div').eq(0).children().eq(1).children('ul').length).toEqual(2);
    });

});