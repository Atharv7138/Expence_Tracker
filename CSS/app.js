var app = angular.module("expenseApp", []);

app.controller("ExpenseController", function($scope) {

    $scope.transactions = [];

    $scope.newTransaction = {};

    $scope.addTransaction = function() {
        $scope.transactions.push({
            description: $scope.newTransaction.description,
            amount: parseFloat($scope.newTransaction.amount),
            type: $scope.newTransaction.type
        });

        $scope.newTransaction = {};
    };

    $scope.deleteTransaction = function(index) {
        $scope.transactions.splice(index, 1);
    };

    $scope.getBalance = function() {
        var total = 0;
        angular.forEach($scope.transactions, function(t) {
            if (t.type === "income")
                total += t.amount;
            else
                total -= t.amount;
        });
        return total;
    };

});