const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

const poolData = {
	UserPoolId: 'us-east-2_IQjZauYKd', // Your user pool id here
	ClientId: '2bd7vks5mn0no7l1er6v0amjog', // Your client id here
};
const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

let cognitoUser = null;

let accessToken = null;

const getAccessToken = () => {
    return accessToken;
}

const completeUserRegistration = (newPassword, userProfileName, userFullName) => {
    let curPromise = new Promise((resolve, reject) => {
        const attribs = {
            name: userFullName,
            profile: userProfileName
        }
        cognitoUser.completeNewPasswordChallenge(newPassword, attribs,{
            onSuccess: function(sessionResult) {
                resolve("You're now registered");
            },
            onFailure: function(err) {
                reject(err.message || JSON.stringify(err));
            }
        });
    });
    return curPromise;
}

const getUserAttribs = () => {
    let attribPromise = new Promise((resolve, reject) => {
        cognitoUser.getUserAttributes(function(err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
    return attribPromise;
}

const loginUser = (username, password) => {
    let loginPromise = new Promise((resolve, reject) => {
        const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
            Username: username,
            Password: password,
        });
    
        cognitoUser = new AmazonCognitoIdentity.CognitoUser({
            Username: username,
            Pool: userPool,
        });
    
        cognitoUser.authenticateUser(authenticationDetails, {
            newPasswordRequired: function(userAttributes, requiredAttributes) {
                resolve({msg: "Complete your profile before continuing.", profileComplete: false});
            },
            onSuccess: function(result) {
                accessToken = result.getAccessToken().getJwtToken();
                resolve({msg: "Success", profileComplete: true});    
            },
        
            onFailure: function(err) {
                reject(err);
            },
        });
    });

    return loginPromise;
}

const logoutUser = () => {
    if (cognitoUser) {
        cognitoUser.signOut();
        cognitoUser = null;
        console.log("Signed out");
    } else {
        console.log("Not signed in");
    }
    return true;
}

module.exports = {
    loginUser,
    completeUserRegistration,
    getUserAttribs,
    logoutUser,
    getAccessToken
}
