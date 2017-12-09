angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $state, $ionicPopup, $timeout, ionicMaterialInk, ionicMaterialMotion, Cantact, $cordovaFile) {
    $scope.contacts = [];
    ionicMaterialMotion.fadeSlideInRight();
    ionicMaterialInk.displayEffect();
    var getdata = function getdata() {
        var success1 = [
            [0, "研究生部", "主任", 1, "赵继军", 1111189923, "-", 111110],
            [0, "研究生部", "书记", 2, "张庆桥", 1111116181, "-", 111116],
            [0, "研究生部", "副主任", 3, "胡浩云", 1111105116, "-", 111118],
            [0, "研究生部", "综合办主任", 4, "白焕海", 1111111716, "-", 111111],
            [0, "研究生部", "综合办", 5, "叶润峰", 1111109896, "-", 111112],
            [0, "研究生部", "招生办主任", 6, "陈建涛", 1111198598, "-", 111117],
            [0, "研究生部", "招生办", 7, "廖薇", 1111196228, "-", 111112],
            [0, "研究生部", "培养办主任", 8, "池静", 1111186333, "-", 111113],
            [0, "研究生部", "培养办", 9, "刘彦瑞", 1111106435, "-", 111119],
            [0, "研究生部", "培养办", 10, "闫立娜", 1111186737, "-", 111119],
            [0, "研究生部", "培养办", 11, "王大伟", 1111188893, "-", 111119],
            [0, "研究生部", "系统维护", 12, "魏红君", 1111128752, "-", 111112],
            [1, "建筑学院", "院长", 101, "吴鹏", 1111101905, "-", 111112],
            [1, "建筑学院", "副院长", 102, "邵新刚", 1111113900, "-", 111112],
            [1, "建筑学院", "学科办主任", 103, "闫栋", 1111106877, "-", 111118],
            [1, "建筑学院", "学科办", 104, "赵邯", 1111187285, "-", 111118],
            [2, "土木学院", "院长", 201, "姜新佩", 1111102911, "-", 111116],
            [2, "土木学院", "副院长", 202, "孟文清", 1111188860, "-", 111119],
            [2, "土木学院", "学科办主任", 203, "吴超", 1111102162, "-", 111114],
            [3, "能环学院", "院长", 301, "李思敏", 1111118123, "-", 111111],
            [3, "能环学院", "学科办主任", 302, "马丽艳", 1111118808, "-", 111119],
            [4, "机械学院", "院长", 401, "李秋生", 1111186262, "-", 111118],
            [4, "机械学院", "副院长", 402, "李河宗", 1111172737, "-", 111116],
            [4, "机械学院", "学科办主任", 403, "王凯", 1111159229, "-", 111112],
            [4, "机械学院", "学科办", 404, "翟志波", 1111100935, "-", 111112],
            [5, "信电学院", "院长", 501, "刘心", 1111107799, "-", 111113],
            [5, "信电学院", "学科办主任", 502, "安新", 1111108095, "-", 111116],
            [5, "信电学院", "学科办", 503, "付佳", 1111166517, "-", 111116],
            [5, "信电学院", "学科办", 504, "魏忠诚", 1111179330, "-", 111116],
            [5, "信电学院", "学科办", 505, "白梅娟", 1111101656, "-", 111116],
            [6, "矿测学院", "院长", 601, "张安兵", 1111129866, "-", 111119],
            [6, "矿测学院", "学科办主任", 602, "刘海新", 1111186700, "-", 111116],
            [7, "地学院", "院长", 701, "秦身钧", 1111196159, "-", 111112],
            [7, "地学院", "学科办主任", 702, "王春红", 1111150525, "-", 111119],
            [8, "材料学院", "院长", 801, "贺洪江", 1111188892, "-", 111112],
            [8, "材料学院", "副院长", 802, "李萍", 1111148828, "-", 111115],
            [8, "材料学院", "学科办主任", 803, "时真男", 1111188681, "-", 111110],
            [8, "材料学院", "学科办", 804, "刘爱凤", 1111196086, "-", 111110],
            [9, "管商学院", "院长", 901, "王彦林", 1111165046, "-", 111117],
            [9, "管商学院", "学科办主任", 902, "刘志强", 1111159469, "-", 111114],
            [9, "管商学院", "学科办", 903, "徐勇强", 1111153400, "-", 111114],
            [9, "管商学院", "MBA教育中心主任", 904, "赵永刚", 1111189149, "-", 111111],
            [10, "数理学院", "院长", 1001, "郎利影", 1111102008, "-", 111112],
            [10, "数理学院", "副院长", 1002, "王小胜", 1111147682, "-", 111110],
            [10, "数理学院", "学科办主任", 1003, "门高夫", 1111127813, 1111107348, 111117],
            [11, "水电学院", "院长", 1101, "董卫", 1111100698, "-", 111111],
            [11, "水电学院", "副院长", 1102, "路明", 1111176242, "-", 111115],
            [11, "水电学院", "学科办主任", 1103, "屈春来", 1111182546, "-", 111115],
            [11, "水电学院", "学科办", 1104, "张丽", 1111134731, "-", 111119],
            [11, "水电学院", "学科办", 1105, "吴琼", 1111192469, "-", 111119],
            [12, "临床医学院", "副院长", 1201, "田河林", 1111109918, "-", 111110],
            [12, "临床医学院", "学科办主任", 1202, "杨一飞", 1111123456, "-", 111119],
            [12, "临床医学院", "学科办", 1203, "张纪萍", 1111130969, "-", 111119],
            [13, "生态学院", "院长", 1301, "王建书", 1111195392, "-", 111118],
            [13, "生态学院", "副院长", 1302, "王丽萍", 1111161283, "-", 111119],
            [13, "生态学院", "学科办主任", 1303, "陈凯", 1111100531, "-", 111111],
            [13, "生态学院", "学科办", 1304, "刘子英", 1111139232, "-", 111111],
            [14, "生命学院", "院长", 1401, "刘娜", 1111190992, "-", 111116],
            [14, "生命学院", "副院长", 1402, "石玉祥", 1111185092, "-", 111111],
            [14, "生命学院", "学科办主任", 1403, "王永霞", 1111188610, "-", 111116]
        ]
        // $scope.contacts = angular.fromJson(success1);
        document.addEventListener('deviceready', function() {
            $cordovaFile.checkFile(cordova.file.externalRootDirectory, "graduatecontact.json")
                .then(function(success) {
                    $cordovaFile.readAsText(cordova.file.externalRootDirectory, "graduatecontact.json")
                        .then(function(success) {
                            console.log(success);
                            $scope.contacts = angular.fromJson(success);
                        }, function(error) {

                            console.log(error);
                        })
                }, function(error) {
                    console.log(error);
                    $scope.contacts = angular.fromJson(success1);
                })
        });
    }
    getdata();
    // Cantact.all().success(function (data) {
    //     $scope.contacts = data;
    // }).error(function (err) {
    //     console.log(err);
    // });
    var reset = function() {
        var inClass = document.querySelectorAll('.in');
        for (var i = 0; i < inClass.length; i++) {
            inClass[i].classList.remove('in');
            inClass[i].removeAttribute('style');
        }
        var done = document.querySelectorAll('.done');
        for (var j = 0; j < done.length; j++) {
            done[j].classList.remove('done');
            done[j].removeAttribute('style');
        }
        var ionList = document.getElementsByTagName('ion-list');
        for (var k = 0; k < ionList.length; k++) {
            var toRemove = ionList[k].className;
            if (/animate-/.test(toRemove)) {
                ionList[k].className = ionList[k].className.replace(/(?:^|\s)animate-\S*(?:$|\s)/, '');
            }
        }
    };
    $scope.blinds = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-blinds';
        setTimeout(function() {
            ionicMaterialMotion.blinds();
        }, 500);
    };
    $scope.blinds();
    $scope.doRefresh = function() {
        // Cantact.all().success(function (data) {
        //     $scope.contacts = data;
        // }).error(function (err) {
        //     console.log(err);
        // }).finally(function () {
        //     $scope.$broadcast('scroll.refreshComplete');
        // });
        getdata();
        $scope.$broadcast('scroll.refreshComplete');
    }
    $scope.showmodeltel = function showmodeltel(phone) {
        $ionicPopup.show({
            template: '<div class="list"><a class="item item-icon-left" href="tel:' + phone.split('|')[0] + '"><i class="icon ion-iphone"></i>' + phone.split('|')[0] + '</a><a class="item item-icon-left" href="tel:' + phone.split('|')[1] + '"><i class="icon ion-android-call"></i>' + phone.split('|')[1] + '</a></div>',
            title: '请选择号码',
            //subTitle: 'Please use normal things',
            scope: $scope,
            buttons: [{
                text: 'Cancel'
            }]
        });
    }
    $scope.showmodelsms = function showmodelsms(phone) {
        $ionicPopup.show({
            template: '<div class="list"><a class="item item-icon-left" href="sms:' + phone.split('|')[0] + '"><i class="icon ion-iphone"></i>' + phone.split('|')[0] + '</a><a class="item item-icon-left" href="sms:' + phone.split('|')[1] + '"><i class="icon ion-android-call"></i>' + phone.split('|')[1] + '</a></div>',
            title: '请选择号码',
            //subTitle: 'Please use normal things',
            scope: $scope,
            buttons: [{
                text: 'Cancel'
            }]
        });
    }
})

.controller('ChatsCtrl', function($scope, Cantact, $cordovaFile) {
    $scope.department = []; //和前台绑定的数据
    var getdata = function() {
        $scope.department = []; //和前台绑定的数据
        document.addEventListener('deviceready', function() {
            $cordovaFile.checkFile(cordova.file.externalRootDirectory, "graduatecontact.json")
                .then(function(success) {
                    $cordovaFile.readAsText(cordova.file.externalRootDirectory, "graduatecontact.json")

                    .then(function(success) {
                        console.log(success);
                        $scope.success = angular.fromJson(success);
                        $scope.success.forEach(function(user) {
                            if (!_.find($scope.department, { name: user[1] })) {
                                $scope.department.push({ name: user[1], users: [] })
                            }
                            _.find($scope.department, { name: user[1] }).users.push(user);
                        }, this);
                    }, function(error) {
                        console.log(error)

                    })
                }, function(error) {
                    console.log(error);
                    var success1 = [
                        [0, "研究生部", "主任", 1, "赵继军", 13730089923, "-", 8579070],
                        [0, "研究生部", "书记", 2, "张庆桥", 13932016181, "-", 8579076],
                        [0, "研究生部", "副主任", 3, "胡浩云", 13630805116, "-", 8579068],
                        [0, "研究生部", "综合办主任", 4, "白焕海", 13111311716, "-", 8579071],
                        [0, "研究生部", "综合办", 5, "叶润峰", 15831009896, "-", 8577692],
                        [0, "研究生部", "招生办主任", 6, "陈建涛", 18303098598, "-", 8579567],
                        [0, "研究生部", "招生办", 7, "廖薇", 18303096228, "-", 8579072],
                        [0, "研究生部", "培养办主任", 8, "池静", 13303086333, "-", 8579073],
                        [0, "研究生部", "培养办", 9, "刘彦瑞", 13785406435, "-", 8579069],
                        [0, "研究生部", "培养办", 10, "闫立娜", 15231086737, "-", 8579069],
                        [0, "研究生部", "培养办", 11, "王大伟", 13730088893, "-", 8579069],
                        [0, "研究生部", "系统维护", 12, "魏红君", 13832028752, "-", 8577692],
                        [1, "建筑学院", "院长", 101, "吴鹏", 13803101905, "-", 8578702],
                        [1, "建筑学院", "副院长", 102, "邵新刚", 15830013900, "-", 8579682],
                        [1, "建筑学院", "学科办主任", 103, "闫栋", 13803206877, "-", 8577778],
                        [1, "建筑学院", "学科办", 104, "赵邯", 17732087285, "-", 8577778],
                        [2, "土木学院", "院长", 201, "姜新佩", 13603102911, "-", 8578706],
                        [2, "土木学院", "副院长", 202, "孟文清", 13293088860, "-", 8578709],
                        [2, "土木学院", "学科办主任", 203, "吴超", 15373102162, "-", 8579554],
                        [3, "能环学院", "院长", 301, "李思敏", 13832018123, "-", 8578751],
                        [3, "能环学院", "学科办主任", 302, "马丽艳", 18833018808, "-", 8578739],
                        [4, "机械学院", "院长", 401, "李秋生", 13031986262, "-", 8577988],
                        [4, "机械学院", "副院长", 402, "李河宗", 13930072737, "-", 8578726],
                        [4, "机械学院", "学科办主任", 403, "王凯", 15033859229, "-", 8578722],
                        [4, "机械学院", "学科办", 404, "翟志波", 13383300935, "-", 8578722],
                        [5, "信电学院", "院长", 501, "刘心", 18831007799, "-", 8578733],
                        [5, "信电学院", "学科办主任", 502, "安新", 15833108095, "-", 8578746],
                        [5, "信电学院", "学科办", 503, "付佳", 18631066517, "-", 8578746],
                        [5, "信电学院", "学科办", 504, "魏忠诚", 15533079330, "-", 8578746],
                        [5, "信电学院", "学科办", 505, "白梅娟", 13363101656, "-", 8578746],
                        [6, "矿测学院", "院长", 601, "张安兵", 18931029866, "-", 8579519],
                        [6, "矿测学院", "学科办主任", 602, "刘海新", 13932086700, "-", 8577616],
                        [7, "地学院", "院长", 701, "秦身钧", 13931096159, "-", 8577902],
                        [7, "地学院", "学科办主任", 702, "王春红", 15132050525, "-", 8577909],
                        [8, "材料学院", "院长", 801, "贺洪江", 13730088892, "-", 8577962],
                        [8, "材料学院", "副院长", 802, "李萍", 15132048828, "-", 8577965],
                        [8, "材料学院", "学科办主任", 803, "时真男", 13730088681, "-", 8577980],
                        [8, "材料学院", "学科办", 804, "刘爱凤", 18303096086, "-", 8577970],
                        [9, "管商学院", "院长", 901, "王彦林", 18630065046, "-", 8578777],
                        [9, "管商学院", "学科办主任", 902, "刘志强", 13930059469, "-", 8578784],
                        [9, "管商学院", "学科办", 903, "徐勇强", 18617553400, "-", 8578784],
                        [9, "管商学院", "MBA教育中心主任", 904, "赵永刚", 13171789149, "-", 8577981],
                        [10, "数理学院", "院长", 1001, "郎利影", 13903302008, "-", 8578792],
                        [10, "数理学院", "副院长", 1002, "王小胜", 13785047682, "-", 8577750],
                        [10, "数理学院", "学科办主任", 1003, "门高夫", 15931027813, 18832007348, 8579687],
                        [11, "水电学院", "院长", 1101, "董卫", 13930000698, "-", 8573121],
                        [11, "水电学院", "副院长", 1102, "路明", 13831076242, "-", 8573125],
                        [11, "水电学院", "学科办主任", 1103, "屈春来", 13922682546, "-", 8573125],
                        [11, "水电学院", "学科办", 1104, "张丽", 13831034731, "-", 8573129],
                        [11, "水电学院", "学科办", 1105, "吴琼", 13932092469, "-", 8573129],
                        [12, "临床医学院", "副院长", 1201, "田河林", 13653109918, "-", 8575160],
                        [12, "临床医学院", "学科办主任", 1202, "杨一飞", 18631023456, "-", 8575169],
                        [12, "临床医学院", "学科办", 1203, "张纪萍", 18632030969, "-", 8575169],
                        [13, "生态学院", "院长", 1301, "王建书", 13831095392, "-", 8573018],
                        [13, "生态学院", "副院长", 1302, "王丽萍", 13931061283, "-", 8573029],
                        [13, "生态学院", "学科办主任", 1303, "陈凯", 15131000531, "-", 8573011],
                        [13, "生态学院", "学科办", 1304, "刘子英", 13785039232, "-", 8573011],
                        [14, "生命学院", "院长", 1401, "刘娜", 13832090992, "-", 8573016],
                        [14, "生命学院", "副院长", 1402, "石玉祥", 13785085092, "-", 8573021],
                        [14, "生命学院", "学科办主任", 1403, "王永霞", 13730088610, "-", 8573026]
                    ]
                    success1.forEach(function(user) {
                        if (!_.find($scope.department, { name: user[1] })) {
                            $scope.department.push({ name: user[1], users: [] })
                        }
                        _.find($scope.department, { name: user[1] }).users.push(user);
                    }, this);
                    console.log($scope.department)
                })
        })


    }

    $scope.toggleGroup = function(group) {
        group.show = !group.show;
    };
    $scope.isGroupShown = function(group) {
        return group.show;
    };
    $scope.doRefresh = function() {
        getdata();
        // Cantact.all().success(function (data) {
        //     getdata();
        // }).error(function (err) {
        //     console.log(err);
        // }).finally(function () {
        //     $scope.$broadcast('scroll.refreshComplete');
        // });
        $scope.$broadcast('scroll.refreshComplete');
    }
    getdata();
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Cantact, $ionicPopup) {
    document.addEventListener("deviceready", function() {}, false);
    console.log($stateParams);
    $scope.contact = angular.fromJson($stateParams.userid);
    // var userinfo = angular.fromJson($stateParams.userid);
    // var phonearr = [];
    // if (userinfo.Phone.indexOf('|') > 0) {
    //     phonearr = userinfo.Phone.split('|');
    //     userinfo.Phone = phonearr[0];
    //     userinfo.Phone2 = phonearr[1];
    // }
    // userinfo.Department = {};
    // userinfo.Department.Name = $stateParams.depname;
    // userinfo.Department.Phone = $stateParams.depphone;
    // console.log(userinfo);
    // $scope.contact = userinfo;
    // $scope.contact = {};

    // Cantact.get($stateParams.userid).success(function(data) {
    //     var phonearr = [];
    //     if (data.Phone.indexOf('|') > 0) {
    //         phonearr = data.Phone.split('|');
    //         data.Phone = phonearr[0];
    //         data.Phone2 = phonearr[1];
    //     }
    //     $scope.contact = data;
    // })
    $scope.share = function() {
        window.plugins.socialsharing.share($scope.contact[3] + ':' + $scope.contact[4] + '---' + $scope.contact[1]).then(function() {
            console.log('ok');
        }, function() {
            console.log('err');
        });
    }
    $scope.showmodeltel = function showmodeltel() {
        $ionicPopup.show({
            template: '<div class="list"><a class="item item-icon-left"   href="tel:' + $scope.contact[4] + '"><i class="icon ion-iphone"></i>' + $scope.contact[4] + '</a><a class="item item-icon-left" href="tel:' + $scope.contact[5] + '"><i class="icon ion-android-call"></i>' + $scope.contact[5] + '</a></div>',
            title: '请选择号码',
            //subTitle: 'Please use normal things',
            scope: $scope,
            buttons: [{
                text: 'Cancel'
            }]
        });
    }
    $scope.showmodelsms = function showmodelsms() {
        $ionicPopup.show({
            template: '<div class="list"><a class="item item-icon-left" href="sms:' + $scope.contact[5] + '"><i class="icon ion-iphone"></i>' + $scope.contact[5] + '</a><a class="item item-icon-left" href="sms:' + $scope.contact[6] + '"><i class="icon ion-android-call"></i>' + $scope.contact[6] + '</a></div>',
            title: '请选择号码',
            //subTitle: 'Please use normal things',
            scope: $scope,
            buttons: [{
                text: 'Cancel'
            }]
        });
    }
})

.controller('DashDetailCtrl', function($scope, $stateParams, Cantact, $ionicPopup) {
    //console.log($stateParams);
    // if ($scope.contact[5] == '-') {
    //     $scope.contact[5] == false;
    // }
    document.addEventListener("deviceready", function() {}, false);
    $scope.contact = angular.fromJson($stateParams.userid);
    console.log($scope.contact)
        // Cantact.get($stateParams.userid).success(function (data) {
        //     var phonearr = [];
        //     if (data.Phone.indexOf('|') > 0) {
        //         phonearr = data.Phone.split('|');
        //         data.Phone = phonearr[0];
        //         data.Phone2 = phonearr[1];
        //     }
        //     $scope.contact = data;
        // })
    $scope.share = function() {
        window.plugins.socialsharing.share($scope.contact[3] + ':' + $scope.contact[4] + '---' + $scope.contact[1]).then(function() {
            console.log('ok');
        }, function() {
            console.log('err');
        });
    }
    $scope.showmodeltel = function showmodeltel() {
        $ionicPopup.show({
            template: '<div class="list"><a class="item item-icon-left" href="tel:' + $scope.contact[4] + '"><i class="icon ion-iphone"></i>' + $scope.contact[4] + '</a><a class="item item-icon-left" href="tel:' + $scope.contact[5] + '"><i class="icon ion-android-call"></i>' + $scope.contact[5] + '</a></div>',
            title: '请选择号码',
            //subTitle: 'Please use normal things',
            scope: $scope,
            buttons: [{
                text: 'Cancel'
            }]
        });
    }
    $scope.showmodelsms = function showmodelsms() {
        $ionicPopup.show({
            template: '<div class="list"><a class="item item-icon-left" href="sms:' + $scope.contact[5] + '"><i class="icon ion-iphone"></i>' + $scope.contact[5] + '</a><a class="item item-icon-left" href="sms:' + $scope.contact[6] + '"><i class="icon ion-android-call"></i>' + $scope.contact[6] + '</a></div>',
            title: '请选择号码',
            //subTitle: 'Please use normal things',
            scope: $scope,
            buttons: [{
                text: 'Cancel'
            }]
        });
    }
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
        enableFriends: true
    };
});