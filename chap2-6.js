var relationship1 = {
    name: 'zero',
    friends: [ 'nero', 'hero', 'xero'],
    logFriends: function () {
        var that = this;
        this.friends.forEach(function(friend) {
                console.log(that.name, friend);
            });
        },
};
relationship1.logFriends();

const relationship2 = {
    name: 'zero',
    friend: ['nero', 'hero' , 'xero'],
    logFriends() {
        this.friend.forEach (friend => {
            console.log(this.name, frined);
        });
    },
};
relationship2.logFriends();