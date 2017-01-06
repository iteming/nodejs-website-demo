/**
 * Created by Administrator on 2017/1/5.
 */


// 主页面 数据加载
var app1 = angular.module('index', []);
app1.controller('indexCtrl', function ($scope, $sce) {
    $scope.company = {};
    $scope.productlist = [];
    $scope.photolist = [];
    $scope.loadCompany = function () {
        $.ajax({
            url: "/index_company",
            type: "get",
            dataType: "json",
            success: function (data) {
                if (data.status == 1) {
                    $scope.company = data.data;
                    $scope.company.description = $sce.trustAsHtml(data.data.description);
                    $scope.$apply();
                } else {
                    toastrShow(data.status, data.msg);
                }
            }
        });
    };
    $scope.loadProduct = function () {
        $.ajax({
            url: "/index_product",
            type: "get",
            dataType: "json",
            success: function (data) {
                if (data.status == 1) {
                    $scope.productlist = data.data;
                    for(var item in $scope.productlist){
                        $scope.productlist[item].detail_info = $sce.trustAsHtml($scope.productlist[item].detail_info);
                    }
                    $scope.$apply();
                } else {
                    toastrShow(data.status, data.msg);
                }
            }
        });
    };
    $scope.loadPhoto = function () {
        $.ajax({
            url: "/index_photo",
            type: "get",
            dataType: "json",
            success: function (data) {
                if (data.status == 1) {
                    $scope.photolist = data.data;
                    $scope.$apply();
                } else {
                    toastrShow(data.status, data.msg);
                }
            }
        });
    };
    $scope.loadCompany();
    $scope.loadProduct();
    $scope.loadPhoto();
});

angular.element(document).ready(function () {
    angular.bootstrap(document.getElementById('indexpage'), ['index']);
});