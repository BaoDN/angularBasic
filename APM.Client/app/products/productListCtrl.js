(function () {
    "use strict";
    angular.module("productManagement")
    .controller("ProductListCtrl",
                    productListCtrl);
    function productListCtrl() {
        var vm = this;

        vm.products = [
            {
                "productId": 1,
                "productName": "Leaf Rake",
                "productCode": "GDN-0011",
                "releaseDate": "March 19, 2009",
                "description": "Leaf rake with 48 inch wooden handle",
                "price": 19.25
            },
            {
                "productId": 2,
                "productName": "Leaf steak",
                "productCode": "GDN-0012",
                "releaseDate": "MAY 19, 2009",
                "description": "Leaf rake with 48 inch wooden handle",
                "price": 29.25
            },
            {
                "productId": 3,
                "productName": "Leaf duck",
                "productCode": "GDN-0013",
                "releaseDate": "September 19, 2009",
                "description": "Leaf rake with 48 inch wooden handle",
                "price": 39.25
            }
        ]
    }

}()
);