import React from 'react';
import PropTypes from 'prop-types';

export default class FacebookSignIn extends React.Component {
    componentWillMount() {
        this.initFacebookSdk();
        this.loadFacebookSdk();
    }

    onAuthStatusChanged() {
        window.FB.Event.subscribe('auth.statusChange', this.props.onAuthStatusChanged);
    }

    initFacebookSdk() {
        window.fbAsyncInit = () => {
            window.FB.init({
                appId: this.props.appId,
                autoLogAppEvents: true,
                xfbml: true,
                version: 'v2.10'
            });
            window.FB.AppEvents.logPageView();
            this.onAuthStatusChanged();
        };
    }

    loadFacebookSdk() {
        ((d, s, id) => {
            const fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            const js = d.createElement(s);
            js.id = id;
            js.src = `//connect.facebook.net/${this.props.language}/sdk.js`;
            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
    }

    render() {
        return (
            <div
                className="fb-login-button"
                data-max-rows={this.props.showMaxFaces}
                data-size={this.props.buttonSize}
                data-button-type={this.props.buttonTextType}
                data-show-faces={this.props.isShowFaces}
                data-auto-logout-link={this.props.isAutoShowSingOut}
                data-use-continue-as={this.props.isShowSelfFace}
            />
        );
    }
}

FacebookSignIn.propTypes = {
    appId: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    buttonSize: PropTypes.string.isRequired,
    buttonTextType: PropTypes.string.isRequired,
    isShowFaces: PropTypes.bool.isRequired,
    showMaxFaces: PropTypes.number.isRequired,
    isAutoShowSingOut: PropTypes.bool.isRequired,
    isShowSelfFace: PropTypes.bool.isRequired,
    onAuthStatusChanged: PropTypes.func.isRequired,
};
