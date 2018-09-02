function userCard(key) {
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    
    return {
        getCardOptions() {
            return {balance, transactionLimit, historyLogs, key};
        },
        
        putCredits(amount) {
            balance += amount;
            historyLogs.push({
                operationType: 'Received credits',
                credits: amount,
                operationTime: new Date().toLocalString('en-GB')
            });
        },
        
        takeCredits(amount) {
            if (balance >= amount && transactionLimit >= amount) {
                balance -= amount;
                historyLogs.push({
                    operationType: 'Withdrawal of credits',
                    credits: amount,
                    operationTime: new Date().toLocalString('en-GB')
                });
            } else {
                console.log('balance or transaction limit < credits');  
            }
        },
        
        setTransactionLimit(amount) {
            transactionLimit = amount;
            historyLogs.push({
                operationType: 'Transaction limit change',
                credits: amount,
                operationTime: new Date().toLocalString('en-GB')
            });
        },
        
        transferCredits(amount, card) {
            let taxPercent = 0.5;
            let taxMax = 100;
            let transfer = amount;
            let tax = transfer / taxMax * taxPercent;
            let take = transfer + tax;
            
            if (balance >= take && transactionLimit >= take) {
                this.takeCredits(take);
                card.putCredits(transfer);
            } else {
                console.log('balance or transaction limit < credits');
            }
        }
    };
}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this._max = 3;
    }
    
    addCard() {
        if (this._max > this.cards.length) {
            this.cards.push(userCard(this.cards.length + 1)); 
        } else {
            console.log('max cards');
        }
    }
    
    getCardByKey(key) {
        return this.cards[key - 1];
    }
}





















