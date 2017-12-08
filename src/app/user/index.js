import defaultSignature from './directives/defaultSignature';
import humanVerification from './directives/humanVerification';
import signupCreationProcess from './directives/signupCreationProcess';
import signupHumanForm from './directives/signupHumanForm';
import signupLink from './directives/signupLink';
import signupPayForm from './directives/signupPayForm';
import signupStepLink from './directives/signupStepLink';
import signupUserForm from './directives/signupUserForm';
import usernameDomain from './directives/usernameDomain';
import usernamePassword from './directives/usernamePassword';
import generateKeyModel from './factories/generateKeyModel';
import signatureModel from './factories/signatureModel';
import generateModal from './modals/generateModal';
import attachSignupSubscription from './services/attachSignupSubscription';
import isDelinquent from './services/isDelinquent';
import manageUser from './services/manageUser';
import signupModel from './services/signupModel';
import signupUserProcess from './services/signupUserProcess';

export default angular
    .module('proton.user', [])
    .directive('defaultSignature', defaultSignature)
    .directive('humanVerification', humanVerification)
    .directive('signupCreationProcess', signupCreationProcess)
    .directive('signupHumanForm', signupHumanForm)
    .directive('signupLink', signupLink)
    .directive('signupPayForm', signupPayForm)
    .directive('signupStepLink', signupStepLink)
    .directive('signupUserForm', signupUserForm)
    .directive('usernameDomain', usernameDomain)
    .directive('usernamePassword', usernamePassword)
    .factory('generateKeyModel', generateKeyModel)
    .factory('signatureModel', signatureModel)
    .factory('generateModal', generateModal)
    .factory('attachSignupSubscription', attachSignupSubscription)
    .factory('isDelinquent', isDelinquent)
    .factory('manageUser', manageUser)
    .factory('signupModel', signupModel)
    .factory('signupUserProcess', signupUserProcess).name;
