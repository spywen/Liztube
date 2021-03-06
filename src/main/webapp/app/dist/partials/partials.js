(function(module) {
try {
  module = angular.module('liztube.partial');
} catch (e) {
  module = angular.module('liztube.partial', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('404.html',
    '<div id="notfound">\n' +
    '    <h1 class="pageTitle"><i class="fa fa-exclamation-circle"></i> Page non trouvée - 404</h1>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('liztube.partial');
} catch (e) {
  module = angular.module('liztube.partial', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('home.html',
    '<div id="home">\n' +
    '    <liztube-videos page-title="{{pageTitle}}" order-by="{{orderBy}}" page="{{page}}" pagination="{{pagination}}" user="{{userId}}" q="{{q}}" for="{{for}}"></liztube-videos>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('liztube.partial');
} catch (e) {
  module = angular.module('liztube.partial', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('search.html',
    '<div id="search">\n' +
    '    <liztube-videos page-title="{{pageTitle}}" order-by="{{orderBy}}" page="{{page}}" pagination="{{pagination}}" user="{{userId}}" q="{{q}}" for="{{for}}"></liztube-videos>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('liztube.partial');
} catch (e) {
  module = angular.module('liztube.partial', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('dialogs.html',
    '<md-dialog aria-label="Copier ce lien pour le partager" md-theme="sub-bar" layout="row">\n' +
    '    <form>\n' +
    '        <md-toolbar>\n' +
    '            <div class="md-toolbar-tools">\n' +
    '                <h2><i class="fa fa-link"></i> Copier ce lien pour le partager</h2>\n' +
    '            </div>\n' +
    '        </md-toolbar>\n' +
    '        <md-dialog-content>\n' +
    '            <div>\n' +
    '                <p style="margin: 20px;">{{urlForSharing}}</p>\n' +
    '            </div>\n' +
    '        </md-dialog-content>\n' +
    '        <div class="md-actions" layout="row">\n' +
    '            <md-button class="md-primary" ng-click="cancel()">\n' +
    '                Annuler\n' +
    '            </md-button>\n' +
    '            <md-button class="md-primary" clip-copy="urlForSharing" clip-click="answer()">\n' +
    '                Copier\n' +
    '            </md-button>\n' +
    '        </div>\n' +
    '    </form>\n' +
    '</md-dialog>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('liztube.partial');
} catch (e) {
  module = angular.module('liztube.partial', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('connected.html',
    '<span ng-init="checkUserConnected()">\n' +
    '<span ng-if="type == \'forSideBar\'">\n' +
    '    <span  ng-show="userConnected">\n' +
    '        <div class="colored"></div>\n' +
    '        <div class="panel-header">\n' +
    '            <a href="/profil" class="profile-href"><h1>{{pseudo}}</h1></a>\n' +
    '        </div>\n' +
    '        <div class="clear"></div>\n' +
    '        <div class="panel-footer">\n' +
    '            <a href="/profil" class="profile-href"><gravatar-image class="gr-img"gravatar-email="email" gravatar-size="150" gravatar-default="mm"></gravatar-image></a>\n' +
    '            <md-button class="logout md-warn md-raised" ng-click="logOut(); close()" href="#"><i class="fa fa-sign-out"></i> Déconnexion</md-button>\n' +
    '        </div>\n' +
    '    </span>\n' +
    '    <span ng-hide="userConnected">\n' +
    '        <h1 class="md-toolbar-tools">Menu</h1>\n' +
    '    </span>\n' +
    '</span>\n' +
    '<span ng-if="type == \'forHeaderBar\'">\n' +
    '    <div ng-show="userConnected" class="navbar-header" ng-href="/profil">\n' +
    '        <a href="/profil" class="profile-href">\n' +
    '            <h1>{{pseudo}}</h1>\n' +
    '            <gravatar-image class="gr-img" gravatar-email="email" gravatar-size="150" gravatar-default="mm"></gravatar-image>\n' +
    '        </a>\n' +
    '    </div>\n' +
    '    <div ng-hide="userConnected">\n' +
    '        <md-button class="md-warn btn-padding" href="login"><i class="fa fa-user"></i> Connexion</md-button>\n' +
    '        <md-button class="md-accent btn-padding" href="register"><i class="fa fa-user-plus"></i> Inscription</md-button>\n' +
    '    </div>\n' +
    '</span>\n' +
    '</span>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('liztube.partial');
} catch (e) {
  module = angular.module('liztube.partial', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('footer.html',
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('liztube.partial');
} catch (e) {
  module = angular.module('liztube.partial', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('header.html',
    '<!-- NavBar -->\n' +
    '<div id="header">\n' +
    '<nav>\n' +
    '    <md-toolbar layout="row" layout-align="center center" md-theme="navbar" class="navbar">\n' +
    '        <md-button href="/" aria-label>\n' +
    '            <img src="app/dist/img/logo.png" class="logo"/>\n' +
    '        </md-button>\n' +
    '        <section flex layout="row" layout-align="center center">\n' +
    '            <form ng-submit="search()" flex class="header-padding-input">\n' +
    '                <md-input-container class="md-accent">\n' +
    '                    <label><i class="fa fa-search"></i> Recherche</label>\n' +
    '                    <input placeholder="Rechercher une vidéo" ng-model="query">\n' +
    '                </md-input-container>\n' +
    '            </form>\n' +
    '            <md-button ng-click="toggleRight()" class="btn-size" aria-label>\n' +
    '                <i class="fa fa-bars fa-font-size"></i>\n' +
    '                <span ng-show="showNotification" class="notify">{{notification}}</span>\n' +
    '            </md-button>\n' +
    '            <span>\n' +
    '                <is-connected type="forHeaderBar" id="isConnected"></is-connected>\n' +
    '            </span>\n' +
    '        </section>\n' +
    '\n' +
    '    </md-toolbar>\n' +
    '    <div layout="column" layout-fill md-theme="sub-bar">\n' +
    '        <section layout="row" flex>\n' +
    '            <md-sidenav class="md-sidenav-right md-whiteframe-z2" md-component-id="right">\n' +
    '                <md-toolbar class="md-medium-tall" layout-align="center center">\n' +
    '                    <is-connected type="forSideBar" id="isConnected"></is-connected>\n' +
    '                </md-toolbar>\n' +
    '                <md-content>\n' +
    '                    <h3 class="menu-h3 margin-h3"><i class="fa fa-ellipsis-v"></i> Menu</h3>\n' +
    '                </md-content>\n' +
    '                <md-content flex layout="column" layout-align="start start">\n' +
    '                    <md-button ng-href="/" ng-click="closeRightBar()" class="btn menu-btn"><i class="fa fa-home"></i> Accueil</md-button>\n' +
    '                    <md-button ng-href="/upload" ng-click="closeRightBar()" class="btn menu-btn"><i class="fa fa-video-camera"></i> Uploader une vidéo</md-button>\n' +
    '                    <md-button ng-href="/profil" ng-click="closeRightBar()" class="btn menu-btn"><i class="fa fa-user"></i> Mon profil</md-button>\n' +
    '                </md-content>\n' +
    '                <md-content flex layout="column" layout-align="start start">\n' +
    '                    <h3 class="menu-h3"><i class="fa fa-bell-o"></i><span ng-show="showNotification" class="notify-side-bar">{{notification}}</span> Notifications</h3>\n' +
    '                    <md-content ng-show="noNotification" class="md-padding"><i class="fa fa-bell-slash-o"></i> {{noNotification}}</md-content>\n' +
    '                </md-content>\n' +
    '                <md-content>\n' +
    '                    <upload-video id="uploadVideo"></upload-video>\n' +
    '                </md-content>\n' +
    '            </md-sidenav>\n' +
    '        </section>\n' +
    '    </div>\n' +
    '</nav>\n' +
    '<!-- NavBar -->\n' +
    '\n' +
    '<!-- Breadcrumb -->\n' +
    '<md-toolbar md-theme="sub-bar" layout="row" layout-align="start center" flex class="breadcrumb-bar">\n' +
    '    <md-button href="/" class="margin-right"><i class="fa fa-home"></i> Accueil</md-button>\n' +
    '    <span ng-if="page != \'Home\'" layout="row" layout-align="start center" flex>\n' +
    '        <div><i class="fa fa-chevron-right breadcrumb-cheveron"></i></div>\n' +
    '        <h1 class="md-toolbar-tools"><span data-ng-bind="page"></span></h1>\n' +
    '    </span>\n' +
    '</md-toolbar>\n' +
    '<!-- Breadcrumb -->\n' +
    '\n' +
    '<!-- ProgressBar -->\n' +
    '<md-progress-linear ng-show="isLoading" class="md-warn" md-mode="indeterminate"></md-progress-linear>\n' +
    '<!-- ProgressBar -->\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('liztube.partial');
} catch (e) {
  module = angular.module('liztube.partial', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('login.html',
    '<div id="login">\n' +
    '<div>\n' +
    '    <div layout="column" layout-align="center center" class="login">\n' +
    '        <form class="form-login" ng-submit="submit()"  name="formLogin">\n' +
    '            <md-toolbar class="login-bar md-accent">\n' +
    '                <h2 class="md-toolbar-tools">\n' +
    '                    <span><img src="app/dist/img/favicon.png" width="27px"> Connexion</span>\n' +
    '                </h2>\n' +
    '            </md-toolbar>\n' +
    '            <div class="login-content">\n' +
    '                <md-input-container>\n' +
    '                    <label><i class="fa fa-user"></i> Email ou Pseudo</label>\n' +
    '                    <input type="text" name="username" required ng-model="login"/>\n' +
    '                    <div ng-messages="formLogin.username.$error">\n' +
    '                        <div ng-message="required">L\'email ou le pseudo est requis</div>\n' +
    '                    </div>\n' +
    '                </md-input-container>\n' +
    '                <md-input-container>\n' +
    '                    <label><i class="fa fa-lock"></i> Mot de passe</label>\n' +
    '                    <input type="password" name="password" required ng-model="password">\n' +
    '                    <div ng-messages="formLogin.password.$error">\n' +
    '                        <div ng-message="required">Le mot de passe est requis</div>\n' +
    '                    </div>\n' +
    '                </md-input-container>\n' +
    '            </div>\n' +
    '            <div layout="row" layout-align="end center" class="login-footer">\n' +
    '                <md-button type="submit" class="md-accent md-raised margin-right" ng-disabled="formLogin.$invalid"><i class="fa fa-check"></i> Connexion</md-button>\n' +
    '                <md-button href="/register" class="md-warn md-primary"><i class="fa fa-sign-in"></i> Inscription</md-button>\n' +
    '            </div>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '</div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('liztube.partial');
} catch (e) {
  module = angular.module('liztube.partial', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('dialog.delete.user.html',
    '<md-dialog aria-label="Supression de compte" class="delete-account-dialog">\n' +
    '    <form class="form-daleteAccount" name="formDeleteAccount">\n' +
    '        <md-toolbar class="md-accent">\n' +
    '            <div class="md-toolbar-tools" >\n' +
    '                <h2>Suppression du compte</h2>\n' +
    '                <span flex></span>\n' +
    '                <md-button class="md-icon-button" ng-click="answer(\'not applicable\')">\n' +
    '                    <i class="fa fa-times"></i>\n' +
    '                </md-button>\n' +
    '            </div>\n' +
    '        </md-toolbar>\n' +
    '        <md-dialog-content>\n' +
    '            <div class="content-delete-user">\n' +
    '                <h3>\n' +
    '                    Pour supprimer votre compte veuillez rentrer votre mot de passe.\n' +
    '                </h3>\n' +
    '                <em>Attention la suppression de votre compte entraînera l\'effacement définitif de toutes<br/> les données relatives à votre compte (incluant vos vidéos).</em>\n' +
    '                <md-input-container flex>\n' +
    '                    <label><i class="fa fa-lock"></i> Mot de passe</label>\n' +
    '                    <input type="password" name="password" ng-model="password.password" required>\n' +
    '                    <div ng-messages="formRegister.password.$error">\n' +
    '                        <div ng-message="required">Mot de passe requis</div>\n' +
    '                    </div>\n' +
    '                </md-input-container>\n' +
    '            </div>\n' +
    '        </md-dialog-content>\n' +
    '        <div class="md-actions" layout="row">\n' +
    '            <md-button ng-click="answer()" class="md-primary" ng-disabled="formDeleteAccount.$invalid">\n' +
    '                Valider\n' +
    '            </md-button>\n' +
    '        </div>\n' +
    '    </form>\n' +
    '</md-dialog>');
}]);
})();

(function(module) {
try {
  module = angular.module('liztube.partial');
} catch (e) {
  module = angular.module('liztube.partial', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('profile.html',
    '<div id="profile" ng-init="getUserProfile()">\n' +
    '    <div layout="column" layout-align="center center" class="profile">\n' +
    '        <h1 class="pageTitle">\n' +
    '            <span><img src="app/dist/img/favicon.png" width="27px"> {{profilTitle}}</span>\n' +
    '            <md-button type="submit" ng-click="showAdvanced($event)" class="md-raised md-warn delete-account margin-right" >\n' +
    '                <i class="fa fa-trash-o"></i> Supprimer mon compte\n' +
    '            </md-button>\n' +
    '        </h1>\n' +
    '        <form class="form-profile" name="formupdate-profile">\n' +
    '            <div class="profile-content" ng-init="isDisable= true" >\n' +
    '                <div layout layout-sm="column">\n' +
    '                    <div flex="20">\n' +
    '                        <a href="https://fr.gravatar.com/" target="_blank">\n' +
    '                            <gravatar-image gravatar-email="user.email" gravatar-size="150" gravatar-default="mm"></gravatar-image>\n' +
    '                        </a>\n' +
    '                    </div>\n' +
    '                    <div flex="80">\n' +
    '                        <md-content layout-padding layout="row" layout-sm="column">\n' +
    '                            <md-input-container flex>\n' +
    '                                <label><i class="fa fa-user"></i> Nom</label>\n' +
    '                                <input type="text" name="firstname" ng-model="user.firstname" ng-minlength="1" ng-maxlength="100" ng-disabled="isDisable" required/>\n' +
    '                                <div ng-messages="formupdate-profile.firstname.$error">\n' +
    '                                    <div ng-message="required">Le nom est requis</div>\n' +
    '                                    <div ng-message="minlength">Le nom est trop court</div>\n' +
    '                                    <div ng-message="maxlength">Le nom est trop long</div>\n' +
    '                                </div>\n' +
    '                            </md-input-container>\n' +
    '                            <md-input-container flex>\n' +
    '                                <label><i class="fa fa-user"></i> Prénom</label>\n' +
    '                                <input type="text" name="lastname"  ng-model="user.lastname" ng-minlength="1" ng-maxlength="100" ng-disabled="isDisable" required/>\n' +
    '                                <div ng-messages="formupdate-profile.lastname.$error">\n' +
    '                                    <div ng-message="required">Le prénom est requis</div>\n' +
    '                                    <div ng-message="minlength">Le prénom est trop court</div>\n' +
    '                                    <div ng-message="maxlength">Le prénom est trop long</div>\n' +
    '                                </div>\n' +
    '                            </md-input-container>\n' +
    '                        </md-content>\n' +
    '                        <md-content layout-padding layout="row" layout-sm="column">\n' +
    '                            <md-input-container flex>\n' +
    '                                <label><i class="fa fa-envelope"></i> Email</label>\n' +
    '                                <input type="email" name="email" ng-model="user.email" required email-validation ng-disabled="isDisable" ng-model-options="{ updateOn: \'blur\' }"/>\n' +
    '                                <div ng-messages="formupdate-profile.email.$error">\n' +
    '                                    <div ng-message="required">L\'email est requis</div>\n' +
    '                                    <div ng-message="emailValidation">Email déjà utilisé</div>\n' +
    '                                </div>\n' +
    '                            </md-input-container>\n' +
    '                            <md-input-container flex>\n' +
    '                                <label><i class="fa fa-calendar"></i> Date de naissance</label>\n' +
    '                                <input type="date" name="date_naissance" ng-model="user.birthdate" ng-disabled="isDisable"  date-to-timestamp>\n' +
    '                            </md-input-container>\n' +
    '                        </md-content>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div layout="row" layout-align="end center" class="profile-footer" >\n' +
    '                <md-button ng-href="/majmotdepasse" class="md-accent md-raised margin-right" >\n' +
    '                    <i class="fa fa-check"></i> Mettre à jour le mot de passe\n' +
    '                </md-button>\n' +
    '                <div ng-switch="isDisable">\n' +
    '                    <div ng-switch-when="true">\n' +
    '                        <md-button type="submit" ng-click="enableUpdateProfil()" class="md-accent md-raised margin-right"  >\n' +
    '                            <i class="fa fa-check"></i> Mettre à jour le profil\n' +
    '                        </md-button>\n' +
    '                    </div>\n' +
    '                    <div ng-switch-when="false">\n' +
    '                        <md-button type="submit" ng-click="update()" class="md-accent md-raised margin-right" >\n' +
    '                            <i class="fa fa-check"></i> Mise à jour\n' +
    '                        </md-button>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '            </div>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '    <div id="myVideos">\n' +
    '        <liztube-videos page-title="{{pageTitle}}" order-by="{{orderBy}}" page="{{page}}" pagination="{{pagination}}" user="{{userId}}" q="{{q}}" for="{{for}}"></liztube-videos>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('liztube.partial');
} catch (e) {
  module = angular.module('liztube.partial', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('register.html',
    '<div id="register">\n' +
    '<div>\n' +
    '    <div layout="column" layout-align="center center" class="register">\n' +
    '        <form class="form-register" name="formRegister">\n' +
    '            <md-toolbar class="register-bar md-accent">\n' +
    '                <h2 class="md-toolbar-tools">\n' +
    '                    <span><img src="app/dist/img/favicon.png" width="27px"> Inscription</span>\n' +
    '                </h2>\n' +
    '            </md-toolbar>\n' +
    '            <div class="register-content">\n' +
    '                <div layout layout-sm="column">\n' +
    '                    <md-input-container flex>\n' +
    '                        <label><i class="fa fa-user"></i> Nom</label>\n' +
    '                        <input type="text" name="firstname" ng-model="user.firstname" ng-minlength="1" ng-maxlength="100" required/>\n' +
    '                        <div ng-messages="formRegister.firstname.$error">\n' +
    '                            <div ng-message="required">Le nom est requis</div>\n' +
    '                            <div ng-message="minlength">Le nom est trop court</div>\n' +
    '                            <div ng-message="maxlength">Le nom est trop long</div>\n' +
    '                        </div>\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container flex>\n' +
    '                        <label><i class="fa fa-user"></i> Prénom</label>\n' +
    '                        <input type="text" name="lastname"  ng-model="user.lastname" ng-minlength="1" ng-maxlength="100" required/>\n' +
    '                        <div ng-messages="formRegister.lastname.$error">\n' +
    '                            <div ng-message="required">Le prénom est requis</div>\n' +
    '                            <div ng-message="minlength">Le prénom est trop court</div>\n' +
    '                            <div ng-message="maxlength">Le prénom est trop long</div>\n' +
    '                        </div>\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container flex>\n' +
    '                        <label><i class="fa fa-user"></i> Pseudo</label>\n' +
    '                        <input type="text" name="pseudo" ng-model="user.pseudo" ng-minlength="3" ng-maxlength="50" required pseudo-validation ng-model-options="{ updateOn: \'blur\' }"/>\n' +
    '                        <div ng-messages="formRegister.pseudo.$error">\n' +
    '                            <div ng-message="required">Le pseudo est requis</div>\n' +
    '                            <div ng-message="pseudoValidation">Pseudo déjà utilisé</div>\n' +
    '                            <div ng-message="minlength">Le pseudo est trop court</div>\n' +
    '                            <div ng-message="maxlength">Le pseudo est trop long</div>\n' +
    '                        </div>\n' +
    '                    </md-input-container>\n' +
    '                </div>\n' +
    '                <div layout layout-sm="column">\n' +
    '                    <md-input-container flex>\n' +
    '                        <label><i class="fa fa-envelope"></i> Email</label>\n' +
    '                        <input type="email" name="email" ng-model="user.email" required email-validation ng-model-options="{ updateOn: \'blur\' }"/>\n' +
    '                        <div ng-messages="formRegister.email.$error">\n' +
    '                            <div ng-message="required">L\'email est requis</div>\n' +
    '                            <div ng-message="emailValidation">Email déjà utilisé</div>\n' +
    '                        </div>\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container flex>\n' +
    '                        <label><i class="fa fa-calendar"></i> Date de naissance</label>\n' +
    '                        <input type="date" name="date_naissance" ng-model="user.birthdate" date-to-timestamp>\n' +
    '                        <div ng-messages="formRegister.date_naissance.$error">\n' +
    '                            <div ng-message="dateToTimestamp">La date doit être inférieure à la date d\'aujourd\'hui</div>\n' +
    '                        </div>\n' +
    '                    </md-input-container>\n' +
    '                </div>\n' +
    '                <div layout layout-sm="column">\n' +
    '                    <md-input-container flex>\n' +
    '                        <label><i class="fa fa-lock"></i> Mot de passe</label>\n' +
    '                        <input type="password" name="password" ng-model="user.password" ng-minlength="5" ng-maxlength="50" required>\n' +
    '                        <div ng-messages="formRegister.password.$error">\n' +
    '                            <div ng-message="required">Mot de passe requis</div>\n' +
    '                            <div ng-message="minlength">Le mot de passe est trop court</div>\n' +
    '                            <div ng-message="maxlength">Le mot de passe est trop long</div>\n' +
    '                        </div>\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container flex>\n' +
    '                        <label><i class="fa fa-lock"></i> Confirmation mot de passe</label>\n' +
    '                        <input type="password" name="password_confirm" ng-model="verif.password" required password-verify="user.password">\n' +
    '                        <div ng-messages="formRegister.password_confirm.$error">\n' +
    '                            <div ng-message="required">Mot de passe requis</div>\n' +
    '                            <div ng-message="passwordVerify">Les mots de passe sont différents</div>\n' +
    '                        </div>\n' +
    '                    </md-input-container>\n' +
    '                </div>\n' +
    '                <div layout layout-sm="column">\n' +
    '                    <md-input-container flex>\n' +
    '                        Sexe\n' +
    '                        <md-radio-group ng-model="user.isfemale" required>\n' +
    '                            <md-radio-button ng-value="true"><i class="fa fa-female"></i> Femme</md-radio-button>\n' +
    '                            <md-radio-button ng-value="false"><i class="fa fa-male"></i>  Homme </md-radio-button>\n' +
    '                        </md-radio-group>\n' +
    '                    </md-input-container>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div layout="row" layout-align="end center" class="register-footer">\n' +
    '                <md-button type="submit" ng-click="register()" class="md-accent md-raised margin-right" ng-disabled="formRegister.$invalid"><i class="fa fa-check"></i> Inscription</md-button>\n' +
    '                <md-button href="/login" class="md-warn md-primary"><i class="fa fa-sign-in"></i> Connexion</md-button>\n' +
    '            </div>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '</div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('liztube.partial');
} catch (e) {
  module = angular.module('liztube.partial', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('updatepassword.html',
    '<div id="update-password">\n' +
    '    <div layout="column" layout-align="center center" class="update-password">\n' +
    '        <form class="form-update-password" name="formUpdatePassword">\n' +
    '            <md-toolbar class="update-password-bar md-accent">\n' +
    '                <h2 class="md-toolbar-tools">\n' +
    '                    <span><img src="app/dist/img/favicon.png" width="27px"> Mise à jour du mot de passe</span>\n' +
    '                </h2>\n' +
    '            </md-toolbar>\n' +
    '            <div class="update-password-content">\n' +
    '                <div layout layout-sm="row">\n' +
    '                    <md-input-container flex>\n' +
    '                        <label><i class="fa fa-lock"></i> Ancien mot de passe</label>\n' +
    '                        <input type="password" name="oldPassword" ng-model="password.oldPassword" required>\n' +
    '                        <div ng-messages="formUpdatePassword.oldPassword.$error">\n' +
    '                            <div ng-message="required">Mot de passe requis</div>\n' +
    '                        </div>\n' +
    '                </div>\n' +
    '                <div layout layout-sm="row">\n' +
    '                    <md-input-container flex>\n' +
    '                        <label><i class="fa fa-lock"></i> Mot de passe</label>\n' +
    '                        <input type="password" name="newPassword" ng-model="password.newPassword" ng-minlength="5" ng-maxlength="50" required>\n' +
    '                        <div ng-messages="formUpdatePassword.newPassword.$error">\n' +
    '                            <div ng-message="required">Mot de passe requis</div>\n' +
    '                            <div ng-message="minlength">Le mot de passe est trop court</div>\n' +
    '                            <div ng-message="maxlength">Le mot de passe est trop long</div>\n' +
    '                        </div>\n' +
    '                </div>\n' +
    '                <div layout layout-sm="row">\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container flex>\n' +
    '                        <label><i class="fa fa-lock"></i> Confirmation mot de passe</label>\n' +
    '                        <input type="password" name="password_confirm" ng-model="verify.password" ng-minlength="5" ng-maxlength="50"  required password-verify="password.newPassword">\n' +
    '                        <div ng-messages="formUpdatePassword.password_confirm.$error">\n' +
    '                            <div ng-message="required">Mot de passe requis</div>\n' +
    '                            <div ng-message="minlength">Le mot de passe est trop court</div>\n' +
    '                            <div ng-message="maxlength">Le mot de passe est trop long</div>\n' +
    '                            <div ng-message="passwordVerify">Les mots de passe sont différents</div>\n' +
    '                        </div>\n' +
    '                    </md-input-container>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            <div layout="row" layout-align="end center" class="update-password-footer">\n' +
    '                <md-button type="submit" ng-click="update()" class="md-accent md-raised margin-right" ng-disabled="formUpdatePassword.$invalid"><i class="fa fa-check"></i> Mise à jour</md-button>\n' +
    '            </div>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('liztube.partial');
} catch (e) {
  module = angular.module('liztube.partial', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('videosDirective.html',
    '<div id="liztubeVideos" on-size-changed>\n' +
    '    <h1 class="pageTitle" ng-if="pageTitle"><i class="fa fa-video-camera"></i> {{pageTitle}}\n' +
    '        <div class="filter" ng-show="showSelectVideos">\n' +
    '            <md-select placeholder="Suggestions Liztube" ng-model="filterOrderBy" ng-change="filter(filterOrderBy)">\n' +
    '                <md-option value="1">Suggestions Liztube</md-option>\n' +
    '                <md-option value="2">Les plus récentes</md-option>\n' +
    '                <md-option value="3">Les plus vues</md-option>\n' +
    '                <md-option value="4">Les plus partagées</md-option>\n' +
    '            </md-select>\n' +
    '        </div>\n' +
    '    </h1>\n' +
    '    <h3 class="text-center" ng-if="noVideoFound"><i class="fa fa-video-camera"></i> {{noVideoFound}}</h3>\n' +
    '    <md-content layout="row" layout-wrap class="videosList" infinite-scroll>\n' +
    '        <div flex="{{flexSize}}" ng-repeat="video in videos" class="videos">\n' +
    '            <a href="/watch/{{video.key}}">\n' +
    '                <div class="thumb">\n' +
    '                    <md-tooltip ng-if="video.public && showConfidentiality">\n' +
    '                        La vidéo est publique.\n' +
    '                    </md-tooltip>\n' +
    '                    <md-tooltip ng-if="!video.public && video.publicLink && showConfidentiality">\n' +
    '                        La vidéo est disponible<br/> uniquement par lien.\n' +
    '                    </md-tooltip>\n' +
    '                    <md-tooltip ng-if="!video.public && !video.publicLink && showConfidentiality">\n' +
    '                        La vidéo est privée.\n' +
    '                    </md-tooltip>\n' +
    '                    <img ng-src="/api/video/thumbnail/{{video.key}}?width=640&height=360" alt="" />\n' +
    '                    <div class="time">{{video.duration | formatTime}}</div>\n' +
    '                    <div class="confidentiality" ng-show="showConfidentiality">\n' +
    '                        <span ng-show="video.public" class="public">\n' +
    '                            <i class="fa fa-check-circle"></i>\n' +
    '                        </span>\n' +
    '                        <span ng-if="!video.public && video.publicLink" class="link">\n' +
    '                            <i class="fa fa-link"></i>\n' +
    '                        </span>\n' +
    '                        <span ng-if="!video.public && !video.publicLink" class="private">\n' +
    '                            <i class="fa fa-minus-circle"></i>\n' +
    '                        </span>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <h2>\n' +
    '                    {{video.title | limitTo:29}}\n' +
    '                    <span ng-if="video.title.length > 29">...</span>\n' +
    '                </h2>\n' +
    '                <p>de\n' +
    '                    <span>{{video.ownerPseudo | limitTo:35}}</span>\n' +
    '                    <span ng-if="video.ownerPseudo.length > 35">...</span>\n' +
    '                </p>\n' +
    '                <span class="view">{{video.views}} vue(s) . {{video.creationDate | date:\'dd/MM/yyyy\'}}</span>\n' +
    '            </a>\n' +
    '        </div>\n' +
    '    </md-content>\n' +
    '    <div ng-show="videosLoading">\n' +
    '        <p class="videos-loading">Chargement ...</p>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('liztube.partial');
} catch (e) {
  module = angular.module('liztube.partial', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('watch.html',
    '<div id="watch" ng-init="getVideoDesc()" >\n' +
    '    <div class="video-container">\n' +
    '        <videogular vg-theme="config.theme" class="videogular-container">\n' +
    '            <vg-media vg-src="config.sources"\n' +
    '                      vg-tracks="config.tracks">\n' +
    '            </vg-media>\n' +
    '\n' +
    '            <vg-controls>\n' +
    '                <vg-play-pause-button></vg-play-pause-button>\n' +
    '                <vg-time-display>{{ currentTime | date:\'mm:ss\' }}</vg-time-display>\n' +
    '                <vg-scrub-bar>\n' +
    '                    <vg-scrub-bar-current-time></vg-scrub-bar-current-time>\n' +
    '                </vg-scrub-bar>\n' +
    '                <vg-time-display>{{ timeLeft | date:\'mm:ss\' }}</vg-time-display>\n' +
    '                <vg-volume>\n' +
    '                    <vg-mute-button></vg-mute-button>\n' +
    '                    <vg-volume-bar></vg-volume-bar>\n' +
    '                </vg-volume>\n' +
    '                <vg-playback-button></vg-playback-button>\n' +
    '                <vg-fullscreen-button></vg-fullscreen-button>\n' +
    '\n' +
    '            </vg-controls>\n' +
    '\n' +
    '            <vg-overlay-play></vg-overlay-play>\n' +
    '            <vg-poster vg-url=\'config.plugins.poster\'></vg-poster>\n' +
    '        </videogular>\n' +
    '\n' +
    '        <div ng-switch="isEnableEditingVideo">\n' +
    '            <div class="video-infos" layout="row" ng-switch-when="false" layout-wrap>\n' +
    '                <h1>{{videoDesc.title}}</h1>\n' +
    '                <div class="clear"></div>\n' +
    '                <div flex="50">\n' +
    '                    <a href="/search/{{videoDesc.ownerPseudo}}" class="owner">\n' +
    '                        <gravatar-image gravatar-email="videoDesc.ownerEmail" gravatar-size="50" gravatar-default="mm"/>\n' +
    '                        <span>{{videoDesc.ownerPseudo}}</span>\n' +
    '                    </a>\n' +
    '                </div>\n' +
    '                <span flex="50"  class="nb-view">\n' +
    '                    Nombre de vue(s) : {{videoDesc.views}}<br/>\n' +
    '                    Date de publication : {{videoDesc.creationDate | date:\'dd/MM/yyyy\'}}\n' +
    '                </span>\n' +
    '                <div ng-if="editVideo" flex="100">\n' +
    '                    <md-button   class="md-accent md-raised watch-btn" ng-click="enableEditVideo()">\n' +
    '                        <i class="fa fa-pencil-square-o"></i> Modifier\n' +
    '                    </md-button>\n' +
    '                    <md-button ng-if="videoDesc.public || videoDesc.publicLink" class="md-accent md-raised watch-btn" ng-click="showLink($event)">\n' +
    '                        <i class="fa fa-share"></i> Partager\n' +
    '                    </md-button>\n' +
    '                </div>\n' +
    '                <div class="description" layout="row" layout-wrap>\n' +
    '                    <h2>Description\n' +
    '\n' +
    '                        <input type="hidden" data-ng-model="urlForSharing"/>\n' +
    '\n' +
    '                    </h2>\n' +
    '                    <p>{{videoDesc.description}}</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <form class="form-update" name="formUpdate" ng-switch-when="true">\n' +
    '                <div class="video-infos" layout="row"  layout-wrap>\n' +
    '                    <div class="description" layout="row" layout-wrap>\n' +
    '                        <h2>Edition\n' +
    '\n' +
    '                        </h2>\n' +
    '                        <div class="justify">\n' +
    '                            <md-input-container>\n' +
    '                                <label><i class="fa fa-video-camera"></i> Titre</label>\n' +
    '                                <input type="text" name="title" required="required" md-maxlength="300" ng-model="videoDesc.title"/>\n' +
    '                                <div ng-messages="formUpdate.title.$error">\n' +
    '                                    <div ng-message="required">Le titre est requis</div>\n' +
    '                                    <div ng-message="md-maxlength">Le titre ne doit pas dépasser 300 caractères</div>\n' +
    '                                </div>\n' +
    '                            </md-input-container>\n' +
    '                        </div>\n' +
    '                        <div class="justify">\n' +
    '                            <md-input-container>\n' +
    '                                <label><i class="fa fa-newspaper-o"></i> Description</label>\n' +
    '                                <textarea ng-model="videoDesc.description" name="description" required="required" columns="1" md-maxlength="1000"></textarea>\n' +
    '                                <div ng-messages="formUpdate.description.$error">\n' +
    '                                    <div ng-message="required">La description est requise</div>\n' +
    '                                    <div ng-message="md-maxlength">La description ne doit pas dépasser 1000 caractères</div>\n' +
    '                                </div>\n' +
    '                            </md-input-container>\n' +
    '                        </div>\n' +
    '                        <div>\n' +
    '                            <div layout="column" layout-align="center center">\n' +
    '                                <h4 class="no-margin">Sélectionner le niveau de confidentialité :</h4>\n' +
    '                                <md-radio-group class="no-margin md-primary" name="confidentiality" ng-model="videoDesc.confidentiality" required="required" aria-label="confidentiality"  layout="row" layout-align="center center">\n' +
    '                                    <md-radio-button value="1">Publique</md-radio-button>\n' +
    '                                    <md-radio-button value="0">Privé</md-radio-button>\n' +
    '                                    <md-radio-button value="2">\n' +
    '                                        Disponible uniquement par lien\n' +
    '                                        <md-tooltip>\n' +
    '                                            Seules les personnes disposant<br/>du lien de la vidéo pourront<br/> y accèder. Option modifiable<br/> une fois la vidéo uploadée.\n' +
    '                                        </md-tooltip>\n' +
    '                                    </md-radio-button>\n' +
    '                                </md-radio-group>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        <p>\n' +
    '                            <md-button class="md-accent md-raised showLink" ng-click="updateVideoDesc()" ng-disabled="formUpdate.$invalid">\n' +
    '                                <i class="fa fa-pencil-square-o"></i> Mettre à jour\n' +
    '                            </md-button>\n' +
    '                        </p>\n' +
    '                    </div>\n' +
    '\n' +
    '                </div>\n' +
    '            </form>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('liztube.partial');
} catch (e) {
  module = angular.module('liztube.partial', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('uploadVideo.html',
    '<div id="uploadVideo" ng-repeat="notification in notifications.infos">\n' +
    '        <div ng-show="notification.uploadRate <= 99" class="download-not-end">\n' +
    '            <h4><i class="fa fa-upload"></i> {{notification.fileName}}</h4>\n' +
    '            <md-progress-linear class="md-primary margin-bottom" md-mode="determinate" value="{{notification.uploadRate}}"></md-progress-linear>\n' +
    '            <md-button class="pull-right" ng-click="hideProgressBar($index)"><i class="fa fa-close"></i></md-button>\n' +
    '            <div class="pull-left">{{notification.percent}}</div>\n' +
    '        </div>\n' +
    '        <div ng-show="notification.uploadRate == 100" class="download-end">\n' +
    '            <a ng-href="/watch/{{notification.videoKey}}" ng-click="hideProgressBar($index)">\n' +
    '                <md-button class="hideProgressBar" ng-click="hideProgressBar($index)"><i class="fa fa-close"></i></md-button>\n' +
    '                <h4><i class="fa fa-check-circle"></i> {{notification.fileName}}</h4>\n' +
    '                <img ng-src="/api/video/thumbnail/{{notification.videoKey}}?width=320&height=180" alt="" />\n' +
    '            </a>\n' +
    '        </div>\n' +
    '        <div class="clear"></div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('liztube.partial');
} catch (e) {
  module = angular.module('liztube.partial', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('upload.html',
    '<div id="upload">\n' +
    '    <div>\n' +
    '        <div layout="column" layout-align="center center" class="login">\n' +
    '            <form class="form-upload" name="formUpload">\n' +
    '                <md-toolbar class="upload-bar md-accent">\n' +
    '                    <h2 class="md-toolbar-tools">\n' +
    '                        <span><img src="app/dist/img/favicon.png" width="27px"> Uploader une vidéo</span>\n' +
    '                    </h2>\n' +
    '                </md-toolbar>\n' +
    '                <div>\n' +
    '                    <md-input-container>\n' +
    '                        <label><i class="fa fa-video-camera"></i> Titre</label>\n' +
    '                        <input type="text" name="title" required="required" md-maxlength="300" ng-model="video.title"/>\n' +
    '                        <div ng-messages="formUpload.title.$error">\n' +
    '                            <div ng-message="required">Le titre est requis</div>\n' +
    '                            <div ng-message="md-maxlength">Le titre ne doit pas dépasser 300 caractères</div>\n' +
    '                        </div>\n' +
    '                    </md-input-container>\n' +
    '                    <md-input-container>\n' +
    '                        <label><i class="fa fa-newspaper-o"></i> Description</label>\n' +
    '                        <textarea ng-model="video.description" name="description" required="required" columns="1" md-maxlength="1000"></textarea>\n' +
    '                        <div ng-messages="formUpload.description.$error">\n' +
    '                            <div ng-message="required">La description est requise</div>\n' +
    '                            <div ng-message="md-maxlength">La description ne doit pas dépasser 1000 caractères</div>\n' +
    '                        </div>\n' +
    '                    </md-input-container>\n' +
    '                    <div layout="column" layout-align="center center">\n' +
    '                        <h4 class="no-margin">Sélectionner le niveau de confidentialité :</h4>\n' +
    '                        <md-radio-group class="no-margin md-primary" name="confidentiality" ng-model="video.confidentiality" required="required" aria-label="confidentiality"  layout="row" layout-align="center center">\n' +
    '                            <md-radio-button value="1">Publique</md-radio-button>\n' +
    '                            <md-radio-button value="0">Privé</md-radio-button>\n' +
    '                            <md-radio-button value="2">\n' +
    '                                Disponible uniquement par lien\n' +
    '                                <md-tooltip>\n' +
    '                                    Seules les personnes disposant<br/>du lien de la vidéo pourront<br/> y accèder. Option modifiable<br/> une fois la vidéo uploadée.\n' +
    '                                </md-tooltip>\n' +
    '                            </md-radio-button>\n' +
    '                        </md-radio-group>\n' +
    '                        <div ng-messages="formUpload.confidentiality.$error">\n' +
    '                            <div ng-message="required">Le niveau de confidentialité est requis</div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    <h4>Sélectionner une vidéo ou glisser/déposer :</h4>\n' +
    '                    <md-input-container md-theme="sub-bar" >\n' +
    '                        <md-button class="md-primary md-raised" name="file"  aria-label="uploadVideo" ng-model-rejected="rejFiles" ng-file-select ng-model="video.files" ng-multiple="false"><i class="fa fa-video-camera"></i> Sélectionner une vidéo</md-button>\n' +
    '                    </md-input-container>\n' +
    '                    <span ng-if="fileName != \'\'" class="bold"><i class="fa fa-file-video-o"></i> Vidéo sélectionnée : {{fileName}}</span>\n' +
    '                    <md-input-container>\n' +
    '                        <div ng-file-drop class="drop-box" name="file" ng-multiple="false" allow-dir="true" ng-model-rejected="rejFiles" ng-model="video.files">Glisser/déposer la vidéo ici</div>\n' +
    '                        <div ng-no-file-drop>Le glisser/déposer n\'est pas supporté par votre naviguateur.</div>\n' +
    '                    </md-input-container>\n' +
    '                </div>\n' +
    '                <div layout="row" layout-align="end center" class="login-footer">\n' +
    '                    <md-button type="submit" ng-click="submit()" class="md-accent md-raised margin-right" ng-disabled="formUpload.$invalid"><i class="fa fa-check"></i> Uploader</md-button>\n' +
    '                </div>\n' +
    '            </form>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();
